"use strict"
$("#btnAceptarBajaReserva").click(aceptarBajaReserva);

function aceptarBajaReserva(){
     // Recoger valores del formulario
    let sID = frmBajaReserva.txtIdBaja.value.trim();
    if(sID!=""){
    var sParametros = "datos=" + JSON.stringify(sID);

    $.post("Reserva/bajaReserva.php", sParametros, respuestaBajaReserva, 'json');  
    }
}
function respuestaBajaReserva(oDatos){
    if (oDatos.error) {
        alert(oDatos.mensaje);
    } else {
        alert(oDatos.mensaje);
        frmBajaReserva.reset();
        $("#frmBajaReserva").hide("normal");
    }  
}