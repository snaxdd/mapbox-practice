import { action, makeObservable, observable } from "mobx";
import {
  getAddressCoordinates,
  getCityCoordinates,
} from "../services/geo.service";

export class GeoStore {
  cities = [
    { id: 1, name: "Barnaul" },
    { id: 2, name: "Moscow" },
    { id: 3, name: "Vladivostok" },
  ];
  street = "";
  building = "";
  city = "";

  constructor() {
    makeObservable(this, {
      street: observable,
      building: observable,
      city: observable,
      setCity: action,
      setStreet: action,
      setBuilding: action,
    });
  }

  // Methods
  getCityCoordinates = async () => {
    return await getCityCoordinates(this.city);
  };

  getAddressCoordinates = async () => {
    return await getAddressCoordinates(this.city, this.street, this.building);
  };

  // Setters
  setCity(city) {
    this.city = city;
  }

  setStreet(street) {
    this.street = street;
  }

  setBuilding(building) {
    this.building = building;
  }

  // Getters
  get city() {
    return this.city;
  }
}
