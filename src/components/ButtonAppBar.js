import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';


export default function ButtonAppBar() {
  return (
    <div style={{ alignContent: 'center'}}>
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            LOGO
          </Typography>
          <Button color="inherit" href='https://github.com/aishaandatt/Captsone-CBIR/tree/main'>Github</Button>
          <Button color="inherit" href='https://github.com/aishaandatt/Captsone-CBIR/tree/main'>About Us</Button>
        </Toolbar>
      </AppBar>
    </Box>
    </div>
  );
}
