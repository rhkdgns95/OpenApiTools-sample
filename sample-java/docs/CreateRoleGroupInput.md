

# CreateRoleGroupInput


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **String** | 권한그룹 코드 | 
**name** | **String** | 권한그룹명 | 
**desc** | **String** | 권한그룹 설명 |  [optional]
**userLevel** | [**UserLevelEnum**](#UserLevelEnum) | 회원 레벨(1: 고객, 2: 장부사, 3: 관리자) | 
**roles** | [**List&lt;RoleGroupMapping&gt;**](RoleGroupMapping.md) | 권한 이름과 접근 권한 목록 | 
**active** | **Boolean** | 활성 여부 | 



## Enum: UserLevelEnum

Name | Value
---- | -----
NUMBER_1 | new BigDecimal(&quot;1&quot;)
NUMBER_2 | new BigDecimal(&quot;2&quot;)
NUMBER_3 | new BigDecimal(&quot;3&quot;)



