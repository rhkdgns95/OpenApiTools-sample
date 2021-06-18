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
    OsType,
    OsTypeFromJSON,
    OsTypeFromJSONTyped,
    OsTypeToJSON,
    RegisterAppVersionInputInfo,
    RegisterAppVersionInputInfoFromJSON,
    RegisterAppVersionInputInfoFromJSONTyped,
    RegisterAppVersionInputInfoToJSON,
} from './';

/**
 * 
 * @export
 * @interface RegisterAppVersionInput
 */
export interface RegisterAppVersionInput {
    /**
     * 버전명
     * @type {string}
     * @memberof RegisterAppVersionInput
     */
    version: string;
    /**
     * 
     * @type {OsType}
     * @memberof RegisterAppVersionInput
     */
    osType: OsType;
    /**
     * url
     * @type {string}
     * @memberof RegisterAppVersionInput
     */
    url: string;
    /**
     * 내용
     * @type {string}
     * @memberof RegisterAppVersionInput
     */
    description: string;
    /**
     * 상세정보
     * @type {RegisterAppVersionInputInfo}
     * @memberof RegisterAppVersionInput
     */
    info: RegisterAppVersionInputInfo;
}

export function RegisterAppVersionInputFromJSON(json: any): RegisterAppVersionInput {
    return RegisterAppVersionInputFromJSONTyped(json, false);
}

export function RegisterAppVersionInputFromJSONTyped(json: any, ignoreDiscriminator: boolean): RegisterAppVersionInput {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'version': json['version'],
        'osType': OsTypeFromJSON(json['osType']),
        'url': json['url'],
        'description': json['description'],
        'info': RegisterAppVersionInputInfoFromJSON(json['info']),
    };
}

export function RegisterAppVersionInputToJSON(value?: RegisterAppVersionInput | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'version': value.version,
        'osType': OsTypeToJSON(value.osType),
        'url': value.url,
        'description': value.description,
        'info': RegisterAppVersionInputInfoToJSON(value.info),
    };
}

