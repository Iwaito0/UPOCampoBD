"use strict"
$("#btnAceptarBajaCliente").click(aceptarBajaCliente);

function aceptarBajaCliente(){
     // Recoger valores del formulario
    let sNif = frmBajaCliente.txtNifBaja.value.trim();
    if(sNif!=""){
    var sParametros = "datos=" + JSON.stringify(sNif);

    $.post("Clientes/bajaCliente.php", sParametros, respuestaBajaCliente, 'json');  
    }
}
function respuestaBajaCliente(oDatos){
    if (oDatos.error) {
        alert(oDatos.mensaje);
    } else {
        alert(oDatos.mensaje);
        frmBajaCliente.reset();
        $("#frmBajaCliente").hide("normal");
    }  
}