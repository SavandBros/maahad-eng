<?php

require "include/requirements.php";

if ($method === "GET") {

    if (!validate_authentication()) {
        return;
    }

    $is_read = $db->quote_bool($_GET["is_read"]);

    response($db->select("SELECT * FROM messages WHERE is_read=$is_read ORDER BY id DESC LIMIT 200"));

} else if ($method === "POST") {

    if (!validate_hidden($_POST)) {
        return;
    }

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
