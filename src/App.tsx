//import { useState } from 'react'
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './App.css'
import Indicator from './components/Indicator';
import Summary from './components/Summary';
import BasicTable from './components/BasicTable';
function App() {
  

  return (
    <Grid container spacing={5}>
	      <Grid xs={12} sm={4} md={3} lg={3}><Indicator title='Precipitación' subtitle='Probabilidad' value={0.13} /></Grid>
		  
	      <Grid xs={12} sm={4} md={3} lg={3}><Indicator title='Precipitación' subtitle='Probabilidad' value={0.13} /></Grid>
		 
		 
	      <Grid xs={12} sm={4} md={3} lg={3}><Indicator title='Precipitación' subtitle='Probabilidad' value={0.13} /></Grid>
		 
		 
	      <Grid xs={12} sm={4} md={3} lg={3}><Indicator title='Precipitación' subtitle='Probabilidad' value={0.13} /></Grid>
		 
		 
	      <Grid xs={12} sm={4} md={3} lg={4}><Summary></Summary></Grid>
		  
	      <Grid xs={12} sm={4} md={3} lg={8}><BasicTable /></Grid>
	     
		  
		  
		  
		  
	    </Grid>
    )
}

export default App
