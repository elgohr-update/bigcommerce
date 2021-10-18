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
    SubscriberAllOf,
    SubscriberAllOfFromJSON,
    SubscriberAllOfFromJSONTyped,
    SubscriberAllOfToJSON,
    SubscriberBase,
    SubscriberBaseFromJSON,
    SubscriberBaseFromJSONTyped,
    SubscriberBaseToJSON,
} from './';

/**
 * 
 * @export
 * @interface Subscriber
 */
export interface Subscriber {
    /**
     * The unique numeric ID of the subscriber; increments sequentially.
     * @type {number}
     * @memberof Subscriber
     */
    id?: number;
    /**
     * The email of the subscriber. Must be unique.
     * @type {string}
     * @memberof Subscriber
     */
    email?: string;
    /**
     * The first name of the subscriber.
     * @type {string}
     * @memberof Subscriber
     */
    firstName?: string;
    /**
     * The last name of the subscriber.
     * @type {string}
     * @memberof Subscriber
     */
    lastName?: string;
    /**
     * The source of the subscriber. Values are: `storefront`, `order`, or `custom`.
     * @type {string}
     * @memberof Subscriber
     */
    source?: string;
    /**
     * The ID of the source order, if source was an order.
     * @type {number}
     * @memberof Subscriber
     */
    orderId?: number | null;
    /**
     * The date on which the subscriber was modified.
     * @type {Date}
     * @memberof Subscriber
     */
    dateModified?: Date;
    /**
     * The date of which the subscriber was created.
     * @type {Date}
     * @memberof Subscriber
     */
    dateCreated?: Date;
}

export function SubscriberFromJSON(json: any): Subscriber {
    return SubscriberFromJSONTyped(json, false);
}

export function SubscriberFromJSONTyped(json: any, ignoreDiscriminator: boolean): Subscriber {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'email': !exists(json, 'email') ? undefined : json['email'],
        'firstName': !exists(json, 'first_name') ? undefined : json['first_name'],
        'lastName': !exists(json, 'last_name') ? undefined : json['last_name'],
        'source': !exists(json, 'source') ? undefined : json['source'],
        'orderId': !exists(json, 'order_id') ? undefined : json['order_id'],
        'dateModified': !exists(json, 'date_modified') ? undefined : (new Date(json['date_modified'])),
        'dateCreated': !exists(json, 'date_created') ? undefined : (new Date(json['date_created'])),
    };
}

export function SubscriberToJSON(value?: Subscriber | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'email': value.email,
        'first_name': value.firstName,
        'last_name': value.lastName,
        'source': value.source,
        'order_id': value.orderId,
        'date_modified': value.dateModified === undefined ? undefined : (value.dateModified.toISOString()),
        'date_created': value.dateCreated === undefined ? undefined : (value.dateCreated.toISOString()),
    };
}


