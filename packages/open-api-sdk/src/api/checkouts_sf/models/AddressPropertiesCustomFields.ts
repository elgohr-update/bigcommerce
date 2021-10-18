/* tslint:disable */
/* eslint-disable */
/**
 * Storefront Checkouts
 * Manage checkout operations and data via front-end JavaScript on BigCommerce stencil powered storefronts.
 *
 * The version of the OpenAPI document: 
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface AddressPropertiesCustomFields
 */
export interface AddressPropertiesCustomFields {
    /**
     * 
     * @type {string}
     * @memberof AddressPropertiesCustomFields
     */
    fieldId?: string;
    /**
     * 
     * @type {string}
     * @memberof AddressPropertiesCustomFields
     */
    fieldValue?: string;
}

export function AddressPropertiesCustomFieldsFromJSON(json: any): AddressPropertiesCustomFields {
    return AddressPropertiesCustomFieldsFromJSONTyped(json, false);
}

export function AddressPropertiesCustomFieldsFromJSONTyped(json: any, ignoreDiscriminator: boolean): AddressPropertiesCustomFields {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'fieldId': !exists(json, 'fieldId') ? undefined : json['fieldId'],
        'fieldValue': !exists(json, 'fieldValue') ? undefined : json['fieldValue'],
    };
}

export function AddressPropertiesCustomFieldsToJSON(value?: AddressPropertiesCustomFields | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'fieldId': value.fieldId,
        'fieldValue': value.fieldValue,
    };
}


