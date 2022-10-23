import { isObjectEmpty } from "./isObjectEmpty";

export const parseQueryParams = (params = {}) => {
  let result = "";

  if (!isObjectEmpty(params)) {
    Object.keys(params).forEach((key, i, arr) => {
      const isLast = i === arr.length - 1;

      result += `${key}=${params[key]}${isLast ? "" : "&"}`;
    });
  }

  return result;
};
