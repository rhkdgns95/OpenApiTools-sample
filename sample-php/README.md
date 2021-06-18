# OpenAPIClient-php

뱅크다K 웹앱 REST API : 관리자, 장부사, 고객사


## Installation & Usage

### Requirements

PHP 7.2 and later.

### Composer

To install the bindings via [Composer](https://getcomposer.org/), add the following to `composer.json`:

```json
{
  "repositories": [
    {
      "type": "vcs",
      "url": "https://github.com/GIT_USER_ID/GIT_REPO_ID.git"
    }
  ],
  "require": {
    "GIT_USER_ID/GIT_REPO_ID": "*@dev"
  }
}
```

Then run `composer install`

### Manual Installation

Download the files and include `autoload.php`:

```php
<?php
require_once('/path/to/OpenAPIClient-php/vendor/autoload.php');
```

## Getting Started

Please follow the [installation procedure](#installation--usage) and then run the following:

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

## API Endpoints

All URIs are relative to *http://localhost*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*DefaultApi* | [**adjustControllerGetChargeJangbuPartnership**](docs/Api/DefaultApi.md#adjustcontrollergetchargejangbupartnership) | **GET** /public/api/adjust/jangbu/{jangbuId}/yearMonth/{yearMonth}/partnership | (해당연월) 장부사의 파트너쉽 금액 조회
*DefaultApi* | [**adjustControllerGetChargeJangbuPreview**](docs/Api/DefaultApi.md#adjustcontrollergetchargejangbupreview) | **GET** /public/api/adjust/jangbu/{jangbuId}/yearMonth/{yearMonth}/preview | 
*DefaultApi* | [**adjustControllerRegisterAdjust**](docs/Api/DefaultApi.md#adjustcontrollerregisteradjust) | **PUT** /public/api/adjust/jangbu/{jangbuId}/yearMonth/{yearMonth}/step/{step} | 정산 등록 (관리자 전용: 극히 일부사용자만)
*DefaultApi* | [**adjustControllerSearchAdjustJangbuServices**](docs/Api/DefaultApi.md#adjustcontrollersearchadjustjangbuservices) | **GET** /public/api/adjust/jangbu/{jangbuId}/yearMonth/{yearMonth} | 장부사 서비스별 단가 검색 (장부사,관리자 전용)
*DefaultApi* | [**adjustControllerSearchChargeJangbuFromJangbu**](docs/Api/DefaultApi.md#adjustcontrollersearchchargejangbufromjangbu) | **GET** /public/api/adjust/jangbu/{jangbuId} | (특정 장부사의) 정산목록 검색 (장부사 전용)
*DefaultApi* | [**adjustControllerSearchChargeJangbuUserServices**](docs/Api/DefaultApi.md#adjustcontrollersearchchargejangbuuserservices) | **GET** /public/api/adjust/jangbu/{jangbuId}/yearMonth/{yearMonth}/service/{serviceId} | 장부사 특정 서비스 회원별 요금목록 검색 (장부사,관리자 전용)
*DefaultApi* | [**adjustControllerSearchChargeJangbus**](docs/Api/DefaultApi.md#adjustcontrollersearchchargejangbus) | **GET** /public/api/adjust | 정산내역 목록 검색 (관리자 전용)
*DefaultApi* | [**adjustControllerSendChargeJangbuMailTest**](docs/Api/DefaultApi.md#adjustcontrollersendchargejangbumailtest) | **POST** /public/api/adjust/jangbu/{jangbuId}/yearMonth/{yearMonth}/testmail | 
*DefaultApi* | [**adjustControllerUpdateAdjustJangbuService**](docs/Api/DefaultApi.md#adjustcontrollerupdateadjustjangbuservice) | **PATCH** /public/api/adjust/jangbu/{jangbuId}/yearMonth/{yearMonth}/service/{serviceId} | (해당연월) 장부사 특정 서비스 단가를 수정
*DefaultApi* | [**adjustControllerUpdateChargeJangbuPaid**](docs/Api/DefaultApi.md#adjustcontrollerupdatechargejangbupaid) | **PATCH** /public/api/adjust/jangbu/{jangbuId}/yearMonth/{yearMonth}/paid | 정산내역 수납여부 업데이트 (관리자 전용: 극히 일부사용자만)
*DefaultApi* | [**adjustControllerUpdateChargeJangbuPartnership**](docs/Api/DefaultApi.md#adjustcontrollerupdatechargejangbupartnership) | **PATCH** /public/api/adjust/jangbu/{jangbuId}/yearMonth/{yearMonth}/partnership | (해당연월) 장부사의 파트너쉽 금액 수정
*DefaultApi* | [**adjustControllerUpdateChargeJangbuStatus**](docs/Api/DefaultApi.md#adjustcontrollerupdatechargejangbustatus) | **PATCH** /public/api/adjust/jangbu/{jangbuId}/yearMonth/{yearMonth}/status | 정산내역 비공개 → 공개 상태값 업데이트 및 정산내역 메일 발송 (관리자 전용: 극히 일부사용자만)
*DefaultApi* | [**authControllerDeleteToken**](docs/Api/DefaultApi.md#authcontrollerdeletetoken) | **DELETE** /public/api/auth/{refreshToken} | 로그아웃 (토큰삭제)
*DefaultApi* | [**authControllerLogin**](docs/Api/DefaultApi.md#authcontrollerlogin) | **POST** /public/api/auth | 토큰발급
*DefaultApi* | [**authControllerRefresh**](docs/Api/DefaultApi.md#authcontrollerrefresh) | **PUT** /public/api/auth | 토큰갱신
*DefaultApi* | [**errorControllerGetCert**](docs/Api/DefaultApi.md#errorcontrollergetcert) | **GET** /public/api/error/{errorId}/cert | 인증서 조회 (관리자 전용: 극히 일부사용자만)
*DefaultApi* | [**errorControllerGetError**](docs/Api/DefaultApi.md#errorcontrollergeterror) | **GET** /public/api/error/{errorId} | 에러 조회 (관리자 전용)
*DefaultApi* | [**errorControllerGetErrors**](docs/Api/DefaultApi.md#errorcontrollergeterrors) | **GET** /public/api/error | 에러 목록 검색 (관리자 전용)
*DefaultApi* | [**jangbuControllerGetJangbu**](docs/Api/DefaultApi.md#jangbucontrollergetjangbu) | **GET** /public/api/jangbu/{jangbuId} | 장부사 조회 (관리자 전용)
*DefaultApi* | [**jangbuControllerGetJangbus**](docs/Api/DefaultApi.md#jangbucontrollergetjangbus) | **GET** /public/api/jangbu | 장부사 목록 검색 (관리자 전용)
*DefaultApi* | [**jangbuControllerGetJangbusWithChargeJangbuPartnership**](docs/Api/DefaultApi.md#jangbucontrollergetjangbuswithchargejangbupartnership) | **GET** /public/api/jangbu/yearMonth/{yearMonth} | (특정연월의 파트너쉽 단가정보와) 장부사 검색 (관리자 전용)
*DefaultApi* | [**jangbuControllerRegisterJangbu**](docs/Api/DefaultApi.md#jangbucontrollerregisterjangbu) | **POST** /public/api/jangbu | 장부사 등록 (관리자 전용)
*DefaultApi* | [**jangbuControllerUpdateJangbu**](docs/Api/DefaultApi.md#jangbucontrollerupdatejangbu) | **PATCH** /public/api/jangbu/{jangbuId} | 장부사 수정 (관리자 전용)
*DefaultApi* | [**memberControllerFindMember**](docs/Api/DefaultApi.md#membercontrollerfindmember) | **POST** /public/api/member/find/account | 아이디 찾기 또는 패스워드 찾기
*DefaultApi* | [**memberControllerGetMember**](docs/Api/DefaultApi.md#membercontrollergetmember) | **GET** /public/api/member/{userId} | 회원 조회
*DefaultApi* | [**memberControllerGetMembers**](docs/Api/DefaultApi.md#membercontrollergetmembers) | **GET** /public/api/member | 회원 목록 검색
*DefaultApi* | [**memberControllerGetResetPassword**](docs/Api/DefaultApi.md#membercontrollergetresetpassword) | **GET** /public/api/member/recover/{recoveryKey} | 패스워드 재설정 조회
*DefaultApi* | [**memberControllerRegisterCustomer**](docs/Api/DefaultApi.md#membercontrollerregistercustomer) | **POST** /public/api/member/user | (고객사) 계정 등록
*DefaultApi* | [**memberControllerRegisterMember**](docs/Api/DefaultApi.md#membercontrollerregistermember) | **POST** /public/api/member | (관리자 또는 장부사) 계정 등록 (관라지만 이용)
*DefaultApi* | [**memberControllerResetPassword**](docs/Api/DefaultApi.md#membercontrollerresetpassword) | **PATCH** /public/api/member/recover/{recoveryKey} | (계정찾기진행시) 패스워드 재설정 처리
*DefaultApi* | [**memberControllerResetPasswordWithIdEmail**](docs/Api/DefaultApi.md#membercontrollerresetpasswordwithidemail) | **PATCH** /public/api/member/{memberId}/reset | 로그인 패스워드 초기화
*DefaultApi* | [**memberControllerSaveUserRoleGroup**](docs/Api/DefaultApi.md#membercontrollersaveuserrolegroup) | **PATCH** /public/api/member/{userId}/role/{roleGroupCode} | 계정의 권한그룹 저장
*DefaultApi* | [**memberControllerUpdateMember**](docs/Api/DefaultApi.md#membercontrollerupdatemember) | **PATCH** /public/api/member/{userId} | 계정 수정
*DefaultApi* | [**mobileAppControllerGetAppVersions**](docs/Api/DefaultApi.md#mobileappcontrollergetappversions) | **GET** /public/api/app/version | 앱 버전 목록 검색 (관리자 전용)
*DefaultApi* | [**mobileAppControllerGetJangbuMessage**](docs/Api/DefaultApi.md#mobileappcontrollergetjangbumessage) | **GET** /public/api/app/jangbu/{jangbuId}/message/{messageId} | (특정 장부사의) 메시지 조회 (관리자, 장부사 전용)
*DefaultApi* | [**mobileAppControllerGetJangbuMessages**](docs/Api/DefaultApi.md#mobileappcontrollergetjangbumessages) | **GET** /public/api/app/jangbu/{jangbuId}/message | (특정 장부사의) 메시지 목록 검색 (관리자, 장부사 전용)
*DefaultApi* | [**mobileAppControllerGetUsingAppUsers**](docs/Api/DefaultApi.md#mobileappcontrollergetusingappusers) | **GET** /public/api/app/user | 앱 사용자 목록 검색 (관리자 전용)
*DefaultApi* | [**mobileAppControllerRegisterAppVersion**](docs/Api/DefaultApi.md#mobileappcontrollerregisterappversion) | **POST** /public/api/app/version | 앱 버전 등록 (관리자 전용)
*DefaultApi* | [**mobileAppControllerUpdateAppVersion**](docs/Api/DefaultApi.md#mobileappcontrollerupdateappversion) | **PATCH** /public/api/app/version/{versionId} | 앱 버전 수정 (관리자 전용)
*DefaultApi* | [**noticeControllerDeleteNotice**](docs/Api/DefaultApi.md#noticecontrollerdeletenotice) | **DELETE** /public/api/notice/{noticeId} | 공지사항 삭제 (관리자 전용)
*DefaultApi* | [**noticeControllerGetNotice**](docs/Api/DefaultApi.md#noticecontrollergetnotice) | **GET** /public/api/notice/{noticeId} | 공지사항 조회 (관리자, 장부사 전용)
*DefaultApi* | [**noticeControllerGetNotices**](docs/Api/DefaultApi.md#noticecontrollergetnotices) | **GET** /public/api/notice | 공지사항 검색 (관리자, 장부사 전용)
*DefaultApi* | [**noticeControllerRegisterNotice**](docs/Api/DefaultApi.md#noticecontrollerregisternotice) | **POST** /public/api/notice | 공지사항 등록 (관리자 전용)
*DefaultApi* | [**noticeControllerUpdateNotice**](docs/Api/DefaultApi.md#noticecontrollerupdatenotice) | **PUT** /public/api/notice/{noticeId} | 공지사항 수정 (관리자 전용)
*DefaultApi* | [**roleControllerGetRoles**](docs/Api/DefaultApi.md#rolecontrollergetroles) | **GET** /public/api/role | 권한 목록 검색 (관리자, 장부사 전용)
*DefaultApi* | [**roleControllerRegisterRole**](docs/Api/DefaultApi.md#rolecontrollerregisterrole) | **POST** /public/api/role | 권한 등록 (관리자 전용)
*DefaultApi* | [**roleControllerUpdateRole**](docs/Api/DefaultApi.md#rolecontrollerupdaterole) | **PUT** /public/api/role/{roleGroupCode} | 권한 수정 (관리자 전용)
*DefaultApi* | [**scrapingCodeControllerActivateScrapingCode**](docs/Api/DefaultApi.md#scrapingcodecontrolleractivatescrapingcode) | **PATCH** /public/api/scraping-code/{serviceId} | 코드 활성 여부 변경 (관리자 전용: 극히 일부사용자만)
*DefaultApi* | [**scrapingCodeControllerGetScrapingCodes**](docs/Api/DefaultApi.md#scrapingcodecontrollergetscrapingcodes) | **GET** /public/api/scraping-code | 스크래핑 코드 목록 검색 (관리자 전용: 극히 일부사용자만)
*DefaultApi* | [**scrapingCodeControllerRegisterScrapingCodeVersion**](docs/Api/DefaultApi.md#scrapingcodecontrollerregisterscrapingcodeversion) | **POST** /public/api/scraping-code | 스크래핑 코드 버전 등록 (Github Action &gt;&gt; Amazon SNS)
*DefaultApi* | [**serviceControllerGetService**](docs/Api/DefaultApi.md#servicecontrollergetservice) | **GET** /public/api/service/{serviceId} | 서비스 조회 (관리자전용)
*DefaultApi* | [**serviceControllerGetServices**](docs/Api/DefaultApi.md#servicecontrollergetservices) | **GET** /public/api/service | 서비스 목록 검색
*DefaultApi* | [**serviceControllerRegisterService**](docs/Api/DefaultApi.md#servicecontrollerregisterservice) | **POST** /public/api/service | 서비스 등록 (관리자전용: 일부사용자 or 정산관리자)
*DefaultApi* | [**serviceControllerUpdateService**](docs/Api/DefaultApi.md#servicecontrollerupdateservice) | **PATCH** /public/api/service/{serviceId} | 서비스 수정 (관리자전용: 일부사용자)
*DefaultApi* | [**workControllerGetWork**](docs/Api/DefaultApi.md#workcontrollergetwork) | **GET** /public/api/jangbu/{jangbuId}/user/{userId}/work/{workId} | 업무 조회
*DefaultApi* | [**workControllerGetWorkS3Data**](docs/Api/DefaultApi.md#workcontrollergetworks3data) | **GET** /public/api/work/log | (관리자전용) 특정 업무의 S3정보 조회 (업로드 정보 또는 스크래핑 정보)
*DefaultApi* | [**workControllerGetWorkS3DetailLog**](docs/Api/DefaultApi.md#workcontrollergetworks3detaillog) | **GET** /public/api/work/log-detail/{workId} | 특정 업무의 S3정보의 조회 (업로드 로그)
*DefaultApi* | [**workControllerGetWorks**](docs/Api/DefaultApi.md#workcontrollergetworks) | **GET** /public/api/work | 업무 목록 검색 (관리자 전용)
*DefaultApi* | [**workControllerGetWorksByJangbu**](docs/Api/DefaultApi.md#workcontrollergetworksbyjangbu) | **GET** /public/api/jangbu/{jangbuId}/work | 장부사별 업무 목록 검색 (장부사 전용)
*DefaultApi* | [**workControllerGetWorksByUser**](docs/Api/DefaultApi.md#workcontrollergetworksbyuser) | **GET** /public/api/jangbu/{jangbuId}/user/{userId}/work | 사용자별 업무 목록 검색 (고객 전용)
*DefaultApi* | [**workControllerUpdateWork**](docs/Api/DefaultApi.md#workcontrollerupdatework) | **PATCH** /public/api/jangbu/{jangbuId}/user/{userId}/work/{workId} | (접수 또는 승인건만) 업무 수정 (관리자 전용: 취소처리)
*APIApi* | [**apiMonitorControllerGetApiMonitor**](docs/Api/APIApi.md#apimonitorcontrollergetapimonitor) | **GET** /public/api/api-monitor/detail/{apiId} | API모니터링 조회 (관리자 전용)
*APIApi* | [**apiMonitorControllerGetApiMonitors**](docs/Api/APIApi.md#apimonitorcontrollergetapimonitors) | **GET** /public/api/api-monitor | API모니터링 목록 검색 (관리자 전용)
*APIApi* | [**apiMonitorControllerGetApiS3Data**](docs/Api/APIApi.md#apimonitorcontrollergetapis3data) | **GET** /public/api/api-monitor/log | API모니터링 S3 데이터 조회 (관리자 전용)

## Models

- [AdjustJangbuService](docs/Model/AdjustJangbuService.md)
- [ApiLog](docs/Model/ApiLog.md)
- [ApiLogDetail](docs/Model/ApiLogDetail.md)
- [AppVersion](docs/Model/AppVersion.md)
- [BudgetCisSend](docs/Model/BudgetCisSend.md)
- [BudgetUpload](docs/Model/BudgetUpload.md)
- [BudgetUploadItem](docs/Model/BudgetUploadItem.md)
- [ChargeJangbu](docs/Model/ChargeJangbu.md)
- [ChargeJangbuPaid](docs/Model/ChargeJangbuPaid.md)
- [ChargeJangbuPartnership](docs/Model/ChargeJangbuPartnership.md)
- [ChargeJangbuStatus](docs/Model/ChargeJangbuStatus.md)
- [ChargeJangbuUserService](docs/Model/ChargeJangbuUserService.md)
- [CommonInfo](docs/Model/CommonInfo.md)
- [Connect](docs/Model/Connect.md)
- [CreateRoleGroupInput](docs/Model/CreateRoleGroupInput.md)
- [ExceptionResponse](docs/Model/ExceptionResponse.md)
- [FindMemberInput](docs/Model/FindMemberInput.md)
- [FindMemberOutput](docs/Model/FindMemberOutput.md)
- [GetApiMonitorsOutput](docs/Model/GetApiMonitorsOutput.md)
- [GetAppVersionsOutput](docs/Model/GetAppVersionsOutput.md)
- [GetCertOutput](docs/Model/GetCertOutput.md)
- [GetChargeJangbuPreviewOutput](docs/Model/GetChargeJangbuPreviewOutput.md)
- [GetErrorsResponse](docs/Model/GetErrorsResponse.md)
- [GetJangbuMessagesOutput](docs/Model/GetJangbuMessagesOutput.md)
- [GetJangbusOutput](docs/Model/GetJangbusOutput.md)
- [GetMembersOutput](docs/Model/GetMembersOutput.md)
- [GetNotices](docs/Model/GetNotices.md)
- [GetScrapingCodesOutput](docs/Model/GetScrapingCodesOutput.md)
- [GetServicesOutput](docs/Model/GetServicesOutput.md)
- [GetWorkS3DataResponse](docs/Model/GetWorkS3DataResponse.md)
- [GetWorkS3DetailLogResponse](docs/Model/GetWorkS3DetailLogResponse.md)
- [GetWorksOutput](docs/Model/GetWorksOutput.md)
- [InOutFlag](docs/Model/InOutFlag.md)
- [Jangbu](docs/Model/Jangbu.md)
- [LoginInput](docs/Model/LoginInput.md)
- [LoginOutput](docs/Model/LoginOutput.md)
- [Message](docs/Model/Message.md)
- [Notice](docs/Model/Notice.md)
- [OsType](docs/Model/OsType.md)
- [PagingLinks](docs/Model/PagingLinks.md)
- [PagingMeta](docs/Model/PagingMeta.md)
- [PcClient](docs/Model/PcClient.md)
- [PcClientError](docs/Model/PcClientError.md)
- [Permission](docs/Model/Permission.md)
- [ProcessFlag](docs/Model/ProcessFlag.md)
- [Recovery](docs/Model/Recovery.md)
- [RefreshInput](docs/Model/RefreshInput.md)
- [RefreshOutput](docs/Model/RefreshOutput.md)
- [RegisterAdjustOutput](docs/Model/RegisterAdjustOutput.md)
- [RegisterAppVersionInput](docs/Model/RegisterAppVersionInput.md)
- [RegisterAppVersionInputInfo](docs/Model/RegisterAppVersionInputInfo.md)
- [RegisterCustomerInput](docs/Model/RegisterCustomerInput.md)
- [RegisterJangbuInput](docs/Model/RegisterJangbuInput.md)
- [RegisterJangbuInputDetailJangbu](docs/Model/RegisterJangbuInputDetailJangbu.md)
- [RegisterJangbuInputDetailUser](docs/Model/RegisterJangbuInputDetailUser.md)
- [RegisterMemberInput](docs/Model/RegisterMemberInput.md)
- [RegisterNoticeInput](docs/Model/RegisterNoticeInput.md)
- [RegisterScrapingCodeVersionInput](docs/Model/RegisterScrapingCodeVersionInput.md)
- [RegisterServiceInput](docs/Model/RegisterServiceInput.md)
- [ResetPasswordInput](docs/Model/ResetPasswordInput.md)
- [ResetPasswordOutput](docs/Model/ResetPasswordOutput.md)
- [RoleGroup](docs/Model/RoleGroup.md)
- [RoleGroupMapping](docs/Model/RoleGroupMapping.md)
- [RoleListItem](docs/Model/RoleListItem.md)
- [RoleName](docs/Model/RoleName.md)
- [ScrapingCode](docs/Model/ScrapingCode.md)
- [SearchAdjustJangbuServicesOutput](docs/Model/SearchAdjustJangbuServicesOutput.md)
- [SearchChargeJangbuUserServicesOutput](docs/Model/SearchChargeJangbuUserServicesOutput.md)
- [SearchChargeJangbusOutput](docs/Model/SearchChargeJangbusOutput.md)
- [SearchRoleGroupOutput](docs/Model/SearchRoleGroupOutput.md)
- [SendChagreJangbuMailTestInput](docs/Model/SendChagreJangbuMailTestInput.md)
- [SendChargeJangbuMailTestOutput](docs/Model/SendChargeJangbuMailTestOutput.md)
- [Service](docs/Model/Service.md)
- [ServiceCategory](docs/Model/ServiceCategory.md)
- [ServiceType](docs/Model/ServiceType.md)
- [ShowType](docs/Model/ShowType.md)
- [SlipCisSend](docs/Model/SlipCisSend.md)
- [SlipSplitDeleteUpload](docs/Model/SlipSplitDeleteUpload.md)
- [SlipSplitDeleteUploadBank](docs/Model/SlipSplitDeleteUploadBank.md)
- [SlipSplitDeleteUploadSlip](docs/Model/SlipSplitDeleteUploadSlip.md)
- [SlipUpload](docs/Model/SlipUpload.md)
- [SlipUploadMonthly](docs/Model/SlipUploadMonthly.md)
- [SlipUploadVoucher](docs/Model/SlipUploadVoucher.md)
- [UpdateAdjustJangbuServiceInput](docs/Model/UpdateAdjustJangbuServiceInput.md)
- [UpdateAppVersionInput](docs/Model/UpdateAppVersionInput.md)
- [UpdateAppVersionInputInfo](docs/Model/UpdateAppVersionInputInfo.md)
- [UpdateChargeJangbuPaidInput](docs/Model/UpdateChargeJangbuPaidInput.md)
- [UpdateChargeJangbuPartnershipInput](docs/Model/UpdateChargeJangbuPartnershipInput.md)
- [UpdateChargeJangbuStatusInput](docs/Model/UpdateChargeJangbuStatusInput.md)
- [UpdateJangbuInput](docs/Model/UpdateJangbuInput.md)
- [UpdateMemberInput](docs/Model/UpdateMemberInput.md)
- [UpdateRoleGroupInput](docs/Model/UpdateRoleGroupInput.md)
- [UpdateServiceInput](docs/Model/UpdateServiceInput.md)
- [User](docs/Model/User.md)
- [UserService](docs/Model/UserService.md)
- [UserServiceType](docs/Model/UserServiceType.md)
- [Work](docs/Model/Work.md)
- [WorkDetail](docs/Model/WorkDetail.md)
- [WorkRequestType](docs/Model/WorkRequestType.md)
- [WorkResult](docs/Model/WorkResult.md)
- [WorkResultDetail](docs/Model/WorkResultDetail.md)

## Authorization

### bearer

- **Type**: Bearer authentication (JWT)

## Tests

To run the tests, use:

```bash
composer install
vendor/bin/phpunit
```

## Author



## About this package

This PHP package is automatically generated by the [OpenAPI Generator](https://openapi-generator.tech) project:

- API version: `0.5.2`
- Build package: `org.openapitools.codegen.languages.PhpClientCodegen`
