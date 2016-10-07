<?php
$nombreApellido = $_POST['nombreApellido'];
$email = $_POST['email'];
$fecha = date("Y-m-d");
setlocale (LC_ALL," es_RA.UTF-8");
$nuevafecha = strtotime ( '+10 day' , strtotime ( $fecha ) ) ;
$nuevafecha = date ( 'd/m' , $nuevafecha );
$nuevafecha2 = strtotime ( '+12 day' , strtotime ( $fecha ) ) ;
$nuevafecha2 = date ( 'd/m' , $nuevafecha2 );
    $from = "info@inoptical.com.ar";
    $to = $email;
    $subject = "Registro Beneficios In Optical";
    $message = "Hola ".$nombreApellido." gracias por solicitar la tarjeta de beneficios.\n Podras retirarla entre  ".$nuevafecha." y ".$nuevafecha2." con tu DNI en nuestro comercio ubicado en calle Julio A. Roca 190 - Local 3.\n Que la disfrutes,\n In Optical\n";
    $headers = "From:" . $from;
    mail($to,$subject,$message, $headers);

    echo $to, $subject, $message, $headers;
?>
