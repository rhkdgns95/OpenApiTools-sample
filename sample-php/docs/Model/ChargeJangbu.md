# # ChargeJangbu

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**jangbu_id** | **float** | 장부사 순번 |
**year_month** | **float** | 해당연월 |
**total_price** | **float** | 정산합계금액 |
**discount_price** | **float** | 할인된 금액 |
**min_billing_price** | **float** | 최저이용금액 |
**billing_price** | **float** | 청구금액 |
**vat_price** | **float** | 부가세 포함금액 |
**status** | [**\OpenAPI\Client\Model\ChargeJangbuStatus**](ChargeJangbuStatus.md) |  |
**paid** | [**\OpenAPI\Client\Model\ChargeJangbuPaid**](ChargeJangbuPaid.md) |  |
**memo** | **string** | 메모 (합계산정이유 등) | [optional]
**paid_memo** | **string** | 정산관련메모 (미납사유 등) | [optional]
**charge_jangbu_partnership** | [**ChargeJangbuPartnership**](ChargeJangbuPartnership.md) | 계좌통합서비스 | [optional]
**jangbu** | [**Jangbu**](Jangbu.md) | 장부사 | [optional]

[[Back to Model list]](../../README.md#models) [[Back to API list]](../../README.md#endpoints) [[Back to README]](../../README.md)
