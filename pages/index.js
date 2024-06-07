import { useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import tw from "tailwind-styled-components"
import Map from '../pages/components/Map'
import Link from 'next/link';



export default function Home() {

  return (
    <Wrapper>
      <Map />
      <ActionItems>
        {/* Header */}
        <Header>
          <UberLogo src="https://www.logo.wine/a/logo/Uber/Uber-Logo.wine.svg" alt="Uber-Logo" /> {/* self clpsing tag */}
          <Profile>
            <Name>Sujoy Barua</Name>
            <UserImage src="https://static-00.iconduck.com/assets.00/profile-circle-icon-512x512-zxne30hp.png"/>
          </Profile>
        </Header>
        {/* ActionItems */}
        <ActionButtons>
          <Link href="/search">
          <ActionButton>
            <ActionButtonImage src = "https://i.pinimg.com/originals/93/c1/05/93c105244c0a3de81267a89cb13386f7.png"/>
            Ride
          </ActionButton>
          </Link>
          <ActionButton>
            <ActionButtonImage src = "https://images.vexels.com/media/users/3/346234/isolated/preview/cf6d4ade83f2a0a3b7e4f30831c56550-blue-bicycle.png"/>
            Wheels
          </ActionButton>
          <ActionButton>
            <ActionButtonImage src = "https://png.pngtree.com/png-vector/20221013/ourmid/pngtree-calendar-icon-logo-2023-date-time-png-image_6310337.png"/>
            Reserve
          </ActionButton>
        </ActionButtons>
        {/*Input items */}
        <InputButton>
          Where to?
        </InputButton>




      </ActionItems>
      </Wrapper>
  );
}

const Wrapper = tw.div`
  flex flex-col bg-white h-screen
`

const ActionItems = tw.div`
  flex-1 p-4
`

const Header = tw.div`
flex justify-between items-center 
`

const UberLogo = tw.img`
h-28
`

const Profile = tw.div`
flex items-center
`
const Name = tw.div`
mr-4 w-30 text-black
`

const UserImage = tw.img`
h-12 w-12 rouded-full border-gray-200 p-px 
`

const ActionButtons = tw.div`
flex
`

const ActionButton = tw.div`
flex flex-col bg-gray-200 flex-1 text-black 
m-1 h-32 items-center justify-center rounded-lg
transform hover:scale-105 transition duration-300 ease-in-out
`

const ActionButtonImage = tw.img`
h-3/5
`

const InputButton = tw.div`
text-black h-20 bg-gray-200 text-2xl p-4 flex items-center mt-8
rounded-2xl hover:shadow-lg transition duration-300 ease-in-out
`