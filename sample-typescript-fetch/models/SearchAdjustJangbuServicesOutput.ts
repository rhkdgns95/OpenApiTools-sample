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
    AdjustJangbuService,
    AdjustJangbuServiceFromJSON,
    AdjustJangbuServiceFromJSONTyped,
    AdjustJangbuServiceToJSON,
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
 * @interface SearchAdjustJangbuServicesOutput
 */
export interface SearchAdjustJangbuServicesOutput {
    /**
     * 장부사 서비스별 단가 목록
     * @type {Array<AdjustJangbuService>}
     * @memberof SearchAdjustJangbuServicesOutput
     */
    readonly items: Array<AdjustJangbuService>;
    /**
     * 페이징 메타정보
     * @type {PagingMeta}
     * @memberof SearchAdjustJangbuServicesOutput
     */
    readonly meta: PagingMeta;
    /**
     * 페이징 링크정보
     * @type {PagingLinks}
     * @memberof SearchAdjustJangbuServicesOutput
     */
    readonly links: PagingLinks;
}

export function SearchAdjustJangbuServicesOutputFromJSON(json: any): SearchAdjustJangbuServicesOutput {
    return SearchAdjustJangbuServicesOutputFromJSONTyped(json, false);
}

export function SearchAdjustJangbuServicesOutputFromJSONTyped(json: any, ignoreDiscriminator: boolean): SearchAdjustJangbuServicesOutput {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'items': ((json['items'] as Array<any>).map(AdjustJangbuServiceFromJSON)),
        'meta': PagingMetaFromJSON(json['meta']),
        'links': PagingLinksFromJSON(json['links']),
    };
}

export function SearchAdjustJangbuServicesOutputToJSON(value?: SearchAdjustJangbuServicesOutput | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
    };
}


