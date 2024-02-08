// Code for Google MediaCapabilities
let map;

async function initMap() {
  // The location of Villas
  const position = { lat: 35.52196293836762, lng: 23.860975326736174 };
  // Request needed libraries.
  //@ts-ignore
  const { Map } = await google.maps.importLibrary("maps");
  const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");

  // The map, centered at Pyrgos Psilonerou
  map = new Map(document.getElementById("map"), {
    zoom: 13,
    center: position,
    mapId: "AIzaSyAnkt4tps4vHrWgONAKaAo9AeNWW5IAARM",
  });

  // The marker, positioned at Pyrgos Psilonerou
  const marker = new AdvancedMarkerElement({
    map: map,
    position: position,
    title: "Villas",
  });
}

initMap();