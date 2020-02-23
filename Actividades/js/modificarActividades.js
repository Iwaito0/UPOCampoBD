"use strict"

var btnSeleccionarActividad = document.getElementById("btnSeleccionarActividades");
var btnAceptarModificarActividad = document.getElementById("btnAceptarModificarActividades");
var btnCancelarModificarActividad = document.getElementById("btnCancelarModificarActividades");
var inputIDActividad = document.getElementById("txtIDModificarActividad");
var inputNombreActividad = document.getElementById("txtNombreModificarActividad");
var inputPrecioActividad = document.getElementById("txtPrecioModificarActividad");

console.log("He entrado en el menú");

$("#btnSeleccionarActividades").click(seleccionarActividad);
$("#btnAceptarModificarActividades").click(modificarActividad);
$("#btnCancelarModificarActividades").click(cancelarModificarActividad);

function seleccionarActividad(){
    console.log("He entrado en Seleccionar");
    let iID = frmModificaActividades.txtID.value.trim();
    $.get("Actividades/getActividadID.php", $("#frmModificaActividades").serialize(),rellenarCampos,'json');
}

function rellenarCampos(oDatos){

    console.log("He entrado en el Rellenar");

    if (oDatos["datos"] != "") {
        console.log("Se mandan datos");
        inputIDActividad.disabled = true;
        btnSeleccionarActividad.disabled = true;

        inputNombreActividad.disabled = false;
        inputPrecioActividad.disabled = false;
        btnAceptarModificarActividad.disabled = false;
        btnCancelarModificarActividad.disabled = false;

        inputNombreActividad.value = oDatos["datos"][0]["nombre"];
        inputPrecioActividad.value = oDatos["datos"][0]["precio"];
        console.log("Todo en orden");
    }

    else {
        alert("No se encuentra ninguna actividad con esa ID");

        cancelarModificarActividad();
    }
}

function modificarActividad(){
    let sMensaje="";
    // Recoger valores del formulario
    let iID = frmModificaActividades.txtID.value.trim();
    let sNombre = frmModificaActividades.txtNombre.value.trim();
    let fPrecio = parseInt(frmModificaActividades.txtPrecioActividad.value.trim());

    if(!/^\d+$/.test(iID)){
        sMensaje+="El campo ID esta mal.\n";
        frmModificaActividades.txtID.classList.add("error");
    }
    else{
        frmModificaActividades.txtID.classList.remove("error");  
    }
    if(!/^[a-zA-ZÑñÁáÉéÍíÓóÚúÜü\s]+$/.test(sNombre)){
        sMensaje+="El campo Nombre esta mal\n";
        frmModificaActividades.txtNombre.classList.add("error");
    }
    else{
        frmModificaActividades.txtNombre.classList.remove("error");  
    }
    if(!/^[0-9]+([.][0-9]+)?$/.test(fPrecio)){
        sMensaje+="El campo Precio (Recuerde poner el prefijo )\n";
        frmModificaActividades.txtPrecioActividad.classList.add("error");
    }
    else{
        frmModificaActividades.txtPrecioActividad.classList.remove("error");  
    }
    

    if(sMensaje==""){
        var oActividad = {
            id: iID,
            nombre: sNombre,
            precio: fPrecio,
        };
        var sParametros = "datos=" + JSON.stringify(oActividad);
        $.post("Actividades/modificarActividad.php", sParametros, respuestaModificarActividad, 'json');
    }
    else{
        alert(sMensaje);
    }
}

function respuestaModificarActividad(oDatos){
    if (oDatos.error) {
        alert(oDatos.mensaje);
    } else {
        alert(oDatos.mensaje);
        frmModificaActividades.reset();
        $("#frmModificaActividades").hide("normal");
        cancelarModificarActividad();
    }  
}

function cancelarModificarActividad(){
    inputIDActividad.disabled = false;
    btnSeleccionarActividad.disabled = false;

    inputNombreActividad.disabled = true;
    inputPrecioActividad.disabled = true;
    btnAceptarModificarActividad.disabled = true;
    btnCancelarModificarActividad.disabled = true;

    frmModificaActividades.reset();
}