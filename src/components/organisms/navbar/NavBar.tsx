import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar, Drawer, Box, ListItemText, ListItem, List, Typography, IconButton as MuiIconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

export const NavBar: React.FC = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [pageTitle, setPageTitle] = useState('Home'); // Default title is 'Home'

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  useEffect(() => {
    const routeToTitleMap: { [key: string]: string } = {
      '/': 'Home',
      '/about': 'About Us',
      '/contact': 'Contact Us',
    };

    // Set initial page title
    const currentPath = window.location.pathname;
    const title = routeToTitleMap[currentPath] || window.location.pathname;
    setPageTitle(title);

    // Update page title when route changes
    const handleRouteChange = () => {
      const newTitle = routeToTitleMap[window.location.pathname] || 'Page';
      setPageTitle(newTitle);
    };

    // Listen to route changes
    window.addEventListener('popstate', handleRouteChange);
    return () => window.removeEventListener('popstate', handleRouteChange);
  }, []);

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">{pageTitle}</Typography>
          <MuiIconButton
            edge="end"
            color="inherit"
            aria-label="menu"
            sx={{ display: { xs: 'block', md: 'none' }, ml: 'auto' }}
            onClick={handleDrawerToggle}
          >
            <MenuIcon />
          </MuiIconButton>
        </Toolbar>
      </AppBar>

      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={handleDrawerToggle}
        sx={{ display: { xs: 'block', md: 'none' } }}
      >
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={handleDrawerToggle}
          onKeyDown={handleDrawerToggle}
        >
          <List>
            {['Home', 'About', 'Contact'].map((text) => (
              <ListItem button key={text} onClick={() => window.location.href = `/${text.toLowerCase()}`}>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
};


