<?php
header("Access-Control-Allow-Origin: *");

$tarea = $_POST["tarea"];//aqui esta llamando inp el name="tarea"

$cone = mysqli_connect("localhost","root","","tareas");
$consul = mysqli_query($cone,"SELECT * FROM `publicas`");

$hacer="INSERT INTO `publicas`(`tarea`) VALUES ('$tarea')";
$resu = mysqli_query($cone,$hacer);

echo json_encode($tarea);
