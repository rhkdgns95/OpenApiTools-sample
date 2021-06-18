# # Work

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **float** | 업무 순번 |
**service_id** | **float** | 서비스 순번 |
**user_id** | **float** | 회원 순번 |
**jangbu_id** | **float** | 장부사 순번 |
**status** | [**\OpenAPI\Client\Model\ProcessFlag**](ProcessFlag.md) |  |
**api_id** | **float** | api 순번 | [optional]
**created_at** | [**\DateTime**](\DateTime.md) | 생성일 |
**work_detail** | [**WorkDetail**](WorkDetail.md) | 업무 상세정보 | [optional]
**user** | [**User**](User.md) | 회원정보 | [optional]
**jangbu** | [**Jangbu**](Jangbu.md) | 장부사정보 | [optional]
**work_result** | [**WorkResult**](WorkResult.md) | 스크래핑 결과 | [optional]

[[Back to Model list]](../../README.md#models) [[Back to API list]](../../README.md#endpoints) [[Back to README]](../../README.md)
