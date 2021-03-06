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
 * @interface UpdateChargeJangbuPartnershipInput
 */
export interface UpdateChargeJangbuPartnershipInput {
    /**
     * 계좌수
     * @type {number}
     * @memberof UpdateChargeJangbuPartnershipInput
     */
    applyCount?: number | null;
    /**
     * 단가
     * @type {number}
     * @memberof UpdateChargeJangbuPartnershipInput
     */
    unitPrice?: number | null;
}

export function UpdateChargeJangbuPartnershipInputFromJSON(json: any): UpdateChargeJangbuPartnershipInput {
    return UpdateChargeJangbuPartnershipInputFromJSONTyped(json, false);
}

export function UpdateChargeJangbuPartnershipInputFromJSONTyped(json: any, ignoreDiscriminator: boolean): UpdateChargeJangbuPartnershipInput {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'applyCount': !exists(json, 'applyCount') ? undefined : json['applyCount'],
        'unitPrice': !exists(json, 'unitPrice') ? undefined : json['unitPrice'],
    };
}

export function UpdateChargeJangbuPartnershipInputToJSON(value?: UpdateChargeJangbuPartnershipInput | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'applyCount': value.applyCount,
        'unitPrice': value.unitPrice,
    };
}


