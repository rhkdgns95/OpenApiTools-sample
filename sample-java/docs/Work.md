

# Work


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **BigDecimal** | 업무 순번 | 
**serviceId** | **BigDecimal** | 서비스 순번 | 
**userId** | **BigDecimal** | 회원 순번 | 
**jangbuId** | **BigDecimal** | 장부사 순번 | 
**status** | **ProcessFlag** |  | 
**apiId** | **BigDecimal** | api 순번 |  [optional]
**createdAt** | **OffsetDateTime** | 생성일 | 
**workDetail** | [**WorkDetail**](WorkDetail.md) | 업무 상세정보 |  [optional]
**user** | [**User**](User.md) | 회원정보 |  [optional]
**jangbu** | [**Jangbu**](Jangbu.md) | 장부사정보 |  [optional]
**workResult** | [**WorkResult**](WorkResult.md) | 스크래핑 결과 |  [optional]



