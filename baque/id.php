<?php
//header("Access-Control-Allow-Origin: *");
//header("Access-Control-Allow-Headers: Content-Type, origin");
$tarea = $_POST["id"];

$conec=mysqli_connect("localhost","root","","tareas");
$consulata = "DELETE FROM `publicas` WHERE `if` = '$tarea'";
mysqli_query($conec,$consulata);
echo mysqli_errno($conec) . ": " . mysqli_error($conec) . "\n";
echo json_encode($tarea);