import { Pets,Mail,Notifications } from '@mui/icons-material'
import { AppBar,Box,Typography,styled,Toolbar, InputBase, Icon, Badge, Avatar, } from '@mui/material'
import React from 'react'

const StyledToolBar = styled(Toolbar)({
    display : "flex",
    justifyContent : "space-between",
})
const Search = styled("div")(({theme}) => ({
    backgroundColor : "white",
    padding : "0 10px",
    borderRadius : theme.shape.borderRadius,
    width : "40%",
}))
const Icons = styled(Box)(({theme}) => ({
    display : "none",
    gap:"20px",
    alignItems : "center",
    [theme.breakpoints.up("sm")] : {
        display : "flex",
    }
}))
const UserBox = styled(Box)(({theme}) => ({
    display : "flex",
    gap:"10px",
    alignItems : "center",
    [theme.breakpoints.up("sm")] : {
        display : "none",
    }
}))
const navbar = () => {
  return (
    <AppBar position='sticky'>
        <StyledToolBar>
            <Typography variant="h6" sx={{display:{xs:"none",sm:"block"}}}>
                LOGO
            </Typography>
            <Pets sx={{display:{xs:"block",sm:"none"}}}/>
            <Search>
                <InputBase placeholder='Search ...'></InputBase>
            </Search>
            <Icons>
                <Badge badgeContent={4} color="error">
                    <Mail/>
                </Badge>
                <Badge badgeContent={4} color="error">
                    <Notifications />
                </Badge>
                <Avatar sx={{width:30, height:30}} src=""></Avatar>
            </Icons>
            <UserBox>
                 <Avatar sx={{width:30, height:30}} src=""></Avatar>
                 <Typography variant="span">Samer</Typography>
            </UserBox>
        </StyledToolBar>
    </AppBar>
  )
}

export default navbar