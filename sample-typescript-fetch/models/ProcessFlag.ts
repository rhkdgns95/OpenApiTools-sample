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

/**
 * 
 * @export
 * @enum {string}
 */
export enum ProcessFlag {
     = '접수',
     = '승인',
     = '진행',
     = '실패',
     = '접수실패',
     = '성공',
     = '자동취소',
     = '수동취소',
     = '중복취소'
}

export function ProcessFlagFromJSON(json: any): ProcessFlag {
    return ProcessFlagFromJSONTyped(json, false);
}

export function ProcessFlagFromJSONTyped(json: any, ignoreDiscriminator: boolean): ProcessFlag {
    return json as ProcessFlag;
}

export function ProcessFlagToJSON(value?: ProcessFlag | null): any {
    return value as any;
}
