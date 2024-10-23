export default  function plop(/** @type {import('plop').NodePlopAPI} */ plop) {
  // create your generators here
plop.setGenerator("graphql-resolver", {
  description: "Create GraphQL CRUD resolvers for a model",
  prompts: [
    {
      type: "input",
      name: "modelName",
      message: "Enter the model name (e.g., User)",
    },
  ],
  actions: [
    {
      type: "add",
      path: "src/graphql/resolvers/{{camelCase modelName}}/get{{pascalCase modelName}}ById.ts",
      templateFile: "./plop/templates/graphql-resolver/getById.hbs",
    },
    {
      type: "add",
      path: "src/graphql/resolvers/{{camelCase modelName}}/get{{pascalCase modelName}}s.ts",
      templateFile: "./plop/templates/graphql-resolver/getAll.hbs",
    },
    {
      type: "add",
      path: "src/graphql/resolvers/{{camelCase modelName}}/update{{pascalCase modelName}}.ts",
      templateFile: "./plop/templates/graphql-resolver/update.hbs",
    },
    {
      type: "add",
      path: "src/graphql/resolvers/{{camelCase modelName}}/delete{{pascalCase modelName}}.ts",
      templateFile: "./plop/templates/graphql-resolver/delete.hbs",
    },
    {
      type: "add",
      path: "src/graphql/resolvers/{{camelCase modelName}}/create{{pascalCase modelName}}.ts",
      templateFile: "./plop/templates/graphql-resolver/create.hbs",
    },
    {
      type: "add",
      path: "src/graphql/resolvers/{{camelCase modelName}}/index.ts",
      templateFile: "./plop/templates/graphql-resolver/index.hbs",
    },
    // Generate Queries
    {
      type: "add",
      path: "src/graphql/queries/{{camelCase modelName}}.ts",
      templateFile: "./plop/templates/graphql-query/query.hbs",
    },

    // Generate Mutations
    {
      type: "add",
      path: "src/graphql/mutations/{{camelCase modelName}}.ts",
      templateFile: "./plop/templates/graphql-mutation/mutation.hbs",
    },
  ],
});
}
