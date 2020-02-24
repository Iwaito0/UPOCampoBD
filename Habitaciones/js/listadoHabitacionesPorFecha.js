"use strict"
$("#btnListarHabDispFecha").click(aceptarListadoHabitaciones);

function aceptarListadoHabitaciones(){
    let datosEntrada=frmListadoHabDispFecha.txtEntradaHabDispFecha.value;
    let datosSalida=frmListadoHabDispFecha.txtSalidaHabDispFecha.value;
        var oFechas = {
          fechaEntrada: datosEntrada,
          fechaSalida:  datosSalida
        };
        var sParametros = "datos=" + JSON.stringify(oFechas);
        $.get("Habitaciones/listadoHabitacionesFecha.php", sParametros, respuestaHabitacionesFecha, 'json');


}
function respuestaHabitacionesFecha(oDatos, sStatus, oXHR){
    let pestana=window.open();
	//console.log(JSON.stringify(oDatos));
	pestana.document.write("<html><head><title>Listado General - Habitaciones</title><link rel='stylesheet' href='https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css' integrity='sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T' crossorigin='anonymous'></head></html>");
	//Creacion de la tabla
    let oTabla=document.createElement("TABLE");
    oTabla.setAttribute("border","1");
    oTabla.classList.add("table","table-striped","table-dark");
    //El encabezado de la tabla
    let oTHead=oTabla.createTHead();
    let oFila=oTHead.insertRow(-1);
    let oCelda=oFila.insertCell(-1);
    oCelda.textContent="Numero de habitacion";

    oCelda=oFila.insertCell(-1);
    oCelda.textContent="Tipo";

    oCelda=oFila.insertCell(-1);
    oCelda.textContent="Precio";

    oCelda=oFila.insertCell(-1);
    oCelda.textContent="Ocupacion Maxima";

    //El cuerpo de la tabla
    let oTBody = document.createElement("TBODY");
    oTabla.appendChild(oTBody);

    for(let i=0; i<oDatos["datos"].length; i++){
        let oFila = oTBody.insertRow(-1);

        let oCelda = oFila.insertCell(-1);
        oCelda.textContent = oDatos["datos"][i]["id"];

        oCelda = oFila.insertCell(-1);
        oCelda.textContent = oDatos["datos"][i]["tipo"];

        oCelda = oFila.insertCell(-1);
        oCelda.textContent = oDatos["datos"][i]["precio"];

        oCelda = oFila.insertCell(-1);
        oCelda.textContent = oDatos["datos"][i]["ocupacion_max"];
    }

    pestana.document.body.append(oTabla);
}

    
