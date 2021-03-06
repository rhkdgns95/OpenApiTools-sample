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
import { SlipSplitDeleteUploadBank } from './slipSplitDeleteUploadBank';
import { SlipSplitDeleteUploadSlip } from './slipSplitDeleteUploadSlip';

export class SlipSplitDeleteUpload {
    'bank': SlipSplitDeleteUploadBank;
    'slip': Array<SlipSplitDeleteUploadSlip>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "bank",
            "baseName": "bank",
            "type": "SlipSplitDeleteUploadBank"
        },
        {
            "name": "slip",
            "baseName": "slip",
            "type": "Array<SlipSplitDeleteUploadSlip>"
        }    ];

    static getAttributeTypeMap() {
        return SlipSplitDeleteUpload.attributeTypeMap;
    }
}

