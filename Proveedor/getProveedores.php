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
	$sql = "SELECT * FROM proveedor";
	$resultados = mysqli_query($conexion,$sql) or die(mysqli_error($conexion));

	$XML ='<?xml version="1.0" encoding="UTF-8"?>';
	$XML .='<datos>';

	while ($fila = mysqli_fetch_array($resultados)) {
	    $XML .='<proveedor>';
	        $XML .='<cif>'.$fila["CIF"].'</cif>';
	        $XML .='<nombre>'.$fila["nombre"].'</nombre>';
	        $XML .='<telefono>'.$fila["telefono"].'</telefono>';
	    $XML .='</proveedor>';
	}

	$XML .='</datos>';

	// Cabecera de respuesta indicando que el contenido de la respuesta es XML
	header("Content-Type: text/xml");
	// Para que el navegador no haga cache de los datos devueltos por la página PHP.
	header('Cache-Control: no-cache, must-revalidate');
	header('Expires: Mon, 26 Jul 1997 05:00:00 GMT');

	echo $XML;

	mysqli_close($conexion);
?>