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
 * @interface ResetPasswordInput
 */
export interface ResetPasswordInput {
    /**
     * (변경할) 패스워드
     * @type {string}
     * @memberof ResetPasswordInput
     */
    password: string;
}

export function ResetPasswordInputFromJSON(json: any): ResetPasswordInput {
    return ResetPasswordInputFromJSONTyped(json, false);
}

export function ResetPasswordInputFromJSONTyped(json: any, ignoreDiscriminator: boolean): ResetPasswordInput {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'password': json['password'],
    };
}

export function ResetPasswordInputToJSON(value?: ResetPasswordInput | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'password': value.password,
    };
}


