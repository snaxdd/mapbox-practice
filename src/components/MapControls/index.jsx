import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { observer } from "mobx-react-lite";

const MapControls = ({ store, onCity, onStreet, onBuilding, onSearch }) => {
  const [show, setShow] = useState(true);

  const handleShow = () => setShow((prevState) => !prevState);

  return (
    <div className={`map-controls map-controls_${show ? "show" : "hide"}`}>
      {store.cities.length && (
        <Form.Select className="map-controls__city-select" onChange={onCity}>
          <option hidden value>
            Choose city...
          </option>
          {store.cities.map((city) => (
            <option key={city.id}>{city.name}</option>
          ))}
        </Form.Select>
      )}
      {store.city && (
        <>
          <Form.Control
            className="map-controls__street"
            type="text"
            placeholder="Street address"
            onInput={onStreet}
            value={store.street}
          />
          <Form.Control
            className="map-controls__building"
            type="text"
            placeholder="Building"
            onInput={onBuilding}
            value={store.building}
          />
          <Button
            onClick={onSearch}
            className="map-controls__find"
            disabled={!store.street || !store.building}
          >
            Search
          </Button>
          <Button
            className="map-controls__hide"
            variant="secondary"
            onClick={handleShow}
          >
            {show ? "Hide" : "Show"}
          </Button>
        </>
      )}
    </div>
  );
};

export default observer(MapControls);
