<?php
/**
 * Created by PhpStorm.
 * Date: 25/03/2017
 * Time: 17:21
 */

namespace envBuilder\helpers;


use RecursiveDirectoryIterator;
use SplFileInfo;

class Directory
{
    /**
     * @var string
     */
    private $path;

    /**
     * Directory constructor.
     * @param string $path
     */
    public function __construct($path)
    {
        $this->path = $path;
    }

    public function getContents()
    {
        $directoryIterator = new RecursiveDirectoryIterator($this->path);
        $prototypes = [];

        /**
         * @var $directory SplFileInfo
         */
        foreach ($directoryIterator as $directory) {
            if(in_array($directory->getFilename(), self::getSkippableFiles())) {
                continue;
            }

            $prototypes[] = $directory->getFilename();
        }

        return $prototypes;
    }

    public function getDirectories()
    {
        $directoryIterator = new RecursiveDirectoryIterator($this->path);
        $prototypes = [];

        /**
         * @var $directory SplFileInfo
         */
        foreach ($directoryIterator as $directory) {
            if(in_array($directory->getFilename(), self::getSkippableFiles())) {
                continue;
            }

            if(!is_dir($directory->getPathname())) {
                continue;
            }

            $prototypes[] = $directory->getFilename();
        }

        return $prototypes;
    }

    public static function getSkippableFiles()
    {
        return ['.', '..'];
    }


}