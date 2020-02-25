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

	$sql = "UPDATE reserva SET numero_personas='$datos->NumPersonas', checkin='$datos->Checkin', checkout='$datos->Checkout', precio='$datos->Precio', numero_habitacion='$datos->NumHabitacion', numero_parking='$datos->Parking', actividades='$datos->Actividad', regimen_alimentario='$datos->Regimen' WHERE id='$datos->ID'";

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