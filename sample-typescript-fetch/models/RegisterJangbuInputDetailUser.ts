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
 * @interface RegisterJangbuInputDetailUser
 */
export interface RegisterJangbuInputDetailUser {
    /**
     * 로그인 아이디
     * @type {string}
     * @memberof RegisterJangbuInputDetailUser
     */
    loginId: string;
    /**
     * 로그인 패스워드
     * @type {string}
     * @memberof RegisterJangbuInputDetailUser
     */
    password: string;
    /**
     * 회원명
     * @type {string}
     * @memberof RegisterJangbuInputDetailUser
     */
    name: string;
    /**
     * 이메일
     * @type {string}
     * @memberof RegisterJangbuInputDetailUser
     */
    email: string;
    /**
     * 휴대폰번호
     * @type {string}
     * @memberof RegisterJangbuInputDetailUser
     */
    phone: string;
}

export function RegisterJangbuInputDetailUserFromJSON(json: any): RegisterJangbuInputDetailUser {
    return RegisterJangbuInputDetailUserFromJSONTyped(json, false);
}

export function RegisterJangbuInputDetailUserFromJSONTyped(json: any, ignoreDiscriminator: boolean): RegisterJangbuInputDetailUser {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'loginId': json['loginId'],
        'password': json['password'],
        'name': json['name'],
        'email': json['email'],
        'phone': json['phone'],
    };
}

export function RegisterJangbuInputDetailUserToJSON(value?: RegisterJangbuInputDetailUser | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'loginId': value.loginId,
        'password': value.password,
        'name': value.name,
        'email': value.email,
        'phone': value.phone,
    };
}


