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
import { Connect } from './connect';
import { PcClient } from './pcClient';

export class PcClientError {
    /**
    * 에러 순번
    */
    'id': number;
    /**
    * 어플리케이션 명
    */
    'appName': string;
    /**
    * 어플리케이션 버전
    */
    'appVersion': string;
    /**
    * IP 주소
    */
    'ip': string;
    /**
    * 에러정보 S3 경로
    */
    'errorPath': string;
    /**
    * 클라이언트 번호
    */
    'clientId': number;
    /**
    * 접속정보 고유번호
    */
    'connectId'?: number | null;
    /**
    * 생성일
    */
    'createdAt': Date;
    /**
    * 접속정보
    */
    'connect'?: Connect | null;
    /**
    * pc클라이언트
    */
    'pcClient'?: PcClient | null;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "number"
        },
        {
            "name": "appName",
            "baseName": "appName",
            "type": "string"
        },
        {
            "name": "appVersion",
            "baseName": "appVersion",
            "type": "string"
        },
        {
            "name": "ip",
            "baseName": "ip",
            "type": "string"
        },
        {
            "name": "errorPath",
            "baseName": "errorPath",
            "type": "string"
        },
        {
            "name": "clientId",
            "baseName": "clientId",
            "type": "number"
        },
        {
            "name": "connectId",
            "baseName": "connectId",
            "type": "number"
        },
        {
            "name": "createdAt",
            "baseName": "createdAt",
            "type": "Date"
        },
        {
            "name": "connect",
            "baseName": "connect",
            "type": "Connect"
        },
        {
            "name": "pcClient",
            "baseName": "pcClient",
            "type": "PcClient"
        }    ];

    static getAttributeTypeMap() {
        return PcClientError.attributeTypeMap;
    }
}

