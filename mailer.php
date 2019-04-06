<?php 
if (isset($_POST['submit'])) {
 $name = $_POST['name'];
 $email = $_POST['email'];
 $message = $_POST['message'];
 $subj = "Mail sa sajta";
 $mailTo = "neda@example.com";
 $headers = "From: ".$email;
 $txt = "Poruka od ".$name.".\n\n".$message;
 mail($mailTo, $subj, $txt, $headers);
 header("Location: index.html?poruka_poslata");
}
?>