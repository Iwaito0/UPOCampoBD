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
$sql="";
foreach($datos as $indice=>$valor){
    if($indice=="DNI"){
    $sql .= "INSERT INTO cliente  VALUES ('$valor',";    
    }
    if($indice=="Nombre"){
        $sql .="'$valor'".',';    

    }
    if($indice=="Telefono"){
        $sql .=$valor.',';      
    }
    if($indice=="Direccion"){
        $sql .="'$valor'".',';    
      
    }
    if($indice=="Email"){
        $sql .="'$valor'".',';    
     
    }
    if($indice=="numTarjeta"){
        $sql .="'$valor'".')';    
    }
}
echo $sql;

$resultados = mysqli_query($conexion,$sql) or die(mysqli_error($conexion));


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