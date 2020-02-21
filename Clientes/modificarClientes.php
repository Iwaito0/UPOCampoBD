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

echo "<pre>";
print_r($datos);
echo "<pre>";
$sql="";
$dni="";
foreach($datos as $indice=>$valor){
    if($indice=="DNI"){
        $dni=$valor;
    }
    if($indice=="Nombre"){
        $sql .= "UPDATE cliente  SET nombre='$valor',";  
    }
    if($indice=="Telefono"){
        $sql .=" telefono=$valor,";      
    }
    if($indice=="Direccion"){
        $sql .="direccion='$valor',";    
      
    }
    if($indice=="Email"){
        $sql .="email='$valor',";     
     
    }
    if($indice=="numTarjeta"){
        $sql .="numero_tarjeta='$valor'";      
    }
}
$sql.="WHERE dni='".$dni."'";
//echo $sql;
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