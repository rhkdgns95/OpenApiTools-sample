

# User


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **BigDecimal** | 회원순번 | 
**jangbuId** | **BigDecimal** | 장부사 순번 (관리자의 경우 없음) |  [optional]
**loginId** | **String** | 로그인아이디 | 
**name** | **String** | 회원명 | 
**ceoName** | **String** | 대표자명 |  [optional]
**email** | **String** | 이메일 | 
**phone** | **String** | 핸드폰 | 
**createdAt** | **OffsetDateTime** | 생성일시 | 
**active** | **Boolean** | 이용여부 | 
**userLevel** | **BigDecimal** | 회원레벨 (1:고객, 2:장부사, 3:관리자) | 
**jangbu** | [**Jangbu**](Jangbu.md) | 장부사 |  [optional]
**roleGroup** | [**RoleGroup**](RoleGroup.md) | 권한그룹 |  [optional]



