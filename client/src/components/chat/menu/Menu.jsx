import { Box } from '@mui/material'
import { useState } from 'react'
import React from 'react'
import Conversation from './Conversation'
import Header from './Header'
import Search from './Search'

const Menu = () => {
  const [Text, setText] = useState('')
  return (
    <Box>
         <Header/>
         <Search setText={setText}/>
         <Conversation Text={Text}/>
    </Box>
  )
}

export default Menu