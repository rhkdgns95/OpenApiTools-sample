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

export class UpdateAppVersionInputInfo {
    /**
    * 생성자
    */
    'updatedName': string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "updatedName",
            "baseName": "updatedName",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return UpdateAppVersionInputInfo.attributeTypeMap;
    }
}

