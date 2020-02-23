"use strict"
$("#btnSeleccionarActividades").click(seleccionarActividad);
$("#btnAceptarModificarActividades").click(modificarActividad);
$("#btnCancelarModificarActividades").click(cancelarModificarActividad);

let btnSeleccionarActividad = $("#btnSeleccionarActividades");
let btnModificarActividad = $("#btnAceptarModificarActividades");
let btnCancelarModificarActividad = $("#btnCancelarModificarActividades");
let inputIDActividad = $("#txtIDModificarActividad");
let inputNombreActividad = $("#txtNombreModificarActividad");
let inputPrecioActividad = $("#txtPrecioModificarActividad");

function seleccionarActividad(){
    let iID = frmModificaActividades.txtID.value.trim();
    $.get("Actividades/getActividadID.php", $("#frmModificaActividades").serialize(),rellenarCampos,'json');
}

function rellenarCampos(oDatos, sStatus, oXHR){
    if (oDatos["datos"] != "") {
        inputIDActividad.disabled = true;
        btnSeleccionarActividad.disabled = true;

        inputNombreActividad.disabled = false;
        inputPrecioActividad.disabled = false;
        btnModificarActividad.disabled = false;
        btnCancelarModificarActividad.disabled = false;

        inputNombreActividad.value = oDatos["datos"][0]["nombre"];
        inputPrecioActividad.value = oDatos["datos"][0]["precio"];
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
    }  
}

function cancelarModificarActividad(){
    inputIDActividad.disabled = false;
    btnSeleccionarActividad.disabled = false;

    inputNombreActividad.disabled = true;
    inputPrecioActividad.disabled = true;
    btnModificarActividad.disabled = true;
    btnCancelarModificarActividad.disabled = true;

    frmModificaActividades.reset();
}