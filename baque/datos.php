<?php
header("Access-Control-Allow-Origin: *");


include_once 'cone.php';

$pu="SELECT * FROM `publicas`";
$sentencia = $pdo->prepare($pu);
$sentencia->execute();
$datos= $sentencia->fetchAll();

echo json_encode($datos);
