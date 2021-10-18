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
    OrderProductAppliedDiscounts,
    OrderProductAppliedDiscountsFromJSON,
    OrderProductAppliedDiscountsFromJSONTyped,
    OrderProductAppliedDiscountsToJSON,
    OrderProductOptions,
    OrderProductOptionsFromJSON,
    OrderProductOptionsFromJSONTyped,
    OrderProductOptionsToJSON,
} from './';

/**
 * 
 * @export
 * @interface OrderProducts
 */
export interface OrderProducts {
    /**
     * Numeric ID of this product within this order.
     * @type {number}
     * @memberof OrderProducts
     */
    id?: number;
    /**
     * Numeric ID of the associated order.
     * @type {number}
     * @memberof OrderProducts
     */
    orderId?: number;
    /**
     * Numeric ID of the product.
     * @type {number}
     * @memberof OrderProducts
     */
    productId?: number;
    /**
     * Numeric ID of the associated order address.
     * @type {number}
     * @memberof OrderProducts
     */
    orderAddressId?: number;
    /**
     * Alias for name_customer - The product name that is shown to customer in storefront.
     * @type {string}
     * @memberof OrderProducts
     */
    name?: string;
    /**
     * User-defined product code/stock keeping unit (SKU).
     * @type {string}
     * @memberof OrderProducts
     */
    sku?: string;
    /**
     * Type of product
     * @type {string}
     * @memberof OrderProducts
     */
    type?: OrderProductsTypeEnum;
    /**
     * The product's base price. (Float, Float-As-String, Integer)
     * @type {string}
     * @memberof OrderProducts
     */
    basePrice?: string;
    /**
     * The product’s price excluding tax. (Float, Float-As-String, Integer)
     * @type {string}
     * @memberof OrderProducts
     */
    priceExTax?: string;
    /**
     * The product’s price including tax. (Float, Float-As-String, Integer)
     * @type {string}
     * @memberof OrderProducts
     */
    priceIncTax?: string;
    /**
     * Amount of tax applied to a single product.
     * 
     * Price tax is calculated as:
     * `price_tax = price_inc_tax - price_ex_tax`
     * 
     * (Float, Float-As-String, Integer)
     * @type {string}
     * @memberof OrderProducts
     */
    priceTax?: string;
    /**
     * Total base price. (Float, Float-As-String, Integer)
     * @type {string}
     * @memberof OrderProducts
     */
    baseTotal?: string;
    /**
     * Total base price excluding tax. (Float, Float-As-String, Integer)
     * @type {string}
     * @memberof OrderProducts
     */
    totalExTax?: string;
    /**
     * Total base price including tax. (Float, Float-As-String, Integer)
     * @type {string}
     * @memberof OrderProducts
     */
    totalIncTax?: string;
    /**
     * Total tax applied to products.
     * For example, if quantity if 2, base price is 5 and tax rate is 10%. price_tax will be $.50 and total_tax will be $1.00.
     * 
     * If there is a manual discount applied total_tax is calcuted as the following:
     * `(price_ex_tax - discount)*tax_rate=total_tax`.
     * (Float, Float-As-String, Integer)
     * @type {string}
     * @memberof OrderProducts
     */
    totalTax?: string;
    /**
     * Quantity of the product ordered.
     * @type {number}
     * @memberof OrderProducts
     */
    quantity?: number;
    /**
     * The product's cost price.  This can be set using the Catalog API. (Float, Float-As-String, Integer) Read Only
     * @type {string}
     * @memberof OrderProducts
     */
    baseCostPrice?: string;
    /**
     * The product's cost price including tax. (Float, Float-As-String, Integer)
     * The cost of your products to you; this is never shown to customers, but can be used for accounting purposes. Read Only
     * @type {string}
     * @memberof OrderProducts
     */
    costPriceIncTax?: string;
    /**
     * The products cost price excluding tax. (Float, Float-As-String, Integer)
     * The cost of your products to you; this is never shown to customers, but can be used for accounting purposes. Read Only
     * @type {string}
     * @memberof OrderProducts
     */
    costPriceExTax?: string;
    /**
     * Weight of the product. (Float, Float-As-String, Integer)
     * @type {any}
     * @memberof OrderProducts
     */
    weight?: any | null;
    /**
     * Tax applied to the product’s cost price. (Float, Float-As-String, Integer)
     * The cost of your products to you; this is never shown to customers, but can be used for accounting purposes. Read Only
     * @type {string}
     * @memberof OrderProducts
     */
    costPriceTax?: string;
    /**
     * Whether the product has been refunded.
     * @type {boolean}
     * @memberof OrderProducts
     */
    isRefunded?: boolean;
    /**
     * The amount refunded from this transaction. (Float, Float-As-String, Integer)
     * @type {string}
     * @memberof OrderProducts
     */
    refundedAmount?: string;
    /**
     * Numeric ID for the refund.
     * @type {number}
     * @memberof OrderProducts
     */
    returnId?: number;
    /**
     * Name of gift-wrapping option
     * @type {string}
     * @memberof OrderProducts
     */
    wrappingName?: string;
    /**
     * The value of the base wrapping cost. (Float, Float-As-String, Integer)
     * @type {string | number}
     * @memberof OrderProducts
     */
    baseWrappingCost?: string | number;
    /**
     * The value of the wrapping cost, excluding tax. (Float, Float-As-String, Integer)
     * @type {string}
     * @memberof OrderProducts
     */
    wrappingCostExTax?: string;
    /**
     * The value of the wrapping cost, including tax. (Float, Float-As-String, Integer)
     * @type {string}
     * @memberof OrderProducts
     */
    wrappingCostIncTax?: string;
    /**
     * Tax applied to gift-wrapping option. (Float, Float-As-String, Integer)
     * @type {string}
     * @memberof OrderProducts
     */
    wrappingCostTax?: string;
    /**
     * Message to accompany gift-wrapping option.
     * @type {string}
     * @memberof OrderProducts
     */
    wrappingMessage?: string;
    /**
     * Quantity of this item shipped.
     * @type {number}
     * @memberof OrderProducts
     */
    quantityShipped?: number;
    /**
     * Name of promotional event/delivery date.
     * @type {any}
     * @memberof OrderProducts
     */
    eventName?: any | null;
    /**
     * Date of the promotional event/scheduled delivery.
     * @type {any}
     * @memberof OrderProducts
     */
    eventDate?: any | null;
    /**
     * Fixed shipping cost for this product. (Float, Float-As-String, Integer)
     * @type {string}
     * @memberof OrderProducts
     */
    fixedShippingCost?: string;
    /**
     * Item ID for this product on eBay.
     * @type {string}
     * @memberof OrderProducts
     */
    ebayItemId?: string;
    /**
     * Transaction ID for this product on eBay.
     * @type {string}
     * @memberof OrderProducts
     */
    ebayTransactionId?: string;
    /**
     * Numeric ID of the option set applied to the product.
     * @type {any}
     * @memberof OrderProducts
     */
    optionSetId?: any | null;
    /**
     * ID of a parent product.
     * @type {any}
     * @memberof OrderProducts
     */
    parentOrderProductId?: any | null;
    /**
     * Whether this product is bundled with other products.
     * @type {boolean}
     * @memberof OrderProducts
     */
    isBundledProduct?: boolean;
    /**
     * Bin picking number for the physical product.
     * @type {string}
     * @memberof OrderProducts
     */
    binPickingNumber?: string;
    /**
     * Array of objects containing discounts applied to the product.
     * @type {Array<OrderProductAppliedDiscounts>}
     * @memberof OrderProducts
     */
    appliedDiscounts?: Array<OrderProductAppliedDiscounts>;
    /**
     * Array of product option objects.
     * @type {Array<OrderProductOptions>}
     * @memberof OrderProducts
     */
    productOptions?: Array<OrderProductOptions>;
    /**
     * ID of the order in another system. For example, the Amazon Order ID if this is an Amazon order.This field can be updated in a /POST, but using a /PUT to update the order will return a 400 error. The field 'external_id' cannot be written to. Please remove it from your request before trying again. It can not be overwritten once set.
     * @type {any}
     * @memberof OrderProducts
     */
    externalId?: any | null;
    /**
     * Universal Product Code. Can be written to for custom products and catalog products.
     * @type {string}
     * @memberof OrderProducts
     */
    upc?: string;
    /**
     * Products `variant_id`. PUT or POST. This field is not available for custom products.
     * @type {number}
     * @memberof OrderProducts
     */
    variantId?: number;
    /**
     * The product name that is shown to customer in storefront.
     * @type {string}
     * @memberof OrderProducts
     */
    nameCustomer?: string;
    /**
     * The product name that is shown to merchant in Control Panel.
     * @type {string}
     * @memberof OrderProducts
     */
    nameMerchant?: string;
}

/**
* @export
* @enum {string}
*/
export enum OrderProductsTypeEnum {
    Physical = 'physical',
    Digital = 'digital'
}

export function OrderProductsFromJSON(json: any): OrderProducts {
    return OrderProductsFromJSONTyped(json, false);
}

export function OrderProductsFromJSONTyped(json: any, ignoreDiscriminator: boolean): OrderProducts {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'orderId': !exists(json, 'order_id') ? undefined : json['order_id'],
        'productId': !exists(json, 'product_id') ? undefined : json['product_id'],
        'orderAddressId': !exists(json, 'order_address_id') ? undefined : json['order_address_id'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'sku': !exists(json, 'sku') ? undefined : json['sku'],
        'type': !exists(json, 'type') ? undefined : json['type'],
        'basePrice': !exists(json, 'base_price') ? undefined : json['base_price'],
        'priceExTax': !exists(json, 'price_ex_tax') ? undefined : json['price_ex_tax'],
        'priceIncTax': !exists(json, 'price_inc_tax') ? undefined : json['price_inc_tax'],
        'priceTax': !exists(json, 'price_tax') ? undefined : json['price_tax'],
        'baseTotal': !exists(json, 'base_total') ? undefined : json['base_total'],
        'totalExTax': !exists(json, 'total_ex_tax') ? undefined : json['total_ex_tax'],
        'totalIncTax': !exists(json, 'total_inc_tax') ? undefined : json['total_inc_tax'],
        'totalTax': !exists(json, 'total_tax') ? undefined : json['total_tax'],
        'quantity': !exists(json, 'quantity') ? undefined : json['quantity'],
        'baseCostPrice': !exists(json, 'base_cost_price') ? undefined : json['base_cost_price'],
        'costPriceIncTax': !exists(json, 'cost_price_inc_tax') ? undefined : json['cost_price_inc_tax'],
        'costPriceExTax': !exists(json, 'cost_price_ex_tax') ? undefined : json['cost_price_ex_tax'],
        'weight': !exists(json, 'weight') ? undefined : json['weight'],
        'costPriceTax': !exists(json, 'cost_price_tax') ? undefined : json['cost_price_tax'],
        'isRefunded': !exists(json, 'is_refunded') ? undefined : json['is_refunded'],
        'refundedAmount': !exists(json, 'refunded_amount') ? undefined : json['refunded_amount'],
        'returnId': !exists(json, 'return_id') ? undefined : json['return_id'],
        'wrappingName': !exists(json, 'wrapping_name') ? undefined : json['wrapping_name'],
        'baseWrappingCost': !exists(json, 'base_wrapping_cost') ? undefined : string | numberFromJSON(json['base_wrapping_cost']),
        'wrappingCostExTax': !exists(json, 'wrapping_cost_ex_tax') ? undefined : json['wrapping_cost_ex_tax'],
        'wrappingCostIncTax': !exists(json, 'wrapping_cost_inc_tax') ? undefined : json['wrapping_cost_inc_tax'],
        'wrappingCostTax': !exists(json, 'wrapping_cost_tax') ? undefined : json['wrapping_cost_tax'],
        'wrappingMessage': !exists(json, 'wrapping_message') ? undefined : json['wrapping_message'],
        'quantityShipped': !exists(json, 'quantity_shipped') ? undefined : json['quantity_shipped'],
        'eventName': !exists(json, 'event_name') ? undefined : json['event_name'],
        'eventDate': !exists(json, 'event_date') ? undefined : json['event_date'],
        'fixedShippingCost': !exists(json, 'fixed_shipping_cost') ? undefined : json['fixed_shipping_cost'],
        'ebayItemId': !exists(json, 'ebay_item_id') ? undefined : json['ebay_item_id'],
        'ebayTransactionId': !exists(json, 'ebay_transaction_id') ? undefined : json['ebay_transaction_id'],
        'optionSetId': !exists(json, 'option_set_id') ? undefined : json['option_set_id'],
        'parentOrderProductId': !exists(json, 'parent_order_product_id') ? undefined : json['parent_order_product_id'],
        'isBundledProduct': !exists(json, 'is_bundled_product') ? undefined : json['is_bundled_product'],
        'binPickingNumber': !exists(json, 'bin_picking_number') ? undefined : json['bin_picking_number'],
        'appliedDiscounts': !exists(json, 'applied_discounts') ? undefined : ((json['applied_discounts'] as Array<any>).map(OrderProductAppliedDiscountsFromJSON)),
        'productOptions': !exists(json, 'product_options') ? undefined : ((json['product_options'] as Array<any>).map(OrderProductOptionsFromJSON)),
        'externalId': !exists(json, 'external_id') ? undefined : json['external_id'],
        'upc': !exists(json, 'upc') ? undefined : json['upc'],
        'variantId': !exists(json, 'variant_id') ? undefined : json['variant_id'],
        'nameCustomer': !exists(json, 'name_customer') ? undefined : json['name_customer'],
        'nameMerchant': !exists(json, 'name_merchant') ? undefined : json['name_merchant'],
    };
}

export function OrderProductsToJSON(value?: OrderProducts | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'order_id': value.orderId,
        'product_id': value.productId,
        'order_address_id': value.orderAddressId,
        'name': value.name,
        'sku': value.sku,
        'type': value.type,
        'base_price': value.basePrice,
        'price_ex_tax': value.priceExTax,
        'price_inc_tax': value.priceIncTax,
        'price_tax': value.priceTax,
        'base_total': value.baseTotal,
        'total_ex_tax': value.totalExTax,
        'total_inc_tax': value.totalIncTax,
        'total_tax': value.totalTax,
        'quantity': value.quantity,
        'base_cost_price': value.baseCostPrice,
        'cost_price_inc_tax': value.costPriceIncTax,
        'cost_price_ex_tax': value.costPriceExTax,
        'weight': value.weight,
        'cost_price_tax': value.costPriceTax,
        'is_refunded': value.isRefunded,
        'refunded_amount': value.refundedAmount,
        'return_id': value.returnId,
        'wrapping_name': value.wrappingName,
        'base_wrapping_cost': string | numberToJSON(value.baseWrappingCost),
        'wrapping_cost_ex_tax': value.wrappingCostExTax,
        'wrapping_cost_inc_tax': value.wrappingCostIncTax,
        'wrapping_cost_tax': value.wrappingCostTax,
        'wrapping_message': value.wrappingMessage,
        'quantity_shipped': value.quantityShipped,
        'event_name': value.eventName,
        'event_date': value.eventDate,
        'fixed_shipping_cost': value.fixedShippingCost,
        'ebay_item_id': value.ebayItemId,
        'ebay_transaction_id': value.ebayTransactionId,
        'option_set_id': value.optionSetId,
        'parent_order_product_id': value.parentOrderProductId,
        'is_bundled_product': value.isBundledProduct,
        'bin_picking_number': value.binPickingNumber,
        'applied_discounts': value.appliedDiscounts === undefined ? undefined : ((value.appliedDiscounts as Array<any>).map(OrderProductAppliedDiscountsToJSON)),
        'product_options': value.productOptions === undefined ? undefined : ((value.productOptions as Array<any>).map(OrderProductOptionsToJSON)),
        'external_id': value.externalId,
        'upc': value.upc,
        'variant_id': value.variantId,
        'name_customer': value.nameCustomer,
        'name_merchant': value.nameMerchant,
    };
}


