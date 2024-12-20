export const openPopupWindow = ({
  url,
  windowName = "Popup Window",
  style,
}: {
  url: string;
  windowName?: string;
  style?: string;
}) => {
  const width = 400;
  const height = 600;
  const left = 10;
  const top = 30;
  const dimensions =
    style ?? `width=${width},height=${height},top=${top},left=${left}`;

  const popup = window.open(url, windowName, dimensions);

  if (popup) {
    popup.focus();
  }
};
