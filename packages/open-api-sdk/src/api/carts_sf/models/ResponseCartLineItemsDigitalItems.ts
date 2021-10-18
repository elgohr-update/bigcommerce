/* tslint:disable */
/* eslint-disable */
/**
 * Storefront Carts
 * Manage cart operations and data via front-end JavaScript on BigCommerce stencil powered storefronts.
 *
 * The version of the OpenAPI document: Storefront
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import {
    ResponseCartLineItemsDigitalItemsAllOf0,
    ResponseCartLineItemsDigitalItemsAllOf0FromJSON,
    ResponseCartLineItemsDigitalItemsAllOf0FromJSONTyped,
    ResponseCartLineItemsDigitalItemsAllOf0ToJSON,
    ResponseCartLineItemsDigitalItemsAllOf0DiscountsItems,
    ResponseCartLineItemsDigitalItemsAllOf0DiscountsItemsFromJSON,
    ResponseCartLineItemsDigitalItemsAllOf0DiscountsItemsFromJSONTyped,
    ResponseCartLineItemsDigitalItemsAllOf0DiscountsItemsToJSON,
    ResponseCartLineItemsDigitalItemsAllOf0OptionsItems,
    ResponseCartLineItemsDigitalItemsAllOf0OptionsItemsFromJSON,
    ResponseCartLineItemsDigitalItemsAllOf0OptionsItemsFromJSONTyped,
    ResponseCartLineItemsDigitalItemsAllOf0OptionsItemsToJSON,
} from './';

/**
 * 
 * @export
 * @interface ResponseCartLineItemsDigitalItems
 */
export interface ResponseCartLineItemsDigitalItems {
    /**
     * The list of selected options for this product.
     * @type {Array<ResponseCartLineItemsDigitalItemsAllOf0OptionsItems>}
     * @memberof ResponseCartLineItemsDigitalItems
     */
    options?: Array<ResponseCartLineItemsDigitalItemsAllOf0OptionsItems>;
    /**
     * The products brand
     * @type {string}
     * @memberof ResponseCartLineItemsDigitalItems
     */
    brand?: string;
    /**
     * The total value of all coupons applied to this item.
     * @type {number}
     * @memberof ResponseCartLineItemsDigitalItems
     */
    couponAmount?: number;
    /**
     * The total value of all discounts applied to this item (excluding coupon).
     * @type {number}
     * @memberof ResponseCartLineItemsDigitalItems
     */
    discountAmount?: number;
    /**
     * List of discounts applied to this item, as an array of AppliedDiscount objects.
     * @type {Array<ResponseCartLineItemsDigitalItemsAllOf0DiscountsItems>}
     * @memberof ResponseCartLineItemsDigitalItems
     */
    discounts?: Array<ResponseCartLineItemsDigitalItemsAllOf0DiscountsItems>;
    /**
     * Item's list price multiplied by the quantity.
     * @type {number}
     * @memberof ResponseCartLineItemsDigitalItems
     */
    extendedListPrice?: number;
    /**
     * Item's sale price multiplied by the quantity.
     * @type {number}
     * @memberof ResponseCartLineItemsDigitalItems
     */
    extendedSalePrice?: number;
    /**
     * The line-item ID.
     * @type {string}
     * @memberof ResponseCartLineItemsDigitalItems
     */
    id?: string;
    /**
     * URL of an image of this item, accessible on the internet.
     * @type {string}
     * @memberof ResponseCartLineItemsDigitalItems
     */
    imageUrl?: string;
    /**
     * Whether the item is taxable.
     * @type {boolean}
     * @memberof ResponseCartLineItemsDigitalItems
     */
    isTaxable?: boolean;
    /**
     * Item's list price, as quoted by the manufacturer/distributor.
     * @type {number}
     * @memberof ResponseCartLineItemsDigitalItems
     */
    listPrice?: number;
    /**
     * The item's product name.
     * @type {string}
     * @memberof ResponseCartLineItemsDigitalItems
     */
    name?: string;
    /**
     * The product is part of a bundle such as a product pick list, then the parentId or the main product id will populate.
     * @type {string}
     * @memberof ResponseCartLineItemsDigitalItems
     */
    parentId?: string;
    /**
     * ID of the product.
     * @type {number}
     * @memberof ResponseCartLineItemsDigitalItems
     */
    productId?: number;
    /**
     * Quantity of this item.
     * @type {number}
     * @memberof ResponseCartLineItemsDigitalItems
     */
    quantity: number;
    /**
     * Item's price after all discounts are applied. (The final price before tax calculation.)
     * @type {number}
     * @memberof ResponseCartLineItemsDigitalItems
     */
    salePrice?: number;
    /**
     * SKU of the variant.
     * @type {string}
     * @memberof ResponseCartLineItemsDigitalItems
     */
    sku?: string;
    /**
     * The product URL.
     * @type {string}
     * @memberof ResponseCartLineItemsDigitalItems
     */
    url?: string;
    /**
     * ID of the variant.
     * @type {number}
     * @memberof ResponseCartLineItemsDigitalItems
     */
    variantId?: number;
}

export function ResponseCartLineItemsDigitalItemsFromJSON(json: any): ResponseCartLineItemsDigitalItems {
    return ResponseCartLineItemsDigitalItemsFromJSONTyped(json, false);
}

export function ResponseCartLineItemsDigitalItemsFromJSONTyped(json: any, ignoreDiscriminator: boolean): ResponseCartLineItemsDigitalItems {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'options': !exists(json, 'options') ? undefined : ((json['options'] as Array<any>).map(ResponseCartLineItemsDigitalItemsAllOf0OptionsItemsFromJSON)),
        'brand': !exists(json, 'brand') ? undefined : json['brand'],
        'couponAmount': !exists(json, 'couponAmount') ? undefined : json['couponAmount'],
        'discountAmount': !exists(json, 'discountAmount') ? undefined : json['discountAmount'],
        'discounts': !exists(json, 'discounts') ? undefined : ((json['discounts'] as Array<any>).map(ResponseCartLineItemsDigitalItemsAllOf0DiscountsItemsFromJSON)),
        'extendedListPrice': !exists(json, 'extendedListPrice') ? undefined : json['extendedListPrice'],
        'extendedSalePrice': !exists(json, 'extendedSalePrice') ? undefined : json['extendedSalePrice'],
        'id': !exists(json, 'id') ? undefined : json['id'],
        'imageUrl': !exists(json, 'imageUrl') ? undefined : json['imageUrl'],
        'isTaxable': !exists(json, 'isTaxable') ? undefined : json['isTaxable'],
        'listPrice': !exists(json, 'listPrice') ? undefined : json['listPrice'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'parentId': !exists(json, 'parentId') ? undefined : json['parentId'],
        'productId': !exists(json, 'productId') ? undefined : json['productId'],
        'quantity': json['quantity'],
        'salePrice': !exists(json, 'salePrice') ? undefined : json['salePrice'],
        'sku': !exists(json, 'sku') ? undefined : json['sku'],
        'url': !exists(json, 'url') ? undefined : json['url'],
        'variantId': !exists(json, 'variantId') ? undefined : json['variantId'],
    };
}

export function ResponseCartLineItemsDigitalItemsToJSON(value?: ResponseCartLineItemsDigitalItems | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'options': value.options === undefined ? undefined : ((value.options as Array<any>).map(ResponseCartLineItemsDigitalItemsAllOf0OptionsItemsToJSON)),
        'brand': value.brand,
        'couponAmount': value.couponAmount,
        'discountAmount': value.discountAmount,
        'discounts': value.discounts === undefined ? undefined : ((value.discounts as Array<any>).map(ResponseCartLineItemsDigitalItemsAllOf0DiscountsItemsToJSON)),
        'extendedListPrice': value.extendedListPrice,
        'extendedSalePrice': value.extendedSalePrice,
        'id': value.id,
        'imageUrl': value.imageUrl,
        'isTaxable': value.isTaxable,
        'listPrice': value.listPrice,
        'name': value.name,
        'parentId': value.parentId,
        'productId': value.productId,
        'quantity': value.quantity,
        'salePrice': value.salePrice,
        'sku': value.sku,
        'url': value.url,
        'variantId': value.variantId,
    };
}


