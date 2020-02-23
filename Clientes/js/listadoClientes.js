"use strict";

let pestana=window.open();
$.get("Clientes/getClientes.php",rellenarCampos,'json');

function rellenarCampos(oDatos, sStatus, oXHR) {
	//console.log(JSON.stringify(oDatos));
	pestana.document.write("<html><head><title>Listado General - Clientes</title><link rel='stylesheet' href='https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css' integrity='sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T' crossorigin='anonymous'></head></html>");
	let oTabla=document.createElement("TABLE");
    oTabla.setAttribute("border","1");
    oTabla.classList.add("table","table-striped","table-dark");
    //El encabezado de la tablais
    let oTHead=oTabla.createTHead();
    let oFila=oTHead.insertRow(-1);
    let oCelda=oFila.insertCell(-1);
    oCelda.textContent="NIF";
    
    oCelda=oFila.insertCell(-1);
    oCelda.textContent="Nombre";
    
    oCelda=oFila.insertCell(-1);
    oCelda.textContent="Telefono";
    
    oCelda=oFila.insertCell(-1);
    oCelda.textContent="Direccion";

    oCelda=oFila.insertCell(-1);
    oCelda.textContent="Email";

    oCelda=oFila.insertCell(-1);
    oCelda.textContent="Numero de Tarjeta";
    //El cuerpo de la tabla
    let oTBody = document.createElement("TBODY");
    oTabla.appendChild(oTBody);
    
    for(let i=0; i<oDatos["datos"].length; i++){
        let oFila = oTBody.insertRow(-1);
    
        let oCelda = oFila.insertCell(-1);
        oCelda.textContent = oDatos["datos"][i]["dni"];
    
        oCelda = oFila.insertCell(-1);
        oCelda.textContent = oDatos["datos"][i]["nombre"];

        oCelda = oFila.insertCell(-1);
        oCelda.textContent = oDatos["datos"][i]["telefono"];

        oCelda = oFila.insertCell(-1);
        oCelda.textContent = oDatos["datos"][i]["direccion"];

        oCelda = oFila.insertCell(-1);
        oCelda.textContent = oDatos["datos"][i]["email"];

        oCelda = oFila.insertCell(-1);
        oCelda.textContent = oDatos["datos"][i]["numero_tarjeta"];
        
    }
    
    pestana.document.body.append(oTabla);
}