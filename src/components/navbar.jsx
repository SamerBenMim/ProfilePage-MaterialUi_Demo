import { Pets,Mail,Notifications } from '@mui/icons-material'
import { AppBar,Menu,Box,Typography,styled,Toolbar, InputBase, Icon, Badge, Avatar, MenuItem, } from '@mui/material'
import React, { useState } from 'react'

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
    cursor : "pointer",

    [theme.breakpoints.up("sm")] : {
        display : "flex",
    }
}))
const UserBox = styled(Box)(({theme}) => ({
    display : "flex",
    gap:"10px",
    alignItems : "center",
    cursor : "pointer",
    [theme.breakpoints.up("sm")] : {
        display : "none",
    }
}))
const Navbar = () => {
  const [open, setOpen] = useState(false);
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
                <Avatar sx={{width:30, height:30}} src=""  onClick= {e=>setOpen(true)}></Avatar>
            </Icons>
            <UserBox>
                 <Avatar sx={{width:30, height:30}} src=""  onClick= {e=>setOpen(true)}></Avatar>
                 <Typography variant="span">Samer</Typography>
            </UserBox>
        </StyledToolBar>
        <Menu sx={{marginTop:4}}
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        // anchorEl={anchorEl}
        open={open}
        onClose={()=>{setOpen(false)}}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <MenuItem >Profile</MenuItem>
        <MenuItem >My account</MenuItem>
        <MenuItem >Logout</MenuItem>
      </Menu>
    </AppBar>
  )
}

export default Navbar