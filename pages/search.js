import Link from 'next/link'
import { useState } from 'react'
import React from 'react'
import tw from "tailwind-styled-components"

const Search = () => {
    // to get the input from the user we need to use the useState hook
    const [pickup, setPickup] = useState("")
    const [dropoff, setDropoff] = useState("")

    return (
        <Wrapper>
            {/* Button Container */}
            <Link href="/">
            <ButtonContainer>
                <BackButton src="https://banner2.cleanpng.com/20180601/cow/kisspng-computer-icons-arrow-download-back-arrow-5b112998298273.95748509152785141617.jpg"/>
            </ButtonContainer>
            </Link>
            {/* Input Container */}
            <InputContainer>
                <PickupDropoffIcons>
                    <Circle src="/circlefilled.png"/>
                    <Line src="/line.png"/>
                    <Circle src="/circlefilled.png"/>
                </PickupDropoffIcons>
                <InputBoxes>
                    <Input 
                    placeholder="Enter Pickup Location"
                    value={pickup}
                    onChange={(e)=>setPickup(e.target.value)}
                    />
                    <Input placeholder="Enter Dropoff Location"
                    value={dropoff}
                    onChange={(e)=>setDropoff(e.target.value)}/>
                </InputBoxes>
                <PlusIcon src="/plusicon.png"/>
            </InputContainer>
            {/* Saved Places */}
            <SavedPlaces>
                <StarIcon src="/staricon.png"/>
                Saved Places
            </SavedPlaces>
            {/* Confirm Locations */}
            <Link href={{
                pathname: "/confirm", 
                query: {
                    pickup: pickup,
                    dropoff: dropoff
                }
                }}>
            <ConfirmLocationContainer>
                Confirm Locations
            </ConfirmLocationContainer>
            </Link>
            
        </Wrapper>
    )
}

export default Search

const Wrapper = tw.div`
bg-gray-200 h-screen
`

const ButtonContainer = tw.div`
bg-white h-10 w-15 flex p-1 px-4
`

const BackButton = tw.img`
h-6 my-4
`

const InputContainer = tw.div`
bg-white flex items-center px-4
`
const PickupDropoffIcons = tw.div`
w-10 flex flex-col my-9 items-center
`
const Circle = tw.img`
h-5 flex p-1
`

const Line = tw.img`
h-8
`

const InputBoxes = tw.div`
flex flex-col flex-1
`

const Input = tw.input`
h-10 bg-gray-200 my-2 p-2 text-black outline-none border-none
`

const PlusIcon = tw.img`
w-10 h-10 bg-gray-200 rounded-full ml-3
`

const SavedPlaces = tw.div`
    text-black items-center flex px-4 bg-white mt-2
`

const StarIcon = tw.img`
    h-10 bg-gray-400 p-2 rounded-full my-2 mx-0.5 mr-2
`

const ConfirmLocationContainer = tw.div`
    text-white text-center bg-black mt-2 px-4 py-3 cursor-pointer text-2xl mx-4
`