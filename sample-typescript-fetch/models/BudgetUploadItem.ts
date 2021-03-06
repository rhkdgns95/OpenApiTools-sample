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
 * @interface BudgetUploadItem
 */
export interface BudgetUploadItem {
    /**
     * 산출기초명
     * @type {string}
     * @memberof BudgetUploadItem
     */
    eSTIOUTNAME: string;
    /**
     * 단가
     * @type {string}
     * @memberof BudgetUploadItem
     */
    eSTIOUTMONEY: string;
    /**
     * 수량1 (없을시 생략)
     * @type {string}
     * @memberof BudgetUploadItem
     */
    eSTIOUTBASICNUM1?: string | null;
    /**
     * 단위1 (없을시 생략)
     * @type {string}
     * @memberof BudgetUploadItem
     */
    eSTIOUTBASICTEXT1?: string | null;
    /**
     * 수량2 (없을시 생략)
     * @type {string}
     * @memberof BudgetUploadItem
     */
    eSTIOUTBASICNUM2?: string | null;
    /**
     * 단위2 (없을시 생략)
     * @type {string}
     * @memberof BudgetUploadItem
     */
    eSTIOUTBASICTEXT2?: string | null;
    /**
     * 수량3 (없을시 생략)
     * @type {string}
     * @memberof BudgetUploadItem
     */
    eSTIOUTBASICNUM3?: string | null;
    /**
     * 단위3 (없을시 생략)
     * @type {string}
     * @memberof BudgetUploadItem
     */
    eSTIOUTBASICTEXT3?: string | null;
    /**
     * 수량4 (없을시 생략)
     * @type {string}
     * @memberof BudgetUploadItem
     */
    eSTIOUTBASICNUM4?: string | null;
    /**
     * 단위4 (없을시 생략)
     * @type {string}
     * @memberof BudgetUploadItem
     */
    eSTIOUTBASICTEXT4?: string | null;
    /**
     * 수량5 (없을시 생략)
     * @type {string}
     * @memberof BudgetUploadItem
     */
    eSTIOUTBASICNUM5?: string | null;
    /**
     * 단위5 (없을시 생략)
     * @type {string}
     * @memberof BudgetUploadItem
     */
    eSTIOUTBASICTEXT5?: string | null;
    /**
     * 수량6 (없을시 생략)
     * @type {string}
     * @memberof BudgetUploadItem
     */
    eSTIOUTBASICNUM6?: string | null;
    /**
     * 단위6 (없을시 생략)
     * @type {string}
     * @memberof BudgetUploadItem
     */
    eSTIOUTBASICTEXT6?: string | null;
    /**
     * 수량7 (없을시 생략)
     * @type {string}
     * @memberof BudgetUploadItem
     */
    eSTIOUTBASICNUM7?: string | null;
    /**
     * 단위7 (없을시 생략)
     * @type {string}
     * @memberof BudgetUploadItem
     */
    eSTIOUTBASICTEXT7?: string | null;
    /**
     * 수량8 (없을시 생략)
     * @type {string}
     * @memberof BudgetUploadItem
     */
    eSTIOUTBASICNUM8?: string | null;
    /**
     * 단위9 (없을시 생략)
     * @type {string}
     * @memberof BudgetUploadItem
     */
    eSTIOUTBASICTEXT8?: string | null;
    /**
     * 수량9 (없을시 생략)
     * @type {string}
     * @memberof BudgetUploadItem
     */
    eSTIOUTBASICNUM9?: string | null;
    /**
     * 단위9 (없을시 생략)
     * @type {string}
     * @memberof BudgetUploadItem
     */
    eSTIOUTBASICTEXT9?: string | null;
    /**
     * 합계(산출액)
     * @type {number}
     * @memberof BudgetUploadItem
     */
    eSTIOUTTOTMONEY: number;
}

export function BudgetUploadItemFromJSON(json: any): BudgetUploadItem {
    return BudgetUploadItemFromJSONTyped(json, false);
}

export function BudgetUploadItemFromJSONTyped(json: any, ignoreDiscriminator: boolean): BudgetUploadItem {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'eSTIOUTNAME': json['ESTI_OUT_NAME'],
        'eSTIOUTMONEY': json['ESTI_OUT_MONEY'],
        'eSTIOUTBASICNUM1': !exists(json, 'ESTI_OUT_BASICNUM1') ? undefined : json['ESTI_OUT_BASICNUM1'],
        'eSTIOUTBASICTEXT1': !exists(json, 'ESTI_OUT_BASICTEXT1') ? undefined : json['ESTI_OUT_BASICTEXT1'],
        'eSTIOUTBASICNUM2': !exists(json, 'ESTI_OUT_BASICNUM2') ? undefined : json['ESTI_OUT_BASICNUM2'],
        'eSTIOUTBASICTEXT2': !exists(json, 'ESTI_OUT_BASICTEXT2') ? undefined : json['ESTI_OUT_BASICTEXT2'],
        'eSTIOUTBASICNUM3': !exists(json, 'ESTI_OUT_BASICNUM3') ? undefined : json['ESTI_OUT_BASICNUM3'],
        'eSTIOUTBASICTEXT3': !exists(json, 'ESTI_OUT_BASICTEXT3') ? undefined : json['ESTI_OUT_BASICTEXT3'],
        'eSTIOUTBASICNUM4': !exists(json, 'ESTI_OUT_BASICNUM4') ? undefined : json['ESTI_OUT_BASICNUM4'],
        'eSTIOUTBASICTEXT4': !exists(json, 'ESTI_OUT_BASICTEXT4') ? undefined : json['ESTI_OUT_BASICTEXT4'],
        'eSTIOUTBASICNUM5': !exists(json, 'ESTI_OUT_BASICNUM5') ? undefined : json['ESTI_OUT_BASICNUM5'],
        'eSTIOUTBASICTEXT5': !exists(json, 'ESTI_OUT_BASICTEXT5') ? undefined : json['ESTI_OUT_BASICTEXT5'],
        'eSTIOUTBASICNUM6': !exists(json, 'ESTI_OUT_BASICNUM6') ? undefined : json['ESTI_OUT_BASICNUM6'],
        'eSTIOUTBASICTEXT6': !exists(json, 'ESTI_OUT_BASICTEXT6') ? undefined : json['ESTI_OUT_BASICTEXT6'],
        'eSTIOUTBASICNUM7': !exists(json, 'ESTI_OUT_BASICNUM7') ? undefined : json['ESTI_OUT_BASICNUM7'],
        'eSTIOUTBASICTEXT7': !exists(json, 'ESTI_OUT_BASICTEXT7') ? undefined : json['ESTI_OUT_BASICTEXT7'],
        'eSTIOUTBASICNUM8': !exists(json, 'ESTI_OUT_BASICNUM8') ? undefined : json['ESTI_OUT_BASICNUM8'],
        'eSTIOUTBASICTEXT8': !exists(json, 'ESTI_OUT_BASICTEXT8') ? undefined : json['ESTI_OUT_BASICTEXT8'],
        'eSTIOUTBASICNUM9': !exists(json, 'ESTI_OUT_BASICNUM9') ? undefined : json['ESTI_OUT_BASICNUM9'],
        'eSTIOUTBASICTEXT9': !exists(json, 'ESTI_OUT_BASICTEXT9') ? undefined : json['ESTI_OUT_BASICTEXT9'],
        'eSTIOUTTOTMONEY': json['ESTI_OUT_TOTMONEY'],
    };
}

export function BudgetUploadItemToJSON(value?: BudgetUploadItem | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'ESTI_OUT_NAME': value.eSTIOUTNAME,
        'ESTI_OUT_MONEY': value.eSTIOUTMONEY,
        'ESTI_OUT_BASICNUM1': value.eSTIOUTBASICNUM1,
        'ESTI_OUT_BASICTEXT1': value.eSTIOUTBASICTEXT1,
        'ESTI_OUT_BASICNUM2': value.eSTIOUTBASICNUM2,
        'ESTI_OUT_BASICTEXT2': value.eSTIOUTBASICTEXT2,
        'ESTI_OUT_BASICNUM3': value.eSTIOUTBASICNUM3,
        'ESTI_OUT_BASICTEXT3': value.eSTIOUTBASICTEXT3,
        'ESTI_OUT_BASICNUM4': value.eSTIOUTBASICNUM4,
        'ESTI_OUT_BASICTEXT4': value.eSTIOUTBASICTEXT4,
        'ESTI_OUT_BASICNUM5': value.eSTIOUTBASICNUM5,
        'ESTI_OUT_BASICTEXT5': value.eSTIOUTBASICTEXT5,
        'ESTI_OUT_BASICNUM6': value.eSTIOUTBASICNUM6,
        'ESTI_OUT_BASICTEXT6': value.eSTIOUTBASICTEXT6,
        'ESTI_OUT_BASICNUM7': value.eSTIOUTBASICNUM7,
        'ESTI_OUT_BASICTEXT7': value.eSTIOUTBASICTEXT7,
        'ESTI_OUT_BASICNUM8': value.eSTIOUTBASICNUM8,
        'ESTI_OUT_BASICTEXT8': value.eSTIOUTBASICTEXT8,
        'ESTI_OUT_BASICNUM9': value.eSTIOUTBASICNUM9,
        'ESTI_OUT_BASICTEXT9': value.eSTIOUTBASICTEXT9,
        'ESTI_OUT_TOTMONEY': value.eSTIOUTTOTMONEY,
    };
}


