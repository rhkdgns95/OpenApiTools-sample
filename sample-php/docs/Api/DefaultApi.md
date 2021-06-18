# OpenAPI\Client\DefaultApi

All URIs are relative to http://localhost.

Method | HTTP request | Description
------------- | ------------- | -------------
[**adjustControllerGetChargeJangbuPartnership()**](DefaultApi.md#adjustControllerGetChargeJangbuPartnership) | **GET** /public/api/adjust/jangbu/{jangbuId}/yearMonth/{yearMonth}/partnership | (해당연월) 장부사의 파트너쉽 금액 조회
[**adjustControllerGetChargeJangbuPreview()**](DefaultApi.md#adjustControllerGetChargeJangbuPreview) | **GET** /public/api/adjust/jangbu/{jangbuId}/yearMonth/{yearMonth}/preview | 
[**adjustControllerRegisterAdjust()**](DefaultApi.md#adjustControllerRegisterAdjust) | **PUT** /public/api/adjust/jangbu/{jangbuId}/yearMonth/{yearMonth}/step/{step} | 정산 등록 (관리자 전용: 극히 일부사용자만)
[**adjustControllerSearchAdjustJangbuServices()**](DefaultApi.md#adjustControllerSearchAdjustJangbuServices) | **GET** /public/api/adjust/jangbu/{jangbuId}/yearMonth/{yearMonth} | 장부사 서비스별 단가 검색 (장부사,관리자 전용)
[**adjustControllerSearchChargeJangbuFromJangbu()**](DefaultApi.md#adjustControllerSearchChargeJangbuFromJangbu) | **GET** /public/api/adjust/jangbu/{jangbuId} | (특정 장부사의) 정산목록 검색 (장부사 전용)
[**adjustControllerSearchChargeJangbuUserServices()**](DefaultApi.md#adjustControllerSearchChargeJangbuUserServices) | **GET** /public/api/adjust/jangbu/{jangbuId}/yearMonth/{yearMonth}/service/{serviceId} | 장부사 특정 서비스 회원별 요금목록 검색 (장부사,관리자 전용)
[**adjustControllerSearchChargeJangbus()**](DefaultApi.md#adjustControllerSearchChargeJangbus) | **GET** /public/api/adjust | 정산내역 목록 검색 (관리자 전용)
[**adjustControllerSendChargeJangbuMailTest()**](DefaultApi.md#adjustControllerSendChargeJangbuMailTest) | **POST** /public/api/adjust/jangbu/{jangbuId}/yearMonth/{yearMonth}/testmail | 
[**adjustControllerUpdateAdjustJangbuService()**](DefaultApi.md#adjustControllerUpdateAdjustJangbuService) | **PATCH** /public/api/adjust/jangbu/{jangbuId}/yearMonth/{yearMonth}/service/{serviceId} | (해당연월) 장부사 특정 서비스 단가를 수정
[**adjustControllerUpdateChargeJangbuPaid()**](DefaultApi.md#adjustControllerUpdateChargeJangbuPaid) | **PATCH** /public/api/adjust/jangbu/{jangbuId}/yearMonth/{yearMonth}/paid | 정산내역 수납여부 업데이트 (관리자 전용: 극히 일부사용자만)
[**adjustControllerUpdateChargeJangbuPartnership()**](DefaultApi.md#adjustControllerUpdateChargeJangbuPartnership) | **PATCH** /public/api/adjust/jangbu/{jangbuId}/yearMonth/{yearMonth}/partnership | (해당연월) 장부사의 파트너쉽 금액 수정
[**adjustControllerUpdateChargeJangbuStatus()**](DefaultApi.md#adjustControllerUpdateChargeJangbuStatus) | **PATCH** /public/api/adjust/jangbu/{jangbuId}/yearMonth/{yearMonth}/status | 정산내역 비공개 → 공개 상태값 업데이트 및 정산내역 메일 발송 (관리자 전용: 극히 일부사용자만)
[**authControllerDeleteToken()**](DefaultApi.md#authControllerDeleteToken) | **DELETE** /public/api/auth/{refreshToken} | 로그아웃 (토큰삭제)
[**authControllerLogin()**](DefaultApi.md#authControllerLogin) | **POST** /public/api/auth | 토큰발급
[**authControllerRefresh()**](DefaultApi.md#authControllerRefresh) | **PUT** /public/api/auth | 토큰갱신
[**errorControllerGetCert()**](DefaultApi.md#errorControllerGetCert) | **GET** /public/api/error/{errorId}/cert | 인증서 조회 (관리자 전용: 극히 일부사용자만)
[**errorControllerGetError()**](DefaultApi.md#errorControllerGetError) | **GET** /public/api/error/{errorId} | 에러 조회 (관리자 전용)
[**errorControllerGetErrors()**](DefaultApi.md#errorControllerGetErrors) | **GET** /public/api/error | 에러 목록 검색 (관리자 전용)
[**jangbuControllerGetJangbu()**](DefaultApi.md#jangbuControllerGetJangbu) | **GET** /public/api/jangbu/{jangbuId} | 장부사 조회 (관리자 전용)
[**jangbuControllerGetJangbus()**](DefaultApi.md#jangbuControllerGetJangbus) | **GET** /public/api/jangbu | 장부사 목록 검색 (관리자 전용)
[**jangbuControllerGetJangbusWithChargeJangbuPartnership()**](DefaultApi.md#jangbuControllerGetJangbusWithChargeJangbuPartnership) | **GET** /public/api/jangbu/yearMonth/{yearMonth} | (특정연월의 파트너쉽 단가정보와) 장부사 검색 (관리자 전용)
[**jangbuControllerRegisterJangbu()**](DefaultApi.md#jangbuControllerRegisterJangbu) | **POST** /public/api/jangbu | 장부사 등록 (관리자 전용)
[**jangbuControllerUpdateJangbu()**](DefaultApi.md#jangbuControllerUpdateJangbu) | **PATCH** /public/api/jangbu/{jangbuId} | 장부사 수정 (관리자 전용)
[**memberControllerFindMember()**](DefaultApi.md#memberControllerFindMember) | **POST** /public/api/member/find/account | 아이디 찾기 또는 패스워드 찾기
[**memberControllerGetMember()**](DefaultApi.md#memberControllerGetMember) | **GET** /public/api/member/{userId} | 회원 조회
[**memberControllerGetMembers()**](DefaultApi.md#memberControllerGetMembers) | **GET** /public/api/member | 회원 목록 검색
[**memberControllerGetResetPassword()**](DefaultApi.md#memberControllerGetResetPassword) | **GET** /public/api/member/recover/{recoveryKey} | 패스워드 재설정 조회
[**memberControllerRegisterCustomer()**](DefaultApi.md#memberControllerRegisterCustomer) | **POST** /public/api/member/user | (고객사) 계정 등록
[**memberControllerRegisterMember()**](DefaultApi.md#memberControllerRegisterMember) | **POST** /public/api/member | (관리자 또는 장부사) 계정 등록 (관라지만 이용)
[**memberControllerResetPassword()**](DefaultApi.md#memberControllerResetPassword) | **PATCH** /public/api/member/recover/{recoveryKey} | (계정찾기진행시) 패스워드 재설정 처리
[**memberControllerResetPasswordWithIdEmail()**](DefaultApi.md#memberControllerResetPasswordWithIdEmail) | **PATCH** /public/api/member/{memberId}/reset | 로그인 패스워드 초기화
[**memberControllerSaveUserRoleGroup()**](DefaultApi.md#memberControllerSaveUserRoleGroup) | **PATCH** /public/api/member/{userId}/role/{roleGroupCode} | 계정의 권한그룹 저장
[**memberControllerUpdateMember()**](DefaultApi.md#memberControllerUpdateMember) | **PATCH** /public/api/member/{userId} | 계정 수정
[**mobileAppControllerGetAppVersions()**](DefaultApi.md#mobileAppControllerGetAppVersions) | **GET** /public/api/app/version | 앱 버전 목록 검색 (관리자 전용)
[**mobileAppControllerGetJangbuMessage()**](DefaultApi.md#mobileAppControllerGetJangbuMessage) | **GET** /public/api/app/jangbu/{jangbuId}/message/{messageId} | (특정 장부사의) 메시지 조회 (관리자, 장부사 전용)
[**mobileAppControllerGetJangbuMessages()**](DefaultApi.md#mobileAppControllerGetJangbuMessages) | **GET** /public/api/app/jangbu/{jangbuId}/message | (특정 장부사의) 메시지 목록 검색 (관리자, 장부사 전용)
[**mobileAppControllerGetUsingAppUsers()**](DefaultApi.md#mobileAppControllerGetUsingAppUsers) | **GET** /public/api/app/user | 앱 사용자 목록 검색 (관리자 전용)
[**mobileAppControllerRegisterAppVersion()**](DefaultApi.md#mobileAppControllerRegisterAppVersion) | **POST** /public/api/app/version | 앱 버전 등록 (관리자 전용)
[**mobileAppControllerUpdateAppVersion()**](DefaultApi.md#mobileAppControllerUpdateAppVersion) | **PATCH** /public/api/app/version/{versionId} | 앱 버전 수정 (관리자 전용)
[**noticeControllerDeleteNotice()**](DefaultApi.md#noticeControllerDeleteNotice) | **DELETE** /public/api/notice/{noticeId} | 공지사항 삭제 (관리자 전용)
[**noticeControllerGetNotice()**](DefaultApi.md#noticeControllerGetNotice) | **GET** /public/api/notice/{noticeId} | 공지사항 조회 (관리자, 장부사 전용)
[**noticeControllerGetNotices()**](DefaultApi.md#noticeControllerGetNotices) | **GET** /public/api/notice | 공지사항 검색 (관리자, 장부사 전용)
[**noticeControllerRegisterNotice()**](DefaultApi.md#noticeControllerRegisterNotice) | **POST** /public/api/notice | 공지사항 등록 (관리자 전용)
[**noticeControllerUpdateNotice()**](DefaultApi.md#noticeControllerUpdateNotice) | **PUT** /public/api/notice/{noticeId} | 공지사항 수정 (관리자 전용)
[**roleControllerGetRoles()**](DefaultApi.md#roleControllerGetRoles) | **GET** /public/api/role | 권한 목록 검색 (관리자, 장부사 전용)
[**roleControllerRegisterRole()**](DefaultApi.md#roleControllerRegisterRole) | **POST** /public/api/role | 권한 등록 (관리자 전용)
[**roleControllerUpdateRole()**](DefaultApi.md#roleControllerUpdateRole) | **PUT** /public/api/role/{roleGroupCode} | 권한 수정 (관리자 전용)
[**scrapingCodeControllerActivateScrapingCode()**](DefaultApi.md#scrapingCodeControllerActivateScrapingCode) | **PATCH** /public/api/scraping-code/{serviceId} | 코드 활성 여부 변경 (관리자 전용: 극히 일부사용자만)
[**scrapingCodeControllerGetScrapingCodes()**](DefaultApi.md#scrapingCodeControllerGetScrapingCodes) | **GET** /public/api/scraping-code | 스크래핑 코드 목록 검색 (관리자 전용: 극히 일부사용자만)
[**scrapingCodeControllerRegisterScrapingCodeVersion()**](DefaultApi.md#scrapingCodeControllerRegisterScrapingCodeVersion) | **POST** /public/api/scraping-code | 스크래핑 코드 버전 등록 (Github Action &gt;&gt; Amazon SNS)
[**serviceControllerGetService()**](DefaultApi.md#serviceControllerGetService) | **GET** /public/api/service/{serviceId} | 서비스 조회 (관리자전용)
[**serviceControllerGetServices()**](DefaultApi.md#serviceControllerGetServices) | **GET** /public/api/service | 서비스 목록 검색
[**serviceControllerRegisterService()**](DefaultApi.md#serviceControllerRegisterService) | **POST** /public/api/service | 서비스 등록 (관리자전용: 일부사용자 or 정산관리자)
[**serviceControllerUpdateService()**](DefaultApi.md#serviceControllerUpdateService) | **PATCH** /public/api/service/{serviceId} | 서비스 수정 (관리자전용: 일부사용자)
[**workControllerGetWork()**](DefaultApi.md#workControllerGetWork) | **GET** /public/api/jangbu/{jangbuId}/user/{userId}/work/{workId} | 업무 조회
[**workControllerGetWorkS3Data()**](DefaultApi.md#workControllerGetWorkS3Data) | **GET** /public/api/work/log | (관리자전용) 특정 업무의 S3정보 조회 (업로드 정보 또는 스크래핑 정보)
[**workControllerGetWorkS3DetailLog()**](DefaultApi.md#workControllerGetWorkS3DetailLog) | **GET** /public/api/work/log-detail/{workId} | 특정 업무의 S3정보의 조회 (업로드 로그)
[**workControllerGetWorks()**](DefaultApi.md#workControllerGetWorks) | **GET** /public/api/work | 업무 목록 검색 (관리자 전용)
[**workControllerGetWorksByJangbu()**](DefaultApi.md#workControllerGetWorksByJangbu) | **GET** /public/api/jangbu/{jangbuId}/work | 장부사별 업무 목록 검색 (장부사 전용)
[**workControllerGetWorksByUser()**](DefaultApi.md#workControllerGetWorksByUser) | **GET** /public/api/jangbu/{jangbuId}/user/{userId}/work | 사용자별 업무 목록 검색 (고객 전용)
[**workControllerUpdateWork()**](DefaultApi.md#workControllerUpdateWork) | **PATCH** /public/api/jangbu/{jangbuId}/user/{userId}/work/{workId} | (접수 또는 승인건만) 업무 수정 (관리자 전용: 취소처리)


## `adjustControllerGetChargeJangbuPartnership()`

```php
adjustControllerGetChargeJangbuPartnership($jangbu_id, $year_month): \OpenAPI\Client\Model\ChargeJangbuPartnership
```

(해당연월) 장부사의 파트너쉽 금액 조회

(해당연월) 장부사의 파트너쉽 금액을 조회한다.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure Bearer (JWT) authorization: bearer
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\DefaultApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$jangbu_id = 3.4; // float
$year_month = 3.4; // float

try {
    $result = $apiInstance->adjustControllerGetChargeJangbuPartnership($jangbu_id, $year_month);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling DefaultApi->adjustControllerGetChargeJangbuPartnership: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **jangbu_id** | **float**|  |
 **year_month** | **float**|  |

### Return type

[**\OpenAPI\Client\Model\ChargeJangbuPartnership**](../Model/ChargeJangbuPartnership.md)

### Authorization

[bearer](../../README.md#bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `adjustControllerGetChargeJangbuPreview()`

```php
adjustControllerGetChargeJangbuPreview($jangbu_id, $year_month): \OpenAPI\Client\Model\GetChargeJangbuPreviewOutput
```



해당연월의 장부사 정산내역 결과 미리보기

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure Bearer (JWT) authorization: bearer
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\DefaultApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$jangbu_id = 3.4; // float | 장부사 순번
$year_month = 3.4; // float | 해당연월 (YYYYMM)

try {
    $result = $apiInstance->adjustControllerGetChargeJangbuPreview($jangbu_id, $year_month);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling DefaultApi->adjustControllerGetChargeJangbuPreview: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **jangbu_id** | **float**| 장부사 순번 |
 **year_month** | **float**| 해당연월 (YYYYMM) |

### Return type

[**\OpenAPI\Client\Model\GetChargeJangbuPreviewOutput**](../Model/GetChargeJangbuPreviewOutput.md)

### Authorization

[bearer](../../README.md#bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `adjustControllerRegisterAdjust()`

```php
adjustControllerRegisterAdjust($jangbu_id, $year_month, $step): \OpenAPI\Client\Model\RegisterAdjustOutput
```

정산 등록 (관리자 전용: 극히 일부사용자만)

정산을 등록한다 (1,2 단계 순차적으로 진행)

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure Bearer (JWT) authorization: bearer
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\DefaultApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$jangbu_id = 3.4; // float | 장부사 순번
$year_month = 3.4; // float | 해당연월 (YYYYMM)
$step = 3.4; // float | 단계 순번

try {
    $result = $apiInstance->adjustControllerRegisterAdjust($jangbu_id, $year_month, $step);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling DefaultApi->adjustControllerRegisterAdjust: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **jangbu_id** | **float**| 장부사 순번 |
 **year_month** | **float**| 해당연월 (YYYYMM) |
 **step** | **float**| 단계 순번 |

### Return type

[**\OpenAPI\Client\Model\RegisterAdjustOutput**](../Model/RegisterAdjustOutput.md)

### Authorization

[bearer](../../README.md#bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `adjustControllerSearchAdjustJangbuServices()`

```php
adjustControllerSearchAdjustJangbuServices($jangbu_id, $year_month, $page, $limit, $route): \OpenAPI\Client\Model\SearchAdjustJangbuServicesOutput
```

장부사 서비스별 단가 검색 (장부사,관리자 전용)

특정 장부사의 특정연월에 해당하는 서비스별 단가를 검색한다

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure Bearer (JWT) authorization: bearer
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\DefaultApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$jangbu_id = 3; // float | 장부사 순번
$year_month = 202103; // float | 해당연월 (YYYYMM)
$page = 1; // float | 페이징 페이지 정보
$limit = 10; // float | 페이징 페이지당 목록 수
$route = 'route_example'; // string | 페이징 링크 경로

try {
    $result = $apiInstance->adjustControllerSearchAdjustJangbuServices($jangbu_id, $year_month, $page, $limit, $route);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling DefaultApi->adjustControllerSearchAdjustJangbuServices: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **jangbu_id** | **float**| 장부사 순번 |
 **year_month** | **float**| 해당연월 (YYYYMM) |
 **page** | **float**| 페이징 페이지 정보 |
 **limit** | **float**| 페이징 페이지당 목록 수 |
 **route** | **string**| 페이징 링크 경로 | [optional]

### Return type

[**\OpenAPI\Client\Model\SearchAdjustJangbuServicesOutput**](../Model/SearchAdjustJangbuServicesOutput.md)

### Authorization

[bearer](../../README.md#bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `adjustControllerSearchChargeJangbuFromJangbu()`

```php
adjustControllerSearchChargeJangbuFromJangbu($jangbu_id, $page, $limit, $route, $year_month): \OpenAPI\Client\Model\SearchChargeJangbusOutput
```

(특정 장부사의) 정산목록 검색 (장부사 전용)

(특정 장부사의) 특정 정산목록을 검색한다

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure Bearer (JWT) authorization: bearer
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\DefaultApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$jangbu_id = 3; // float | 장부사 순번
$page = 1; // float | 페이징 페이지 정보
$limit = 10; // float | 페이징 페이지당 목록 수
$route = 'route_example'; // string | 페이징 링크 경로
$year_month = 3.4; // float | 정산연월 (YYYYMM)

try {
    $result = $apiInstance->adjustControllerSearchChargeJangbuFromJangbu($jangbu_id, $page, $limit, $route, $year_month);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling DefaultApi->adjustControllerSearchChargeJangbuFromJangbu: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **jangbu_id** | **float**| 장부사 순번 |
 **page** | **float**| 페이징 페이지 정보 |
 **limit** | **float**| 페이징 페이지당 목록 수 |
 **route** | **string**| 페이징 링크 경로 | [optional]
 **year_month** | **float**| 정산연월 (YYYYMM) | [optional]

### Return type

[**\OpenAPI\Client\Model\SearchChargeJangbusOutput**](../Model/SearchChargeJangbusOutput.md)

### Authorization

[bearer](../../README.md#bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `adjustControllerSearchChargeJangbuUserServices()`

```php
adjustControllerSearchChargeJangbuUserServices($jangbu_id, $year_month, $service_id, $page, $limit, $route): \OpenAPI\Client\Model\SearchChargeJangbuUserServicesOutput
```

장부사 특정 서비스 회원별 요금목록 검색 (장부사,관리자 전용)

장부사 특정 서비스 회원별 요금목록을 검색한다

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure Bearer (JWT) authorization: bearer
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\DefaultApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$jangbu_id = 3; // float | 장부사 순번
$year_month = 202103; // float | 해당연월 (YYYYMM)
$service_id = 3; // float | 서비스 순번
$page = 1; // float | 페이징 페이지 정보
$limit = 10; // float | 페이징 페이지당 목록 수
$route = 'route_example'; // string | 페이징 링크 경로

try {
    $result = $apiInstance->adjustControllerSearchChargeJangbuUserServices($jangbu_id, $year_month, $service_id, $page, $limit, $route);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling DefaultApi->adjustControllerSearchChargeJangbuUserServices: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **jangbu_id** | **float**| 장부사 순번 |
 **year_month** | **float**| 해당연월 (YYYYMM) |
 **service_id** | **float**| 서비스 순번 |
 **page** | **float**| 페이징 페이지 정보 |
 **limit** | **float**| 페이징 페이지당 목록 수 |
 **route** | **string**| 페이징 링크 경로 | [optional]

### Return type

[**\OpenAPI\Client\Model\SearchChargeJangbuUserServicesOutput**](../Model/SearchChargeJangbuUserServicesOutput.md)

### Authorization

[bearer](../../README.md#bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `adjustControllerSearchChargeJangbus()`

```php
adjustControllerSearchChargeJangbus($page, $limit, $route, $jangbu_id, $year_month): \OpenAPI\Client\Model\SearchChargeJangbusOutput
```

정산내역 목록 검색 (관리자 전용)

정산내역 목록을 검색한다

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure Bearer (JWT) authorization: bearer
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\DefaultApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$page = 1; // float | 페이징 페이지 정보
$limit = 10; // float | 페이징 페이지당 목록 수
$route = 'route_example'; // string | 페이징 링크 경로
$jangbu_id = 3.4; // float | 장부사 순번
$year_month = 3.4; // float | 정산연월 (YYYYMM)

try {
    $result = $apiInstance->adjustControllerSearchChargeJangbus($page, $limit, $route, $jangbu_id, $year_month);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling DefaultApi->adjustControllerSearchChargeJangbus: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **float**| 페이징 페이지 정보 |
 **limit** | **float**| 페이징 페이지당 목록 수 |
 **route** | **string**| 페이징 링크 경로 | [optional]
 **jangbu_id** | **float**| 장부사 순번 | [optional]
 **year_month** | **float**| 정산연월 (YYYYMM) | [optional]

### Return type

[**\OpenAPI\Client\Model\SearchChargeJangbusOutput**](../Model/SearchChargeJangbusOutput.md)

### Authorization

[bearer](../../README.md#bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `adjustControllerSendChargeJangbuMailTest()`

```php
adjustControllerSendChargeJangbuMailTest($jangbu_id, $year_month, $send_chagre_jangbu_mail_test_input): \OpenAPI\Client\Model\SendChargeJangbuMailTestOutput
```



해당연월의 정산내역 결과 테스트 메일 전송

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure Bearer (JWT) authorization: bearer
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\DefaultApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$jangbu_id = 3.4; // float | 장부사 순번
$year_month = 3.4; // float | 해당연월 (YYYYMM)
$send_chagre_jangbu_mail_test_input = new \OpenAPI\Client\Model\SendChagreJangbuMailTestInput(); // \OpenAPI\Client\Model\SendChagreJangbuMailTestInput

try {
    $result = $apiInstance->adjustControllerSendChargeJangbuMailTest($jangbu_id, $year_month, $send_chagre_jangbu_mail_test_input);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling DefaultApi->adjustControllerSendChargeJangbuMailTest: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **jangbu_id** | **float**| 장부사 순번 |
 **year_month** | **float**| 해당연월 (YYYYMM) |
 **send_chagre_jangbu_mail_test_input** | [**\OpenAPI\Client\Model\SendChagreJangbuMailTestInput**](../Model/SendChagreJangbuMailTestInput.md)|  |

### Return type

[**\OpenAPI\Client\Model\SendChargeJangbuMailTestOutput**](../Model/SendChargeJangbuMailTestOutput.md)

### Authorization

[bearer](../../README.md#bearer)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `adjustControllerUpdateAdjustJangbuService()`

```php
adjustControllerUpdateAdjustJangbuService($jangbu_id, $year_month, $service_id, $update_adjust_jangbu_service_input): \OpenAPI\Client\Model\AdjustJangbuService
```

(해당연월) 장부사 특정 서비스 단가를 수정

(해당연월) 장부사 특정 서비스 단가를 수정한다.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure Bearer (JWT) authorization: bearer
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\DefaultApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$jangbu_id = 3.4; // float
$year_month = 3.4; // float
$service_id = 3.4; // float
$update_adjust_jangbu_service_input = new \OpenAPI\Client\Model\UpdateAdjustJangbuServiceInput(); // \OpenAPI\Client\Model\UpdateAdjustJangbuServiceInput

try {
    $result = $apiInstance->adjustControllerUpdateAdjustJangbuService($jangbu_id, $year_month, $service_id, $update_adjust_jangbu_service_input);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling DefaultApi->adjustControllerUpdateAdjustJangbuService: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **jangbu_id** | **float**|  |
 **year_month** | **float**|  |
 **service_id** | **float**|  |
 **update_adjust_jangbu_service_input** | [**\OpenAPI\Client\Model\UpdateAdjustJangbuServiceInput**](../Model/UpdateAdjustJangbuServiceInput.md)|  |

### Return type

[**\OpenAPI\Client\Model\AdjustJangbuService**](../Model/AdjustJangbuService.md)

### Authorization

[bearer](../../README.md#bearer)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `adjustControllerUpdateChargeJangbuPaid()`

```php
adjustControllerUpdateChargeJangbuPaid($jangbu_id, $year_month, $update_charge_jangbu_paid_input): \OpenAPI\Client\Model\ChargeJangbu
```

정산내역 수납여부 업데이트 (관리자 전용: 극히 일부사용자만)

정산내역의 수납여부를 업데이트 한다

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure Bearer (JWT) authorization: bearer
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\DefaultApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$jangbu_id = 3.4; // float | 장부사 순번
$year_month = 3.4; // float | 해당연월 (YYYYMM)
$update_charge_jangbu_paid_input = new \OpenAPI\Client\Model\UpdateChargeJangbuPaidInput(); // \OpenAPI\Client\Model\UpdateChargeJangbuPaidInput

try {
    $result = $apiInstance->adjustControllerUpdateChargeJangbuPaid($jangbu_id, $year_month, $update_charge_jangbu_paid_input);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling DefaultApi->adjustControllerUpdateChargeJangbuPaid: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **jangbu_id** | **float**| 장부사 순번 |
 **year_month** | **float**| 해당연월 (YYYYMM) |
 **update_charge_jangbu_paid_input** | [**\OpenAPI\Client\Model\UpdateChargeJangbuPaidInput**](../Model/UpdateChargeJangbuPaidInput.md)|  |

### Return type

[**\OpenAPI\Client\Model\ChargeJangbu**](../Model/ChargeJangbu.md)

### Authorization

[bearer](../../README.md#bearer)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `adjustControllerUpdateChargeJangbuPartnership()`

```php
adjustControllerUpdateChargeJangbuPartnership($jangbu_id, $year_month, $update_charge_jangbu_partnership_input): \OpenAPI\Client\Model\ChargeJangbuPartnership
```

(해당연월) 장부사의 파트너쉽 금액 수정

(해당연월) 장부사의 파트너쉽 금액을 수정한다.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure Bearer (JWT) authorization: bearer
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\DefaultApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$jangbu_id = 3.4; // float
$year_month = 3.4; // float
$update_charge_jangbu_partnership_input = new \OpenAPI\Client\Model\UpdateChargeJangbuPartnershipInput(); // \OpenAPI\Client\Model\UpdateChargeJangbuPartnershipInput

try {
    $result = $apiInstance->adjustControllerUpdateChargeJangbuPartnership($jangbu_id, $year_month, $update_charge_jangbu_partnership_input);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling DefaultApi->adjustControllerUpdateChargeJangbuPartnership: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **jangbu_id** | **float**|  |
 **year_month** | **float**|  |
 **update_charge_jangbu_partnership_input** | [**\OpenAPI\Client\Model\UpdateChargeJangbuPartnershipInput**](../Model/UpdateChargeJangbuPartnershipInput.md)|  |

### Return type

[**\OpenAPI\Client\Model\ChargeJangbuPartnership**](../Model/ChargeJangbuPartnership.md)

### Authorization

[bearer](../../README.md#bearer)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `adjustControllerUpdateChargeJangbuStatus()`

```php
adjustControllerUpdateChargeJangbuStatus($jangbu_id, $year_month, $update_charge_jangbu_status_input): \OpenAPI\Client\Model\ChargeJangbu
```

정산내역 비공개 → 공개 상태값 업데이트 및 정산내역 메일 발송 (관리자 전용: 극히 일부사용자만)

정산내역의 비공개 → 공개 상태값을 업데이트 및 정산내역의 메일을 발송한다

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure Bearer (JWT) authorization: bearer
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\DefaultApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$jangbu_id = 3.4; // float | 장부사 순번
$year_month = 3.4; // float | 해당연월 (YYYYMM)
$update_charge_jangbu_status_input = new \OpenAPI\Client\Model\UpdateChargeJangbuStatusInput(); // \OpenAPI\Client\Model\UpdateChargeJangbuStatusInput

try {
    $result = $apiInstance->adjustControllerUpdateChargeJangbuStatus($jangbu_id, $year_month, $update_charge_jangbu_status_input);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling DefaultApi->adjustControllerUpdateChargeJangbuStatus: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **jangbu_id** | **float**| 장부사 순번 |
 **year_month** | **float**| 해당연월 (YYYYMM) |
 **update_charge_jangbu_status_input** | [**\OpenAPI\Client\Model\UpdateChargeJangbuStatusInput**](../Model/UpdateChargeJangbuStatusInput.md)|  |

### Return type

[**\OpenAPI\Client\Model\ChargeJangbu**](../Model/ChargeJangbu.md)

### Authorization

[bearer](../../README.md#bearer)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `authControllerDeleteToken()`

```php
authControllerDeleteToken($refresh_token)
```

로그아웃 (토큰삭제)

토큰을 삭제한다 (로그아웃시)

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');



$apiInstance = new OpenAPI\Client\Api\DefaultApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$refresh_token = 'refresh_token_example'; // string | 리프레시 토큰

try {
    $apiInstance->authControllerDeleteToken($refresh_token);
} catch (Exception $e) {
    echo 'Exception when calling DefaultApi->authControllerDeleteToken: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **refresh_token** | **string**| 리프레시 토큰 |

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `authControllerLogin()`

```php
authControllerLogin($login_input): \OpenAPI\Client\Model\LoginOutput
```

토큰발급

새로운 토큰을 발급한다

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');



$apiInstance = new OpenAPI\Client\Api\DefaultApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$login_input = new \OpenAPI\Client\Model\LoginInput(); // \OpenAPI\Client\Model\LoginInput | 로그인 요청 데이터

try {
    $result = $apiInstance->authControllerLogin($login_input);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling DefaultApi->authControllerLogin: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **login_input** | [**\OpenAPI\Client\Model\LoginInput**](../Model/LoginInput.md)| 로그인 요청 데이터 |

### Return type

[**\OpenAPI\Client\Model\LoginOutput**](../Model/LoginOutput.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `authControllerRefresh()`

```php
authControllerRefresh($refresh_input): \OpenAPI\Client\Model\RefreshOutput
```

토큰갱신

토큰을 갱신한다

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');



$apiInstance = new OpenAPI\Client\Api\DefaultApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$refresh_input = new \OpenAPI\Client\Model\RefreshInput(); // \OpenAPI\Client\Model\RefreshInput | 토큰갱신 요청 데이터

try {
    $result = $apiInstance->authControllerRefresh($refresh_input);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling DefaultApi->authControllerRefresh: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **refresh_input** | [**\OpenAPI\Client\Model\RefreshInput**](../Model/RefreshInput.md)| 토큰갱신 요청 데이터 |

### Return type

[**\OpenAPI\Client\Model\RefreshOutput**](../Model/RefreshOutput.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `errorControllerGetCert()`

```php
errorControllerGetCert($error_id, $connect_id, $path): \OpenAPI\Client\Model\GetCertOutput
```

인증서 조회 (관리자 전용: 극히 일부사용자만)

특정 인증서를 조회한다

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure Bearer (JWT) authorization: bearer
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\DefaultApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$error_id = 3.4; // float | 에러 순번
$connect_id = 3.4; // float | 연결정보 순번
$path = 'path_example'; // string | S3 경로

try {
    $result = $apiInstance->errorControllerGetCert($error_id, $connect_id, $path);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling DefaultApi->errorControllerGetCert: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **error_id** | **float**| 에러 순번 |
 **connect_id** | **float**| 연결정보 순번 |
 **path** | **string**| S3 경로 |

### Return type

[**\OpenAPI\Client\Model\GetCertOutput**](../Model/GetCertOutput.md)

### Authorization

[bearer](../../README.md#bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `errorControllerGetError()`

```php
errorControllerGetError($error_id): \OpenAPI\Client\Model\PcClientError
```

에러 조회 (관리자 전용)

특정 에러를 조회한다

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure Bearer (JWT) authorization: bearer
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\DefaultApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$error_id = 3.4; // float | 에러 순번

try {
    $result = $apiInstance->errorControllerGetError($error_id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling DefaultApi->errorControllerGetError: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **error_id** | **float**| 에러 순번 |

### Return type

[**\OpenAPI\Client\Model\PcClientError**](../Model/PcClientError.md)

### Authorization

[bearer](../../README.md#bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `errorControllerGetErrors()`

```php
errorControllerGetErrors($page, $limit, $start_at, $end_at, $route, $app_version, $app_name, $jangbu_name, $user_id): \OpenAPI\Client\Model\GetErrorsResponse
```

에러 목록 검색 (관리자 전용)

에러 목록을 검색한다

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure Bearer (JWT) authorization: bearer
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\DefaultApi(
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
$app_version = 'app_version_example'; // string | 앱 버전
$app_name = 'app_name_example'; // string | 앱 이름
$jangbu_name = 'jangbu_name_example'; // string | 장부사명
$user_id = 3.4; // float | 회원의 순번

try {
    $result = $apiInstance->errorControllerGetErrors($page, $limit, $start_at, $end_at, $route, $app_version, $app_name, $jangbu_name, $user_id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling DefaultApi->errorControllerGetErrors: ', $e->getMessage(), PHP_EOL;
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
 **app_version** | **string**| 앱 버전 | [optional]
 **app_name** | **string**| 앱 이름 | [optional]
 **jangbu_name** | **string**| 장부사명 | [optional]
 **user_id** | **float**| 회원의 순번 | [optional]

### Return type

[**\OpenAPI\Client\Model\GetErrorsResponse**](../Model/GetErrorsResponse.md)

### Authorization

[bearer](../../README.md#bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `jangbuControllerGetJangbu()`

```php
jangbuControllerGetJangbu($jangbu_id): \OpenAPI\Client\Model\Jangbu
```

장부사 조회 (관리자 전용)

특정 장부사를 조회한다

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure Bearer (JWT) authorization: bearer
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\DefaultApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$jangbu_id = 3.4; // float | 장부사의 순번

try {
    $result = $apiInstance->jangbuControllerGetJangbu($jangbu_id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling DefaultApi->jangbuControllerGetJangbu: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **jangbu_id** | **float**| 장부사의 순번 |

### Return type

[**\OpenAPI\Client\Model\Jangbu**](../Model/Jangbu.md)

### Authorization

[bearer](../../README.md#bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `jangbuControllerGetJangbus()`

```php
jangbuControllerGetJangbus($page, $limit, $route, $service_ids, $jangbu_name, $rep_id): \OpenAPI\Client\Model\GetJangbusOutput
```

장부사 목록 검색 (관리자 전용)

장부사 목록을 검색한다

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure Bearer (JWT) authorization: bearer
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\DefaultApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$page = 1; // float | 페이징 페이지 정보
$limit = 10; // float | 페이징 페이지당 목록 수
$route = 'route_example'; // string | 페이징 링크 경로
$service_ids = array(3.4); // float[] | 서비스 순번 목록
$jangbu_name = 'jangbu_name_example'; // string | 장부사명
$rep_id = 'rep_id_example'; // string | 장부사 아이디

try {
    $result = $apiInstance->jangbuControllerGetJangbus($page, $limit, $route, $service_ids, $jangbu_name, $rep_id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling DefaultApi->jangbuControllerGetJangbus: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **float**| 페이징 페이지 정보 |
 **limit** | **float**| 페이징 페이지당 목록 수 |
 **route** | **string**| 페이징 링크 경로 | [optional]
 **service_ids** | [**float[]**](../Model/float.md)| 서비스 순번 목록 | [optional]
 **jangbu_name** | **string**| 장부사명 | [optional]
 **rep_id** | **string**| 장부사 아이디 | [optional]

### Return type

[**\OpenAPI\Client\Model\GetJangbusOutput**](../Model/GetJangbusOutput.md)

### Authorization

[bearer](../../README.md#bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `jangbuControllerGetJangbusWithChargeJangbuPartnership()`

```php
jangbuControllerGetJangbusWithChargeJangbuPartnership($year_month, $page, $limit, $route, $service_ids, $jangbu_name, $rep_id): \OpenAPI\Client\Model\GetJangbusOutput
```

(특정연월의 파트너쉽 단가정보와) 장부사 검색 (관리자 전용)

(특정연월의 파트너쉽 단가정보와) 장부사 검색한다

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure Bearer (JWT) authorization: bearer
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\DefaultApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$year_month = 3.4; // float | 해당연월
$page = 1; // float | 페이징 페이지 정보
$limit = 10; // float | 페이징 페이지당 목록 수
$route = 'route_example'; // string | 페이징 링크 경로
$service_ids = array(3.4); // float[] | 서비스 순번 목록
$jangbu_name = 'jangbu_name_example'; // string | 장부사명
$rep_id = 'rep_id_example'; // string | 장부사 아이디

try {
    $result = $apiInstance->jangbuControllerGetJangbusWithChargeJangbuPartnership($year_month, $page, $limit, $route, $service_ids, $jangbu_name, $rep_id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling DefaultApi->jangbuControllerGetJangbusWithChargeJangbuPartnership: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **year_month** | **float**| 해당연월 |
 **page** | **float**| 페이징 페이지 정보 |
 **limit** | **float**| 페이징 페이지당 목록 수 |
 **route** | **string**| 페이징 링크 경로 | [optional]
 **service_ids** | [**float[]**](../Model/float.md)| 서비스 순번 목록 | [optional]
 **jangbu_name** | **string**| 장부사명 | [optional]
 **rep_id** | **string**| 장부사 아이디 | [optional]

### Return type

[**\OpenAPI\Client\Model\GetJangbusOutput**](../Model/GetJangbusOutput.md)

### Authorization

[bearer](../../README.md#bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `jangbuControllerRegisterJangbu()`

```php
jangbuControllerRegisterJangbu($register_jangbu_input): \OpenAPI\Client\Model\Jangbu
```

장부사 등록 (관리자 전용)

장부사를 등록한다

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure Bearer (JWT) authorization: bearer
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\DefaultApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$register_jangbu_input = new \OpenAPI\Client\Model\RegisterJangbuInput(); // \OpenAPI\Client\Model\RegisterJangbuInput

try {
    $result = $apiInstance->jangbuControllerRegisterJangbu($register_jangbu_input);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling DefaultApi->jangbuControllerRegisterJangbu: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **register_jangbu_input** | [**\OpenAPI\Client\Model\RegisterJangbuInput**](../Model/RegisterJangbuInput.md)|  |

### Return type

[**\OpenAPI\Client\Model\Jangbu**](../Model/Jangbu.md)

### Authorization

[bearer](../../README.md#bearer)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `jangbuControllerUpdateJangbu()`

```php
jangbuControllerUpdateJangbu($jangbu_id, $update_jangbu_input): \OpenAPI\Client\Model\Jangbu
```

장부사 수정 (관리자 전용)

특정 장부사를 수정한다

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure Bearer (JWT) authorization: bearer
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\DefaultApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$jangbu_id = 3.4; // float | 장부사의 순번
$update_jangbu_input = new \OpenAPI\Client\Model\UpdateJangbuInput(); // \OpenAPI\Client\Model\UpdateJangbuInput

try {
    $result = $apiInstance->jangbuControllerUpdateJangbu($jangbu_id, $update_jangbu_input);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling DefaultApi->jangbuControllerUpdateJangbu: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **jangbu_id** | **float**| 장부사의 순번 |
 **update_jangbu_input** | [**\OpenAPI\Client\Model\UpdateJangbuInput**](../Model/UpdateJangbuInput.md)|  |

### Return type

[**\OpenAPI\Client\Model\Jangbu**](../Model/Jangbu.md)

### Authorization

[bearer](../../README.md#bearer)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `memberControllerFindMember()`

```php
memberControllerFindMember($find_member_input): \OpenAPI\Client\Model\FindMemberOutput
```

아이디 찾기 또는 패스워드 찾기

(로그인 계정의) 아이디 또는 패스워드를 찾는다

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');



$apiInstance = new OpenAPI\Client\Api\DefaultApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$find_member_input = new \OpenAPI\Client\Model\FindMemberInput(); // \OpenAPI\Client\Model\FindMemberInput

try {
    $result = $apiInstance->memberControllerFindMember($find_member_input);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling DefaultApi->memberControllerFindMember: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **find_member_input** | [**\OpenAPI\Client\Model\FindMemberInput**](../Model/FindMemberInput.md)|  |

### Return type

[**\OpenAPI\Client\Model\FindMemberOutput**](../Model/FindMemberOutput.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `memberControllerGetMember()`

```php
memberControllerGetMember($user_id): \OpenAPI\Client\Model\User
```

회원 조회

특정 회원을 조회한다

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure Bearer (JWT) authorization: bearer
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\DefaultApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$user_id = 3.4; // float | 회원의 순번

try {
    $result = $apiInstance->memberControllerGetMember($user_id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling DefaultApi->memberControllerGetMember: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user_id** | **float**| 회원의 순번 |

### Return type

[**\OpenAPI\Client\Model\User**](../Model/User.md)

### Authorization

[bearer](../../README.md#bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `memberControllerGetMembers()`

```php
memberControllerGetMembers($page, $limit, $route, $jangbu_id, $service_id, $active, $user_name, $ceo_name, $user_level): \OpenAPI\Client\Model\GetMembersOutput
```

회원 목록 검색

회원 목록을 검색한다

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure Bearer (JWT) authorization: bearer
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\DefaultApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$page = 1; // float | 페이징 페이지 정보
$limit = 10; // float | 페이징 페이지당 목록 수
$route = 'route_example'; // string | 페이징 링크 경로
$jangbu_id = 3.4; // float | 장부사 순번 (관리자의 경우에만 입력)
$service_id = 3.4; // float | 서비스 순번
$active = 'active_example'; // string | 이용여부 (1:이용중, 0:이용중지)
$user_name = 'user_name_example'; // string | 회원명
$ceo_name = 'ceo_name_example'; // string | 대표자명
$user_level = 2; // float | 회원레벨 (고객,장부사,관리자)

try {
    $result = $apiInstance->memberControllerGetMembers($page, $limit, $route, $jangbu_id, $service_id, $active, $user_name, $ceo_name, $user_level);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling DefaultApi->memberControllerGetMembers: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **float**| 페이징 페이지 정보 |
 **limit** | **float**| 페이징 페이지당 목록 수 |
 **route** | **string**| 페이징 링크 경로 | [optional]
 **jangbu_id** | **float**| 장부사 순번 (관리자의 경우에만 입력) | [optional]
 **service_id** | **float**| 서비스 순번 | [optional]
 **active** | **string**| 이용여부 (1:이용중, 0:이용중지) | [optional]
 **user_name** | **string**| 회원명 | [optional]
 **ceo_name** | **string**| 대표자명 | [optional]
 **user_level** | **float**| 회원레벨 (고객,장부사,관리자) | [optional]

### Return type

[**\OpenAPI\Client\Model\GetMembersOutput**](../Model/GetMembersOutput.md)

### Authorization

[bearer](../../README.md#bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `memberControllerGetResetPassword()`

```php
memberControllerGetResetPassword($recovery_key): \OpenAPI\Client\Model\Recovery
```

패스워드 재설정 조회

패스워드 재설정 정보를 조회한다

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');



$apiInstance = new OpenAPI\Client\Api\DefaultApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$recovery_key = 'recovery_key_example'; // string

try {
    $result = $apiInstance->memberControllerGetResetPassword($recovery_key);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling DefaultApi->memberControllerGetResetPassword: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **recovery_key** | **string**|  |

### Return type

[**\OpenAPI\Client\Model\Recovery**](../Model/Recovery.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `memberControllerRegisterCustomer()`

```php
memberControllerRegisterCustomer($register_customer_input): \OpenAPI\Client\Model\User
```

(고객사) 계정 등록

(고객사) 계정을 등록한다

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure Bearer (JWT) authorization: bearer
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\DefaultApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$register_customer_input = new \OpenAPI\Client\Model\RegisterCustomerInput(); // \OpenAPI\Client\Model\RegisterCustomerInput

try {
    $result = $apiInstance->memberControllerRegisterCustomer($register_customer_input);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling DefaultApi->memberControllerRegisterCustomer: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **register_customer_input** | [**\OpenAPI\Client\Model\RegisterCustomerInput**](../Model/RegisterCustomerInput.md)|  |

### Return type

[**\OpenAPI\Client\Model\User**](../Model/User.md)

### Authorization

[bearer](../../README.md#bearer)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `memberControllerRegisterMember()`

```php
memberControllerRegisterMember($register_member_input): \OpenAPI\Client\Model\User
```

(관리자 또는 장부사) 계정 등록 (관라지만 이용)

(관리자 또는 장부사) 계정을 등록한다 (관라지만 이용)

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure Bearer (JWT) authorization: bearer
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\DefaultApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$register_member_input = new \OpenAPI\Client\Model\RegisterMemberInput(); // \OpenAPI\Client\Model\RegisterMemberInput

try {
    $result = $apiInstance->memberControllerRegisterMember($register_member_input);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling DefaultApi->memberControllerRegisterMember: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **register_member_input** | [**\OpenAPI\Client\Model\RegisterMemberInput**](../Model/RegisterMemberInput.md)|  |

### Return type

[**\OpenAPI\Client\Model\User**](../Model/User.md)

### Authorization

[bearer](../../README.md#bearer)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `memberControllerResetPassword()`

```php
memberControllerResetPassword($recovery_key, $reset_password_input): \OpenAPI\Client\Model\ResetPasswordOutput
```

(계정찾기진행시) 패스워드 재설정 처리

(계정찾기진행시) 패스워드 재설정 정보를 처리한다

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');



$apiInstance = new OpenAPI\Client\Api\DefaultApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$recovery_key = 'recovery_key_example'; // string | 키값
$reset_password_input = new \OpenAPI\Client\Model\ResetPasswordInput(); // \OpenAPI\Client\Model\ResetPasswordInput

try {
    $result = $apiInstance->memberControllerResetPassword($recovery_key, $reset_password_input);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling DefaultApi->memberControllerResetPassword: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **recovery_key** | **string**| 키값 |
 **reset_password_input** | [**\OpenAPI\Client\Model\ResetPasswordInput**](../Model/ResetPasswordInput.md)|  |

### Return type

[**\OpenAPI\Client\Model\ResetPasswordOutput**](../Model/ResetPasswordOutput.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `memberControllerResetPasswordWithIdEmail()`

```php
memberControllerResetPasswordWithIdEmail($member_id): \OpenAPI\Client\Model\User
```

로그인 패스워드 초기화

아이디+이메일 조합으로 패스워드를 초기화한다

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure Bearer (JWT) authorization: bearer
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\DefaultApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$member_id = 3.4; // float | 회원의 순번

try {
    $result = $apiInstance->memberControllerResetPasswordWithIdEmail($member_id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling DefaultApi->memberControllerResetPasswordWithIdEmail: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **member_id** | **float**| 회원의 순번 |

### Return type

[**\OpenAPI\Client\Model\User**](../Model/User.md)

### Authorization

[bearer](../../README.md#bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `memberControllerSaveUserRoleGroup()`

```php
memberControllerSaveUserRoleGroup($user_id, $role_group_code): \OpenAPI\Client\Model\User
```

계정의 권한그룹 저장

특정 계정의 권한그룹을 저장한다

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure Bearer (JWT) authorization: bearer
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\DefaultApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$user_id = 3.4; // float | 계정의 순번
$role_group_code = 'role_group_code_example'; // string | 계좌코드 순번

try {
    $result = $apiInstance->memberControllerSaveUserRoleGroup($user_id, $role_group_code);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling DefaultApi->memberControllerSaveUserRoleGroup: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user_id** | **float**| 계정의 순번 |
 **role_group_code** | **string**| 계좌코드 순번 |

### Return type

[**\OpenAPI\Client\Model\User**](../Model/User.md)

### Authorization

[bearer](../../README.md#bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `memberControllerUpdateMember()`

```php
memberControllerUpdateMember($user_id, $update_member_input): \OpenAPI\Client\Model\User
```

계정 수정

계정을 수정한다

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure Bearer (JWT) authorization: bearer
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\DefaultApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$user_id = 3.4; // float | 회원의 순번
$update_member_input = new \OpenAPI\Client\Model\UpdateMemberInput(); // \OpenAPI\Client\Model\UpdateMemberInput

try {
    $result = $apiInstance->memberControllerUpdateMember($user_id, $update_member_input);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling DefaultApi->memberControllerUpdateMember: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user_id** | **float**| 회원의 순번 |
 **update_member_input** | [**\OpenAPI\Client\Model\UpdateMemberInput**](../Model/UpdateMemberInput.md)|  |

### Return type

[**\OpenAPI\Client\Model\User**](../Model/User.md)

### Authorization

[bearer](../../README.md#bearer)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `mobileAppControllerGetAppVersions()`

```php
mobileAppControllerGetAppVersions($page, $limit, $route, $active, $os_type): \OpenAPI\Client\Model\GetAppVersionsOutput
```

앱 버전 목록 검색 (관리자 전용)

앱 버전 목록을 검색한다

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure Bearer (JWT) authorization: bearer
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\DefaultApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$page = 1; // float | 페이징 페이지 정보
$limit = 10; // float | 페이징 페이지당 목록 수
$route = 'route_example'; // string | 페이징 링크 경로
$active = 'active_example'; // string | 앱의 활성여부 (T:활성,F:비활성)
$os_type = new \OpenAPI\Client\Model\\OpenAPI\Client\Model\OsType(); // \OpenAPI\Client\Model\OsType | OS유형

try {
    $result = $apiInstance->mobileAppControllerGetAppVersions($page, $limit, $route, $active, $os_type);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling DefaultApi->mobileAppControllerGetAppVersions: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **float**| 페이징 페이지 정보 |
 **limit** | **float**| 페이징 페이지당 목록 수 |
 **route** | **string**| 페이징 링크 경로 | [optional]
 **active** | **string**| 앱의 활성여부 (T:활성,F:비활성) | [optional]
 **os_type** | [**\OpenAPI\Client\Model\OsType**](../Model/.md)| OS유형 | [optional]

### Return type

[**\OpenAPI\Client\Model\GetAppVersionsOutput**](../Model/GetAppVersionsOutput.md)

### Authorization

[bearer](../../README.md#bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `mobileAppControllerGetJangbuMessage()`

```php
mobileAppControllerGetJangbuMessage($jangbu_id, $message_id): \OpenAPI\Client\Model\Message
```

(특정 장부사의) 메시지 조회 (관리자, 장부사 전용)

(특정 장부사의) 특정 메시지를 조회한다

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure Bearer (JWT) authorization: bearer
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\DefaultApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$jangbu_id = 3.4; // float
$message_id = 3.4; // float | 메시지 순번

try {
    $result = $apiInstance->mobileAppControllerGetJangbuMessage($jangbu_id, $message_id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling DefaultApi->mobileAppControllerGetJangbuMessage: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **jangbu_id** | **float**|  |
 **message_id** | **float**| 메시지 순번 |

### Return type

[**\OpenAPI\Client\Model\Message**](../Model/Message.md)

### Authorization

[bearer](../../README.md#bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `mobileAppControllerGetJangbuMessages()`

```php
mobileAppControllerGetJangbuMessages($jangbu_id, $page, $limit, $start_at, $end_at, $route): \OpenAPI\Client\Model\GetJangbuMessagesOutput
```

(특정 장부사의) 메시지 목록 검색 (관리자, 장부사 전용)

(특정 장부사의) 메시지 목록을 검색한다

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure Bearer (JWT) authorization: bearer
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\DefaultApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$jangbu_id = 3.4; // float
$page = 1; // float | 페이징 페이지 정보
$limit = 10; // float | 페이징 페이지당 목록 수
$start_at = 3.4; // float | 기간 시작일자(YYYYMMDD)
$end_at = 3.4; // float | 기간 종료일자(YYYYMMDD)
$route = 'route_example'; // string | 페이징 링크 경로

try {
    $result = $apiInstance->mobileAppControllerGetJangbuMessages($jangbu_id, $page, $limit, $start_at, $end_at, $route);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling DefaultApi->mobileAppControllerGetJangbuMessages: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **jangbu_id** | **float**|  |
 **page** | **float**| 페이징 페이지 정보 |
 **limit** | **float**| 페이징 페이지당 목록 수 |
 **start_at** | **float**| 기간 시작일자(YYYYMMDD) |
 **end_at** | **float**| 기간 종료일자(YYYYMMDD) |
 **route** | **string**| 페이징 링크 경로 | [optional]

### Return type

[**\OpenAPI\Client\Model\GetJangbuMessagesOutput**](../Model/GetJangbuMessagesOutput.md)

### Authorization

[bearer](../../README.md#bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `mobileAppControllerGetUsingAppUsers()`

```php
mobileAppControllerGetUsingAppUsers($page, $limit, $route, $active, $os_type): object
```

앱 사용자 목록 검색 (관리자 전용)

앱 사용자 목록을 검색한다

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure Bearer (JWT) authorization: bearer
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\DefaultApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$page = 1; // float | 페이징 페이지 정보
$limit = 10; // float | 페이징 페이지당 목록 수
$route = 'route_example'; // string | 페이징 링크 경로
$active = 'active_example'; // string | 앱의 활성여부 (T:활성,F:비활성)
$os_type = new \OpenAPI\Client\Model\\OpenAPI\Client\Model\OsType(); // \OpenAPI\Client\Model\OsType | OS유형

try {
    $result = $apiInstance->mobileAppControllerGetUsingAppUsers($page, $limit, $route, $active, $os_type);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling DefaultApi->mobileAppControllerGetUsingAppUsers: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **float**| 페이징 페이지 정보 |
 **limit** | **float**| 페이징 페이지당 목록 수 |
 **route** | **string**| 페이징 링크 경로 | [optional]
 **active** | **string**| 앱의 활성여부 (T:활성,F:비활성) | [optional]
 **os_type** | [**\OpenAPI\Client\Model\OsType**](../Model/.md)| OS유형 | [optional]

### Return type

**object**

### Authorization

[bearer](../../README.md#bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `mobileAppControllerRegisterAppVersion()`

```php
mobileAppControllerRegisterAppVersion($register_app_version_input): \OpenAPI\Client\Model\AppVersion
```

앱 버전 등록 (관리자 전용)

앱 버전을 등록한다

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure Bearer (JWT) authorization: bearer
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\DefaultApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$register_app_version_input = new \OpenAPI\Client\Model\RegisterAppVersionInput(); // \OpenAPI\Client\Model\RegisterAppVersionInput

try {
    $result = $apiInstance->mobileAppControllerRegisterAppVersion($register_app_version_input);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling DefaultApi->mobileAppControllerRegisterAppVersion: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **register_app_version_input** | [**\OpenAPI\Client\Model\RegisterAppVersionInput**](../Model/RegisterAppVersionInput.md)|  |

### Return type

[**\OpenAPI\Client\Model\AppVersion**](../Model/AppVersion.md)

### Authorization

[bearer](../../README.md#bearer)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `mobileAppControllerUpdateAppVersion()`

```php
mobileAppControllerUpdateAppVersion($version_id, $update_app_version_input): \OpenAPI\Client\Model\AppVersion
```

앱 버전 수정 (관리자 전용)

앱 버전을 수정한다

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure Bearer (JWT) authorization: bearer
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\DefaultApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$version_id = 3.4; // float | 버전 순번
$update_app_version_input = new \OpenAPI\Client\Model\UpdateAppVersionInput(); // \OpenAPI\Client\Model\UpdateAppVersionInput

try {
    $result = $apiInstance->mobileAppControllerUpdateAppVersion($version_id, $update_app_version_input);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling DefaultApi->mobileAppControllerUpdateAppVersion: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **version_id** | **float**| 버전 순번 |
 **update_app_version_input** | [**\OpenAPI\Client\Model\UpdateAppVersionInput**](../Model/UpdateAppVersionInput.md)|  |

### Return type

[**\OpenAPI\Client\Model\AppVersion**](../Model/AppVersion.md)

### Authorization

[bearer](../../README.md#bearer)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `noticeControllerDeleteNotice()`

```php
noticeControllerDeleteNotice($notice_id): \OpenAPI\Client\Model\Notice
```

공지사항 삭제 (관리자 전용)

공지사항을 삭제한다

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure Bearer (JWT) authorization: bearer
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\DefaultApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$notice_id = 3.4; // float

try {
    $result = $apiInstance->noticeControllerDeleteNotice($notice_id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling DefaultApi->noticeControllerDeleteNotice: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **notice_id** | **float**|  |

### Return type

[**\OpenAPI\Client\Model\Notice**](../Model/Notice.md)

### Authorization

[bearer](../../README.md#bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `noticeControllerGetNotice()`

```php
noticeControllerGetNotice($notice_id): \OpenAPI\Client\Model\Notice
```

공지사항 조회 (관리자, 장부사 전용)

특정 공지사항을 조회한다

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure Bearer (JWT) authorization: bearer
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\DefaultApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$notice_id = 3.4; // float | 공지사항 순번

try {
    $result = $apiInstance->noticeControllerGetNotice($notice_id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling DefaultApi->noticeControllerGetNotice: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **notice_id** | **float**| 공지사항 순번 |

### Return type

[**\OpenAPI\Client\Model\Notice**](../Model/Notice.md)

### Authorization

[bearer](../../README.md#bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `noticeControllerGetNotices()`

```php
noticeControllerGetNotices($page, $limit, $route): \OpenAPI\Client\Model\GetNotices
```

공지사항 검색 (관리자, 장부사 전용)

공지사항 목록을 검색한다

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure Bearer (JWT) authorization: bearer
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\DefaultApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$page = 1; // float | 페이징 페이지 정보
$limit = 10; // float | 페이징 페이지당 목록 수
$route = 'route_example'; // string | 페이징 링크 경로

try {
    $result = $apiInstance->noticeControllerGetNotices($page, $limit, $route);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling DefaultApi->noticeControllerGetNotices: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **float**| 페이징 페이지 정보 |
 **limit** | **float**| 페이징 페이지당 목록 수 |
 **route** | **string**| 페이징 링크 경로 | [optional]

### Return type

[**\OpenAPI\Client\Model\GetNotices**](../Model/GetNotices.md)

### Authorization

[bearer](../../README.md#bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `noticeControllerRegisterNotice()`

```php
noticeControllerRegisterNotice($register_notice_input): \OpenAPI\Client\Model\Notice
```

공지사항 등록 (관리자 전용)

공지사항을 등록한다

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure Bearer (JWT) authorization: bearer
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\DefaultApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$register_notice_input = new \OpenAPI\Client\Model\RegisterNoticeInput(); // \OpenAPI\Client\Model\RegisterNoticeInput

try {
    $result = $apiInstance->noticeControllerRegisterNotice($register_notice_input);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling DefaultApi->noticeControllerRegisterNotice: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **register_notice_input** | [**\OpenAPI\Client\Model\RegisterNoticeInput**](../Model/RegisterNoticeInput.md)|  |

### Return type

[**\OpenAPI\Client\Model\Notice**](../Model/Notice.md)

### Authorization

[bearer](../../README.md#bearer)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `noticeControllerUpdateNotice()`

```php
noticeControllerUpdateNotice($notice_id, $register_notice_input): \OpenAPI\Client\Model\Notice
```

공지사항 수정 (관리자 전용)

공지사항을 수정한다

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure Bearer (JWT) authorization: bearer
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\DefaultApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$notice_id = 3.4; // float | 공지사항 순번
$register_notice_input = new \OpenAPI\Client\Model\RegisterNoticeInput(); // \OpenAPI\Client\Model\RegisterNoticeInput

try {
    $result = $apiInstance->noticeControllerUpdateNotice($notice_id, $register_notice_input);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling DefaultApi->noticeControllerUpdateNotice: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **notice_id** | **float**| 공지사항 순번 |
 **register_notice_input** | [**\OpenAPI\Client\Model\RegisterNoticeInput**](../Model/RegisterNoticeInput.md)|  |

### Return type

[**\OpenAPI\Client\Model\Notice**](../Model/Notice.md)

### Authorization

[bearer](../../README.md#bearer)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `roleControllerGetRoles()`

```php
roleControllerGetRoles($page, $limit, $route, $user_level, $active): \OpenAPI\Client\Model\SearchRoleGroupOutput
```

권한 목록 검색 (관리자, 장부사 전용)

권한 목록을 검색한다

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure Bearer (JWT) authorization: bearer
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\DefaultApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$page = 1; // float | 페이징 페이지 정보
$limit = 10; // float | 페이징 페이지당 목록 수
$route = 'route_example'; // string | 페이징 링크 경로
$user_level = 3.4; // float | 회원 레벨(1: 고객, 2: 장부사, 3: 관리자)
$active = 'active_example'; // string | 활성 여부(0: 비활성, 1: 활성)

try {
    $result = $apiInstance->roleControllerGetRoles($page, $limit, $route, $user_level, $active);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling DefaultApi->roleControllerGetRoles: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **float**| 페이징 페이지 정보 |
 **limit** | **float**| 페이징 페이지당 목록 수 |
 **route** | **string**| 페이징 링크 경로 | [optional]
 **user_level** | **float**| 회원 레벨(1: 고객, 2: 장부사, 3: 관리자) | [optional]
 **active** | **string**| 활성 여부(0: 비활성, 1: 활성) | [optional]

### Return type

[**\OpenAPI\Client\Model\SearchRoleGroupOutput**](../Model/SearchRoleGroupOutput.md)

### Authorization

[bearer](../../README.md#bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `roleControllerRegisterRole()`

```php
roleControllerRegisterRole($create_role_group_input): \OpenAPI\Client\Model\RoleGroup
```

권한 등록 (관리자 전용)

권한을 등록한다

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure Bearer (JWT) authorization: bearer
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\DefaultApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$create_role_group_input = new \OpenAPI\Client\Model\CreateRoleGroupInput(); // \OpenAPI\Client\Model\CreateRoleGroupInput

try {
    $result = $apiInstance->roleControllerRegisterRole($create_role_group_input);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling DefaultApi->roleControllerRegisterRole: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **create_role_group_input** | [**\OpenAPI\Client\Model\CreateRoleGroupInput**](../Model/CreateRoleGroupInput.md)|  |

### Return type

[**\OpenAPI\Client\Model\RoleGroup**](../Model/RoleGroup.md)

### Authorization

[bearer](../../README.md#bearer)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `roleControllerUpdateRole()`

```php
roleControllerUpdateRole($role_group_code, $update_role_group_input): \OpenAPI\Client\Model\RoleGroup
```

권한 수정 (관리자 전용)

권한을 수정한다

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure Bearer (JWT) authorization: bearer
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\DefaultApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$role_group_code = 'role_group_code_example'; // string | 그룹코드명
$update_role_group_input = new \OpenAPI\Client\Model\UpdateRoleGroupInput(); // \OpenAPI\Client\Model\UpdateRoleGroupInput

try {
    $result = $apiInstance->roleControllerUpdateRole($role_group_code, $update_role_group_input);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling DefaultApi->roleControllerUpdateRole: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **role_group_code** | **string**| 그룹코드명 |
 **update_role_group_input** | [**\OpenAPI\Client\Model\UpdateRoleGroupInput**](../Model/UpdateRoleGroupInput.md)|  |

### Return type

[**\OpenAPI\Client\Model\RoleGroup**](../Model/RoleGroup.md)

### Authorization

[bearer](../../README.md#bearer)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `scrapingCodeControllerActivateScrapingCode()`

```php
scrapingCodeControllerActivateScrapingCode($service_id, $version): \OpenAPI\Client\Model\ScrapingCode
```

코드 활성 여부 변경 (관리자 전용: 극히 일부사용자만)

특정 버전 코드를 활성/비활성화 한다

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure Bearer (JWT) authorization: bearer
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\DefaultApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$service_id = 3.4; // float | 서비스 순번
$version = 'version_example'; // string | 버전

try {
    $result = $apiInstance->scrapingCodeControllerActivateScrapingCode($service_id, $version);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling DefaultApi->scrapingCodeControllerActivateScrapingCode: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **service_id** | **float**| 서비스 순번 |
 **version** | **string**| 버전 |

### Return type

[**\OpenAPI\Client\Model\ScrapingCode**](../Model/ScrapingCode.md)

### Authorization

[bearer](../../README.md#bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `scrapingCodeControllerGetScrapingCodes()`

```php
scrapingCodeControllerGetScrapingCodes($page, $limit, $route, $service_id, $active): \OpenAPI\Client\Model\GetScrapingCodesOutput
```

스크래핑 코드 목록 검색 (관리자 전용: 극히 일부사용자만)

스크래핑 코드목록을 검색한다

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure Bearer (JWT) authorization: bearer
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\DefaultApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$page = 1; // float | 페이징 페이지 정보
$limit = 10; // float | 페이징 페이지당 목록 수
$route = 'route_example'; // string | 페이징 링크 경로
$service_id = 3.4; // float | 서비스 순번
$active = 'active_example'; // string | 활성화 여부 (1: 활성, 0: 비활성)

try {
    $result = $apiInstance->scrapingCodeControllerGetScrapingCodes($page, $limit, $route, $service_id, $active);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling DefaultApi->scrapingCodeControllerGetScrapingCodes: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **float**| 페이징 페이지 정보 |
 **limit** | **float**| 페이징 페이지당 목록 수 |
 **route** | **string**| 페이징 링크 경로 | [optional]
 **service_id** | **float**| 서비스 순번 | [optional]
 **active** | **string**| 활성화 여부 (1: 활성, 0: 비활성) | [optional]

### Return type

[**\OpenAPI\Client\Model\GetScrapingCodesOutput**](../Model/GetScrapingCodesOutput.md)

### Authorization

[bearer](../../README.md#bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `scrapingCodeControllerRegisterScrapingCodeVersion()`

```php
scrapingCodeControllerRegisterScrapingCodeVersion($register_scraping_code_version_input): \OpenAPI\Client\Model\ScrapingCode
```

스크래핑 코드 버전 등록 (Github Action >> Amazon SNS)

스크래핑 코드버전을 등록한다

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure Bearer (JWT) authorization: bearer
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\DefaultApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$register_scraping_code_version_input = new \OpenAPI\Client\Model\RegisterScrapingCodeVersionInput(); // \OpenAPI\Client\Model\RegisterScrapingCodeVersionInput

try {
    $result = $apiInstance->scrapingCodeControllerRegisterScrapingCodeVersion($register_scraping_code_version_input);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling DefaultApi->scrapingCodeControllerRegisterScrapingCodeVersion: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **register_scraping_code_version_input** | [**\OpenAPI\Client\Model\RegisterScrapingCodeVersionInput**](../Model/RegisterScrapingCodeVersionInput.md)|  |

### Return type

[**\OpenAPI\Client\Model\ScrapingCode**](../Model/ScrapingCode.md)

### Authorization

[bearer](../../README.md#bearer)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `serviceControllerGetService()`

```php
serviceControllerGetService($service_id): \OpenAPI\Client\Model\Service
```

서비스 조회 (관리자전용)

특정 서비스를 조회한다

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure Bearer (JWT) authorization: bearer
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\DefaultApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$service_id = 3.4; // float

try {
    $result = $apiInstance->serviceControllerGetService($service_id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling DefaultApi->serviceControllerGetService: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **service_id** | **float**|  |

### Return type

[**\OpenAPI\Client\Model\Service**](../Model/Service.md)

### Authorization

[bearer](../../README.md#bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `serviceControllerGetServices()`

```php
serviceControllerGetServices($page, $limit, $route, $category, $jangbu_id): \OpenAPI\Client\Model\GetServicesOutput
```

서비스 목록 검색

서비스 목록을 검색한다

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure Bearer (JWT) authorization: bearer
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\DefaultApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$page = 1; // float | 페이징 페이지 정보
$limit = 10; // float | 페이징 페이지당 목록 수
$route = 'route_example'; // string | 페이징 링크 경로
$category = 계좌통합; // string | 서비스 카테고리
$jangbu_id = 3.4; // float | 장부사 순번

try {
    $result = $apiInstance->serviceControllerGetServices($page, $limit, $route, $category, $jangbu_id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling DefaultApi->serviceControllerGetServices: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **float**| 페이징 페이지 정보 |
 **limit** | **float**| 페이징 페이지당 목록 수 |
 **route** | **string**| 페이징 링크 경로 | [optional]
 **category** | **string**| 서비스 카테고리 | [optional]
 **jangbu_id** | **float**| 장부사 순번 | [optional]

### Return type

[**\OpenAPI\Client\Model\GetServicesOutput**](../Model/GetServicesOutput.md)

### Authorization

[bearer](../../README.md#bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `serviceControllerRegisterService()`

```php
serviceControllerRegisterService($register_service_input): \OpenAPI\Client\Model\Service
```

서비스 등록 (관리자전용: 일부사용자 or 정산관리자)

서비스를 새로 등록한다

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure Bearer (JWT) authorization: bearer
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\DefaultApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$register_service_input = new \OpenAPI\Client\Model\RegisterServiceInput(); // \OpenAPI\Client\Model\RegisterServiceInput

try {
    $result = $apiInstance->serviceControllerRegisterService($register_service_input);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling DefaultApi->serviceControllerRegisterService: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **register_service_input** | [**\OpenAPI\Client\Model\RegisterServiceInput**](../Model/RegisterServiceInput.md)|  |

### Return type

[**\OpenAPI\Client\Model\Service**](../Model/Service.md)

### Authorization

[bearer](../../README.md#bearer)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `serviceControllerUpdateService()`

```php
serviceControllerUpdateService($service_id, $update_service_input): \OpenAPI\Client\Model\Service
```

서비스 수정 (관리자전용: 일부사용자)

서비스를 수정한다

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure Bearer (JWT) authorization: bearer
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\DefaultApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$service_id = 3.4; // float
$update_service_input = new \OpenAPI\Client\Model\UpdateServiceInput(); // \OpenAPI\Client\Model\UpdateServiceInput

try {
    $result = $apiInstance->serviceControllerUpdateService($service_id, $update_service_input);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling DefaultApi->serviceControllerUpdateService: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **service_id** | **float**|  |
 **update_service_input** | [**\OpenAPI\Client\Model\UpdateServiceInput**](../Model/UpdateServiceInput.md)|  |

### Return type

[**\OpenAPI\Client\Model\Service**](../Model/Service.md)

### Authorization

[bearer](../../README.md#bearer)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `workControllerGetWork()`

```php
workControllerGetWork($jangbu_id, $user_id, $work_id): \OpenAPI\Client\Model\Work
```

업무 조회

특정 업무를 조회한다

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure Bearer (JWT) authorization: bearer
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\DefaultApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$jangbu_id = 3.4; // float | 장부사 순번
$user_id = 3.4; // float | 회원 순번
$work_id = 3.4; // float | 업무 순번

try {
    $result = $apiInstance->workControllerGetWork($jangbu_id, $user_id, $work_id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling DefaultApi->workControllerGetWork: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **jangbu_id** | **float**| 장부사 순번 |
 **user_id** | **float**| 회원 순번 |
 **work_id** | **float**| 업무 순번 |

### Return type

[**\OpenAPI\Client\Model\Work**](../Model/Work.md)

### Authorization

[bearer](../../README.md#bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `workControllerGetWorkS3Data()`

```php
workControllerGetWorkS3Data($path): \OpenAPI\Client\Model\GetWorkS3DataResponse
```

(관리자전용) 특정 업무의 S3정보 조회 (업로드 정보 또는 스크래핑 정보)

(관리자전용) 특정 업무의 S3정보를 조회한다.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure Bearer (JWT) authorization: bearer
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\DefaultApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$path = 'path_example'; // string | S3저장 경로

try {
    $result = $apiInstance->workControllerGetWorkS3Data($path);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling DefaultApi->workControllerGetWorkS3Data: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **path** | **string**| S3저장 경로 |

### Return type

[**\OpenAPI\Client\Model\GetWorkS3DataResponse**](../Model/GetWorkS3DataResponse.md)

### Authorization

[bearer](../../README.md#bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `workControllerGetWorkS3DetailLog()`

```php
workControllerGetWorkS3DetailLog($work_id): \OpenAPI\Client\Model\GetWorkS3DetailLogResponse
```

특정 업무의 S3정보의 조회 (업로드 로그)

특정 업무의 S3정보(업로드 로그)를 조회한다.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure Bearer (JWT) authorization: bearer
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\DefaultApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$work_id = 3.4; // float | 업무순번

try {
    $result = $apiInstance->workControllerGetWorkS3DetailLog($work_id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling DefaultApi->workControllerGetWorkS3DetailLog: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **work_id** | **float**| 업무순번 |

### Return type

[**\OpenAPI\Client\Model\GetWorkS3DetailLogResponse**](../Model/GetWorkS3DetailLogResponse.md)

### Authorization

[bearer](../../README.md#bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `workControllerGetWorks()`

```php
workControllerGetWorks($page, $limit, $start_at, $end_at, $route, $service_id, $status, $type, $login_id, $user_name, $jangbu_name, $memo, $count): \OpenAPI\Client\Model\GetWorksOutput
```

업무 목록 검색 (관리자 전용)

업무목록을 검색한다

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure Bearer (JWT) authorization: bearer
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\DefaultApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$page = 1; // float | 페이징 페이지 정보
$limit = 10; // float | 페이징 페이지당 목록 수
$start_at = 20210115; // float | 검색시작일자 (YYYYMMDD)
$end_at = 20210205; // float | 검색종료일자 (YYYYMMDD)
$route = 'route_example'; // string | 페이징 링크 경로
$service_id = 3.4; // float | 서비스 순번
$status = new \OpenAPI\Client\Model\\OpenAPI\Client\Model\ProcessFlag(); // \OpenAPI\Client\Model\ProcessFlag | 상태별
$type = new \OpenAPI\Client\Model\\OpenAPI\Client\Model\WorkRequestType(); // \OpenAPI\Client\Model\WorkRequestType | (업무)요청 타입
$login_id = 'login_id_example'; // string | (로그인) 아이디
$user_name = 'user_name_example'; // string | 상호명
$jangbu_name = 'jangbu_name_example'; // string | 장부사명
$memo = 'memo_example'; // string | 메모내용
$count = 3.4; // float | 접수 건수

try {
    $result = $apiInstance->workControllerGetWorks($page, $limit, $start_at, $end_at, $route, $service_id, $status, $type, $login_id, $user_name, $jangbu_name, $memo, $count);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling DefaultApi->workControllerGetWorks: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **float**| 페이징 페이지 정보 |
 **limit** | **float**| 페이징 페이지당 목록 수 |
 **start_at** | **float**| 검색시작일자 (YYYYMMDD) |
 **end_at** | **float**| 검색종료일자 (YYYYMMDD) |
 **route** | **string**| 페이징 링크 경로 | [optional]
 **service_id** | **float**| 서비스 순번 | [optional]
 **status** | [**\OpenAPI\Client\Model\ProcessFlag**](../Model/.md)| 상태별 | [optional]
 **type** | [**\OpenAPI\Client\Model\WorkRequestType**](../Model/.md)| (업무)요청 타입 | [optional]
 **login_id** | **string**| (로그인) 아이디 | [optional]
 **user_name** | **string**| 상호명 | [optional]
 **jangbu_name** | **string**| 장부사명 | [optional]
 **memo** | **string**| 메모내용 | [optional]
 **count** | **float**| 접수 건수 | [optional]

### Return type

[**\OpenAPI\Client\Model\GetWorksOutput**](../Model/GetWorksOutput.md)

### Authorization

[bearer](../../README.md#bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `workControllerGetWorksByJangbu()`

```php
workControllerGetWorksByJangbu($jangbu_id, $page, $limit, $start_at, $end_at, $route, $service_id, $status, $type, $login_id, $user_name, $memo, $count): \OpenAPI\Client\Model\GetWorksOutput
```

장부사별 업무 목록 검색 (장부사 전용)

장부사별 업무목록을 검색한다

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure Bearer (JWT) authorization: bearer
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\DefaultApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$jangbu_id = 3.4; // float | 장부사 순번
$page = 1; // float | 페이징 페이지 정보
$limit = 10; // float | 페이징 페이지당 목록 수
$start_at = 20210115; // float | 검색시작일자 (YYYYMMDD)
$end_at = 20210205; // float | 검색종료일자 (YYYYMMDD)
$route = 'route_example'; // string | 페이징 링크 경로
$service_id = 3.4; // float | 서비스 순번
$status = new \OpenAPI\Client\Model\\OpenAPI\Client\Model\ProcessFlag(); // \OpenAPI\Client\Model\ProcessFlag | 상태별
$type = new \OpenAPI\Client\Model\\OpenAPI\Client\Model\WorkRequestType(); // \OpenAPI\Client\Model\WorkRequestType | (업무)요청 타입
$login_id = 'login_id_example'; // string | (로그인) 아이디
$user_name = 'user_name_example'; // string | 상호명
$memo = 'memo_example'; // string | 메모내용
$count = 3.4; // float | 데이터 건수

try {
    $result = $apiInstance->workControllerGetWorksByJangbu($jangbu_id, $page, $limit, $start_at, $end_at, $route, $service_id, $status, $type, $login_id, $user_name, $memo, $count);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling DefaultApi->workControllerGetWorksByJangbu: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **jangbu_id** | **float**| 장부사 순번 |
 **page** | **float**| 페이징 페이지 정보 |
 **limit** | **float**| 페이징 페이지당 목록 수 |
 **start_at** | **float**| 검색시작일자 (YYYYMMDD) |
 **end_at** | **float**| 검색종료일자 (YYYYMMDD) |
 **route** | **string**| 페이징 링크 경로 | [optional]
 **service_id** | **float**| 서비스 순번 | [optional]
 **status** | [**\OpenAPI\Client\Model\ProcessFlag**](../Model/.md)| 상태별 | [optional]
 **type** | [**\OpenAPI\Client\Model\WorkRequestType**](../Model/.md)| (업무)요청 타입 | [optional]
 **login_id** | **string**| (로그인) 아이디 | [optional]
 **user_name** | **string**| 상호명 | [optional]
 **memo** | **string**| 메모내용 | [optional]
 **count** | **float**| 데이터 건수 | [optional]

### Return type

[**\OpenAPI\Client\Model\GetWorksOutput**](../Model/GetWorksOutput.md)

### Authorization

[bearer](../../README.md#bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `workControllerGetWorksByUser()`

```php
workControllerGetWorksByUser($user_id, $jangbu_id, $page, $limit, $start_at, $end_at, $route, $status, $memo, $count): \OpenAPI\Client\Model\GetWorksOutput
```

사용자별 업무 목록 검색 (고객 전용)

사용자별 업무목록을 검색한다

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure Bearer (JWT) authorization: bearer
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\DefaultApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$user_id = 3.4; // float | 회원 순번
$jangbu_id = 3.4; // float | 장부사 순번
$page = 1; // float | 페이징 페이지 정보
$limit = 10; // float | 페이징 페이지당 목록 수
$start_at = 20210115; // float | 검색시작일자 (YYYYMMDD)
$end_at = 20210205; // float | 검색종료일자 (YYYYMMDD)
$route = 'route_example'; // string | 페이징 링크 경로
$status = new \OpenAPI\Client\Model\\OpenAPI\Client\Model\ProcessFlag(); // \OpenAPI\Client\Model\ProcessFlag | 상태별
$memo = 'memo_example'; // string | 메모내용
$count = 3.4; // float | 데이터 건수

try {
    $result = $apiInstance->workControllerGetWorksByUser($user_id, $jangbu_id, $page, $limit, $start_at, $end_at, $route, $status, $memo, $count);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling DefaultApi->workControllerGetWorksByUser: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user_id** | **float**| 회원 순번 |
 **jangbu_id** | **float**| 장부사 순번 |
 **page** | **float**| 페이징 페이지 정보 |
 **limit** | **float**| 페이징 페이지당 목록 수 |
 **start_at** | **float**| 검색시작일자 (YYYYMMDD) |
 **end_at** | **float**| 검색종료일자 (YYYYMMDD) |
 **route** | **string**| 페이징 링크 경로 | [optional]
 **status** | [**\OpenAPI\Client\Model\ProcessFlag**](../Model/.md)| 상태별 | [optional]
 **memo** | **string**| 메모내용 | [optional]
 **count** | **float**| 데이터 건수 | [optional]

### Return type

[**\OpenAPI\Client\Model\GetWorksOutput**](../Model/GetWorksOutput.md)

### Authorization

[bearer](../../README.md#bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `workControllerUpdateWork()`

```php
workControllerUpdateWork($jangbu_id, $user_id, $work_id): \OpenAPI\Client\Model\Work
```

(접수 또는 승인건만) 업무 수정 (관리자 전용: 취소처리)

(접수 또는 승인건만) 업무를 수정한다

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure Bearer (JWT) authorization: bearer
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\DefaultApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$jangbu_id = 3.4; // float | 장부사 순번
$user_id = 3.4; // float | 회원 순번
$work_id = 3.4; // float | 업무 순번

try {
    $result = $apiInstance->workControllerUpdateWork($jangbu_id, $user_id, $work_id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling DefaultApi->workControllerUpdateWork: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **jangbu_id** | **float**| 장부사 순번 |
 **user_id** | **float**| 회원 순번 |
 **work_id** | **float**| 업무 순번 |

### Return type

[**\OpenAPI\Client\Model\Work**](../Model/Work.md)

### Authorization

[bearer](../../README.md#bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)
