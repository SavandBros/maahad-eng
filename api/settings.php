<?php

require "include/requirements.php";

if ($method === "GET") {

    $settings = [];

    // Turn list to an object, keys are settings
    foreach ($db->select("SELECT * FROM settings") as $setting) {
        $settings[$setting["setting"]] = [
            "label" => $setting["label"],
            "value" => $setting["value"],
        ];
    }

    response($settings);

} else if ($method === "POST") {

    if (!validate_authentication()) {
        return;
    }

    if (require_params(["setting", "label", "value"], $_POST)) {

        $setting = $db->quote($_POST["setting"]);
        $label = $db->quote($_POST["label"]);
        $value = $db->quote($_POST["value"]);

        $db->query("UPDATE settings SET setting=$setting, label=$label, value=$value WHERE setting=$setting");

        response($db->affected(), 202);
    }
}
