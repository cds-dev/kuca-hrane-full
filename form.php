<?php
/* [VERIFY CAPTCHA FIRST] */
$secret = 'SECRET KEY'; // CHANGE THIS TO YOUR OWN!
$url = "https://www.google.com/recaptcha/api/siteverify?secret=$secret&response=".$_POST['g-recaptcha-response'];
$verify = json_decode(file_get_contents($url));

/* [PROCESS YOUR FORM] */
if ($verify->success) {
  $to = "igby.veko@gmail.com"; // CHNAGE THIS TO YOUR OWN!
  $subject = "Contact Form";
  $message = "Name - " . $_POST['name'] . "<br>";
  $message .= "Email - " . $_POST['email'] . "<br>";
  $message .= "Message - " . $_POST['message'] . "<br>";
  if (@mail($to, $subject, $message)) {
    // Send mail OK - Show a nice thank you page or something
  } else {
    // Send mail error... Ask user to retry or give alternative
  }
} else {
  // Invalid captcha - Ask user to retry
}
?>