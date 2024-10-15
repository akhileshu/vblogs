export const logError = ({
  fallbackErrorMessage,
  error,
}: {
  fallbackErrorMessage: string;
  error: unknown;
}) => {
  const errorMessage = error instanceof Error ? error.message : String(error);

  console.error("🚨 error occured while executing graphql endpoint \n", {
    fallbackErrorMessage,
    errorMessage,
    error,
  });
};
