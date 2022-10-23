import React, { useEffect, useState } from "react";
import { observer } from "mobx-react-lite";

import MapControls from "./components/MapControls";
import Map from "./components/Map";
import { MapStore } from "./store/map.store";
import { MapController } from "./controllers/map.controller";
import { GeoStore } from "./store/geo.store";
import Modal from "react-bootstrap/Modal";
import { Button } from "react-bootstrap";

const App = observer(() => {
  const [mapStore] = useState(() => new MapStore());
  const [geoStore] = useState(() => new GeoStore());
  const [controller, setController] = useState(null);

  useEffect(() => {
    setController(new MapController(mapStore, geoStore));
  }, [mapStore, geoStore]);

  return (
    <main className="app-container">
      {controller && (
        <>
          <Modal
            show={!!mapStore.errors.search}
            onHide={controller.handleErrorClose}
          >
            <Modal.Body>{mapStore.errors.search}</Modal.Body>
            <Modal.Footer>
              <Button onClick={controller.handleErrorClose}>OK</Button>
            </Modal.Footer>
          </Modal>
          <Map store={mapStore} />
          <MapControls
            store={geoStore}
            onSearch={controller.onSearchClick}
            onCity={controller.handleCityChange}
            onStreet={controller.handleStreetChange}
            onBuilding={controller.handleBuildingChange}
          />
        </>
      )}
    </main>
  );
});

export default App;
