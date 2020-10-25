<?php
function setHeader($code = 200) {
    $codes = array(
        '200' => 'OK',
        '201' => 'Created',
        '202' => 'Accepted',
        '204' => 'No Content',
        '301' => 'Moved Permanently',
        '302' => 'Moved Temporarily',
        '304' => 'Not Modified',
        '400' => 'Bad Request',
        '401' => 'Unauthorized',
        '403' => 'Forbidden',
        '404' => 'Not Found',
        '500' => 'Internal Server Error',
        '501' => 'Not Implemented',
        '502' => 'Bad Gateway',
        '503' => 'Service Unavailable');
    if (!empty($codes[$code])) {
        header('HTTP/1.1 ' . $code . ' ' . $codes[$code]);
    }
}

function json($obj, $flags = 0) {
    die(json_encode($obj, $flags));
}
