/* tslint:disable */
/* eslint-disable */
/**
 * Customers V2
 * Create and Manage Customers, Customer Addresses, and Customer Groups. Additionally, validate customer passwords. To learn more about Customers see [here](/api-docs/customers/customers-subscribers-overview).  - [Authentication](#authentication) - [Available Endpoints](#available-endpoints) - [Usage Notes](#usage-notes) - [Resources](#resources)  ## Authentication  Requests can be authenticated by sending an `access_token` via `X-Auth-Token` HTTP header:  ```http GET /stores/{$$.env.store_hash}/v3/catalog/summary host: api.bigcommerce.com Accept: application/json X-Auth-Token: {access_token} ```  |Header|Parameter|Description| |-|-|-| |`X-Auth-Token`|`access_token `|Obtained by creating an API account or installing an app in a BigCommerce control panel.|  ### OAuth Scopes | UI Name                                      | Permission | Parameter                                     | |----------------------------------------------|------------|-----------------------------------------------| | Customers                                    | modify     | `store_v2_customers`                          | | Customers                                    | read-only  | `store_v2_customers_read_only`                |  For more information on Authenticating BigCommerce APIs, see: [Authentication](https://developer.bigcommerce.com/api-docs/getting-started/authentication).  ## Available Endpoints | Resource / Endpoint                     | Description | |-----------------------------------------|-------------------------------------------------------------------------------| | Customers                               | Identity and account details for customers shopping on BigCommerce stores     | | Customers Addresses                     | Postal address belonging to a customer.                                       | | Customers Groups                        | Groupings of customers who share the same level of access and discounts       | | Customers Validate Password             | Validate customer passwords                                                   |  ## Usage Notes  **Customer Groups** * Customer Groups are only available on specific plans.  **Customers vs. Subscribers** * A subscriber is not always a customer. Someone can sign up for the newsletter only and not create an account. * A customer is not always a subscriber. Signing up for the newsletter is a separate action from creating an account and purchasing an item. * A customer and a subscriber can be the same. If a shopper checks out on the storefront, creates an account and opts into the newsletter, they are a customer and a subscriber.  ## Resources  ### Related APIs / Endpoints   [Customer Login API](https://developer.bigcommerce.com/api-docs/customers/customer-login-api) - [Current Customer API](https://developer.bigcommerce.com/api-docs/customers/current-customer-api) - [Customers API (v3)](https://developer.bigcommerce.com/api-reference/customer-subscribers/v3-customers-api) - [Subscribers API](https://developer.bigcommerce.com/api-reference/customer-subscribers/subscribers-api)  ### Webhooks - [Customers](https://developer.bigcommerce.com/api-docs/getting-started/webhooks/webhook-events#webhook-events_customer)
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
 * @interface StatesResourceFull
 */
export interface StatesResourceFull {
    /**
     * 
     * @type {string}
     * @memberof StatesResourceFull
     */
    url?: string;
    /**
     * 
     * @type {string}
     * @memberof StatesResourceFull
     */
    resource?: string;
}

export function StatesResourceFullFromJSON(json: any): StatesResourceFull {
    return StatesResourceFullFromJSONTyped(json, false);
}

export function StatesResourceFullFromJSONTyped(json: any, ignoreDiscriminator: boolean): StatesResourceFull {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'url': !exists(json, 'url') ? undefined : json['url'],
        'resource': !exists(json, 'resource') ? undefined : json['resource'],
    };
}

export function StatesResourceFullToJSON(value?: StatesResourceFull | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'url': value.url,
        'resource': value.resource,
    };
}


