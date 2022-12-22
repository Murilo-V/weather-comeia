export default interface OpenWeatherAPIRes {
  name: string;
  sys: { country: string };
  main: {
    temp: number;
    temp_max: number;
    temp_min: number;
  };
}
