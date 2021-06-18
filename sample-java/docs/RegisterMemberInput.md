

# RegisterMemberInput


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**userLevel** | [**UserLevelEnum**](#UserLevelEnum) | 사용자 유형 | 
**jangbuId** | **BigDecimal** | 장부사 순번 (관리자 회원의 경우에는 생략) |  [optional]
**loginId** | **String** | 로그인 아이디 | 
**name** | **String** | 이름 | 
**ceoName** | **String** | 대표자명 | 
**email** | **String** | 이메일 | 
**phone** | **String** | 휴대폰번호 | 
**roleGroupCode** | **String** | 권한그룹코드 |  [optional]



## Enum: UserLevelEnum

Name | Value
---- | -----
NUMBER_2 | new BigDecimal(&quot;2&quot;)
NUMBER_3 | new BigDecimal(&quot;3&quot;)



