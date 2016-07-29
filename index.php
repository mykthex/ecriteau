<?php

require_once( "lib/Twig/Autoloader.php" );

Twig_Autoloader::register();
// Load template files from the ./tpl/ folder and use ./tpl/cache/ for caching
$twig = new Twig_Environment( new Twig_Loader_Filesystem("./twig"));
// Load and render 'template.tpl'
$tpl = $twig->loadTemplate( "pages/index.twig" );
echo $tpl->render( array("msg"=>"Hello, World!") );
