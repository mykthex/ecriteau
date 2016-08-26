<?php

require_once( "lib/Twig/Autoloader.php" );

Twig_Autoloader::register();
// Load template files from the ./tpl/ folder and use ./tpl/cache/ for caching
$twig = new Twig_Environment( new Twig_Loader_Filesystem("./twig"));
// Load and render 'template.tpl'
$tpl = $twig->loadTemplate( "pages/index.twig" );

// Send mail form submit
if(isset($_POST["courriel"])) {
    $formValide = true;
    $arrErrors =  array();
    if($_POST["name"] == "") {
        $formValide = false;
        $arrErrors["nom"] = "Le nom est requis.";
    }
    if($_POST["message"] == "") {
        $formValide = false;
        $arrErrors["message"] = "Le message est requis.";
    }
    if($_POST["courriel"] == "") {
        $formValide = false;
        $arrErrors["courriel"] = "Le courriel est requis.";
    }
    // Send mail
    if($formValide == true) {
        $to  = "mykaeladam@gmail.com";
        $subject = "Nouveau message - Contact pour l\'écriteau";
        $message = "<h2>Nouveau message de la part de: " . $_POST["nom"] . "</h2><br>";
        $message .= "<p>" . $_POST["message"] . "</p>";
        $message .= "Message de la part de ecriteau.ca.";
        $headers = "From:" . $_POST["courriel"] . "\r\n" .
            "Reply-To:" . $_POST["courriel"] . "\r\n" .
            'X-Mailer: PHP/' . phpversion();

        mail($to, $subject, $message, $headers);
        echo $tpl->render(array());
    } else {
        echo $tpl->render(array("errors"=> $arrErrors));
    }
} else {
    echo $tpl->render(array());
}


