"use strict"
$("#btnAceptarAltaCliente").click(aceptarAltaCliente);


function aceptarAltaCliente(){
    var sMensaje="";
    // Recoger valores del formulario
    let sDni = frmAltaCliente.txtNifAlta.value.trim();
    let sNombre = frmAltaCliente.txtNombreClienteAlta.value.trim();
    let iTelefono = parseInt(frmAltaCliente.txtTelefonoClienteAlta.value.trim());
    let sDireccion = frmAltaCliente.txtDireccionAlta.value.trim();
    let sEmail = frmAltaCliente.txtEmailAlta.value.trim();
    let iNumTarjeta = frmAltaCliente.txtNTarjetaAlta.value.trim();

    if(!/^\d{8}[a-zA-Z]$/.test(sDni)){
        sMensaje+="El campo DNI esta mal\n";
        frmAltaCliente.txtNifAlta.classList.add("error");
    }
    else{
        frmAltaCliente.txtNifAlta.classList.remove("error");  
    }

    if(!/^[a-zA-ZÑñÁáÉéÍíÓóÚúÜü\s]+$/.test(sNombre)){
        sMensaje+="El campo nombre esta mal\n";
        frmAltaCliente.txtNombreClienteAlta.classList.add("error");
    }
    else{
        frmAltaCliente.txtNombreClienteAlta.classList.remove("error");  
    }
    if(!/^(\+34|0034|34)?[6|7|9][0-9]{8}$/g.test(iTelefono))
    {
        sMensaje+="El campo telefono esta mal (Recuerde poner el prefijo )\n";
        frmAltaCliente.txtTelefonoClienteAlta.classList.add("error");
    }
    else{
        frmAltaCliente.txtTelefonoClienteAlta.classList.remove("error");  
    }
    
    if(!/[a-zA-Z1-9À-ÖØ-öø-ÿ]+\.?(( |\-)[a-zA-Z1-9À-ÖØ-öø-ÿ]+\.?)*/.test(sDireccion)){
        sMensaje+="El campo direccion esta mal\n";
        frmAltaCliente.txtDireccionAlta.classList.add("error");
    }
    else{
        frmAltaCliente.txtDireccionAlta.classList.remove("error");  
    }

    if(!/^[a-zA-Z0-9.!#$%&’*+/=?^_{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/g.test(sEmail)){
        sMensaje+="El campo email esta mal\n";
        frmAltaCliente.txtEmailAlta.classList.add("error");
    }
    else{
        frmAltaCliente.txtEmailAlta.classList.remove("error");  
    }
   if(!/^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35d{3})d{11})$/.test(iNumTarjeta)){
        sMensaje+="El campo del numero de la tarjeta esta mal(recuerde que son 16 numeros y que empieza por 4)\n";
        frmAltaCliente.txtNTarjetaAlta.classList.add("error");
    }
    else{
        frmAltaCliente.txtNTarjetaAlta.classList.remove("error");  
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
    $.post("Clientes/altacliente.php", sParametros, respuestaAltaCliente, 'json');
    }
    else{
        alert(sMensaje);
    }
}
function respuestaAltaCliente(oDatos, sStatus, oXHR){
    if (oDatos.error) {
        alert(oDatos.mensaje);
    } else {
        alert(oDatos.mensaje);
        frmAltaCliente.reset();
        $("#frmAltaCliente").hide("normal");
    }  
}
