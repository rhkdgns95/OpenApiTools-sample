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
 * @interface UpdateMemberInput
 */
export interface UpdateMemberInput {
    /**
     * 회원명
     * @type {string}
     * @memberof UpdateMemberInput
     */
    name?: string | null;
    /**
     * 패스워드
     * @type {string}
     * @memberof UpdateMemberInput
     */
    password?: string | null;
    /**
     * 이메일
     * @type {string}
     * @memberof UpdateMemberInput
     */
    email?: string | null;
    /**
     * 휴대폰 (숫자만 입력)
     * @type {string}
     * @memberof UpdateMemberInput
     */
    phone?: string | null;
    /**
     * 이용여부
     * @type {boolean}
     * @memberof UpdateMemberInput
     */
    active?: boolean | null;
}

export function UpdateMemberInputFromJSON(json: any): UpdateMemberInput {
    return UpdateMemberInputFromJSONTyped(json, false);
}

export function UpdateMemberInputFromJSONTyped(json: any, ignoreDiscriminator: boolean): UpdateMemberInput {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'name': !exists(json, 'name') ? undefined : json['name'],
        'password': !exists(json, 'password') ? undefined : json['password'],
        'email': !exists(json, 'email') ? undefined : json['email'],
        'phone': !exists(json, 'phone') ? undefined : json['phone'],
        'active': !exists(json, 'active') ? undefined : json['active'],
    };
}

export function UpdateMemberInputToJSON(value?: UpdateMemberInput | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'name': value.name,
        'password': value.password,
        'email': value.email,
        'phone': value.phone,
        'active': value.active,
    };
}


