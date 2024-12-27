export const copyToClipboard = (text: string) => {
    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard
        .writeText(text)
        .then(() => {})
        .catch((err) => {
          console.error("Failed to copy text: ", err);
        });
    }
}