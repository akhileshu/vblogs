import { allPrismaModels } from "./src/shared/utils/allPrismaModels.js";
import changeCase from "change-case";

export default function plop(/** @type {import('plop').NodePlopAPI} */ plop) {
  const currentPath = process.env.INIT_CWD;
  plop.setHelper("kebab-case", (text) => changeCase.paramCase(text));
  plop.setHelper("camelCase", (text) => changeCase.camelCase(text));
  plop.setHelper("PascalCase", (text) => changeCase.pascalCase(text));
  plop.setHelper("snake_case", (text) => changeCase.snakeCase(text));
  plop.setHelper("sentence-case", (text) => changeCase.sentenceCase(text));

  const templateBasePaths = {
    prismaHandlers: "./plop/templates/prisma-handlers",
    prismaServices: "./plop/templates/prisma-services",
    reactNextjs: "./plop/templates/react-nextjs",
    e2eTesting:"./plop/templates/e2e-testing"
  };
  const outputBasePaths = {
    prismaServices: "src/services/prisma",
    prismaHandlers: "src/server-actions/prisma-handlers",
    e2eTesting:"cypress/e2e"
  };

  const createModelActions = (
    model,
    templateBasePath,
    outputBasePath,
    fileSuffixes
  ) =>
    fileSuffixes.map((suffix) => ({
      type: "add",
      path: `${outputBasePath}/{{kebab-case model}}/${suffix}.ts`,
      templateFile: `${templateBasePath}/${suffix.replace(
        "{{kebab-case model}}",
        "model"
      )}.ts.hbs`,
      data: { model },
      abortOnFail: false, // Continue even if one action fails
    }));

  plop.setGenerator("prisma-model-services", {
    description: "Generate Prisma model services",
    prompts: [],
    actions: () => {
      const models = allPrismaModels();
      return models.flatMap((model) =>
        createModelActions(
          model,
          templateBasePaths.prismaServices,
          outputBasePaths.prismaServices,
          [
            "{{kebab-case model}}-service",
            "create-{{kebab-case model}}",
            "update-{{kebab-case model}}",
            "delete-{{kebab-case model}}",
            "get-{{kebab-case model}}-by-id",
            "get-all-{{kebab-case model}}s",
          ]
        )
      );
    },
  });

  plop.setGenerator("prisma-model-handlers", {
    description: "Generate Prisma model handlers",
    prompts: [],
    actions: () => {
      const models = allPrismaModels();
      return models.flatMap((model) =>
        createModelActions(
          model,
          templateBasePaths.prismaHandlers,
          outputBasePaths.prismaHandlers,
          [
            "index",
            "create-{{kebab-case model}}",
            "update-{{kebab-case model}}",
            "delete-{{kebab-case model}}",
            "get-{{kebab-case model}}-by-id",
            "get-all-{{kebab-case model}}s",
          ]
        )
      );
    },
  });

  plop.setGenerator("append-cached-handler", {
    description: "Generate cached handler for fetch handlers",
    prompts: [
      {
        type: "input",
        name: "model",
        message: "Enter the model name (e.g., User):",
      },
      {
        type: "input",
        name: "action",
        message: "Enter the action name (e.g., getWatchedVideosByUserId):",
      },
    ],
    actions: (data) => [
      {
        type: "append",
        path: `${outputBasePaths.prismaHandlers}/{{kebab-case model}}/{{kebab-case action}}.ts`,
        pattern: /(\/\/ End of handler)/,
        templateFile: `${templateBasePaths.prismaHandlers}/cached-handler.ts.hbs`,
        data: { cachedAction: data.action.replace(/^get/i, "getCached") },
      },
    ],
  });

  plop.setGenerator("prisma-handler-&-service-by-name", {
    description:
      "Generate Prisma handler, service, and optional cached handler",
    prompts: [
      {
        type: "input",
        name: "model",
        message: "Enter the model name (e.g., User):",
      },
      {
        type: "input",
        name: "action",
        message: "Enter the action name (e.g., getWatchedVideosByUserId):",
      },
      {
        type: "confirm",
        name: "withCachedHandler",
        message: "Do you want to add a cached handler?",
        default: false,
      },
    ],
    actions: (data) => {
      const actions = [
        //handler
        //create handler
        {
          type: "add",
          path: `${outputBasePaths.prismaHandlers}/{{kebab-case model}}/{{kebab-case action}}.ts`,
          templateFile: `${templateBasePaths.prismaHandlers}/custom-handler.ts.hbs`,
          abortOnFail: false,
        },
        //create index file if dont exist , then append export in index
        {
          type: "add",
          path: `${outputBasePaths.prismaHandlers}/{{kebab-case model}}/index.ts`,
          template: "", // Create index.ts if it doesn't exist
          abortOnFail: false,
        },
        {
          type: "append",
          path: `${outputBasePaths.prismaHandlers}/{{kebab-case model}}/index.ts`,
          template: `export { {{camelCase action}}Handler } from './{{kebab-case action}}';`,
        },
        //service
        //append method in class
        {
          /* 
          Appends a method to the class if the service file already exists.
          Bug: If the service file does not exist, the method gets appended twice - once during the "add" action and again during the "append" action.
          Fix: The "append" action is executed before the "add" action. This ensures that appending does not occur if the class is being newly created, 
          as the "add" action will handle the creation of the new service file in the next step.
          */
          type: "append",
          path: `${outputBasePaths.prismaServices}/{{kebab-case model}}/{{kebab-case model}}-service.ts`,
          pattern: /\/\/ <AUTO-GENERATED METHODS>/, // Use a comment or pattern as a placeholder
          template: `
            async {{camelCase action}}(data: any) {
              await this.beforeAction("{{camelCase action}}", data);
              const result = await {{camelCase action}}(this.prisma, data);
              await this.afterAction("{{camelCase action}}", result);
              return result;
            }`,
          abortOnFail: false,
        },
        // Create class file if it doesn’t exist
        {
          type: "add",
          path: `${outputBasePaths.prismaServices}/{{kebab-case model}}/{{kebab-case model}}-service.ts`,
          templateFile: `${templateBasePaths.prismaServices}/custom-service.ts.hbs`,
          abortOnFail: false,
        },

        //create method file
        {
          type: "add",
          path: `${outputBasePaths.prismaServices}/{{kebab-case model}}/{{kebab-case action}}.ts`,
          templateFile: `${templateBasePaths.prismaServices}/custom-method.ts.hbs`,
          abortOnFail: false, // Continue even if this action fails
        },
      ];

      if (data.withCachedHandler) {
        actions.push({
          type: "append",
          path: `${outputBasePaths.prismaHandlers}/{{kebab-case model}}/{{kebab-case action}}.ts`,
          pattern: /(\/\/ End of handler)/,
          templateFile: `${templateBasePaths.prismaHandlers}/cached-handler.ts.hbs`,
          data: { cachedAction: data.action.replace(/^get/i, "getCached") },
        });
      }

      return actions;
    },
  });

  plop.setGenerator("generate-react-nextjs", {
    description: "Generate different types of files",
    prompts: [
      {
        type: "list",
        name: "fileType",
        message: "Select the type of file to generate:",
        choices: [
          { name: "Functional Component", value: "component" },
          { name: "Nextjs page route", value: "nextjsPageRoute" },
          { name: "Function", value: "function" },
          { name: "Context with Provider", value: "contextWithProvider" },
          { name: "Custom Hook", value: "customHook" },
          { name: "Mutation Form Component", value: "mutationForm" },
          { name: "Data Renderer Component", value: "dataRenderer" },
        ],
      },
      {
        type: "input",
        name: "names",
        message:
          //improvement : added csv as input feature for multiple file generations
          "Enter a comma-separated list of names (e.g., Button, Card, Form):",
      },
    ],
    actions: (data) => {
      const { fileType } = data;
      const names = data.names.split(",").map((name) => name.trim());

      const config = (name) => {
        return {
          component: {
            templateFile: `${templateBasePaths.reactNextjs}/functional-component.tsx.hbs`,
            outputSubPath: "components",
            data: { name },
          },
          function: {
            templateFile: `${templateBasePaths.reactNextjs}/function.ts.hbs`,
            outputSubPath: "utils",
            data: { name },
          },
          contextWithProvider: {
            templateFile: `${templateBasePaths.reactNextjs}/context-api-provider.tsx.hbs`,
            outputSubPath: "context",
            data: { contextName: name, name },
          },
          customHook: {
            templateFile: `${templateBasePaths.reactNextjs}/useCustomHook.ts.hbs`,
            outputSubPath: "hooks",
            data: { name },
          },
          mutationForm: {
            templateFile: `${templateBasePaths.reactNextjs}/mutation-form.tsx.hbs`,
            outputSubPath: "components",
            data: { action: name, name },
          },
          dataRenderer: {
            templateFile: `${templateBasePaths.reactNextjs}/data-renderer.tsx.hbs`,
            outputSubPath: "components",
            data: { action: name, name },
          },
          nextjsPageRoute: {
            templateFile: `${templateBasePaths.reactNextjs}/nextjs-page-route.tsx.hbs`,
            data: { name },
          },
        };
      };

      const actions = names.map((name) => {
        const { data, outputSubPath, templateFile } = config(name)[fileType];
        const path =
          fileType === "nextjsPageRoute"
            ? `${currentPath}/{{kebab-case name}}/page.tsx`
            : `${currentPath}/${outputSubPath}/{{kebab-case name}}.tsx`;
        return {
          type: "add",
          path,
          templateFile,
          data,
        };
      });

      return actions;
    },
  });

  plop.setGenerator("generate-test-templates", {
    description: "generate tests temlates for cy,vitest etc",
    prompts: [
      {
        type: "list",
        name: "fileType",
        message: "Select test type to generate:",
        choices: [{ name: "cypress e2e test file", value: "cyE2e" }],
      },
      {
        type: "input",
        name: "names",
        message:
          "Enter a comma-separated list of names (e.g., course-page, complete-lesson-button):",
      },
    ],
    actions: (data) => {
      const { fileType } = data;
      const names = data.names.split(",").map((name) => name.trim());

      const config = (name) => {
        return {
          cyE2e: {
            templateFile: `${templateBasePaths.e2eTesting}/base.cy.ts.hbs`,
            data: { name },
            path:`${outputBasePaths.e2eTesting}/{{kebab-case name}}.cy.ts`,
          },
        };
      };
      const actions = names.map((name) => {
        const { data, path, templateFile } = config(name)[fileType];

        return {
          type: "add",
          path,
          templateFile,
          data,
        };
      });

      return actions;
    },
  });
}
