const attachEventListener = (target, type, callback) => {
  const listener = (event) => {
    target.removeEventListener(type, listener);
    callback(event);
  };
  target.addEventListener(type, listener);
};

export default attachEventListener;
