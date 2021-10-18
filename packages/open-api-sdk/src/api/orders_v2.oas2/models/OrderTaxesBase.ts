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
/**
 * 
 * @export
 * @interface OrderTaxesBase
 */
export interface OrderTaxesBase {
    /**
     * The unique numeric identifier of the taxes object.
     * @type {number}
     * @memberof OrderTaxesBase
     */
    id?: number;
    /**
     * The unique numeric identifier of the order to which the tax was applied. NOTE: Not included if the store was using the automatic tax feature.
     * @type {number}
     * @memberof OrderTaxesBase
     */
    orderId?: number;
    /**
     * The unique numeric identifier of the order address object associated with the order. NOTE: Not included if the store was using the automatic tax feature.
     * @type {number}
     * @memberof OrderTaxesBase
     */
    orderAddressId?: number;
    /**
     * The unique numeric identifier of the tax rate.
     * @type {number}
     * @memberof OrderTaxesBase
     */
    taxRateId?: number;
    /**
     * The unique numeric identifier of the tax class object. NOTE: Will be 0 if automatic tax was enabled, or if the default tax class was used.
     * @type {number}
     * @memberof OrderTaxesBase
     */
    taxClassId?: number;
    /**
     * The name of the tax class object.
     * @type {string}
     * @memberof OrderTaxesBase
     */
    name?: string;
    /**
     * The name of the type of tax that was applied. NOTE: will be 'Automatic Tax' if automatic tax was enabled.
     * @type {string}
     * @memberof OrderTaxesBase
     */
    _class?: string;
    /**
     * The tax rate.  The priority order in which the tax is applied (Float, Float-As-String, Integer)
     * @type {string}
     * @memberof OrderTaxesBase
     */
    rate?: string;
    /**
     * The order in which the tax is applied
     * @type {number}
     * @memberof OrderTaxesBase
     */
    priority?: number;
    /**
     * The amount of tax calculated on the order.   (Float, Float-As-String, Integer)
     * @type {string}
     * @memberof OrderTaxesBase
     */
    priorityAmount?: string;
    /**
     * (Float, Float-As-String, Integer)
     * @type {string}
     * @memberof OrderTaxesBase
     */
    lineAmount?: string;
    /**
     * If the `line_item_type` is `item` or `handling` then this field will be the order product id. Otherwise the field will return as null.
     * @type {string}
     * @memberof OrderTaxesBase
     */
    orderProductId?: string;
    /**
     * Type of tax on item
     * @type {string}
     * @memberof OrderTaxesBase
     */
    lineItemType?: OrderTaxesBaseLineItemTypeEnum;
}

/**
* @export
* @enum {string}
*/
export enum OrderTaxesBaseLineItemTypeEnum {
    Item = 'item',
    Shipping = 'shipping',
    Handling = 'handling',
    GiftWrapping = 'gift-wrapping'
}

export function OrderTaxesBaseFromJSON(json: any): OrderTaxesBase {
    return OrderTaxesBaseFromJSONTyped(json, false);
}

export function OrderTaxesBaseFromJSONTyped(json: any, ignoreDiscriminator: boolean): OrderTaxesBase {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'orderId': !exists(json, 'order_id') ? undefined : json['order_id'],
        'orderAddressId': !exists(json, 'order_address_id') ? undefined : json['order_address_id'],
        'taxRateId': !exists(json, 'tax_rate_id') ? undefined : json['tax_rate_id'],
        'taxClassId': !exists(json, 'tax_class_id') ? undefined : json['tax_class_id'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        '_class': !exists(json, 'class') ? undefined : json['class'],
        'rate': !exists(json, 'rate') ? undefined : json['rate'],
        'priority': !exists(json, 'priority') ? undefined : json['priority'],
        'priorityAmount': !exists(json, 'priority_amount') ? undefined : json['priority_amount'],
        'lineAmount': !exists(json, 'line_amount') ? undefined : json['line_amount'],
        'orderProductId': !exists(json, 'order_product_id') ? undefined : json['order_product_id'],
        'lineItemType': !exists(json, 'line_item_type') ? undefined : json['line_item_type'],
    };
}

export function OrderTaxesBaseToJSON(value?: OrderTaxesBase | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'order_id': value.orderId,
        'order_address_id': value.orderAddressId,
        'tax_rate_id': value.taxRateId,
        'tax_class_id': value.taxClassId,
        'name': value.name,
        'class': value._class,
        'rate': value.rate,
        'priority': value.priority,
        'priority_amount': value.priorityAmount,
        'line_amount': value.lineAmount,
        'order_product_id': value.orderProductId,
        'line_item_type': value.lineItemType,
    };
}


