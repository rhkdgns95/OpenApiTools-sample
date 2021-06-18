

# FindMemberInput


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**findType** | [**FindTypeEnum**](#FindTypeEnum) | 계정찾기 타입 (아이디의 경우:id, 패스워드의 경우:password) | 
**loginId** | **String** | (비밀번호 찾기의 경우에만 필수) 로그인 아이디 |  [optional]
**name** | **String** | (아이디 찾기의 경우에 필수) 이름 |  [optional]
**email** | **String** | (아이디 찾기 - 이메일로 찾을 경우에 필수) 이메일 |  [optional]



## Enum: FindTypeEnum

Name | Value
---- | -----
ID | &quot;id&quot;
PASSWORD | &quot;password&quot;



