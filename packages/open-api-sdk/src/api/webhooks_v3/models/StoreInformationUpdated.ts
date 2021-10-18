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
    StoreInformationUpdatedAllOf,
    StoreInformationUpdatedAllOfFromJSON,
    StoreInformationUpdatedAllOfFromJSONTyped,
    StoreInformationUpdatedAllOfToJSON,
    StoreInformationUpdatedAllOfData,
    StoreInformationUpdatedAllOfDataFromJSON,
    StoreInformationUpdatedAllOfDataFromJSONTyped,
    StoreInformationUpdatedAllOfDataToJSON,
    WebhookCallbackBase,
    WebhookCallbackBaseFromJSON,
    WebhookCallbackBaseFromJSONTyped,
    WebhookCallbackBaseToJSON,
} from './';

/**
 * Occurs when changes are made to store settings. 
 * 
 * Fields that trigger event
 * <ul><li>Store Name</li><li>Store Address</li><li>Store Country</li><li>Address Type</li><li>Email</li><li>Phone</li></ul>
 * 
 * ### Example callback:
 * 
 * ```json
 * {
 *   "created_at": 1561482670,
 *   "store_id": "1025646",
 *   "producer": "stores/{store_hash}",
 *   "scope": "store/information/updated",
 *   "hash": "352e4afc6dd3fc85ea26bfdf3f91852604d57528",
 *   "data": {
 *     "type": "store"
 *   }
 * }
 * ```
 * 
 * ### Callback schema:
 * @export
 * @interface StoreInformationUpdated
 */
export interface StoreInformationUpdated {
    /**
     * Hook creation date as a Unix timestamp.
     * @type {number}
     * @memberof StoreInformationUpdated
     */
    readonly createdAt?: number;
    /**
     * A numerical identifier that is unique to each store.
     * @type {string}
     * @memberof StoreInformationUpdated
     */
    storeId?: string;
    /**
     * Will always follow the pattern `stores/store_hash`. This is the store that created the webhook.
     * @type {string}
     * @memberof StoreInformationUpdated
     */
    producer?: string;
    /**
     * The event registered when the webhook was created.
     * @type {string}
     * @memberof StoreInformationUpdated
     */
    scope?: string;
    /**
     * The payload data JSON encoded then passed through SH1 encryption.
     * @type {string}
     * @memberof StoreInformationUpdated
     */
    hash?: string;
    /**
     * 
     * @type {StoreInformationUpdatedAllOfData}
     * @memberof StoreInformationUpdated
     */
    data?: StoreInformationUpdatedAllOfData;
}

export function StoreInformationUpdatedFromJSON(json: any): StoreInformationUpdated {
    return StoreInformationUpdatedFromJSONTyped(json, false);
}

export function StoreInformationUpdatedFromJSONTyped(json: any, ignoreDiscriminator: boolean): StoreInformationUpdated {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'createdAt': !exists(json, 'created_at') ? undefined : json['created_at'],
        'storeId': !exists(json, 'store_id') ? undefined : json['store_id'],
        'producer': !exists(json, 'producer') ? undefined : json['producer'],
        'scope': !exists(json, 'scope') ? undefined : json['scope'],
        'hash': !exists(json, 'hash') ? undefined : json['hash'],
        'data': !exists(json, 'data') ? undefined : StoreInformationUpdatedAllOfDataFromJSON(json['data']),
    };
}

export function StoreInformationUpdatedToJSON(value?: StoreInformationUpdated | null): any {
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
        'data': StoreInformationUpdatedAllOfDataToJSON(value.data),
    };
}


