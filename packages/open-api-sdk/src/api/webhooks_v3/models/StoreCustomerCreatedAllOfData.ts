/* tslint:disable */
/* eslint-disable */
/**
 * Webhooks v3
 * Get notified when specific events occur on a BigCommerce store. For more information, see [Webhooks Overview](https://developer.bigcommerce.com/api-docs/store-management/webhooks/overview).
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * A lightweight description of the event that triggered the webhook. Will vary depending on the event registered.
 * @export
 * @interface StoreCustomerCreatedAllOfData
 */
export interface StoreCustomerCreatedAllOfData {
    /**
     * will always be `customer`
     * @type {string}
     * @memberof StoreCustomerCreatedAllOfData
     */
    readonly type?: string;
    /**
     * ID of the customer
     * @type {number}
     * @memberof StoreCustomerCreatedAllOfData
     */
    id?: number;
}

export function StoreCustomerCreatedAllOfDataFromJSON(json: any): StoreCustomerCreatedAllOfData {
    return StoreCustomerCreatedAllOfDataFromJSONTyped(json, false);
}

export function StoreCustomerCreatedAllOfDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): StoreCustomerCreatedAllOfData {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': !exists(json, 'type') ? undefined : json['type'],
        'id': !exists(json, 'id') ? undefined : json['id'],
    };
}

export function StoreCustomerCreatedAllOfDataToJSON(value?: StoreCustomerCreatedAllOfData | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
    };
}


