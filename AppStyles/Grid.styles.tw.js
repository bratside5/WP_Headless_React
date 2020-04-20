import React from 'react'
import styled from 'styled-components'
import tw from 'tailwind.macro'

const Grid = styled.div.attrs({
  className: 'flex flex-wrap -mx-2 overflow-hidden'
})`
  & {
  }
`
export const GridContainer = styled.div.attrs({
  className:
    'my-2 px-2 w-full overflow-hidden sm:w-full md:w-1/3 lg:w-1/3 xl:w-1/3'
})`
  & {
  }
`

export default Grid && GridContainer
