const { setTimeout } = window;

/* -------------------------------------------------------------------------- */

export const delay = (setTime = 1000) =>
  new Promise((resolve, reject) => {
    setTimeout(resolve, setTime);
  });
