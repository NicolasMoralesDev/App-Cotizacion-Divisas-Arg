import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { Button, StyleSheet, Text, View , 
        Alert} from 'react-native';
import cotizaciones from './api/cotizaciones';


export default function App() {

  const [moneda, setMonedas]=useState([]);
  const [euro, setEuro]=useState([]);


const traerDolares = async ()=> {
 const dolar = await  cotizaciones('dolaroficial');
 setMonedas(dolar)
};

const traerEuros = async ()=> {
  const euro = await  cotizaciones('euro/nacion');
  setEuro(euro)
 };

 traerEuros()
traerDolares()

  return (
    <>
        <View  style={styles.container}>
        <Text >Euro Oficial</Text>
        <Text > venta: ${euro.compra}</Text>
        <Text > compra: ${euro.venta}</Text> 
      </View>
      <View  style={styles.container}>
        <Text >Dolar Oficial</Text>
        <Text > venta: ${moneda.compra}</Text>
        <Text > compra: ${moneda.venta}</Text> 
      </View>
      <StatusBar style="auto" />
      </>
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    fontSize:30,
    alignItems: 'center',
    justifyContent: 'center',
    padding:2
  },
});
