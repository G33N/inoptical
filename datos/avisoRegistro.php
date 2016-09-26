<?php
$nombreApellido = $_POST['nombreApellido'];
$email = $_POST['email'];
$dni = $_POST['dni'];
$fecha = date("Y-m-d");
setlocale (LC_ALL," es_RA.UTF-8");
$nuevafecha = strtotime ( '+10 day' , strtotime ( $fecha ) ) ;
$nuevafecha = date ( 'd/m' , $nuevafecha );
$nuevafecha2 = strtotime ( '+12 day' , strtotime ( $fecha ) ) ;
$nuevafecha2 = date ( 'd/m' , $nuevafecha2 );
    $from = $email;
    $to = "info@inoptical.com.ar";
    $subject = "Registro Beneficios In Optical";
    $message = "Se ha registrado el usuario ".$nombreApellido." su tarjeta de beneficios.\n Deberia estar disponible entre  ".$nuevafecha." y ".$nuevafecha2." con el DNI ".$dni.".\n  In Optical\n";
    $headers = "From:" . $from;
    mail($to,$subject,$message, $headers);
?>
