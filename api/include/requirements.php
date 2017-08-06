<?php

// Request method (GET, POST, etc...)
$method = $_SERVER["REQUEST_METHOD"];

// Get $_POST content
$_POST = json_decode(file_get_contents("php://input"), true);

// Envirement variables
$envs = parse_ini_file("env.ini", true);
$env = $envs["prod"];

// Get current env
if ($_SERVER["REMOTE_ADDR"] === "127.0.0.1") {
    $env = $envs["dev"];
}

// Load requirements
require "connection.php";

// Database
$db = new Db();

// Header
header("Content-Type: application/json");

/**
* Prints the API data with status code
*
* @param array $data API response
* @param number $status HTTP response status code
*/
function response($data, $status=200) {
    http_response_code($status);
    print(json_encode($data));
}

/**
* Check if all required params are given
*
* @param array $params Required params
* @param array $methodVariable Is it GET, POST, etc...
*/
function require_params($params, $methodVariable) {
    foreach ($params as $param) {
        if (!isset($methodVariable[$param])) {
            response([$param => "This field is required"], 400);
            return false;
        }
    }
    return true;
}
