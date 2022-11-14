import '../../styles/app.css';
import React, { useState, useEffect } from "react"
import Axios from "axios"

const VentasScreen = () => {

    const [idVenta, setIdVenta] = useState("")
    const [zonaVenta, setZonaVenta] = useState("")
    const [fechaVenta, setFechaVenta] = useState("")
    const [valorVenta, setValorVenta] = useState("")
    const [vendedores, setVendedores] = useState([])
    const [ventas, setVentas] = useState([])
  
    useEffect(() => {
      Axios.get('http://localhost:3001/api/get/vendedores').then((response)=>{
        setVendedores(response.data)
      })
    }, [])
  
    useEffect(() => {
      Axios.get('http://localhost:3001/api/get/ventas').then((response)=>{
        setVentas(response.data)
      })
    }, [])
  
  
    const enviarVenta = () => {
      if(vendedores.find(vendedor => vendedor.idVendedor == idVenta)){
        if(valorVenta >= 2000000){
            Axios.post('http://localhost:3001/api/insert/venta', {idVenta: idVenta, zonaVenta: zonaVenta, fechaVenta: fechaVenta, valorVenta: valorVenta}).then(() => {
                setIdVenta("")
                setZonaVenta("")
                setFechaVenta("")
                setValorVenta("")
        })
        }else{
            alert("El valor de la venta no puede ser menor de 2 (Dos) Millones.")
        }
        
      }else{
        alert("Este vendedor no se encuentra registrado.")
        
      }
      
    }
  
    return (
      <div className="App">
  
        <h1 class="form">| VENTAS |</h1>
        <hr />
  
              <div class="page">
          <div class="field field_v1">
            <label for="first-name" class="ha-screen-reader">Identificacion del vendedor</label>
            <input value={idVenta} id="first-name" class="field__input" placeholder="e.g. 1021802xxxx" onChange={(e) => {
              setIdVenta(e.target.value)
            }}/>
            <span class="field__label-wrap" aria-hidden="true">
              <span class="field__label">Identificacion del vendedor</span>
            </span>
          </div>
          <div class="field field_v2">
            <label for="last-name" class="ha-screen-reader">Zona</label>
            <select class="field__input" onChange={(e) => {
              setZonaVenta(e.target.value)
            }}>
                <option value='0' selected>Escoge la zona de la venta</option>
                <option value='1'>Norte</option>
                <option value='2'>Sur</option>
            </select>
            <span class="field__label-wrap" aria-hidden="true">
              <span class="field__label">Zona</span>
            </span>
          </div>    
          <div class="field field_v3">
            <label for="email" class="ha-screen-reader">Fecha</label>
            <input value={fechaVenta} id="email" class="field__input" placeholder="e.g. dd/mm/aaaa" onChange={(e) => {
              setFechaVenta(e.target.value)
            }}/>
            <span class="field__label-wrap" aria-hidden="true">
              <span class="field__label">Fecha</span>
            </span>
          </div>
          <div class="field field_v3">
            <label for="email" class="ha-screen-reader">Valor de la venta</label>
            <input value={valorVenta} id="email" class="field__input" placeholder="e.g. 2000000 - +100000000" onChange={(e) => {
              setValorVenta(e.target.value)
            }}/>
            <span class="field__label-wrap" aria-hidden="true">
              <span class="field__label">Valor de la venta</span>
            </span>
          </div>
          <button type='submit' onClick={() => {
            enviarVenta()
            setIdVenta("")
            setFechaVenta("")
            setValorVenta("")
            alert("Venta enviada con exito.")
          }} class="btn">Guardar venta</button>
        </div>
      </div>
    )
};

export default VentasScreen;