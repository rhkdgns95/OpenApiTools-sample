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
export enum ChargeJangbuStatus {
    Ready = 'ready',
    Complete = 'complete'
}

export function ChargeJangbuStatusFromJSON(json: any): ChargeJangbuStatus {
    return ChargeJangbuStatusFromJSONTyped(json, false);
}

export function ChargeJangbuStatusFromJSONTyped(json: any, ignoreDiscriminator: boolean): ChargeJangbuStatus {
    return json as ChargeJangbuStatus;
}

export function ChargeJangbuStatusToJSON(value?: ChargeJangbuStatus | null): any {
    return value as any;
}

