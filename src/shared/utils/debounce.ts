let lastAccountedTime = 0;

export const debounce = (callback: ()=>void, wait: number) => {
    const now = Date.now();
    if (now - lastAccountedTime > wait) {
      lastAccountedTime = now;
      callback();
    }
};
