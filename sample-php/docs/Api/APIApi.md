# OpenAPI\Client\APIApi

All URIs are relative to http://localhost.

Method | HTTP request | Description
------------- | ------------- | -------------
[**apiMonitorControllerGetApiMonitor()**](APIApi.md#apiMonitorControllerGetApiMonitor) | **GET** /public/api/api-monitor/detail/{apiId} | API모니터링 조회 (관리자 전용)
[**apiMonitorControllerGetApiMonitors()**](APIApi.md#apiMonitorControllerGetApiMonitors) | **GET** /public/api/api-monitor | API모니터링 목록 검색 (관리자 전용)
[**apiMonitorControllerGetApiS3Data()**](APIApi.md#apiMonitorControllerGetApiS3Data) | **GET** /public/api/api-monitor/log | API모니터링 S3 데이터 조회 (관리자 전용)


## `apiMonitorControllerGetApiMonitor()`

```php
apiMonitorControllerGetApiMonitor($api_id): \OpenAPI\Client\Model\ApiLog
```

API모니터링 조회 (관리자 전용)

특정 API모니터링을 조회한다

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure Bearer (JWT) authorization: bearer
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\APIApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$api_id = 3.4; // float | API모니터링 순번

try {
    $result = $apiInstance->apiMonitorControllerGetApiMonitor($api_id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling APIApi->apiMonitorControllerGetApiMonitor: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_id** | **float**| API모니터링 순번 |

### Return type

[**\OpenAPI\Client\Model\ApiLog**](../Model/ApiLog.md)

### Authorization

[bearer](../../README.md#bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `apiMonitorControllerGetApiMonitors()`

```php
apiMonitorControllerGetApiMonitors($page, $limit, $start_at, $end_at, $route, $jangbu_id, $service_name, $user_seq, $uid, $ip, $api_seq, $rcode, $is_fail): \OpenAPI\Client\Model\GetApiMonitorsOutput
```

API모니터링 목록 검색 (관리자 전용)

API모니터링 목록을 검색한다

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure Bearer (JWT) authorization: bearer
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\APIApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$page = 1; // float | 페이징 페이지 정보
$limit = 10; // float | 페이징 페이지당 목록 수
$start_at = 202104280000; // string | 시작일시 (YYYYMMDDHHmm)
$end_at = 202105260129; // string | 종료일시 (YYYYMMDDHHmm)
$route = 'route_example'; // string | 페이징 링크 경로
$jangbu_id = 3.4; // float | 장부사 순번
$service_name = 'service_name_example'; // string | 서비스 이름
$user_seq = 3.4; // float | 회원 순번
$uid = 'uid_example'; // string | 회원 ID
$ip = 'ip_example'; // string | IP
$api_seq = 3.4; // float | api 순번
$rcode = 3.4; // float | 결과 응답코드
$is_fail = True; // bool | 실패여부

try {
    $result = $apiInstance->apiMonitorControllerGetApiMonitors($page, $limit, $start_at, $end_at, $route, $jangbu_id, $service_name, $user_seq, $uid, $ip, $api_seq, $rcode, $is_fail);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling APIApi->apiMonitorControllerGetApiMonitors: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **float**| 페이징 페이지 정보 |
 **limit** | **float**| 페이징 페이지당 목록 수 |
 **start_at** | **string**| 시작일시 (YYYYMMDDHHmm) |
 **end_at** | **string**| 종료일시 (YYYYMMDDHHmm) |
 **route** | **string**| 페이징 링크 경로 | [optional]
 **jangbu_id** | **float**| 장부사 순번 | [optional]
 **service_name** | **string**| 서비스 이름 | [optional]
 **user_seq** | **float**| 회원 순번 | [optional]
 **uid** | **string**| 회원 ID | [optional]
 **ip** | **string**| IP | [optional]
 **api_seq** | **float**| api 순번 | [optional]
 **rcode** | **float**| 결과 응답코드 | [optional]
 **is_fail** | **bool**| 실패여부 | [optional]

### Return type

[**\OpenAPI\Client\Model\GetApiMonitorsOutput**](../Model/GetApiMonitorsOutput.md)

### Authorization

[bearer](../../README.md#bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `apiMonitorControllerGetApiS3Data()`

```php
apiMonitorControllerGetApiS3Data($path): string
```

API모니터링 S3 데이터 조회 (관리자 전용)

API모니터링 S3 데이터를 조회한다

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure Bearer (JWT) authorization: bearer
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\APIApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$path = 'path_example'; // string | S3 경로

try {
    $result = $apiInstance->apiMonitorControllerGetApiS3Data($path);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling APIApi->apiMonitorControllerGetApiS3Data: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **path** | **string**| S3 경로 |

### Return type

**string**

### Authorization

[bearer](../../README.md#bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)
