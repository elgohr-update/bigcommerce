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
 * The `address` object for the `customer` object's `addresses` array.
 * @export
 * @interface CustomerAddressesBase
 */
export interface CustomerAddressesBase {
    /**
     * The first name of the customer address.
     * @type {string}
     * @memberof CustomerAddressesBase
     */
    firstName: string;
    /**
     * The last name of the customer address.
     * @type {string}
     * @memberof CustomerAddressesBase
     */
    lastName: string;
    /**
     * The company of the customer address.
     * @type {string}
     * @memberof CustomerAddressesBase
     */
    company?: string;
    /**
     * The address 1 line.
     * @type {string}
     * @memberof CustomerAddressesBase
     */
    address1: string;
    /**
     * The address 2 line.
     * @type {string}
     * @memberof CustomerAddressesBase
     */
    address2?: string;
    /**
     * The city of the customer address.
     * @type {string}
     * @memberof CustomerAddressesBase
     */
    city: string;
    /**
     * The state or province name
     * @type {string}
     * @memberof CustomerAddressesBase
     */
    stateOrProvince: string;
    /**
     * The postal code of the customer address.
     * @type {string}
     * @memberof CustomerAddressesBase
     */
    postalCode: string;
    /**
     * The country code of the customer address.
     * @type {string}
     * @memberof CustomerAddressesBase
     */
    countryCode: string;
    /**
     * The phone number of the customer address.
     * @type {string}
     * @memberof CustomerAddressesBase
     */
    phone?: string;
    /**
     * The address type. Residential or Commercial
     * @type {string}
     * @memberof CustomerAddressesBase
     */
    addressType?: CustomerAddressesBaseAddressTypeEnum;
}

/**
* @export
* @enum {string}
*/
export enum CustomerAddressesBaseAddressTypeEnum {
    Residential = 'residential',
    Commercial = 'commercial'
}

export function CustomerAddressesBaseFromJSON(json: any): CustomerAddressesBase {
    return CustomerAddressesBaseFromJSONTyped(json, false);
}

export function CustomerAddressesBaseFromJSONTyped(json: any, ignoreDiscriminator: boolean): CustomerAddressesBase {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'firstName': json['first_name'],
        'lastName': json['last_name'],
        'company': !exists(json, 'company') ? undefined : json['company'],
        'address1': json['address1'],
        'address2': !exists(json, 'address2') ? undefined : json['address2'],
        'city': json['city'],
        'stateOrProvince': json['state_or_province'],
        'postalCode': json['postal_code'],
        'countryCode': json['country_code'],
        'phone': !exists(json, 'phone') ? undefined : json['phone'],
        'addressType': !exists(json, 'address_type') ? undefined : json['address_type'],
    };
}

export function CustomerAddressesBaseToJSON(value?: CustomerAddressesBase | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'first_name': value.firstName,
        'last_name': value.lastName,
        'company': value.company,
        'address1': value.address1,
        'address2': value.address2,
        'city': value.city,
        'state_or_province': value.stateOrProvince,
        'postal_code': value.postalCode,
        'country_code': value.countryCode,
        'phone': value.phone,
        'address_type': value.addressType,
    };
}


