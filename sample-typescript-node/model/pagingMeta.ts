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

export class PagingMeta {
    /**
    * 현재페이지 목록수
    */
    'itemCount': number;
    /**
    * 전체목록수
    */
    'totalItems': number;
    /**
    * 페이지당 목록수
    */
    'itemsPerPage': number;
    /**
    * 전체페이지 수
    */
    'totalPages': number;
    /**
    * 현재페이지 번호
    */
    'currentPage': number;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "itemCount",
            "baseName": "itemCount",
            "type": "number"
        },
        {
            "name": "totalItems",
            "baseName": "totalItems",
            "type": "number"
        },
        {
            "name": "itemsPerPage",
            "baseName": "itemsPerPage",
            "type": "number"
        },
        {
            "name": "totalPages",
            "baseName": "totalPages",
            "type": "number"
        },
        {
            "name": "currentPage",
            "baseName": "currentPage",
            "type": "number"
        }    ];

    static getAttributeTypeMap() {
        return PagingMeta.attributeTypeMap;
    }
}

