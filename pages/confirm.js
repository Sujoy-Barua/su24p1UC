import { useEffect, useState } from 'react'
import tw from "tailwind-styled-components"
import Map from './components/Map'
import { useRouter } from 'next/router'
import RideSelector from './components/RideSelector'
import Link from 'next/link'

const Confirm = () => {

    const router = useRouter()
    const { pickup, dropoff } = router.query

    const [ pickupCoordinates, setPickupCoordinates ] = useState([0,0])
    const [ dropoffCoordinates, setDropoffCoordinates ] = useState([0,0])

    const getPickupCoordinates = (pickup) => {
        fetch(`https://api.mapbox.com/search/geocode/v6/forward?q=${pickup}&` + 
            new URLSearchParams({access_token: "pk.eyJ1Ijoic2JhcnVhIiwiYSI6ImNseDEwYW1lbTAxZnUybHB2N2Z6bXc1amoifQ.WIYdS2UeRaUWlpLlBVGiNQ",
                limit: 1
            })
        )
        .then(response => response.json())
        .then(data => {
            console.log(data)
            setPickupCoordinates(data.features[0].geometry.coordinates)
        })
    }

    const getDropoffCoordinates = (dropoff) => {
        fetch(`https://api.mapbox.com/search/geocode/v6/forward?q=${dropoff}&` + 
            new URLSearchParams({access_token: "pk.eyJ1Ijoic2JhcnVhIiwiYSI6ImNseDEwYW1lbTAxZnUybHB2N2Z6bXc1amoifQ.WIYdS2UeRaUWlpLlBVGiNQ",
                limit: 1
            })
        )
        .then(response => response.json())
        .then(data => {
            setDropoffCoordinates(data.features[0].geometry.coordinates)
        })
    }

    useEffect(() => {
        getPickupCoordinates(pickup);
        getDropoffCoordinates(dropoff);
    }, [pickup, dropoff])
    
    return (
        <Wrapper>
            <Link href="/search">
            <ButtonContainer>
                <BackButton src="https://banner2.cleanpng.com/20180601/cow/kisspng-computer-icons-arrow-download-back-arrow-5b112998298273.95748509152785141617.jpg"/>
            </ButtonContainer>
            </Link>
            <Map 
                pickupCoordinates = {pickupCoordinates}
                dropoffCoordinates = {dropoffCoordinates}
            />
            <RideContainer>
                <RideSelector 
                 pickupCoordinates = {pickupCoordinates}
                 dropoffCoordinates = {dropoffCoordinates}
            />
            </RideContainer>
            <ConfirmButtonContainer>
                <ConfirmButton>
                    Confirm Uber Ride
                </ConfirmButton>
            </ConfirmButtonContainer>
        </Wrapper>
    )
}

export default Confirm

const RideContainer = tw.div`
flex flex-1 bg-white h-1/2
`

const Wrapper = tw.div`
flex h-screen flex-col
`

const ConfirmButtonContainer = tw.div`
bg-white border-t-2
`

const ConfirmButton = tw.div`
bg-black text-white my-4 mx-4 py-4 text-center text-xl 
`

const ButtonContainer = tw.div`
h-10 bg-white rounded-full absolute z-10 mx-2 my-2 shdadow-md cursor-pointer
`

const BackButton = tw.img`
h-10 p-2
`