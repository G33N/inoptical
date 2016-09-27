<?
require('autoload.php');
$secret = "6LeBuykTAAAAANJQaspKZjjiXNmlUdTeo4XX6TdS";
$gRecaptchaResponse = $_POST['g-recaptcha-response'];
$remoteIp = $_SERVER['REMOTE_ADDR'];
$resp = $recaptcha->verify($gRecaptchaResponse, $remoteIp);
if ($resp->isSuccess()) {
  echo 1;
} else {
    $errors = $resp->getErrorCodes();
}
 ?>
