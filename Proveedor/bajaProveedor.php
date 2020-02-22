<?php
	// Configuración BASE DE DATOS MYSQL
	$servidor  = "localhost";
	$basedatos = "upocampo";
	$usuario   = "root";
	$password  = "";

	// Creamos la conexión al servidor.
	$conexion = mysqli_connect($servidor, $usuario, $password,$basedatos) or die(mysqli_error($conexion));
	mysqli_query($conexion,"utf8");

	$sql='DELETE FROM proveedor WHERE CIF='.$_POST["datos"];
	$resultados = mysqli_query($conexion,$sql) or die(mysqli_error($conexion));

	if ($resultados){
	    $respuesta["error"] = 0;
	    $respuesta["mensaje"] = "Baja realizada"; 
	} else {
	    $respuesta["error"] = 1;
	    $respuesta["mensaje"] = "Error en el proceso de baja: ".mysqli_error($conexion);
	}

	echo json_encode($respuesta);

	mysqli_close($conexion);
?>