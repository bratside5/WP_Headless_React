import React from 'react'
import tw from "twin.macro"




const Spinner = tw.styled.div`flex justify-center text-gray-800 items-center text-5xl font-bold  w-auto h-screen`;

const Loading = () => {
    return (
        <Spinner>
                 Loading...
        </Spinner>
    )
}

export default Loading
