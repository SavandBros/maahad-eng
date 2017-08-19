<?php

require "include/requirements.php";

if ($method === "GET") {

    response($db->select("SELECT * FROM products ORDER BY ordering LIMIT 9"));

} else if ($method === "POST") {

}
