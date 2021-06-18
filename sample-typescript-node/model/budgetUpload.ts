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
import { BudgetUploadItem } from './budgetUploadItem';

export class BudgetUpload {
    /**
    * 과목코드
    */
    'eSTIDISPLAY': string;
    /**
    * 입출구분(I:세입, O:세출)
    */
    'eSTIINOUT': string;
    /**
    * 예산합계
    */
    'tOTALMONEY': string;
    /**
    * 예산내역 목록
    */
    'budgetItem': Array<BudgetUploadItem>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "eSTIDISPLAY",
            "baseName": "ESTI_DISPLAY",
            "type": "string"
        },
        {
            "name": "eSTIINOUT",
            "baseName": "ESTI_INOUT",
            "type": "string"
        },
        {
            "name": "tOTALMONEY",
            "baseName": "TOTAL_MONEY",
            "type": "string"
        },
        {
            "name": "budgetItem",
            "baseName": "budget_item",
            "type": "Array<BudgetUploadItem>"
        }    ];

    static getAttributeTypeMap() {
        return BudgetUpload.attributeTypeMap;
    }
}
