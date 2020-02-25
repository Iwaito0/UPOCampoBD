"use strict"
$("#btnSelecionarProveedor").click(seleccionarProveedor);
$("#btnModificarProveedor").click(modificarProveedor);
$("#btnCancelarProveedor").click(cancelarModificarProveedor);

var botonSeleccionar = document.getElementById("btnSelecionarProveedor");
var btnModificarCliente = document.getElementById("btnModificarProveedor");
var btnCacelarModCliente = document.getElementById("btnCancelarProveedor");
var inputCif = document.getElementById("txtCifModifica");
var inputNombre = document.getElementById("txtNombreProveedorModifica");
var inputTelefono = document.getElementById("txtTelefonoProveedorModifica");

function seleccionarProveedor(){
	let sCif = frmModificaProveedor.txtCifModifica.value.trim();
    $.get("Proveedor/getProveedorCif.php", $("#frmModificaProveedor").serialize(),rellenarCampos,'json');
}

function rellenarCampos(oDatos, sStatus, oXHR){
    if (oDatos["datos"] != "") {
        inputCif.disabled = true;
        botonSeleccionar.disabled = true;

        inputNombre.disabled = false;
        inputTelefono.disabled = false;
        btnModificarCliente.disabled = false;
        btnCacelarModCliente.disabled = false;

        inputNombre.value = oDatos["datos"][0]["nombre"];
        inputTelefono.value = oDatos["datos"][0]["telefono"];
    }

    else {
        alert("No se encuentra ningun proveedor con ese CIF");

        cancelarModificarProveedor();
    }
}

function modificarProveedor(){
    let sMensaje="";
    // Recoger valores del formulario
    let sCIF = frmModificaProveedor.txtCifModifica.value.trim();
    let sNombre = frmModificaProveedor.txtNombreProveedorModifica.value.trim();
    let iTelefono = parseInt(frmModificaProveedor.txtTelefonoProveedorModifica.value.trim());

    if(!/^\d{8}[a-zA-Z]$/.test(sCIF)){
        sMensaje+="El campo CIF esta mal.\n";
        frmModificaProveedor.txtCifModifica.classList.add("error");
    }
    else{
        frmModificaProveedor.txtCifModifica.classList.remove("error");  
    }
    if(!/^[a-zA-ZÑñÁáÉéÍíÓóÚúÜü\s]+$/.test(sNombre)){
        sMensaje+="El campo nombre esta mal\n";
        frmModificaProveedor.txtNombreProveedorModifica.classList.add("error");
    }
    else{
        frmModificaProveedor.txtNombreProveedorModifica.classList.remove("error");  
    }
    if(!/^(\+34|0034|34)?[6|7|9][0-9]{8}$/g.test(iTelefono)){
        sMensaje+="El campo telefono esta mal (Recuerde poner el prefijo )\n";
        frmModificaProveedor.txtTelefonoProveedorModifica.classList.add("error");
    }
    else{
        frmModificaProveedor.txtTelefonoProveedorModifica.classList.remove("error");  
    }
  	

    if(sMensaje==""){
        var oProveedor = {
            CIF: sCIF,
            Nombre: sNombre,
            Telefono: iTelefono,
        };
        var sParametros = "datos=" + JSON.stringify(oProveedor);
        $.post("Proveedor/modificarProveedores.php", sParametros, respuestaModificarProveedor, 'json');
    }
    else{
        alert(sMensaje);
    }
}

function respuestaModificarProveedor(oDatos){
    if (oDatos.error) {
        alert(oDatos.mensaje);
    } else {
        alert(oDatos.mensaje);
        frmModificaProveedor.reset();
        $("#frmModificaProveedor").hide("normal");
    }  
}

function cancelarModificarProveedor(){
    inputCif.disabled = false;
    botonSeleccionar.disabled = false;

    inputNombre.disabled = true;
    inputTelefono.disabled = true;
    btnModificarCliente.disabled = true;
    btnCacelarModCliente.disabled = true;

    frmModificaProveedor.reset();
}