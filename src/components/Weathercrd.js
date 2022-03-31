import { Typography } from "@mui/material";
import { Box } from "@mui/material";

function WeatherCard(props) {
    const {weatherData, apiError} = props;

    const makeWeatherInfo = () => {
        const {temp, feels_like, temp_min, temp_max, humidity} = weatherData.main;
        return <Box>
            <Typography>{`현재날씨: ${weatherData.weather[0].main}`}</Typography>
            <img src=""/>
            <Typography>{`현재온도: ${temp}℃ 체감온도: ${feels_like}℃`}</Typography>
            <Typography>{`최저기온: ${temp_min}℃ 최고기온: ${temp_max}℃ 습도: ${humidity}%`}</Typography>
        </Box>
    }
    return <>
    {apiError ?
     <Typography>{apiError.message}</Typography>
     :
     <Typography>날씨정보 없음</Typography>
    }
    </>
}

export default WeatherCard;