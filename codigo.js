"use strict";
//# sourceURL=codigo.js;
//Programa Princiapl

/*--------------EVENTOS DE MENU----------------*/

/*---------------MENU ALTA-------------*/

$("#altaCliente").click(mostrarAltaCliente);

$("#altaProveedor").click(mostrarAltaProveedor);

$("#altaActividad").click(mostrarAltaActividad);

$("#altaReserva").click(mostrarAltaReserva);


/*---------------MENU BAJA-------------*/


$("#bajaCliente").click(mostrarBajaCliente);

$("#bajaReserva").click(mostrarBajaReserva);

$("#bajaActividad").click(mostrarBajaActividad);

$("#bajaProveedor").click(mostrarBajaProveedor);

/*---------------MENU MODIFICAR-------------*/

$("#modificarCliente").click(mostrarModificarCliente);

$("#modificarReserva").click(mostrarModificarReserva);

$("#modificarActividad").click(mostrarModificarActividad);

$("#modificarProveedor").click(mostrarModificarProveedor);

/*--------------MENU LISTAR POR FILTRO--------------*/

/*--------------POR FECHA--------------*/

$("#listadoClientesPorFecha").click(mostrarListadoCliRes);

$("#listadoReservasPorFecha").click(mostrarListadoRes);

$("#listadoHabDispFecha").click(mostrarListadoHabDisp);

$("#listadoParkDispFecha").click(mostrarListadoParkDisp);

/*
/*-------------POR RESERVA-------------*/

$("#listadoParkingReserva").click(mostrarListadoParkRes);


$("#listadoRegimenReserva").click(mostrarListadoRegRes);


/*---------------MENU LISTADOS GENERALES--------------------*/
var menuListadosActividades = document.getElementById("listadoActividades");
menuListadosActividades.addEventListener("click", listadosActividades, false);

var menuListadosProveedores = document.getElementById("listadoProveedores");
menuListadosProveedores.addEventListener("click", listadosProveedores, false);

var menuListadosClientes = document.getElementById("listadoClientes");
menuListadosClientes.addEventListener("click", listadosClientes, false);

var menuListadosReservas = document.getElementById("listadoReservas");
menuListadosReservas.addEventListener("click", listadosReservas, false);

var menuListadosHabitaciones = document.getElementById("listadoHabitaciones");
menuListadosHabitaciones.addEventListener("click", listadosHabitaciones, false);

var menuListadosParking = document.getElementById("listadoParking");
menuListadosParking.addEventListener("click", listadosParking, false);

//---------------LISTADO POR RESERVAS---------------

function mostrarListadoParkRes(){
    $.get("Reserva/parkingReservado.php",mostrarParkingReservados,'json');
}
function mostrarParkingReservados(oDatos){
   console.log(oDatos["datos"]);	
    let pestana=window.open()
    pestana.document.write("<html><head><link rel='icon' href='./img/favicon.png' type='image/png'><title>Listado Filtros - Reservas con Parking</title><link rel='stylesheet' href='https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css' integrity='sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T' crossorigin='anonymous'></head></html>"); 
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
    oCelda.textContent="ID de Reserva";
    
    oCelda=oFila.insertCell(-1);
    oCelda.textContent="Fecha de entrada";

    oCelda=oFila.insertCell(-1);
    oCelda.textContent="Fecha de salida";
    
    //El cuerpo de la tabla
    let oTBody = document.createElement("TBODY");
    oTabla.appendChild(oTBody);
    
    for(let i=0; i<oDatos["datos"].length; i++){
        let oFila = oTBody.insertRow(-1);
    
        let oCelda = oFila.insertCell(-1);
        oCelda.textContent = oDatos["datos"][i]["numero_parking"];
    
        oCelda = oFila.insertCell(-1);
        oCelda.textContent = oDatos["datos"][i]["id"];
        
        oCelda = oFila.insertCell(-1);
        oCelda.textContent = oDatos["datos"][i]["checkin"];

        oCelda = oFila.insertCell(-1);
        oCelda.textContent = oDatos["datos"][i]["checkout"];
    }

    pestana.document.body.append(oTabla);
}


function mostrarListadoRegRes() {
    $.get("Reserva/regimenAlimenticio.php",mostrarRegimenAlimenticio,'json');
}
function mostrarRegimenAlimenticio(oDatos){

    let pestana=window.open();
    pestana.document.write("<html><head><link rel='icon' href='./img/favicon.png' type='image/png'><title>Listado Filtros - Régimen por Reservas</title><link rel='stylesheet' href='https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css' integrity='sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T' crossorigin='anonymous'></head></html>");
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
    oCelda.textContent="Precio por persona";

    let oTBody = document.createElement("TBODY");
    oTabla.appendChild(oTBody);

    for(let i=0; i<oDatos["datos"].length; i++){
        let oFila = oTBody.insertRow(-1);
    
        let oCelda = oFila.insertCell(-1);
        oCelda.textContent = oDatos["datos"][i]["id"];
    
        oCelda = oFila.insertCell(-1);
        oCelda.textContent = oDatos["datos"][i]["precio_persona"];
        
    }

    pestana.document.body.append(oTabla);
}




//Mostrar Formularios

function mostrarAltaCliente() {
    $("#formularios form:not('#frmAltaCliente')").hide("normal");
 
    // Verifico si ya he cargado el formulario antes
    if ($('#frmAltaCliente').length == 0) {

        $("#formularios").load("Clientes/altaCliente.html",
            function() {
                $.getScript("Clientes/js/altaCliente.js");
                $('#frmAltaCliente').show("normal");
            });
        }
        else
        {

    // Lo muestro si está oculto
    $('#frmAltaCliente').show("normal");
    }
}
function mostrarAltaProveedor() {
    $("#formularios form:not('#frmAltaProveedor')").hide("normal");
 
    // Verifico si ya he cargado el formulario antes
    if ($('#frmAltaProveedor').length == 0) {

        $("#formularios").load("Proveedor/altaProveedor.html",
            function() {
                $.getScript("Proveedor/js/altaProveedor.js");
                $('#frmAltaProveedor').show("normal");
            });
        }
        else
        {
    // Lo muestro si está oculto
    $('#frmAltaProveedor').show("normal");
    }
}

function mostrarAltaActividad(){
    $("#formularios form:not('#frmAltaActividades')").hide("normal");
 
    // Verifico si ya he cargado el formulario antes
    if ($('#frmAltaActividades').length == 0) {

        $("#formularios").load("Actividades/altaActividades.html",
            function() {
                $.getScript("Actividades/js/altaActividades.js");
                $('#frmAltaActividades').show("normal");
            });
        }
        else
        {
    // Lo muestro si está oculto
    $('#frmAltaActividades').show("normal");
    }
}

function mostrarAltaReserva() {
  
    $("#formularios form:not('#frmAltaReserva')").hide("normal");
 
    // Verifico si ya he cargado el formulario antes
    if ($('#frmAltaReserva').length == 0) {

        $("#formularios").load("Reserva/altaReserva.html",
            function() {
                $.getScript("Reserva/js/altaRerseva.js");
                $('#frmAltaReserva').show("normal");
            });
        }
        else
        {
    // Lo muestro si está oculto
    $('#frmAltaReserva').show("normal");
    }
}

function mostrarBajaCliente() {
    $("#formularios form:not('#frmBajaCliente')").hide("normal");
 
    // Verifico si ya he cargado el formulario antes
    if ($('#frmBajaCliente').length == 0) {

        $("#formularios").load("Clientes/bajaCliente.html",
            function() {
                $.getScript("Clientes/js/bajaCliente.js");
                $('#frmBajaCliente').show("normal");
            });
        }
        else
        {
    // Lo muestro si está oculto
    $('#frmBajaCliente').show("normal");
    }
}

function mostrarBajaReserva() {
    $("#formularios form:not('#frmBajaReserva')").hide("normal");
 
    // Verifico si ya he cargado el formulario antes
    if ($('#frmBajaReserva').length == 0) {

        $("#formularios").load("Reserva/bajaReserva.html",
            function() {
                $.getScript("Reserva/js/bajaReserva.js");
                $('#frmBajaReserva').show("normal");
            });
        }
        else
        {
    // Lo muestro si está oculto
    $('#frmBajaReserva').show("normal");
    }
}
function mostrarBajaActividad(){
    $("#formularios form:not('#frmBajaActividad')").hide("normal");
 
    // Verifico si ya he cargado el formulario antes
    if ($('#frmBajaActividad').length == 0) {

        $("#formularios").load("Actividades/bajaActividad.html",
            function() {
                $.getScript("Actividades/js/bajaActividad.js");
                $('#frmBajaActividad').show("normal");
            });
        }
        else
        {
    // Lo muestro si está oculto
    $('#frmBajaActividad').show("normal");
    }
}
function mostrarBajaProveedor(){
    $("#formularios form:not('#frmBajaProveedores')").hide("normal");
 
    // Verifico si ya he cargado el formulario antes
    if ($('#frmBajaProveedores').length == 0) {

        $("#formularios").load("Proveedor/bajaProveedor.html",
            function() {
                $.getScript("Proveedor/js/bajaProveedor.js");
                $('#frmBajaProveedores').show("normal");
            });
        }
        else
        {
    // Lo muestro si está oculto
    $('#frmBajaProveedores').show("normal");
    }
}

function mostrarModificarCliente()
{
	$("#formularios form:not('#frmModificarCliente')").hide("normal");

	// Verifico si ya he cargado el formulario antes
	if ($('#frmModificarCliente').length == 0)
	{
		$("#formularios").load("Clientes/modificarCliente.html",
			function()
			{
				$.getScript("Clientes/js/modificarCliente.js");
				$("#frmModificarCliente").show("normal");
			});
	}
	else
	{
		// Lo muestro si está oculto
		$("#frmModificarCliente").show("normal");
	}
}

function mostrarModificarReserva()
{
    $("#formularios form:not('#frmModificarReserva')").hide("normal");

    // Verifico si ya he cargado el formulario antes
    if ($('#frmModificarReserva').length == 0)
    {
        $("#formularios").load("Reserva/modificarReserva.html",
            function()
            {
                $.getScript("Reserva/js/modificarReserva.js");
                $("#frmModificarReserva").show("normal");
            });
    }
    else
    {
        // Lo muestro si está oculto
        $("#frmModificarReserva").show("normal");
    }
}

function mostrarModificarActividad()
{
    $("#formularios form:not('#frmModificaActividades')").hide("normal");

    // Verifico si ya he cargado el formulario antes
    if ($('#frmModificaActividades').length == 0)
    {
        $("#formularios").load("Actividades/modificarActividades.html",
            function()
            {
                $.getScript("Actividades/js/modificarActividades.js");
                $("#frmModificaActividades").show("normal");
            });
    }
    else
    {
        // Lo muestro si está oculto
        $("#frmModificaActividades").show("normal");
    }
}

function mostrarModificarProveedor()
{
    $("#formularios form:not('#frmModificaProveedor')").hide("normal");

    // Verifico si ya he cargado el formulario antes
    if ($('#frmModificaProveedor').length == 0)
    {
        $("#formularios").load("Proveedor/modificarProveedor.html",
            function()
            {
                $.getScript("Proveedor/js/modificarProveedor.js");
                $("#frmModificaProveedor").show("normal");
            });
    }
    else
    {
        // Lo muestro si está oculto
        $("#frmModificaProveedor").show("normal");
    }
}

function mostrarListadoCliRes(){
    $("#formularios form:not('#frmListadoCliResFecha')").hide("normal");
 
    // Verifico si ya he cargado el formulario antes
    if ($('#frmListadoCliResFecha').length == 0) {

        $("#formularios").load("Clientes/listadoClienteFecha.html",
            function() {
                $.getScript("Clientes/js/listadoClienteFecha.js");
                $('#frmListadoCliResFecha').show("normal");
            });
        }
        else
        {
    // Lo muestro si está oculto
    $('#frmListadoCliResFecha').show("normal");
    }
}

function mostrarListadoRes(){
    $("#formularios form:not('#frmListadoResFecha')").hide("normal");
 
    // Verifico si ya he cargado el formulario antes
    if ($('#frmListadoResFecha').length == 0) {

        $("#formularios").load("Reserva/listadoReservaFecha.html",
            function() {
                $.getScript("Reserva/js/listadoReservaFecha.js");
                $('#frmListadoResFecha').show("normal");
            });
        }
        else
        {
    // Lo muestro si está oculto
    $('#frmListadoResFecha').show("normal");
    }
}

function mostrarListadoHabDisp() {
    $("#formularios form:not('#frmListadoHabDispFecha')").hide("normal");
 
    // Verifico si ya he cargado el formulario antes
    if ($('#frmListadoHabDispFecha').length == 0) {

        $("#formularios").load("Habitaciones/listadoHabitacionesFecha.html",
            function() {
                $.getScript("Habitaciones/js/listadoHabitacionesPorFecha.js");
                $('#frmListadoHabDispFecha').show("normal");
            });
        }
        else
        {
    // Lo muestro si está oculto
    $('#frmListadoHabDispFecha').show("normal");
    }
}

function mostrarListadoParkDisp() {
    $("#formularios form:not('#frmListadoParkDispFecha')").hide("normal");
 
    // Verifico si ya he cargado el formulario antes
    if ($('#frmListadoParkDispFecha').length == 0) {

        $("#formularios").load("Parking/listadoParkingFecha.html",
            function() {
                $.getScript("Parking/js/frmListadoParkDispFecha.js");
                $('#frmListadoParkDispFecha').show("normal");
            });
        }
        else
        {
    // Lo muestro si está oculto
    $('#frmListadoParkDispFecha').show("normal");
    }
}

function listadosProveedores() {
	$("#formularios form:not('#frmListadoParkDispFecha')").hide("normal");
	$.getScript("Proveedor/js/listadoProveedores.js");
}

function listadosClientes() {
	$("#formularios form:not('#frmListadoParkDispFecha')").hide("normal");
	$.getScript("Clientes/js/listadoClientes.js");
}

function listadosReservas(){
	$("#formularios form:not('#frmListadoParkDispFecha')").hide("normal");
	$.getScript("Reserva/js/listadoReservas.js");
}

function listadosHabitaciones(){
	$("#formularios form:not('#frmListadoParkDispFecha')").hide("normal");
	$.getScript("Habitaciones/js/listadoHabitaciones.js");
}

function listadosParking(){
	$("#formularios form:not('#frmListadoParkDispFecha')").hide("normal");
	$.getScript("Parking/js/listadoParking.js");
}

function listadosActividades() {
	$("#formularios form:not('#frmListadoParkDispFecha')").hide("normal");
	$.getScript("Actividades/js/listadoActividades.js");
}
