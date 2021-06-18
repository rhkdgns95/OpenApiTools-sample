import localVarRequest from 'request';

export * from './adjustJangbuService';
export * from './apiLog';
export * from './apiLogDetail';
export * from './appVersion';
export * from './budgetCisSend';
export * from './budgetUpload';
export * from './budgetUploadItem';
export * from './chargeJangbu';
export * from './chargeJangbuPaid';
export * from './chargeJangbuPartnership';
export * from './chargeJangbuStatus';
export * from './chargeJangbuUserService';
export * from './commonInfo';
export * from './connect';
export * from './createRoleGroupInput';
export * from './exceptionResponse';
export * from './findMemberInput';
export * from './findMemberOutput';
export * from './getApiMonitorsOutput';
export * from './getAppVersionsOutput';
export * from './getCertOutput';
export * from './getChargeJangbuPreviewOutput';
export * from './getErrorsResponse';
export * from './getJangbuMessagesOutput';
export * from './getJangbusOutput';
export * from './getMembersOutput';
export * from './getNotices';
export * from './getScrapingCodesOutput';
export * from './getServicesOutput';
export * from './getWorkS3DataResponse';
export * from './getWorkS3DetailLogResponse';
export * from './getWorksOutput';
export * from './inOutFlag';
export * from './jangbu';
export * from './loginInput';
export * from './loginOutput';
export * from './message';
export * from './notice';
export * from './osType';
export * from './pagingLinks';
export * from './pagingMeta';
export * from './pcClient';
export * from './pcClientError';
export * from './permission';
export * from './processFlag';
export * from './recovery';
export * from './refreshInput';
export * from './refreshOutput';
export * from './registerAdjustOutput';
export * from './registerAppVersionInput';
export * from './registerAppVersionInputInfo';
export * from './registerCustomerInput';
export * from './registerJangbuInput';
export * from './registerJangbuInputDetailJangbu';
export * from './registerJangbuInputDetailUser';
export * from './registerMemberInput';
export * from './registerNoticeInput';
export * from './registerScrapingCodeVersionInput';
export * from './registerServiceInput';
export * from './resetPasswordInput';
export * from './resetPasswordOutput';
export * from './roleGroup';
export * from './roleGroupMapping';
export * from './roleListItem';
export * from './roleName';
export * from './scrapingCode';
export * from './searchAdjustJangbuServicesOutput';
export * from './searchChargeJangbuUserServicesOutput';
export * from './searchChargeJangbusOutput';
export * from './searchRoleGroupOutput';
export * from './sendChagreJangbuMailTestInput';
export * from './sendChargeJangbuMailTestOutput';
export * from './service';
export * from './serviceCategory';
export * from './serviceType';
export * from './showType';
export * from './slipCisSend';
export * from './slipSplitDeleteUpload';
export * from './slipSplitDeleteUploadBank';
export * from './slipSplitDeleteUploadSlip';
export * from './slipUpload';
export * from './slipUploadMonthly';
export * from './slipUploadVoucher';
export * from './updateAdjustJangbuServiceInput';
export * from './updateAppVersionInput';
export * from './updateAppVersionInputInfo';
export * from './updateChargeJangbuPaidInput';
export * from './updateChargeJangbuPartnershipInput';
export * from './updateChargeJangbuStatusInput';
export * from './updateJangbuInput';
export * from './updateMemberInput';
export * from './updateRoleGroupInput';
export * from './updateServiceInput';
export * from './user';
export * from './userService';
export * from './userServiceType';
export * from './work';
export * from './workDetail';
export * from './workRequestType';
export * from './workResult';
export * from './workResultDetail';

import * as fs from 'fs';

export interface RequestDetailedFile {
    value: Buffer;
    options?: {
        filename?: string;
        contentType?: string;
    }
}

export type RequestFile = string | Buffer | fs.ReadStream | RequestDetailedFile;


import { AdjustJangbuService } from './adjustJangbuService';
import { ApiLog } from './apiLog';
import { ApiLogDetail } from './apiLogDetail';
import { AppVersion } from './appVersion';
import { BudgetCisSend } from './budgetCisSend';
import { BudgetUpload } from './budgetUpload';
import { BudgetUploadItem } from './budgetUploadItem';
import { ChargeJangbu } from './chargeJangbu';
import { ChargeJangbuPaid } from './chargeJangbuPaid';
import { ChargeJangbuPartnership } from './chargeJangbuPartnership';
import { ChargeJangbuStatus } from './chargeJangbuStatus';
import { ChargeJangbuUserService } from './chargeJangbuUserService';
import { CommonInfo } from './commonInfo';
import { Connect } from './connect';
import { CreateRoleGroupInput } from './createRoleGroupInput';
import { ExceptionResponse } from './exceptionResponse';
import { FindMemberInput } from './findMemberInput';
import { FindMemberOutput } from './findMemberOutput';
import { GetApiMonitorsOutput } from './getApiMonitorsOutput';
import { GetAppVersionsOutput } from './getAppVersionsOutput';
import { GetCertOutput } from './getCertOutput';
import { GetChargeJangbuPreviewOutput } from './getChargeJangbuPreviewOutput';
import { GetErrorsResponse } from './getErrorsResponse';
import { GetJangbuMessagesOutput } from './getJangbuMessagesOutput';
import { GetJangbusOutput } from './getJangbusOutput';
import { GetMembersOutput } from './getMembersOutput';
import { GetNotices } from './getNotices';
import { GetScrapingCodesOutput } from './getScrapingCodesOutput';
import { GetServicesOutput } from './getServicesOutput';
import { GetWorkS3DataResponse } from './getWorkS3DataResponse';
import { GetWorkS3DetailLogResponse } from './getWorkS3DetailLogResponse';
import { GetWorksOutput } from './getWorksOutput';
import { InOutFlag } from './inOutFlag';
import { Jangbu } from './jangbu';
import { LoginInput } from './loginInput';
import { LoginOutput } from './loginOutput';
import { Message } from './message';
import { Notice } from './notice';
import { OsType } from './osType';
import { PagingLinks } from './pagingLinks';
import { PagingMeta } from './pagingMeta';
import { PcClient } from './pcClient';
import { PcClientError } from './pcClientError';
import { Permission } from './permission';
import { ProcessFlag } from './processFlag';
import { Recovery } from './recovery';
import { RefreshInput } from './refreshInput';
import { RefreshOutput } from './refreshOutput';
import { RegisterAdjustOutput } from './registerAdjustOutput';
import { RegisterAppVersionInput } from './registerAppVersionInput';
import { RegisterAppVersionInputInfo } from './registerAppVersionInputInfo';
import { RegisterCustomerInput } from './registerCustomerInput';
import { RegisterJangbuInput } from './registerJangbuInput';
import { RegisterJangbuInputDetailJangbu } from './registerJangbuInputDetailJangbu';
import { RegisterJangbuInputDetailUser } from './registerJangbuInputDetailUser';
import { RegisterMemberInput } from './registerMemberInput';
import { RegisterNoticeInput } from './registerNoticeInput';
import { RegisterScrapingCodeVersionInput } from './registerScrapingCodeVersionInput';
import { RegisterServiceInput } from './registerServiceInput';
import { ResetPasswordInput } from './resetPasswordInput';
import { ResetPasswordOutput } from './resetPasswordOutput';
import { RoleGroup } from './roleGroup';
import { RoleGroupMapping } from './roleGroupMapping';
import { RoleListItem } from './roleListItem';
import { RoleName } from './roleName';
import { ScrapingCode } from './scrapingCode';
import { SearchAdjustJangbuServicesOutput } from './searchAdjustJangbuServicesOutput';
import { SearchChargeJangbuUserServicesOutput } from './searchChargeJangbuUserServicesOutput';
import { SearchChargeJangbusOutput } from './searchChargeJangbusOutput';
import { SearchRoleGroupOutput } from './searchRoleGroupOutput';
import { SendChagreJangbuMailTestInput } from './sendChagreJangbuMailTestInput';
import { SendChargeJangbuMailTestOutput } from './sendChargeJangbuMailTestOutput';
import { Service } from './service';
import { ServiceCategory } from './serviceCategory';
import { ServiceType } from './serviceType';
import { ShowType } from './showType';
import { SlipCisSend } from './slipCisSend';
import { SlipSplitDeleteUpload } from './slipSplitDeleteUpload';
import { SlipSplitDeleteUploadBank } from './slipSplitDeleteUploadBank';
import { SlipSplitDeleteUploadSlip } from './slipSplitDeleteUploadSlip';
import { SlipUpload } from './slipUpload';
import { SlipUploadMonthly } from './slipUploadMonthly';
import { SlipUploadVoucher } from './slipUploadVoucher';
import { UpdateAdjustJangbuServiceInput } from './updateAdjustJangbuServiceInput';
import { UpdateAppVersionInput } from './updateAppVersionInput';
import { UpdateAppVersionInputInfo } from './updateAppVersionInputInfo';
import { UpdateChargeJangbuPaidInput } from './updateChargeJangbuPaidInput';
import { UpdateChargeJangbuPartnershipInput } from './updateChargeJangbuPartnershipInput';
import { UpdateChargeJangbuStatusInput } from './updateChargeJangbuStatusInput';
import { UpdateJangbuInput } from './updateJangbuInput';
import { UpdateMemberInput } from './updateMemberInput';
import { UpdateRoleGroupInput } from './updateRoleGroupInput';
import { UpdateServiceInput } from './updateServiceInput';
import { User } from './user';
import { UserService } from './userService';
import { UserServiceType } from './userServiceType';
import { Work } from './work';
import { WorkDetail } from './workDetail';
import { WorkRequestType } from './workRequestType';
import { WorkResult } from './workResult';
import { WorkResultDetail } from './workResultDetail';

/* tslint:disable:no-unused-variable */
let primitives = [
                    "string",
                    "boolean",
                    "double",
                    "integer",
                    "long",
                    "float",
                    "number",
                    "any"
                 ];

let enumsMap: {[index: string]: any} = {
        "ChargeJangbuPaid": ChargeJangbuPaid,
        "ChargeJangbuStatus": ChargeJangbuStatus,
        "CreateRoleGroupInput.UserLevelEnum": CreateRoleGroupInput.UserLevelEnum,
        "FindMemberInput.FindTypeEnum": FindMemberInput.FindTypeEnum,
        "InOutFlag": InOutFlag,
        "Notice.PartnerEnum": Notice.PartnerEnum,
        "OsType": OsType,
        "Permission": Permission,
        "ProcessFlag": ProcessFlag,
        "RegisterCustomerInput.UserLevelEnum": RegisterCustomerInput.UserLevelEnum,
        "RegisterJangbuInput.ServiceIdsEnum": RegisterJangbuInput.ServiceIdsEnum,
        "RegisterMemberInput.UserLevelEnum": RegisterMemberInput.UserLevelEnum,
        "RegisterServiceInput.CategoryEnum": RegisterServiceInput.CategoryEnum,
        "RoleGroupMapping.PermissionEnum": RoleGroupMapping.PermissionEnum,
        "RoleName": RoleName,
        "ServiceCategory": ServiceCategory,
        "ServiceType": ServiceType,
        "ShowType": ShowType,
        "UpdateServiceInput.CategoryEnum": UpdateServiceInput.CategoryEnum,
        "UserServiceType": UserServiceType,
        "WorkRequestType": WorkRequestType,
}

let typeMap: {[index: string]: any} = {
    "AdjustJangbuService": AdjustJangbuService,
    "ApiLog": ApiLog,
    "ApiLogDetail": ApiLogDetail,
    "AppVersion": AppVersion,
    "BudgetCisSend": BudgetCisSend,
    "BudgetUpload": BudgetUpload,
    "BudgetUploadItem": BudgetUploadItem,
    "ChargeJangbu": ChargeJangbu,
    "ChargeJangbuPartnership": ChargeJangbuPartnership,
    "ChargeJangbuUserService": ChargeJangbuUserService,
    "CommonInfo": CommonInfo,
    "Connect": Connect,
    "CreateRoleGroupInput": CreateRoleGroupInput,
    "ExceptionResponse": ExceptionResponse,
    "FindMemberInput": FindMemberInput,
    "FindMemberOutput": FindMemberOutput,
    "GetApiMonitorsOutput": GetApiMonitorsOutput,
    "GetAppVersionsOutput": GetAppVersionsOutput,
    "GetCertOutput": GetCertOutput,
    "GetChargeJangbuPreviewOutput": GetChargeJangbuPreviewOutput,
    "GetErrorsResponse": GetErrorsResponse,
    "GetJangbuMessagesOutput": GetJangbuMessagesOutput,
    "GetJangbusOutput": GetJangbusOutput,
    "GetMembersOutput": GetMembersOutput,
    "GetNotices": GetNotices,
    "GetScrapingCodesOutput": GetScrapingCodesOutput,
    "GetServicesOutput": GetServicesOutput,
    "GetWorkS3DataResponse": GetWorkS3DataResponse,
    "GetWorkS3DetailLogResponse": GetWorkS3DetailLogResponse,
    "GetWorksOutput": GetWorksOutput,
    "Jangbu": Jangbu,
    "LoginInput": LoginInput,
    "LoginOutput": LoginOutput,
    "Message": Message,
    "Notice": Notice,
    "PagingLinks": PagingLinks,
    "PagingMeta": PagingMeta,
    "PcClient": PcClient,
    "PcClientError": PcClientError,
    "Recovery": Recovery,
    "RefreshInput": RefreshInput,
    "RefreshOutput": RefreshOutput,
    "RegisterAdjustOutput": RegisterAdjustOutput,
    "RegisterAppVersionInput": RegisterAppVersionInput,
    "RegisterAppVersionInputInfo": RegisterAppVersionInputInfo,
    "RegisterCustomerInput": RegisterCustomerInput,
    "RegisterJangbuInput": RegisterJangbuInput,
    "RegisterJangbuInputDetailJangbu": RegisterJangbuInputDetailJangbu,
    "RegisterJangbuInputDetailUser": RegisterJangbuInputDetailUser,
    "RegisterMemberInput": RegisterMemberInput,
    "RegisterNoticeInput": RegisterNoticeInput,
    "RegisterScrapingCodeVersionInput": RegisterScrapingCodeVersionInput,
    "RegisterServiceInput": RegisterServiceInput,
    "ResetPasswordInput": ResetPasswordInput,
    "ResetPasswordOutput": ResetPasswordOutput,
    "RoleGroup": RoleGroup,
    "RoleGroupMapping": RoleGroupMapping,
    "RoleListItem": RoleListItem,
    "ScrapingCode": ScrapingCode,
    "SearchAdjustJangbuServicesOutput": SearchAdjustJangbuServicesOutput,
    "SearchChargeJangbuUserServicesOutput": SearchChargeJangbuUserServicesOutput,
    "SearchChargeJangbusOutput": SearchChargeJangbusOutput,
    "SearchRoleGroupOutput": SearchRoleGroupOutput,
    "SendChagreJangbuMailTestInput": SendChagreJangbuMailTestInput,
    "SendChargeJangbuMailTestOutput": SendChargeJangbuMailTestOutput,
    "Service": Service,
    "SlipCisSend": SlipCisSend,
    "SlipSplitDeleteUpload": SlipSplitDeleteUpload,
    "SlipSplitDeleteUploadBank": SlipSplitDeleteUploadBank,
    "SlipSplitDeleteUploadSlip": SlipSplitDeleteUploadSlip,
    "SlipUpload": SlipUpload,
    "SlipUploadMonthly": SlipUploadMonthly,
    "SlipUploadVoucher": SlipUploadVoucher,
    "UpdateAdjustJangbuServiceInput": UpdateAdjustJangbuServiceInput,
    "UpdateAppVersionInput": UpdateAppVersionInput,
    "UpdateAppVersionInputInfo": UpdateAppVersionInputInfo,
    "UpdateChargeJangbuPaidInput": UpdateChargeJangbuPaidInput,
    "UpdateChargeJangbuPartnershipInput": UpdateChargeJangbuPartnershipInput,
    "UpdateChargeJangbuStatusInput": UpdateChargeJangbuStatusInput,
    "UpdateJangbuInput": UpdateJangbuInput,
    "UpdateMemberInput": UpdateMemberInput,
    "UpdateRoleGroupInput": UpdateRoleGroupInput,
    "UpdateServiceInput": UpdateServiceInput,
    "User": User,
    "UserService": UserService,
    "Work": Work,
    "WorkDetail": WorkDetail,
    "WorkResult": WorkResult,
    "WorkResultDetail": WorkResultDetail,
}

export class ObjectSerializer {
    public static findCorrectType(data: any, expectedType: string) {
        if (data == undefined) {
            return expectedType;
        } else if (primitives.indexOf(expectedType.toLowerCase()) !== -1) {
            return expectedType;
        } else if (expectedType === "Date") {
            return expectedType;
        } else {
            if (enumsMap[expectedType]) {
                return expectedType;
            }

            if (!typeMap[expectedType]) {
                return expectedType; // w/e we don't know the type
            }

            // Check the discriminator
            let discriminatorProperty = typeMap[expectedType].discriminator;
            if (discriminatorProperty == null) {
                return expectedType; // the type does not have a discriminator. use it.
            } else {
                if (data[discriminatorProperty]) {
                    var discriminatorType = data[discriminatorProperty];
                    if(typeMap[discriminatorType]){
                        return discriminatorType; // use the type given in the discriminator
                    } else {
                        return expectedType; // discriminator did not map to a type
                    }
                } else {
                    return expectedType; // discriminator was not present (or an empty string)
                }
            }
        }
    }

    public static serialize(data: any, type: string) {
        if (data == undefined) {
            return data;
        } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        } else if (type.lastIndexOf("Array<", 0) === 0) { // string.startsWith pre es6
            let subType: string = type.replace("Array<", ""); // Array<Type> => Type>
            subType = subType.substring(0, subType.length - 1); // Type> => Type
            let transformedData: any[] = [];
            for (let index = 0; index < data.length; index++) {
                let datum = data[index];
                transformedData.push(ObjectSerializer.serialize(datum, subType));
            }
            return transformedData;
        } else if (type === "Date") {
            return data.toISOString();
        } else {
            if (enumsMap[type]) {
                return data;
            }
            if (!typeMap[type]) { // in case we dont know the type
                return data;
            }

            // Get the actual type of this object
            type = this.findCorrectType(data, type);

            // get the map for the correct type.
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            let instance: {[index: string]: any} = {};
            for (let index = 0; index < attributeTypes.length; index++) {
                let attributeType = attributeTypes[index];
                instance[attributeType.baseName] = ObjectSerializer.serialize(data[attributeType.name], attributeType.type);
            }
            return instance;
        }
    }

    public static deserialize(data: any, type: string) {
        // polymorphism may change the actual type.
        type = ObjectSerializer.findCorrectType(data, type);
        if (data == undefined) {
            return data;
        } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        } else if (type.lastIndexOf("Array<", 0) === 0) { // string.startsWith pre es6
            let subType: string = type.replace("Array<", ""); // Array<Type> => Type>
            subType = subType.substring(0, subType.length - 1); // Type> => Type
            let transformedData: any[] = [];
            for (let index = 0; index < data.length; index++) {
                let datum = data[index];
                transformedData.push(ObjectSerializer.deserialize(datum, subType));
            }
            return transformedData;
        } else if (type === "Date") {
            return new Date(data);
        } else {
            if (enumsMap[type]) {// is Enum
                return data;
            }

            if (!typeMap[type]) { // dont know the type
                return data;
            }
            let instance = new typeMap[type]();
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            for (let index = 0; index < attributeTypes.length; index++) {
                let attributeType = attributeTypes[index];
                instance[attributeType.name] = ObjectSerializer.deserialize(data[attributeType.baseName], attributeType.type);
            }
            return instance;
        }
    }
}

export interface Authentication {
    /**
    * Apply authentication settings to header and query params.
    */
    applyToRequest(requestOptions: localVarRequest.Options): Promise<void> | void;
}

export class HttpBasicAuth implements Authentication {
    public username: string = '';
    public password: string = '';

    applyToRequest(requestOptions: localVarRequest.Options): void {
        requestOptions.auth = {
            username: this.username, password: this.password
        }
    }
}

export class HttpBearerAuth implements Authentication {
    public accessToken: string | (() => string) = '';

    applyToRequest(requestOptions: localVarRequest.Options): void {
        if (requestOptions && requestOptions.headers) {
            const accessToken = typeof this.accessToken === 'function'
                            ? this.accessToken()
                            : this.accessToken;
            requestOptions.headers["Authorization"] = "Bearer " + accessToken;
        }
    }
}

export class ApiKeyAuth implements Authentication {
    public apiKey: string = '';

    constructor(private location: string, private paramName: string) {
    }

    applyToRequest(requestOptions: localVarRequest.Options): void {
        if (this.location == "query") {
            (<any>requestOptions.qs)[this.paramName] = this.apiKey;
        } else if (this.location == "header" && requestOptions && requestOptions.headers) {
            requestOptions.headers[this.paramName] = this.apiKey;
        } else if (this.location == 'cookie' && requestOptions && requestOptions.headers) {
            if (requestOptions.headers['Cookie']) {
                requestOptions.headers['Cookie'] += '; ' + this.paramName + '=' + encodeURIComponent(this.apiKey);
            }
            else {
                requestOptions.headers['Cookie'] = this.paramName + '=' + encodeURIComponent(this.apiKey);
            }
        }
    }
}

export class OAuth implements Authentication {
    public accessToken: string = '';

    applyToRequest(requestOptions: localVarRequest.Options): void {
        if (requestOptions && requestOptions.headers) {
            requestOptions.headers["Authorization"] = "Bearer " + this.accessToken;
        }
    }
}

export class VoidAuth implements Authentication {
    public username: string = '';
    public password: string = '';

    applyToRequest(_: localVarRequest.Options): void {
        // Do nothing
    }
}

export type Interceptor = (requestOptions: localVarRequest.Options) => (Promise<void> | void);
