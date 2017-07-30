<?php

require "include/requirements.php";

if ($method === "GET") {

    response($db->select("SELECT * FROM settings"));

} else if ($method == "POST") {

    if (requireParams(["name", "value", "link"], $_POST)) {

        $name = $db->quote($_POST["name"]);
        $value = $db->quote($_POST["value"]);
        $link = $db->quote($_POST["link"]);

        $db->query("UPDATE settings SET name=$name, value=$value, link=$link WHERE name=$name");

        $code = $db->affected() ? 204 : 404;
        response($db->affected(), $code);
    }
}
