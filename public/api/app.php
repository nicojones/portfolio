<?php

    header('Content-Type: application/json; charset=UTF-8');
    DEFINE('LOGIN_USER', 'nico');
    DEFINE('LOGIN_PASS', 'jones');
    DEFINE('__ROOT__', realpath(__DIR__ . '/../..'));
    DEFINE('AUTH', sha1(LOGIN_USER) . '-' . sha1(LOGIN_PASS));

    ini_set('display_errors', E_ALL);

    require_once './functions.php';
    require_once './HomeController.php';
    require_once './GoodreadsService.php';
    require_once './GoodreadsController.php';

    if (isset($_POST['username'])) {
        if ($_POST['username'] === LOGIN_USER && $_POST['password'] === LOGIN_PASS) {
            json(['auth' => AUTH]);
        } else {
            http_response_code(400);
            json(['error' => 'Invalid credentials']);
        }
    }

    if (getallheaders()['Authorization'] !== AUTH) {
//         http_response_code(403);
        json(['error' => 'Not authenticated']);
    }

    $home = new HomeController();
    $gr = new GoodreadsController();

    if (isset($_POST['section'])) {
        $home->saveJSON();
    }

    if ($_GET['section']) {
        $home->getJSON();
    } else if ($_GET['books'] === 'reading') {
        $gr->getCurrentlyReading();
    } else if ($_GET['books'] === 'read') {
        $gr->getRead();
    }
