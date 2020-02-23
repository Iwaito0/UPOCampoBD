"use strict";

let pestana=window.open();
$.get("Actividades/getActividades.php",rellenarCampos,'json');

function rellenarCampos(oDatos, sStatus, oXHR) {
	//console.log(JSON.stringify(oDatos));
	pestana.document.write("<html><head><title>Listado General - Actividades</title><link rel='stylesheet' href='https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css' integrity='sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T' crossorigin='anonymous'></head></html>");
	//Creacion de la tabla
    let oTabla=document.createElement("TABLE");
    oTabla.setAttribute("border","1");
    oTabla.classList.add("table","table-striped","table-dark");
    //El encabezado de la tabla
    let oTHead=oTabla.createTHead();
    let oFila=oTHead.insertRow(-1);
    let oCelda=oFila.insertCell(-1);
    oCelda.textContent="ID";
    
    oCelda=oFila.insertCell(-1);
    oCelda.textContent="Nombre";
    
    oCelda=oFila.insertCell(-1);
    oCelda.textContent="Precio";
    
    
    //El cuerpo de la tabla
    let oTBody = document.createElement("TBODY");
    oTabla.appendChild(oTBody);
    
    for(let i=0; i<oDatos["datos"].length; i++){
        let oFila = oTBody.insertRow(-1);
    
        let oCelda = oFila.insertCell(-1);
        oCelda.textContent = oDatos["datos"][i]["id"];
    
        oCelda = oFila.insertCell(-1);
        oCelda.textContent = oDatos["datos"][i]["nombre"];

        oCelda = oFila.insertCell(-1);
        oCelda.textContent = oDatos["datos"][i]["precio"];
        
    }
    
    pestana.document.body.append(oTabla);
}