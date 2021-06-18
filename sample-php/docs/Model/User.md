# # User

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **float** | 회원순번 |
**jangbu_id** | **float** | 장부사 순번 (관리자의 경우 없음) | [optional]
**login_id** | **string** | 로그인아이디 |
**name** | **string** | 회원명 |
**ceo_name** | **string** | 대표자명 | [optional]
**email** | **string** | 이메일 |
**phone** | **string** | 핸드폰 |
**created_at** | [**\DateTime**](\DateTime.md) | 생성일시 |
**active** | **bool** | 이용여부 |
**user_level** | **float** | 회원레벨 (1:고객, 2:장부사, 3:관리자) |
**jangbu** | [**Jangbu**](Jangbu.md) | 장부사 | [optional]
**role_group** | [**RoleGroup**](RoleGroup.md) | 권한그룹 | [optional]

[[Back to Model list]](../../README.md#models) [[Back to API list]](../../README.md#endpoints) [[Back to README]](../../README.md)
