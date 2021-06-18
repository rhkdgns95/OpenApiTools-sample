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
    SlipUploadVoucher,
    SlipUploadVoucherFromJSON,
    SlipUploadVoucherFromJSONTyped,
    SlipUploadVoucherToJSON,
} from './';

/**
 * 
 * @export
 * @interface SlipUpload
 */
export interface SlipUpload {
    /**
     * 거래일시(YYYYMMDD)
     * @type {string}
     * @memberof SlipUpload
     */
    tRANSDATETIME: string;
    /**
     * 일자(YYYYMMDD)
     * @type {string}
     * @memberof SlipUpload
     */
    bILLDATE: string;
    /**
     * 거래일자(YYYYMMDD)
     * @type {string}
     * @memberof SlipUpload
     */
    tRANSDATE: string;
    /**
     * 과목코드
     * @type {string}
     * @memberof SlipUpload
     */
    eSTICODE: string;
    /**
     * 입출구분(I:세입, O:세출)
     * @type {string}
     * @memberof SlipUpload
     */
    eSTIINOUT: string;
    /**
     * 전표메모(공란)
     * @type {string}
     * @memberof SlipUpload
     */
    bILLMEMO: string;
    /**
     * 전표비고
     * @type {string}
     * @memberof SlipUpload
     */
    bILLBIGO: string;
    /**
     * 보조금여부(Y, N)
     * @type {string}
     * @memberof SlipUpload
     */
    bILLSUPPORTAT: string;
    /**
     * 누리지원여부(Y, N)
     * @type {string}
     * @memberof SlipUpload
     */
    bILLNURIAT: string;
    /**
     * 거래내역 입출구분 (I/O)
     * @type {string}
     * @memberof SlipUpload
     */
    tRANSGB: string;
    /**
     * 거래금액
     * @type {string}
     * @memberof SlipUpload
     */
    tRANSMONEY: string;
    /**
     * 입금액(출금거래시 0)
     * @type {string}
     * @memberof SlipUpload
     */
    tRANSMONEYIN: string;
    /**
     * 출금액(입금거래시 0)
     * @type {string}
     * @memberof SlipUpload
     */
    tRANSMONEYOUT: string;
    /**
     * 거래후 잔액
     * @type {string}
     * @memberof SlipUpload
     */
    tRANSREMAIN: string;
    /**
     * 거래내용(적요) 
     * @type {string}
     * @memberof SlipUpload
     */
    tRANSMEMO: string;
    /**
     * 결제방식(100~700)
     * @type {string}
     * @memberof SlipUpload
     */
    sETLEMTHD: string;
    /**
     * 증빙 목록
     * @type {Array<SlipUploadVoucher>}
     * @memberof SlipUpload
     */
    vOUCHER?: Array<SlipUploadVoucher> | null;
    /**
     * (slip_delete_upload의 경우 존재함)
     * @type {string}
     * @memberof SlipUpload
     */
    eSTIIDX?: string | null;
    /**
     * (slip_delete_upload의 경우 존재함)
     * @type {string}
     * @memberof SlipUpload
     */
    eSTINAME?: string | null;
    /**
     * (slip_delete_upload의 경우 존재함)
     * @type {string}
     * @memberof SlipUpload
     */
    eSTIDEPTH?: string | null;
    /**
     * (slip_delete_upload의 경우 존재함)
     * @type {string}
     * @memberof SlipUpload
     */
    eSTINAME1?: string | null;
    /**
     * (slip_delete_upload의 경우 존재함)
     * @type {string}
     * @memberof SlipUpload
     */
    eSTINAME2?: string | null;
    /**
     * (slip_delete_upload의 경우 존재함)
     * @type {string}
     * @memberof SlipUpload
     */
    eSTINAME3?: string | null;
    /**
     * (slip_delete_upload의 경우 존재함)
     * @type {string}
     * @memberof SlipUpload
     */
    bILLSUBCODE?: string | null;
    /**
     * (slip_delete_upload의 경우 존재함)
     * @type {string}
     * @memberof SlipUpload
     */
    eSTIDISPLAY?: string | null;
    /**
     * (slip_delete_upload의 경우 존재함)
     * @type {string}
     * @memberof SlipUpload
     */
    eSTIGB?: string | null;
    /**
     * (slip_delete_upload의 경우 존재함)
     * @type {string}
     * @memberof SlipUpload
     */
    eSTIPART?: string | null;
    /**
     * (slip_delete_upload의 경우 존재함)
     * @type {string}
     * @memberof SlipUpload
     */
    eSTISUBNM?: string | null;
    /**
     * (slip_delete_upload의 경우 존재함)
     * @type {string}
     * @memberof SlipUpload
     */
    eSTISUBYN?: string | null;
}

export function SlipUploadFromJSON(json: any): SlipUpload {
    return SlipUploadFromJSONTyped(json, false);
}

export function SlipUploadFromJSONTyped(json: any, ignoreDiscriminator: boolean): SlipUpload {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'tRANSDATETIME': json['TRANS_DATETIME'],
        'bILLDATE': json['BILL_DATE'],
        'tRANSDATE': json['TRANS_DATE'],
        'eSTICODE': json['ESTI_CODE'],
        'eSTIINOUT': json['ESTI_INOUT'],
        'bILLMEMO': json['BILL_MEMO'],
        'bILLBIGO': json['BILL_BIGO'],
        'bILLSUPPORTAT': json['BILL_SUPPORT_AT'],
        'bILLNURIAT': json['BILL_NURI_AT'],
        'tRANSGB': json['TRANS_GB'],
        'tRANSMONEY': json['TRANS_MONEY'],
        'tRANSMONEYIN': json['TRANS_MONEY_IN'],
        'tRANSMONEYOUT': json['TRANS_MONEY_OUT'],
        'tRANSREMAIN': json['TRANS_REMAIN'],
        'tRANSMEMO': json['TRANS_MEMO'],
        'sETLEMTHD': json['SETLE_MTHD'],
        'vOUCHER': !exists(json, 'VOUCHER') ? undefined : (json['VOUCHER'] === null ? null : (json['VOUCHER'] as Array<any>).map(SlipUploadVoucherFromJSON)),
        'eSTIIDX': !exists(json, 'ESTI_IDX') ? undefined : json['ESTI_IDX'],
        'eSTINAME': !exists(json, 'ESTI_NAME') ? undefined : json['ESTI_NAME'],
        'eSTIDEPTH': !exists(json, 'ESTI_DEPTH') ? undefined : json['ESTI_DEPTH'],
        'eSTINAME1': !exists(json, 'ESTI_NAME_1') ? undefined : json['ESTI_NAME_1'],
        'eSTINAME2': !exists(json, 'ESTI_NAME_2') ? undefined : json['ESTI_NAME_2'],
        'eSTINAME3': !exists(json, 'ESTI_NAME_3') ? undefined : json['ESTI_NAME_3'],
        'bILLSUBCODE': !exists(json, 'BILL_SUBCODE') ? undefined : json['BILL_SUBCODE'],
        'eSTIDISPLAY': !exists(json, 'ESTI_DISPLAY') ? undefined : json['ESTI_DISPLAY'],
        'eSTIGB': !exists(json, 'ESTI_GB') ? undefined : json['ESTI_GB'],
        'eSTIPART': !exists(json, 'ESTI_PART') ? undefined : json['ESTI_PART'],
        'eSTISUBNM': !exists(json, 'ESTI_SUB_NM') ? undefined : json['ESTI_SUB_NM'],
        'eSTISUBYN': !exists(json, 'ESTI_SUB_YN') ? undefined : json['ESTI_SUB_YN'],
    };
}

export function SlipUploadToJSON(value?: SlipUpload | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'TRANS_DATETIME': value.tRANSDATETIME,
        'BILL_DATE': value.bILLDATE,
        'TRANS_DATE': value.tRANSDATE,
        'ESTI_CODE': value.eSTICODE,
        'ESTI_INOUT': value.eSTIINOUT,
        'BILL_MEMO': value.bILLMEMO,
        'BILL_BIGO': value.bILLBIGO,
        'BILL_SUPPORT_AT': value.bILLSUPPORTAT,
        'BILL_NURI_AT': value.bILLNURIAT,
        'TRANS_GB': value.tRANSGB,
        'TRANS_MONEY': value.tRANSMONEY,
        'TRANS_MONEY_IN': value.tRANSMONEYIN,
        'TRANS_MONEY_OUT': value.tRANSMONEYOUT,
        'TRANS_REMAIN': value.tRANSREMAIN,
        'TRANS_MEMO': value.tRANSMEMO,
        'SETLE_MTHD': value.sETLEMTHD,
        'VOUCHER': value.vOUCHER === undefined ? undefined : (value.vOUCHER === null ? null : (value.vOUCHER as Array<any>).map(SlipUploadVoucherToJSON)),
        'ESTI_IDX': value.eSTIIDX,
        'ESTI_NAME': value.eSTINAME,
        'ESTI_DEPTH': value.eSTIDEPTH,
        'ESTI_NAME_1': value.eSTINAME1,
        'ESTI_NAME_2': value.eSTINAME2,
        'ESTI_NAME_3': value.eSTINAME3,
        'BILL_SUBCODE': value.bILLSUBCODE,
        'ESTI_DISPLAY': value.eSTIDISPLAY,
        'ESTI_GB': value.eSTIGB,
        'ESTI_PART': value.eSTIPART,
        'ESTI_SUB_NM': value.eSTISUBNM,
        'ESTI_SUB_YN': value.eSTISUBYN,
    };
}

