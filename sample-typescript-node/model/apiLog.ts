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
import { ApiLogDetail } from './apiLogDetail';
import { InOutFlag } from './inOutFlag';
import { User } from './user';

export class ApiLog {
    /**
    * api로그 번호
    */
    'id': number;
    /**
    * 회원번호
    */
    'userId': number;
    /**
    * 회원레벨
    */
    'userLevel': number;
    'inout': InOutFlag;
    /**
    * 요청 url
    */
    'url': string;
    /**
    * ip
    */
    'ip': string;
    /**
    * 결과 코드
    */
    'resultCode': string;
    /**
    * 생성일
    */
    'createdAt': string;
    /**
    * api 로그 상세
    */
    'detail': ApiLogDetail;
    /**
    * 회원 정보
    */
    'user': User;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "number"
        },
        {
            "name": "userId",
            "baseName": "userId",
            "type": "number"
        },
        {
            "name": "userLevel",
            "baseName": "userLevel",
            "type": "number"
        },
        {
            "name": "inout",
            "baseName": "inout",
            "type": "InOutFlag"
        },
        {
            "name": "url",
            "baseName": "url",
            "type": "string"
        },
        {
            "name": "ip",
            "baseName": "ip",
            "type": "string"
        },
        {
            "name": "resultCode",
            "baseName": "resultCode",
            "type": "string"
        },
        {
            "name": "createdAt",
            "baseName": "createdAt",
            "type": "string"
        },
        {
            "name": "detail",
            "baseName": "detail",
            "type": "ApiLogDetail"
        },
        {
            "name": "user",
            "baseName": "user",
            "type": "User"
        }    ];

    static getAttributeTypeMap() {
        return ApiLog.attributeTypeMap;
    }
}

