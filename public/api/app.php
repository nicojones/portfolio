<?php

    header('Content-Type: application/json; charset=UTF-8');
    DEFINE('LOGIN_USER', 'nico');
    DEFINE('LOGIN_PASS', 'jones');
    DEFINE('JSON_CACHE', 86400); // 1 tag cache for JSONs.
    DEFINE('__ROOT__', realpath(__DIR__ . '/../..'));
    DEFINE('AUTH', sha1(LOGIN_USER) . '-' . sha1(LOGIN_PASS));

    ini_set('display_errors', E_ALL);

    require_once './functions.php';
    require_once './HomeController.php';
    require_once './GoodreadsService.php';
    require_once './GoodreadsController.php';

    $home = new HomeController();
    $gr = new GoodreadsController();

    // LOGIN
    if (isset($_POST['username'])) {
        if ($_POST['username'] === LOGIN_USER && $_POST['password'] === LOGIN_PASS) {
            json(['Authorization' => AUTH]);
        } else {
            http_response_code(400);
            json(['error' => 'Invalid credentials']);
        }
    }

    // GET THE BOOKS
    if ($_GET['books'] === 'reading') {
       $gr->getCurrentlyReading();
    } else if ($_GET['books'] === 'read') {
       $gr->getRead();
    }

    // Check if user is authenticated - otherwise it can't go further.
    if ((getallheaders()['Authorization'] ?: getallheaders()['authorization']) !== AUTH) {
        http_response_code(403);
        json(['error' => 'Not authenticated']);
    }

    // SAVE a section
    if (isset($_POST['section'])) {
        $home->saveJSON();
    }

    // GET a section - unparsed.
    if ($_GET['section']) {
        $home->getJSON();
    }
