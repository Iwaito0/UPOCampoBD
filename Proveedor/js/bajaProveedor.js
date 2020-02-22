"use strict"
$("#btnAceptarBajaProveedor").click(aceptarBajaProveedor);

function aceptarBajaProveedor(){
     // Recoger valores del formulario
    let sCif = frmBajaProveedores.txtIdBaja.value.trim();
    if(sCif!=""){
    var sParametros = "datos=" + JSON.stringify(sCif);

    $.post("Provvedor/bajaProveedor.php", sParametros, respuestaBajaProveedor, 'json');  
    }
}
function respuestaBajaProveedor(){
    if (oDatos.error) {
        alert(oDatos.mensaje);
    } else {
        alert(oDatos.mensaje);
        frmBajaProveedores.reset();
        $("#frmBajaProveedores").hide("normal");
    }  
}