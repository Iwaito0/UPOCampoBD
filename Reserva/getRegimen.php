<?php
	// Configuración BASE DE DATOS MYSQL
	$servidor  = "localhost";
	$basedatos = "upocampo";
	$usuario   = "root";
	$password  = "";

	// Creamos la conexión al servidor.
	$conexion = mysqli_connect($servidor, $usuario, $password,$basedatos) or die(enviarResultados(0,[],$conexion));
	mysqli_set_charset($conexion,"utf8");

	// Consulta SQL para obtener los datos de los centros.
	$sql = "SELECT * FROM regimen_alimentario";
	$resultados = mysqli_query($conexion,$sql) or die(mysqli_error($conexion));

	$datos = "";

	while ($fila = mysqli_fetch_array($resultados)) {
	    $datos .= '<option value="'.$fila["id"].'">'.$fila["id"].'</option>';
	}

	echo $datos;

	mysqli_close($conexion);
?>