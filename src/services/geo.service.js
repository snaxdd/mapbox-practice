import { getGeoData } from "../api/geocode.api";
import { defaultQueryParams } from "../constants/api";

export const getCityCoordinates = async (city) => {
  let result = null;

  try {
    const { status, data } = await getGeoData(city, defaultQueryParams);
    const feature = data?.features[0];

    if (status === 200) {
      result = {
        lng: feature.center[0],
        lat: feature.center[1],
      };
    }
  } catch (e) {
    throw new Error(e);
  }

  return result;
};

export const getAddressCoordinates = async (city, street, building) => {
  let result = null;
  let searchString = `${city} ${street} ${building}`;

  try {
    const { status, data } = await getGeoData(searchString, {
      ...defaultQueryParams,
      types: "address",
    });
    const feature = data?.features[0];
    const isRooftop = feature?.properties?.accuracy === "rooftop";

    if (status === 200 && isRooftop) {
      result = {
        lng: feature.center[0],
        lat: feature.center[1],
      };
    }
  } catch (e) {
    throw new Error(e);
  }

  return result;
};
