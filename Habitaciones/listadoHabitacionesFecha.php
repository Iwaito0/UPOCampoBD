<?php
	// Configuración BASE DE DATOS MYSQL
	$servidor  = "localhost";
	$basedatos = "upocampo";
	$usuario   = "root";
	$password  = "";

    $datos=json_decode($_GET["datos"]);

    // Creamos la conexión al servidor.
	$conexion = mysqli_connect($servidor, $usuario, $password,$basedatos) or die(enviarResultados(0,[],$conexion));
    mysqli_set_charset($conexion,"utf8");

	// Consulta SQL para obtener los datos de los centros.
    $sql="SELECT * FROM `habitacion` INNER JOIN reserva WHERE numero_habitacion=habitacion.id and checkin BETWEEN date('$datos->fechaEntrada')AND date('$datos->fechaSalida') and checkout BETWEEN date('$datos->fechaEntrada')AND date('$datos->fechaSalida')";
    $resultados = mysqli_query($conexion,$sql) or die(mysqli_error($conexion));

	if ($resultados){ // Si hay resultados

	    $datos = [];

	    while ($fila = mysqli_fetch_array($resultados)) {
	       // Almacenamos en un array cada una de las filas que vamos leyendo del recordset.
	        $datos[] = $fila;
	    }
	}

	mysqli_close($conexion);

	enviarResultados($resultados,$datos,$conexion);

	function enviarResultados($resultados,$datos,$conexion){
	    // Generar la respuesta
	    header('Content-Type: application/json');

	    if ($resultados ){ 
	        $respuesta["datos"] = $datos;
	    } else {
	        $respuesta["datos"] = [];
	    }

	    echo json_encode($respuesta);
	}
?>