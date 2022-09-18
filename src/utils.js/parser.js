import qs from "qs";

export const parseStringListToArray = (string) => {
  let parsed = [];
  parsed = qs.parse(`array=${string}`, { comma: true });
  if (parsed.array === "undefined") return [];
  return parsed.array;
};

export const parseArrayWithDelimiters = (array, delimiter = ":") => {
  let parsed = array.map((elem) => elem.split(delimiter)[1]);
  return parsed;
};
