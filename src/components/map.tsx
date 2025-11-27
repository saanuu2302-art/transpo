
'use client';

import {
  GoogleMap,
  useJsApiLoader,
  Marker,
  DirectionsRenderer,
} from '@react-google-maps/api';
import { useCallback, useEffect, useState } from 'react';
import { Skeleton } from './ui/skeleton';

const containerStyle = {
  width: '100%',
  height: '100%',
  borderRadius: '0.5rem',
};

const defaultCenter = {
  lat: 12.5224,
  lng: 76.8957,
};

type MapProps = {
  center?: google.maps.LatLngLiteral;
  destination?: google.maps.LatLngLiteral;
  showRoute?: boolean;
};

export function Map({
  center = defaultCenter,
  destination,
  showRoute = false,
}: MapProps) {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!,
  });

  const [map, setMap] = useState<google.maps.Map | null>(null);
  const [directions, setDirections] =
    useState<google.maps.DirectionsResult | null>(null);

  const onLoad = useCallback(
    function callback(mapInstance: google.maps.Map) {
      mapInstance.setZoom(14);
      setMap(mapInstance);
    },
    []
  );

  const onUnmount = useCallback(function callback(map: google.maps.Map) {
    setMap(null);
  }, []);

  useEffect(() => {
    if (showRoute && center && destination && isLoaded) {
      const directionsService = new google.maps.DirectionsService();
      directionsService.route(
        {
          origin: center,
          destination: destination,
          travelMode: google.maps.TravelMode.DRIVING,
        },
        (result, status) => {
          if (status === google.maps.DirectionsStatus.OK) {
            setDirections(result);
          } else {
            console.error(`error fetching directions ${result}`);
          }
        }
      );
    }
  }, [center, destination, showRoute, isLoaded]);

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={14}
      onLoad={onLoad}
      onUnmount={onUnmount}
      options={{
        streetViewControl: false,
        mapTypeControl: false,
        fullscreenControl: false,
      }}
    >
      {!showRoute && <Marker position={center} />}
      {showRoute && directions && <DirectionsRenderer directions={directions} />}
    </GoogleMap>
  ) : (
    <Skeleton className="h-full w-full" />
  );
}
