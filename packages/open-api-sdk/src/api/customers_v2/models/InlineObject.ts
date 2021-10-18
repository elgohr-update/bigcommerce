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
 * @interface InlineObject
 */
export interface InlineObject {
    /**
     * This can vary depending on the action being taken to update, validate or force a password change. See Update Customer
     * @type {object}
     * @memberof InlineObject
     */
    authentication?: object;
    /**
     * 
     * @type {string}
     * @memberof InlineObject
     */
    company?: string;
    /**
     * 
     * @type {string}
     * @memberof InlineObject
     */
    firstName?: string;
    /**
     * 
     * @type {string}
     * @memberof InlineObject
     */
    lastName?: string;
    /**
     * 
     * @type {string}
     * @memberof InlineObject
     */
    phone?: string;
    /**
     * 
     * @type {string}
     * @memberof InlineObject
     */
    dateModified?: string;
    /**
     * 
     * @type {number}
     * @memberof InlineObject
     */
    storeCredit?: number;
    /**
     * 
     * @type {string}
     * @memberof InlineObject
     */
    registrationIpAddress?: string;
    /**
     * 
     * @type {number}
     * @memberof InlineObject
     */
    customerGroupId?: number;
    /**
     * 
     * @type {string}
     * @memberof InlineObject
     */
    notes?: string;
    /**
     * 
     * @type {string}
     * @memberof InlineObject
     */
    taxExemptCategory?: string;
}

export function InlineObjectFromJSON(json: any): InlineObject {
    return InlineObjectFromJSONTyped(json, false);
}

export function InlineObjectFromJSONTyped(json: any, ignoreDiscriminator: boolean): InlineObject {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'authentication': !exists(json, '_authentication') ? undefined : json['_authentication'],
        'company': !exists(json, 'company') ? undefined : json['company'],
        'firstName': !exists(json, 'first_name') ? undefined : json['first_name'],
        'lastName': !exists(json, 'last_name') ? undefined : json['last_name'],
        'phone': !exists(json, 'phone') ? undefined : json['phone'],
        'dateModified': !exists(json, 'date_modified') ? undefined : json['date_modified'],
        'storeCredit': !exists(json, 'store_credit') ? undefined : json['store_credit'],
        'registrationIpAddress': !exists(json, 'registration_ip_address') ? undefined : json['registration_ip_address'],
        'customerGroupId': !exists(json, 'customer_group_id') ? undefined : json['customer_group_id'],
        'notes': !exists(json, 'notes') ? undefined : json['notes'],
        'taxExemptCategory': !exists(json, 'tax_exempt_category') ? undefined : json['tax_exempt_category'],
    };
}

export function InlineObjectToJSON(value?: InlineObject | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        '_authentication': value.authentication,
        'company': value.company,
        'first_name': value.firstName,
        'last_name': value.lastName,
        'phone': value.phone,
        'date_modified': value.dateModified,
        'store_credit': value.storeCredit,
        'registration_ip_address': value.registrationIpAddress,
        'customer_group_id': value.customerGroupId,
        'notes': value.notes,
        'tax_exempt_category': value.taxExemptCategory,
    };
}


