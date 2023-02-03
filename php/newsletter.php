<?php 
if(isset($_POST['submit'])){
    $to = "mbenjerminne@gmail.com"; // spaciousplaceltd@gmail.com
    $from = $_POST['email']; // this is the sender's Email address
    $subject = "Newsletter subscription from Spacious Place";
    $subject2 = "Spacious Place newsletter subscription";
    $message = "Please add ". $from . " to the newsletter subscriptions:";
    $message2 = "Your subscription to Spacious Place newsletter has been sucessfully received";

    $headers = "From:" . $from;
    $headers2 = "From:" . $to;
    mail($to,$subject,$message,$headers);
    mail($from,$subject2,$message2,$headers2); // sends a copy of the message to the sender
    echo "Thank you for subscribing to our newsletter";
    header('Location: ../index.html'); 
}
?>