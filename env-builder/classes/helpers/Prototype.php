<?php
/**
 * Created by PhpStorm.
 * Date: 25/03/2017
 * Time: 16:02
 */

namespace envBuilder\helpers;


use RecursiveDirectoryIterator;
use RecursiveIteratorIterator;
use RecursiveRegexIterator;
use RegexIterator;
use SplFileInfo;

class Prototype
{
    const PROTOTYPES_ROOT = 'prototypes';

    /**
     * @var string
     */
    private $name;

    /**
     * Template constructor.
     * @param string $name
     */
    public function __construct($name)
    {
        $this->name = $name;
    }

    /**
     * @param $pathTo
     * @param array $replaceTemplates
     */
    public function generateInto($pathTo, $replaceTemplates = [])
    {
        $iteratorObject = new RecursiveIteratorIterator(new RecursiveDirectoryIterator($this->getPath()));
        $files = new RegexIterator($iteratorObject, "#{$this->getPath()}.+#i", RecursiveRegexIterator::MATCH);

        $replaceablePath = $this->getPath() . DIRECTORY_SEPARATOR;
        /**
         * @var SplFileInfo $file
         */
        foreach ($files as $file) {
            if (in_array($file->getFilename(), self::getSkippableFiles())) {
                continue;
            }

            $replaceableName = DIRECTORY_SEPARATOR . '?' . $file->getFilename();
            $baseDirPath = preg_replace("#{$replaceablePath}#i", '', $file->getPathname());
            $baseDirPath = preg_replace("#{$replaceableName}#i", '', $baseDirPath);

            $tmpPath = $pathTo;
            foreach (explode(DIRECTORY_SEPARATOR, $baseDirPath) as $directory) {
                $tmpPath .= DIRECTORY_SEPARATOR . $directory;
                if (!file_exists($tmpPath)) {
                    mkdir($tmpPath);
                }
            }


            $fileContent = file_get_contents($file);
            foreach ($replaceTemplates as $key => $replacement) {
                $fileContent = preg_replace("/%__{$key}__%/i", $replacement, $fileContent);
            }

            file_put_contents(implode(DIRECTORY_SEPARATOR, [$pathTo, $baseDirPath, $file->getFilename()]), $fileContent);
        }
    }

    /**
     * @return string
     */
    public function getPath()
    {
        return self::PROTOTYPES_ROOT . DIRECTORY_SEPARATOR . $this->name;
    }

    /**
     * @return array
     */
    private static function getSkippableFiles()
    {
        return Directory::getSkippableFiles();
    }

    /**
     * @return array
     */
    public static function getList()
    {
        return (new Directory(self::PROTOTYPES_ROOT))->getContents();
    }


}