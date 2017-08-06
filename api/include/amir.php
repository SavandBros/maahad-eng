<?php
/**
* Static class for common functions
* https://github.com/AmirSavand/amir-php
*/
class Amir {

    // Generate session code to use for forms
    public static function generate_session_code($name) {
        $code = bin2hex(mcrypt_create_iv(32, MCRYPT_DEV_URANDOM));
        $_SESSION[$name] = $code;
        return $code;
    }

    // Check if it's a valid session code
    public static function is_valid_session_code($name, $code) {
        return hash_equals($_SESSION[$name], $code);
    }

    // Get time since via date
    public static function get_time_since($time) {

        $date_time = DateTime::CreateFromFormat("Y-m-d H:i:s", $time);

        $year = $date_time->format('Y');
        $month = $date_time->format('m');
        $month_name = $date_time->format('M');
        $day = $date_time->format('d');
        $hour = $date_time->format('H');
        $minute = $date_time->format('i');

        if ($year != date('Y')) {
            return $year . " " . $month_name . " " . $day;
        } else if ($month != date('m')) {
            return $month_name . " " . $day;
        } else if ($day != date('d')) {
            return date('d') - $day . " Day(s) ago";
        } else if ($hour != date('H')) {
            return date('H') - $hour . " Hour(s) ago";
        } else if ($minute != date('i')) {
            return date('i') - $minute . " Min(s) ago";
        } else {
            return "Just now...";
        }
    }
}
