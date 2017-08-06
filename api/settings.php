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

} else if ($method === "PUT") {

    if (require_params(["setting", "label", "value"], $_PUT)) {

        $setting = $db->quote($_PUT["setting"]);
        $label = $db->quote($_PUT["label"]);
        $value = $db->quote($_PUT["value"]);

        $db->query("UPDATE settings SET setting=$setting, label=$label, value=$value WHERE setting=$setting");

        $code = $db->affected() ? 204 : 404;
        response($db->affected(), $code);
    }
}
