<?php
  $email_to = "miguel@mikerai.com";
	$name = $_POST["name"];
	$email = $_POST["email"];
	$message = $_POST["comment"];
	$text = "<span style='color:rgb(227, 110, 0)'>De:</span> $name<br><br>
	         <span style='color:rgb(227, 110, 0)'>Correo electr&oacute;nico:</span> $email<br><br>	 
	         <span style='color:rgb(227, 110, 0)'>Mensaje: </span><br><br> $message";
	$headers = "MIME-Version: 1.0" . "\r\n"; 
	$headers .= "Content-type:text/html; charset=utf-8" . "\r\n"; 
	$headers .= "From: <$email>" . "\r\n";
	mail($email_to, "Mensaje recibido en el sitio web de Grupo NAFA", $text, $headers);
?>