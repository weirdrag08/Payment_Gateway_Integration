<?php
	if(isset($_POST['submit'])){
		$name=$_POST['mail_to'];
        $to=$_POST['email'];
        $amount=$_POST['amount'];
        $card_number=$_POST['cardno'];
		$from='Sparks Foundation Intern';
		$email='acountsender8@gmail.com';
        $subject='Confirmation Of Transaction';
        $message="Hi ".$name." ,"."\n"."Thankyou for using Our Payment Gateway. We've successfully processed your payment of Rs ".$amount.". This is a confirmation email for the transaction of amount from card number ".$card_number.". \n\n"."If you have more questions or information needed, please let us know. We are happy to serve you! \n\n"."Regards"." From- \nAditya Anand \n\nLike us on Facebook \nFollow us on Twitter \nConnect with us on LinkedIn \nThis is a no-reply email automatically generated for your reference.";
		$headers = "From ".$email;

		if(mail($to, $subject, $message, $headers)){
			header("Location: success_page.html");
		}
		else{
			header("Location: error_page.html");
		}
	}
?>

