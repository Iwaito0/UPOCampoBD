"use strict"
$("#btnSeleccionarCliente").click(seleccionarCliente);
$("#btnAceptarModificarCliente").click(modificarCliente);
$("#btnCancelarModificarCliente").click(cancelarModificarCliente);




function seleccionarCliente(){
    let sNif = frmModificarCliente.txtNifModificar.value.trim();
    $.get("Clientes/getClienteNif.php", $("#frmModificarCliente").serialize(),rellenarCampos,'json');
}

function rellenarCampos(oDatos, sStatus, oXHR){
    let botonSeleccionar = document.getElementById("btnSeleccionarCliente");
    let btnModificarCliente = document.getElementById("btnAceptarModificarCliente");
    let btnCacelarModCliente = document.getElementById("btnCancelarModificarCliente");
    let inputNif = document.getElementById("txtNifModificar");
    let inputNombre = document.getElementById("txtNombreClienteModificar");
    let inputTelefono = document.getElementById("txtTelefonoClienteModificar");
    let inputDireccion = document.getElementById("txtDireccionModificar");
    let inputEmail = document.getElementById("txtEmailModificar");
    let inputNumTarjeta = document.getElementById("txtNTarjetaModificar");

    if (oDatos["datos"] != "") {
        inputNif.disabled = true;
        botonSeleccionar.disabled = true;

        inputNombre.disabled = false;
        inputTelefono.disabled = false;
        inputDireccion.disabled = false;
        inputEmail.disabled = false;
        inputNumTarjeta.disabled = false;
        btnModificarCliente.disabled = false;
        btnCacelarModCliente.disabled = false;

        inputNombre.value = oDatos["datos"][0]["nombre"];
        inputTelefono.value = oDatos["datos"][0]["telefono"];
        inputDireccion.value = oDatos["datos"][0]["direccion"];
        inputEmail.value = oDatos["datos"][0]["email"];
        inputNumTarjeta.value = oDatos["datos"][0]["numero_tarjeta"];
    }

    else {
        alert("No se encuentra ningun cliente con ese NIF");

        cancelarModificarCliente();
    }
}

    function modificarCliente(){
        let sMensaje="";
        // Recoger valores del formulario
        let sDni = frmModificarCliente.txtNifModificar.value.trim();
        let sNombre = frmModificarCliente.txtNombreClienteModificar.value.trim();
        let iTelefono = parseInt(frmModificarCliente.txtTelefonoClienteModificar.value.trim());
        let sDireccion = frmModificarCliente.txtDireccionModificar.value.trim();
        let sEmail = frmModificarCliente.txtEmailModificar.value.trim();
        let iNumTarjeta = parseInt(frmModificarCliente.txtNTarjetaModificar.value.trim());
    
        if(!/^\d{8}[a-zA-Z]$/.test(sDni)){
            sMensaje+="El campo DNI esta mal\n";
            frmModificarCliente.txtNifModificar.classList.add("error");
        }
        else{
            frmModificarCliente.txtNifModificar.classList.remove("error");  
        }
    
        if(!/^[a-zA-ZÑñÁáÉéÍíÓóÚúÜü\s]+$/.test(sNombre)){
            sMensaje+="El campo nombre esta mal\n";
            frmModificarCliente.txtNombreClienteModificar.classList.add("error");
        }
        else{
            frmModificarCliente.txtNombreClienteModificar.classList.remove("error");  
        }
    
    
        if(!/^(\+34|0034|34)?[6|7|9][0-9]{8}$/g.test(iTelefono)){
            sMensaje+="El campo telefono esta mal (Recuerde poner el prefijo )\n";
            frmModificarCliente.txtTelefonoClienteModificar.classList.add("error");
        }
        else{
            frmModificarCliente.txtTelefonoClienteModificar.classList.remove("error");  
        }
        
        if(!/[a-zA-Z1-9À-ÖØ-öø-ÿ]+\.?(( |\-)[a-zA-Z1-9À-ÖØ-öø-ÿ]+\.?)*/.test(sDireccion)){
            sMensaje+="El campo direccion esta mal\n";
            frmModificarCliente.txtDireccionModificar.classList.add("error");
        }
        else{
            frmModificarCliente.txtDireccionModificar.classList.remove("error");  
        }
    
        if(!/^[a-zA-Z0-9.!#$%&’*+/=?^_{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/g.test(sEmail)){
            sMensaje+="El campo email esta mal\n";
            frmModificarCliente.txtEmailModificar.classList.add("error");
        }
        else{
            frmModificarCliente.txtEmailModificar.classList.remove("error");  
        }
        if(!/^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35d{3})d{11})$/.test(iNumTarjeta)){
            sMensaje+="El campo del numero de la tarjeta esta mal(recuerde que son 16 numeros y que empieza por 4)\n";
            frmModificarCliente.txtNTarjetaModificar.classList.add("error");
        }
        else{
            frmModificarCliente.txtNTarjetaModificar.classList.remove("error");  
        }
    
        if(sMensaje==""){
            var oCliente = {
                DNI: sDni,
                Nombre: sNombre,
                Telefono: iTelefono,
                Direccion: sDireccion,
                Email: sEmail,
                numTarjeta: iNumTarjeta
            };
            var sParametros = "datos=" + JSON.stringify(oCliente);
            $.post("Clientes/modificarClientes.php", sParametros, respuestaAltaCliente, 'json');
        }
        else{
            alert(sMensaje);
        }
    
    
    
    }

function respuestaModificarCliente(){
    if (oDatos.error) {
        alert(oDatos.mensaje);
    } else {
        alert(oDatos.mensaje);
        frmBajaCliente.reset();
        $("#frmBajaCliente").hide("normal");
    }  
}
function cancelarModificarCliente(){
    let botonSeleccionar = document.getElementById("btnSeleccionarCliente");
    let btnModificarCliente = document.getElementById("btnAceptarModificarCliente");
    let btnCacelarModCliente = document.getElementById("btnCancelarModificarCliente");
    let inputNif = document.getElementById("txtNifModificar");
    let inputNombre = document.getElementById("txtNombreClienteModificar");
    let inputTelefono = document.getElementById("txtTelefonoClienteModificar");
    let inputDireccion = document.getElementById("txtDireccionModificar");
    let inputEmail = document.getElementById("txtEmailModificar");
    let inputNumTarjeta = document.getElementById("txtNTarjetaModificar");

    inputNif.disabled = false;
    botonSeleccionar.disabled = false;

    inputNombre.disabled = true;
    inputTelefono.disabled = true;
    inputDireccion.disabled = true;
    inputEmail.disabled = true;
    inputNumTarjeta.disabled = true;
    btnModificarCliente.disabled = true;
    btnCacelarModCliente.disabled = true;

    frmModificarCliente.reset();
}