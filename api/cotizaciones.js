import axios from 'axios';
const url = 'api-dolar-argentina.herokuapp.com';

const cotizaciones = async (divisa) =>{
    const cotiza = await axios.get(`${url}/${divisa}`)
    const response = cotiza.data;
    console.log(response)
    return response
}

cotizaciones('dolar')