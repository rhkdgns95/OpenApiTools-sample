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
 * @interface GetWorkS3DataResponse
 */
export interface GetWorkS3DataResponse {
    /**
     * 로그정보
     * @type {string}
     * @memberof GetWorkS3DataResponse
     */
    log: string;
}

export function GetWorkS3DataResponseFromJSON(json: any): GetWorkS3DataResponse {
    return GetWorkS3DataResponseFromJSONTyped(json, false);
}

export function GetWorkS3DataResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetWorkS3DataResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'log': json['log'],
    };
}

export function GetWorkS3DataResponseToJSON(value?: GetWorkS3DataResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'log': value.log,
    };
}


