# DefaultApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**adjustControllerGetChargeJangbuPartnership**](DefaultApi.md#adjustControllerGetChargeJangbuPartnership) | **GET** /public/api/adjust/jangbu/{jangbuId}/yearMonth/{yearMonth}/partnership | (해당연월) 장부사의 파트너쉽 금액 조회
[**adjustControllerGetChargeJangbuPreview**](DefaultApi.md#adjustControllerGetChargeJangbuPreview) | **GET** /public/api/adjust/jangbu/{jangbuId}/yearMonth/{yearMonth}/preview | 
[**adjustControllerRegisterAdjust**](DefaultApi.md#adjustControllerRegisterAdjust) | **PUT** /public/api/adjust/jangbu/{jangbuId}/yearMonth/{yearMonth}/step/{step} | 정산 등록 (관리자 전용: 극히 일부사용자만)
[**adjustControllerSearchAdjustJangbuServices**](DefaultApi.md#adjustControllerSearchAdjustJangbuServices) | **GET** /public/api/adjust/jangbu/{jangbuId}/yearMonth/{yearMonth} | 장부사 서비스별 단가 검색 (장부사,관리자 전용)
[**adjustControllerSearchChargeJangbuFromJangbu**](DefaultApi.md#adjustControllerSearchChargeJangbuFromJangbu) | **GET** /public/api/adjust/jangbu/{jangbuId} | (특정 장부사의) 정산목록 검색 (장부사 전용)
[**adjustControllerSearchChargeJangbuUserServices**](DefaultApi.md#adjustControllerSearchChargeJangbuUserServices) | **GET** /public/api/adjust/jangbu/{jangbuId}/yearMonth/{yearMonth}/service/{serviceId} | 장부사 특정 서비스 회원별 요금목록 검색 (장부사,관리자 전용)
[**adjustControllerSearchChargeJangbus**](DefaultApi.md#adjustControllerSearchChargeJangbus) | **GET** /public/api/adjust | 정산내역 목록 검색 (관리자 전용)
[**adjustControllerSendChargeJangbuMailTest**](DefaultApi.md#adjustControllerSendChargeJangbuMailTest) | **POST** /public/api/adjust/jangbu/{jangbuId}/yearMonth/{yearMonth}/testmail | 
[**adjustControllerUpdateAdjustJangbuService**](DefaultApi.md#adjustControllerUpdateAdjustJangbuService) | **PATCH** /public/api/adjust/jangbu/{jangbuId}/yearMonth/{yearMonth}/service/{serviceId} | (해당연월) 장부사 특정 서비스 단가를 수정
[**adjustControllerUpdateChargeJangbuPaid**](DefaultApi.md#adjustControllerUpdateChargeJangbuPaid) | **PATCH** /public/api/adjust/jangbu/{jangbuId}/yearMonth/{yearMonth}/paid | 정산내역 수납여부 업데이트 (관리자 전용: 극히 일부사용자만)
[**adjustControllerUpdateChargeJangbuPartnership**](DefaultApi.md#adjustControllerUpdateChargeJangbuPartnership) | **PATCH** /public/api/adjust/jangbu/{jangbuId}/yearMonth/{yearMonth}/partnership | (해당연월) 장부사의 파트너쉽 금액 수정
[**adjustControllerUpdateChargeJangbuStatus**](DefaultApi.md#adjustControllerUpdateChargeJangbuStatus) | **PATCH** /public/api/adjust/jangbu/{jangbuId}/yearMonth/{yearMonth}/status | 정산내역 비공개 → 공개 상태값 업데이트 및 정산내역 메일 발송 (관리자 전용: 극히 일부사용자만)
[**authControllerDeleteToken**](DefaultApi.md#authControllerDeleteToken) | **DELETE** /public/api/auth/{refreshToken} | 로그아웃 (토큰삭제)
[**authControllerLogin**](DefaultApi.md#authControllerLogin) | **POST** /public/api/auth | 토큰발급
[**authControllerRefresh**](DefaultApi.md#authControllerRefresh) | **PUT** /public/api/auth | 토큰갱신
[**errorControllerGetCert**](DefaultApi.md#errorControllerGetCert) | **GET** /public/api/error/{errorId}/cert | 인증서 조회 (관리자 전용: 극히 일부사용자만)
[**errorControllerGetError**](DefaultApi.md#errorControllerGetError) | **GET** /public/api/error/{errorId} | 에러 조회 (관리자 전용)
[**errorControllerGetErrors**](DefaultApi.md#errorControllerGetErrors) | **GET** /public/api/error | 에러 목록 검색 (관리자 전용)
[**jangbuControllerGetJangbu**](DefaultApi.md#jangbuControllerGetJangbu) | **GET** /public/api/jangbu/{jangbuId} | 장부사 조회 (관리자 전용)
[**jangbuControllerGetJangbus**](DefaultApi.md#jangbuControllerGetJangbus) | **GET** /public/api/jangbu | 장부사 목록 검색 (관리자 전용)
[**jangbuControllerGetJangbusWithChargeJangbuPartnership**](DefaultApi.md#jangbuControllerGetJangbusWithChargeJangbuPartnership) | **GET** /public/api/jangbu/yearMonth/{yearMonth} | (특정연월의 파트너쉽 단가정보와) 장부사 검색 (관리자 전용)
[**jangbuControllerRegisterJangbu**](DefaultApi.md#jangbuControllerRegisterJangbu) | **POST** /public/api/jangbu | 장부사 등록 (관리자 전용)
[**jangbuControllerUpdateJangbu**](DefaultApi.md#jangbuControllerUpdateJangbu) | **PATCH** /public/api/jangbu/{jangbuId} | 장부사 수정 (관리자 전용)
[**memberControllerFindMember**](DefaultApi.md#memberControllerFindMember) | **POST** /public/api/member/find/account | 아이디 찾기 또는 패스워드 찾기
[**memberControllerGetMember**](DefaultApi.md#memberControllerGetMember) | **GET** /public/api/member/{userId} | 회원 조회
[**memberControllerGetMembers**](DefaultApi.md#memberControllerGetMembers) | **GET** /public/api/member | 회원 목록 검색
[**memberControllerGetResetPassword**](DefaultApi.md#memberControllerGetResetPassword) | **GET** /public/api/member/recover/{recoveryKey} | 패스워드 재설정 조회
[**memberControllerRegisterCustomer**](DefaultApi.md#memberControllerRegisterCustomer) | **POST** /public/api/member/user | (고객사) 계정 등록
[**memberControllerRegisterMember**](DefaultApi.md#memberControllerRegisterMember) | **POST** /public/api/member | (관리자 또는 장부사) 계정 등록 (관라지만 이용)
[**memberControllerResetPassword**](DefaultApi.md#memberControllerResetPassword) | **PATCH** /public/api/member/recover/{recoveryKey} | (계정찾기진행시) 패스워드 재설정 처리
[**memberControllerResetPasswordWithIdEmail**](DefaultApi.md#memberControllerResetPasswordWithIdEmail) | **PATCH** /public/api/member/{memberId}/reset | 로그인 패스워드 초기화
[**memberControllerSaveUserRoleGroup**](DefaultApi.md#memberControllerSaveUserRoleGroup) | **PATCH** /public/api/member/{userId}/role/{roleGroupCode} | 계정의 권한그룹 저장
[**memberControllerUpdateMember**](DefaultApi.md#memberControllerUpdateMember) | **PATCH** /public/api/member/{userId} | 계정 수정
[**mobileAppControllerGetAppVersions**](DefaultApi.md#mobileAppControllerGetAppVersions) | **GET** /public/api/app/version | 앱 버전 목록 검색 (관리자 전용)
[**mobileAppControllerGetJangbuMessage**](DefaultApi.md#mobileAppControllerGetJangbuMessage) | **GET** /public/api/app/jangbu/{jangbuId}/message/{messageId} | (특정 장부사의) 메시지 조회 (관리자, 장부사 전용)
[**mobileAppControllerGetJangbuMessages**](DefaultApi.md#mobileAppControllerGetJangbuMessages) | **GET** /public/api/app/jangbu/{jangbuId}/message | (특정 장부사의) 메시지 목록 검색 (관리자, 장부사 전용)
[**mobileAppControllerGetUsingAppUsers**](DefaultApi.md#mobileAppControllerGetUsingAppUsers) | **GET** /public/api/app/user | 앱 사용자 목록 검색 (관리자 전용)
[**mobileAppControllerRegisterAppVersion**](DefaultApi.md#mobileAppControllerRegisterAppVersion) | **POST** /public/api/app/version | 앱 버전 등록 (관리자 전용)
[**mobileAppControllerUpdateAppVersion**](DefaultApi.md#mobileAppControllerUpdateAppVersion) | **PATCH** /public/api/app/version/{versionId} | 앱 버전 수정 (관리자 전용)
[**noticeControllerDeleteNotice**](DefaultApi.md#noticeControllerDeleteNotice) | **DELETE** /public/api/notice/{noticeId} | 공지사항 삭제 (관리자 전용)
[**noticeControllerGetNotice**](DefaultApi.md#noticeControllerGetNotice) | **GET** /public/api/notice/{noticeId} | 공지사항 조회 (관리자, 장부사 전용)
[**noticeControllerGetNotices**](DefaultApi.md#noticeControllerGetNotices) | **GET** /public/api/notice | 공지사항 검색 (관리자, 장부사 전용)
[**noticeControllerRegisterNotice**](DefaultApi.md#noticeControllerRegisterNotice) | **POST** /public/api/notice | 공지사항 등록 (관리자 전용)
[**noticeControllerUpdateNotice**](DefaultApi.md#noticeControllerUpdateNotice) | **PUT** /public/api/notice/{noticeId} | 공지사항 수정 (관리자 전용)
[**roleControllerGetRoles**](DefaultApi.md#roleControllerGetRoles) | **GET** /public/api/role | 권한 목록 검색 (관리자, 장부사 전용)
[**roleControllerRegisterRole**](DefaultApi.md#roleControllerRegisterRole) | **POST** /public/api/role | 권한 등록 (관리자 전용)
[**roleControllerUpdateRole**](DefaultApi.md#roleControllerUpdateRole) | **PUT** /public/api/role/{roleGroupCode} | 권한 수정 (관리자 전용)
[**scrapingCodeControllerActivateScrapingCode**](DefaultApi.md#scrapingCodeControllerActivateScrapingCode) | **PATCH** /public/api/scraping-code/{serviceId} | 코드 활성 여부 변경 (관리자 전용: 극히 일부사용자만)
[**scrapingCodeControllerGetScrapingCodes**](DefaultApi.md#scrapingCodeControllerGetScrapingCodes) | **GET** /public/api/scraping-code | 스크래핑 코드 목록 검색 (관리자 전용: 극히 일부사용자만)
[**scrapingCodeControllerRegisterScrapingCodeVersion**](DefaultApi.md#scrapingCodeControllerRegisterScrapingCodeVersion) | **POST** /public/api/scraping-code | 스크래핑 코드 버전 등록 (Github Action &gt;&gt; Amazon SNS)
[**serviceControllerGetService**](DefaultApi.md#serviceControllerGetService) | **GET** /public/api/service/{serviceId} | 서비스 조회 (관리자전용)
[**serviceControllerGetServices**](DefaultApi.md#serviceControllerGetServices) | **GET** /public/api/service | 서비스 목록 검색
[**serviceControllerRegisterService**](DefaultApi.md#serviceControllerRegisterService) | **POST** /public/api/service | 서비스 등록 (관리자전용: 일부사용자 or 정산관리자)
[**serviceControllerUpdateService**](DefaultApi.md#serviceControllerUpdateService) | **PATCH** /public/api/service/{serviceId} | 서비스 수정 (관리자전용: 일부사용자)
[**workControllerGetWork**](DefaultApi.md#workControllerGetWork) | **GET** /public/api/jangbu/{jangbuId}/user/{userId}/work/{workId} | 업무 조회
[**workControllerGetWorkS3Data**](DefaultApi.md#workControllerGetWorkS3Data) | **GET** /public/api/work/log | (관리자전용) 특정 업무의 S3정보 조회 (업로드 정보 또는 스크래핑 정보)
[**workControllerGetWorkS3DetailLog**](DefaultApi.md#workControllerGetWorkS3DetailLog) | **GET** /public/api/work/log-detail/{workId} | 특정 업무의 S3정보의 조회 (업로드 로그)
[**workControllerGetWorks**](DefaultApi.md#workControllerGetWorks) | **GET** /public/api/work | 업무 목록 검색 (관리자 전용)
[**workControllerGetWorksByJangbu**](DefaultApi.md#workControllerGetWorksByJangbu) | **GET** /public/api/jangbu/{jangbuId}/work | 장부사별 업무 목록 검색 (장부사 전용)
[**workControllerGetWorksByUser**](DefaultApi.md#workControllerGetWorksByUser) | **GET** /public/api/jangbu/{jangbuId}/user/{userId}/work | 사용자별 업무 목록 검색 (고객 전용)
[**workControllerUpdateWork**](DefaultApi.md#workControllerUpdateWork) | **PATCH** /public/api/jangbu/{jangbuId}/user/{userId}/work/{workId} | (접수 또는 승인건만) 업무 수정 (관리자 전용: 취소처리)


<a name="adjustControllerGetChargeJangbuPartnership"></a>
# **adjustControllerGetChargeJangbuPartnership**
> ChargeJangbuPartnership adjustControllerGetChargeJangbuPartnership(jangbuId, yearMonth)

(해당연월) 장부사의 파트너쉽 금액 조회

(해당연월) 장부사의 파트너쉽 금액을 조회한다.

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.DefaultApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost");
    
    // Configure HTTP bearer authorization: bearer
    HttpBearerAuth bearer = (HttpBearerAuth) defaultClient.getAuthentication("bearer");
    bearer.setBearerToken("BEARER TOKEN");

    DefaultApi apiInstance = new DefaultApi(defaultClient);
    BigDecimal jangbuId = new BigDecimal(78); // BigDecimal | 
    BigDecimal yearMonth = new BigDecimal(78); // BigDecimal | 
    try {
      ChargeJangbuPartnership result = apiInstance.adjustControllerGetChargeJangbuPartnership(jangbuId, yearMonth);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling DefaultApi#adjustControllerGetChargeJangbuPartnership");
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
 **jangbuId** | **BigDecimal**|  |
 **yearMonth** | **BigDecimal**|  |

### Return type

[**ChargeJangbuPartnership**](ChargeJangbuPartnership.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | (해당연월) 장부사의 파트너쉽 금액정보를 반환 |  -  |
**404** | 장부사 파트너쉽 금액정보가 없는 경우 |  -  |

<a name="adjustControllerGetChargeJangbuPreview"></a>
# **adjustControllerGetChargeJangbuPreview**
> GetChargeJangbuPreviewOutput adjustControllerGetChargeJangbuPreview(jangbuId, yearMonth)



해당연월의 장부사 정산내역 결과 미리보기

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.DefaultApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost");
    
    // Configure HTTP bearer authorization: bearer
    HttpBearerAuth bearer = (HttpBearerAuth) defaultClient.getAuthentication("bearer");
    bearer.setBearerToken("BEARER TOKEN");

    DefaultApi apiInstance = new DefaultApi(defaultClient);
    BigDecimal jangbuId = new BigDecimal(78); // BigDecimal | 장부사 순번
    BigDecimal yearMonth = new BigDecimal(78); // BigDecimal | 해당연월 (YYYYMM)
    try {
      GetChargeJangbuPreviewOutput result = apiInstance.adjustControllerGetChargeJangbuPreview(jangbuId, yearMonth);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling DefaultApi#adjustControllerGetChargeJangbuPreview");
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
 **jangbuId** | **BigDecimal**| 장부사 순번 |
 **yearMonth** | **BigDecimal**| 해당연월 (YYYYMM) |

### Return type

[**GetChargeJangbuPreviewOutput**](GetChargeJangbuPreviewOutput.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | 해당연월 정산내역 미리보기 HTML내용 반환 |  -  |
**404** | 장부사 또는 장부사 회원 또는 정산내역 또는 파트너쉽 정보를 찾을 수 없는경우 |  -  |

<a name="adjustControllerRegisterAdjust"></a>
# **adjustControllerRegisterAdjust**
> RegisterAdjustOutput adjustControllerRegisterAdjust(jangbuId, yearMonth, step)

정산 등록 (관리자 전용: 극히 일부사용자만)

정산을 등록한다 (1,2 단계 순차적으로 진행)

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.DefaultApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost");
    
    // Configure HTTP bearer authorization: bearer
    HttpBearerAuth bearer = (HttpBearerAuth) defaultClient.getAuthentication("bearer");
    bearer.setBearerToken("BEARER TOKEN");

    DefaultApi apiInstance = new DefaultApi(defaultClient);
    BigDecimal jangbuId = new BigDecimal(78); // BigDecimal | 장부사 순번
    BigDecimal yearMonth = new BigDecimal(78); // BigDecimal | 해당연월 (YYYYMM)
    BigDecimal step = new BigDecimal(78); // BigDecimal | 단계 순번
    try {
      RegisterAdjustOutput result = apiInstance.adjustControllerRegisterAdjust(jangbuId, yearMonth, step);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling DefaultApi#adjustControllerRegisterAdjust");
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
 **jangbuId** | **BigDecimal**| 장부사 순번 |
 **yearMonth** | **BigDecimal**| 해당연월 (YYYYMM) |
 **step** | **BigDecimal**| 단계 순번 |

### Return type

[**RegisterAdjustOutput**](RegisterAdjustOutput.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | 성공 : 삭제후 재등록된 정산내역 정보를 반환 |  -  |
**400** | 잘못된 정산등록 단계를 입력한 경우 |  -  |
**404** | 장부사가 존재하지 않거나 과금대상이 아닌경우 또는 (Step2의 경우)해당연월의 장부사 서비스별 단가목록이 존재하지 않음. |  -  |
**406** | 이미 장부사에게 공개된 정산내역은 재등록이 불가능 |  -  |

<a name="adjustControllerSearchAdjustJangbuServices"></a>
# **adjustControllerSearchAdjustJangbuServices**
> SearchAdjustJangbuServicesOutput adjustControllerSearchAdjustJangbuServices(jangbuId, yearMonth, page, limit, route)

장부사 서비스별 단가 검색 (장부사,관리자 전용)

특정 장부사의 특정연월에 해당하는 서비스별 단가를 검색한다

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.DefaultApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost");
    
    // Configure HTTP bearer authorization: bearer
    HttpBearerAuth bearer = (HttpBearerAuth) defaultClient.getAuthentication("bearer");
    bearer.setBearerToken("BEARER TOKEN");

    DefaultApi apiInstance = new DefaultApi(defaultClient);
    BigDecimal jangbuId = new BigDecimal(78); // BigDecimal | 장부사 순번
    BigDecimal yearMonth = new BigDecimal(78); // BigDecimal | 해당연월 (YYYYMM)
    BigDecimal page = new BigDecimal(78); // BigDecimal | 페이징 페이지 정보
    BigDecimal limit = new BigDecimal(78); // BigDecimal | 페이징 페이지당 목록 수
    String route = "route_example"; // String | 페이징 링크 경로
    try {
      SearchAdjustJangbuServicesOutput result = apiInstance.adjustControllerSearchAdjustJangbuServices(jangbuId, yearMonth, page, limit, route);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling DefaultApi#adjustControllerSearchAdjustJangbuServices");
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
 **jangbuId** | **BigDecimal**| 장부사 순번 |
 **yearMonth** | **BigDecimal**| 해당연월 (YYYYMM) |
 **page** | **BigDecimal**| 페이징 페이지 정보 |
 **limit** | **BigDecimal**| 페이징 페이지당 목록 수 |
 **route** | **String**| 페이징 링크 경로 | [optional]

### Return type

[**SearchAdjustJangbuServicesOutput**](SearchAdjustJangbuServicesOutput.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | 성공 : 장부사 서비스별 단가목록 반환 |  -  |
**404** | 존재하지 않은 정산내역 혹은 (장부사만 해당함) 해당 정산내역이 미완료 상태인 경우 |  -  |

<a name="adjustControllerSearchChargeJangbuFromJangbu"></a>
# **adjustControllerSearchChargeJangbuFromJangbu**
> SearchChargeJangbusOutput adjustControllerSearchChargeJangbuFromJangbu(jangbuId, page, limit, route, yearMonth)

(특정 장부사의) 정산목록 검색 (장부사 전용)

(특정 장부사의) 특정 정산목록을 검색한다

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.DefaultApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost");
    
    // Configure HTTP bearer authorization: bearer
    HttpBearerAuth bearer = (HttpBearerAuth) defaultClient.getAuthentication("bearer");
    bearer.setBearerToken("BEARER TOKEN");

    DefaultApi apiInstance = new DefaultApi(defaultClient);
    BigDecimal jangbuId = new BigDecimal(78); // BigDecimal | 장부사 순번
    BigDecimal page = new BigDecimal(78); // BigDecimal | 페이징 페이지 정보
    BigDecimal limit = new BigDecimal(78); // BigDecimal | 페이징 페이지당 목록 수
    String route = "route_example"; // String | 페이징 링크 경로
    BigDecimal yearMonth = new BigDecimal(78); // BigDecimal | 정산연월 (YYYYMM)
    try {
      SearchChargeJangbusOutput result = apiInstance.adjustControllerSearchChargeJangbuFromJangbu(jangbuId, page, limit, route, yearMonth);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling DefaultApi#adjustControllerSearchChargeJangbuFromJangbu");
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
 **jangbuId** | **BigDecimal**| 장부사 순번 |
 **page** | **BigDecimal**| 페이징 페이지 정보 |
 **limit** | **BigDecimal**| 페이징 페이지당 목록 수 |
 **route** | **String**| 페이징 링크 경로 | [optional]
 **yearMonth** | **BigDecimal**| 정산연월 (YYYYMM) | [optional]

### Return type

[**SearchChargeJangbusOutput**](SearchChargeJangbusOutput.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | 성공 : 장부사별 정산내역 목록 반환 |  -  |

<a name="adjustControllerSearchChargeJangbuUserServices"></a>
# **adjustControllerSearchChargeJangbuUserServices**
> SearchChargeJangbuUserServicesOutput adjustControllerSearchChargeJangbuUserServices(jangbuId, yearMonth, serviceId, page, limit, route)

장부사 특정 서비스 회원별 요금목록 검색 (장부사,관리자 전용)

장부사 특정 서비스 회원별 요금목록을 검색한다

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.DefaultApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost");
    
    // Configure HTTP bearer authorization: bearer
    HttpBearerAuth bearer = (HttpBearerAuth) defaultClient.getAuthentication("bearer");
    bearer.setBearerToken("BEARER TOKEN");

    DefaultApi apiInstance = new DefaultApi(defaultClient);
    BigDecimal jangbuId = new BigDecimal(78); // BigDecimal | 장부사 순번
    BigDecimal yearMonth = new BigDecimal(78); // BigDecimal | 해당연월 (YYYYMM)
    BigDecimal serviceId = new BigDecimal(78); // BigDecimal | 서비스 순번
    BigDecimal page = new BigDecimal(78); // BigDecimal | 페이징 페이지 정보
    BigDecimal limit = new BigDecimal(78); // BigDecimal | 페이징 페이지당 목록 수
    String route = "route_example"; // String | 페이징 링크 경로
    try {
      SearchChargeJangbuUserServicesOutput result = apiInstance.adjustControllerSearchChargeJangbuUserServices(jangbuId, yearMonth, serviceId, page, limit, route);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling DefaultApi#adjustControllerSearchChargeJangbuUserServices");
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
 **jangbuId** | **BigDecimal**| 장부사 순번 |
 **yearMonth** | **BigDecimal**| 해당연월 (YYYYMM) |
 **serviceId** | **BigDecimal**| 서비스 순번 |
 **page** | **BigDecimal**| 페이징 페이지 정보 |
 **limit** | **BigDecimal**| 페이징 페이지당 목록 수 |
 **route** | **String**| 페이징 링크 경로 | [optional]

### Return type

[**SearchChargeJangbuUserServicesOutput**](SearchChargeJangbuUserServicesOutput.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | 성공 : 장부사 서비스 회원별 요금목록 반환 |  -  |
**404** | 존재하지 않은 정산내역 혹은 (장부사만 해당함) 해당 정산내역이 미완료 상태인 경우 |  -  |

<a name="adjustControllerSearchChargeJangbus"></a>
# **adjustControllerSearchChargeJangbus**
> SearchChargeJangbusOutput adjustControllerSearchChargeJangbus(page, limit, route, jangbuId, yearMonth)

정산내역 목록 검색 (관리자 전용)

정산내역 목록을 검색한다

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.DefaultApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost");
    
    // Configure HTTP bearer authorization: bearer
    HttpBearerAuth bearer = (HttpBearerAuth) defaultClient.getAuthentication("bearer");
    bearer.setBearerToken("BEARER TOKEN");

    DefaultApi apiInstance = new DefaultApi(defaultClient);
    BigDecimal page = new BigDecimal(78); // BigDecimal | 페이징 페이지 정보
    BigDecimal limit = new BigDecimal(78); // BigDecimal | 페이징 페이지당 목록 수
    String route = "route_example"; // String | 페이징 링크 경로
    BigDecimal jangbuId = new BigDecimal(78); // BigDecimal | 장부사 순번
    BigDecimal yearMonth = new BigDecimal(78); // BigDecimal | 정산연월 (YYYYMM)
    try {
      SearchChargeJangbusOutput result = apiInstance.adjustControllerSearchChargeJangbus(page, limit, route, jangbuId, yearMonth);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling DefaultApi#adjustControllerSearchChargeJangbus");
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
 **route** | **String**| 페이징 링크 경로 | [optional]
 **jangbuId** | **BigDecimal**| 장부사 순번 | [optional]
 **yearMonth** | **BigDecimal**| 정산연월 (YYYYMM) | [optional]

### Return type

[**SearchChargeJangbusOutput**](SearchChargeJangbusOutput.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | 성공 : 전체 장부사 정산내역 목록을 반환 |  -  |

<a name="adjustControllerSendChargeJangbuMailTest"></a>
# **adjustControllerSendChargeJangbuMailTest**
> SendChargeJangbuMailTestOutput adjustControllerSendChargeJangbuMailTest(jangbuId, yearMonth, sendChagreJangbuMailTestInput)



해당연월의 정산내역 결과 테스트 메일 전송

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.DefaultApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost");
    
    // Configure HTTP bearer authorization: bearer
    HttpBearerAuth bearer = (HttpBearerAuth) defaultClient.getAuthentication("bearer");
    bearer.setBearerToken("BEARER TOKEN");

    DefaultApi apiInstance = new DefaultApi(defaultClient);
    BigDecimal jangbuId = new BigDecimal(78); // BigDecimal | 장부사 순번
    BigDecimal yearMonth = new BigDecimal(78); // BigDecimal | 해당연월 (YYYYMM)
    SendChagreJangbuMailTestInput sendChagreJangbuMailTestInput = new SendChagreJangbuMailTestInput(); // SendChagreJangbuMailTestInput | 
    try {
      SendChargeJangbuMailTestOutput result = apiInstance.adjustControllerSendChargeJangbuMailTest(jangbuId, yearMonth, sendChagreJangbuMailTestInput);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling DefaultApi#adjustControllerSendChargeJangbuMailTest");
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
 **jangbuId** | **BigDecimal**| 장부사 순번 |
 **yearMonth** | **BigDecimal**| 해당연월 (YYYYMM) |
 **sendChagreJangbuMailTestInput** | [**SendChagreJangbuMailTestInput**](SendChagreJangbuMailTestInput.md)|  |

### Return type

[**SendChargeJangbuMailTestOutput**](SendChargeJangbuMailTestOutput.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | 해당연월의 정산내역 결과 테스트 메일을 전송한다 |  -  |
**404** | 장부사 또는 장부사 회원 또는 정산내역 또는 파트너쉽 정보를 찾을 수 없는경우 |  -  |

<a name="adjustControllerUpdateAdjustJangbuService"></a>
# **adjustControllerUpdateAdjustJangbuService**
> AdjustJangbuService adjustControllerUpdateAdjustJangbuService(jangbuId, yearMonth, serviceId, updateAdjustJangbuServiceInput)

(해당연월) 장부사 특정 서비스 단가를 수정

(해당연월) 장부사 특정 서비스 단가를 수정한다.

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.DefaultApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost");
    
    // Configure HTTP bearer authorization: bearer
    HttpBearerAuth bearer = (HttpBearerAuth) defaultClient.getAuthentication("bearer");
    bearer.setBearerToken("BEARER TOKEN");

    DefaultApi apiInstance = new DefaultApi(defaultClient);
    BigDecimal jangbuId = new BigDecimal(78); // BigDecimal | 
    BigDecimal yearMonth = new BigDecimal(78); // BigDecimal | 
    BigDecimal serviceId = new BigDecimal(78); // BigDecimal | 
    UpdateAdjustJangbuServiceInput updateAdjustJangbuServiceInput = new UpdateAdjustJangbuServiceInput(); // UpdateAdjustJangbuServiceInput | 
    try {
      AdjustJangbuService result = apiInstance.adjustControllerUpdateAdjustJangbuService(jangbuId, yearMonth, serviceId, updateAdjustJangbuServiceInput);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling DefaultApi#adjustControllerUpdateAdjustJangbuService");
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
 **jangbuId** | **BigDecimal**|  |
 **yearMonth** | **BigDecimal**|  |
 **serviceId** | **BigDecimal**|  |
 **updateAdjustJangbuServiceInput** | [**UpdateAdjustJangbuServiceInput**](UpdateAdjustJangbuServiceInput.md)|  |

### Return type

[**AdjustJangbuService**](AdjustJangbuService.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | (수정된) 해당연월 장부사 특정 서비스 단가를 반환 |  -  |
**404** | 해당 장부사 서비스별 단가내역이 존재하지 않는 경우 |  -  |
**406** | 이미 장부사에게 공개된 정산내역의 경우 |  -  |

<a name="adjustControllerUpdateChargeJangbuPaid"></a>
# **adjustControllerUpdateChargeJangbuPaid**
> ChargeJangbu adjustControllerUpdateChargeJangbuPaid(jangbuId, yearMonth, updateChargeJangbuPaidInput)

정산내역 수납여부 업데이트 (관리자 전용: 극히 일부사용자만)

정산내역의 수납여부를 업데이트 한다

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.DefaultApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost");
    
    // Configure HTTP bearer authorization: bearer
    HttpBearerAuth bearer = (HttpBearerAuth) defaultClient.getAuthentication("bearer");
    bearer.setBearerToken("BEARER TOKEN");

    DefaultApi apiInstance = new DefaultApi(defaultClient);
    BigDecimal jangbuId = new BigDecimal(78); // BigDecimal | 장부사 순번
    BigDecimal yearMonth = new BigDecimal(78); // BigDecimal | 해당연월 (YYYYMM)
    UpdateChargeJangbuPaidInput updateChargeJangbuPaidInput = new UpdateChargeJangbuPaidInput(); // UpdateChargeJangbuPaidInput | 
    try {
      ChargeJangbu result = apiInstance.adjustControllerUpdateChargeJangbuPaid(jangbuId, yearMonth, updateChargeJangbuPaidInput);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling DefaultApi#adjustControllerUpdateChargeJangbuPaid");
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
 **jangbuId** | **BigDecimal**| 장부사 순번 |
 **yearMonth** | **BigDecimal**| 해당연월 (YYYYMM) |
 **updateChargeJangbuPaidInput** | [**UpdateChargeJangbuPaidInput**](UpdateChargeJangbuPaidInput.md)|  |

### Return type

[**ChargeJangbu**](ChargeJangbu.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | 성공 : 업데이트된 정산내역 정보를 반환 |  -  |
**404** | 정산내역이 존재하지 않음 |  -  |

<a name="adjustControllerUpdateChargeJangbuPartnership"></a>
# **adjustControllerUpdateChargeJangbuPartnership**
> ChargeJangbuPartnership adjustControllerUpdateChargeJangbuPartnership(jangbuId, yearMonth, updateChargeJangbuPartnershipInput)

(해당연월) 장부사의 파트너쉽 금액 수정

(해당연월) 장부사의 파트너쉽 금액을 수정한다.

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.DefaultApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost");
    
    // Configure HTTP bearer authorization: bearer
    HttpBearerAuth bearer = (HttpBearerAuth) defaultClient.getAuthentication("bearer");
    bearer.setBearerToken("BEARER TOKEN");

    DefaultApi apiInstance = new DefaultApi(defaultClient);
    BigDecimal jangbuId = new BigDecimal(78); // BigDecimal | 
    BigDecimal yearMonth = new BigDecimal(78); // BigDecimal | 
    UpdateChargeJangbuPartnershipInput updateChargeJangbuPartnershipInput = new UpdateChargeJangbuPartnershipInput(); // UpdateChargeJangbuPartnershipInput | 
    try {
      ChargeJangbuPartnership result = apiInstance.adjustControllerUpdateChargeJangbuPartnership(jangbuId, yearMonth, updateChargeJangbuPartnershipInput);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling DefaultApi#adjustControllerUpdateChargeJangbuPartnership");
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
 **jangbuId** | **BigDecimal**|  |
 **yearMonth** | **BigDecimal**|  |
 **updateChargeJangbuPartnershipInput** | [**UpdateChargeJangbuPartnershipInput**](UpdateChargeJangbuPartnershipInput.md)|  |

### Return type

[**ChargeJangbuPartnership**](ChargeJangbuPartnership.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | (수정된) 장부사의 파트너쉽 금액정보를 반환 |  -  |
**404** | 장부사 파트너쉽 금액정보가 없는 경우 |  -  |
**406** | 이미 장부사에게 공개된 정산내역의 경우 |  -  |

<a name="adjustControllerUpdateChargeJangbuStatus"></a>
# **adjustControllerUpdateChargeJangbuStatus**
> ChargeJangbu adjustControllerUpdateChargeJangbuStatus(jangbuId, yearMonth, updateChargeJangbuStatusInput)

정산내역 비공개 → 공개 상태값 업데이트 및 정산내역 메일 발송 (관리자 전용: 극히 일부사용자만)

정산내역의 비공개 → 공개 상태값을 업데이트 및 정산내역의 메일을 발송한다

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.DefaultApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost");
    
    // Configure HTTP bearer authorization: bearer
    HttpBearerAuth bearer = (HttpBearerAuth) defaultClient.getAuthentication("bearer");
    bearer.setBearerToken("BEARER TOKEN");

    DefaultApi apiInstance = new DefaultApi(defaultClient);
    BigDecimal jangbuId = new BigDecimal(78); // BigDecimal | 장부사 순번
    BigDecimal yearMonth = new BigDecimal(78); // BigDecimal | 해당연월 (YYYYMM)
    UpdateChargeJangbuStatusInput updateChargeJangbuStatusInput = new UpdateChargeJangbuStatusInput(); // UpdateChargeJangbuStatusInput | 
    try {
      ChargeJangbu result = apiInstance.adjustControllerUpdateChargeJangbuStatus(jangbuId, yearMonth, updateChargeJangbuStatusInput);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling DefaultApi#adjustControllerUpdateChargeJangbuStatus");
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
 **jangbuId** | **BigDecimal**| 장부사 순번 |
 **yearMonth** | **BigDecimal**| 해당연월 (YYYYMM) |
 **updateChargeJangbuStatusInput** | [**UpdateChargeJangbuStatusInput**](UpdateChargeJangbuStatusInput.md)|  |

### Return type

[**ChargeJangbu**](ChargeJangbu.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | 성공 : 업데이트된 정산내역 정보를 반환 |  -  |
**404** | 정산내역이 존재하지 않음 |  -  |

<a name="authControllerDeleteToken"></a>
# **authControllerDeleteToken**
> authControllerDeleteToken(refreshToken)

로그아웃 (토큰삭제)

토큰을 삭제한다 (로그아웃시)

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.models.*;
import org.openapitools.client.api.DefaultApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost");

    DefaultApi apiInstance = new DefaultApi(defaultClient);
    String refreshToken = "refreshToken_example"; // String | 리프레시 토큰
    try {
      apiInstance.authControllerDeleteToken(refreshToken);
    } catch (ApiException e) {
      System.err.println("Exception when calling DefaultApi#authControllerDeleteToken");
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
 **refreshToken** | **String**| 리프레시 토큰 |

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | 성공 : 토큰을 삭제 |  -  |
**404** | 리프레시 토큰이 존재하지 않는 경우 |  -  |

<a name="authControllerLogin"></a>
# **authControllerLogin**
> LoginOutput authControllerLogin(loginInput)

토큰발급

새로운 토큰을 발급한다

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.models.*;
import org.openapitools.client.api.DefaultApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost");

    DefaultApi apiInstance = new DefaultApi(defaultClient);
    LoginInput loginInput = new LoginInput(); // LoginInput | 로그인 요청 데이터
    try {
      LoginOutput result = apiInstance.authControllerLogin(loginInput);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling DefaultApi#authControllerLogin");
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
 **loginInput** | [**LoginInput**](LoginInput.md)| 로그인 요청 데이터 |

### Return type

[**LoginOutput**](LoginOutput.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | 성공 : 새 토큰을 발급 |  -  |
**401** | 해당 패스워드가 일치하지 않음 |  -  |
**404** | 해당 아이디를 갖는 사용자가 존재하지 않음 |  -  |

<a name="authControllerRefresh"></a>
# **authControllerRefresh**
> RefreshOutput authControllerRefresh(refreshInput)

토큰갱신

토큰을 갱신한다

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.models.*;
import org.openapitools.client.api.DefaultApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost");

    DefaultApi apiInstance = new DefaultApi(defaultClient);
    RefreshInput refreshInput = new RefreshInput(); // RefreshInput | 토큰갱신 요청 데이터
    try {
      RefreshOutput result = apiInstance.authControllerRefresh(refreshInput);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling DefaultApi#authControllerRefresh");
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
 **refreshInput** | [**RefreshInput**](RefreshInput.md)| 토큰갱신 요청 데이터 |

### Return type

[**RefreshOutput**](RefreshOutput.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | 성공 : 토큰을 갱신 |  -  |
**401** | 존재하지 않는 토큰의 경우 또는 유효하지 않거나 만료된 토큰의 경우 또는 회원정보가 유효하지 않은경우 |  -  |

<a name="errorControllerGetCert"></a>
# **errorControllerGetCert**
> GetCertOutput errorControllerGetCert(errorId, connectId, path)

인증서 조회 (관리자 전용: 극히 일부사용자만)

특정 인증서를 조회한다

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.DefaultApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost");
    
    // Configure HTTP bearer authorization: bearer
    HttpBearerAuth bearer = (HttpBearerAuth) defaultClient.getAuthentication("bearer");
    bearer.setBearerToken("BEARER TOKEN");

    DefaultApi apiInstance = new DefaultApi(defaultClient);
    BigDecimal errorId = new BigDecimal(78); // BigDecimal | 에러 순번
    BigDecimal connectId = new BigDecimal(78); // BigDecimal | 연결정보 순번
    String path = "path_example"; // String | S3 경로
    try {
      GetCertOutput result = apiInstance.errorControllerGetCert(errorId, connectId, path);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling DefaultApi#errorControllerGetCert");
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
 **errorId** | **BigDecimal**| 에러 순번 |
 **connectId** | **BigDecimal**| 연결정보 순번 |
 **path** | **String**| S3 경로 |

### Return type

[**GetCertOutput**](GetCertOutput.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | 성공 : 인증서정보를 반환 |  -  |
**404** | 해당 connectId의 인증서가 존재하지 않거나 DB에 Connect 정보가 존재하지 않음 |  -  |

<a name="errorControllerGetError"></a>
# **errorControllerGetError**
> PcClientError errorControllerGetError(errorId)

에러 조회 (관리자 전용)

특정 에러를 조회한다

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.DefaultApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost");
    
    // Configure HTTP bearer authorization: bearer
    HttpBearerAuth bearer = (HttpBearerAuth) defaultClient.getAuthentication("bearer");
    bearer.setBearerToken("BEARER TOKEN");

    DefaultApi apiInstance = new DefaultApi(defaultClient);
    BigDecimal errorId = new BigDecimal(78); // BigDecimal | 에러 순번
    try {
      PcClientError result = apiInstance.errorControllerGetError(errorId);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling DefaultApi#errorControllerGetError");
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
 **errorId** | **BigDecimal**| 에러 순번 |

### Return type

[**PcClientError**](PcClientError.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | 성공 : 에러정보를 반환 |  -  |
**404** | 해당 PC클라이언트 에러가 존재하지 않음 |  -  |

<a name="errorControllerGetErrors"></a>
# **errorControllerGetErrors**
> GetErrorsResponse errorControllerGetErrors(page, limit, startAt, endAt, route, appVersion, appName, jangbuName, userId)

에러 목록 검색 (관리자 전용)

에러 목록을 검색한다

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.DefaultApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost");
    
    // Configure HTTP bearer authorization: bearer
    HttpBearerAuth bearer = (HttpBearerAuth) defaultClient.getAuthentication("bearer");
    bearer.setBearerToken("BEARER TOKEN");

    DefaultApi apiInstance = new DefaultApi(defaultClient);
    BigDecimal page = new BigDecimal(78); // BigDecimal | 페이징 페이지 정보
    BigDecimal limit = new BigDecimal(78); // BigDecimal | 페이징 페이지당 목록 수
    String startAt = "202104280000"; // String | 시작일시 (YYYYMMDDHHmm)
    String endAt = "202105260129"; // String | 종료일시 (YYYYMMDDHHmm)
    String route = "route_example"; // String | 페이징 링크 경로
    String appVersion = "appVersion_example"; // String | 앱 버전
    String appName = "appName_example"; // String | 앱 이름
    String jangbuName = "jangbuName_example"; // String | 장부사명
    BigDecimal userId = new BigDecimal(78); // BigDecimal | 회원의 순번
    try {
      GetErrorsResponse result = apiInstance.errorControllerGetErrors(page, limit, startAt, endAt, route, appVersion, appName, jangbuName, userId);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling DefaultApi#errorControllerGetErrors");
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
 **appVersion** | **String**| 앱 버전 | [optional]
 **appName** | **String**| 앱 이름 | [optional]
 **jangbuName** | **String**| 장부사명 | [optional]
 **userId** | **BigDecimal**| 회원의 순번 | [optional]

### Return type

[**GetErrorsResponse**](GetErrorsResponse.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | 성공 : 에러목록을 반환 |  -  |

<a name="jangbuControllerGetJangbu"></a>
# **jangbuControllerGetJangbu**
> Jangbu jangbuControllerGetJangbu(jangbuId)

장부사 조회 (관리자 전용)

특정 장부사를 조회한다

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.DefaultApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost");
    
    // Configure HTTP bearer authorization: bearer
    HttpBearerAuth bearer = (HttpBearerAuth) defaultClient.getAuthentication("bearer");
    bearer.setBearerToken("BEARER TOKEN");

    DefaultApi apiInstance = new DefaultApi(defaultClient);
    BigDecimal jangbuId = new BigDecimal(78); // BigDecimal | 장부사의 순번
    try {
      Jangbu result = apiInstance.jangbuControllerGetJangbu(jangbuId);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling DefaultApi#jangbuControllerGetJangbu");
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
 **jangbuId** | **BigDecimal**| 장부사의 순번 |

### Return type

[**Jangbu**](Jangbu.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | 성공 : 특정 장부사를 반환 |  -  |
**404** | 해당 장부사가 존재하지 않음 |  -  |

<a name="jangbuControllerGetJangbus"></a>
# **jangbuControllerGetJangbus**
> GetJangbusOutput jangbuControllerGetJangbus(page, limit, route, serviceIds, jangbuName, repId)

장부사 목록 검색 (관리자 전용)

장부사 목록을 검색한다

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.DefaultApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost");
    
    // Configure HTTP bearer authorization: bearer
    HttpBearerAuth bearer = (HttpBearerAuth) defaultClient.getAuthentication("bearer");
    bearer.setBearerToken("BEARER TOKEN");

    DefaultApi apiInstance = new DefaultApi(defaultClient);
    BigDecimal page = new BigDecimal(78); // BigDecimal | 페이징 페이지 정보
    BigDecimal limit = new BigDecimal(78); // BigDecimal | 페이징 페이지당 목록 수
    String route = "route_example"; // String | 페이징 링크 경로
    List<BigDecimal> serviceIds = Arrays.asList(); // List<BigDecimal> | 서비스 순번 목록
    String jangbuName = "jangbuName_example"; // String | 장부사명
    String repId = "repId_example"; // String | 장부사 아이디
    try {
      GetJangbusOutput result = apiInstance.jangbuControllerGetJangbus(page, limit, route, serviceIds, jangbuName, repId);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling DefaultApi#jangbuControllerGetJangbus");
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
 **route** | **String**| 페이징 링크 경로 | [optional]
 **serviceIds** | [**List&lt;BigDecimal&gt;**](BigDecimal.md)| 서비스 순번 목록 | [optional]
 **jangbuName** | **String**| 장부사명 | [optional]
 **repId** | **String**| 장부사 아이디 | [optional]

### Return type

[**GetJangbusOutput**](GetJangbusOutput.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | 성공 : 장부사 목록을 반환 |  -  |

<a name="jangbuControllerGetJangbusWithChargeJangbuPartnership"></a>
# **jangbuControllerGetJangbusWithChargeJangbuPartnership**
> GetJangbusOutput jangbuControllerGetJangbusWithChargeJangbuPartnership(yearMonth, page, limit, route, serviceIds, jangbuName, repId)

(특정연월의 파트너쉽 단가정보와) 장부사 검색 (관리자 전용)

(특정연월의 파트너쉽 단가정보와) 장부사 검색한다

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.DefaultApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost");
    
    // Configure HTTP bearer authorization: bearer
    HttpBearerAuth bearer = (HttpBearerAuth) defaultClient.getAuthentication("bearer");
    bearer.setBearerToken("BEARER TOKEN");

    DefaultApi apiInstance = new DefaultApi(defaultClient);
    BigDecimal yearMonth = new BigDecimal(78); // BigDecimal | 해당연월
    BigDecimal page = new BigDecimal(78); // BigDecimal | 페이징 페이지 정보
    BigDecimal limit = new BigDecimal(78); // BigDecimal | 페이징 페이지당 목록 수
    String route = "route_example"; // String | 페이징 링크 경로
    List<BigDecimal> serviceIds = Arrays.asList(); // List<BigDecimal> | 서비스 순번 목록
    String jangbuName = "jangbuName_example"; // String | 장부사명
    String repId = "repId_example"; // String | 장부사 아이디
    try {
      GetJangbusOutput result = apiInstance.jangbuControllerGetJangbusWithChargeJangbuPartnership(yearMonth, page, limit, route, serviceIds, jangbuName, repId);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling DefaultApi#jangbuControllerGetJangbusWithChargeJangbuPartnership");
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
 **yearMonth** | **BigDecimal**| 해당연월 |
 **page** | **BigDecimal**| 페이징 페이지 정보 |
 **limit** | **BigDecimal**| 페이징 페이지당 목록 수 |
 **route** | **String**| 페이징 링크 경로 | [optional]
 **serviceIds** | [**List&lt;BigDecimal&gt;**](BigDecimal.md)| 서비스 순번 목록 | [optional]
 **jangbuName** | **String**| 장부사명 | [optional]
 **repId** | **String**| 장부사 아이디 | [optional]

### Return type

[**GetJangbusOutput**](GetJangbusOutput.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | 성공 : 장부사 목록을 반환 |  -  |

<a name="jangbuControllerRegisterJangbu"></a>
# **jangbuControllerRegisterJangbu**
> Jangbu jangbuControllerRegisterJangbu(registerJangbuInput)

장부사 등록 (관리자 전용)

장부사를 등록한다

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.DefaultApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost");
    
    // Configure HTTP bearer authorization: bearer
    HttpBearerAuth bearer = (HttpBearerAuth) defaultClient.getAuthentication("bearer");
    bearer.setBearerToken("BEARER TOKEN");

    DefaultApi apiInstance = new DefaultApi(defaultClient);
    RegisterJangbuInput registerJangbuInput = new RegisterJangbuInput(); // RegisterJangbuInput | 
    try {
      Jangbu result = apiInstance.jangbuControllerRegisterJangbu(registerJangbuInput);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling DefaultApi#jangbuControllerRegisterJangbu");
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
 **registerJangbuInput** | [**RegisterJangbuInput**](RegisterJangbuInput.md)|  |

### Return type

[**Jangbu**](Jangbu.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | 성공 : 등록된 장부사를 반환 |  -  |
**406** | 중복된 장부사명이 존재 또는 중복된 로그인 아이디 |  -  |

<a name="jangbuControllerUpdateJangbu"></a>
# **jangbuControllerUpdateJangbu**
> Jangbu jangbuControllerUpdateJangbu(jangbuId, updateJangbuInput)

장부사 수정 (관리자 전용)

특정 장부사를 수정한다

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.DefaultApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost");
    
    // Configure HTTP bearer authorization: bearer
    HttpBearerAuth bearer = (HttpBearerAuth) defaultClient.getAuthentication("bearer");
    bearer.setBearerToken("BEARER TOKEN");

    DefaultApi apiInstance = new DefaultApi(defaultClient);
    BigDecimal jangbuId = new BigDecimal(78); // BigDecimal | 장부사의 순번
    UpdateJangbuInput updateJangbuInput = new UpdateJangbuInput(); // UpdateJangbuInput | 
    try {
      Jangbu result = apiInstance.jangbuControllerUpdateJangbu(jangbuId, updateJangbuInput);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling DefaultApi#jangbuControllerUpdateJangbu");
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
 **jangbuId** | **BigDecimal**| 장부사의 순번 |
 **updateJangbuInput** | [**UpdateJangbuInput**](UpdateJangbuInput.md)|  |

### Return type

[**Jangbu**](Jangbu.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | 성공 : 수정된 장부사를 반환 |  -  |
**404** | 해당 장부사가 존재하지 않음 |  -  |
**406** | 장부사명이 중복되는 경우 |  -  |

<a name="memberControllerFindMember"></a>
# **memberControllerFindMember**
> FindMemberOutput memberControllerFindMember(findMemberInput)

아이디 찾기 또는 패스워드 찾기

(로그인 계정의) 아이디 또는 패스워드를 찾는다

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.models.*;
import org.openapitools.client.api.DefaultApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost");

    DefaultApi apiInstance = new DefaultApi(defaultClient);
    FindMemberInput findMemberInput = new FindMemberInput(); // FindMemberInput | 
    try {
      FindMemberOutput result = apiInstance.memberControllerFindMember(findMemberInput);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling DefaultApi#memberControllerFindMember");
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
 **findMemberInput** | [**FindMemberInput**](FindMemberInput.md)|  |

### Return type

[**FindMemberOutput**](FindMemberOutput.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | 성공 : 아이디(아이디 찾기) 또는 패스워드(패스워드 찾기) |  -  |
**400** | 실패 : 이름, ID, 이메일이 올바르지 않음 |  -  |
**404** | 실패 : 해당 아이디를 갖는 사용자가 존재하지 않음 |  -  |

<a name="memberControllerGetMember"></a>
# **memberControllerGetMember**
> User memberControllerGetMember(userId)

회원 조회

특정 회원을 조회한다

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.DefaultApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost");
    
    // Configure HTTP bearer authorization: bearer
    HttpBearerAuth bearer = (HttpBearerAuth) defaultClient.getAuthentication("bearer");
    bearer.setBearerToken("BEARER TOKEN");

    DefaultApi apiInstance = new DefaultApi(defaultClient);
    BigDecimal userId = new BigDecimal(78); // BigDecimal | 회원의 순번
    try {
      User result = apiInstance.memberControllerGetMember(userId);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling DefaultApi#memberControllerGetMember");
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
 **userId** | **BigDecimal**| 회원의 순번 |

### Return type

[**User**](User.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | 성공 : 회원정보 반환 |  -  |
**404** | 해당 id의 회원이 존재하지 않음 |  -  |

<a name="memberControllerGetMembers"></a>
# **memberControllerGetMembers**
> GetMembersOutput memberControllerGetMembers(page, limit, route, jangbuId, serviceId, active, userName, ceoName, userLevel)

회원 목록 검색

회원 목록을 검색한다

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.DefaultApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost");
    
    // Configure HTTP bearer authorization: bearer
    HttpBearerAuth bearer = (HttpBearerAuth) defaultClient.getAuthentication("bearer");
    bearer.setBearerToken("BEARER TOKEN");

    DefaultApi apiInstance = new DefaultApi(defaultClient);
    BigDecimal page = new BigDecimal(78); // BigDecimal | 페이징 페이지 정보
    BigDecimal limit = new BigDecimal(78); // BigDecimal | 페이징 페이지당 목록 수
    String route = "route_example"; // String | 페이징 링크 경로
    BigDecimal jangbuId = new BigDecimal(78); // BigDecimal | 장부사 순번 (관리자의 경우에만 입력)
    BigDecimal serviceId = new BigDecimal(78); // BigDecimal | 서비스 순번
    String active = "active_example"; // String | 이용여부 (1:이용중, 0:이용중지)
    String userName = "userName_example"; // String | 회원명
    String ceoName = "ceoName_example"; // String | 대표자명
    BigDecimal userLevel = new BigDecimal(78); // BigDecimal | 회원레벨 (고객,장부사,관리자)
    try {
      GetMembersOutput result = apiInstance.memberControllerGetMembers(page, limit, route, jangbuId, serviceId, active, userName, ceoName, userLevel);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling DefaultApi#memberControllerGetMembers");
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
 **route** | **String**| 페이징 링크 경로 | [optional]
 **jangbuId** | **BigDecimal**| 장부사 순번 (관리자의 경우에만 입력) | [optional]
 **serviceId** | **BigDecimal**| 서비스 순번 | [optional]
 **active** | **String**| 이용여부 (1:이용중, 0:이용중지) | [optional] [enum: 0, 1]
 **userName** | **String**| 회원명 | [optional]
 **ceoName** | **String**| 대표자명 | [optional]
 **userLevel** | **BigDecimal**| 회원레벨 (고객,장부사,관리자) | [optional] [enum: 3, 1, 2]

### Return type

[**GetMembersOutput**](GetMembersOutput.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | 성공 : 회원목록을 반환 |  -  |

<a name="memberControllerGetResetPassword"></a>
# **memberControllerGetResetPassword**
> Recovery memberControllerGetResetPassword(recoveryKey)

패스워드 재설정 조회

패스워드 재설정 정보를 조회한다

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.models.*;
import org.openapitools.client.api.DefaultApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost");

    DefaultApi apiInstance = new DefaultApi(defaultClient);
    String recoveryKey = "recoveryKey_example"; // String | 
    try {
      Recovery result = apiInstance.memberControllerGetResetPassword(recoveryKey);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling DefaultApi#memberControllerGetResetPassword");
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
 **recoveryKey** | **String**|  |

### Return type

[**Recovery**](Recovery.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | 성공 : 비밀번호 초기화 정보 반환 |  -  |
**401** | 초기화 키 만료기간이 지난 경우 |  -  |
**404** | 실패 : 해당 키가 존재하지 않음 |  -  |

<a name="memberControllerRegisterCustomer"></a>
# **memberControllerRegisterCustomer**
> User memberControllerRegisterCustomer(registerCustomerInput)

(고객사) 계정 등록

(고객사) 계정을 등록한다

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.DefaultApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost");
    
    // Configure HTTP bearer authorization: bearer
    HttpBearerAuth bearer = (HttpBearerAuth) defaultClient.getAuthentication("bearer");
    bearer.setBearerToken("BEARER TOKEN");

    DefaultApi apiInstance = new DefaultApi(defaultClient);
    RegisterCustomerInput registerCustomerInput = new RegisterCustomerInput(); // RegisterCustomerInput | 
    try {
      User result = apiInstance.memberControllerRegisterCustomer(registerCustomerInput);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling DefaultApi#memberControllerRegisterCustomer");
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
 **registerCustomerInput** | [**RegisterCustomerInput**](RegisterCustomerInput.md)|  |

### Return type

[**User**](User.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | 성공 : 등록된 계정정보를 반환 |  -  |
**404** | 장부사가 존재하지 않는경우 |  -  |
**406** | 중복된 로그인 아이디의 경우 |  -  |

<a name="memberControllerRegisterMember"></a>
# **memberControllerRegisterMember**
> User memberControllerRegisterMember(registerMemberInput)

(관리자 또는 장부사) 계정 등록 (관라지만 이용)

(관리자 또는 장부사) 계정을 등록한다 (관라지만 이용)

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.DefaultApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost");
    
    // Configure HTTP bearer authorization: bearer
    HttpBearerAuth bearer = (HttpBearerAuth) defaultClient.getAuthentication("bearer");
    bearer.setBearerToken("BEARER TOKEN");

    DefaultApi apiInstance = new DefaultApi(defaultClient);
    RegisterMemberInput registerMemberInput = new RegisterMemberInput(); // RegisterMemberInput | 
    try {
      User result = apiInstance.memberControllerRegisterMember(registerMemberInput);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling DefaultApi#memberControllerRegisterMember");
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
 **registerMemberInput** | [**RegisterMemberInput**](RegisterMemberInput.md)|  |

### Return type

[**User**](User.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | 성공 : 등록된 계정정보를 반환 |  -  |
**404** | (장부사 회원 등록시에만) 장부사가 존재하지 않는경우 |  -  |
**406** | 중복된 로그인 아이디의 경우 |  -  |

<a name="memberControllerResetPassword"></a>
# **memberControllerResetPassword**
> ResetPasswordOutput memberControllerResetPassword(recoveryKey, resetPasswordInput)

(계정찾기진행시) 패스워드 재설정 처리

(계정찾기진행시) 패스워드 재설정 정보를 처리한다

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.models.*;
import org.openapitools.client.api.DefaultApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost");

    DefaultApi apiInstance = new DefaultApi(defaultClient);
    String recoveryKey = "recoveryKey_example"; // String | 키값
    ResetPasswordInput resetPasswordInput = new ResetPasswordInput(); // ResetPasswordInput | 
    try {
      ResetPasswordOutput result = apiInstance.memberControllerResetPassword(recoveryKey, resetPasswordInput);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling DefaultApi#memberControllerResetPassword");
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
 **recoveryKey** | **String**| 키값 |
 **resetPasswordInput** | [**ResetPasswordInput**](ResetPasswordInput.md)|  |

### Return type

[**ResetPasswordOutput**](ResetPasswordOutput.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | 성공 : 패스워드 재설정 처리이후 로그인하는 페이지로 이동 |  -  |
**401** | 초기화 키 만료기간이 지난 경우 |  -  |
**404** | 실패 : 해당 키가 존재하지 않음 |  -  |

<a name="memberControllerResetPasswordWithIdEmail"></a>
# **memberControllerResetPasswordWithIdEmail**
> User memberControllerResetPasswordWithIdEmail(memberId)

로그인 패스워드 초기화

아이디+이메일 조합으로 패스워드를 초기화한다

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.DefaultApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost");
    
    // Configure HTTP bearer authorization: bearer
    HttpBearerAuth bearer = (HttpBearerAuth) defaultClient.getAuthentication("bearer");
    bearer.setBearerToken("BEARER TOKEN");

    DefaultApi apiInstance = new DefaultApi(defaultClient);
    BigDecimal memberId = new BigDecimal(78); // BigDecimal | 회원의 순번
    try {
      User result = apiInstance.memberControllerResetPasswordWithIdEmail(memberId);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling DefaultApi#memberControllerResetPasswordWithIdEmail");
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
 **memberId** | **BigDecimal**| 회원의 순번 |

### Return type

[**User**](User.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | 성공 : 패스워드 초기화된 회원정보 반환 |  -  |
**403** | 장부사가 관리자 패스워드를 초기화하는경우 |  -  |
**404** | 해당 id의 회원이 존재하지 않음 |  -  |
**406** | 장부사가 다른장부사 계정의 정보를 수정하는경우 |  -  |

<a name="memberControllerSaveUserRoleGroup"></a>
# **memberControllerSaveUserRoleGroup**
> User memberControllerSaveUserRoleGroup(userId, roleGroupCode)

계정의 권한그룹 저장

특정 계정의 권한그룹을 저장한다

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.DefaultApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost");
    
    // Configure HTTP bearer authorization: bearer
    HttpBearerAuth bearer = (HttpBearerAuth) defaultClient.getAuthentication("bearer");
    bearer.setBearerToken("BEARER TOKEN");

    DefaultApi apiInstance = new DefaultApi(defaultClient);
    BigDecimal userId = new BigDecimal(78); // BigDecimal | 계정의 순번
    String roleGroupCode = "roleGroupCode_example"; // String | 계좌코드 순번
    try {
      User result = apiInstance.memberControllerSaveUserRoleGroup(userId, roleGroupCode);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling DefaultApi#memberControllerSaveUserRoleGroup");
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
 **userId** | **BigDecimal**| 계정의 순번 |
 **roleGroupCode** | **String**| 계좌코드 순번 |

### Return type

[**User**](User.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | 성공 : 계정정보륿 반환 |  -  |
**404** | 게정이 존재하지 않거나 특정 권한그룹목록이 존재하지 않는경우 |  -  |
**406** | 권한그룹이 활성화되어있지 않거나 계정과 권한그룹의 레벨이 다른경우 |  -  |

<a name="memberControllerUpdateMember"></a>
# **memberControllerUpdateMember**
> User memberControllerUpdateMember(userId, updateMemberInput)

계정 수정

계정을 수정한다

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.DefaultApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost");
    
    // Configure HTTP bearer authorization: bearer
    HttpBearerAuth bearer = (HttpBearerAuth) defaultClient.getAuthentication("bearer");
    bearer.setBearerToken("BEARER TOKEN");

    DefaultApi apiInstance = new DefaultApi(defaultClient);
    BigDecimal userId = new BigDecimal(78); // BigDecimal | 회원의 순번
    UpdateMemberInput updateMemberInput = new UpdateMemberInput(); // UpdateMemberInput | 
    try {
      User result = apiInstance.memberControllerUpdateMember(userId, updateMemberInput);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling DefaultApi#memberControllerUpdateMember");
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
 **userId** | **BigDecimal**| 회원의 순번 |
 **updateMemberInput** | [**UpdateMemberInput**](UpdateMemberInput.md)|  |

### Return type

[**User**](User.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | 성공 : 수정된 계정정보륿 반환 |  -  |
**404** | 해당 id의 회원이 존재하지 않음 |  -  |

<a name="mobileAppControllerGetAppVersions"></a>
# **mobileAppControllerGetAppVersions**
> GetAppVersionsOutput mobileAppControllerGetAppVersions(page, limit, route, active, osType)

앱 버전 목록 검색 (관리자 전용)

앱 버전 목록을 검색한다

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.DefaultApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost");
    
    // Configure HTTP bearer authorization: bearer
    HttpBearerAuth bearer = (HttpBearerAuth) defaultClient.getAuthentication("bearer");
    bearer.setBearerToken("BEARER TOKEN");

    DefaultApi apiInstance = new DefaultApi(defaultClient);
    BigDecimal page = new BigDecimal(78); // BigDecimal | 페이징 페이지 정보
    BigDecimal limit = new BigDecimal(78); // BigDecimal | 페이징 페이지당 목록 수
    String route = "route_example"; // String | 페이징 링크 경로
    String active = "active_example"; // String | 앱의 활성여부 (T:활성,F:비활성)
    OsType osType = OsType.fromValue("I"); // OsType | OS유형
    try {
      GetAppVersionsOutput result = apiInstance.mobileAppControllerGetAppVersions(page, limit, route, active, osType);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling DefaultApi#mobileAppControllerGetAppVersions");
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
 **route** | **String**| 페이징 링크 경로 | [optional]
 **active** | **String**| 앱의 활성여부 (T:활성,F:비활성) | [optional] [enum: T, F]
 **osType** | [**OsType**](.md)| OS유형 | [optional] [enum: I, A]

### Return type

[**GetAppVersionsOutput**](GetAppVersionsOutput.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | 성공 : 앱 버전 목록을 반환 |  -  |

<a name="mobileAppControllerGetJangbuMessage"></a>
# **mobileAppControllerGetJangbuMessage**
> Message mobileAppControllerGetJangbuMessage(jangbuId, messageId)

(특정 장부사의) 메시지 조회 (관리자, 장부사 전용)

(특정 장부사의) 특정 메시지를 조회한다

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.DefaultApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost");
    
    // Configure HTTP bearer authorization: bearer
    HttpBearerAuth bearer = (HttpBearerAuth) defaultClient.getAuthentication("bearer");
    bearer.setBearerToken("BEARER TOKEN");

    DefaultApi apiInstance = new DefaultApi(defaultClient);
    BigDecimal jangbuId = new BigDecimal(78); // BigDecimal | 
    BigDecimal messageId = new BigDecimal(78); // BigDecimal | 메시지 순번
    try {
      Message result = apiInstance.mobileAppControllerGetJangbuMessage(jangbuId, messageId);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling DefaultApi#mobileAppControllerGetJangbuMessage");
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
 **jangbuId** | **BigDecimal**|  |
 **messageId** | **BigDecimal**| 메시지 순번 |

### Return type

[**Message**](Message.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | 성공 : (특정 장부사의) 메시지 정보를 반환 |  -  |
**404** | 장부사가 존재하지 않거나 메시지가 존재하지 않음 |  -  |

<a name="mobileAppControllerGetJangbuMessages"></a>
# **mobileAppControllerGetJangbuMessages**
> GetJangbuMessagesOutput mobileAppControllerGetJangbuMessages(jangbuId, page, limit, startAt, endAt, route)

(특정 장부사의) 메시지 목록 검색 (관리자, 장부사 전용)

(특정 장부사의) 메시지 목록을 검색한다

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.DefaultApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost");
    
    // Configure HTTP bearer authorization: bearer
    HttpBearerAuth bearer = (HttpBearerAuth) defaultClient.getAuthentication("bearer");
    bearer.setBearerToken("BEARER TOKEN");

    DefaultApi apiInstance = new DefaultApi(defaultClient);
    BigDecimal jangbuId = new BigDecimal(78); // BigDecimal | 
    BigDecimal page = new BigDecimal(78); // BigDecimal | 페이징 페이지 정보
    BigDecimal limit = new BigDecimal(78); // BigDecimal | 페이징 페이지당 목록 수
    BigDecimal startAt = new BigDecimal(78); // BigDecimal | 기간 시작일자(YYYYMMDD)
    BigDecimal endAt = new BigDecimal(78); // BigDecimal | 기간 종료일자(YYYYMMDD)
    String route = "route_example"; // String | 페이징 링크 경로
    try {
      GetJangbuMessagesOutput result = apiInstance.mobileAppControllerGetJangbuMessages(jangbuId, page, limit, startAt, endAt, route);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling DefaultApi#mobileAppControllerGetJangbuMessages");
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
 **jangbuId** | **BigDecimal**|  |
 **page** | **BigDecimal**| 페이징 페이지 정보 |
 **limit** | **BigDecimal**| 페이징 페이지당 목록 수 |
 **startAt** | **BigDecimal**| 기간 시작일자(YYYYMMDD) |
 **endAt** | **BigDecimal**| 기간 종료일자(YYYYMMDD) |
 **route** | **String**| 페이징 링크 경로 | [optional]

### Return type

[**GetJangbuMessagesOutput**](GetJangbuMessagesOutput.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | 성공 : (특정 장부사의) 메시지 목록을 반환 |  -  |
**404** | 장부사가 존재하지 않음 |  -  |

<a name="mobileAppControllerGetUsingAppUsers"></a>
# **mobileAppControllerGetUsingAppUsers**
> Object mobileAppControllerGetUsingAppUsers(page, limit, route, active, osType)

앱 사용자 목록 검색 (관리자 전용)

앱 사용자 목록을 검색한다

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.DefaultApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost");
    
    // Configure HTTP bearer authorization: bearer
    HttpBearerAuth bearer = (HttpBearerAuth) defaultClient.getAuthentication("bearer");
    bearer.setBearerToken("BEARER TOKEN");

    DefaultApi apiInstance = new DefaultApi(defaultClient);
    BigDecimal page = new BigDecimal(78); // BigDecimal | 페이징 페이지 정보
    BigDecimal limit = new BigDecimal(78); // BigDecimal | 페이징 페이지당 목록 수
    String route = "route_example"; // String | 페이징 링크 경로
    String active = "active_example"; // String | 앱의 활성여부 (T:활성,F:비활성)
    OsType osType = OsType.fromValue("I"); // OsType | OS유형
    try {
      Object result = apiInstance.mobileAppControllerGetUsingAppUsers(page, limit, route, active, osType);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling DefaultApi#mobileAppControllerGetUsingAppUsers");
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
 **route** | **String**| 페이징 링크 경로 | [optional]
 **active** | **String**| 앱의 활성여부 (T:활성,F:비활성) | [optional] [enum: T, F]
 **osType** | [**OsType**](.md)| OS유형 | [optional] [enum: I, A]

### Return type

**Object**

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | 성공 : 앱 사용자 목록을 반환 |  -  |

<a name="mobileAppControllerRegisterAppVersion"></a>
# **mobileAppControllerRegisterAppVersion**
> AppVersion mobileAppControllerRegisterAppVersion(registerAppVersionInput)

앱 버전 등록 (관리자 전용)

앱 버전을 등록한다

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.DefaultApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost");
    
    // Configure HTTP bearer authorization: bearer
    HttpBearerAuth bearer = (HttpBearerAuth) defaultClient.getAuthentication("bearer");
    bearer.setBearerToken("BEARER TOKEN");

    DefaultApi apiInstance = new DefaultApi(defaultClient);
    RegisterAppVersionInput registerAppVersionInput = new RegisterAppVersionInput(); // RegisterAppVersionInput | 
    try {
      AppVersion result = apiInstance.mobileAppControllerRegisterAppVersion(registerAppVersionInput);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling DefaultApi#mobileAppControllerRegisterAppVersion");
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
 **registerAppVersionInput** | [**RegisterAppVersionInput**](RegisterAppVersionInput.md)|  |

### Return type

[**AppVersion**](AppVersion.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | 성공 : 등록된 앱 버전을 반환 |  -  |
**202** | 해당 OS의 버전이 이미 존재하는경우 |  -  |

<a name="mobileAppControllerUpdateAppVersion"></a>
# **mobileAppControllerUpdateAppVersion**
> AppVersion mobileAppControllerUpdateAppVersion(versionId, updateAppVersionInput)

앱 버전 수정 (관리자 전용)

앱 버전을 수정한다

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.DefaultApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost");
    
    // Configure HTTP bearer authorization: bearer
    HttpBearerAuth bearer = (HttpBearerAuth) defaultClient.getAuthentication("bearer");
    bearer.setBearerToken("BEARER TOKEN");

    DefaultApi apiInstance = new DefaultApi(defaultClient);
    BigDecimal versionId = new BigDecimal(78); // BigDecimal | 버전 순번
    UpdateAppVersionInput updateAppVersionInput = new UpdateAppVersionInput(); // UpdateAppVersionInput | 
    try {
      AppVersion result = apiInstance.mobileAppControllerUpdateAppVersion(versionId, updateAppVersionInput);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling DefaultApi#mobileAppControllerUpdateAppVersion");
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
 **versionId** | **BigDecimal**| 버전 순번 |
 **updateAppVersionInput** | [**UpdateAppVersionInput**](UpdateAppVersionInput.md)|  |

### Return type

[**AppVersion**](AppVersion.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | 성공 : 수정된 앱 버전을 반환 |  -  |
**202** | 해당 OS의 버전이 이미 존재하는경우 |  -  |
**404** | 해당 앱 버전이 존재하지 않는경우 |  -  |

<a name="noticeControllerDeleteNotice"></a>
# **noticeControllerDeleteNotice**
> Notice noticeControllerDeleteNotice(noticeId)

공지사항 삭제 (관리자 전용)

공지사항을 삭제한다

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.DefaultApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost");
    
    // Configure HTTP bearer authorization: bearer
    HttpBearerAuth bearer = (HttpBearerAuth) defaultClient.getAuthentication("bearer");
    bearer.setBearerToken("BEARER TOKEN");

    DefaultApi apiInstance = new DefaultApi(defaultClient);
    BigDecimal noticeId = new BigDecimal(78); // BigDecimal | 
    try {
      Notice result = apiInstance.noticeControllerDeleteNotice(noticeId);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling DefaultApi#noticeControllerDeleteNotice");
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
 **noticeId** | **BigDecimal**|  |

### Return type

[**Notice**](Notice.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | 성공 : 삭제된 공지사항을 반환 |  -  |
**400** | 실패 : 요청 파라미터 오류 |  -  |
**403** | 실패 : 인증 실패 |  -  |

<a name="noticeControllerGetNotice"></a>
# **noticeControllerGetNotice**
> Notice noticeControllerGetNotice(noticeId)

공지사항 조회 (관리자, 장부사 전용)

특정 공지사항을 조회한다

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.DefaultApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost");
    
    // Configure HTTP bearer authorization: bearer
    HttpBearerAuth bearer = (HttpBearerAuth) defaultClient.getAuthentication("bearer");
    bearer.setBearerToken("BEARER TOKEN");

    DefaultApi apiInstance = new DefaultApi(defaultClient);
    BigDecimal noticeId = new BigDecimal(78); // BigDecimal | 공지사항 순번
    try {
      Notice result = apiInstance.noticeControllerGetNotice(noticeId);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling DefaultApi#noticeControllerGetNotice");
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
 **noticeId** | **BigDecimal**| 공지사항 순번 |

### Return type

[**Notice**](Notice.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | 성공 : 공지사항 정보를 반환 |  -  |
**403** | 실패 : 인증실패 (엑세스 토큰의 유무, 유효기간) |  -  |
**404** | 실패 : 공지사항을 찾을 수 없음 |  -  |

<a name="noticeControllerGetNotices"></a>
# **noticeControllerGetNotices**
> GetNotices noticeControllerGetNotices(page, limit, route)

공지사항 검색 (관리자, 장부사 전용)

공지사항 목록을 검색한다

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.DefaultApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost");
    
    // Configure HTTP bearer authorization: bearer
    HttpBearerAuth bearer = (HttpBearerAuth) defaultClient.getAuthentication("bearer");
    bearer.setBearerToken("BEARER TOKEN");

    DefaultApi apiInstance = new DefaultApi(defaultClient);
    BigDecimal page = new BigDecimal(78); // BigDecimal | 페이징 페이지 정보
    BigDecimal limit = new BigDecimal(78); // BigDecimal | 페이징 페이지당 목록 수
    String route = "route_example"; // String | 페이징 링크 경로
    try {
      GetNotices result = apiInstance.noticeControllerGetNotices(page, limit, route);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling DefaultApi#noticeControllerGetNotices");
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
 **route** | **String**| 페이징 링크 경로 | [optional]

### Return type

[**GetNotices**](GetNotices.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | 성공 : 공지사항 목록을 반환 |  -  |
**400** | 실패 : 잘못된 검색옵션의 입력 |  -  |
**403** | 실패 : 인증실패 (엑세스 토큰의 유무, 유효기간) |  -  |

<a name="noticeControllerRegisterNotice"></a>
# **noticeControllerRegisterNotice**
> Notice noticeControllerRegisterNotice(registerNoticeInput)

공지사항 등록 (관리자 전용)

공지사항을 등록한다

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.DefaultApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost");
    
    // Configure HTTP bearer authorization: bearer
    HttpBearerAuth bearer = (HttpBearerAuth) defaultClient.getAuthentication("bearer");
    bearer.setBearerToken("BEARER TOKEN");

    DefaultApi apiInstance = new DefaultApi(defaultClient);
    RegisterNoticeInput registerNoticeInput = new RegisterNoticeInput(); // RegisterNoticeInput | 
    try {
      Notice result = apiInstance.noticeControllerRegisterNotice(registerNoticeInput);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling DefaultApi#noticeControllerRegisterNotice");
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
 **registerNoticeInput** | [**RegisterNoticeInput**](RegisterNoticeInput.md)|  |

### Return type

[**Notice**](Notice.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | 성공 : 등록된 공지사항을 반환 |  -  |
**400** | 실패 : 요청 파라미터 오류 |  -  |
**403** | 실패 : 인증 실패 |  -  |

<a name="noticeControllerUpdateNotice"></a>
# **noticeControllerUpdateNotice**
> Notice noticeControllerUpdateNotice(noticeId, registerNoticeInput)

공지사항 수정 (관리자 전용)

공지사항을 수정한다

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.DefaultApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost");
    
    // Configure HTTP bearer authorization: bearer
    HttpBearerAuth bearer = (HttpBearerAuth) defaultClient.getAuthentication("bearer");
    bearer.setBearerToken("BEARER TOKEN");

    DefaultApi apiInstance = new DefaultApi(defaultClient);
    BigDecimal noticeId = new BigDecimal(78); // BigDecimal | 공지사항 순번
    RegisterNoticeInput registerNoticeInput = new RegisterNoticeInput(); // RegisterNoticeInput | 
    try {
      Notice result = apiInstance.noticeControllerUpdateNotice(noticeId, registerNoticeInput);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling DefaultApi#noticeControllerUpdateNotice");
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
 **noticeId** | **BigDecimal**| 공지사항 순번 |
 **registerNoticeInput** | [**RegisterNoticeInput**](RegisterNoticeInput.md)|  |

### Return type

[**Notice**](Notice.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | 성공 : 수정된 공지사항을 반환 |  -  |
**400** | 실패 : 요청 파라미터 오류 |  -  |
**403** | 실패 : 인증 실패 |  -  |
**404** | 실패 : 공지사항을 찾을 수 없음 |  -  |

<a name="roleControllerGetRoles"></a>
# **roleControllerGetRoles**
> SearchRoleGroupOutput roleControllerGetRoles(page, limit, route, userLevel, active)

권한 목록 검색 (관리자, 장부사 전용)

권한 목록을 검색한다

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.DefaultApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost");
    
    // Configure HTTP bearer authorization: bearer
    HttpBearerAuth bearer = (HttpBearerAuth) defaultClient.getAuthentication("bearer");
    bearer.setBearerToken("BEARER TOKEN");

    DefaultApi apiInstance = new DefaultApi(defaultClient);
    BigDecimal page = new BigDecimal(78); // BigDecimal | 페이징 페이지 정보
    BigDecimal limit = new BigDecimal(78); // BigDecimal | 페이징 페이지당 목록 수
    String route = "route_example"; // String | 페이징 링크 경로
    BigDecimal userLevel = new BigDecimal(78); // BigDecimal | 회원 레벨(1: 고객, 2: 장부사, 3: 관리자)
    String active = "active_example"; // String | 활성 여부(0: 비활성, 1: 활성)
    try {
      SearchRoleGroupOutput result = apiInstance.roleControllerGetRoles(page, limit, route, userLevel, active);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling DefaultApi#roleControllerGetRoles");
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
 **route** | **String**| 페이징 링크 경로 | [optional]
 **userLevel** | **BigDecimal**| 회원 레벨(1: 고객, 2: 장부사, 3: 관리자) | [optional] [enum: 1, 2, 3]
 **active** | **String**| 활성 여부(0: 비활성, 1: 활성) | [optional] [enum: 0, 1]

### Return type

[**SearchRoleGroupOutput**](SearchRoleGroupOutput.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | 성공 : 권한목록을 반환 |  -  |
**401** | 실패 : 권한이 없음 |  -  |

<a name="roleControllerRegisterRole"></a>
# **roleControllerRegisterRole**
> RoleGroup roleControllerRegisterRole(createRoleGroupInput)

권한 등록 (관리자 전용)

권한을 등록한다

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.DefaultApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost");
    
    // Configure HTTP bearer authorization: bearer
    HttpBearerAuth bearer = (HttpBearerAuth) defaultClient.getAuthentication("bearer");
    bearer.setBearerToken("BEARER TOKEN");

    DefaultApi apiInstance = new DefaultApi(defaultClient);
    CreateRoleGroupInput createRoleGroupInput = new CreateRoleGroupInput(); // CreateRoleGroupInput | 
    try {
      RoleGroup result = apiInstance.roleControllerRegisterRole(createRoleGroupInput);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling DefaultApi#roleControllerRegisterRole");
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
 **createRoleGroupInput** | [**CreateRoleGroupInput**](CreateRoleGroupInput.md)|  |

### Return type

[**RoleGroup**](RoleGroup.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | 성공 : 등록된 권한을 반환 |  -  |
**400** | 실패 : 권한 목록 중 중복되는 값 존재 |  -  |
**406** | 실패 : 이미 존재하는 그룹명 또는 그룹 권한 |  -  |

<a name="roleControllerUpdateRole"></a>
# **roleControllerUpdateRole**
> RoleGroup roleControllerUpdateRole(roleGroupCode, updateRoleGroupInput)

권한 수정 (관리자 전용)

권한을 수정한다

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.DefaultApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost");
    
    // Configure HTTP bearer authorization: bearer
    HttpBearerAuth bearer = (HttpBearerAuth) defaultClient.getAuthentication("bearer");
    bearer.setBearerToken("BEARER TOKEN");

    DefaultApi apiInstance = new DefaultApi(defaultClient);
    String roleGroupCode = "roleGroupCode_example"; // String | 그룹코드명
    UpdateRoleGroupInput updateRoleGroupInput = new UpdateRoleGroupInput(); // UpdateRoleGroupInput | 
    try {
      RoleGroup result = apiInstance.roleControllerUpdateRole(roleGroupCode, updateRoleGroupInput);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling DefaultApi#roleControllerUpdateRole");
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
 **roleGroupCode** | **String**| 그룹코드명 |
 **updateRoleGroupInput** | [**UpdateRoleGroupInput**](UpdateRoleGroupInput.md)|  |

### Return type

[**RoleGroup**](RoleGroup.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | 성공 : 수정된 권한을 반환 |  -  |
**400** | 실패 : 권한 목록 중 중복되는 값 존재 |  -  |
**404** | 실패 : 권한 그룹을 찾을 수 없음 |  -  |
**406** | 실패 : 이미 존재하는 그룹 권한 |  -  |

<a name="scrapingCodeControllerActivateScrapingCode"></a>
# **scrapingCodeControllerActivateScrapingCode**
> ScrapingCode scrapingCodeControllerActivateScrapingCode(serviceId, version)

코드 활성 여부 변경 (관리자 전용: 극히 일부사용자만)

특정 버전 코드를 활성/비활성화 한다

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.DefaultApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost");
    
    // Configure HTTP bearer authorization: bearer
    HttpBearerAuth bearer = (HttpBearerAuth) defaultClient.getAuthentication("bearer");
    bearer.setBearerToken("BEARER TOKEN");

    DefaultApi apiInstance = new DefaultApi(defaultClient);
    BigDecimal serviceId = new BigDecimal(78); // BigDecimal | 서비스 순번
    String version = "version_example"; // String | 버전
    try {
      ScrapingCode result = apiInstance.scrapingCodeControllerActivateScrapingCode(serviceId, version);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling DefaultApi#scrapingCodeControllerActivateScrapingCode");
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
 **serviceId** | **BigDecimal**| 서비스 순번 |
 **version** | **String**| 버전 |

### Return type

[**ScrapingCode**](ScrapingCode.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | 성공 : 활성 여부가 변경된 코드를 반환 |  -  |
**404** | 실패 : 해당 버전의 코드를 찾을 수 없음 |  -  |

<a name="scrapingCodeControllerGetScrapingCodes"></a>
# **scrapingCodeControllerGetScrapingCodes**
> GetScrapingCodesOutput scrapingCodeControllerGetScrapingCodes(page, limit, route, serviceId, active)

스크래핑 코드 목록 검색 (관리자 전용: 극히 일부사용자만)

스크래핑 코드목록을 검색한다

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.DefaultApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost");
    
    // Configure HTTP bearer authorization: bearer
    HttpBearerAuth bearer = (HttpBearerAuth) defaultClient.getAuthentication("bearer");
    bearer.setBearerToken("BEARER TOKEN");

    DefaultApi apiInstance = new DefaultApi(defaultClient);
    BigDecimal page = new BigDecimal(78); // BigDecimal | 페이징 페이지 정보
    BigDecimal limit = new BigDecimal(78); // BigDecimal | 페이징 페이지당 목록 수
    String route = "route_example"; // String | 페이징 링크 경로
    BigDecimal serviceId = new BigDecimal(78); // BigDecimal | 서비스 순번
    String active = "active_example"; // String | 활성화 여부 (1: 활성, 0: 비활성)
    try {
      GetScrapingCodesOutput result = apiInstance.scrapingCodeControllerGetScrapingCodes(page, limit, route, serviceId, active);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling DefaultApi#scrapingCodeControllerGetScrapingCodes");
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
 **route** | **String**| 페이징 링크 경로 | [optional]
 **serviceId** | **BigDecimal**| 서비스 순번 | [optional]
 **active** | **String**| 활성화 여부 (1: 활성, 0: 비활성) | [optional] [enum: 0, 1]

### Return type

[**GetScrapingCodesOutput**](GetScrapingCodesOutput.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | 성공 : 스크랩핑 코드 목록을 반환 |  -  |

<a name="scrapingCodeControllerRegisterScrapingCodeVersion"></a>
# **scrapingCodeControllerRegisterScrapingCodeVersion**
> ScrapingCode scrapingCodeControllerRegisterScrapingCodeVersion(registerScrapingCodeVersionInput)

스크래핑 코드 버전 등록 (Github Action &gt;&gt; Amazon SNS)

스크래핑 코드버전을 등록한다

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.DefaultApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost");
    
    // Configure HTTP bearer authorization: bearer
    HttpBearerAuth bearer = (HttpBearerAuth) defaultClient.getAuthentication("bearer");
    bearer.setBearerToken("BEARER TOKEN");

    DefaultApi apiInstance = new DefaultApi(defaultClient);
    RegisterScrapingCodeVersionInput registerScrapingCodeVersionInput = new RegisterScrapingCodeVersionInput(); // RegisterScrapingCodeVersionInput | 
    try {
      ScrapingCode result = apiInstance.scrapingCodeControllerRegisterScrapingCodeVersion(registerScrapingCodeVersionInput);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling DefaultApi#scrapingCodeControllerRegisterScrapingCodeVersion");
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
 **registerScrapingCodeVersionInput** | [**RegisterScrapingCodeVersionInput**](RegisterScrapingCodeVersionInput.md)|  |

### Return type

[**ScrapingCode**](ScrapingCode.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | 성공 : 등록된 스크랩핑 코드 버전을 반환 |  -  |
**406** | 실패 : 이미 존재하는 버전 |  -  |
**500** | 실패 : 스크래핑 코드 업로드 중 오류 발생 |  -  |

<a name="serviceControllerGetService"></a>
# **serviceControllerGetService**
> Service serviceControllerGetService(serviceId)

서비스 조회 (관리자전용)

특정 서비스를 조회한다

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.DefaultApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost");
    
    // Configure HTTP bearer authorization: bearer
    HttpBearerAuth bearer = (HttpBearerAuth) defaultClient.getAuthentication("bearer");
    bearer.setBearerToken("BEARER TOKEN");

    DefaultApi apiInstance = new DefaultApi(defaultClient);
    BigDecimal serviceId = new BigDecimal(78); // BigDecimal | 
    try {
      Service result = apiInstance.serviceControllerGetService(serviceId);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling DefaultApi#serviceControllerGetService");
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
 **serviceId** | **BigDecimal**|  |

### Return type

[**Service**](Service.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | 성공 : 조회한 서비스를 반환 |  -  |
**404** | 실패 : 서비스를 찾을 수 없음 |  -  |

<a name="serviceControllerGetServices"></a>
# **serviceControllerGetServices**
> GetServicesOutput serviceControllerGetServices(page, limit, route, category, jangbuId)

서비스 목록 검색

서비스 목록을 검색한다

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.DefaultApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost");
    
    // Configure HTTP bearer authorization: bearer
    HttpBearerAuth bearer = (HttpBearerAuth) defaultClient.getAuthentication("bearer");
    bearer.setBearerToken("BEARER TOKEN");

    DefaultApi apiInstance = new DefaultApi(defaultClient);
    BigDecimal page = new BigDecimal(78); // BigDecimal | 페이징 페이지 정보
    BigDecimal limit = new BigDecimal(78); // BigDecimal | 페이징 페이지당 목록 수
    String route = "route_example"; // String | 페이징 링크 경로
    String category = "계좌통합"; // String | 서비스 카테고리
    BigDecimal jangbuId = new BigDecimal(78); // BigDecimal | 장부사 순번
    try {
      GetServicesOutput result = apiInstance.serviceControllerGetServices(page, limit, route, category, jangbuId);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling DefaultApi#serviceControllerGetServices");
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
 **route** | **String**| 페이징 링크 경로 | [optional]
 **category** | **String**| 서비스 카테고리 | [optional] [enum: 회계업로드, 계좌통합, 음식배달, EDI]
 **jangbuId** | **BigDecimal**| 장부사 순번 | [optional]

### Return type

[**GetServicesOutput**](GetServicesOutput.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | 성공 : 서비스 목록을 반환 |  -  |

<a name="serviceControllerRegisterService"></a>
# **serviceControllerRegisterService**
> Service serviceControllerRegisterService(registerServiceInput)

서비스 등록 (관리자전용: 일부사용자 or 정산관리자)

서비스를 새로 등록한다

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.DefaultApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost");
    
    // Configure HTTP bearer authorization: bearer
    HttpBearerAuth bearer = (HttpBearerAuth) defaultClient.getAuthentication("bearer");
    bearer.setBearerToken("BEARER TOKEN");

    DefaultApi apiInstance = new DefaultApi(defaultClient);
    RegisterServiceInput registerServiceInput = new RegisterServiceInput(); // RegisterServiceInput | 
    try {
      Service result = apiInstance.serviceControllerRegisterService(registerServiceInput);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling DefaultApi#serviceControllerRegisterService");
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
 **registerServiceInput** | [**RegisterServiceInput**](RegisterServiceInput.md)|  |

### Return type

[**Service**](Service.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | 성공 : 등록한 서비스를 반환 |  -  |
**406** | 실패 : 이미 존재하는 서비스 |  -  |

<a name="serviceControllerUpdateService"></a>
# **serviceControllerUpdateService**
> Service serviceControllerUpdateService(serviceId, updateServiceInput)

서비스 수정 (관리자전용: 일부사용자)

서비스를 수정한다

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.DefaultApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost");
    
    // Configure HTTP bearer authorization: bearer
    HttpBearerAuth bearer = (HttpBearerAuth) defaultClient.getAuthentication("bearer");
    bearer.setBearerToken("BEARER TOKEN");

    DefaultApi apiInstance = new DefaultApi(defaultClient);
    BigDecimal serviceId = new BigDecimal(78); // BigDecimal | 
    UpdateServiceInput updateServiceInput = new UpdateServiceInput(); // UpdateServiceInput | 
    try {
      Service result = apiInstance.serviceControllerUpdateService(serviceId, updateServiceInput);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling DefaultApi#serviceControllerUpdateService");
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
 **serviceId** | **BigDecimal**|  |
 **updateServiceInput** | [**UpdateServiceInput**](UpdateServiceInput.md)|  |

### Return type

[**Service**](Service.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | 성공 : 수정된 서비스를 반환 |  -  |
**404** | 실패 : 서비스를 찾을 수 없음 |  -  |

<a name="workControllerGetWork"></a>
# **workControllerGetWork**
> Work workControllerGetWork(jangbuId, userId, workId)

업무 조회

특정 업무를 조회한다

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.DefaultApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost");
    
    // Configure HTTP bearer authorization: bearer
    HttpBearerAuth bearer = (HttpBearerAuth) defaultClient.getAuthentication("bearer");
    bearer.setBearerToken("BEARER TOKEN");

    DefaultApi apiInstance = new DefaultApi(defaultClient);
    BigDecimal jangbuId = new BigDecimal(78); // BigDecimal | 장부사 순번
    BigDecimal userId = new BigDecimal(78); // BigDecimal | 회원 순번
    BigDecimal workId = new BigDecimal(78); // BigDecimal | 업무 순번
    try {
      Work result = apiInstance.workControllerGetWork(jangbuId, userId, workId);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling DefaultApi#workControllerGetWork");
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
 **jangbuId** | **BigDecimal**| 장부사 순번 |
 **userId** | **BigDecimal**| 회원 순번 |
 **workId** | **BigDecimal**| 업무 순번 |

### Return type

[**Work**](Work.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | 성공 : 업무정보를 반환 |  -  |
**404** | 해당 업무내역이 존재하지 않음 |  -  |

<a name="workControllerGetWorkS3Data"></a>
# **workControllerGetWorkS3Data**
> GetWorkS3DataResponse workControllerGetWorkS3Data(path)

(관리자전용) 특정 업무의 S3정보 조회 (업로드 정보 또는 스크래핑 정보)

(관리자전용) 특정 업무의 S3정보를 조회한다.

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.DefaultApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost");
    
    // Configure HTTP bearer authorization: bearer
    HttpBearerAuth bearer = (HttpBearerAuth) defaultClient.getAuthentication("bearer");
    bearer.setBearerToken("BEARER TOKEN");

    DefaultApi apiInstance = new DefaultApi(defaultClient);
    String path = "path_example"; // String | S3저장 경로
    try {
      GetWorkS3DataResponse result = apiInstance.workControllerGetWorkS3Data(path);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling DefaultApi#workControllerGetWorkS3Data");
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
 **path** | **String**| S3저장 경로 |

### Return type

[**GetWorkS3DataResponse**](GetWorkS3DataResponse.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | 성공 : 업로드 또는 스크래핑 로그 정보를 반환 |  -  |
**404** | 존재하지 않는 S3 데이터 |  -  |

<a name="workControllerGetWorkS3DetailLog"></a>
# **workControllerGetWorkS3DetailLog**
> GetWorkS3DetailLogResponse workControllerGetWorkS3DetailLog(workId)

특정 업무의 S3정보의 조회 (업로드 로그)

특정 업무의 S3정보(업로드 로그)를 조회한다.

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.DefaultApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost");
    
    // Configure HTTP bearer authorization: bearer
    HttpBearerAuth bearer = (HttpBearerAuth) defaultClient.getAuthentication("bearer");
    bearer.setBearerToken("BEARER TOKEN");

    DefaultApi apiInstance = new DefaultApi(defaultClient);
    BigDecimal workId = new BigDecimal(78); // BigDecimal | 업무순번
    try {
      GetWorkS3DetailLogResponse result = apiInstance.workControllerGetWorkS3DetailLog(workId);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling DefaultApi#workControllerGetWorkS3DetailLog");
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
 **workId** | **BigDecimal**| 업무순번 |

### Return type

[**GetWorkS3DetailLogResponse**](GetWorkS3DetailLogResponse.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | 성공 : S3(업로드 로그) 데이터 목록을 반환 |  -  |
**404** | 존재하지 않는 업무내역 또는 S3데이터가 없는경우, 정보가 없는경우 혹은 업무내역의 로그가 없거나 요청타입이 없는경우 |  -  |

<a name="workControllerGetWorks"></a>
# **workControllerGetWorks**
> GetWorksOutput workControllerGetWorks(page, limit, startAt, endAt, route, serviceId, status, type, loginId, userName, jangbuName, memo, count)

업무 목록 검색 (관리자 전용)

업무목록을 검색한다

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.DefaultApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost");
    
    // Configure HTTP bearer authorization: bearer
    HttpBearerAuth bearer = (HttpBearerAuth) defaultClient.getAuthentication("bearer");
    bearer.setBearerToken("BEARER TOKEN");

    DefaultApi apiInstance = new DefaultApi(defaultClient);
    BigDecimal page = new BigDecimal(78); // BigDecimal | 페이징 페이지 정보
    BigDecimal limit = new BigDecimal(78); // BigDecimal | 페이징 페이지당 목록 수
    BigDecimal startAt = new BigDecimal(78); // BigDecimal | 검색시작일자 (YYYYMMDD)
    BigDecimal endAt = new BigDecimal(78); // BigDecimal | 검색종료일자 (YYYYMMDD)
    String route = "route_example"; // String | 페이징 링크 경로
    BigDecimal serviceId = new BigDecimal(78); // BigDecimal | 서비스 순번
    ProcessFlag status = ProcessFlag.fromValue("접수"); // ProcessFlag | 상태별
    WorkRequestType type = WorkRequestType.fromValue("budget_cis_send"); // WorkRequestType | (업무)요청 타입
    String loginId = "loginId_example"; // String | (로그인) 아이디
    String userName = "userName_example"; // String | 상호명
    String jangbuName = "jangbuName_example"; // String | 장부사명
    String memo = "memo_example"; // String | 메모내용
    BigDecimal count = new BigDecimal(78); // BigDecimal | 접수 건수
    try {
      GetWorksOutput result = apiInstance.workControllerGetWorks(page, limit, startAt, endAt, route, serviceId, status, type, loginId, userName, jangbuName, memo, count);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling DefaultApi#workControllerGetWorks");
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
 **startAt** | **BigDecimal**| 검색시작일자 (YYYYMMDD) |
 **endAt** | **BigDecimal**| 검색종료일자 (YYYYMMDD) |
 **route** | **String**| 페이징 링크 경로 | [optional]
 **serviceId** | **BigDecimal**| 서비스 순번 | [optional]
 **status** | [**ProcessFlag**](.md)| 상태별 | [optional] [enum: 접수, 승인, 진행, 실패, 접수실패, 성공, 자동취소, 수동취소, 중복취소]
 **type** | [**WorkRequestType**](.md)| (업무)요청 타입 | [optional] [enum: budget_cis_send, budget_delete_upload, budget_upload, slip_bill_delete_upload, slip_bill_upload, slip_cis_send, slip_detail_upload, slip_delete_upload, slip_upload, slip_upload_monthly, slip_split_delete_upload, slip_voucher_upload, food_delivery, all, health, pension, employment]
 **loginId** | **String**| (로그인) 아이디 | [optional]
 **userName** | **String**| 상호명 | [optional]
 **jangbuName** | **String**| 장부사명 | [optional]
 **memo** | **String**| 메모내용 | [optional]
 **count** | **BigDecimal**| 접수 건수 | [optional]

### Return type

[**GetWorksOutput**](GetWorksOutput.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | 성공 : 업무목록을 반환 |  -  |

<a name="workControllerGetWorksByJangbu"></a>
# **workControllerGetWorksByJangbu**
> GetWorksOutput workControllerGetWorksByJangbu(jangbuId, page, limit, startAt, endAt, route, serviceId, status, type, loginId, userName, memo, count)

장부사별 업무 목록 검색 (장부사 전용)

장부사별 업무목록을 검색한다

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.DefaultApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost");
    
    // Configure HTTP bearer authorization: bearer
    HttpBearerAuth bearer = (HttpBearerAuth) defaultClient.getAuthentication("bearer");
    bearer.setBearerToken("BEARER TOKEN");

    DefaultApi apiInstance = new DefaultApi(defaultClient);
    BigDecimal jangbuId = new BigDecimal(78); // BigDecimal | 장부사 순번
    BigDecimal page = new BigDecimal(78); // BigDecimal | 페이징 페이지 정보
    BigDecimal limit = new BigDecimal(78); // BigDecimal | 페이징 페이지당 목록 수
    BigDecimal startAt = new BigDecimal(78); // BigDecimal | 검색시작일자 (YYYYMMDD)
    BigDecimal endAt = new BigDecimal(78); // BigDecimal | 검색종료일자 (YYYYMMDD)
    String route = "route_example"; // String | 페이징 링크 경로
    BigDecimal serviceId = new BigDecimal(78); // BigDecimal | 서비스 순번
    ProcessFlag status = ProcessFlag.fromValue("접수"); // ProcessFlag | 상태별
    WorkRequestType type = WorkRequestType.fromValue("budget_cis_send"); // WorkRequestType | (업무)요청 타입
    String loginId = "loginId_example"; // String | (로그인) 아이디
    String userName = "userName_example"; // String | 상호명
    String memo = "memo_example"; // String | 메모내용
    BigDecimal count = new BigDecimal(78); // BigDecimal | 데이터 건수
    try {
      GetWorksOutput result = apiInstance.workControllerGetWorksByJangbu(jangbuId, page, limit, startAt, endAt, route, serviceId, status, type, loginId, userName, memo, count);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling DefaultApi#workControllerGetWorksByJangbu");
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
 **jangbuId** | **BigDecimal**| 장부사 순번 |
 **page** | **BigDecimal**| 페이징 페이지 정보 |
 **limit** | **BigDecimal**| 페이징 페이지당 목록 수 |
 **startAt** | **BigDecimal**| 검색시작일자 (YYYYMMDD) |
 **endAt** | **BigDecimal**| 검색종료일자 (YYYYMMDD) |
 **route** | **String**| 페이징 링크 경로 | [optional]
 **serviceId** | **BigDecimal**| 서비스 순번 | [optional]
 **status** | [**ProcessFlag**](.md)| 상태별 | [optional] [enum: 접수, 승인, 진행, 실패, 접수실패, 성공, 자동취소, 수동취소, 중복취소]
 **type** | [**WorkRequestType**](.md)| (업무)요청 타입 | [optional] [enum: budget_cis_send, budget_delete_upload, budget_upload, slip_bill_delete_upload, slip_bill_upload, slip_cis_send, slip_detail_upload, slip_delete_upload, slip_upload, slip_upload_monthly, slip_split_delete_upload, slip_voucher_upload, food_delivery, all, health, pension, employment]
 **loginId** | **String**| (로그인) 아이디 | [optional]
 **userName** | **String**| 상호명 | [optional]
 **memo** | **String**| 메모내용 | [optional]
 **count** | **BigDecimal**| 데이터 건수 | [optional]

### Return type

[**GetWorksOutput**](GetWorksOutput.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | 성공 : 장부사별 업무목록을 반환 |  -  |
**404** | 장부사가 존재하지 않는 경우에 해당 |  -  |

<a name="workControllerGetWorksByUser"></a>
# **workControllerGetWorksByUser**
> GetWorksOutput workControllerGetWorksByUser(userId, jangbuId, page, limit, startAt, endAt, route, status, memo, count)

사용자별 업무 목록 검색 (고객 전용)

사용자별 업무목록을 검색한다

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.DefaultApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost");
    
    // Configure HTTP bearer authorization: bearer
    HttpBearerAuth bearer = (HttpBearerAuth) defaultClient.getAuthentication("bearer");
    bearer.setBearerToken("BEARER TOKEN");

    DefaultApi apiInstance = new DefaultApi(defaultClient);
    BigDecimal userId = new BigDecimal(78); // BigDecimal | 회원 순번
    BigDecimal jangbuId = new BigDecimal(78); // BigDecimal | 장부사 순번
    BigDecimal page = new BigDecimal(78); // BigDecimal | 페이징 페이지 정보
    BigDecimal limit = new BigDecimal(78); // BigDecimal | 페이징 페이지당 목록 수
    BigDecimal startAt = new BigDecimal(78); // BigDecimal | 검색시작일자 (YYYYMMDD)
    BigDecimal endAt = new BigDecimal(78); // BigDecimal | 검색종료일자 (YYYYMMDD)
    String route = "route_example"; // String | 페이징 링크 경로
    ProcessFlag status = ProcessFlag.fromValue("접수"); // ProcessFlag | 상태별
    String memo = "memo_example"; // String | 메모내용
    BigDecimal count = new BigDecimal(78); // BigDecimal | 데이터 건수
    try {
      GetWorksOutput result = apiInstance.workControllerGetWorksByUser(userId, jangbuId, page, limit, startAt, endAt, route, status, memo, count);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling DefaultApi#workControllerGetWorksByUser");
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
 **userId** | **BigDecimal**| 회원 순번 |
 **jangbuId** | **BigDecimal**| 장부사 순번 |
 **page** | **BigDecimal**| 페이징 페이지 정보 |
 **limit** | **BigDecimal**| 페이징 페이지당 목록 수 |
 **startAt** | **BigDecimal**| 검색시작일자 (YYYYMMDD) |
 **endAt** | **BigDecimal**| 검색종료일자 (YYYYMMDD) |
 **route** | **String**| 페이징 링크 경로 | [optional]
 **status** | [**ProcessFlag**](.md)| 상태별 | [optional] [enum: 접수, 승인, 진행, 실패, 접수실패, 성공, 자동취소, 수동취소, 중복취소]
 **memo** | **String**| 메모내용 | [optional]
 **count** | **BigDecimal**| 데이터 건수 | [optional]

### Return type

[**GetWorksOutput**](GetWorksOutput.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | 성공 : 사용자별 업무목록을 반환 |  -  |
**404** | 장부사가 존재하지 않거나 장부사의 고객이 아닌 경우에 해당 |  -  |

<a name="workControllerUpdateWork"></a>
# **workControllerUpdateWork**
> Work workControllerUpdateWork(jangbuId, userId, workId)

(접수 또는 승인건만) 업무 수정 (관리자 전용: 취소처리)

(접수 또는 승인건만) 업무를 수정한다

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.DefaultApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost");
    
    // Configure HTTP bearer authorization: bearer
    HttpBearerAuth bearer = (HttpBearerAuth) defaultClient.getAuthentication("bearer");
    bearer.setBearerToken("BEARER TOKEN");

    DefaultApi apiInstance = new DefaultApi(defaultClient);
    BigDecimal jangbuId = new BigDecimal(78); // BigDecimal | 장부사 순번
    BigDecimal userId = new BigDecimal(78); // BigDecimal | 회원 순번
    BigDecimal workId = new BigDecimal(78); // BigDecimal | 업무 순번
    try {
      Work result = apiInstance.workControllerUpdateWork(jangbuId, userId, workId);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling DefaultApi#workControllerUpdateWork");
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
 **jangbuId** | **BigDecimal**| 장부사 순번 |
 **userId** | **BigDecimal**| 회원 순번 |
 **workId** | **BigDecimal**| 업무 순번 |

### Return type

[**Work**](Work.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | 성공 : 수정된 업무를 반환 |  -  |
**404** | 해당 업무가 존재하지 않음 |  -  |
**406** | 해당 업무가 접수 또는 승인상태가 아님 |  -  |

