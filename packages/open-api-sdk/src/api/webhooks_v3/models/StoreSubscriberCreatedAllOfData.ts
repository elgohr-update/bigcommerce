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
 * @interface StoreSubscriberCreatedAllOfData
 */
export interface StoreSubscriberCreatedAllOfData {
    /**
     * Will always be `subscriber`
     * @type {string}
     * @memberof StoreSubscriberCreatedAllOfData
     */
    type?: string;
    /**
     * ID of the subscriber
     * @type {number}
     * @memberof StoreSubscriberCreatedAllOfData
     */
    id?: number;
}

export function StoreSubscriberCreatedAllOfDataFromJSON(json: any): StoreSubscriberCreatedAllOfData {
    return StoreSubscriberCreatedAllOfDataFromJSONTyped(json, false);
}

export function StoreSubscriberCreatedAllOfDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): StoreSubscriberCreatedAllOfData {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': !exists(json, 'type') ? undefined : json['type'],
        'id': !exists(json, 'id') ? undefined : json['id'],
    };
}

export function StoreSubscriberCreatedAllOfDataToJSON(value?: StoreSubscriberCreatedAllOfData | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'type': value.type,
        'id': value.id,
    };
}


