"use strict";
// Hacer todo el funcionamiento de Alta Reserva aquí, cogiendo las variables que
// están en codigo.js y adaptar el código a esto. Falta coger también el funcionamiento
// en sí del código, cargar los combobox y hacer la reserva correctamente
$.get("Reserva/getHabitaciones.php",mostrarHabitaciones,'json');
$.get("Reserva/getRegimen.php",mostrarRegimenes,'json');
$.get("Reserva/getParking.php",mostrarParkingDisponibles,'json');
$.get("Reserva/getActividades.php",mostrarActividadesDisponibles,'json');

$("#btnComprobarDatos").click(comprobarDatos);
$("#txtNumAlta,#txtEntradaAlta,#txtSalidaAlta").blur(actualizarFormulario);
$('[name=estadoParking]').change(actualizarComboPrk);
$('[name=estadoActividad]').change(actualizarComboAct);

let selectParking = document.getElementById("selectListaParking");
selectParking.length = 0;
selectParking.style.display = "none";

let selectActividad = document.getElementById("selectListaActividad");
selectActividad.length = 0;
selectActividad.style.display = "none";

function comprobarDatos(){
	
}

function actualizarFormulario() {
	$.get("Reserva/getHabitaciones.php",mostrarHabitaciones,'json');
	$.get("Reserva/getParking.php",mostrarParkingDisponibles,'json');
}

function actualizarComboPrk() {
	if ($('[name=estadoParking]:checked').val()=='si') {
		$.get("Reserva/getParking.php",mostrarParkingDisponibles,'json');
		selectParking.style.display = "block";
	}
	else {
		selectParking.length = 0;
		selectParking.style.display = "none";
	}
}

function actualizarComboAct() {
	if ($('[name=estadoActividad]:checked').val()=='si') {
		$.get("Reserva/getActividades.php",mostrarActividadesDisponibles,'json');
		selectActividad.style.display = "block";
	}
	else {
		selectActividad.length = 0;
		selectActividad.style.display = "none";
	}
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
	for (let i = 0; i < aHabitaciones.length; i++) {
	    for (let j = 0; j < aReserva.length; j++) {
	        if (aHabitaciones[i].id == aReserva[j].numero_habitacion) {
	         	if ((aReserva[j].checkin > dFechaIni && aReserva[j].checkin <= dFechaFin && aReserva[j].checkout >= dFechaFin) || 
	         		(aReserva[j].checkin <= dFechaIni && aReserva[j].checkout >= dFechaFin) || 
	         		(aReserva[j].checkin <= dFechaIni && aReserva[j].checkout >= dFechaIni && aReserva[j].checkout < dFechaFin) || 
	         		(aReserva[j].checkin > dFechaIni && aReserva[j].checkout < dFechaFin)) {
	         		aHabitaciones.splice(i, 1);
	             	//i--;
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

function mostrarParkingDisponibles(oParking) {
	selectParking.length = 0;
	let aParking = oParking["datos"];
    let aReserva = oParking["reservas"];
    let dFechaIni = frmAltaReserva.txtEntrada.value.trim();
	let dFechaFin = frmAltaReserva.txtSalida.value.trim();

    //alert(dFechaIni+" "+dFechaFin);

    for (let i = 0; i < aParking.length; i++) {
        for (let j = 0; j < aReserva.length; j++) {
            if (aParking[i].id == aReserva[j].numero_parking) {
                if ((aReserva[j].checkin > dFechaIni && aReserva[j].checkin <= dFechaFin && aReserva[j].checkout >= dFechaFin) || 
                    (aReserva[j].checkin <= dFechaIni && aReserva[j].checkout >= dFechaFin) || 
                    (aReserva[j].checkin <= dFechaIni && aReserva[j].checkout >= dFechaIni && aReserva[j].checkout < dFechaFin) || 
                    (aReserva[j].checkin > dFechaIni && aReserva[j].checkout < dFechaFin)) {
                    aParking.splice(i, 1);
                    i--;
                }
            }
        }
    }

    for (let i = 0; i < aParking.length; i++) {
        let opc = document.createElement("option");
        opc.setAttribute("value", aParking[i].id);
        let texto = document.createTextNode(aParking[i].id);
        opc.appendChild(texto);
        selectParking.appendChild(opc);
    }
}

function mostrarRegimenes(oRegimen) {
    let aLista = document.getElementById("selectListaReg");
	aLista.length = 0;
    let aRegimen = oRegimen["datos"];

    for (let i = 0; i < aRegimen.length; i++) {
        let opc = document.createElement("option");
        opc.setAttribute("value", aRegimen[i].id);
        let texto = document.createTextNode(aRegimen[i].id);
        opc.appendChild(texto);
        aLista.appendChild(opc);
    }
}

function mostrarActividadesDisponibles(oActividad) {
    selectActividad.length = 0;
    let aActividad = oActividad["datos"];

    for (let i = 0; i < aActividad.length; i++) {
        let opc = document.createElement("option");
        opc.setAttribute("value", aActividad[i].nombre);
        let texto = document.createTextNode(aActividad[i].nombre);
        opc.appendChild(texto);
        selectActividad.appendChild(opc);
    }
}