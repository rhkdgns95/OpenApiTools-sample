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


import localVarRequest from 'request';
import http from 'http';

/* tslint:disable:no-unused-locals */
import { ApiLog } from '../model/apiLog';
import { ExceptionResponse } from '../model/exceptionResponse';
import { GetApiMonitorsOutput } from '../model/getApiMonitorsOutput';

import { ObjectSerializer, Authentication, VoidAuth, Interceptor } from '../model/models';
import { HttpBasicAuth, HttpBearerAuth, ApiKeyAuth, OAuth } from '../model/models';

import { HttpError, RequestFile } from './apis';

let defaultBasePath = 'http://localhost';

// ===============================================
// This file is autogenerated - Please do not edit
// ===============================================

export enum APIApiApiKeys {
}

export class APIApi {
    protected _basePath = defaultBasePath;
    protected _defaultHeaders : any = {};
    protected _useQuerystring : boolean = false;

    protected authentications = {
        'default': <Authentication>new VoidAuth(),
        'bearer': new HttpBearerAuth(),
    }

    protected interceptors: Interceptor[] = [];

    constructor(basePath?: string);
    constructor(basePathOrUsername: string, password?: string, basePath?: string) {
        if (password) {
            if (basePath) {
                this.basePath = basePath;
            }
        } else {
            if (basePathOrUsername) {
                this.basePath = basePathOrUsername
            }
        }
    }

    set useQuerystring(value: boolean) {
        this._useQuerystring = value;
    }

    set basePath(basePath: string) {
        this._basePath = basePath;
    }

    set defaultHeaders(defaultHeaders: any) {
        this._defaultHeaders = defaultHeaders;
    }

    get defaultHeaders() {
        return this._defaultHeaders;
    }

    get basePath() {
        return this._basePath;
    }

    public setDefaultAuthentication(auth: Authentication) {
        this.authentications.default = auth;
    }

    public setApiKey(key: APIApiApiKeys, value: string) {
        (this.authentications as any)[APIApiApiKeys[key]].apiKey = value;
    }

    set accessToken(accessToken: string | (() => string)) {
        this.authentications.bearer.accessToken = accessToken;
    }

    public addInterceptor(interceptor: Interceptor) {
        this.interceptors.push(interceptor);
    }

    /**
     * 특정 API모니터링을 조회한다
     * @summary API모니터링 조회 (관리자 전용)
     * @param apiId API모니터링 순번
     */
    public async apiMonitorControllerGetApiMonitor (apiId: number, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: ApiLog;  }> {
        const localVarPath = this.basePath + '/public/api/api-monitor/detail/{apiId}'
            .replace('{' + 'apiId' + '}', encodeURIComponent(String(apiId)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this._defaultHeaders);
        const produces = ['application/json'];
        // give precedence to 'application/json'
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        } else {
            localVarHeaderParams.Accept = produces.join(',');
        }
        let localVarFormParams: any = {};

        // verify required parameter 'apiId' is not null or undefined
        if (apiId === null || apiId === undefined) {
            throw new Error('Required parameter apiId was null or undefined when calling apiMonitorControllerGetApiMonitor.');
        }

        (<any>Object).assign(localVarHeaderParams, options.headers);

        let localVarUseFormData = false;

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'GET',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };

        let authenticationPromise = Promise.resolve();
        if (this.authentications.bearer.accessToken) {
            authenticationPromise = authenticationPromise.then(() => this.authentications.bearer.applyToRequest(localVarRequestOptions));
        }
        authenticationPromise = authenticationPromise.then(() => this.authentications.default.applyToRequest(localVarRequestOptions));

        let interceptorPromise = authenticationPromise;
        for (const interceptor of this.interceptors) {
            interceptorPromise = interceptorPromise.then(() => interceptor(localVarRequestOptions));
        }

        return interceptorPromise.then(() => {
            if (Object.keys(localVarFormParams).length) {
                if (localVarUseFormData) {
                    (<any>localVarRequestOptions).formData = localVarFormParams;
                } else {
                    localVarRequestOptions.form = localVarFormParams;
                }
            }
            return new Promise<{ response: http.IncomingMessage; body: ApiLog;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        body = ObjectSerializer.deserialize(body, "ApiLog");
                        if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                            resolve({ response: response, body: body });
                        } else {
                            reject(new HttpError(response, body, response.statusCode));
                        }
                    }
                });
            });
        });
    }
    /**
     * API모니터링 목록을 검색한다
     * @summary API모니터링 목록 검색 (관리자 전용)
     * @param page 페이징 페이지 정보
     * @param limit 페이징 페이지당 목록 수
     * @param startAt 시작일시 (YYYYMMDDHHmm)
     * @param endAt 종료일시 (YYYYMMDDHHmm)
     * @param route 페이징 링크 경로
     * @param jangbuId 장부사 순번
     * @param serviceName 서비스 이름
     * @param userSeq 회원 순번
     * @param uid 회원 ID
     * @param ip IP
     * @param apiSeq api 순번
     * @param rcode 결과 응답코드
     * @param isFail 실패여부
     */
    public async apiMonitorControllerGetApiMonitors (page: number, limit: number, startAt: string, endAt: string, route?: string, jangbuId?: number, serviceName?: string, userSeq?: number, uid?: string, ip?: string, apiSeq?: number, rcode?: number, isFail?: boolean, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: GetApiMonitorsOutput;  }> {
        const localVarPath = this.basePath + '/public/api/api-monitor';
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this._defaultHeaders);
        const produces = ['application/json'];
        // give precedence to 'application/json'
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        } else {
            localVarHeaderParams.Accept = produces.join(',');
        }
        let localVarFormParams: any = {};

        // verify required parameter 'page' is not null or undefined
        if (page === null || page === undefined) {
            throw new Error('Required parameter page was null or undefined when calling apiMonitorControllerGetApiMonitors.');
        }

        // verify required parameter 'limit' is not null or undefined
        if (limit === null || limit === undefined) {
            throw new Error('Required parameter limit was null or undefined when calling apiMonitorControllerGetApiMonitors.');
        }

        // verify required parameter 'startAt' is not null or undefined
        if (startAt === null || startAt === undefined) {
            throw new Error('Required parameter startAt was null or undefined when calling apiMonitorControllerGetApiMonitors.');
        }

        // verify required parameter 'endAt' is not null or undefined
        if (endAt === null || endAt === undefined) {
            throw new Error('Required parameter endAt was null or undefined when calling apiMonitorControllerGetApiMonitors.');
        }

        if (page !== undefined) {
            localVarQueryParameters['page'] = ObjectSerializer.serialize(page, "number");
        }

        if (limit !== undefined) {
            localVarQueryParameters['limit'] = ObjectSerializer.serialize(limit, "number");
        }

        if (route !== undefined) {
            localVarQueryParameters['route'] = ObjectSerializer.serialize(route, "string");
        }

        if (startAt !== undefined) {
            localVarQueryParameters['startAt'] = ObjectSerializer.serialize(startAt, "string");
        }

        if (endAt !== undefined) {
            localVarQueryParameters['endAt'] = ObjectSerializer.serialize(endAt, "string");
        }

        if (jangbuId !== undefined) {
            localVarQueryParameters['jangbuId'] = ObjectSerializer.serialize(jangbuId, "number");
        }

        if (serviceName !== undefined) {
            localVarQueryParameters['serviceName'] = ObjectSerializer.serialize(serviceName, "string");
        }

        if (userSeq !== undefined) {
            localVarQueryParameters['userSeq'] = ObjectSerializer.serialize(userSeq, "number");
        }

        if (uid !== undefined) {
            localVarQueryParameters['uid'] = ObjectSerializer.serialize(uid, "string");
        }

        if (ip !== undefined) {
            localVarQueryParameters['ip'] = ObjectSerializer.serialize(ip, "string");
        }

        if (apiSeq !== undefined) {
            localVarQueryParameters['apiSeq'] = ObjectSerializer.serialize(apiSeq, "number");
        }

        if (rcode !== undefined) {
            localVarQueryParameters['rcode'] = ObjectSerializer.serialize(rcode, "number");
        }

        if (isFail !== undefined) {
            localVarQueryParameters['isFail'] = ObjectSerializer.serialize(isFail, "boolean");
        }

        (<any>Object).assign(localVarHeaderParams, options.headers);

        let localVarUseFormData = false;

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'GET',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };

        let authenticationPromise = Promise.resolve();
        if (this.authentications.bearer.accessToken) {
            authenticationPromise = authenticationPromise.then(() => this.authentications.bearer.applyToRequest(localVarRequestOptions));
        }
        authenticationPromise = authenticationPromise.then(() => this.authentications.default.applyToRequest(localVarRequestOptions));

        let interceptorPromise = authenticationPromise;
        for (const interceptor of this.interceptors) {
            interceptorPromise = interceptorPromise.then(() => interceptor(localVarRequestOptions));
        }

        return interceptorPromise.then(() => {
            if (Object.keys(localVarFormParams).length) {
                if (localVarUseFormData) {
                    (<any>localVarRequestOptions).formData = localVarFormParams;
                } else {
                    localVarRequestOptions.form = localVarFormParams;
                }
            }
            return new Promise<{ response: http.IncomingMessage; body: GetApiMonitorsOutput;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        body = ObjectSerializer.deserialize(body, "GetApiMonitorsOutput");
                        if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                            resolve({ response: response, body: body });
                        } else {
                            reject(new HttpError(response, body, response.statusCode));
                        }
                    }
                });
            });
        });
    }
    /**
     * API모니터링 S3 데이터를 조회한다
     * @summary API모니터링 S3 데이터 조회 (관리자 전용)
     * @param path S3 경로
     */
    public async apiMonitorControllerGetApiS3Data (path: string, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: string;  }> {
        const localVarPath = this.basePath + '/public/api/api-monitor/log';
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this._defaultHeaders);
        const produces = ['application/json'];
        // give precedence to 'application/json'
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        } else {
            localVarHeaderParams.Accept = produces.join(',');
        }
        let localVarFormParams: any = {};

        // verify required parameter 'path' is not null or undefined
        if (path === null || path === undefined) {
            throw new Error('Required parameter path was null or undefined when calling apiMonitorControllerGetApiS3Data.');
        }

        if (path !== undefined) {
            localVarQueryParameters['path'] = ObjectSerializer.serialize(path, "string");
        }

        (<any>Object).assign(localVarHeaderParams, options.headers);

        let localVarUseFormData = false;

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'GET',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };

        let authenticationPromise = Promise.resolve();
        if (this.authentications.bearer.accessToken) {
            authenticationPromise = authenticationPromise.then(() => this.authentications.bearer.applyToRequest(localVarRequestOptions));
        }
        authenticationPromise = authenticationPromise.then(() => this.authentications.default.applyToRequest(localVarRequestOptions));

        let interceptorPromise = authenticationPromise;
        for (const interceptor of this.interceptors) {
            interceptorPromise = interceptorPromise.then(() => interceptor(localVarRequestOptions));
        }

        return interceptorPromise.then(() => {
            if (Object.keys(localVarFormParams).length) {
                if (localVarUseFormData) {
                    (<any>localVarRequestOptions).formData = localVarFormParams;
                } else {
                    localVarRequestOptions.form = localVarFormParams;
                }
            }
            return new Promise<{ response: http.IncomingMessage; body: string;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        body = ObjectSerializer.deserialize(body, "string");
                        if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                            resolve({ response: response, body: body });
                        } else {
                            reject(new HttpError(response, body, response.statusCode));
                        }
                    }
                });
            });
        });
    }
}
