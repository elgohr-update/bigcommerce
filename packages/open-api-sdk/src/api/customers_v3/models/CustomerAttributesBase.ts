/* tslint:disable */
/* eslint-disable */
/**
 * Customers V3
 * Create and manage customers.  - [Authentication](#authentication) - [Resources](#resources)  ## Authentication  Requests can be authenticated by sending an `access_token` via `X-Auth-Token` HTTP header:  ```http GET /stores/{$$.env.store_hash}/v3/customers host: api.bigcommerce.com Accept: application/json X-Auth-Token: {access_token} ```  |Header|Parameter|Description| |-|-|-| |`X-Auth-Token`|`access_token `|Obtained by creating an API account or installing an app in a BigCommerce control panel.|  ### OAuth Scopes  | UI Name                                      | Permission | Parameter                                     | |----------------------------------------------|------------|-----------------------------------------------| | Customers                                    | modify     | `store_v2_customers`                          | | Customers                                    | read-only  | `store_v2_customers_read_only`                | | Stored Payment Instruments                   | modify     | `store_stored_payment_instruments`            | | Stored Payment Instruments                   | read-only  | `store_stored_payment_instruments_read_only`  |  For more information on Authenticating BigCommerce APIs, see: [Authentication](https://developer.bigcommerce.com/api-docs/getting-started/authentication).  ## Resources * [Customer and Subscribers Overview](/api-docs/customers/customers-subscribers-overview).
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
 * 
 * @export
 * @interface CustomerAttributesBase
 */
export interface CustomerAttributesBase {
    /**
     * Attribute ID.
     * @type {number}
     * @memberof CustomerAttributesBase
     */
    attributeId?: number;
    /**
     * Attribute value. This will always be a string, regardless of the attribute's type.
     * @type {string}
     * @memberof CustomerAttributesBase
     */
    attributeValue?: string;
}

export function CustomerAttributesBaseFromJSON(json: any): CustomerAttributesBase {
    return CustomerAttributesBaseFromJSONTyped(json, false);
}

export function CustomerAttributesBaseFromJSONTyped(json: any, ignoreDiscriminator: boolean): CustomerAttributesBase {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'attributeId': !exists(json, 'attribute_id') ? undefined : json['attribute_id'],
        'attributeValue': !exists(json, 'attribute_value') ? undefined : json['attribute_value'],
    };
}

export function CustomerAttributesBaseToJSON(value?: CustomerAttributesBase | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'attribute_id': value.attributeId,
        'attribute_value': value.attributeValue,
    };
}


