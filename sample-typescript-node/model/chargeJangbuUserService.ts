/**
 * 뱅크다K 웹앱 REST API
 * 뱅크다K 웹앱 REST API : 관리자, 장부사, 고객사
 *
 * The version of the OpenAPI document: 0.5.2
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from './models';
import { User } from './user';

export class ChargeJangbuUserService {
    /**
    * 장부사 순번
    */
    'jangbuId': number;
    /**
    * 정산연월
    */
    'yearMonth': number;
    /**
    * 고객 순번
    */
    'userId': number;
    /**
    * 서비스 순번
    */
    'serviceId': number;
    /**
    * 서비스명
    */
    'serviceName': string;
    /**
    * 정산합계금액
    */
    'price': number;
    /**
    * 할인적용금액
    */
    'discountPrice': number;
    /**
    * 청구금액
    */
    'billingPrice': number;
    /**
    * 메모(합계 산정 이유 등)
    */
    'memo': string;
    /**
    * 회원정보
    */
    'user'?: User | null;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "jangbuId",
            "baseName": "jangbuId",
            "type": "number"
        },
        {
            "name": "yearMonth",
            "baseName": "yearMonth",
            "type": "number"
        },
        {
            "name": "userId",
            "baseName": "userId",
            "type": "number"
        },
        {
            "name": "serviceId",
            "baseName": "serviceId",
            "type": "number"
        },
        {
            "name": "serviceName",
            "baseName": "serviceName",
            "type": "string"
        },
        {
            "name": "price",
            "baseName": "price",
            "type": "number"
        },
        {
            "name": "discountPrice",
            "baseName": "discountPrice",
            "type": "number"
        },
        {
            "name": "billingPrice",
            "baseName": "billingPrice",
            "type": "number"
        },
        {
            "name": "memo",
            "baseName": "memo",
            "type": "string"
        },
        {
            "name": "user",
            "baseName": "user",
            "type": "User"
        }    ];

    static getAttributeTypeMap() {
        return ChargeJangbuUserService.attributeTypeMap;
    }
}
