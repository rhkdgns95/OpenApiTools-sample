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
    Jangbu,
    JangbuFromJSON,
    JangbuFromJSONTyped,
    JangbuToJSON,
    ProcessFlag,
    ProcessFlagFromJSON,
    ProcessFlagFromJSONTyped,
    ProcessFlagToJSON,
    User,
    UserFromJSON,
    UserFromJSONTyped,
    UserToJSON,
    WorkDetail,
    WorkDetailFromJSON,
    WorkDetailFromJSONTyped,
    WorkDetailToJSON,
    WorkResult,
    WorkResultFromJSON,
    WorkResultFromJSONTyped,
    WorkResultToJSON,
} from './';

/**
 * 
 * @export
 * @interface Work
 */
export interface Work {
    /**
     * 업무 순번
     * @type {number}
     * @memberof Work
     */
    id: number;
    /**
     * 서비스 순번
     * @type {number}
     * @memberof Work
     */
    serviceId: number;
    /**
     * 회원 순번
     * @type {number}
     * @memberof Work
     */
    userId: number;
    /**
     * 장부사 순번
     * @type {number}
     * @memberof Work
     */
    jangbuId: number;
    /**
     * 
     * @type {ProcessFlag}
     * @memberof Work
     */
    status: ProcessFlag;
    /**
     * api 순번
     * @type {number}
     * @memberof Work
     */
    apiId?: number | null;
    /**
     * 생성일
     * @type {Date}
     * @memberof Work
     */
    createdAt: Date;
    /**
     * 업무 상세정보
     * @type {WorkDetail}
     * @memberof Work
     */
    workDetail?: WorkDetail | null;
    /**
     * 회원정보
     * @type {User}
     * @memberof Work
     */
    user?: User | null;
    /**
     * 장부사정보
     * @type {Jangbu}
     * @memberof Work
     */
    jangbu?: Jangbu | null;
    /**
     * 스크래핑 결과
     * @type {WorkResult}
     * @memberof Work
     */
    workResult?: WorkResult | null;
}

export function WorkFromJSON(json: any): Work {
    return WorkFromJSONTyped(json, false);
}

export function WorkFromJSONTyped(json: any, ignoreDiscriminator: boolean): Work {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'serviceId': json['serviceId'],
        'userId': json['userId'],
        'jangbuId': json['jangbuId'],
        'status': ProcessFlagFromJSON(json['status']),
        'apiId': !exists(json, 'apiId') ? undefined : json['apiId'],
        'createdAt': (new Date(json['createdAt'])),
        'workDetail': !exists(json, 'workDetail') ? undefined : WorkDetailFromJSON(json['workDetail']),
        'user': !exists(json, 'user') ? undefined : UserFromJSON(json['user']),
        'jangbu': !exists(json, 'jangbu') ? undefined : JangbuFromJSON(json['jangbu']),
        'workResult': !exists(json, 'workResult') ? undefined : WorkResultFromJSON(json['workResult']),
    };
}

export function WorkToJSON(value?: Work | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'serviceId': value.serviceId,
        'userId': value.userId,
        'jangbuId': value.jangbuId,
        'status': ProcessFlagToJSON(value.status),
        'apiId': value.apiId,
        'createdAt': (value.createdAt.toISOString()),
        'workDetail': WorkDetailToJSON(value.workDetail),
        'user': UserToJSON(value.user),
        'jangbu': JangbuToJSON(value.jangbu),
        'workResult': WorkResultToJSON(value.workResult),
    };
}


