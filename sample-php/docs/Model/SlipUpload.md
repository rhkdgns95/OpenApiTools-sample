# # SlipUpload

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**trans_datetime** | **string** | 거래일시(YYYYMMDD) |
**bill_date** | **string** | 일자(YYYYMMDD) |
**trans_date** | **string** | 거래일자(YYYYMMDD) |
**esti_code** | **string** | 과목코드 |
**esti_inout** | **string** | 입출구분(I:세입, O:세출) |
**bill_memo** | **string** | 전표메모(공란) |
**bill_bigo** | **string** | 전표비고 |
**bill_support_at** | **string** | 보조금여부(Y, N) |
**bill_nuri_at** | **string** | 누리지원여부(Y, N) |
**trans_gb** | **string** | 거래내역 입출구분 (I/O) |
**trans_money** | **string** | 거래금액 |
**trans_money_in** | **string** | 입금액(출금거래시 0) |
**trans_money_out** | **string** | 출금액(입금거래시 0) |
**trans_remain** | **string** | 거래후 잔액 |
**trans_memo** | **string** | 거래내용(적요) |
**setle_mthd** | **string** | 결제방식(100~700) |
**voucher** | [**\OpenAPI\Client\Model\SlipUploadVoucher[]**](SlipUploadVoucher.md) | 증빙 목록 | [optional]
**esti_idx** | **string** | (slip_delete_upload의 경우 존재함) | [optional]
**esti_name** | **string** | (slip_delete_upload의 경우 존재함) | [optional]
**esti_depth** | **string** | (slip_delete_upload의 경우 존재함) | [optional]
**esti_name_1** | **string** | (slip_delete_upload의 경우 존재함) | [optional]
**esti_name_2** | **string** | (slip_delete_upload의 경우 존재함) | [optional]
**esti_name_3** | **string** | (slip_delete_upload의 경우 존재함) | [optional]
**bill_subcode** | **string** | (slip_delete_upload의 경우 존재함) | [optional]
**esti_display** | **string** | (slip_delete_upload의 경우 존재함) | [optional]
**esti_gb** | **string** | (slip_delete_upload의 경우 존재함) | [optional]
**esti_part** | **string** | (slip_delete_upload의 경우 존재함) | [optional]
**esti_sub_nm** | **string** | (slip_delete_upload의 경우 존재함) | [optional]
**esti_sub_yn** | **string** | (slip_delete_upload의 경우 존재함) | [optional]

[[Back to Model list]](../../README.md#models) [[Back to API list]](../../README.md#endpoints) [[Back to README]](../../README.md)
