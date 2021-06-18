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
 * @interface UpdateAdjustJangbuServiceInput
 */
export interface UpdateAdjustJangbuServiceInput {
    /**
     * 정산대상자 수
     * @type {number}
     * @memberof UpdateAdjustJangbuServiceInput
     */
    applyUserCount?: number | null;
    /**
     * 할인적용된 단가
     * @type {number}
     * @memberof UpdateAdjustJangbuServiceInput
     */
    discountUnitPrice?: number | null;
    /**
     * 메모 (할인책정사유 등)
     * @type {string}
     * @memberof UpdateAdjustJangbuServiceInput
     */
    memo?: string | null;
}

export function UpdateAdjustJangbuServiceInputFromJSON(json: any): UpdateAdjustJangbuServiceInput {
    return UpdateAdjustJangbuServiceInputFromJSONTyped(json, false);
}

export function UpdateAdjustJangbuServiceInputFromJSONTyped(json: any, ignoreDiscriminator: boolean): UpdateAdjustJangbuServiceInput {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'applyUserCount': !exists(json, 'applyUserCount') ? undefined : json['applyUserCount'],
        'discountUnitPrice': !exists(json, 'discountUnitPrice') ? undefined : json['discountUnitPrice'],
        'memo': !exists(json, 'memo') ? undefined : json['memo'],
    };
}

export function UpdateAdjustJangbuServiceInputToJSON(value?: UpdateAdjustJangbuServiceInput | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'applyUserCount': value.applyUserCount,
        'discountUnitPrice': value.discountUnitPrice,
        'memo': value.memo,
    };
}

