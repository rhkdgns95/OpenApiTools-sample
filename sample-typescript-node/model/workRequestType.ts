/**
 * 뱅크다K 웹앱 REST API
 * 뱅크다K 웹앱 REST API : 관리자, 장부사, 고객사
 *
 * The version of the OpenAPI document: 0.5.2
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from './models';

export enum WorkRequestType {
    BudgetCisSend = <any> 'budget_cis_send',
    BudgetDeleteUpload = <any> 'budget_delete_upload',
    BudgetUpload = <any> 'budget_upload',
    SlipBillDeleteUpload = <any> 'slip_bill_delete_upload',
    SlipBillUpload = <any> 'slip_bill_upload',
    SlipCisSend = <any> 'slip_cis_send',
    SlipDetailUpload = <any> 'slip_detail_upload',
    SlipDeleteUpload = <any> 'slip_delete_upload',
    SlipUpload = <any> 'slip_upload',
    SlipUploadMonthly = <any> 'slip_upload_monthly',
    SlipSplitDeleteUpload = <any> 'slip_split_delete_upload',
    SlipVoucherUpload = <any> 'slip_voucher_upload',
    FoodDelivery = <any> 'food_delivery',
    All = <any> 'all',
    Health = <any> 'health',
    Pension = <any> 'pension',
    Employment = <any> 'employment'
}