import React from 'react';
import ResponsiveAppBar from './ResponsiveAppBar.jsx';
import Card from './Card.jsx';
import CssBaseline from '@mui/material/CssBaseline';
import Title from './Title.jsx';

function App() {
  return (
    <>
      <CssBaseline /> {}
      <div style={{ backgroundColor: '#D6FFEF', minHeight: '100vh', width: '100%' }}>
        <ResponsiveAppBar />
        <Title />
        <Card />
      </div>
    </>
  );
}

export default App;