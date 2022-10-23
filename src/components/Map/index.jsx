import React, { useRef, useEffect } from "react";
import { observer } from "mobx-react-lite";
import mapboxgl from "!mapbox-gl";
import { accessToken } from "../../constants/mapbox";

mapboxgl.accessToken = accessToken;

const Map = ({ store }) => {
  const mapBox = useRef(null);
  const map = useRef(null);
  const marker = useRef(null);
  const nav = useRef(null);

  useEffect(() => {
    store.setInitialValues(83.78722, 53.35667, 11);
  }, []);

  useEffect(() => {
    map.current = new mapboxgl.Map({
      container: mapBox.current,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [store.lng, store.lat],
      zoom: store.zoom,
    });

    nav.current = new mapboxgl.NavigationControl({
      visualizePitch: true,
      showCompass: false,
    });
    map.current.addControl(nav.current, "bottom-right");

    marker.current = new mapboxgl.Marker({
      color: "#FF0000",
    })
      .setLngLat([store.lng, store.lat])
      .addTo(map.current);
  }, [store.zoom, store.lng, store.lat]);

  return <div ref={mapBox} className="map"></div>;
};

export default observer(Map);
