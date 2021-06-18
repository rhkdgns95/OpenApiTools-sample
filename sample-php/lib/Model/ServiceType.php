<?php
/**
 * ServiceType
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
use \OpenAPI\Client\ObjectSerializer;

/**
 * ServiceType Class Doc Comment
 *
 * @category Class
 * @package  OpenAPI\Client
 * @author   OpenAPI Generator team
 * @link     https://openapi-generator.tech
 */
class ServiceType
{
    /**
     * Possible values of this enum
     */
    const  = '경기형';
    const  = '서울형';
    const W4C = 'w4c';
    const  = '계좌통합';
    const  = '음식배달';
    const EDI = 'EDI';
    const  = '증빙앱';
    const  = '대구형';
    const  = '인천형';
    
    /**
     * Gets allowable values of the enum
     * @return string[]
     */
    public static function getAllowableEnumValues()
    {
        return [
            self::,
            self::,
            self::W4C,
            self::,
            self::,
            self::EDI,
            self::,
            self::,
            self::,
        ];
    }
}


