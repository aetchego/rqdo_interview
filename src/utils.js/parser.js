export const parseStringWithDelimiter = (string, delimiter = ",") => {
  let parsed = string?.split(delimiter);
  return parsed;
};

export const parseArrayWithDelimiters = (array, delimiter = ":") => {
  let parsed = array.map((elem) => elem?.split(delimiter)[1]);
  return parsed;
};
