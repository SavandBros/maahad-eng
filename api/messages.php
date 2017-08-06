<?php

require "include/requirements.php";

if ($method === "GET") {

    response($db->select("SELECT * FROM messages LIMIT 100"));

} else if ($method === "PUT") {
    }
}
