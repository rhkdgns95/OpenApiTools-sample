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
 * @interface Notice
 */
export interface Notice {
    /**
     * 공지사항 순번
     * @type {number}
     * @memberof Notice
     */
    id: number;
    /**
     * 공지사항 제목
     * @type {string}
     * @memberof Notice
     */
    title: string;
    /**
     * 공지사항 내용
     * @type {string}
     * @memberof Notice
     */
    content: string;
    /**
     * 공지사항 조회수
     * @type {number}
     * @memberof Notice
     */
    count: number;
    /**
     * 공개범위
     * @type {string}
     * @memberof Notice
     */
    partner: NoticePartnerEnum;
    /**
     * 공지사항 생성일
     * @type {Date}
     * @memberof Notice
     */
    createdAt: Date;
}

/**
* @export
* @enum {string}
*/
export enum NoticePartnerEnum {
     = '전체',
     = '뱅크다',
    _24 = '카페24'
}

export function NoticeFromJSON(json: any): Notice {
    return NoticeFromJSONTyped(json, false);
}

export function NoticeFromJSONTyped(json: any, ignoreDiscriminator: boolean): Notice {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'title': json['title'],
        'content': json['content'],
        'count': json['count'],
        'partner': json['partner'],
        'createdAt': (new Date(json['createdAt'])),
    };
}

export function NoticeToJSON(value?: Notice | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'title': value.title,
        'content': value.content,
        'count': value.count,
        'partner': value.partner,
        'createdAt': (value.createdAt.toISOString()),
    };
}


