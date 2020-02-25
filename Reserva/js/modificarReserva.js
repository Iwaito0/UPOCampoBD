"use strict"
$.get("Reserva/getHabitaciones.php",mostrarHabitaciones,'json');
$.get("Reserva/getRegimen.php",mostrarRegimenes,'json');
$.get("Reserva/getParking.php",mostrarParkingDisponibles,'json');
$.get("Reserva/getActividades.php",mostrarActividadesDisponibles,'json');

$("#btnSeleccionarReserva").click(seleccionarReserva);
$("#btnAceptarModificarReserva").click(modificarReserva);
$("#btnCancelarModificarReserva").click(cancelarModificarReserva);


var botonSeleccionar = document.getElementById("btnSeleccionarReserva");
var btnModificarReserva = document.getElementById("btnAceptarModificarReserva");
var btnCancelarReserva = document.getElementById("btnCancelarModificarReserva");
var inputID = document.getElementById("txtIdModificar");
var numP = document.getElementById("txtNumModificar");
var chkin = document.getElementById("txtEntradaModificar");
var chkout = document.getElementById("txtSalidaModificar");
var numH = document.getElementById("selectListaHabModificar");
//var park = document.getElementById("selectListaParkingModificar");
var siPark = document.getElementById("siParkingMod");
var noPark = document.getElementById("noParkingMod");
//var act = document.getElementById("selectListaActividadModificar");
var siAct = document.getElementById("siActividadMod");
var noAct = document.getElementById("noActividadMod");
var reg = document.getElementById("selectListaRegModificar");

var selectParking = document.getElementById("selectListaParkingModificar");
selectParking.length = 0;
selectParking.style.display = "none";

var selectActividad = document.getElementById("selectListaActividadModificar");
selectActividad.length = 0;
selectActividad.style.display = "none";

var arrayAct = [];
var arrayHab = [];
var arrayReg = [];
var arrayPark = [];

inputID.disabled = false;
botonSeleccionar.disabled = false;

numP.disabled = true;
chkin.disabled = true;
chkout.disabled = true;
numH.disabled = true;
selectParking.disabled = true;
siPark.disabled = true;
noPark.disabled = true;
selectActividad.disabled = true;
siAct.disabled = true;
noAct.disabled = true;
reg.disabled = true;
btnModificarReserva.disabled = true;
btnCancelarReserva.disabled = true;

function seleccionarReserva(){
	let sID = frmModificarReserva.txtIdModificar.value.trim();
    $.get("Reserva/getReservaID.php", $("#frmModificarReserva").serialize(),rellenarCampos,'json');
}

function actualizarComboPrk() {
	if ($('[name=estadoParkingModificar]:checked').val()=='si') {
		$.get("Reserva/getParking.php",mostrarParkingDisponibles,'json');
		selectParking.style.display = "block";
	}
	else {
		selectParking.length = 0;
		selectParking.style.display = "none";
	}
}

function actualizarComboAct() {
	if ($('[name=estadoActividadModificar]:checked').val()=='si') {
		$.get("Reserva/getActividades.php",mostrarActividadesDisponibles,'json');
		selectActividad.style.display = "block";
	}
	else {
		selectActividad.length = 0;
		selectActividad.style.display = "none";
	}
}

function rellenarCampos(oDatos, sStatus, oXHR){
    if (oDatos["datos"] != "") {
        inputID.disabled = true;
        botonSeleccionar.disabled = true;

        numP.disabled = false;
        chkin.disabled = false;
        chkout.disabled = false;
        numH.disabled = false;
        selectParking.disabled = false;
        siPark.disabled = false;
        noPark.disabled = false;
        selectActividad.disabled = false;
        siAct.disabled = false;
        noAct.disabled = false;
        reg.disabled = false;
        btnModificarReserva.disabled = false;
        btnCancelarReserva.disabled = false;

        $('[name=estadoParkingModificar]').change(actualizarComboPrk);
		$('[name=estadoActividadModificar]').change(actualizarComboAct);

        numP.value = oDatos["datos"][0]["numero_personas"];
        chkin.value = oDatos["datos"][0]["checkin"];
        chkout.value = oDatos["datos"][0]["checkout"];
        let fPrecio = oDatos["datos"][0]["precio"];
        numH.value = oDatos["datos"][0]["numero_habitacion"];
        reg.value = oDatos["datos"][0]["regimen_alimentario"];

        if (oDatos["datos"][0]["numero_parking"]!='NO') {
        	siPark.checked = true;
	        selectParking.value = oDatos["datos"][0]["numero_parking"];
	        selectParking.style.display = "block";
	    }
	    else {
	    	noPark.checked = true;
	    	selectParking.style.display = "none";
	    }

	    if (oDatos["datos"][0]["actividades"]!='NO') {
        	siAct.checked = true;
        	let aActividades = [];
        	aActividades = oDatos["datos"][0]["actividades"].split(', ');
        	for (let i = 0; i < selectActividad.children.length; i++) {
        		for (let j = 0; j < aActividades.length; j++) {
        			if (selectActividad.children[i].value == aActividades[j]) {
        				selectActividad.children[i].selected = true;
        			}
        		}
        	}
	       	selectActividad.style.display = "block";
	    }
	    else {
	    	noAct.checked = true;
	    	selectActividad.style.display = "none";
	    }
    }

    else {
        alert("No se encuentra ninguna reserva con ese ID");

        cancelarModificarReserva();
    }
}

function modificarReserva() {
	let sMensaje="";
	let aActividadesElegidas = [];

    // Recoger valores del formulario
    let iID = parseInt(frmModificarReserva.txtIdModificar.value.trim());
    let iNumPersonas = parseInt(frmModificarReserva.txtNumModificar.value.trim());
    let dCheckin = frmModificarReserva.txtEntradaModificar.value.trim();
    let dCheckout = frmModificarReserva.txtSalidaModificar.value.trim();
    let iNumHabitacion = parseInt(frmModificarReserva.selectListaHabModificar.value.trim());
    let iParkingID = parseInt(frmModificarReserva.selectListaParkingModificar.value.trim());

    let valores = document.querySelectorAll("#selectListaActividadModificar");
    document.querySelectorAll("#selectListaActividadModificar option:checked").forEach(eleccion=> aActividadesElegidas.push(buscarActividadSeleccionada(eleccion.value)));
    let sRegimenID = frmModificarReserva.selectListaRegModificar.value.trim();
    let fPrecio = precioTotal(); //funcion totalPrecio
    let totalDias = obtenerTotalDiasReserva(dCheckin, dCheckout);

    if ($('[name=estadoParkingModificar]:checked').val()=='no') {
		iParkingID = "NO";
	}

    if($('[name=estadoActividadModificar]:checked').val()=='no'){
        aActividadesElegidas[0] = "NO";
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
        	Parking: iParkingID, 
        	Actividad: aActividadesElegidas.join(', '), 
        	Regimen: sRegimenID
        };

        var sParametros = "datos=" + JSON.stringify(oReserva);
        //console.log(sParametros);
        $.post("Reserva/modificarReserva.php", sParametros, respuestaModificarReserva, 'json');
		
	}
}

function cancelarModificarReserva(){
    inputID.disabled = false;
    botonSeleccionar.disabled = false;

    numP.disabled = true;
    chkin.disabled = true;
    chkout.disabled = true;
    numH.disabled = true;
    selectParking.disabled = true;
    siPark.disabled = true;
    noPark.disabled = true;
    selectActividad.disabled = true;
    siAct.disabled = true;
    noAct.disabled = true;
    reg.disabled = true;
    btnModificarReserva.disabled = true;
    btnCancelarReserva.disabled = true;

    frmModificarReserva.reset();
    selectActividad.style.display = "none";
    selectParking.style.display = "none";
}

function respuestaModificarReserva(oDatos){
    if (oDatos.error) {
        alert(oDatos.mensaje);
    } else {
        alert(oDatos.mensaje);
        inputID.disabled = false;
	    botonSeleccionar.disabled = false;

	    numP.disabled = true;
	    chkin.disabled = true;
	    chkout.disabled = true;
	    numH.disabled = true;
	    selectParking.disabled = true;
	    siPark.disabled = true;
	    noPark.disabled = true;
	    selectActividad.disabled = true;
	    siAct.disabled = true;
	    noAct.disabled = true;
	    reg.disabled = true;
	    btnModificarReserva.disabled = true;
	    btnCancelarReserva.disabled = true;
        frmModificarReserva.reset();

        selectActividad.style.display = "none";
    	selectParking.style.display = "none";
        $("#frmModificarReserva").hide("normal");
    }  
}

function mostrarHabitaciones(oHabitaciones)  {
	let aLista = document.getElementById("selectListaHabModificar");
	aLista.length = 0;
	arrayHab = oHabitaciones["datos"];
	let aHabitaciones = oHabitaciones["datos"];
	let aReserva = oHabitaciones["reservas"];
	let aDisponibles = [];
	/*let dFechaIni = frmAltaReserva.txtEntrada.value.trim();
	let dFechaFin = frmAltaReserva.txtSalida.value.trim();
	let iNumMaxPersonas = parseInt(frmAltaReserva.txtNum.value.trim());*/
	/*for (let i = 0; i < aHabitaciones.length; i++) {
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
	}*/

	for (let i = 0; i < aHabitaciones.length; i++) {
	    let opc = document.createElement("option");
	    opc.setAttribute("value", aHabitaciones[i].id);
	    let texto = document.createTextNode(aHabitaciones[i].id);
	    opc.appendChild(texto);
	    aLista.appendChild(opc);
	}
    
}

function mostrarRegimenes(oRegimen) {
    let aLista = document.getElementById("selectListaRegModificar");
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

function mostrarParkingDisponibles(oParking) {
	selectParking.length = 0;
	arrayPark = oParking["datos"];
	let aParking = oParking["datos"];
    let aReserva = oParking["reservas"];
    /*let dFechaIni = frmAltaReserva.txtEntrada.value.trim();
	let dFechaFin = frmAltaReserva.txtSalida.value.trim();*/

    //alert(dFechaIni+" "+dFechaFin);

    /*for (let i = 0; i < aParking.length; i++) {
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
    }*/

    for (let i = 0; i < aParking.length; i++) {
        let opc = document.createElement("option");
        opc.setAttribute("value", aParking[i].id);
        let texto = document.createTextNode(aParking[i].id);
        opc.appendChild(texto);
        selectParking.appendChild(opc);
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

function precioTotal(){
	let aActividadesElegidas = [];
	let precioActividades = 0;
	let precioParking = 0;
	let total = 0;
	document.querySelectorAll("#selectListaActividadModificar option:checked").forEach(eleccion=> aActividadesElegidas.push(buscarPrecioActividadSeleccionada(eleccion.value)));
	let precioHabitacion = parseFloat(buscarPrecioHabitacionSeleccionada(document.querySelector("#selectListaHabModificar option:checked").value));
    let precioRegimen = parseFloat(buscarPrecioRegimenSeleccionado(document.querySelector("#selectListaRegModificar option:checked").value));

    if ($('[name=estadoActividadModificar]:checked').val()=='si') {
		for(var i = 0; i < aActividadesElegidas.length; i++)
	    {
	        precioActividades += parseFloat(aActividadesElegidas[i]);
	    }
	}
	else {
		precioActividades = 0;
	}

	if ($('[name=estadoParkingModificar]:checked').val()=='si') {
		precioParking = parseFloat(buscarPrecioParkingSeleccionado(document.querySelector("#selectListaParkingModificar option:checked").value));
	}
	else {
		precioParking = 0;
	}

    total = precioHabitacion+precioParking+precioRegimen+precioActividades;
    return total;
}

function obtenerTotalDiasReserva(entrada, salida)
{
    let ent = new Date(entrada);
    let sal = new Date(salida);

    ent.getTime();
    sal.getTime();

    let diff = sal-ent;

    return diff/(1000*60*60*24);

}