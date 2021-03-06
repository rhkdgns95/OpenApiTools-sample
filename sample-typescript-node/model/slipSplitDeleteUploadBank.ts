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

import { RequestFile } from './models';

export class SlipSplitDeleteUploadBank {
    /**
    * 거래일시(YYYYMMDD)
    */
    'tRANSDATETIME'?: object | null;
    /**
    * 일자(YYYYMMDD)
    */
    'tRANSDATE'?: object | null;
    /**
    * 거래내역 입출구분 (I/O)
    */
    'tRANSGB'?: object | null;
    /**
    * 거래금액
    */
    'tRANSMONEY'?: object | null;
    /**
    * 입금액(출금거래시 0)
    */
    'tRANSMONEYIN'?: object | null;
    /**
    * 출금액(입금거래시 0)
    */
    'tRANSMONEYOUT'?: object | null;
    /**
    * 거래후 잔액
    */
    'tRANSREMAIN'?: object | null;
    /**
    * 거래내용(적요)
    */
    'tRANSMEMO'?: object | null;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "tRANSDATETIME",
            "baseName": "TRANS_DATETIME",
            "type": "object"
        },
        {
            "name": "tRANSDATE",
            "baseName": "TRANS_DATE",
            "type": "object"
        },
        {
            "name": "tRANSGB",
            "baseName": "TRANS_GB",
            "type": "object"
        },
        {
            "name": "tRANSMONEY",
            "baseName": "TRANS_MONEY",
            "type": "object"
        },
        {
            "name": "tRANSMONEYIN",
            "baseName": "TRANS_MONEY_IN",
            "type": "object"
        },
        {
            "name": "tRANSMONEYOUT",
            "baseName": "TRANS_MONEY_OUT",
            "type": "object"
        },
        {
            "name": "tRANSREMAIN",
            "baseName": "TRANS_REMAIN",
            "type": "object"
        },
        {
            "name": "tRANSMEMO",
            "baseName": "TRANS_MEMO",
            "type": "object"
        }    ];

    static getAttributeTypeMap() {
        return SlipSplitDeleteUploadBank.attributeTypeMap;
    }
}

