"use strict";
$("#btnAceptarAltaProveedor").click(aceptarAltaProveedor);

function aceptarAltaProveedor() {
	var sMensaje="";

	let sCIF = frmAltaProveedor.txtCifAlta.value.trim();
    let sNombre = frmAltaProveedor.txtNombreProveedorAlta.value.trim();
    let iTelefono = parseInt(frmAltaProveedor.txtTelefonoProveedorAlta.value.trim());

    if(!/^\d{8}[a-zA-Z]$/.test(sCIF)){
        sMensaje+="El campo CIF esta mal.\n";
        frmAltaProveedor.txtCifAlta.classList.add("error");
    }
    else{
        frmAltaProveedor.txtCifAlta.classList.remove("error");  
    }
    if(!/^[a-zA-ZÑñÁáÉéÍíÓóÚúÜü\s]+$/.test(sNombre)){
        sMensaje+="El campo nombre esta mal\n";
        frmAltaProveedor.txtNombreProveedorAlta.classList.add("error");
    }
    else{
        frmAltaProveedor.txtNombreProveedorAlta.classList.remove("error");  
    }
    if(!/^(\+34|0034|34)?[6|7|9][0-9]{8}$/g.test(iTelefono)){
        sMensaje+="El campo telefono esta mal (Recuerde poner el prefijo )\n";
        frmAltaProveedor.txtTelefonoProveedorAlta.classList.add("error");
    }
    else{
        frmAltaProveedor.txtTelefonoProveedorAlta.classList.remove("error");  
    }


    if(sMensaje==""){
       	var oProveedor = {
       		CIF: sCIF,
       		Nombre: sNombre,
       		Telefono: iTelefono
       	};

       	var sParametros = "datos=" + JSON.stringify(oProveedor);
       	$.post("Proveedor/altaproveedor.php", sParametros, respuestaAltaProveedor, 'json');
    }
    else{
        alert(sMensaje);
    }
}

function respuestaAltaProveedor(oDatos, sStatus, oXHR){
    if (oDatos.error) {
        alert(oDatos.mensaje);
    } else {
        alert(oDatos.mensaje);
        frmAltaProveedor.reset();
        $("#frmAltaProveedor").hide("normal");
    }  
}