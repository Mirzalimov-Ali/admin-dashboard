import React from 'react'
import { HeaderContainer } from '../styles/sidebar'
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';

import MenuIcon from '@mui/icons-material/Menu';

import TextField from '@mui/material/TextField';
import Sidebar from './sidebar';

function Header() {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box sx={{ width: 250, height: "100vh"}} role="presentation" onClick={toggleDrawer(false)}>
      <Sidebar/>
    </Box>
  );
  return (
    <HeaderContainer>
      <div>
          <Button onClick={toggleDrawer(true)}><MenuIcon /></Button>
          <Drawer open={open} onClose={toggleDrawer(false)}>
            {DrawerList}
          </Drawer>
      </div>
      <div>
        <TextField id="outlined-basic" label="Search" variant="filled" sx={{width: "200%", bgcolor: "white", borderRadius: "10px"}}/>
      </div>
      
    </HeaderContainer>
  )
}

export default Header
