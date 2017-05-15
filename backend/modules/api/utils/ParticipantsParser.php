<?php
/**
 * Created by PhpStorm.
 * Date: 15/05/2017
 * Time: 13:04
 */

namespace backend\modules\api\utils;


class ParticipantsParser
{
    public static function fromString($string)
    {
        $participants = explode(',',
            substr($string, 1, strlen($string) - 2)
        );

        $participants = array_filter($participants, function($p) {
            return (bool) $p;
        });

        return $participants;
    }
}