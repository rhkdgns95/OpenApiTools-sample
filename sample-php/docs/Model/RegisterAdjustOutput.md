# # RegisterAdjustOutput

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**step** | **float** | 진행된 정산내역 등록단계 |
**adjust_jangbu_services** | [**\OpenAPI\Client\Model\AdjustJangbuService[]**](AdjustJangbuService.md) | (1단계진행시 반환정보) 장부사 서비스별 단가목록 | [optional]
**charge_jangbu_partnership** | [**ChargeJangbuPartnership**](ChargeJangbuPartnership.md) | (1단계진행시 반환정보) 장부사 계좌통합서비스 정보 | [optional]
**charge_jangbu** | [**ChargeJangbu**](ChargeJangbu.md) | (2단계진행시 반환정보) 해당연월 장부사 정산금액 | [optional]

[[Back to Model list]](../../README.md#models) [[Back to API list]](../../README.md#endpoints) [[Back to README]](../../README.md)
