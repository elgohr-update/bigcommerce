/* tslint:disable */
/* eslint-disable */
/**
 * Checkouts
 * Create checkouts from existing carts using BigCommerce checkout logic.
 *
 * The version of the OpenAPI document: 3.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import {
    AppliedDiscount,
    AppliedDiscountFromJSON,
    AppliedDiscountFromJSONTyped,
    AppliedDiscountToJSON,
    GiftWrapping,
    GiftWrappingFromJSON,
    GiftWrappingFromJSONTyped,
    GiftWrappingToJSON,
} from './';

/**
 * 
 * @export
 * @interface ItemPhysical
 */
export interface ItemPhysical {
    /**
     * 
     * @type {number}
     * @memberof ItemPhysical
     */
    quantity: number;
    /**
     * The line-item ID.
     * @type {string}
     * @memberof ItemPhysical
     */
    id?: string;
    /**
     * 
     * @type {number}
     * @memberof ItemPhysical
     */
    variantId?: number;
    /**
     * 
     * @type {number}
     * @memberof ItemPhysical
     */
    productId?: number;
    /**
     * 
     * @type {string}
     * @memberof ItemPhysical
     */
    sku?: string;
    /**
     * The item's product name.
     * @type {string}
     * @memberof ItemPhysical
     */
    name?: string;
    /**
     * The product URL.
     * @type {string}
     * @memberof ItemPhysical
     */
    url?: string;
    /**
     * 
     * @type {boolean}
     * @memberof ItemPhysical
     */
    isTaxable?: boolean;
    /**
     * 
     * @type {string}
     * @memberof ItemPhysical
     */
    imageUrl?: string;
    /**
     * 
     * @type {Array<AppliedDiscount>}
     * @memberof ItemPhysical
     */
    discounts?: Array<AppliedDiscount>;
    /**
     * 
     * @type {number}
     * @memberof ItemPhysical
     */
    coupons?: number;
    /**
     * The total value of all discounts applied to this item.
     * @type {number}
     * @memberof ItemPhysical
     */
    discountAmount?: number;
    /**
     * The total value of all coupons applied to this item.
     * @type {number}
     * @memberof ItemPhysical
     */
    couponAmount?: number;
    /**
     * Item's list price, as quoted by the manufacturer/distributor.
     * @type {number}
     * @memberof ItemPhysical
     */
    listPrice?: number;
    /**
     * Item's price after all discounts are applied. (The final price before tax calculation.)
     * @type {number}
     * @memberof ItemPhysical
     */
    salePrice?: number;
    /**
     * Item's list price multiplied by the quantity.
     * @type {number}
     * @memberof ItemPhysical
     */
    extendedListPrice?: number;
    /**
     * Item's sale price multiplied by the quantity.
     * @type {number}
     * @memberof ItemPhysical
     */
    extendedSalePrice?: number;
    /**
     * 
     * @type {boolean}
     * @memberof ItemPhysical
     */
    isRequireShipping?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof ItemPhysical
     */
    isMutable?: boolean;
    /**
     * 
     * @type {number}
     * @memberof ItemPhysical
     */
    parentId?: number | null;
    /**
     * 
     * @type {GiftWrapping}
     * @memberof ItemPhysical
     */
    giftWrapping?: GiftWrapping | null;
}

export function ItemPhysicalFromJSON(json: any): ItemPhysical {
    return ItemPhysicalFromJSONTyped(json, false);
}

export function ItemPhysicalFromJSONTyped(json: any, ignoreDiscriminator: boolean): ItemPhysical {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'quantity': json['quantity'],
        'id': !exists(json, 'id') ? undefined : json['id'],
        'variantId': !exists(json, 'variant_id') ? undefined : json['variant_id'],
        'productId': !exists(json, 'product_id') ? undefined : json['product_id'],
        'sku': !exists(json, 'sku') ? undefined : json['sku'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'url': !exists(json, 'url') ? undefined : json['url'],
        'isTaxable': !exists(json, 'is_taxable') ? undefined : json['is_taxable'],
        'imageUrl': !exists(json, 'image_url') ? undefined : json['image_url'],
        'discounts': !exists(json, 'discounts') ? undefined : ((json['discounts'] as Array<any>).map(AppliedDiscountFromJSON)),
        'coupons': !exists(json, 'coupons') ? undefined : json['coupons'],
        'discountAmount': !exists(json, 'discount_amount') ? undefined : json['discount_amount'],
        'couponAmount': !exists(json, 'coupon_amount') ? undefined : json['coupon_amount'],
        'listPrice': !exists(json, 'list_price') ? undefined : json['list_price'],
        'salePrice': !exists(json, 'sale_price') ? undefined : json['sale_price'],
        'extendedListPrice': !exists(json, 'extended_list_price') ? undefined : json['extended_list_price'],
        'extendedSalePrice': !exists(json, 'extended_sale_price') ? undefined : json['extended_sale_price'],
        'isRequireShipping': !exists(json, 'is_require_shipping') ? undefined : json['is_require_shipping'],
        'isMutable': !exists(json, 'is_mutable') ? undefined : json['is_mutable'],
        'parentId': !exists(json, 'parent_id') ? undefined : json['parent_id'],
        'giftWrapping': !exists(json, 'gift_wrapping') ? undefined : GiftWrappingFromJSON(json['gift_wrapping']),
    };
}

export function ItemPhysicalToJSON(value?: ItemPhysical | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'quantity': value.quantity,
        'id': value.id,
        'variant_id': value.variantId,
        'product_id': value.productId,
        'sku': value.sku,
        'name': value.name,
        'url': value.url,
        'is_taxable': value.isTaxable,
        'image_url': value.imageUrl,
        'discounts': value.discounts === undefined ? undefined : ((value.discounts as Array<any>).map(AppliedDiscountToJSON)),
        'coupons': value.coupons,
        'discount_amount': value.discountAmount,
        'coupon_amount': value.couponAmount,
        'list_price': value.listPrice,
        'sale_price': value.salePrice,
        'extended_list_price': value.extendedListPrice,
        'extended_sale_price': value.extendedSalePrice,
        'is_require_shipping': value.isRequireShipping,
        'is_mutable': value.isMutable,
        'parent_id': value.parentId,
        'gift_wrapping': GiftWrappingToJSON(value.giftWrapping),
    };
}


