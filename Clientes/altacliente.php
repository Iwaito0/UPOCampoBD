<?php

// Configuración BASE DE DATOS MYSQL
$servidor  = "localhost";
$basedatos = "upocampo";
$usuario   = "root";
$password  = "";

// Creamos la conexión al servidor.
$conexion = mysqli_connect($servidor, $usuario, $password,$basedatos) or die(mysqli_error($conexion));
mysqli_query($conexion,"utf8");

$datos=json_decode($_POST["datos"]);

echo "<pre>";
print_r($datos);
echo "</pre>";

echo "$datos.DNI";

// Consulta SQL para obtener los datos de los centros.
//$sql = "INSERT INTO cliente  VALUES ('$datos.DNI','$datos.Nombre','$datos.Telefono','$datos.Direccion','$datos.Email','$datos.numTarjeta')";
//echo $sql;
//$resultados = mysqli_query($conexion,$sql) or die(mysqli_error($conexion));


if ($resultado){
    $respuesta["error"] = 0;
    $respuesta["mensaje"] = "Alta realizada"; 
} else {
    $respuesta["error"] = 1;
    $respuesta["mensaje"] = "Error en el proceso de alta: ".mysqli_error($conexion);
}

echo json_encode($respuesta);

mysqli_close($conexion);
?>