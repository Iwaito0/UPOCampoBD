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

	$sql = "INSERT INTO proveedor (CIF, nombre, telefono) VALUES ('$datos->CIF','$datos->Nombre','$datos->Telefono');";
	$resultados = mysqli_query($conexion,$sql);

	if ($resultados){
	    $respuesta["error"] = 0;
	    $respuesta["mensaje"] = "Alta realizada"; 
	} else {
	    $respuesta["error"] = 1;
	    $respuesta["mensaje"] = "Error en el proceso de alta: ".mysqli_error($conexion);
	}

	echo json_encode($respuesta);

	mysqli_close($conexion);
?>