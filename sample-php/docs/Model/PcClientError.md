# # PcClientError

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **float** | 에러 순번 |
**app_name** | **string** | 어플리케이션 명 |
**app_version** | **string** | 어플리케이션 버전 |
**ip** | **string** | IP 주소 |
**error_path** | **string** | 에러정보 S3 경로 |
**client_id** | **float** | 클라이언트 번호 |
**connect_id** | **float** | 접속정보 고유번호 | [optional]
**created_at** | [**\DateTime**](\DateTime.md) | 생성일 |
**connect** | [**Connect**](Connect.md) | 접속정보 | [optional]
**pc_client** | [**PcClient**](PcClient.md) | pc클라이언트 | [optional]

[[Back to Model list]](../../README.md#models) [[Back to API list]](../../README.md#endpoints) [[Back to README]](../../README.md)
