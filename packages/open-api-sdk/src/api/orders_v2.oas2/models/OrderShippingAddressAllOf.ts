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
    FormFields,
    FormFieldsFromJSON,
    FormFieldsFromJSONTyped,
    FormFieldsToJSON,
    ShippingQuotesResource,
    ShippingQuotesResourceFromJSON,
    ShippingQuotesResourceFromJSONTyped,
    ShippingQuotesResourceToJSON,
} from './';

/**
 * 
 * @export
 * @interface OrderShippingAddressAllOf
 */
export interface OrderShippingAddressAllOf {
    /**
     * ID of this shipping address.
     * @type {number}
     * @memberof OrderShippingAddressAllOf
     */
    id?: number;
    /**
     * ID of the order.
     * @type {number}
     * @memberof OrderShippingAddressAllOf
     */
    orderId?: number;
    /**
     * The total number of items in the order.
     * @type {number}
     * @memberof OrderShippingAddressAllOf
     */
    itemsTotal?: number;
    /**
     * The number of items that have been shipped.
     * @type {number}
     * @memberof OrderShippingAddressAllOf
     */
    itemsShipped?: number;
    /**
     * The base value of the order’s items. (Float, Float-As-String, Integer)
     * @type {string}
     * @memberof OrderShippingAddressAllOf
     */
    baseCost?: string;
    /**
     * The value of the order’s items, excluding tax. (Float, Float-As-String, Integer)
     * @type {string}
     * @memberof OrderShippingAddressAllOf
     */
    costExTax?: string;
    /**
     * The value of the order’s items, including tax. (Float, Float-As-String, Integer)
     * @type {string}
     * @memberof OrderShippingAddressAllOf
     */
    costIncTax?: string;
    /**
     * The tax amount on the order. (Float, Float-As-String, Integer)
     * @type {string}
     * @memberof OrderShippingAddressAllOf
     */
    costTax?: string;
    /**
     * The ID of the tax class applied to the product. (NOTE: Value ignored if automatic tax is enabled.)
     * @type {number}
     * @memberof OrderShippingAddressAllOf
     */
    costTaxClassId?: number;
    /**
     * The base handling charge. (Float, Float-As-String, Integer)
     * @type {string}
     * @memberof OrderShippingAddressAllOf
     */
    baseHandlingCost?: string;
    /**
     * The handling charge, excluding tax. (Float, Float-As-String, Integer)
     * @type {string}
     * @memberof OrderShippingAddressAllOf
     */
    handlingCostExTax?: string;
    /**
     * The handling charge, including tax. (Float, Float-As-String, Integer)
     * @type {string}
     * @memberof OrderShippingAddressAllOf
     */
    handlingCostIncTax?: string;
    /**
     * 
     * @type {string}
     * @memberof OrderShippingAddressAllOf
     */
    handlingCostTax?: string;
    /**
     * A read-only value. Do not attempt to set or modify this value in a POST or PUT operation. (NOTE: Value ignored if automatic tax is enabled on the store.)
     * @type {number}
     * @memberof OrderShippingAddressAllOf
     */
    handlingCostTaxClassId?: number;
    /**
     * Numeric ID of the shipping zone.
     * @type {number}
     * @memberof OrderShippingAddressAllOf
     */
    shippingZoneId?: number;
    /**
     * Name of the shipping zone.
     * @type {string}
     * @memberof OrderShippingAddressAllOf
     */
    shippingZoneName?: string;
    /**
     * 
     * @type {Array<FormFields>}
     * @memberof OrderShippingAddressAllOf
     */
    formFields?: Array<FormFields>;
    /**
     * 
     * @type {ShippingQuotesResource}
     * @memberof OrderShippingAddressAllOf
     */
    shippingQuotes?: ShippingQuotesResource;
}

export function OrderShippingAddressAllOfFromJSON(json: any): OrderShippingAddressAllOf {
    return OrderShippingAddressAllOfFromJSONTyped(json, false);
}

export function OrderShippingAddressAllOfFromJSONTyped(json: any, ignoreDiscriminator: boolean): OrderShippingAddressAllOf {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'orderId': !exists(json, 'order_id') ? undefined : json['order_id'],
        'itemsTotal': !exists(json, 'items_total') ? undefined : json['items_total'],
        'itemsShipped': !exists(json, 'items_shipped') ? undefined : json['items_shipped'],
        'baseCost': !exists(json, 'base_cost') ? undefined : json['base_cost'],
        'costExTax': !exists(json, 'cost_ex_tax') ? undefined : json['cost_ex_tax'],
        'costIncTax': !exists(json, 'cost_inc_tax') ? undefined : json['cost_inc_tax'],
        'costTax': !exists(json, 'cost_tax') ? undefined : json['cost_tax'],
        'costTaxClassId': !exists(json, 'cost_tax_class_id') ? undefined : json['cost_tax_class_id'],
        'baseHandlingCost': !exists(json, 'base_handling_cost') ? undefined : json['base_handling_cost'],
        'handlingCostExTax': !exists(json, 'handling_cost_ex_tax') ? undefined : json['handling_cost_ex_tax'],
        'handlingCostIncTax': !exists(json, 'handling_cost_inc_tax') ? undefined : json['handling_cost_inc_tax'],
        'handlingCostTax': !exists(json, 'handling_cost_tax') ? undefined : json['handling_cost_tax'],
        'handlingCostTaxClassId': !exists(json, 'handling_cost_tax_class_id') ? undefined : json['handling_cost_tax_class_id'],
        'shippingZoneId': !exists(json, 'shipping_zone_id') ? undefined : json['shipping_zone_id'],
        'shippingZoneName': !exists(json, 'shipping_zone_name') ? undefined : json['shipping_zone_name'],
        'formFields': !exists(json, 'form_fields') ? undefined : ((json['form_fields'] as Array<any>).map(FormFieldsFromJSON)),
        'shippingQuotes': !exists(json, 'shipping_quotes') ? undefined : ShippingQuotesResourceFromJSON(json['shipping_quotes']),
    };
}

export function OrderShippingAddressAllOfToJSON(value?: OrderShippingAddressAllOf | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'order_id': value.orderId,
        'items_total': value.itemsTotal,
        'items_shipped': value.itemsShipped,
        'base_cost': value.baseCost,
        'cost_ex_tax': value.costExTax,
        'cost_inc_tax': value.costIncTax,
        'cost_tax': value.costTax,
        'cost_tax_class_id': value.costTaxClassId,
        'base_handling_cost': value.baseHandlingCost,
        'handling_cost_ex_tax': value.handlingCostExTax,
        'handling_cost_inc_tax': value.handlingCostIncTax,
        'handling_cost_tax': value.handlingCostTax,
        'handling_cost_tax_class_id': value.handlingCostTaxClassId,
        'shipping_zone_id': value.shippingZoneId,
        'shipping_zone_name': value.shippingZoneName,
        'form_fields': value.formFields === undefined ? undefined : ((value.formFields as Array<any>).map(FormFieldsToJSON)),
        'shipping_quotes': ShippingQuotesResourceToJSON(value.shippingQuotes),
    };
}


