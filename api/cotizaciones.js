import axios from 'axios'

const url = axios.create({
  baseURL:"https://api-dolar-argentina.herokuapp.com/api/"
});

const cotizaciones = async (divisa) => {
  const response = await url.get(`${divisa}`);
  return response.data

  
};



export default cotizaciones 


