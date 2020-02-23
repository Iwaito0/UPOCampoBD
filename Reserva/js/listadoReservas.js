"use strict";

let pestana=window.open();
$.get("Reserva/getReservas.php",rellenarCampos,'json');

function rellenarCampos(oDatos, sStatus, oXHR) {
	//console.log(JSON.stringify(oDatos));
	pestana.document.write("<html><head><title>Listado General - Reservas</title><link rel='stylesheet' href='https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css' integrity='sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T' crossorigin='anonymous'></head></html>");
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
    oCelda.textContent="Numero de Personas";
    
    oCelda=oFila.insertCell(-1);
    oCelda.textContent="Entrada";

    oCelda=oFila.insertCell(-1);
    oCelda.textContent="Salida";
    
    oCelda=oFila.insertCell(-1);
    oCelda.textContent="Precio";

    oCelda=oFila.insertCell(-1);
    oCelda.textContent="Numero de habitacion";

    oCelda=oFila.insertCell(-1);
    oCelda.textContent="NIF Cliente";

    oCelda=oFila.insertCell(-1);
    oCelda.textContent="Parking";
    
    oCelda=oFila.insertCell(-1);
    oCelda.textContent="Actividad";

    oCelda=oFila.insertCell(-1);
    oCelda.textContent="Regimen";

    //El cuerpo de la tabla
    let oTBody = document.createElement("TBODY");
    oTabla.appendChild(oTBody);
    
    for(let i=0; i<oDatos["datos"].length; i++){
        let oFila = oTBody.insertRow(-1);
    
        let oCelda = oFila.insertCell(-1);
        oCelda.textContent = oDatos["datos"][i]["id"];
    
        oCelda = oFila.insertCell(-1);
        oCelda.textContent = oDatos["datos"][i]["numero_personas"];

        oCelda = oFila.insertCell(-1);
        oCelda.textContent = oDatos["datos"][i]["checkin"];

        oCelda = oFila.insertCell(-1);
        oCelda.textContent = oDatos["datos"][i]["checkout"];

        oCelda = oFila.insertCell(-1);
        oCelda.textContent = oDatos["datos"][i]["precio"];
        
        oCelda = oFila.insertCell(-1);
        oCelda.textContent = oDatos["datos"][i]["numero_habitacion"];

        oCelda = oFila.insertCell(-1);
        oCelda.textContent = oDatos["datos"][i]["nif_cliente"];

        oCelda = oFila.insertCell(-1);
        oCelda.textContent = oDatos["datos"][i]["numero_parking"];

        oCelda = oFila.insertCell(-1);
        oCelda.textContent = oDatos["datos"][i]["actividades"];

        oCelda = oFila.insertCell(-1);
        oCelda.textContent = oDatos["datos"][i]["regimen_alimentario"];
    }
    
    pestana.document.body.append(oTabla);
}