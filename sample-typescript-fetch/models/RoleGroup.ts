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
    RoleListItem,
    RoleListItemFromJSON,
    RoleListItemFromJSONTyped,
    RoleListItemToJSON,
} from './';

/**
 * 
 * @export
 * @interface RoleGroup
 */
export interface RoleGroup {
    /**
     * 권한그룹 코드
     * @type {string}
     * @memberof RoleGroup
     */
    code: string;
    /**
     * 권한그룹명
     * @type {string}
     * @memberof RoleGroup
     */
    name: string;
    /**
     * 권한그룹 설명
     * @type {string}
     * @memberof RoleGroup
     */
    desc?: string | null;
    /**
     * 회원 레벨
     * @type {number}
     * @memberof RoleGroup
     */
    userLevel: number;
    /**
     * 활성여부
     * @type {boolean}
     * @memberof RoleGroup
     */
    active: boolean;
    /**
     * 권한 목록
     * @type {Array<RoleListItem>}
     * @memberof RoleGroup
     */
    roleList: Array<RoleListItem>;
}

export function RoleGroupFromJSON(json: any): RoleGroup {
    return RoleGroupFromJSONTyped(json, false);
}

export function RoleGroupFromJSONTyped(json: any, ignoreDiscriminator: boolean): RoleGroup {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'code': json['code'],
        'name': json['name'],
        'desc': !exists(json, 'desc') ? undefined : json['desc'],
        'userLevel': json['userLevel'],
        'active': json['active'],
        'roleList': ((json['roleList'] as Array<any>).map(RoleListItemFromJSON)),
    };
}

export function RoleGroupToJSON(value?: RoleGroup | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'code': value.code,
        'name': value.name,
        'desc': value.desc,
        'userLevel': value.userLevel,
        'active': value.active,
        'roleList': ((value.roleList as Array<any>).map(RoleListItemToJSON)),
    };
}


