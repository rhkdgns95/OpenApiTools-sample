

# ChargeJangbu


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**jangbuId** | **BigDecimal** | 장부사 순번 | 
**yearMonth** | **BigDecimal** | 해당연월 | 
**totalPrice** | **BigDecimal** | 정산합계금액 | 
**discountPrice** | **BigDecimal** | 할인된 금액 | 
**minBillingPrice** | **BigDecimal** | 최저이용금액 | 
**billingPrice** | **BigDecimal** | 청구금액 | 
**vatPrice** | **BigDecimal** | 부가세 포함금액 | 
**status** | **ChargeJangbuStatus** |  | 
**paid** | **ChargeJangbuPaid** |  | 
**memo** | **String** | 메모 (합계산정이유 등) |  [optional]
**paidMemo** | **String** | 정산관련메모 (미납사유 등) |  [optional]
**chargeJangbuPartnership** | [**ChargeJangbuPartnership**](ChargeJangbuPartnership.md) | 계좌통합서비스 |  [optional]
**jangbu** | [**Jangbu**](Jangbu.md) | 장부사 |  [optional]



