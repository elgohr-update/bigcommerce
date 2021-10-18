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
import {
    StoreCartLineItemCreatedAllOf,
    StoreCartLineItemCreatedAllOfFromJSON,
    StoreCartLineItemCreatedAllOfFromJSONTyped,
    StoreCartLineItemCreatedAllOfToJSON,
    StoreCartLineItemCreatedAllOfData,
    StoreCartLineItemCreatedAllOfDataFromJSON,
    StoreCartLineItemCreatedAllOfDataFromJSONTyped,
    StoreCartLineItemCreatedAllOfDataToJSON,
    WebhookCallbackBase,
    WebhookCallbackBaseFromJSON,
    WebhookCallbackBaseFromJSONTyped,
    WebhookCallbackBaseToJSON,
} from './';

/**
 * When an item’s quantity has changed or the product options change.
 * 
 * Fields that trigger event:
 * - Quantity
 * - Item Price
 * 
 * ### Example callback:
 * 
 * ```json
 * {
 *   "created_at": 1561482670,
 *   "store_id": "1025646",
 *   "producer": "stores/{store_hash}",
 *   "scope": "store/cart/lineItem/updated",
 *   "hash": "352e4afc6dd3fc85ea26bfdf3f91852604d57528",
 *   "data": {
 *     "type": "cart",
 *     "id": "09346904-4175-44fd-be53-f7e598531b6c",
 *     "cartId": "b0386708-fef3-45de-9d8b-fbe3031450a4"            
 *   }
 * }
 * ```
 * 
 * ### Callback schema:
 * @export
 * @interface StoreCartLineItemUpdated
 */
export interface StoreCartLineItemUpdated {
    /**
     * Hook creation date as a Unix timestamp.
     * @type {number}
     * @memberof StoreCartLineItemUpdated
     */
    readonly createdAt?: number;
    /**
     * A numerical identifier that is unique to each store.
     * @type {string}
     * @memberof StoreCartLineItemUpdated
     */
    storeId?: string;
    /**
     * Will always follow the pattern `stores/store_hash`. This is the store that created the webhook.
     * @type {string}
     * @memberof StoreCartLineItemUpdated
     */
    producer?: string;
    /**
     * The event registered when the webhook was created.
     * @type {string}
     * @memberof StoreCartLineItemUpdated
     */
    scope?: string;
    /**
     * The payload data JSON encoded then passed through SH1 encryption.
     * @type {string}
     * @memberof StoreCartLineItemUpdated
     */
    hash?: string;
    /**
     * 
     * @type {StoreCartLineItemCreatedAllOfData}
     * @memberof StoreCartLineItemUpdated
     */
    data?: StoreCartLineItemCreatedAllOfData;
}

export function StoreCartLineItemUpdatedFromJSON(json: any): StoreCartLineItemUpdated {
    return StoreCartLineItemUpdatedFromJSONTyped(json, false);
}

export function StoreCartLineItemUpdatedFromJSONTyped(json: any, ignoreDiscriminator: boolean): StoreCartLineItemUpdated {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'createdAt': !exists(json, 'created_at') ? undefined : json['created_at'],
        'storeId': !exists(json, 'store_id') ? undefined : json['store_id'],
        'producer': !exists(json, 'producer') ? undefined : json['producer'],
        'scope': !exists(json, 'scope') ? undefined : json['scope'],
        'hash': !exists(json, 'hash') ? undefined : json['hash'],
        'data': !exists(json, 'data') ? undefined : StoreCartLineItemCreatedAllOfDataFromJSON(json['data']),
    };
}

export function StoreCartLineItemUpdatedToJSON(value?: StoreCartLineItemUpdated | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'store_id': value.storeId,
        'producer': value.producer,
        'scope': value.scope,
        'hash': value.hash,
        'data': StoreCartLineItemCreatedAllOfDataToJSON(value.data),
    };
}


