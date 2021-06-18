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
 * @interface PagingLinks
 */
export interface PagingLinks {
    /**
     * 처음 페이지 링크
     * @type {string}
     * @memberof PagingLinks
     */
    first?: string;
    /**
     * 이전 페이지 링크
     * @type {string}
     * @memberof PagingLinks
     */
    previous?: string;
    /**
     * 다음 페이지 링크
     * @type {string}
     * @memberof PagingLinks
     */
    next?: string;
    /**
     * 마지막 페이지 링크
     * @type {string}
     * @memberof PagingLinks
     */
    last?: string;
}

export function PagingLinksFromJSON(json: any): PagingLinks {
    return PagingLinksFromJSONTyped(json, false);
}

export function PagingLinksFromJSONTyped(json: any, ignoreDiscriminator: boolean): PagingLinks {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'first': !exists(json, 'first') ? undefined : json['first'],
        'previous': !exists(json, 'previous') ? undefined : json['previous'],
        'next': !exists(json, 'next') ? undefined : json['next'],
        'last': !exists(json, 'last') ? undefined : json['last'],
    };
}

export function PagingLinksToJSON(value?: PagingLinks | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'first': value.first,
        'previous': value.previous,
        'next': value.next,
        'last': value.last,
    };
}


