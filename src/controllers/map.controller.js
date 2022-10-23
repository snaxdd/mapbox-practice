export class MapController {
  mapStore = null;
  geoStore = null;

  constructor(mapStore, geoStore) {
    this.mapStore = mapStore;
    this.geoStore = geoStore;
  }

  handleCityChange = async (event) => {
    const city = event.currentTarget.value;
    this.geoStore.setCity(city);

    const { lng, lat } = await this.geoStore.getCityCoordinates();

    this.mapStore.setLng(lng);
    this.mapStore.setLat(lat);
    this.geoStore.setStreet("");
    this.geoStore.setBuilding("");
  };

  handleStreetChange = (event) => {
    const street = event.target.value;
    this.geoStore.setStreet(street);
  };

  handleBuildingChange = (event) => {
    const building = event.target.value;
    this.geoStore.setBuilding(building);
  };

  handleErrorClose = () => {
    this.mapStore.setError("search", null);
  };

  onSearchClick = async () => {
    const result = await this.geoStore.getAddressCoordinates();
    this.mapStore.setError("search", null);

    if (result) {
      this.mapStore.setLng(result.lng);
      this.mapStore.setLat(result.lat);
      this.mapStore.setZoom(17);
    } else {
      this.mapStore.setError("search", "Address is not exist 😭");
    }
  };
}
