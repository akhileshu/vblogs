import { allPrismaModels } from "./src/shared/utils/allPrismaModels.js";
import changeCase from "change-case";
export default function plop(/** @type {import('plop').NodePlopAPI} */ plop) {
  // create your generators here
  // plop.setGenerator("graphql-resolver", {
  //   description: "Create GraphQL CRUD resolvers for a model",
  //   prompts: [
  //     {
  //       type: "input",
  //       name: "modelName",
  //       message: "Enter the model name (e.g., User)",
  //     },
  //   ],
  //   actions: [
  //     {
  //       type: "add",
  //       path: "src/graphql/resolvers/{{camelCase modelName}}/get{{pascalCase modelName}}ById.ts",
  //       templateFile: "./plop/templates/graphql-resolver/getById.hbs",
  //     },
  //     {
  //       type: "add",
  //       path: "src/graphql/resolvers/{{camelCase modelName}}/get{{pascalCase modelName}}s.ts",
  //       templateFile: "./plop/templates/graphql-resolver/getAll.hbs",
  //     },
  //     {
  //       type: "add",
  //       path: "src/graphql/resolvers/{{camelCase modelName}}/update{{pascalCase modelName}}.ts",
  //       templateFile: "./plop/templates/graphql-resolver/update.hbs",
  //     },
  //     {
  //       type: "add",
  //       path: "src/graphql/resolvers/{{camelCase modelName}}/delete{{pascalCase modelName}}.ts",
  //       templateFile: "./plop/templates/graphql-resolver/delete.hbs",
  //     },
  //     {
  //       type: "add",
  //       path: "src/graphql/resolvers/{{camelCase modelName}}/create{{pascalCase modelName}}.ts",
  //       templateFile: "./plop/templates/graphql-resolver/create.hbs",
  //     },
  //     {
  //       type: "add",
  //       path: "src/graphql/resolvers/{{camelCase modelName}}/index.ts",
  //       templateFile: "./plop/templates/graphql-resolver/index.hbs",
  //     },
  //     // Generate Queries
  //     {
  //       type: "add",
  //       path: "src/graphql/queries/{{camelCase modelName}}.ts",
  //       templateFile: "./plop/templates/graphql-query/query.hbs",
  //     },

  //     // Generate Mutations
  //     {
  //       type: "add",
  //       path: "src/graphql/mutations/{{camelCase modelName}}.ts",
  //       templateFile: "./plop/templates/graphql-mutation/mutation.hbs",
  //     },
  //   ],
  // });
  const currentPath = process.env.INIT_CWD;

  plop.setHelper("kebab-case", (text) => changeCase.paramCase(text));
  plop.setHelper("camelCase", (text) => changeCase.camelCase(text));
  plop.setHelper("PascalCase", (text) => changeCase.pascalCase(text));
  plop.setHelper("snake_case", (text) => changeCase.snakeCase(text));
  plop.setHelper("sentence-case", (text) => changeCase.sentenceCase(text));

  // below generators have a actions list , if one action fails , ex : due to file already exists , the rest of the actions will not be executed
  plop.setGenerator("prisma-model-services", {
    prompts: [],
    description: "generate prisma-model-services",

    actions: () => {
      const models = allPrismaModels();
      console.log(models);

      return models.flatMap((model) => [
        {
          type: "add",
          path: `src/services/prisma/{{kebab-case model}}/{{kebab-case model}}-service.ts`,
          templateFile: "./plop/templates/prisma-services/model-service.hbs",
          data: { model },
        },
        {
          type: "add",
          path: `src/services/prisma/{{kebab-case model}}/create-{{kebab-case model}}.ts`,
          templateFile: "./plop/templates/prisma-services/create-model.hbs",
          data: { model },
        },
        {
          type: "add",
          path: `src/services/prisma/{{kebab-case model}}/update-{{kebab-case model}}.ts`,
          templateFile: "./plop/templates/prisma-services/update-model.hbs",
          data: { model },
        },
        {
          type: "add",
          path: `src/services/prisma/{{kebab-case model}}/delete-{{kebab-case model}}.ts`,
          templateFile: "./plop/templates/prisma-services/delete-model.hbs",
          data: { model },
        },
        {
          type: "add",
          path: `src/services/prisma/{{kebab-case model}}/get-{{kebab-case model}}-by-id.ts`,
          templateFile: "./plop/templates/prisma-services/get-model-by-id.hbs",
          data: { model },
        },
        {
          type: "add",
          path: `src/services/prisma/{{kebab-case model}}/get-all-{{kebab-case model}}s.ts`,
          templateFile: "./plop/templates/prisma-services/get-all-models.hbs",
          data: { model },
        },
      ]);
    },
  });
  plop.setGenerator("prisma-model-handlers", {
    prompts: [],
    description: "generate prisma-model-handlers",

    actions: () => {
      const models = allPrismaModels();
      console.log(models);

      return models.flatMap((model) => [
        {
          type: "add",
          path: `src/server-actions/prisma-handlers/{{kebab-case model}}/index.ts`,
          templateFile: "./plop/templates/prisma-handlers/index.hbs",
          data: { model },
          abortOnFail: false, // Continue even if this action fails
        },
        {
          type: "add",
          path: `src/server-actions/prisma-handlers/{{kebab-case model}}/create-{{kebab-case model}}.ts`,
          templateFile: "./plop/templates/prisma-handlers/create-model.hbs",
          data: { model },
          abortOnFail: false, // Continue even if this action fails
        },
        {
          type: "add",
          path: `src/server-actions/prisma-handlers/{{kebab-case model}}/update-{{kebab-case model}}.ts`,
          templateFile: "./plop/templates/prisma-handlers/update-model.hbs",
          data: { model },
          abortOnFail: false, // Continue even if this action fails
        },
        {
          type: "add",
          path: `src/server-actions/prisma-handlers/{{kebab-case model}}/delete-{{kebab-case model}}.ts`,
          templateFile: "./plop/templates/prisma-handlers/delete-model.hbs",
          data: { model },
          abortOnFail: false, // Continue even if this action fails
        },
        {
          type: "add",
          path: `src/server-actions/prisma-handlers/{{kebab-case model}}/get-{{kebab-case model}}-by-id.ts`,
          templateFile: "./plop/templates/prisma-handlers/get-model-by-id.hbs",
          data: { model },
          abortOnFail: false, // Continue even if this action fails
        },
        {
          type: "add",
          path: `src/server-actions/prisma-handlers/{{kebab-case model}}/get-all-{{kebab-case model}}s.ts`,
          templateFile: "./plop/templates/prisma-handlers/get-all-models.hbs",
          data: { model },
          abortOnFail: false, // Continue even if this action fails
        },
      ]);
    },
  });

plop.setGenerator("append-cached-handler", {
  prompts: [
    {
      type: "input",
      name: "model",
      message:
        "Enter the model name (e.g., User or UserOrderProduct(services combined))",
    },
    {
      type: "input",
      name: "action",
      message: "Enter the action name (e.g., getWatchedVideosByUserId)",
    },
  ],
  description: "generate cached handler - for fetch handlers only",
  actions: (data) => {
    return [
      {
        type: "append",
        path: `src/server-actions/prisma-handlers/{{kebab-case model}}/{{kebab-case action}}.ts`,
        pattern: /(\/\/ End of handler)/,
        templateFile: "./plop/templates/prisma-handlers/cached-handler.ts.hbs",
        data: { cachedAction: data.action.replace(/^get/, "getCached") },
      },
    ];
  },
});

  plop.setGenerator("prisma-handler-&-service-by-name", {
    prompts: [
      {
        type: "input",
        name: "model",
        message:
          "Enter the model name (e.g., User or UserOrderProduct(services combined))",
      },
      {
        type: "input",
        name: "action",
        message: "Enter the action name (e.g., getWatchedVideosByUserId)",
      },
      {
        type: "confirm",
        name: "withCachedHandler",
        message: "Do you want to add a cached handler? - for fetch handlers only ",
        default: false,
      },
    ],
    description:
      "Generate prisma handler, service , by name, and optionally cached handler",

    actions: (data) => {
      const actions = [
        {
          type: "add",
          path: `src/server-actions/prisma-handlers/{{kebab-case model}}/{{kebab-case action}}.ts`,
          templateFile: "./plop/templates/prisma-handlers/custom-handler.hbs",
          abortOnFail: false, // Continue even if this action fails
        },
        {
          type: "add",
          path: "src/server-actions/prisma-handlers/{{kebabCase model}}/index.ts",
          template: "", // Create an empty index.ts if it doesn't exist
          abortOnFail: false, // Avoid failing if the file exists
        },
        {
          type: "append", //this will append in next line
          path: "src/server-actions/prisma-handlers/{{kebabCase model}}/index.ts",
          template: `export { {{camelCase action}}Handler } from './{{kebabCase action}}';`,
        },
        {
          type: "add",
          path: `src/services/prisma/{{kebab-case model}}/{{kebab-case model}}-service.ts`,
          templateFile: "./plop/templates/prisma-services/custom-service.hbs",
          abortOnFail: false, // Continue even if this action fails
        },
        {
          // bug : if service file does not exit , method will be appended twice - once in add , also in append
          type: "append",
          path: "src/services/prisma/{{kebab-case model}}/{{kebab-case model}}-service.ts",
          pattern: /\/\/ <AUTO-GENERATED METHODS>/, // Use a comment or pattern as a placeholder
          template: `
            async {{camelCase action}}(data: any) {
              await this.beforeAction("{{camelCase action}}", data);
              const result = await {{camelCase action}}(this.prisma, data);
              await this.afterAction("{{camelCase action}}", result);
              return result;
            }`,
        },
        {
          type: "add",
          path: `src/services/prisma/{{kebab-case model}}/{{kebab-case action}}.ts`,
          templateFile: "./plop/templates/prisma-services/custom-method.hbs",
          abortOnFail: false, // Continue even if this action fails
        },
      ];
      if (data.withCachedHandler) {
        actions.push({
          type: "append",
          path: `src/server-actions/prisma-handlers/{{kebab-case model}}/{{kebab-case action}}.ts`,
          pattern: /(\/\/ End of handler)/,
          templateFile:
            "./plop/templates/prisma-handlers/cached-handler.ts.hbs",
          data: { cachedAction: data.action.replace(/^get/, "getCached") },
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
        message: "What type of file would you like to generate?",
        choices: [
          { name: "Functional Component", value: "component" },
          { name: "Function", value: "function" },
          { name: "context with provider", value: "contextWithProvider" },
          { name: "Custom Hook", value: "customHook" },
          { name: "Mutation Form component", value: "mutationForm" },
          { name: "Data renderer component", value: "dataRenderer" },
          // You can add more options here if needed
        ],
      },
      {
        type: "input",
        name: "name",
        message:
          "Enter the name of the file,context,handler(for render,mutation) (e.g., Button, calculateSum):",
      },
    ],
    actions: (data) => {
      let actions = [];
      const { fileType, name } = data;

      if (fileType === "component") {
        actions.push({
          type: "add",
          path: `${currentPath}/components/{{kebab-case name}}.tsx`,
          templateFile:
            "./plop/templates/react-nextjs/functional-component.tsx.hbs",
        });
      } else if (fileType === "function") {
        actions.push({
          type: "add",
          path: `${currentPath}/utils/{{kebab-case name}}.ts`,
          templateFile: "./plop/templates/react-nextjs/function.ts.hbs",
        });
      } else if (fileType === "contextWithProvider") {
        actions.push({
          type: "add",
          path: `${currentPath}/context/use{{kebab-case name}}Context.tsx`,
          templateFile:
            "./plop/templates/react-nextjs/context-api-provider.tsx.hbs",
          data: { contextName: name },
        });
      } else if (fileType === "customHook") {
        actions.push({
          type: "add",
          path: `${currentPath}/hooks/use{{kebab-case name}}.ts`,
          templateFile: "./plop/templates/react-nextjs/useCustomHook.ts.hbs",
        });
      } else if (fileType === "dataRenderer") {
        actions.push({
          type: "add",
          path: `${currentPath}/components/{{kebab-case name}}.tsx`,
          templateFile: "./plop/templates/react-nextjs/data-renderer.tsx.hbs",
          data: { action: name },
        });
      } else if (fileType === "mutationForm") {
        actions.push({
          type: "add",
          path: `${currentPath}/components/{{kebab-case name}}.tsx`,
          templateFile: "./plop/templates/react-nextjs/mutation-form.tsx.hbs",
          data: { action: name },
        });
      }

      return actions;
    },
  });
}
