<?php
header("Access-Control-Allow-Origin: *");
$link='mysql:host=localhost;dbname=tareas';
$usuario='root';
$pass='';

try {

  $pdo = new PDO($link,$usuario,$pass);

} catch (PDOExceptio $e) {

print "¡error!:" . $e->getMessage() . "<br/>";
die();

}
