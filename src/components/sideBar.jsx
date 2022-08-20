import { List, ListItem, ListItemButton, ListItemIcon, ListItemText, Switch, } from '@mui/material'
import { Person,Settings,AccountBox,Storefront,ModeNight } from '@mui/icons-material'

import { Box } from '@mui/system'
import React from 'react'

const sideBar = ({setTheme,theme}) => {
    return (
        <Box  flex={1} p={2} sx={{ display: { xs: "none", sm: "block" } }}>
            <Box position="fixed"sx={{ display: "block" }} >
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
                            <Storefront/>
                        </ListItemIcon>
                        <ListItemText primary="Marketplace" />
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
                <ListItem disablePadding>
                    <ListItemButton component="a" href="#home">
                        <ListItemIcon>
                            <ModeNight/>
                        </ListItemIcon>
                        <Switch onChange={e=>setTheme(theme=="light"?"dark" : "light")} />
                    </ListItemButton>
                </ListItem>
            </List>
           </Box>
        </Box>
    )
}

export default sideBar