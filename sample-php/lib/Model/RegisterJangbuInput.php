<?php
/**
 * RegisterJangbuInput
 *
 * PHP version 7.2
 *
 * @category Class
 * @package  OpenAPI\Client
 * @author   OpenAPI Generator team
 * @link     https://openapi-generator.tech
 */

/**
 * 뱅크다K 웹앱 REST API
 *
 * 뱅크다K 웹앱 REST API : 관리자, 장부사, 고객사
 *
 * The version of the OpenAPI document: 0.5.2
 * Generated by: https://openapi-generator.tech
 * OpenAPI Generator version: 5.1.1
 */

/**
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

namespace OpenAPI\Client\Model;

use \ArrayAccess;
use \OpenAPI\Client\ObjectSerializer;

/**
 * RegisterJangbuInput Class Doc Comment
 *
 * @category Class
 * @package  OpenAPI\Client
 * @author   OpenAPI Generator team
 * @link     https://openapi-generator.tech
 * @implements \ArrayAccess<TKey, TValue>
 * @template TKey int|null
 * @template TValue mixed|null
 */
class RegisterJangbuInput implements ModelInterface, ArrayAccess, \JsonSerializable
{
    public const DISCRIMINATOR = null;

    /**
      * The original name of the model.
      *
      * @var string
      */
    protected static $openAPIModelName = 'RegisterJangbuInput';

    /**
      * Array of property to type mappings. Used for (de)serialization
      *
      * @var string[]
      */
    protected static $openAPITypes = [
        'jangbu' => 'RegisterJangbuInputDetailJangbu',
        'user' => 'RegisterJangbuInputDetailUser',
        'service_ids' => 'float[]'
    ];

    /**
      * Array of property to format mappings. Used for (de)serialization
      *
      * @var string[]
      * @phpstan-var array<string, string|null>
      * @psalm-var array<string, string|null>
      */
    protected static $openAPIFormats = [
        'jangbu' => null,
        'user' => null,
        'service_ids' => null
    ];

    /**
     * Array of property to type mappings. Used for (de)serialization
     *
     * @return array
     */
    public static function openAPITypes()
    {
        return self::$openAPITypes;
    }

    /**
     * Array of property to format mappings. Used for (de)serialization
     *
     * @return array
     */
    public static function openAPIFormats()
    {
        return self::$openAPIFormats;
    }

    /**
     * Array of attributes where the key is the local name,
     * and the value is the original name
     *
     * @var string[]
     */
    protected static $attributeMap = [
        'jangbu' => 'jangbu',
        'user' => 'user',
        'service_ids' => 'serviceIds'
    ];

    /**
     * Array of attributes to setter functions (for deserialization of responses)
     *
     * @var string[]
     */
    protected static $setters = [
        'jangbu' => 'setJangbu',
        'user' => 'setUser',
        'service_ids' => 'setServiceIds'
    ];

    /**
     * Array of attributes to getter functions (for serialization of requests)
     *
     * @var string[]
     */
    protected static $getters = [
        'jangbu' => 'getJangbu',
        'user' => 'getUser',
        'service_ids' => 'getServiceIds'
    ];

    /**
     * Array of attributes where the key is the local name,
     * and the value is the original name
     *
     * @return array
     */
    public static function attributeMap()
    {
        return self::$attributeMap;
    }

    /**
     * Array of attributes to setter functions (for deserialization of responses)
     *
     * @return array
     */
    public static function setters()
    {
        return self::$setters;
    }

    /**
     * Array of attributes to getter functions (for serialization of requests)
     *
     * @return array
     */
    public static function getters()
    {
        return self::$getters;
    }

    /**
     * The original name of the model.
     *
     * @return string
     */
    public function getModelName()
    {
        return self::$openAPIModelName;
    }

    const SERVICE_IDS_3 = 3;
    const SERVICE_IDS_4 = 4;
    const SERVICE_IDS_5 = 5;
    const SERVICE_IDS_6 = 6;
    const SERVICE_IDS_7 = 7;
    const SERVICE_IDS_8 = 8;
    const SERVICE_IDS_9 = 9;
    const SERVICE_IDS_10 = 10;

    /**
     * Gets allowable values of the enum
     *
     * @return string[]
     */
    public function getServiceIdsAllowableValues()
    {
        return [
            self::SERVICE_IDS_3,
            self::SERVICE_IDS_4,
            self::SERVICE_IDS_5,
            self::SERVICE_IDS_6,
            self::SERVICE_IDS_7,
            self::SERVICE_IDS_8,
            self::SERVICE_IDS_9,
            self::SERVICE_IDS_10,
        ];
    }

    /**
     * Associative array for storing property values
     *
     * @var mixed[]
     */
    protected $container = [];

    /**
     * Constructor
     *
     * @param mixed[] $data Associated array of property values
     *                      initializing the model
     */
    public function __construct(array $data = null)
    {
        $this->container['jangbu'] = $data['jangbu'] ?? null;
        $this->container['user'] = $data['user'] ?? null;
        $this->container['service_ids'] = $data['service_ids'] ?? null;
    }

    /**
     * Show all the invalid properties with reasons.
     *
     * @return array invalid properties with reasons
     */
    public function listInvalidProperties()
    {
        $invalidProperties = [];

        if ($this->container['jangbu'] === null) {
            $invalidProperties[] = "'jangbu' can't be null";
        }
        if ($this->container['user'] === null) {
            $invalidProperties[] = "'user' can't be null";
        }
        if ($this->container['service_ids'] === null) {
            $invalidProperties[] = "'service_ids' can't be null";
        }
        return $invalidProperties;
    }

    /**
     * Validate all the properties in the model
     * return true if all passed
     *
     * @return bool True if all properties are valid
     */
    public function valid()
    {
        return count($this->listInvalidProperties()) === 0;
    }


    /**
     * Gets jangbu
     *
     * @return RegisterJangbuInputDetailJangbu
     */
    public function getJangbu()
    {
        return $this->container['jangbu'];
    }

    /**
     * Sets jangbu
     *
     * @param RegisterJangbuInputDetailJangbu $jangbu 등록할 장부사 정보
     *
     * @return self
     */
    public function setJangbu($jangbu)
    {
        $this->container['jangbu'] = $jangbu;

        return $this;
    }

    /**
     * Gets user
     *
     * @return RegisterJangbuInputDetailUser
     */
    public function getUser()
    {
        return $this->container['user'];
    }

    /**
     * Sets user
     *
     * @param RegisterJangbuInputDetailUser $user 등록할 장부사 회원 정보
     *
     * @return self
     */
    public function setUser($user)
    {
        $this->container['user'] = $user;

        return $this;
    }

    /**
     * Gets service_ids
     *
     * @return float[]
     */
    public function getServiceIds()
    {
        return $this->container['service_ids'];
    }

    /**
     * Sets service_ids
     *
     * @param float[] $service_ids 이용할 서비스 목록
     *
     * @return self
     */
    public function setServiceIds($service_ids)
    {
        $allowedValues = $this->getServiceIdsAllowableValues();
        if (array_diff($service_ids, $allowedValues)) {
            throw new \InvalidArgumentException(
                sprintf(
                    "Invalid value for 'service_ids', must be one of '%s'",
                    implode("', '", $allowedValues)
                )
            );
        }
        $this->container['service_ids'] = $service_ids;

        return $this;
    }
    /**
     * Returns true if offset exists. False otherwise.
     *
     * @param integer $offset Offset
     *
     * @return boolean
     */
    public function offsetExists($offset)
    {
        return isset($this->container[$offset]);
    }

    /**
     * Gets offset.
     *
     * @param integer $offset Offset
     *
     * @return mixed|null
     */
    public function offsetGet($offset)
    {
        return $this->container[$offset] ?? null;
    }

    /**
     * Sets value based on offset.
     *
     * @param int|null $offset Offset
     * @param mixed    $value  Value to be set
     *
     * @return void
     */
    public function offsetSet($offset, $value)
    {
        if (is_null($offset)) {
            $this->container[] = $value;
        } else {
            $this->container[$offset] = $value;
        }
    }

    /**
     * Unsets offset.
     *
     * @param integer $offset Offset
     *
     * @return void
     */
    public function offsetUnset($offset)
    {
        unset($this->container[$offset]);
    }

    /**
     * Serializes the object to a value that can be serialized natively by json_encode().
     * @link https://www.php.net/manual/en/jsonserializable.jsonserialize.php
     *
     * @return mixed Returns data which can be serialized by json_encode(), which is a value
     * of any type other than a resource.
     */
    public function jsonSerialize()
    {
       return ObjectSerializer::sanitizeForSerialization($this);
    }

    /**
     * Gets the string presentation of the object
     *
     * @return string
     */
    public function __toString()
    {
        return json_encode(
            ObjectSerializer::sanitizeForSerialization($this),
            JSON_PRETTY_PRINT
        );
    }

    /**
     * Gets a header-safe presentation of the object
     *
     * @return string
     */
    public function toHeaderValue()
    {
        return json_encode(ObjectSerializer::sanitizeForSerialization($this));
    }
}


