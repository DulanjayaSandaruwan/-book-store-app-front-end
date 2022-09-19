import React, { useState } from 'react'
import { AppBar, Tab, Tabs, Toolbar, Typography } from '@mui/material'
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import { NavLink } from 'react-router-dom';

const Header = () => {

  const [value, setValue] = useState()

  return (
    <div>
      <AppBar position='sticky'>
        <Toolbar>
          <Typography><LibraryBooksIcon /></Typography>
            <Tabs 
              sx = {{ml:'auto'}}
              textColor='inherit' 
              indicatorColor='primary' 
              value={value} 
              onChange={(e, val)=> setValue(val)} 
            >
              <Tab LinkComponent={NavLink} to="/add" label="Add Book"/>
              <Tab LinkComponent={NavLink} to="/books" label="Books"/>
              <Tab LinkComponent={NavLink} to="/about" label="About Us"/>
            </Tabs>
        </Toolbar>  
      </AppBar>
    </div>
  )
}

export default Header
