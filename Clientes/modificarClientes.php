<?php
    // Configuración BASE DE DATOS MYSQL
    $servidor  = "localhost";
    $basedatos = "upocampo";
    $usuario   = "root";
    $password  = "";

    // Creamos la conexión al servidor.
    $conexion = mysqli_connect($servidor, $usuario, $password,$basedatos) or die(enviarResultados(0,[],$conexion));
    mysqli_set_charset($conexion,"utf8");
    $datos=json_decode($_POST["datos"]);

    $sql = "UPDATE cliente SET nombre='$datos->Nombre', telefono='$datos->Telefono', direccion='$datos->Direccion', email='$datos->Email', numero_tarjeta='$datos->numTarjeta' WHERE dni='$datos->DNI'";

    $resultados = mysqli_query($conexion,$sql);

    if ($resultados){
        $respuesta["error"] = 0;
        $respuesta["mensaje"] = "Modificacion realizada"; 
    } else {
        $respuesta["error"] = 1;
        $respuesta["mensaje"] = "Error en el proceso de modificacion: ".mysqli_error($conexion);
    }

    echo json_encode($respuesta);

    mysqli_close($conexion);
?>