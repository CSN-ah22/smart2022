import Container from '@mui/material/Container';
import { ThemeProvider, useTheme, createTheme } from '@mui/material/styles';
import Switch from '@mui/material/Switch';
import Box from '@mui/material/Box';
import './App.css';
import React, { useEffect, useState } from 'react';
import UserCardList from './components/UserCardList';
import { makeUserDatas } from './Utils';
import axios from 'axios';
import WeatherCard from './components/Weathercrd';

const userDatas = makeUserDatas(15);

  const UserDatas = [];

 function App() {
const [useDarkMode, setUseDarkMode] = useState(true);
const [weatherData, setWeatherData] = useState(null);
const [apiError, setApiError] = useState(null);
  
  const handleChange = (event) => {
    console.log(event)
    setUseDarkMode(event.target.checked);
  };

   useEffect(() => {
     const callApi = async() =>{
      try{
        const result = await axios.get("https://api.openweathermap.org/data/2.5/weather?lat=37.3943&lon=126.9568&appid=06ed93a46e05bcc19ab1beac8ea685b9&lang=kr&units=metric&appid=06ed93a46e05bcc19ab1beac8ea685b9");
        setWeatherData(result.data);
        }catch(err){
          setApiError(err);
        }   
     }
     callApi();
    console.log("component did mount");
      
   }, []);

   useEffect(() => {
   }, [useDarkMode]);
  
   console.log("render");

  return (
    <ThemeProvider theme={createTheme({
      palette: {
        mode: useDarkMode? 'dark' : 'light',
      },
    })
  }>
    <Box sx={{bgcolor: 'background.default',color: 'text.primary',p: 1,}}>
      <WeatherCard weatherData={weatherData} apiError={apiError}/>
    </Box>
    <Box sx={{height: '100%',bgcolor: 'background.default',color: 'text.primary',p: 1,}}>

    <Switch
      defaultChecked color="warning" 
      onChange={handleChange}
      inputProps={{ 'aria-label': 'controlled' }}
    />
      
    <Container maxWidth="lg" sx={{p:1}}>

    <UserCardList userDatas={userDatas}/>

    </Container>
    </Box>
    </ThemeProvider>
  );
}

export default App;