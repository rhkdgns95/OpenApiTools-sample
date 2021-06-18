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
import { Permission } from './permission';
import { RoleGroup } from './roleGroup';

export class RoleListItem {
    'roleName': RoleGroup;
    'permission': Permission;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "roleName",
            "baseName": "roleName",
            "type": "RoleGroup"
        },
        {
            "name": "permission",
            "baseName": "permission",
            "type": "Permission"
        }    ];

    static getAttributeTypeMap() {
        return RoleListItem.attributeTypeMap;
    }
}

