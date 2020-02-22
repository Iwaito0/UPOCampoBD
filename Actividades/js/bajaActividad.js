"use strict"
$("#btnAceptarBajaActividad").click(aceptarBajaActividad);

function aceptarBajaActividad(){
     // Recoger valores del formulario
    let iID = frmBajaActividad.txtId.value.trim();
    if(iID!=""){
    var sParametros = "datos=" + JSON.stringify(iID);

    $.ajax({url:encodeURI("Actividades/bajaActividad.php"),
            async: true,
            data: sParametros,
            method: "POST",
            success: respuestaBajaActividad})
    }
}
function respuestaBajaActividad(oDatos){

    oDatos = JSON.parse(oDatos);
    if (oDatos.error) {
        alert(oDatos.mensaje);
    } else {
        alert(oDatos.mensaje);
        frmBajaActividad.reset();
        $("#frmBajaActividad").hide("normal");
    }  
}