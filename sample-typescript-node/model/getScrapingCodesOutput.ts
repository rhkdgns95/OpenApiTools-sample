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
import { PagingLinks } from './pagingLinks';
import { PagingMeta } from './pagingMeta';
import { ScrapingCode } from './scrapingCode';

export class GetScrapingCodesOutput {
    /**
    * 스크랩핑 코드 목록
    */
    'items': Array<ScrapingCode>;
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
            "type": "Array<ScrapingCode>"
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
        return GetScrapingCodesOutput.attributeTypeMap;
    }
}
