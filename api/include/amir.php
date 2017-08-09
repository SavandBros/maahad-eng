<?php
/**
* Static class for common functions
* https://github.com/AmirSavand/amir-php
*/
class Amir {

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
