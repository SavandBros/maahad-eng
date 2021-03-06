<?php

require "include/requirements.php";

if ($method === "GET") {

    response($db->select("SELECT * FROM products ORDER BY ordering LIMIT 9"));

} else if ($method === "POST") {

    if (!validate_authentication()) {
        return;
    }

    if (require_params(["name"], $_POST)) {

        $id = $db->quote($_POST["id"]);
        $name = $db->quote($_POST["name"]);
        $detail = $db->quote($_POST["detail"]);
        $image = $db->quote($_POST["image"]);
        $is_special = $db->quote($_POST["is_special"]);
        $ordering = $db->quote($_POST["ordering"]);
        $link = $db->quote($_POST["link"]);

        $db->query("UPDATE products SET name=$name, detail=$detail, image=$image, is_special=$is_special, ordering=$ordering, link=$link WHERE id=$id");

        response($db->affected(), 202);
    }
}
