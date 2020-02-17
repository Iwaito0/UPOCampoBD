"use strict";

//Clase Cliente
function Cliente(sNIF, sNombre, iTelefono, sDireccion, sEmail, iNumTarjeta) {
    this.nif = sNIF;
    this.nombre = sNombre;
    this.telefono = iTelefono;
    this.direccion = sDireccion;
    this.email = sEmail;
    this.numeroTarjeta = iNumTarjeta;
    this.checkin = 0;
    this.checkout = 0;

}
Cliente.prototype.toString = function() {
    let sMensaje = "El cliente " +this.nombre+" con DNI " +this.nif+ " y telefono " +this.telefono+" con la direccion "+this.direccion+" y email "+this.email+" y con un numero de tarjeta "+this.numeroTarjeta;
    return sMensaje;
}

//Clase Habitacion
function Habitacion(iID, sTipo, fPrecio, iOcupacionMax) {
    this.id = iID;
    this.tipo= sTipo;
    this.precio = fPrecio;
    this.ocupacionMaxima = iOcupacionMax;
}
Habitacion.prototype.toString = function() {
    let sMensaje = "La habitacion " +this.id+ " del tipo " +this.tipo+" con un precio de " +this.precio+ " y una ocupacion maxima de " +this.ocupacionMaxima;
    return sMensaje;
}

//Clase Parking
function Parking(iID, fPrecio, bAnchoEspecial) {
    this.id = iID;
    this.precio = fPrecio;
    this.anchoespecial = bAnchoEspecial;
    this.resID = 0;
    this.checkin = 0;
    this.checkout = 0;
}
Parking.prototype.toString = function() {
    if(this.anchoespecial==true){
        let sMensaje = "El parking " +this.id+ " con un precio de " +this.precio+ " y con ancho especial";
        return sMensaje;
    }
    else{
        let sMensaje = "El parking " +this.id+ " con un precio de " +this.precio+ " y sin ancho especial";
        return sMensaje;
    }
}

//Clase Regimen Alimenticio
function RegimenAlimenticio(iID, fPrecioPersona) {
    this.id = iID;
    this.precioPersona = fPrecioPersona;
}
RegimenAlimenticio.prototype.toString = function() {
    let sMensaje = "El regimen con  " +this.id+ " tiene un precio de " +this.precioPersona;
    return sMensaje;
}

//Clase Actividades
function Actividades(iID, sNombre, fPrecio) {
    this.id = iID;
    this.nombre= sNombre;
    this.precio = fPrecio;
}
Actividades.prototype.toString = function() {
    let sMensaje = "La actividad  " +this.nombre+ " con un ID" +this.id+" y con un precio de " +this.precio;
    return sMensaje;
}

//Clase Proveedores
function Proveedores(sCIF, sNombre, itelefono) {
    this.cif = sCIF;
    this.nombre= sNombre;
    this.telefono = itelefono;
}
Proveedores.prototype.toString = function() {
    let sMensaje = "El proveedor  " +this.nombre+ " con un CIF" +this.cif+" y su numero es " +this.telefono;
    return sMensaje;
}

//Clase Reservas
function Reservas(iID, iNumPersonas, dCheckIn, dCheckOut, fPrecio, iNumHabitaciones, sNifCliente, iParkingID, iActividadID, iRegimenID) {
    this.id = iID;
    this.numPersonas= iNumPersonas;
    this.checkin = dCheckIn;
    this.checkout = dCheckOut;
    this.precio = fPrecio;
    this.numHabitaciones = iNumHabitaciones;
    this.nifCliente = sNifCliente;
    this.parkingID = iParkingID;
    this.actividadID = iActividadID;
    this.regimenID = iRegimenID;
}
Reservas.prototype.toString = function() {
    let sMensaje = "ID: "+this.id+" Numero personas: "+this.numPersonas+" CheckIn: "+this.checkin+" CheckOut: "+this.checkout+" Precio: "+this.precio;
    return sMensaje;
}
//Clase principal
class UpoCampo{

    constructor() 
    {
        this.clientes = [];
        this.reservas = [];
        this.habitaciones = [];
        this.parking = [];
        this.actividades = [];
        this.proveedores = [];
        this.regimenAlimentario = [];
    }

    altaCliente(oCliente) {
        let sMensaje = "";

        if (this.clientes.filter(cliente => cliente.nif == oCliente.nif).length == 0) {
            //No se encuentra --> lo doy de alta
            this.clientes.push(oCliente);
            sMensaje = "Alta cliente OK";
        }
        else {
            sMensaje = "El cliente ya estaba registrado";
        }

        return sMensaje;
    }

    altaReserva(oReserva){
        let sMensaje = "";

        if (this.reservas.filter(reserva => reserva.id == oReserva.id).length == 0) {
            //No se encuentra --> lo doy de alta
            if (this.clientes.filter(cliente => cliente.nif == oReserva.nifCliente).length == 0) {
                //No existe el id de cliente --> Error
                sMensaje = "El NIF de cliente que ha introducido no existe";
            }
            else {
                //Existe --> lo doy de alta
                this.reservas.push(oReserva);
                sMensaje = "Alta reserva OK";
            }
        }
        else {
            sMensaje = "La reserva ya estaba registrada";
        }

        return sMensaje;
    }

    altaProveedor(oProveedor){
        let sMensaje = "";

        if (this.proveedores.filter(proveedor => proveedor.cif == oProveedor.cif).length == 0) {
            //No se encuentra --> lo doy de alta
            this.proveedores.push(oProveedor);
            sMensaje = "Alta proveedor OK";
        }
        else {
            sMensaje = "El proveedor ya estaba registrado";
        }

        return sMensaje;
    }
    altaActividad(oActividad){
        let sMensaje = "";

        if (this.actividades.filter(actividad => actividad.id == oActividad.id).length == 0) {
            //No se encuentra --> lo doy de alta
            this.actividades.push(oActividad);
            sMensaje = "Alta actividad OK";
        }
        else {
            sMensaje = "La actividad ya estaba registrada";
        }

        return sMensaje; 
    }

    altaHabitacion(oHabitacion){
      this.habitaciones.push(oHabitacion);
    }

    altaParking(oParking){
        this.parking.push(oParking);
    }

    altaRegimenAlimenticio(oRegimen){
        this.regimenAlimentario.push(oRegimen);
    }


    getArrayHabitaciones(){
        let aHabitacion = [];

        for (let i = 0; i < this.habitaciones.length; i++) {
            aHabitacion.push(this.habitaciones[i]);
        }

        return aHabitacion;
    }
    getArrayParking(){
        let aParking = [];

        for (let i = 0; i < this.parking.length;i++) {
            aParking.push(this.parking[i]);
        }

        return aParking;
    }
    getArrayClientes(){
        return this.clientes;
    }
    getArrayProveedor(){
        return this.proveedores;
    }
    getArrayActividades(){
        let aActividad = [];

        for (let i = 0; i < this.actividades.length;i++) {
            aActividad.push(this.actividades[i]);
        }

        return aActividad;
    }
    getArrayReservas(){
        return this.reservas;
    }


    bajaCliente(sNif){
        let sMensaje = "";
        let bEncontrado = false;

        for (let i = 0; i < this.clientes.length; i++) {
            if (this.clientes[i].nif == sNif) {
                this.clientes.splice(i, 1);
                sMensaje = "Cliente borrado correctamente";
                bEncontrado = true;
            }
        }

        if (bEncontrado == false) {
            sMensaje = "No se encuentra ningun cliente con ese NIF";
        }

        return sMensaje;
    }

    bajaReserva(iID) {
        let sMensaje = "";
        let bEncontrado = false;

        for (let i = 0; i < this.reservas.length; i++) {
            if (this.reservas[i].id == iID) {
                this.reservas.splice(i, 1);
                sMensaje = "Reserva borrada correctamente";
                bEncontrado = true;
            }
        }

        if (bEncontrado == false) {
            sMensaje = "No se encuentra ninguna reserva con ese ID";
        }

        return sMensaje;
    }
    bajaActividad(iID){
        let sMensaje = "";
        let bEncontrado = false;

        for (let i = 0; i < this.actividades.length; i++) {
            if (this.actividades[i].id == iID) {
                this.actividades.splice(i, 1);
                sMensaje = "Actividad borrada correctamente";
                bEncontrado = true;
            }
        }

        if (bEncontrado == false) {
            sMensaje = "No se encuentra ninguna actividad con ese ID";
        }
        return sMensaje;
    }
    bajaProveedor(iID){
        let sMensaje = "";
        let bEncontrado = false;

        for (let i = 0; i < this.proveedores.length; i++) {
            if (this.proveedores[i].cif == iID) {
                this.proveedores.splice(i, 1);
                sMensaje = "Proveedor borrado correctamente";
                bEncontrado = true;
            }
        }

        if (bEncontrado == false) {
            sMensaje = "No se encuentra ningun proveedor con ese CIF";
        }
        return sMensaje;  
    }

    modificarCliente(oCliente){
        let sMensaje = "";

        for (let i = 0; i < this.clientes.length; i++) {
            if (this.clientes[i].nif == oCliente.nif) {
                this.clientes[i].nombre = oCliente.nombre;
                this.clientes[i].telefono = oCliente.telefono;
                this.clientes[i].direccion = oCliente.direccion;
                this.clientes[i].email = oCliente.email;
                this.clientes[i].numeroTarjeta = oCliente.numeroTarjeta;

                sMensaje = "Cliente modificado correctamente";
            }
        }

        return sMensaje;
    }

    modificarReserva(oReserva){
        let sMensaje = "";

        for (let i = 0; i < this.reservas.length; i++) {
            if (this.reservas[i].id == oReserva.id) {
                this.reservas[i].numPersonas = oReserva.numPersonas;
                this.reservas[i].checkin = oReserva.checkin;
                this.reservas[i].checkout = oReserva.checkout;
                this.reservas[i].precio = oReserva.precio;

                sMensaje = "Reserva modificada correctamente";
            }
        }

        return sMensaje;
    }
    modificaActividades(oActividad){
        let sMensaje = "";

        for (let i = 0; i < this.actividades.length; i++) {
            if (this.actividades[i].id == oActividad.id) {
                this.actividades[i].nombre = oActividad.nombre;
                this.actividades[i].precio = oActividad.precio;

                sMensaje = "Actividad modificada correctamente";
            }
        }

        return sMensaje;
    }
    modificaProveedor(oProveedor){
        let sMensaje = "";

        for (let i = 0; i < this.proveedores.length; i++) {
            if (this.proveedores[i].cif == oProveedor.cif) {
                this.proveedores[i].nombre = oProveedor.nombre;
                this.proveedores[i].telefono = oProveedor.telefono;

                sMensaje = "Proveedor modificado correctamente";
            }
        }

        return sMensaje;
    }



    buscarCliente(sNif){
        let aCliente = [];

        for (let i = 0; i < this.clientes.length; i++) {
            if (this.clientes[i].nif == sNif) {
                aCliente.push(this.clientes[i]);
            }
        }

        return aCliente;
    }

    buscarReserva(iID){
        let aReserva = [];

        for (let i = 0; i < this.reservas.length; i++) {
            if (this.reservas[i].id == iID) {
                aReserva.push(this.reservas[i]);
            }
        }

        return aReserva;
    }
    buscarActividad(iID){

        let aActividad = [];

        for (let i = 0; i < this.actividades.length; i++) {
            if (this.actividades[i].id == iID) {
                aActividad.push(this.actividades[i]);
            }
        }

        return aActividad;
    }

    buscarActividadSeleccionada(iID){

        if (this.actividades.filter(actividad=>actividad.id == iID).length == 1)
        {
            return this.actividades.filter(actividad=>actividad.id == iID)[0].nombre;
        }
    }

    buscarPrecioActividadesSeleccionadas(sNombre)
    {
        if (this.actividades.filter(actividad=>actividad.nombre == sNombre).length == 1)
        {
            return this.actividades.filter(actividad=>actividad.nombre == sNombre)[0].precio;
        }
    }

    buscarPrecioHabitacionSeleccionada(iID)
    {
        if (this.habitaciones.filter(habitacion=>habitacion.id == iID).length == 1)
        {
            return this.habitaciones.filter(habitacion=>habitacion.id == iID)[0].precio;
        }
    }

    buscarPrecioParkingSeleccionado(iParkingID)
    {
        if (this.parking.filter(plaza=>plaza.id == iParkingID).length == 1)
        {
            return this.parking.filter(plaza=>plaza.id == iParkingID)[0].precio;
        }
    }

    buscarProveedor(iCIF){
        let aProveedor = [];

        for (let i = 0; i < this.proveedores.length; i++) {
            if (this.proveedores[i].cif == iCIF) {
                aProveedor.push(this.proveedores[i]);
            }
        }

        return aProveedor; 
    }

    buscarRegimen() {
        let aRegimen = [];

        for (let i = 0; i < this.regimenAlimentario.length; i++) {
            aRegimen.push(this.regimenAlimentario[i]);
        }

        return aRegimen;
    }

    buscarPrecioRegimenSeleccionado(iID)
    {
        if (this.regimenAlimentario.filter(regimen=>regimen.id == iID).length == 1)
        {
            return this.regimenAlimentario.filter(regimen=>regimen.id == iID)[0].precioPersona;
        }
    }

    listadoClientePorFecha(dFechaEntrada, dFechaSalida) {
        let aClientes = oUPOCampo.getArrayClientes();
        let aReserva = oUPOCampo.getArrayReservas();
        let aClientesRes = [];

        for (let i = 0; i < aClientes.length; i++) {
            for (let j = 0; j < aReserva.length; j++) {
                if (aClientes[i].nif == aReserva[j].nifCliente) {
                    if ((aReserva[j].checkin > dFechaEntrada && aReserva[j].checkin <= dFechaSalida && aReserva[j].checkout >= dFechaSalida) || 
                        (aReserva[j].checkin <= dFechaEntrada && aReserva[j].checkout >= dFechaSalida) || 
                        (aReserva[j].checkin <= dFechaEntrada && aReserva[j].checkout >= dFechaEntrada && aReserva[j].checkout < dFechaSalida) || 
                        (aReserva[j].checkin > dFechaEntrada && aReserva[j].checkout < dFechaSalida)) {

                        aClientes[i].checkin = aReserva[j].checkin;
                        aClientes[i].checkout = aReserva[j].checkout;
                        aClientesRes.push(aClientes[i]);
                    }
                }
            }
        }

        return aClientesRes; 
    }

    listadoReservaPorFecha(dFechaEntrada, dFechaSalida){
        let aReserva = oUPOCampo.getArrayReservas();
        let aReservasRes = [];

        for (let j = 0; j < aReserva.length; j++) {
            if ((aReserva[j].checkin > dFechaEntrada && aReserva[j].checkin <= dFechaSalida && aReserva[j].checkout >= dFechaSalida) || 
                (aReserva[j].checkin <= dFechaEntrada && aReserva[j].checkout >= dFechaSalida) || 
                (aReserva[j].checkin <= dFechaEntrada && aReserva[j].checkout >= dFechaEntrada && aReserva[j].checkout < dFechaSalida) || 
                (aReserva[j].checkin > dFechaEntrada && aReserva[j].checkout < dFechaSalida)) {

                aReservasRes.push(aReserva[j]);
            }
        }

        return aReservasRes;
    }

    listadoHabDispPorFecha(dFechaEntrada, dFechaSalida){
        let aReserva = oUPOCampo.getArrayReservas();
        let aHabitaciones = oUPOCampo.getArrayHabitaciones();

        //alert(dFechaIni+" "+dFechaFin);

        for (let i = 0; i < aHabitaciones.length; i++) {
            for (let j = 0; j < aReserva.length; j++) {
                if (aHabitaciones[i].id == aReserva[j].numHabitaciones) {
                    if ((aReserva[j].checkin > dFechaEntrada && aReserva[j].checkin <= dFechaSalida && aReserva[j].checkout >= dFechaSalida) || 
                        (aReserva[j].checkin <= dFechaEntrada && aReserva[j].checkout >= dFechaSalida) || 
                        (aReserva[j].checkin <= dFechaEntrada && aReserva[j].checkout >= dFechaEntrada && aReserva[j].checkout < dFechaSalida) || 
                        (aReserva[j].checkin > dFechaEntrada && aReserva[j].checkout < dFechaSalida)) {
                        aHabitaciones.splice(i, 1);
                        i--;
                    }
                }
            }
        }

        return aHabitaciones;
    }

    listadoParkDispPorFecha(dFechaEntrada, dFechaSalida) {
        let aReserva = oUPOCampo.getArrayReservas();
        let aParkings = oUPOCampo.getArrayParking();

        //alert(dFechaIni+" "+dFechaFin);

        for (let i = 0; i < aParkings.length; i++) {
            for (let j = 0; j < aReserva.length; j++) {
                if (aParkings[i].id == aReserva[j].parkingID) {
                    if ((aReserva[j].checkin > dFechaEntrada && aReserva[j].checkin <= dFechaSalida && aReserva[j].checkout >= dFechaSalida) || 
                        (aReserva[j].checkin <= dFechaEntrada && aReserva[j].checkout >= dFechaSalida) || 
                        (aReserva[j].checkin <= dFechaEntrada && aReserva[j].checkout >= dFechaEntrada && aReserva[j].checkout < dFechaSalida) || 
                        (aReserva[j].checkin > dFechaEntrada && aReserva[j].checkout < dFechaSalida)) {
                        if (aParkings[i].id == 1) {
                            aParkings.splice(i, 1);
                        }
                        else {
                            aParkings.splice(i, 1);
                            i--;
                        } 
                    }
                }
            }
        }

        return aParkings;
    }

    listadoReservaParking(){
        let aReserva = oUPOCampo.getArrayReservas();
        let aParkings = oUPOCampo.getArrayParking();
        let aParkRes = [];

        for (let i = 0; i < aParkings.length; i++) {
            for (let j = 0; j < aReserva.length; j++) {
                if (aParkings[i].id == aReserva[j].parkingID) {
                    aParkings[i].resID = aReserva[j].id;
                    aParkings[i].checkin = aReserva[j].checkin;
                    aParkings[i].checkout = aReserva[j].checkout;
                    aParkRes.push(aParkings[i]);
                }
            }
        }

        return aParkRes;
    }

    listadoReservaRegimenA() {
        let aReserva = oUPOCampo.getArrayReservas();
        let aRegimen = oUPOCampo.buscarRegimen();
        let aRegRes = [];
        
        for (let i = 0; i < aRegimen.length; i++) {
            for (let j = 0; j < aReserva.length; j++) {
                if (aRegimen[i].id == aReserva[j].regimenID) {
                     aRegRes.push(aRegimen[i]);
                }
            }
        }
        
        return aRegRes;
    }

    listadoReservaActividades() {
        let aReserva = oUPOCampo.getArrayReservas();
        let aActividad = oUPOCampo.getArrayActividades();
        let aActRes = [];

        for (let i = 0; i < aActividad.length; i++) {
            for (let j = 0; j < aReserva.length; j++) {
                if (aActividad[i].id == aReserva[j].actividadID) {
                     aActRes.push(aActividad[i]);
                }
            }
        }
        
        return aActRes;
    }
}
