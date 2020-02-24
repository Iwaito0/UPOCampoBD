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

var botonAceptar = document.getElementById("btnAceptarAltaReserva");
var botonComprobar = document.getElementById("btnComprobarDatos");
var id = document.getElementById("txtIdAlta");
var numP = document.getElementById("txtNumAlta");
var chkin = document.getElementById("txtEntradaAlta");
var chkout = document.getElementById("txtSalidaAlta");
var numH = document.getElementById("selectListaHab");
var nCli = document.getElementById("txtReservaClienteAlta");
var park = document.getElementById("selectListaParking");
var siPark = document.getElementById("siParking");
var noPark = document.getElementById("noParking");
var act = document.getElementById("selectListaActividad");
var siAct = document.getElementById("siActividad");
var noAct = document.getElementById("noActividad");
var reg = document.getElementById("selectListaReg");

var arrayAct = [];
var arrayHab = [];
var arrayReg = [];
var arrayPark = [];

botonAceptar.disabled = true;
botonComprobar.disabled = false;
id.disabled = false;
numP.disabled = false;
chkin.disabled = false;
chkout.disabled = false;
numH.disabled = false;
nCli.disabled = false;
park.disabled = false;
siPark.disabled = false;
noPark.disabled = false;
act.disabled = false;
siAct.disabled = false;
noAct.disabled = false;
reg.disabled = false;

var selectParking = document.getElementById("selectListaParking");
selectParking.length = 0;
selectParking.style.display = "none";

var selectActividad = document.getElementById("selectListaActividad");
selectActividad.length = 0;
selectActividad.style.display = "none";

function comprobarDatos(){
	let sMensaje="";
	let aActividadesElegidas = [];

    // Recoger valores del formulario
    let iID = parseInt(frmAltaReserva.txtIdAlta.value.trim());
    let iNumPersonas = parseInt(frmAltaReserva.txtNumAlta.value.trim());
    let dCheckin = frmAltaReserva.txtEntradaAlta.value.trim();
    let dCheckout = frmAltaReserva.txtSalidaAlta.value.trim();
    let iNumHabitacion = parseInt(frmAltaReserva.selectListaHab.value.trim());
    let sNifCliente = frmAltaReserva.txtReservaClienteAlta.value.trim();
    let iParkingID = parseInt(frmAltaReserva.selectListaParking.value.trim());

    let valores = document.querySelectorAll("#selectListaActividad");
    document.querySelectorAll("#selectListaActividad option:checked").forEach(eleccion=> aActividadesElegidas.push(buscarActividadSeleccionada(eleccion.value)));
    let sRegimenID = frmAltaReserva.selectListaReg.value.trim();
    let fPrecio = precioTotal(); //funcion totalPrecio
    //let totalDias = obtenerTotalDiasReserva(dCheckin, dCheckout);

    if ($('[name=estadoParking]:checked').val()=='no') {
        iParkingID = "NO";
    }

    if($('[name=estadoActividad]:checked').val()=='no'){
        aActividadesElegidas[0] = "NO";
    }

    if(!/^\d+$/.test(iID)){
        sMensaje+="Introduce una ID válida\n";
        frmAltaReserva.txtIdAlta.classList.add("error");
    }
    else{
        frmAltaReserva.txtIdAlta.classList.remove("error");  
    }
    if(!/^\d+$/.test(iNumPersonas)){
        sMensaje+="El campo numero de personas esta mal\n";
        frmAltaReserva.txtNumAlta.classList.add("error");
    }
    else{
        frmAltaReserva.txtNumAlta.classList.remove("error");  
    }

    if (sMensaje != "")
    {
        alert(sMensaje);
    }
    else
    {
        var oReserva = {
        	ID: iID, 
        	NumPersonas: iNumPersonas, 
        	Checkin: dCheckin, 
        	Checkout: dCheckout, 
        	Precio: fPrecio, 
        	NumHabitacion: iNumHabitacion, 
        	NifCliente: sNifCliente, 
        	Parking: iParkingID, 
        	Actividad: aActividadesElegidas.join(', '), 
        	Regimen: sRegimenID
        };

        var sParametros = "datos=" + JSON.stringify(oReserva);
        console.log(sParametros);
        
        botonAceptar.disabled = false;
		botonComprobar.disabled = true;
		id.disabled = true;
		numP.disabled = true;
		chkin.disabled = true;
		chkout.disabled = true;
		numH.disabled = true;
		nCli.disabled = true;
		park.disabled = true;
		siPark.disabled = true;
		noPark.disabled = true;
		act.disabled = true;
		siAct.disabled = true;
		noAct.disabled = true;
		reg.disabled = true;

		$("#btnAceptarAltaReserva").click(function(){
			aceptarAltaReserva(sParametros);
		});
	}
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
	arrayHab = oHabitaciones["datos"];
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
	arrayPark = oParking["datos"];
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
	arrayReg = oRegimen["datos"];
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
	arrayAct = oActividad["datos"];
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

function precioTotal(){
	let aActividadesElegidas = [];
	let precioActividades = 0;
	let precioParking = 0;
	let total = 0;
	document.querySelectorAll("#selectListaActividad option:checked").forEach(eleccion=> aActividadesElegidas.push(buscarPrecioActividadSeleccionada(eleccion.value)));
	let precioHabitacion = parseFloat(buscarPrecioHabitacionSeleccionada(document.querySelector("#selectListaHab option:checked").value));
    let precioRegimen = parseFloat(buscarPrecioRegimenSeleccionado(document.querySelector("#selectListaReg option:checked").value));

    if ($('[name=estadoActividad]:checked').val()=='si') {
		for(var i = 0; i < aActividadesElegidas.length; i++)
	    {
	        precioActividades += parseFloat(aActividadesElegidas[i]);
	    }
	}
	else {
		precioActividades = 0;
	}

	if ($('[name=estadoParking]:checked').val()=='si') {
		precioParking = parseFloat(buscarPrecioParkingSeleccionado(document.querySelector("#selectListaParking option:checked").value));
	}
	else {
		precioParking = 0;
	}
    console.log(precioHabitacion);
    console.log(precioParking);
    console.log(precioRegimen);
    console.log(precioActividades);
    total = precioHabitacion+precioParking+precioRegimen+precioActividades;
    return total;
}

function buscarActividadSeleccionada(iID){
	if (arrayAct.filter(actividad=>actividad.nombre == iID).length == 1)
    {
        return arrayAct.filter(actividad=>actividad.nombre == iID)[0].nombre;
    }
}

function buscarPrecioActividadSeleccionada(iID){
	if (arrayAct.filter(actividad=>actividad.nombre == iID).length == 1)
    {
        return arrayAct.filter(actividad=>actividad.nombre == iID)[0].precio;
    }
}

function buscarPrecioHabitacionSeleccionada(iID){
	if (arrayHab.filter(habitacion=>habitacion.id == iID).length == 1)
    {
        return arrayHab.filter(habitacion=>habitacion.id == iID)[0].precio;
    }
}

function buscarPrecioRegimenSeleccionado(iID)
{
    if (arrayReg.filter(regimen=>regimen.id == iID).length == 1)
    {
        return arrayReg.filter(regimen=>regimen.id == iID)[0].precio_persona;
    }
}

function buscarPrecioParkingSeleccionado(iID){
	if (arrayPark.filter(plaza=>plaza.id == iID).length == 1)
    {
        return arrayPark.filter(plaza=>plaza.id == iID)[0].precio;
    }
}

function aceptarAltaReserva(oReserva){
	$.post("Reserva/altareserva.php", oReserva, respuestaAltaReserva, 'json');
}

function respuestaAltaReserva(oDatos, sStatus, oXHR){
	if (oDatos.error) {
        alert(oDatos.mensaje);
    } else {
        alert(oDatos.mensaje);
        frmAltaReserva.reset();
        $("#frmAltaReserva").hide("normal");

        botonAceptar.disabled = true;
		botonComprobar.disabled = false;
		id.disabled = false;
		numP.disabled = false;
		chkin.disabled = false;
		chkout.disabled = false;
		numH.disabled = false;
		nCli.disabled = false;
		park.disabled = false;
		siPark.disabled = false;
		noPark.disabled = false;
		act.disabled = false;
		siAct.disabled = false;
		noAct.disabled = false;
		reg.disabled = false;

		selectParking.length = 0;
		selectParking.style.display = "none";
		selectActividad.length = 0;
		selectActividad.style.display = "none";
    }
}