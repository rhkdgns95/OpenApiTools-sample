/*
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


package org.openapitools.client.api;

import org.openapitools.client.ApiCallback;
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.ApiResponse;
import org.openapitools.client.Configuration;
import org.openapitools.client.Pair;
import org.openapitools.client.ProgressRequestBody;
import org.openapitools.client.ProgressResponseBody;

import com.google.gson.reflect.TypeToken;

import java.io.IOException;


import org.openapitools.client.model.ApiLog;
import java.math.BigDecimal;
import org.openapitools.client.model.ExceptionResponse;
import org.openapitools.client.model.GetApiMonitorsOutput;

import java.lang.reflect.Type;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class ApiApi {
    private ApiClient localVarApiClient;

    public ApiApi() {
        this(Configuration.getDefaultApiClient());
    }

    public ApiApi(ApiClient apiClient) {
        this.localVarApiClient = apiClient;
    }

    public ApiClient getApiClient() {
        return localVarApiClient;
    }

    public void setApiClient(ApiClient apiClient) {
        this.localVarApiClient = apiClient;
    }

    /**
     * Build call for apiMonitorControllerGetApiMonitor
     * @param apiId API모니터링 순번 (required)
     * @param _callback Callback for upload/download progress
     * @return Call to execute
     * @throws ApiException If fail to serialize the request body object
     * @http.response.details
     <table summary="Response Details" border="1">
        <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
        <tr><td> 200 </td><td> 성공 : API모니터링 정보를 반환 </td><td>  -  </td></tr>
        <tr><td> 404 </td><td> 실패 : 존재하지 않는 API모니터링 정보 </td><td>  -  </td></tr>
     </table>
     */
    public okhttp3.Call apiMonitorControllerGetApiMonitorCall(BigDecimal apiId, final ApiCallback _callback) throws ApiException {
        Object localVarPostBody = null;

        // create path and map variables
        String localVarPath = "/public/api/api-monitor/detail/{apiId}"
            .replaceAll("\\{" + "apiId" + "\\}", localVarApiClient.escapeString(apiId.toString()));

        List<Pair> localVarQueryParams = new ArrayList<Pair>();
        List<Pair> localVarCollectionQueryParams = new ArrayList<Pair>();
        Map<String, String> localVarHeaderParams = new HashMap<String, String>();
        Map<String, String> localVarCookieParams = new HashMap<String, String>();
        Map<String, Object> localVarFormParams = new HashMap<String, Object>();

        final String[] localVarAccepts = {
            "application/json"
        };
        final String localVarAccept = localVarApiClient.selectHeaderAccept(localVarAccepts);
        if (localVarAccept != null) {
            localVarHeaderParams.put("Accept", localVarAccept);
        }

        final String[] localVarContentTypes = {
            
        };
        final String localVarContentType = localVarApiClient.selectHeaderContentType(localVarContentTypes);
        localVarHeaderParams.put("Content-Type", localVarContentType);

        String[] localVarAuthNames = new String[] { "bearer" };
        return localVarApiClient.buildCall(localVarPath, "GET", localVarQueryParams, localVarCollectionQueryParams, localVarPostBody, localVarHeaderParams, localVarCookieParams, localVarFormParams, localVarAuthNames, _callback);
    }

    @SuppressWarnings("rawtypes")
    private okhttp3.Call apiMonitorControllerGetApiMonitorValidateBeforeCall(BigDecimal apiId, final ApiCallback _callback) throws ApiException {
        
        // verify the required parameter 'apiId' is set
        if (apiId == null) {
            throw new ApiException("Missing the required parameter 'apiId' when calling apiMonitorControllerGetApiMonitor(Async)");
        }
        

        okhttp3.Call localVarCall = apiMonitorControllerGetApiMonitorCall(apiId, _callback);
        return localVarCall;

    }

    /**
     * API모니터링 조회 (관리자 전용)
     * 특정 API모니터링을 조회한다
     * @param apiId API모니터링 순번 (required)
     * @return ApiLog
     * @throws ApiException If fail to call the API, e.g. server error or cannot deserialize the response body
     * @http.response.details
     <table summary="Response Details" border="1">
        <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
        <tr><td> 200 </td><td> 성공 : API모니터링 정보를 반환 </td><td>  -  </td></tr>
        <tr><td> 404 </td><td> 실패 : 존재하지 않는 API모니터링 정보 </td><td>  -  </td></tr>
     </table>
     */
    public ApiLog apiMonitorControllerGetApiMonitor(BigDecimal apiId) throws ApiException {
        ApiResponse<ApiLog> localVarResp = apiMonitorControllerGetApiMonitorWithHttpInfo(apiId);
        return localVarResp.getData();
    }

    /**
     * API모니터링 조회 (관리자 전용)
     * 특정 API모니터링을 조회한다
     * @param apiId API모니터링 순번 (required)
     * @return ApiResponse&lt;ApiLog&gt;
     * @throws ApiException If fail to call the API, e.g. server error or cannot deserialize the response body
     * @http.response.details
     <table summary="Response Details" border="1">
        <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
        <tr><td> 200 </td><td> 성공 : API모니터링 정보를 반환 </td><td>  -  </td></tr>
        <tr><td> 404 </td><td> 실패 : 존재하지 않는 API모니터링 정보 </td><td>  -  </td></tr>
     </table>
     */
    public ApiResponse<ApiLog> apiMonitorControllerGetApiMonitorWithHttpInfo(BigDecimal apiId) throws ApiException {
        okhttp3.Call localVarCall = apiMonitorControllerGetApiMonitorValidateBeforeCall(apiId, null);
        Type localVarReturnType = new TypeToken<ApiLog>(){}.getType();
        return localVarApiClient.execute(localVarCall, localVarReturnType);
    }

    /**
     * API모니터링 조회 (관리자 전용) (asynchronously)
     * 특정 API모니터링을 조회한다
     * @param apiId API모니터링 순번 (required)
     * @param _callback The callback to be executed when the API call finishes
     * @return The request call
     * @throws ApiException If fail to process the API call, e.g. serializing the request body object
     * @http.response.details
     <table summary="Response Details" border="1">
        <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
        <tr><td> 200 </td><td> 성공 : API모니터링 정보를 반환 </td><td>  -  </td></tr>
        <tr><td> 404 </td><td> 실패 : 존재하지 않는 API모니터링 정보 </td><td>  -  </td></tr>
     </table>
     */
    public okhttp3.Call apiMonitorControllerGetApiMonitorAsync(BigDecimal apiId, final ApiCallback<ApiLog> _callback) throws ApiException {

        okhttp3.Call localVarCall = apiMonitorControllerGetApiMonitorValidateBeforeCall(apiId, _callback);
        Type localVarReturnType = new TypeToken<ApiLog>(){}.getType();
        localVarApiClient.executeAsync(localVarCall, localVarReturnType, _callback);
        return localVarCall;
    }
    /**
     * Build call for apiMonitorControllerGetApiMonitors
     * @param page 페이징 페이지 정보 (required)
     * @param limit 페이징 페이지당 목록 수 (required)
     * @param startAt 시작일시 (YYYYMMDDHHmm) (required)
     * @param endAt 종료일시 (YYYYMMDDHHmm) (required)
     * @param route 페이징 링크 경로 (optional)
     * @param jangbuId 장부사 순번 (optional)
     * @param serviceName 서비스 이름 (optional)
     * @param userSeq 회원 순번 (optional)
     * @param uid 회원 ID (optional)
     * @param ip IP (optional)
     * @param apiSeq api 순번 (optional)
     * @param rcode 결과 응답코드 (optional)
     * @param isFail 실패여부 (optional)
     * @param _callback Callback for upload/download progress
     * @return Call to execute
     * @throws ApiException If fail to serialize the request body object
     * @http.response.details
     <table summary="Response Details" border="1">
        <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
        <tr><td> 200 </td><td> 성공 : API모니터링 목록을 반환 </td><td>  -  </td></tr>
     </table>
     */
    public okhttp3.Call apiMonitorControllerGetApiMonitorsCall(BigDecimal page, BigDecimal limit, String startAt, String endAt, String route, BigDecimal jangbuId, String serviceName, BigDecimal userSeq, String uid, String ip, BigDecimal apiSeq, BigDecimal rcode, Boolean isFail, final ApiCallback _callback) throws ApiException {
        Object localVarPostBody = null;

        // create path and map variables
        String localVarPath = "/public/api/api-monitor";

        List<Pair> localVarQueryParams = new ArrayList<Pair>();
        List<Pair> localVarCollectionQueryParams = new ArrayList<Pair>();
        Map<String, String> localVarHeaderParams = new HashMap<String, String>();
        Map<String, String> localVarCookieParams = new HashMap<String, String>();
        Map<String, Object> localVarFormParams = new HashMap<String, Object>();

        if (page != null) {
            localVarQueryParams.addAll(localVarApiClient.parameterToPair("page", page));
        }

        if (limit != null) {
            localVarQueryParams.addAll(localVarApiClient.parameterToPair("limit", limit));
        }

        if (route != null) {
            localVarQueryParams.addAll(localVarApiClient.parameterToPair("route", route));
        }

        if (startAt != null) {
            localVarQueryParams.addAll(localVarApiClient.parameterToPair("startAt", startAt));
        }

        if (endAt != null) {
            localVarQueryParams.addAll(localVarApiClient.parameterToPair("endAt", endAt));
        }

        if (jangbuId != null) {
            localVarQueryParams.addAll(localVarApiClient.parameterToPair("jangbuId", jangbuId));
        }

        if (serviceName != null) {
            localVarQueryParams.addAll(localVarApiClient.parameterToPair("serviceName", serviceName));
        }

        if (userSeq != null) {
            localVarQueryParams.addAll(localVarApiClient.parameterToPair("userSeq", userSeq));
        }

        if (uid != null) {
            localVarQueryParams.addAll(localVarApiClient.parameterToPair("uid", uid));
        }

        if (ip != null) {
            localVarQueryParams.addAll(localVarApiClient.parameterToPair("ip", ip));
        }

        if (apiSeq != null) {
            localVarQueryParams.addAll(localVarApiClient.parameterToPair("apiSeq", apiSeq));
        }

        if (rcode != null) {
            localVarQueryParams.addAll(localVarApiClient.parameterToPair("rcode", rcode));
        }

        if (isFail != null) {
            localVarQueryParams.addAll(localVarApiClient.parameterToPair("isFail", isFail));
        }

        final String[] localVarAccepts = {
            "application/json"
        };
        final String localVarAccept = localVarApiClient.selectHeaderAccept(localVarAccepts);
        if (localVarAccept != null) {
            localVarHeaderParams.put("Accept", localVarAccept);
        }

        final String[] localVarContentTypes = {
            
        };
        final String localVarContentType = localVarApiClient.selectHeaderContentType(localVarContentTypes);
        localVarHeaderParams.put("Content-Type", localVarContentType);

        String[] localVarAuthNames = new String[] { "bearer" };
        return localVarApiClient.buildCall(localVarPath, "GET", localVarQueryParams, localVarCollectionQueryParams, localVarPostBody, localVarHeaderParams, localVarCookieParams, localVarFormParams, localVarAuthNames, _callback);
    }

    @SuppressWarnings("rawtypes")
    private okhttp3.Call apiMonitorControllerGetApiMonitorsValidateBeforeCall(BigDecimal page, BigDecimal limit, String startAt, String endAt, String route, BigDecimal jangbuId, String serviceName, BigDecimal userSeq, String uid, String ip, BigDecimal apiSeq, BigDecimal rcode, Boolean isFail, final ApiCallback _callback) throws ApiException {
        
        // verify the required parameter 'page' is set
        if (page == null) {
            throw new ApiException("Missing the required parameter 'page' when calling apiMonitorControllerGetApiMonitors(Async)");
        }
        
        // verify the required parameter 'limit' is set
        if (limit == null) {
            throw new ApiException("Missing the required parameter 'limit' when calling apiMonitorControllerGetApiMonitors(Async)");
        }
        
        // verify the required parameter 'startAt' is set
        if (startAt == null) {
            throw new ApiException("Missing the required parameter 'startAt' when calling apiMonitorControllerGetApiMonitors(Async)");
        }
        
        // verify the required parameter 'endAt' is set
        if (endAt == null) {
            throw new ApiException("Missing the required parameter 'endAt' when calling apiMonitorControllerGetApiMonitors(Async)");
        }
        

        okhttp3.Call localVarCall = apiMonitorControllerGetApiMonitorsCall(page, limit, startAt, endAt, route, jangbuId, serviceName, userSeq, uid, ip, apiSeq, rcode, isFail, _callback);
        return localVarCall;

    }

    /**
     * API모니터링 목록 검색 (관리자 전용)
     * API모니터링 목록을 검색한다
     * @param page 페이징 페이지 정보 (required)
     * @param limit 페이징 페이지당 목록 수 (required)
     * @param startAt 시작일시 (YYYYMMDDHHmm) (required)
     * @param endAt 종료일시 (YYYYMMDDHHmm) (required)
     * @param route 페이징 링크 경로 (optional)
     * @param jangbuId 장부사 순번 (optional)
     * @param serviceName 서비스 이름 (optional)
     * @param userSeq 회원 순번 (optional)
     * @param uid 회원 ID (optional)
     * @param ip IP (optional)
     * @param apiSeq api 순번 (optional)
     * @param rcode 결과 응답코드 (optional)
     * @param isFail 실패여부 (optional)
     * @return GetApiMonitorsOutput
     * @throws ApiException If fail to call the API, e.g. server error or cannot deserialize the response body
     * @http.response.details
     <table summary="Response Details" border="1">
        <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
        <tr><td> 200 </td><td> 성공 : API모니터링 목록을 반환 </td><td>  -  </td></tr>
     </table>
     */
    public GetApiMonitorsOutput apiMonitorControllerGetApiMonitors(BigDecimal page, BigDecimal limit, String startAt, String endAt, String route, BigDecimal jangbuId, String serviceName, BigDecimal userSeq, String uid, String ip, BigDecimal apiSeq, BigDecimal rcode, Boolean isFail) throws ApiException {
        ApiResponse<GetApiMonitorsOutput> localVarResp = apiMonitorControllerGetApiMonitorsWithHttpInfo(page, limit, startAt, endAt, route, jangbuId, serviceName, userSeq, uid, ip, apiSeq, rcode, isFail);
        return localVarResp.getData();
    }

    /**
     * API모니터링 목록 검색 (관리자 전용)
     * API모니터링 목록을 검색한다
     * @param page 페이징 페이지 정보 (required)
     * @param limit 페이징 페이지당 목록 수 (required)
     * @param startAt 시작일시 (YYYYMMDDHHmm) (required)
     * @param endAt 종료일시 (YYYYMMDDHHmm) (required)
     * @param route 페이징 링크 경로 (optional)
     * @param jangbuId 장부사 순번 (optional)
     * @param serviceName 서비스 이름 (optional)
     * @param userSeq 회원 순번 (optional)
     * @param uid 회원 ID (optional)
     * @param ip IP (optional)
     * @param apiSeq api 순번 (optional)
     * @param rcode 결과 응답코드 (optional)
     * @param isFail 실패여부 (optional)
     * @return ApiResponse&lt;GetApiMonitorsOutput&gt;
     * @throws ApiException If fail to call the API, e.g. server error or cannot deserialize the response body
     * @http.response.details
     <table summary="Response Details" border="1">
        <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
        <tr><td> 200 </td><td> 성공 : API모니터링 목록을 반환 </td><td>  -  </td></tr>
     </table>
     */
    public ApiResponse<GetApiMonitorsOutput> apiMonitorControllerGetApiMonitorsWithHttpInfo(BigDecimal page, BigDecimal limit, String startAt, String endAt, String route, BigDecimal jangbuId, String serviceName, BigDecimal userSeq, String uid, String ip, BigDecimal apiSeq, BigDecimal rcode, Boolean isFail) throws ApiException {
        okhttp3.Call localVarCall = apiMonitorControllerGetApiMonitorsValidateBeforeCall(page, limit, startAt, endAt, route, jangbuId, serviceName, userSeq, uid, ip, apiSeq, rcode, isFail, null);
        Type localVarReturnType = new TypeToken<GetApiMonitorsOutput>(){}.getType();
        return localVarApiClient.execute(localVarCall, localVarReturnType);
    }

    /**
     * API모니터링 목록 검색 (관리자 전용) (asynchronously)
     * API모니터링 목록을 검색한다
     * @param page 페이징 페이지 정보 (required)
     * @param limit 페이징 페이지당 목록 수 (required)
     * @param startAt 시작일시 (YYYYMMDDHHmm) (required)
     * @param endAt 종료일시 (YYYYMMDDHHmm) (required)
     * @param route 페이징 링크 경로 (optional)
     * @param jangbuId 장부사 순번 (optional)
     * @param serviceName 서비스 이름 (optional)
     * @param userSeq 회원 순번 (optional)
     * @param uid 회원 ID (optional)
     * @param ip IP (optional)
     * @param apiSeq api 순번 (optional)
     * @param rcode 결과 응답코드 (optional)
     * @param isFail 실패여부 (optional)
     * @param _callback The callback to be executed when the API call finishes
     * @return The request call
     * @throws ApiException If fail to process the API call, e.g. serializing the request body object
     * @http.response.details
     <table summary="Response Details" border="1">
        <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
        <tr><td> 200 </td><td> 성공 : API모니터링 목록을 반환 </td><td>  -  </td></tr>
     </table>
     */
    public okhttp3.Call apiMonitorControllerGetApiMonitorsAsync(BigDecimal page, BigDecimal limit, String startAt, String endAt, String route, BigDecimal jangbuId, String serviceName, BigDecimal userSeq, String uid, String ip, BigDecimal apiSeq, BigDecimal rcode, Boolean isFail, final ApiCallback<GetApiMonitorsOutput> _callback) throws ApiException {

        okhttp3.Call localVarCall = apiMonitorControllerGetApiMonitorsValidateBeforeCall(page, limit, startAt, endAt, route, jangbuId, serviceName, userSeq, uid, ip, apiSeq, rcode, isFail, _callback);
        Type localVarReturnType = new TypeToken<GetApiMonitorsOutput>(){}.getType();
        localVarApiClient.executeAsync(localVarCall, localVarReturnType, _callback);
        return localVarCall;
    }
    /**
     * Build call for apiMonitorControllerGetApiS3Data
     * @param path S3 경로 (required)
     * @param _callback Callback for upload/download progress
     * @return Call to execute
     * @throws ApiException If fail to serialize the request body object
     * @http.response.details
     <table summary="Response Details" border="1">
        <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
        <tr><td> 200 </td><td> 성공 : API모니터링 S3 정보를 반환 </td><td>  -  </td></tr>
        <tr><td> 404 </td><td> 실패 : 존재하지 않는 S3 경로 </td><td>  -  </td></tr>
     </table>
     */
    public okhttp3.Call apiMonitorControllerGetApiS3DataCall(String path, final ApiCallback _callback) throws ApiException {
        Object localVarPostBody = null;

        // create path and map variables
        String localVarPath = "/public/api/api-monitor/log";

        List<Pair> localVarQueryParams = new ArrayList<Pair>();
        List<Pair> localVarCollectionQueryParams = new ArrayList<Pair>();
        Map<String, String> localVarHeaderParams = new HashMap<String, String>();
        Map<String, String> localVarCookieParams = new HashMap<String, String>();
        Map<String, Object> localVarFormParams = new HashMap<String, Object>();

        if (path != null) {
            localVarQueryParams.addAll(localVarApiClient.parameterToPair("path", path));
        }

        final String[] localVarAccepts = {
            "application/json"
        };
        final String localVarAccept = localVarApiClient.selectHeaderAccept(localVarAccepts);
        if (localVarAccept != null) {
            localVarHeaderParams.put("Accept", localVarAccept);
        }

        final String[] localVarContentTypes = {
            
        };
        final String localVarContentType = localVarApiClient.selectHeaderContentType(localVarContentTypes);
        localVarHeaderParams.put("Content-Type", localVarContentType);

        String[] localVarAuthNames = new String[] { "bearer" };
        return localVarApiClient.buildCall(localVarPath, "GET", localVarQueryParams, localVarCollectionQueryParams, localVarPostBody, localVarHeaderParams, localVarCookieParams, localVarFormParams, localVarAuthNames, _callback);
    }

    @SuppressWarnings("rawtypes")
    private okhttp3.Call apiMonitorControllerGetApiS3DataValidateBeforeCall(String path, final ApiCallback _callback) throws ApiException {
        
        // verify the required parameter 'path' is set
        if (path == null) {
            throw new ApiException("Missing the required parameter 'path' when calling apiMonitorControllerGetApiS3Data(Async)");
        }
        

        okhttp3.Call localVarCall = apiMonitorControllerGetApiS3DataCall(path, _callback);
        return localVarCall;

    }

    /**
     * API모니터링 S3 데이터 조회 (관리자 전용)
     * API모니터링 S3 데이터를 조회한다
     * @param path S3 경로 (required)
     * @return String
     * @throws ApiException If fail to call the API, e.g. server error or cannot deserialize the response body
     * @http.response.details
     <table summary="Response Details" border="1">
        <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
        <tr><td> 200 </td><td> 성공 : API모니터링 S3 정보를 반환 </td><td>  -  </td></tr>
        <tr><td> 404 </td><td> 실패 : 존재하지 않는 S3 경로 </td><td>  -  </td></tr>
     </table>
     */
    public String apiMonitorControllerGetApiS3Data(String path) throws ApiException {
        ApiResponse<String> localVarResp = apiMonitorControllerGetApiS3DataWithHttpInfo(path);
        return localVarResp.getData();
    }

    /**
     * API모니터링 S3 데이터 조회 (관리자 전용)
     * API모니터링 S3 데이터를 조회한다
     * @param path S3 경로 (required)
     * @return ApiResponse&lt;String&gt;
     * @throws ApiException If fail to call the API, e.g. server error or cannot deserialize the response body
     * @http.response.details
     <table summary="Response Details" border="1">
        <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
        <tr><td> 200 </td><td> 성공 : API모니터링 S3 정보를 반환 </td><td>  -  </td></tr>
        <tr><td> 404 </td><td> 실패 : 존재하지 않는 S3 경로 </td><td>  -  </td></tr>
     </table>
     */
    public ApiResponse<String> apiMonitorControllerGetApiS3DataWithHttpInfo(String path) throws ApiException {
        okhttp3.Call localVarCall = apiMonitorControllerGetApiS3DataValidateBeforeCall(path, null);
        Type localVarReturnType = new TypeToken<String>(){}.getType();
        return localVarApiClient.execute(localVarCall, localVarReturnType);
    }

    /**
     * API모니터링 S3 데이터 조회 (관리자 전용) (asynchronously)
     * API모니터링 S3 데이터를 조회한다
     * @param path S3 경로 (required)
     * @param _callback The callback to be executed when the API call finishes
     * @return The request call
     * @throws ApiException If fail to process the API call, e.g. serializing the request body object
     * @http.response.details
     <table summary="Response Details" border="1">
        <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
        <tr><td> 200 </td><td> 성공 : API모니터링 S3 정보를 반환 </td><td>  -  </td></tr>
        <tr><td> 404 </td><td> 실패 : 존재하지 않는 S3 경로 </td><td>  -  </td></tr>
     </table>
     */
    public okhttp3.Call apiMonitorControllerGetApiS3DataAsync(String path, final ApiCallback<String> _callback) throws ApiException {

        okhttp3.Call localVarCall = apiMonitorControllerGetApiS3DataValidateBeforeCall(path, _callback);
        Type localVarReturnType = new TypeToken<String>(){}.getType();
        localVarApiClient.executeAsync(localVarCall, localVarReturnType, _callback);
        return localVarCall;
    }
}