export const parseStringWithDelimiter = (string, delimiter = ",") => {
  let parsed = string?.split(delimiter);
  return parsed;
};

export const parseArrayWithDelimiter = (array, delimiter = ":") => {
  let parsed = array.map((elem) => {
    let splitted = elem?.split(delimiter);
    if (elem.length > 1) return splitted[1];
    return "";
  });
  return parsed;
};
