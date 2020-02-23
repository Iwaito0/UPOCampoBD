"use strict";
// Hacer todo el funcionamiento de Alta Reserva aquí, cogiendo las variables que
// están en codigo.js y adaptar el código a esto. Falta coger también el funcionamiento
// en sí del código, cargar los combobox y hacer la reserva correctamente
$.get("Reserva/getHabitaciones.php",mostrarHabitaciones,'json');

$("#btnComprobarDatos").click(comprobarDatos);
$("#frmAltaReserva input").blur(actualizarFormulario);

function comprobarDatos(){
	
}

function actualizarFormulario() {
	$.get("Reserva/getHabitaciones.php",mostrarHabitaciones,'json');
}

function mostrarHabitaciones(oHabitaciones)  {
	let aLista = document.getElementById("selectListaHab");
	aLista.length = 0;
	let aHabitaciones = oHabitaciones["datos"];
	let aReserva = oHabitaciones["reservas"];
	let aDisponibles = [];
	let dFechaIni = frmAltaReserva.txtEntrada.value.trim();
	let dFechaFin = frmAltaReserva.txtSalida.value.trim();
	let iNumMaxPersonas = parseInt(frmAltaReserva.txtNum.value.trim());
	console.log(aHabitaciones);
	for (let i = 0; i < aHabitaciones.length; i++) {
	    for (let j = 0; j < aReserva.length; j++) {
	        if (aHabitaciones[i].id == aReserva[j].numero_habitacion) {
	         	if ((aReserva[j].checkin > dFechaIni && aReserva[j].checkin <= dFechaFin && aReserva[j].checkout >= dFechaFin) || 
	         		(aReserva[j].checkin <= dFechaIni && aReserva[j].checkout >= dFechaFin) || 
	         		(aReserva[j].checkin <= dFechaIni && aReserva[j].checkout >= dFechaIni && aReserva[j].checkout < dFechaFin) || 
	         		(aReserva[j].checkin > dFechaIni && aReserva[j].checkout < dFechaFin)) {
	         		aHabitaciones.splice(i, 1);
	             	i--;
	         	}
	        }
	    }
	    if (aHabitaciones[i].ocupacion_max < iNumMaxPersonas) {
	 		aHabitaciones.splice(i, 1);
	     	i--;
	 	}
	}

	for (let i = 0; i < aHabitaciones.length; i++) {
	    let opc = document.createElement("option");
	    opc.setAttribute("value", aHabitaciones[i].id);
	    let texto = document.createTextNode(aHabitaciones[i].id);
	    opc.appendChild(texto);
	    aLista.appendChild(opc);
	}
    
}

// function habDesParking() {
    
//     let selectParking = document.getElementById("selectListaParking");

//     if (estadoHabParking.checked) {
//         mostrarParkingDisponibles();
//         selectParking.style.display = "block";
//     }
//     else {
//         selectParking.length = 0;
//         selectParking.style.display = "none";
//     }
// }

// function habDesActividad() {
//     let selectActividad = document.getElementById("selectListaActividad");

//     if (estadoHabActividad.checked) {
//         mostrarActividades();
//         selectActividad.style.display = "block";
//     }
//     else {
//         selectActividad.length = 0;
//         selectActividad.style.display = "none";
//     }
// }

// function mostrarRegimenes(aLista) {
//     aLista.length = 0;
//     let aRegimen = oUPOCampo.buscarRegimen();

//     for (let i = 0; i < aRegimen.length; i++) {
//         let opc = document.createElement("option");
//         opc.setAttribute("value", aRegimen[i].id);
//         let texto = document.createTextNode(aRegimen[i].id);
//         opc.appendChild(texto);
//         aLista.appendChild(opc);
//     }
// }