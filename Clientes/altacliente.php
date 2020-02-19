<?php

// Configuración BASE DE DATOS MYSQL
$servidor  = "localhost";
$basedatos = "upocampo";
$usuario   = "root";
$password  = "";

// Creamos la conexión al servidor.
$conexion = mysqli_connect($servidor, $usuario, $password,$basedatos) or die(mysqli_error($conexion));
mysqli_query($conexion,"utf8");

echo "<pre>";
print_r($_POST);
echo "</pre>";

/*
// Consulta SQL para obtener los datos de los centros.
$sql = "INSERT INTO `cliente` VALUES ([value-1],[value-2],[value-3],[value-4],[value-5],[value-6])";
$resultados = mysqli_query($conexion,$sql) or die(mysqli_error($conexion));
*/
$datos = [];

while ($fila = mysqli_fetch_array($resultados)) {
    // Almacenamos en un array cada una de las filas que vamos leyendo del recordset.
    $datos[] = $fila;
}

// función de PHP que convierte a formato JSON el array.
echo json_encode($datos); 

mysqli_close($conexion);
?>