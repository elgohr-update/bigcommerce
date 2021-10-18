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
 * @interface StoreChannelCreatedAllOfData
 */
export interface StoreChannelCreatedAllOfData {
    /**
     * will always be `channel`
     * @type {string}
     * @memberof StoreChannelCreatedAllOfData
     */
    readonly type?: string;
    /**
     * ID of the channel
     * @type {number}
     * @memberof StoreChannelCreatedAllOfData
     */
    id?: number;
}

export function StoreChannelCreatedAllOfDataFromJSON(json: any): StoreChannelCreatedAllOfData {
    return StoreChannelCreatedAllOfDataFromJSONTyped(json, false);
}

export function StoreChannelCreatedAllOfDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): StoreChannelCreatedAllOfData {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': !exists(json, 'type') ? undefined : json['type'],
        'id': !exists(json, 'id') ? undefined : json['id'],
    };
}

export function StoreChannelCreatedAllOfDataToJSON(value?: StoreChannelCreatedAllOfData | null): any {
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


