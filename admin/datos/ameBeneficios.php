<?php
include('conexion.php');

$orden = $_POST['orden'];
$fecha = date("Y-m-d");
switch($orden){
  case 0:
  $queryRegistrados=  mysqli_query($conexion,"SELECT * FROM registrados") or die(mysqli_error());
  $Registrados = array();
      while($row =mysqli_fetch_assoc($queryRegistrados))
      {
          $Registrados[] = $row;
      }
  $json = json_encode($Registrados);
  echo $json;
  break;
  case 1:
    $nombreApellido = $_POST['nombreApellido'];
    $dni = $_POST['dni'];
    $fechaNacimiento = $_POST['fechaNacimiento'];
    $sexo = $_POST['sexo'];
    $telefono = $_POST['telefono'];
    $celular = $_POST['celular'];
    $email = $_POST['email'];
    $ocupacion = $_POST['ocupacion'];
    $empresa = $_POST['empresa'];
    $calle = $_POST['calle'];
    $numeroCalle = $_POST['numeroCalle'];
    $piso = $_POST['piso'];
    $localidad = $_POST['localidad'];
    $cp = $_POST['cp'];
    $provincia = $_POST['provincia'];
    $activo = 1;
    $date = str_replace('/', '-', $fechaNacimiento);
    $fechaNacimiento = date('Y-m-d', strtotime($date));

  if(!empty($dni AND $nombreApellido AND $email AND $fechaNacimiento AND $celular AND $localidad AND $cp AND $provincia)){
    $queryRegistrados =  mysqli_query($conexion,"INSERT INTO registrados VALUES (NULL,'$nombreApellido','$dni','$fechaNacimiento',$sexo,'$telefono','$celular','$email','$ocupacion','$empresa','$calle','$numeroCalle','$piso','$localidad','$cp','$provincia','$fecha',$activo)");
      $jsondata = array();
              $jsondata['success'] = true;
              $jsondata['message'] = 'Se guardo correctamente.';
              $jsondata['nombreApellido'] = $nombreApellido;
              $jsondata['dni'] = $dni;
              $jsondata['email'] = $email;
          }
          else {
              $jsondata['success'] = false;
              $jsondata['message'] = 'Error al guardar.';
          }
          //Aunque el content-type no sea un problema en la mayoría de casos, es recomendable especificarlo
          header('Content-type: application/json; charset=utf-8');
          echo json_encode($jsondata);
          exit();
  break;
  case 3:
    $id = $_POST['id'];
    if(!empty($id)){
    $queryRegistrados=  mysqli_query($conexion,"DELETE FROM registrados WHERE id=$id") or die(mysqli_error());
    $jsondata = array();
            $jsondata['success'] = true;
            $jsondata['message'] = 'Se elimino correctamente.';;
        }
        else {
            $jsondata['success'] = false;
            $jsondata['message'] = 'Error al eliminar.';
        }
        //Aunque el content-type no sea un problema en la mayoría de casos, es recomendable especificarlo
        header('Content-type: application/json; charset=utf-8');
        echo json_encode($jsondata);
        exit();
  break;

}

?>
