
<?php
if(isset($_POST['InputEmail'])) {

// Debes editar las próximas dos líneas de código de acuerdo con tus preferencias
$email_to = "info@inoptical.com.ar";
$email_subject = "Contacto desde el sitio web";

// Aquí se deberían validar los datos ingresados por el usuario
if(!isset($_POST['InputName']) ||
!isset($_POST['InputEmail']) ||
!isset($_POST['InputMessage'])){

echo "<b>Ocurrió un error y el formulario no ha sido enviado. </b><br />";
echo "Por favor, vuelva atrás y verifique la información ingresada<br />";
die();
}
$email_from = $_POST['InputEmail'];
$email_message = "Detalles del formulario de contacto:\n\n";
$email_message .= "Nombre: " . $_POST['InputName'] . "\n";
$email_message .= "E-mail: " . $_POST['InputEmail'] . "\n";
$email_message .= "Mensaje: " . $_POST['InputMessage'] . "\n\n";


// Ahora se envía el e-mail usando la función mail() de PHP
$headers = 'From: '.$email_from."\r\n".
'Reply-To: '.$email_from."\r\n" .
'X-Mailer: PHP/' . phpversion();
@mail($email_to, $email_subject, $email_message, $headers);

$jsondata = array();
        $jsondata['success'] = true;
        $jsondata['message'] = "¡El formulario se ha enviado con éxito!";
}
else {
    $jsondata['success'] = false;
    $jsondata['message'] = 'Error al enviar.';
  }
  header('Content-type: application/json; charset=utf-8');
  echo json_encode($jsondata);
?>
