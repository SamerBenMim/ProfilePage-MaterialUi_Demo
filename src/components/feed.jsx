
import { Box } from '@mui/system'
import React, { useState } from 'react'
import Posts from './posts';
const Feed = () => {
    const [expanded, sethandleExpandClick] = useState(false)
    return (
      <Box flex={4} p={2} alignItems="center"  sx={{justifyContent:"center" , alignItems:"center"}}>
        <Posts />
        <Posts />
        <Posts />
        <Posts />
      </Box>
    )
}

export default Feed