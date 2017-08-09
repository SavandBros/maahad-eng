<?php
// Header
header("Content-Type: application/json");

// Request method (GET, POST, etc...)
$method = $_SERVER["REQUEST_METHOD"];

// Request headers
$headers = apache_request_headers();

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

// Amir class
require "amir.php";

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
* Check (and handle) if all required params are given
*
* @param array $params Required params
* @param array $method_variable Is it GET, POST, etc...
*/
function require_params($params, $method_variable) {
    foreach ($params as $param) {
        if (!isset($method_variable[$param])) {
            response([$param => "This field is required"], 400);
            return false;
        }
    }
    return true;
}

/**
* Check (and handle) if the correct session code is passed
*
* @param string $name Session code name
* @param array $method_variable Is it GET, POST, etc...
*/
function validate_token($name, $method_variable) {
    if (!empty($method_variable["token"]) OR !Amir::is_valid_session_code($name, $method_variable["token"])) {
        response(["error" => "Something went wrong, try again later."], 400);
    }
}
