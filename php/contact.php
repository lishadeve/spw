<?php 
if(isset($_POST['submit'])){
    $to = "mbenjerminne@gmail.com"; // spaciousplaceltd@gmail.com
    $from = $_POST['email']; // this is the sender's Email address
    $name = $_POST['name'];
    $phone = $_POST['phone'];
    $subject = "Contact form from Spacious Place Website";
    $subject2 = "Copy of your form submission to Spacious Place";
    $message = $name . " (".$phone.")". " wrote the following:" . "\n\n" . $_POST['message'];
    $message2 = "Here is a copy of your message " . $name . "\n\n" . $_POST['message'];

    $headers = "From:" . $from;
    $headers2 = "From:" . $to;
    mail($to,$subject,$message,$headers);
    mail($from,$subject2,$message2,$headers2); // sends a copy of the message to the sender
    echo "Mail Sent. Thank you " . $name . ", we will contact you shortly.";
    echo "<script>window.history.back()</script>";
    }
?>
<p class="lead">Sent</p>