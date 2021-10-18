/* tslint:disable */
/* eslint-disable */
/**
 * Subscribers
 * Manage subscribers.  ### OAuth Scopes |  **UI Name** | **Permission** | **Parameter** | | --- | --- | --- | |  Customers | modify | `store_v2_customers` | |  Customers | read-only | `store_v2_customers_read_only` |  ### Headers  |Header|Parameter|Description| |-|-|-| |`X-Auth-Client`|`client_id`|Obtained by creating an API account or installing an app in a BigCommerce control panel.| |`X-Auth-Token`|`access_token `|Obtained by creating an API account or installing an app in a BigCommerce control panel.|  ### Example  ```http GET /stores/{$$.env.store_hash}/v3/catalog/summary host: api.bigcommerce.com Content-Type: application/json X-Auth-Client: {client_id} X-Auth-Token: {access_token} ```  * For more information on Authenticating BigCommerce APIs, see: [Authentication](https://developer.bigcommerce.com/api-docs/getting-started/authentication). 
 *
 * The version of the OpenAPI document: 
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import {
    SubscriberFull,
    SubscriberFullFromJSON,
    SubscriberFullFromJSONTyped,
    SubscriberFullToJSON,
} from './';

/**
 * 
 * @export
 * @interface SubscriberResponse
 */
export interface SubscriberResponse {
    /**
     * 
     * @type {SubscriberFull}
     * @memberof SubscriberResponse
     */
    data?: SubscriberFull;
    /**
     * Empty meta object; may be used later.
     * @type {object}
     * @memberof SubscriberResponse
     */
    meta?: object;
}

export function SubscriberResponseFromJSON(json: any): SubscriberResponse {
    return SubscriberResponseFromJSONTyped(json, false);
}

export function SubscriberResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): SubscriberResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': !exists(json, 'data') ? undefined : SubscriberFullFromJSON(json['data']),
        'meta': !exists(json, 'meta') ? undefined : json['meta'],
    };
}

export function SubscriberResponseToJSON(value?: SubscriberResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': SubscriberFullToJSON(value.data),
        'meta': value.meta,
    };
}


