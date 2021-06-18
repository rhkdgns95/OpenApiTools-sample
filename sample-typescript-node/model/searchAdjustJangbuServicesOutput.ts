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
import { AdjustJangbuService } from './adjustJangbuService';
import { PagingLinks } from './pagingLinks';
import { PagingMeta } from './pagingMeta';

export class SearchAdjustJangbuServicesOutput {
    /**
    * 장부사 서비스별 단가 목록
    */
    'items': Array<AdjustJangbuService>;
    /**
    * 페이징 메타정보
    */
    'meta': PagingMeta;
    /**
    * 페이징 링크정보
    */
    'links': PagingLinks;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "items",
            "baseName": "items",
            "type": "Array<AdjustJangbuService>"
        },
        {
            "name": "meta",
            "baseName": "meta",
            "type": "PagingMeta"
        },
        {
            "name": "links",
            "baseName": "links",
            "type": "PagingLinks"
        }    ];

    static getAttributeTypeMap() {
        return SearchAdjustJangbuServicesOutput.attributeTypeMap;
    }
}

