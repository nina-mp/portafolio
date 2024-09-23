<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'vendor/autoload.php';

$response = array('success' => false, 'message' => 'Hubo un problema al enviar el mensaje. Por favor, inténtalo de nuevo.');

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nombre = $_POST['nombre'];
    $email = $_POST['email'];
    $mensaje = $_POST['mensaje'];

    $destinatario = "pierina.marino@outlook.com";
    $asunto = "Mensaje desde el formulario de contacto";
    $cuerpoMensaje = "Nombre: $nombre\n";
    $cuerpoMensaje .= "Email: $email\n\n";
    $cuerpoMensaje .= "Mensaje:\n$mensaje";

    $mail = new PHPMailer(true);

    try {
        $mail->isSMTP();
        $mail->Host = 'smtp.outlook.com';
        $mail->SMTPAuth = true;
        $mail->Username = 'pierina.marino@outlook.com';
        $mail->Password = 'Pierina2002+';
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
        $mail->Port = 587;

        $mail->setFrom('pierina.marino@outlook.com', 'Pierina');
        $mail->addAddress($destinatario);

        $mail->isHTML(false);
        $mail->Subject = $asunto;
        $mail->Body    = $cuerpoMensaje;

        $mail->send();
        $response['success'] = true;
        $response['message'] = 'El mensaje ha sido enviado correctamente.';
    } catch (Exception $e) {
        $response['message'] = "Mailer Error: {$mail->ErrorInfo}";
    }
}

echo json_encode($response);
?>
