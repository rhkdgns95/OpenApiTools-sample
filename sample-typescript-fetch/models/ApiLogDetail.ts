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
 * @interface ApiLogDetail
 */
export interface ApiLogDetail {
    /**
     * api로그 번호
     * @type {number}
     * @memberof ApiLogDetail
     */
    apiId: number;
    /**
     * api 버전
     * @type {string}
     * @memberof ApiLogDetail
     */
    version?: string | null;
    /**
     * api 요청 method
     * @type {string}
     * @memberof ApiLogDetail
     */
    method?: string | null;
    /**
     * api 요청 서비스
     * @type {string}
     * @memberof ApiLogDetail
     */
    serviceName?: string | null;
    /**
     * api 요청 주체
     * @type {string}
     * @memberof ApiLogDetail
     */
    userType?: string | null;
    /**
     * 데이터등록요청 타입
     * @type {string}
     * @memberof ApiLogDetail
     */
    workRequestType?: string | null;
    /**
     * api 요청 결과
     * @type {string}
     * @memberof ApiLogDetail
     */
    description?: string | null;
    /**
     * In data
     * @type {string}
     * @memberof ApiLogDetail
     */
    inData?: string | null;
    /**
     * Out data
     * @type {string}
     * @memberof ApiLogDetail
     */
    outData?: string | null;
    /**
     * In data s3 데이터
     * @type {string}
     * @memberof ApiLogDetail
     */
    inDataPath?: string | null;
    /**
     * Out data s3 데이터
     * @type {string}
     * @memberof ApiLogDetail
     */
    outDataPath?: string | null;
}

export function ApiLogDetailFromJSON(json: any): ApiLogDetail {
    return ApiLogDetailFromJSONTyped(json, false);
}

export function ApiLogDetailFromJSONTyped(json: any, ignoreDiscriminator: boolean): ApiLogDetail {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'apiId': json['apiId'],
        'version': !exists(json, 'version') ? undefined : json['version'],
        'method': !exists(json, 'method') ? undefined : json['method'],
        'serviceName': !exists(json, 'serviceName') ? undefined : json['serviceName'],
        'userType': !exists(json, 'userType') ? undefined : json['userType'],
        'workRequestType': !exists(json, 'workRequestType') ? undefined : json['workRequestType'],
        'description': !exists(json, 'description') ? undefined : json['description'],
        'inData': !exists(json, 'inData') ? undefined : json['inData'],
        'outData': !exists(json, 'outData') ? undefined : json['outData'],
        'inDataPath': !exists(json, 'inDataPath') ? undefined : json['inDataPath'],
        'outDataPath': !exists(json, 'outDataPath') ? undefined : json['outDataPath'],
    };
}

export function ApiLogDetailToJSON(value?: ApiLogDetail | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'apiId': value.apiId,
        'version': value.version,
        'method': value.method,
        'serviceName': value.serviceName,
        'userType': value.userType,
        'workRequestType': value.workRequestType,
        'description': value.description,
        'inData': value.inData,
        'outData': value.outData,
        'inDataPath': value.inDataPath,
        'outDataPath': value.outDataPath,
    };
}


