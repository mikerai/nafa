<?php
  $email_to = "miguel@mikerai.com";
	$name = $_POST["name"];
	$email = $_POST["email"];
	$message = $_POST["comment"];
	$text = "De: $name<br>
	         Correo electr&oacute;nico: $email<br><br>	 
	         Mensaje: <br><br> $message";
	$headers = "MIME-Version: 1.0" . "\r\n"; 
	$headers .= "Content-type:text/html; charset=utf-8" . "\r\n"; 
	$headers .= "From: <$email>" . "\r\n";
	mail($email_to, "Mensaje desde el sitio web", $text, $headers);
?>