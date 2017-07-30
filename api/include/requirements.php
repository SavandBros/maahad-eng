<?php

// Load requirements
require "connection.php";

// Header
header("Content-Type: application/json");

// Request method (GET, POST, etc...)
$method = $_SERVER["REQUEST_METHOD"];

// Database
$db = new Db();

/**
 * Returns the API data with status code
 *
 * @param array $data API response
 * @param number $status HTTP response status code
 */
function response($data, $status=200) {
    http_response_code($status);
    print(json_encode($data));
}

function requireParams($params, $methodVariable) {
    foreach ($params as $param) {
        if (!isset($methodVariable[$param])) {
            response([$param => "This field is required"]);
            return false;
        }
    }
    return true;
}
