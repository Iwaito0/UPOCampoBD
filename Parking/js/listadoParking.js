"use strict";

let pestana=window.open();
$.get("Parking/getParking.php",rellenarCampos,'json');

function rellenarCampos(oDatos, sStatus, oXHR) {
	//console.log(JSON.stringify(oDatos));
	pestana.document.write("<html><head><title>Listado General - Parking</title><link rel='stylesheet' href='https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css' integrity='sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T' crossorigin='anonymous'></head></html>");
	//Creacion de la tabla
    let oTabla=document.createElement("TABLE");
    oTabla.setAttribute("border","1");
    oTabla.classList.add("table","table-striped","table-dark");
    //El encabezado de la tabla
    let oTHead=oTabla.createTHead();
    let oFila=oTHead.insertRow(-1);
    let oCelda=oFila.insertCell(-1);
    oCelda.textContent="Numero de parking";
    
    oCelda=oFila.insertCell(-1);
    oCelda.textContent="precio";
    
    oCelda=oFila.insertCell(-1);
    oCelda.textContent="Ancho especial";
    
    //El cuerpo de la tabla
    let oTBody = document.createElement("TBODY");
    oTabla.appendChild(oTBody);
    
    for(let i=0; i<oDatos["datos"].length; i++){
        let oFila = oTBody.insertRow(-1);
    
        let oCelda = oFila.insertCell(-1);
        oCelda.textContent = oDatos["datos"][i]["id"];
    
        oCelda = oFila.insertCell(-1);
        oCelda.textContent = oDatos["datos"][i]["precio"];
        
        oCelda = oFila.insertCell(-1);
        oCelda.textContent = oDatos["datos"][i]["ancho_especial"];
    }
    
    pestana.document.body.append(oTabla);
}