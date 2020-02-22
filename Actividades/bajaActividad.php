<?php

// Configuración BASE DE DATOS MYSQL
$servidor  = "localhost";
$basedatos = "upocampo";
$usuario   = "root";
$password  = "";

// Creamos la conexión al servidor.
$conexion = mysqli_connect($servidor, $usuario, $password,$basedatos) or die(mysqli_error($conexion));
mysqli_query($conexion,"utf8");



$sql='DELETE FROM `actividades` WHERE id='.$_POST["datos"];

$numero = mysqli_affected_rows($conexion);

$resultados = mysqli_query($conexion,$sql) or die(mysqli_error($conexion));



if ($numero == 1){
    $respuesta["error"] = 0;
    $respuesta["mensaje"] = "Baja realizada"; 
} else {
    $respuesta["error"] = 1;
    $respuesta["mensaje"] = "Error en el proceso de baja: ".mysqli_error($conexion);
}

echo json_encode($respuesta);

mysqli_close($conexion);
?>