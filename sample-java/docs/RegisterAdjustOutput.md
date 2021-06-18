

# RegisterAdjustOutput


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**step** | **BigDecimal** | 진행된 정산내역 등록단계 | 
**adjustJangbuServices** | [**List&lt;AdjustJangbuService&gt;**](AdjustJangbuService.md) | (1단계진행시 반환정보) 장부사 서비스별 단가목록 |  [optional]
**chargeJangbuPartnership** | [**ChargeJangbuPartnership**](ChargeJangbuPartnership.md) | (1단계진행시 반환정보) 장부사 계좌통합서비스 정보 |  [optional]
**chargeJangbu** | [**ChargeJangbu**](ChargeJangbu.md) | (2단계진행시 반환정보) 해당연월 장부사 정산금액 |  [optional]



