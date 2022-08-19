import { Box } from '@mui/system'
import React from 'react'

const sideBar = () => {
  return (
    <Box bgcolor="skyblue" flex={1} p={2} sx={{display:{xs:"none",sm:"block"}}}>sideBar</Box>
  )
}

export default sideBar