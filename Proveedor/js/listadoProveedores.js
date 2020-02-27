"use strict";

$.get("Proveedor/getProveedores.php",rellenarCampos,'xml');

function rellenarCampos(oXML) {
    let pestana=window.open();
    var oOptions = oXML.querySelectorAll("proveedor");
	//console.log(JSON.stringify(oDatos));
	pestana.document.write("<html><head><title>Listado General - Proveedores</title><link rel='stylesheet' href='https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css' integrity='sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T' crossorigin='anonymous'></head></html>");
	let oTabla=document.createElement("TABLE");
    oTabla.setAttribute("border","1");
    oTabla.classList.add("table","table-striped","table-dark");
    //El encabezado de la tabla
    let oTHead=oTabla.createTHead();
    let oFila=oTHead.insertRow(-1);
    let oCelda=oFila.insertCell(-1);
    oCelda.textContent="CIF";
    
    oCelda=oFila.insertCell(-1);
    oCelda.textContent="Nombre";
    
    oCelda=oFila.insertCell(-1);
    oCelda.textContent="Telefono";
    
    
    //El cuerpo de la tabla
    let oTBody = document.createElement("TBODY");
    oTabla.appendChild(oTBody);
    
    for(let i=0; i<oOptions.length; i++){
        let oFila = oTBody.insertRow(-1);
    
        let oCelda = oFila.insertCell(-1);
        oCelda.textContent = oOptions[i].querySelector("cif").textContent;
    
        oCelda = oFila.insertCell(-1);
        oCelda.textContent = oOptions[i].querySelector("nombre").textContent;

        oCelda = oFila.insertCell(-1);
        oCelda.textContent = oOptions[i].querySelector("telefono").textContent;
        
    }
    
    pestana.document.body.append(oTabla);
}