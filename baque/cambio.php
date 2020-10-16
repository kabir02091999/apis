<?php

$id=$_POST["id"];
$nuevo=$_POST["nuevo"];

$conexion = mysqli_connect("localhost", "root", "", "tareas");
mysqli_query($conexion, "UPDATE `publicas` SET tarea = '$nuevo' WHERE `if` = $id");
mysqli_close($conexion);

echo json_encode($nuevo);