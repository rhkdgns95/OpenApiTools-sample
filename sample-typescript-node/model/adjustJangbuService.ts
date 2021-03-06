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

export class AdjustJangbuService {
    /**
    * 장부사 순번
    */
    'jangbuId': number;
    /**
    * 정산월
    */
    'yearMonth': number;
    /**
    * 서비스 순번
    */
    'serviceId': number;
    /**
    * 서비스명
    */
    'serviceName': string;
    /**
    * 정산단가
    */
    'unitPrice': number;
    /**
    * 할인적용된 단가
    */
    'discountUnitPrice': number;
    /**
    * 정산대상자 수
    */
    'applyUserCount': number;
    /**
    * 정산금액
    */
    'totalPrice': number;
    /**
    * 메모 (할인책정사유 등)
    */
    'memo': string;
    /**
    * 무료이용건수
    */
    'freeCount'?: number | null;
    /**
    * 할인금액
    */
    'totalDiscountPrice'?: number | null;
    /**
    * 총 공급가
    */
    'totalBillingPrice'?: number | null;
    /**
    * VAT적용된 총 공급가
    */
    'totalVatBillingPrice'?: number | null;

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
            "name": "unitPrice",
            "baseName": "unitPrice",
            "type": "number"
        },
        {
            "name": "discountUnitPrice",
            "baseName": "discountUnitPrice",
            "type": "number"
        },
        {
            "name": "applyUserCount",
            "baseName": "applyUserCount",
            "type": "number"
        },
        {
            "name": "totalPrice",
            "baseName": "totalPrice",
            "type": "number"
        },
        {
            "name": "memo",
            "baseName": "memo",
            "type": "string"
        },
        {
            "name": "freeCount",
            "baseName": "freeCount",
            "type": "number"
        },
        {
            "name": "totalDiscountPrice",
            "baseName": "totalDiscountPrice",
            "type": "number"
        },
        {
            "name": "totalBillingPrice",
            "baseName": "totalBillingPrice",
            "type": "number"
        },
        {
            "name": "totalVatBillingPrice",
            "baseName": "totalVatBillingPrice",
            "type": "number"
        }    ];

    static getAttributeTypeMap() {
        return AdjustJangbuService.attributeTypeMap;
    }
}

