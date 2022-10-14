export const prettyName = (name) => {
  const spacesName = name.replace(/_/g, " ");
  return spacesName.charAt(0).toUpperCase() + spacesName.slice(1);
};

export const toTitleCase = (str) => {
  return str.replace(/\w\S*/g, function (txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
};
