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
 * @interface ExceptionResponse
 */
export interface ExceptionResponse {
    /**
     * HTTP Status Code
     * @type {number}
     * @memberof ExceptionResponse
     */
    statusCode: number;
    /**
     * 결과 메시지
     * @type {string}
     * @memberof ExceptionResponse
     */
    message: string;
    /**
     * 에러 내용
     * @type {string}
     * @memberof ExceptionResponse
     */
    error: string;
}

export function ExceptionResponseFromJSON(json: any): ExceptionResponse {
    return ExceptionResponseFromJSONTyped(json, false);
}

export function ExceptionResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): ExceptionResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'statusCode': json['statusCode'],
        'message': json['message'],
        'error': json['error'],
    };
}

export function ExceptionResponseToJSON(value?: ExceptionResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'statusCode': value.statusCode,
        'message': value.message,
        'error': value.error,
    };
}


