# # CreateRoleGroupInput

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **string** | 권한그룹 코드 |
**name** | **string** | 권한그룹명 |
**desc** | **string** | 권한그룹 설명 | [optional]
**user_level** | **float** | 회원 레벨(1: 고객, 2: 장부사, 3: 관리자) |
**roles** | [**\OpenAPI\Client\Model\RoleGroupMapping[]**](RoleGroupMapping.md) | 권한 이름과 접근 권한 목록 |
**active** | **bool** | 활성 여부 |

[[Back to Model list]](../../README.md#models) [[Back to API list]](../../README.md#endpoints) [[Back to README]](../../README.md)
