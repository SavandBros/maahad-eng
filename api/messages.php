<?php

require "include/requirements.php";

if ($method === "GET") {

    response($db->select("SELECT * FROM messages LIMIT 100"));

} else if ($method === "POST") {

    // if (!validate_token("contactus", $_POST)) {
    //     return;
    // }

    if (require_params(["email", "message"], $_POST)) {

        $name = $db->quote($_POST["name"]);
        $number = $db->quote($_POST["number"]);
        $email = $db->quote($_POST["email"]);
        $message = $db->quote($_POST["message"]);

        $db->query("INSERT INTO messages (name, number, email, message) VALUES ($name, $number, $email, $message)");

        $code = $db->affected() ? 201 : 400;
        response($db->affected(), $code);
    }
}
