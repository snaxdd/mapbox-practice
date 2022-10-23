import { makeObservable, observable, action, computed } from "mobx";

export class MapStore {
  lng = null;
  lat = null;
  zoom = null;
  errors = {
    search: null,
  };

  constructor() {
    makeObservable(this, {
      lng: observable,
      lat: observable,
      zoom: observable,
      errors: observable,
      setLat: action,
      setLng: action,
      setZoom: action,
      setError: action,
    });
  }

  // Methods
  setInitialValues(lng, lat, zoom) {
    this.setLng(lng);
    this.setLat(lat);
    this.setZoom(zoom);
  }

  // Setters
  setLat(lat) {
    this.lat = lat;
  }

  setLng(lng) {
    this.lng = lng;
  }

  setZoom(zoom) {
    this.zoom = zoom;
  }

  setError(type, text) {
    this.errors[type] = text;
  }

  // Getters
  get lat() {
    return this.lat;
  }

  get lng() {
    return this.lng;
  }

  get zoom() {
    return this.zoom;
  }

  get errors() {
    return this.errors;
  }
}
