"use strict";
$("#btnAceptarAltaActividades").click(aceptarAltaActividades);

function aceptarAltaActividades()
{
	let sMensaje="";

    // Recoger valores del formulario
    let iID = frmAltaActividades.txtID.value.trim();
    let sNombre = frmAltaActividades.txtNombreActividad.value.trim();
    let fPrecio = parseFloat(frmAltaActividades.txtPrecioActividad.value.trim());

    if(!/^\d+$/.test(iID)){
        sMensaje+="El campo ID esta mal. El campo ID debe ser un numero\n";
        frmAltaActividades.txtID.classList.add("error");
    }
    else{
        frmAltaActividades.txtID.classList.remove("error");  
    }
    if(!/^[a-zA-ZÑñÁáÉéÍíÓóÚúÜü\s]+$/.test(sNombre)){
        sMensaje+="El campo nombre esta mal\n";
        frmAltaActividades.txtNombreActividad.classList.add("error");
    }
    else{
        frmAltaActividades.txtNombreActividad.classList.remove("error");  
    }
    if(!/^[0-9]+([.][0-9]+)?$/.test(fPrecio)){
        sMensaje+="El campo precio esta mal (ten cuidado que el separador de decimales es el punto)\n";
        frmAltaActividades.txtPrecioActividad.classList.add("error");
    }
    else{
        frmAltaActividades.txtPrecioActividad.classList.remove("error");  
    }

    if(sMensaje=="")
    {

            // Instanciar objeto Ajax
            var oAjax = instanciarXHR();

            // Parametros
            var sParametros = "id="+iID+"&nombre="+sNombre+"&precio="+fPrecio;
            sParametros = encodeURI(sParametros);

            //Configurar la llamada --> Asincrono por defecto
            oAjax.open("GET", encodeURI("Actividades/altaActividades.php")+ "?" + sParametros);

            //Asociar manejador de evento de la respuesta
            oAjax.addEventListener("readystatechange", procesoRespuestaAltaActividad, false);

            //Hacer la llamada
            oAjax.send();
    }
    else
    {
        alert(sMensaje);
    }
}

function procesoRespuestaAltaActividad()
{
    var oAjax = this;

    // Proceso la respuesta cuando llega
    if (oAjax.readyState == 4 && oAjax.status == 200)
    {
        var oMensaje = JSON.parse(oAjax.responseText);
        if (oMensaje.error)
        {
            alert(oMensaje.mensaje);

        }
        else
        {
            alert(oMensaje.mensaje);
            frmAltaActividades.reset();
            $("#frmAltaActividades").hide("normal");
        }
    }
}

function instanciarXHR() {
    var xhttp = null;

    if (window.XMLHttpRequest) {
        xhttp = new XMLHttpRequest();
    } else // code for IE5 and IE6
    {
        xhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }

    return xhttp;
}