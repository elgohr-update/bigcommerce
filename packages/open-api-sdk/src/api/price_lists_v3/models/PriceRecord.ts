/* tslint:disable */
/* eslint-disable */
/**
 * Price Lists
 * Populate different versions of catalog pricing and assign them to different [customer groups](/api-reference/customer-subscribers/customers-api) at the variant level.  - [Authentication](#authentication) - [Price Lists](#price-lists) - [Price Lists Assignments](#price-lists-assignments) - [Usage notes](#usage-notes) - [Additional information](#additional-information)  ## Authentication  Authenticate requests by including an [OAuth](https://developer.bigcommerce.com/api-docs/getting-started/authentication) `access_token` in the request headers.  ```http GET https://api.bigcommerce.com/stores/{{STORE_HASH}}/v3/{{ENDPOINT}} Content-Type: application/json X-Auth-Token: {{ACCESS_TOKEN}} ```  ### OAuth Scopes  | UI Name                                      | Permission | Parameter                                     | |----------------------------------------------|------------|-----------------------------------------------| | Products                                     | modify     | `store_v2_products`                           | | Products                                     | read-only  | `store_v2_products_read_only`                 |  ## Price Lists  The association of a Price List to a customer group can be done either via the control panel or using the [Customer Groups API.](/api-reference/customer-subscribers/customers-api)  [Price List Assignments](https://developer.bigcommerce.com/api-reference/store-management/price-lists/price-lists-records/) can be created to assign Price Lists to a specific [channel](https://developer.bigcommerce.com/api-reference/cart-checkout/channels-listings-api). Price Lists assigned to a channel apply to all shoppers on that channel, unless there are more specific assignments or customer group discounts set up for the shopper\'s customer group.  If an active Price List does not contain prices for a variant, then the catalog pricing will be used.  Price Lists provide overridden price values to the Stencil storefront. Final price display can be further customized within the Stencil template using the template\'s [price](https://developer.bigcommerce.com/stencil-docs/reference-docs/global-objects-and-properties/models/price) object.  To learn more about Price Lists, see [Price Lists API](/api-docs/store-management/price-list-overview).  ## Price Lists Assignments  ### Order of operations  **IF** Price List assigned to current customer group **AND** Price List assigned to current channel: * Use this Price List -- any prices not found fall back to the catalog price (or in the case of multi-currency, auto-converted prices)  **ELSE IF** Price List assigned to current customer group: * Use this Price List -- any prices not found fall back to the catalog price (or in the case of multi-currency, auto-converted prices)  **ELSE IF** Customer group discounts: * Use them -- any prices not found fall back to the catalog price (or in the case of multi-currency, auto-converted prices)  **ELSE IF** Channel has a default Price List: * Use this Price List -- any prices not found fall back to the catalog price (or in the case of multi-currency, auto-converted prices)  **ELSE**: * Fall back to the catalog price (or in the case of multi-currency, auto-converted prices)  ## Usage notes - Price Lists cannot be assigned to a customer group that has customer group discounts -- the customer group discounts must be deleted first. - Bulk pricing Tiers may additionally be associated with a price record to indicate different pricing as the quantity in the cart increases. - If a variant has a Price Record, any existing product-level bulk pricing will not apply in the cart. For variants without Price Records, any existing product bulk pricing will apply. - [Price Lists Records](https://developer.bigcommerce.com/api-reference/store-management/price-lists/price-lists-records/setpricelistrecordcollection) accepts bulk upsert. You can only do one bulk upsert at a time. Running more than one in parallel on the **same store** will cause a 429 error and the request will fail. - There are no webhooks available for Price Lists. Since Price Lists directly relate to products, product webhooks will fire for corresponding changes such as pricing.  ## Additional information  ### Webhooks  * [Products](/api-docs/store-management/webhooks/events#products) * [SKU](/api-docs/store-management/webhooks/events#sku)  ### Related endpoints * [Get All Price Lists](/api-reference/store-management/price-lists/price-lists/getpricelistcollection)
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
    BulkPricingTier,
    BulkPricingTierFromJSON,
    BulkPricingTierFromJSONTyped,
    BulkPricingTierToJSON,
    PriceRecordAllOf,
    PriceRecordAllOfFromJSON,
    PriceRecordAllOfFromJSONTyped,
    PriceRecordAllOfToJSON,
    PriceRecordBase,
    PriceRecordBaseFromJSON,
    PriceRecordBaseFromJSONTyped,
    PriceRecordBaseToJSON,
} from './';

/**
 * The Price Record object.
 * @export
 * @interface PriceRecord
 */
export interface PriceRecord {
    /**
     * The price of the variant as seen on the storefront if a price record is in effect. It will be equal to the `sale_price`, if set, and the `price` if there is not a `sale_price`.  Read only.
     * @type {number}
     * @memberof PriceRecord
     */
    calculatedPrice?: number;
    /**
     * The date on which the Price entry was created.
     * @type {Date}
     * @memberof PriceRecord
     */
    dateCreated?: Date;
    /**
     * The date on which the Price entry was created.
     * @type {Date}
     * @memberof PriceRecord
     */
    dateModified?: Date;
    /**
     * The id of the `Product` this `Price Record`'s variant_id is associated with.  Read only.
     * @type {number}
     * @memberof PriceRecord
     */
    productId?: number;
    /**
     * The list price for the variant mapped in a Price List. Overrides any existing or Catalog list price for the variant/product.
     * @type {number}
     * @memberof PriceRecord
     */
    price?: number;
    /**
     * The sale price for the variant mapped in a Price List. Overrides any existing or Catalog sale price for the variant/product. If empty, the sale price will be treated as not being set on this variant.
     * @type {number}
     * @memberof PriceRecord
     */
    salePrice?: number;
    /**
     * The retail price for the variant mapped in a Price List. Overrides any existing or Catalog retail price for the variant/product.  If empty, the retail price will be treated as not being set on this variant.
     * @type {number}
     * @memberof PriceRecord
     */
    retailPrice?: number;
    /**
     * The MAP (Manufacturer's Advertised Price) for the variant mapped in a Price List. Overrides any existing or Catalog MAP price for the variant/product. If empty, the MAP price will be treated as not being set on this variant.
     * @type {number}
     * @memberof PriceRecord
     */
    mapPrice?: number;
    /**
     * 
     * @type {Array<BulkPricingTier>}
     * @memberof PriceRecord
     */
    bulkPricingTiers?: Array<BulkPricingTier>;
    /**
     * The variant with which this price set is associated. Either sku or variant_id is required.
     * @type {string}
     * @memberof PriceRecord
     */
    sku?: string;
    /**
     * The Price List with which this price set is associated.
     * @type {number}
     * @memberof PriceRecord
     */
    priceListId?: number;
    /**
     * The variant with which this price set is associated. Either variant_id or sku is required.
     * @type {number}
     * @memberof PriceRecord
     */
    variantId?: number;
    /**
     * The 3-letter currency code with which this price set is associated.
     * @type {string}
     * @memberof PriceRecord
     */
    currency?: string;
}

export function PriceRecordFromJSON(json: any): PriceRecord {
    return PriceRecordFromJSONTyped(json, false);
}

export function PriceRecordFromJSONTyped(json: any, ignoreDiscriminator: boolean): PriceRecord {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'calculatedPrice': !exists(json, 'calculated_price') ? undefined : json['calculated_price'],
        'dateCreated': !exists(json, 'date_created') ? undefined : (new Date(json['date_created'])),
        'dateModified': !exists(json, 'date_modified') ? undefined : (new Date(json['date_modified'])),
        'productId': !exists(json, 'product_id') ? undefined : json['product_id'],
        'price': !exists(json, 'price') ? undefined : json['price'],
        'salePrice': !exists(json, 'sale_price') ? undefined : json['sale_price'],
        'retailPrice': !exists(json, 'retail_price') ? undefined : json['retail_price'],
        'mapPrice': !exists(json, 'map_price') ? undefined : json['map_price'],
        'bulkPricingTiers': !exists(json, 'bulk_pricing_tiers') ? undefined : ((json['bulk_pricing_tiers'] as Array<any>).map(BulkPricingTierFromJSON)),
        'sku': !exists(json, 'sku') ? undefined : json['sku'],
        'priceListId': !exists(json, 'price_list_id') ? undefined : json['price_list_id'],
        'variantId': !exists(json, 'variant_id') ? undefined : json['variant_id'],
        'currency': !exists(json, 'currency') ? undefined : json['currency'],
    };
}

export function PriceRecordToJSON(value?: PriceRecord | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'calculated_price': value.calculatedPrice,
        'date_created': value.dateCreated === undefined ? undefined : (value.dateCreated.toISOString()),
        'date_modified': value.dateModified === undefined ? undefined : (value.dateModified.toISOString()),
        'product_id': value.productId,
        'price': value.price,
        'sale_price': value.salePrice,
        'retail_price': value.retailPrice,
        'map_price': value.mapPrice,
        'bulk_pricing_tiers': value.bulkPricingTiers === undefined ? undefined : ((value.bulkPricingTiers as Array<any>).map(BulkPricingTierToJSON)),
        'sku': value.sku,
        'price_list_id': value.priceListId,
        'variant_id': value.variantId,
        'currency': value.currency,
    };
}


