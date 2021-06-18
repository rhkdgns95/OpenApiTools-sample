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
import { RegisterJangbuInputDetailJangbu } from './registerJangbuInputDetailJangbu';
import { RegisterJangbuInputDetailUser } from './registerJangbuInputDetailUser';

export class RegisterJangbuInput {
    /**
    * 등록할 장부사 정보
    */
    'jangbu': RegisterJangbuInputDetailJangbu;
    /**
    * 등록할 장부사 회원 정보
    */
    'user': RegisterJangbuInputDetailUser;
    /**
    * 이용할 서비스 목록
    */
    'serviceIds': Array<RegisterJangbuInput.ServiceIdsEnum>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "jangbu",
            "baseName": "jangbu",
            "type": "RegisterJangbuInputDetailJangbu"
        },
        {
            "name": "user",
            "baseName": "user",
            "type": "RegisterJangbuInputDetailUser"
        },
        {
            "name": "serviceIds",
            "baseName": "serviceIds",
            "type": "Array<RegisterJangbuInput.ServiceIdsEnum>"
        }    ];

    static getAttributeTypeMap() {
        return RegisterJangbuInput.attributeTypeMap;
    }
}

export namespace RegisterJangbuInput {
    export enum ServiceIdsEnum {
        NUMBER_3 = <any> 3,
        NUMBER_4 = <any> 4,
        NUMBER_5 = <any> 5,
        NUMBER_6 = <any> 6,
        NUMBER_7 = <any> 7,
        NUMBER_8 = <any> 8,
        NUMBER_9 = <any> 9,
        NUMBER_10 = <any> 10
    }
}