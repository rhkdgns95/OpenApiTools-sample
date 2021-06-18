# # ApiLog

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **float** | api로그 번호 |
**user_id** | **float** | 회원번호 |
**user_level** | **float** | 회원레벨 |
**inout** | [**\OpenAPI\Client\Model\InOutFlag**](InOutFlag.md) |  |
**url** | **string** | 요청 url |
**ip** | **string** | ip |
**result_code** | **string** | 결과 코드 |
**created_at** | **string** | 생성일 |
**detail** | [**ApiLogDetail**](ApiLogDetail.md) | api 로그 상세 |
**user** | [**User**](User.md) | 회원 정보 |

[[Back to Model list]](../../README.md#models) [[Back to API list]](../../README.md#endpoints) [[Back to README]](../../README.md)
