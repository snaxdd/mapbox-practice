const DOMAIN = "https://api.mapbox.com";
const TYPE = "/geocoding";
const VER = "/v5";
const ENDPOINT = "/mapbox.places";

export const API = `${DOMAIN}${TYPE}${VER}${ENDPOINT}`;
export const defaultQueryParams = {
  fuzzyMatch: false,
  country: "RU",
};
