import { List, ListItem, ListItemButton, ListItemIcon, ListItemText, } from '@mui/material'
import { Person,Settings,AccountBox } from '@mui/icons-material'

import { Box } from '@mui/system'
import React from 'react'

const sideBar = () => {
    return (
        <Box  flex={1} p={2} sx={{ display: { xs: "none", sm: "block" } }}>
            <List>
                <ListItem disablePadding>
                    <ListItemButton component="a" href="#home">
                        <ListItemIcon>
                            <Person/>
                            
                        </ListItemIcon>
                        <ListItemText primary="HomePage" />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton component="a" href="#home">
                        <ListItemIcon>
                            <Settings/>
                        </ListItemIcon>
                        <ListItemText primary="Settings" />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton component="a" href="#home">
                        <ListItemIcon>
                            <AccountBox/>
                        </ListItemIcon>
                        <ListItemText primary="AccountBox" />
                    </ListItemButton>
                </ListItem>
            </List>
        </Box>
    )
}

export default sideBar