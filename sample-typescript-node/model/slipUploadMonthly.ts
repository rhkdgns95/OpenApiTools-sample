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

export class SlipUploadMonthly {
    'bCNCNM': string;
    'cRTMMOCURAMT': string;
    'aCCTNUMBER': string;
    'aCCNM': string;
    'rEMK': string;
    'fDSRCNM': string;
    'bSNSNM': string;
    'aCCTMNGTNM': string;
    'dFRTDE': string;
    'dRTMMOCURAMT': string;
    'oPNTACCNM': string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "bCNCNM",
            "baseName": "BCNC_NM",
            "type": "string"
        },
        {
            "name": "cRTMMOCURAMT",
            "baseName": "CR_TMM_OCUR_AMT",
            "type": "string"
        },
        {
            "name": "aCCTNUMBER",
            "baseName": "ACCT_NUMBER",
            "type": "string"
        },
        {
            "name": "aCCNM",
            "baseName": "ACC_NM",
            "type": "string"
        },
        {
            "name": "rEMK",
            "baseName": "REMK",
            "type": "string"
        },
        {
            "name": "fDSRCNM",
            "baseName": "FDSRC_NM",
            "type": "string"
        },
        {
            "name": "bSNSNM",
            "baseName": "BSNS_NM",
            "type": "string"
        },
        {
            "name": "aCCTMNGTNM",
            "baseName": "ACCT_MNGT_NM",
            "type": "string"
        },
        {
            "name": "dFRTDE",
            "baseName": "DFRT_DE",
            "type": "string"
        },
        {
            "name": "dRTMMOCURAMT",
            "baseName": "DR_TMM_OCUR_AMT",
            "type": "string"
        },
        {
            "name": "oPNTACCNM",
            "baseName": "OPNT_ACC_NM",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return SlipUploadMonthly.attributeTypeMap;
    }
}

