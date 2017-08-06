<?php

require "include/requirements.php";

if ($method === "POST") {

    if (require_params(["name"], $_POST)) {

        response(Amir::generate_session_code($_POST["name"]), 201);
    }
}
