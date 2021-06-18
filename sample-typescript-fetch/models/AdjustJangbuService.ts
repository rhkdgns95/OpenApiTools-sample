/* tslint:disable */
/* eslint-disable */
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

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface AdjustJangbuService
 */
export interface AdjustJangbuService {
    /**
     * 장부사 순번
     * @type {number}
     * @memberof AdjustJangbuService
     */
    jangbuId: number;
    /**
     * 정산월
     * @type {number}
     * @memberof AdjustJangbuService
     */
    yearMonth: number;
    /**
     * 서비스 순번
     * @type {number}
     * @memberof AdjustJangbuService
     */
    serviceId: number;
    /**
     * 서비스명
     * @type {string}
     * @memberof AdjustJangbuService
     */
    serviceName: string;
    /**
     * 정산단가
     * @type {number}
     * @memberof AdjustJangbuService
     */
    unitPrice: number;
    /**
     * 할인적용된 단가
     * @type {number}
     * @memberof AdjustJangbuService
     */
    discountUnitPrice: number;
    /**
     * 정산대상자 수
     * @type {number}
     * @memberof AdjustJangbuService
     */
    applyUserCount: number;
    /**
     * 정산금액
     * @type {number}
     * @memberof AdjustJangbuService
     */
    totalPrice: number;
    /**
     * 메모 (할인책정사유 등)
     * @type {string}
     * @memberof AdjustJangbuService
     */
    memo: string;
    /**
     * 무료이용건수
     * @type {number}
     * @memberof AdjustJangbuService
     */
    freeCount?: number | null;
    /**
     * 할인금액
     * @type {number}
     * @memberof AdjustJangbuService
     */
    totalDiscountPrice?: number | null;
    /**
     * 총 공급가
     * @type {number}
     * @memberof AdjustJangbuService
     */
    totalBillingPrice?: number | null;
    /**
     * VAT적용된 총 공급가
     * @type {number}
     * @memberof AdjustJangbuService
     */
    totalVatBillingPrice?: number | null;
}

export function AdjustJangbuServiceFromJSON(json: any): AdjustJangbuService {
    return AdjustJangbuServiceFromJSONTyped(json, false);
}

export function AdjustJangbuServiceFromJSONTyped(json: any, ignoreDiscriminator: boolean): AdjustJangbuService {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'jangbuId': json['jangbuId'],
        'yearMonth': json['yearMonth'],
        'serviceId': json['serviceId'],
        'serviceName': json['serviceName'],
        'unitPrice': json['unitPrice'],
        'discountUnitPrice': json['discountUnitPrice'],
        'applyUserCount': json['applyUserCount'],
        'totalPrice': json['totalPrice'],
        'memo': json['memo'],
        'freeCount': !exists(json, 'freeCount') ? undefined : json['freeCount'],
        'totalDiscountPrice': !exists(json, 'totalDiscountPrice') ? undefined : json['totalDiscountPrice'],
        'totalBillingPrice': !exists(json, 'totalBillingPrice') ? undefined : json['totalBillingPrice'],
        'totalVatBillingPrice': !exists(json, 'totalVatBillingPrice') ? undefined : json['totalVatBillingPrice'],
    };
}

export function AdjustJangbuServiceToJSON(value?: AdjustJangbuService | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'jangbuId': value.jangbuId,
        'yearMonth': value.yearMonth,
        'serviceId': value.serviceId,
        'serviceName': value.serviceName,
        'unitPrice': value.unitPrice,
        'discountUnitPrice': value.discountUnitPrice,
        'applyUserCount': value.applyUserCount,
        'totalPrice': value.totalPrice,
        'memo': value.memo,
        'freeCount': value.freeCount,
        'totalDiscountPrice': value.totalDiscountPrice,
        'totalBillingPrice': value.totalBillingPrice,
        'totalVatBillingPrice': value.totalVatBillingPrice,
    };
}


