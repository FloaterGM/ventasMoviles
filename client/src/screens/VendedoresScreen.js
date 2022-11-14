import '../../styles/app.css';
import React, { useState, useEffect } from "react"
import Axios from "axios"

const VendedoresScreen = () => {

    const [idVendedor, setIdVendedor] = useState("")
    const [idmessage, setIdmessage] = useState('');
    const [nombreVendedor, setNombreVendedor] = useState("")
    const [titularmessage, setTitularmessage] = useState('');
    const [emailVendedor, setEmailVendedor] = useState("")
    const [totalComisiones, setTotalComisiones] = useState(0)
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

    const consultarComisiones = () =>{
        let acumComisiones = 0;
            ventas.forEach(venta => {
                if(venta.idVendedor == idVendedor){
                    acumComisiones = acumComisiones + venta.valorComision;
                    console.log(venta.valorComision)
                }
            })
        console.log(acumComisiones)
        return acumComisiones;
    }
    
    const consultarVendedor = () => {
      let datosVendedor
      if(vendedores.find(vendedor => vendedor.idVendedor == idVendedor)){
        datosVendedor = vendedores.find(vendedor => vendedor.idVendedor == idVendedor)
        console.log(datosVendedor)
        
        
        setIdVendedor(datosVendedor.idVendedor)
        setNombreVendedor(datosVendedor.nombreVendedor)
        setEmailVendedor(datosVendedor.correoVendedor)
        setTotalComisiones(consultarComisiones())
      }else{
        alert("Este vendedor no existe en la base de datos") 
      }
    }

    const validacionID = () => {
        const regEx = /^[0-9]+$/
        if(regEx.test(idVendedor)){
          setIdmessage('')
          return true;
          console.log("idtrue")
        }
        else{
          setIdmessage("El ID solo admite numeros")
          return false;
          console.log("id")
        }
      }
    
      const validacionTitular = () => {
        const regEx = /^[a-zA-Z\s]+$/
        if(regEx.test(nombreVendedor)){
          setTitularmessage('')
          return true;
        }
        else{
          setTitularmessage("Solo se admiten letras y espacios")
          return false;
        }
      }
  
  
    const enviarVendedor = () => {
      if(vendedores.find(vendedor => vendedor.idVendedor == idVendedor)){
        alert("Este vendedor ya se encuentra registrado en la base de datos.")
      }else{
        Axios.post('http://localhost:3001/api/insert/vendedor', {idVendedor: idVendedor, nombreVendedor: nombreVendedor, emailVendedor: emailVendedor}).then(() => {
        
        })
      }
      
    }
  
    return (
      <div className="App">
  
        <h1 class="form">| VENDEDORES |</h1>
        <hr />
  
              <div class="page">
          <div class="field field_v1">
            <label for="first-name" class="ha-screen-reader">Identificacion</label>
            <input value={idVendedor} id="first-name" class="field__input" placeholder="e.g. 1021802xxxx" onChange={(e) => 
              setIdVendedor(e.target.value)
            }/>
            <span class="field__label-wrap" aria-hidden="true">
              <span class="field__label">Identificacion</span>
            </span>
          </div>
          <label class="alerta">{idmessage}</label>
          <div class="field field_v2">
            <label for="last-name" class="ha-screen-reader">Nombre</label>
            <input value={nombreVendedor} id="last-name"  class="field__input" placeholder="e.g. Carlos" onChange={(e) => 
              setNombreVendedor(e.target.value)
            }/>
            <span class="field__label-wrap" aria-hidden="true">
              <span class="field__label">Nombre</span>
            </span>
          </div>
          <label class="alerta">{titularmessage}</label>    
          <div class="field field_v3">
            <label for="email" class="ha-screen-reader">Correo</label>
            <input value={emailVendedor} id="email" class="field__input" placeholder="e.g. nombre@dominio.com" onChange={(e) => 
              setEmailVendedor(e.target.value)
            }/>
            <span class="field__label-wrap" aria-hidden="true">
              <span class="field__label">Correo</span>
            </span>
          </div>
          <div class="field field_v3">
            <label for="email" class="ha-screen-reader">Comisiones</label>
            <input value={totalComisiones} id="email" class="field__input" disabled='True'/>
            <span class="field__label-wrap" aria-hidden="true">
              <span class="field__label">Comisiones</span>
            </span>
          </div>
          <button onClick={() => {
            if(idVendedor != "" && nombreVendedor != "" && emailVendedor != ""){
                if(validacionID() == true){
                    if(validacionTitular() == true){
                        enviarVendedor()
                        alert("Vendedor guardado con exito")
                        setIdVendedor("")
                        setNombreVendedor("")
                        setEmailVendedor("")
                        setTotalComisiones("")
                    }
                    else{
                        alert("No se puede enviar el vendedor si los campos no cumplen los requisitos")
                    }
                }
                else{
                    alert("No se puede enviar el vendedor si los campos no cumplen los requisitos")
                }
            }            
            else{
                alert("Todos los campos deben ser llenados.")
            }
          }} class="btn">Guardar vendedor</button>
          <button onClick={() => {
            console.log(idVendedor)
            console.log(nombreVendedor)
            console.log(emailVendedor)
            console.log(totalComisiones)
            consultarVendedor()
            
          }} class="btn">Consultar vendedor</button>
          <button onClick={() => {
            setIdVendedor("")
            setNombreVendedor("")
            setEmailVendedor("")
            setTotalComisiones("")
          }} class="btn">Limpiar</button>
        </div>
      </div>
    )
};

export default VendedoresScreen;