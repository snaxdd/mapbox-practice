import axios from "axios";
import { API } from "../constants/api";
import { accessToken } from "../constants/mapbox";
import { parseQueryParams } from "../helpers/parseQueryParams";

export const getGeoData = async (searchText = "", params = {}) => {
  const query = parseQueryParams({ access_token: accessToken, ...params });
  return axios.get(`${API}/${searchText}.json?${query}`);
};
