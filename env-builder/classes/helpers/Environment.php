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
    const INDEX_CONFIG_PATH = '../environments/index.php';
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

        // Generate file copies into target directory
        $this->prototype->generateInto($targetPath, $this->config->getMappedNames());


        // Insert an additional config in index.php which is used in init script.
        $prototypeInfo = $this->prototype->getConfig();
        $prototypeInfo['path'] = $this->name;

        $exportable = '"' . $this->name . '" => ' . var_export($prototypeInfo, true) . ',';

        $indexConfig = file_get_contents(self::INDEX_CONFIG_PATH);
        $finalConfig = substr_replace($indexConfig, $exportable, -4, 0);
        file_put_contents(self::INDEX_CONFIG_PATH, $finalConfig);

    }

    /**
     * @return array
     */
    public static function getList()
    {
        return (new Directory(self::ENVIRONMENTS_PATH))->getDirectories();
    }


}