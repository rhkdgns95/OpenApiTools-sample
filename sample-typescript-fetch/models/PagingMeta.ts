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
 * @interface PagingMeta
 */
export interface PagingMeta {
    /**
     * 현재페이지 목록수
     * @type {number}
     * @memberof PagingMeta
     */
    readonly itemCount: number;
    /**
     * 전체목록수
     * @type {number}
     * @memberof PagingMeta
     */
    readonly totalItems: number;
    /**
     * 페이지당 목록수
     * @type {number}
     * @memberof PagingMeta
     */
    readonly itemsPerPage: number;
    /**
     * 전체페이지 수
     * @type {number}
     * @memberof PagingMeta
     */
    readonly totalPages: number;
    /**
     * 현재페이지 번호
     * @type {number}
     * @memberof PagingMeta
     */
    readonly currentPage: number;
}

export function PagingMetaFromJSON(json: any): PagingMeta {
    return PagingMetaFromJSONTyped(json, false);
}

export function PagingMetaFromJSONTyped(json: any, ignoreDiscriminator: boolean): PagingMeta {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'itemCount': json['itemCount'],
        'totalItems': json['totalItems'],
        'itemsPerPage': json['itemsPerPage'],
        'totalPages': json['totalPages'],
        'currentPage': json['currentPage'],
    };
}

export function PagingMetaToJSON(value?: PagingMeta | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
    };
}


