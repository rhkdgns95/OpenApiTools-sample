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
import { ServiceCategory } from './serviceCategory';
import { ServiceType } from './serviceType';

export class Service {
    /**
    * 서비스번호
    */
    'id': number;
    'category': ServiceCategory;
    'serviceName': ServiceType;
    /**
    * 생성일
    */
    'createdAt': Date;
    /**
    * 서비스 런칭일
    */
    'launchedAt': Date;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "number"
        },
        {
            "name": "category",
            "baseName": "category",
            "type": "ServiceCategory"
        },
        {
            "name": "serviceName",
            "baseName": "serviceName",
            "type": "ServiceType"
        },
        {
            "name": "createdAt",
            "baseName": "createdAt",
            "type": "Date"
        },
        {
            "name": "launchedAt",
            "baseName": "launchedAt",
            "type": "Date"
        }    ];

    static getAttributeTypeMap() {
        return Service.attributeTypeMap;
    }
}

