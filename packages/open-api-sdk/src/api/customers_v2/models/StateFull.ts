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
 * @interface StateFull
 */
export interface StateFull {
    /**
     * Numeric ID of the state/province.
     * @type {number}
     * @memberof StateFull
     */
    id?: number;
    /**
     * Name of the state/province.
     * @type {string}
     * @memberof StateFull
     */
    state?: string;
    /**
     * Abbreviation for the state/province.
     * @type {string}
     * @memberof StateFull
     */
    stateAbbreviation?: string;
    /**
     * Numeric ID of the state’s/province’s associated country.
     * @type {number}
     * @memberof StateFull
     */
    countryId?: number;
}

export function StateFullFromJSON(json: any): StateFull {
    return StateFullFromJSONTyped(json, false);
}

export function StateFullFromJSONTyped(json: any, ignoreDiscriminator: boolean): StateFull {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'state': !exists(json, 'state') ? undefined : json['state'],
        'stateAbbreviation': !exists(json, 'state_abbreviation') ? undefined : json['state_abbreviation'],
        'countryId': !exists(json, 'country_id') ? undefined : json['country_id'],
    };
}

export function StateFullToJSON(value?: StateFull | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'state': value.state,
        'state_abbreviation': value.stateAbbreviation,
        'country_id': value.countryId,
    };
}


