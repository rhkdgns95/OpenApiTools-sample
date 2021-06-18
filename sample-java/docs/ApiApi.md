# ApiApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**apiMonitorControllerGetApiMonitor**](ApiApi.md#apiMonitorControllerGetApiMonitor) | **GET** /public/api/api-monitor/detail/{apiId} | API모니터링 조회 (관리자 전용)
[**apiMonitorControllerGetApiMonitors**](ApiApi.md#apiMonitorControllerGetApiMonitors) | **GET** /public/api/api-monitor | API모니터링 목록 검색 (관리자 전용)
[**apiMonitorControllerGetApiS3Data**](ApiApi.md#apiMonitorControllerGetApiS3Data) | **GET** /public/api/api-monitor/log | API모니터링 S3 데이터 조회 (관리자 전용)


<a name="apiMonitorControllerGetApiMonitor"></a>
# **apiMonitorControllerGetApiMonitor**
> ApiLog apiMonitorControllerGetApiMonitor(apiId)

API모니터링 조회 (관리자 전용)

특정 API모니터링을 조회한다

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.ApiApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost");
    
    // Configure HTTP bearer authorization: bearer
    HttpBearerAuth bearer = (HttpBearerAuth) defaultClient.getAuthentication("bearer");
    bearer.setBearerToken("BEARER TOKEN");

    ApiApi apiInstance = new ApiApi(defaultClient);
    BigDecimal apiId = new BigDecimal(78); // BigDecimal | API모니터링 순번
    try {
      ApiLog result = apiInstance.apiMonitorControllerGetApiMonitor(apiId);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling ApiApi#apiMonitorControllerGetApiMonitor");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiId** | **BigDecimal**| API모니터링 순번 |

### Return type

[**ApiLog**](ApiLog.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | 성공 : API모니터링 정보를 반환 |  -  |
**404** | 실패 : 존재하지 않는 API모니터링 정보 |  -  |

<a name="apiMonitorControllerGetApiMonitors"></a>
# **apiMonitorControllerGetApiMonitors**
> GetApiMonitorsOutput apiMonitorControllerGetApiMonitors(page, limit, startAt, endAt, route, jangbuId, serviceName, userSeq, uid, ip, apiSeq, rcode, isFail)

API모니터링 목록 검색 (관리자 전용)

API모니터링 목록을 검색한다

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.ApiApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost");
    
    // Configure HTTP bearer authorization: bearer
    HttpBearerAuth bearer = (HttpBearerAuth) defaultClient.getAuthentication("bearer");
    bearer.setBearerToken("BEARER TOKEN");

    ApiApi apiInstance = new ApiApi(defaultClient);
    BigDecimal page = new BigDecimal(78); // BigDecimal | 페이징 페이지 정보
    BigDecimal limit = new BigDecimal(78); // BigDecimal | 페이징 페이지당 목록 수
    String startAt = "202104280000"; // String | 시작일시 (YYYYMMDDHHmm)
    String endAt = "202105260129"; // String | 종료일시 (YYYYMMDDHHmm)
    String route = "route_example"; // String | 페이징 링크 경로
    BigDecimal jangbuId = new BigDecimal(78); // BigDecimal | 장부사 순번
    String serviceName = "serviceName_example"; // String | 서비스 이름
    BigDecimal userSeq = new BigDecimal(78); // BigDecimal | 회원 순번
    String uid = "uid_example"; // String | 회원 ID
    String ip = "ip_example"; // String | IP
    BigDecimal apiSeq = new BigDecimal(78); // BigDecimal | api 순번
    BigDecimal rcode = new BigDecimal(78); // BigDecimal | 결과 응답코드
    Boolean isFail = true; // Boolean | 실패여부
    try {
      GetApiMonitorsOutput result = apiInstance.apiMonitorControllerGetApiMonitors(page, limit, startAt, endAt, route, jangbuId, serviceName, userSeq, uid, ip, apiSeq, rcode, isFail);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling ApiApi#apiMonitorControllerGetApiMonitors");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **BigDecimal**| 페이징 페이지 정보 |
 **limit** | **BigDecimal**| 페이징 페이지당 목록 수 |
 **startAt** | **String**| 시작일시 (YYYYMMDDHHmm) |
 **endAt** | **String**| 종료일시 (YYYYMMDDHHmm) |
 **route** | **String**| 페이징 링크 경로 | [optional]
 **jangbuId** | **BigDecimal**| 장부사 순번 | [optional]
 **serviceName** | **String**| 서비스 이름 | [optional]
 **userSeq** | **BigDecimal**| 회원 순번 | [optional]
 **uid** | **String**| 회원 ID | [optional]
 **ip** | **String**| IP | [optional]
 **apiSeq** | **BigDecimal**| api 순번 | [optional]
 **rcode** | **BigDecimal**| 결과 응답코드 | [optional]
 **isFail** | **Boolean**| 실패여부 | [optional]

### Return type

[**GetApiMonitorsOutput**](GetApiMonitorsOutput.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | 성공 : API모니터링 목록을 반환 |  -  |

<a name="apiMonitorControllerGetApiS3Data"></a>
# **apiMonitorControllerGetApiS3Data**
> String apiMonitorControllerGetApiS3Data(path)

API모니터링 S3 데이터 조회 (관리자 전용)

API모니터링 S3 데이터를 조회한다

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.ApiApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost");
    
    // Configure HTTP bearer authorization: bearer
    HttpBearerAuth bearer = (HttpBearerAuth) defaultClient.getAuthentication("bearer");
    bearer.setBearerToken("BEARER TOKEN");

    ApiApi apiInstance = new ApiApi(defaultClient);
    String path = "path_example"; // String | S3 경로
    try {
      String result = apiInstance.apiMonitorControllerGetApiS3Data(path);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling ApiApi#apiMonitorControllerGetApiS3Data");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **path** | **String**| S3 경로 |

### Return type

**String**

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | 성공 : API모니터링 S3 정보를 반환 |  -  |
**404** | 실패 : 존재하지 않는 S3 경로 |  -  |

