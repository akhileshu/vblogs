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
  };
  const outputBasePaths = {
    prismaServices: "src/services/prisma",
    prismaHandlers: "src/server-actions/prisma-handlers",
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
      const models = ["video", "videoSection"];
      // const models = allPrismaModels();
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
      // const models = allPrismaModels();
      const models = ["video", "videoSection"];
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
          { name: "Function", value: "function" },
          { name: "Context with Provider", value: "contextWithProvider" },
          { name: "Custom Hook", value: "customHook" },
          { name: "Mutation Form Component", value: "mutationForm" },
          { name: "Data Renderer Component", value: "dataRenderer" },
        ],
      },
      {
        type: "input",
        name: "name",
        message: "Enter the name (e.g., Button, calculateSum):",
      },
    ],
    actions: (data) => {
      const { fileType, name } = data;
      const additionalDataMap = {
        mutationForm: () => ({ action: name }),
        dataRenderer: () => ({ action: name }),
        contextWithProvider: () => ({ contextName: name }),
      };

      const templatePaths = {
        component: `${templateBasePaths.reactNextjs}/functional-component.tsx.hbs`,
        function: `${templateBasePaths.reactNextjs}/function.ts.hbs`,
        contextWithProvider: `${templateBasePaths.reactNextjs}/context-api-provider.tsx.hbs`,
        customHook: `${templateBasePaths.reactNextjs}/useCustomHook.ts.hbs`,
        mutationForm: `${templateBasePaths.reactNextjs}/mutation-form.tsx.hbs`,
        dataRenderer: `${templateBasePaths.reactNextjs}/data-renderer.tsx.hbs`,
      };

      const outputSubPaths = {
        component: "components",
        function: "utils",
        contextWithProvider: "context",
        customHook: "hooks",
        mutationForm: "components",
        dataRenderer: "components",
      };

      return [
        {
          type: "add",
          path: `${currentPath}/${outputSubPaths[fileType]}/{{kebab-case name}}.tsx`,
          templateFile: templatePaths[fileType],
          data: additionalDataMap[fileType]?.() || {},
        },
      ];
    },
  });
}
