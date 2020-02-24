"use strict"
$("#btnListarCliRes").click(aceptarListadoClienteFecha);

function aceptarListadoClienteFecha(){
    let datosEntrada=frmListadoCliResFecha.txtEntradaCliRes.value;
    let datosSalida=frmListadoCliResFecha.txtSalidaCliRes.value;
    console.log(datosEntrada);
    console.log(datosSalida);
    //SELECT * FROM `cliente` INNER JOIN reserva WHERE dni=nif_cliente and checkin=date("2020-02-12") and checkout=date("2020-02-16") 
}