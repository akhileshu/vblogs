import { allPrismaModels } from "./src/features/seeding/temp/allPrismaModels.js";
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

  plop.setHelper("kebab-case", (text) => changeCase.paramCase(text));
  plop.setHelper("camelCase", (text) => changeCase.camelCase(text));
  plop.setHelper("PascalCase", (text) => changeCase.pascalCase(text));
  plop.setHelper("snake_case", (text) => changeCase.snakeCase(text));

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
          templateFile: "./plop/templates/prisma-services/model-services.hbs",
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
          path: `src/services/prisma/{{kebab-case model}}/get-{{kebab-case model}}s.ts`,
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
          path: `src/server-actions/prisma-handlers/{{kebab-case model}}/get-{{kebab-case model}}s.ts`,
          templateFile: "./plop/templates/prisma-handlers/get-all-models.hbs",
          data: { model },
          abortOnFail: false, // Continue even if this action fails
        },
      ]);
    },
  });
}
