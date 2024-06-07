import React, { useEffect, useState } from 'react';
import tw from "tailwind-styled-components"
import { carList } from '../data/carList'

const RideSelector = ({pickupCoordinates, dropoffCoordinates}) => {
    const [rideDuration, setRideDuration] = useState(0)

    useEffect(() => {
        if (pickupCoordinates && dropoffCoordinates)
        {
            fetch(`https://api.mapbox.com/directions/v5/mapbox/driving/${pickupCoordinates[0]},${pickupCoordinates[1]};${dropoffCoordinates[0]},${dropoffCoordinates[1]}?access_token=pk.eyJ1Ijoic2JhcnVhIiwiYSI6ImNseDEwYW1lbTAxZnUybHB2N2Z6bXc1amoifQ.WIYdS2UeRaUWlpLlBVGiNQ`
            )
            .then(resp => resp.json())
            .then(data => {setRideDuration(data.routes[0].duration / 100)
            })
        }
    }, [pickupCoordinates, dropoffCoordinates])

    return (
        <Wrapper>
            <Header>
                Choose a ride, or swipe up for more
            </Header>
            <RideList>
                {carList.map((car, index) => (
                    <Car key={index}>
                    <CarImage src={car.imgUrl}/>
                    <CarDetails>
                        <ServiceName>{car.serviceName}</ServiceName>
                        <Time>5 min away</Time>
                    </CarDetails>
                    <Price>{'$' + (rideDuration * car.multiplier).toFixed(2)}</Price>
                </Car>
                ))}
                

            </RideList>
        </Wrapper>
    )
}

export default RideSelector

const CarDetails = tw.div`
flex-1
`

const ServiceName = tw.div`
font-medium
`
const Price = tw.div`
text-sm font-medium
`
const Time = tw.div`
text-xs text-blue-500
`

const CarImage = tw.img`
h-14 p-2 mr-2
`

const Car = tw.div`
flex p-4 items-center border-b
`

const Wrapper = tw.div`
text-black flex flex-col flex-1 bg-white
`

const Header = tw.div`
text-gray-500 text-xs py-2 text-center border-b
`

const RideList = tw.div`
overflow-y-scroll
`