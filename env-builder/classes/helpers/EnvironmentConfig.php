<?php
/**
 * Created by PhpStorm.
 * Date: 25/03/2017
 * Time: 15:56
 */

namespace envBuilder\helpers;


/**
 * Class EnvironmentConfig
 * @package envBuilder\helpers
 */
class EnvironmentConfig
{
    const EMPTY_PASS_PLACEHOLDER = '%__empty__%';

    /**
     *
     */
    const ENV_NAME = 'env_name';
    /**
     *
     */
    const VENDOR_PATH = 'vendor_path';
    /**
     *
     */
    const DB_NAME = 'db_name';
    /**
     *
     */
    const DB_USER = 'db_user';
    /**
     *
     */
    const DB_PASS = 'db_pass';

    /**
     * @var string
     */
    private $environmentName;
    /**
     * @var string
     */
    private $vendorPath;
    /**
     * @var string
     */
    private $dbName;
    /**
     * @var string
     */
    private $dbUser;
    /**
     * @var string
     */
    private $dbPass;

    /**
     * EnvironmentConfig constructor.
     * @param string $environmentName
     * @param string $vendorPath
     * @param string $dbName
     * @param string $dbUser
     * @param string $dbPass
     */
    public function __construct($environmentName, $vendorPath, $dbName, $dbUser, $dbPass)
    {
        $this->environmentName = $environmentName;
        $this->vendorPath = $vendorPath;
        $this->dbName = $dbName;
        $this->dbUser = $dbUser;
        $this->dbPass = $dbPass;
    }

    /**
     * @return array
     */
    public function getMappedNames()
    {
        return [
            self::ENV_NAME => $this->environmentName,
            self::VENDOR_PATH => $this->vendorPath,
            self::DB_NAME => $this->dbName,
            self::DB_USER => $this->dbUser,
            self::DB_PASS => $this->dbPass,
        ];
    }


}