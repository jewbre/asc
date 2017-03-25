<?php
/**
 * Created by PhpStorm.
 * Date: 25/03/2017
 * Time: 16:01
 */

namespace envBuilder\helpers;


class Environment
{
    const ENVIRONMENTS_PATH = '../environments';
    /**
     * @var string
     */
    private $name;
    /**
     * @var EnvironmentConfig
     */
    private $config;
    /**
     * @var string
     */
    private $path;
    /**
     * @var Prototype
     */
    private $prototype;

    /**
     * Environment constructor.
     * @param string $name
     * @param EnvironmentConfig $config
     * @param string $path
     * @param Prototype $prototype
     */
    public function __construct($name, EnvironmentConfig $config, $path, Prototype $prototype)
    {
        $this->name = $name;
        $this->config = $config;
        $this->path = $path;
        $this->prototype = $prototype;
    }

    /**
     *
     */
    public function create()
    {
        $targetPath = $this->path . DIRECTORY_SEPARATOR . $this->name;
        mkdir($targetPath);

        $this->prototype->generateInto($targetPath, $this->config->getMappedNames());
    }

    /**
     * @return array
     */
    public static function getList()
    {
        return (new Directory(self::ENVIRONMENTS_PATH))->getDirectories();
    }


}