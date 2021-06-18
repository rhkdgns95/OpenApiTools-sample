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
import {
    ChargeJangbu,
    ChargeJangbuFromJSON,
    ChargeJangbuFromJSONTyped,
    ChargeJangbuToJSON,
    PagingLinks,
    PagingLinksFromJSON,
    PagingLinksFromJSONTyped,
    PagingLinksToJSON,
    PagingMeta,
    PagingMetaFromJSON,
    PagingMetaFromJSONTyped,
    PagingMetaToJSON,
} from './';

/**
 * 
 * @export
 * @interface SearchChargeJangbusOutput
 */
export interface SearchChargeJangbusOutput {
    /**
     * 정산내역 목록
     * @type {Array<ChargeJangbu>}
     * @memberof SearchChargeJangbusOutput
     */
    readonly items: Array<ChargeJangbu>;
    /**
     * 페이징 메타정보
     * @type {PagingMeta}
     * @memberof SearchChargeJangbusOutput
     */
    readonly meta: PagingMeta;
    /**
     * 페이징 링크정보
     * @type {PagingLinks}
     * @memberof SearchChargeJangbusOutput
     */
    readonly links: PagingLinks;
}

export function SearchChargeJangbusOutputFromJSON(json: any): SearchChargeJangbusOutput {
    return SearchChargeJangbusOutputFromJSONTyped(json, false);
}

export function SearchChargeJangbusOutputFromJSONTyped(json: any, ignoreDiscriminator: boolean): SearchChargeJangbusOutput {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'items': ((json['items'] as Array<any>).map(ChargeJangbuFromJSON)),
        'meta': PagingMetaFromJSON(json['meta']),
        'links': PagingLinksFromJSON(json['links']),
    };
}

export function SearchChargeJangbusOutputToJSON(value?: SearchChargeJangbusOutput | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
    };
}

