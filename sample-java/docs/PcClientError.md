

# PcClientError


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **BigDecimal** | 에러 순번 | 
**appName** | **String** | 어플리케이션 명 | 
**appVersion** | **String** | 어플리케이션 버전 | 
**ip** | **String** | IP 주소 | 
**errorPath** | **String** | 에러정보 S3 경로 | 
**clientId** | **BigDecimal** | 클라이언트 번호 | 
**connectId** | **BigDecimal** | 접속정보 고유번호 |  [optional]
**createdAt** | **OffsetDateTime** | 생성일 | 
**connect** | [**Connect**](Connect.md) | 접속정보 |  [optional]
**pcClient** | [**PcClient**](PcClient.md) | pc클라이언트 |  [optional]



