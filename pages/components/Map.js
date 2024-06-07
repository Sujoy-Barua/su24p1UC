import React from 'react';
import { useEffect } from 'react';
import tw from "tailwind-styled-components"
import mapboxgl from 'mapbox-gl'
import Link from 'next/link'

mapboxgl.accessToken = 
'pk.eyJ1Ijoic2JhcnVhIiwiYSI6ImNseDEwYW1lbTAxZnUybHB2N2Z6bXc1amoifQ.WIYdS2UeRaUWlpLlBVGiNQ';


const Map = (props) => {
    useEffect(() => {
        const map = new mapboxgl.Map({
          container: "map",
          style: 'mapbox://styles/mapbox/streets-v12',
          center: [-99.29011, 39.39172],
          zoom: 3
        });

        if (props.pickupCoordinates) {
            addToMap(map, props.pickupCoordinates)
        }

        if (props.dropoffCoordinates) {
            addToMap(map, props.dropoffCoordinates)
        }

        if (props.pickupCoordinates && props.dropoffCoordinates) {
            map.fitBounds([
                props.pickupCoordinates, 
                props.dropoffCoordinates,    
            ],
            {
                padding: 50
            }
            )
        }

      }, [props.pickupCoordinates, props.dropoffCoordinates]);

      const addToMap = (map, coordinates) => {
        const marker1 = new mapboxgl.Marker()
        .setLngLat(coordinates)
        .addTo(map);
      }

  return <Wrapper id='map'></Wrapper>
};

export default Map;

const Wrapper = tw.div`
flex-1 h-1/2
`