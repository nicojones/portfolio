<?php

    ini_set('display_errors', E_ALL);
    header('Access-Control-Allow-Origin: *');
    DEFINE('__ROOT__', realpath(__DIR__ . '/../..'));

    if (isset($_GET['_bootload_'])) {
        require_once '../../app/bootload/bootload.php';
        return;
    }

    // we "init()" the thread
    require_once '../../app/Kernel/AppKernel.php';
    \Kernel\AppKernel::init();
