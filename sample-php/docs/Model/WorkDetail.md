# # WorkDetail

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**work_id** | **float** | 업무 순번 |
**code** | **string** | 접수코드(장부사 리턴값) |
**version** | **string** | 버전 | [optional]
**type** | [**\OpenAPI\Client\Model\WorkRequestType**](WorkRequestType.md) |  | [optional]
**count** | **float** | 접수된 건수 | [optional]
**trans_at** | **string** | 요청시간 | [optional]
**memo** | **string** | 내용 | [optional]
**provider_type** | **string** | 제공타입(음식배달 등) | [optional]
**biz_manage_number** | **float** | 사업장관리번호(EDI) | [optional]
**year_month** | **float** | 조회대상년월(EDI) | [optional]
**s3_data** | **string** | s3에 보관된 접수data | [optional]
**sub_code** | **string** | 기타정보(w4c) | [optional]

[[Back to Model list]](../../README.md#models) [[Back to API list]](../../README.md#endpoints) [[Back to README]](../../README.md)
