/* tslint:disable */
/* eslint-disable */
/**
 * Orders V2
 * Manage order coupons, messages, products, shipping addresses, statuses, taxes, shipments, and shipping address quotes.  - [Authentication](#authentication) - [Order](#order)  ## Authentication  Authenticate requests by including an [OAuth](https://developer.bigcommerce.com/api-docs/getting-started/authentication) `access_token` request header.  ```http GET https://api.bigcommerce.com/stores/{{STORE_HASH}}/v3/{{ENDPOINT}} Content-Type: application/json X-Auth-Token: {{ACCESS_TOKEN}} ```  ### OAuth Scopes  |  **UI Name** | **Permission** | **Parameter** | | --- | --- | --- | |  Orders | modify | `store_v2_orders` | |  Orders | read-only | `store_v2_orders_read_only` |   ## Order  The Order object contains a record of the purchase agreement between a shopper and a merchant. To learn more about creating orders, see [Orders API Guide](/api-docs/orders/orders-api-overview).  ### Currency Fields  The **default** currency refers to the transactional currency which is the currency the shopper pays in.  The **display** currency refers to the presentational currency used to present prices to the shopper on the storefront.  * `currency_id` - the display currency ID. Depending on the currency selected, the value may be different from the transactional currency. * `currency_code` - the currency code of the display currency used to present prices to the shopper on the storefront. Depending on the currency selected, the value may be different from the transactional currency. * `currency_exchange_rate` - the exchange rate between the store\'s default currency and the display currency. For orders created using the V2 endpoints, this value is always 1 (only in the storefront this value can be different to 1). * `default_currency_id` - the transactional currency ID. * `default_currency_code` - the currency code of the transactional currency the shopper pays in.  The following additional fields are returned on orders when Multi-Currency is enabled on the store:  * `store_default_currency_code` - the currency code of the store\'s default currency. * `store_default_to_transactional_exchange_rate` - the exchange rate between the store\'s default currency and the transactional currency used in the order.  **Example:**  ```json {   ...   \"currency_id\": 4,   \"currency_code\": \"EUR\",   \"currency_exchange_rate\": 1,   \"default_currency_id\": 4,   \"default_currency_code\": \"EUR\",   \"store_default_currency_code\": \"USD\",   \"store_default_to_transactional_exchange_rate\": \"100.0000000000\"   ... } ```
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
    BillingAddressBase,
    BillingAddressBaseFromJSON,
    BillingAddressBaseFromJSONTyped,
    BillingAddressBaseToJSON,
    BillingAddressFullAllOf,
    BillingAddressFullAllOfFromJSON,
    BillingAddressFullAllOfFromJSONTyped,
    BillingAddressFullAllOfToJSON,
    FormFields,
    FormFieldsFromJSON,
    FormFieldsFromJSONTyped,
    FormFieldsToJSON,
} from './';

/**
 * Required to create an order.
 * @export
 * @interface BillingAddressFull
 */
export interface BillingAddressFull {
    /**
     * 
     * @type {string}
     * @memberof BillingAddressFull
     */
    firstName?: string;
    /**
     * 
     * @type {string}
     * @memberof BillingAddressFull
     */
    lastName?: string;
    /**
     * 
     * @type {string}
     * @memberof BillingAddressFull
     */
    company?: string;
    /**
     * 
     * @type {string}
     * @memberof BillingAddressFull
     */
    street1?: string;
    /**
     * 
     * @type {string}
     * @memberof BillingAddressFull
     */
    street2?: string;
    /**
     * 
     * @type {string}
     * @memberof BillingAddressFull
     */
    city?: string;
    /**
     * 
     * @type {string}
     * @memberof BillingAddressFull
     */
    state?: string;
    /**
     * The billing address must include the zip code. The zip code must be two or more characters.
     * @type {string}
     * @memberof BillingAddressFull
     */
    zip: string;
    /**
     * 
     * @type {string}
     * @memberof BillingAddressFull
     */
    country?: string;
    /**
     * 
     * @type {string}
     * @memberof BillingAddressFull
     */
    countryIso2?: string;
    /**
     * 
     * @type {string}
     * @memberof BillingAddressFull
     */
    phone?: string;
    /**
     * 
     * @type {string}
     * @memberof BillingAddressFull
     */
    email?: string;
    /**
     * 
     * @type {Array<FormFields>}
     * @memberof BillingAddressFull
     */
    formFields?: Array<FormFields>;
}

export function BillingAddressFullFromJSON(json: any): BillingAddressFull {
    return BillingAddressFullFromJSONTyped(json, false);
}

export function BillingAddressFullFromJSONTyped(json: any, ignoreDiscriminator: boolean): BillingAddressFull {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'firstName': !exists(json, 'first_name') ? undefined : json['first_name'],
        'lastName': !exists(json, 'last_name') ? undefined : json['last_name'],
        'company': !exists(json, 'company') ? undefined : json['company'],
        'street1': !exists(json, 'street_1') ? undefined : json['street_1'],
        'street2': !exists(json, 'street_2') ? undefined : json['street_2'],
        'city': !exists(json, 'city') ? undefined : json['city'],
        'state': !exists(json, 'state') ? undefined : json['state'],
        'zip': json['zip'],
        'country': !exists(json, 'country') ? undefined : json['country'],
        'countryIso2': !exists(json, 'country_iso2') ? undefined : json['country_iso2'],
        'phone': !exists(json, 'phone') ? undefined : json['phone'],
        'email': !exists(json, 'email') ? undefined : json['email'],
        'formFields': !exists(json, 'form_fields') ? undefined : ((json['form_fields'] as Array<any>).map(FormFieldsFromJSON)),
    };
}

export function BillingAddressFullToJSON(value?: BillingAddressFull | null): any {
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
        'street_1': value.street1,
        'street_2': value.street2,
        'city': value.city,
        'state': value.state,
        'zip': value.zip,
        'country': value.country,
        'country_iso2': value.countryIso2,
        'phone': value.phone,
        'email': value.email,
        'form_fields': value.formFields === undefined ? undefined : ((value.formFields as Array<any>).map(FormFieldsToJSON)),
    };
}


