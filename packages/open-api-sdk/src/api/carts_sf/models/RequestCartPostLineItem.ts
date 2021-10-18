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
    RequestCartPostLineItemAnyOf,
    RequestCartPostLineItemAnyOfFromJSON,
    RequestCartPostLineItemAnyOfFromJSONTyped,
    RequestCartPostLineItemAnyOfToJSON,
    RequestCartPostLineItemAnyOf1,
    RequestCartPostLineItemAnyOf1FromJSON,
    RequestCartPostLineItemAnyOf1FromJSONTyped,
    RequestCartPostLineItemAnyOf1ToJSON,
    RequestCartPostLineItemAnyOf2,
    RequestCartPostLineItemAnyOf2FromJSON,
    RequestCartPostLineItemAnyOf2FromJSONTyped,
    RequestCartPostLineItemAnyOf2ToJSON,
} from './';

/**
 * 
 * @export
 * @interface RequestCartPostLineItem
 */
export interface RequestCartPostLineItem {
    /**
     * ID of the product.
     * @type {number}
     * @memberof RequestCartPostLineItem
     */
    productId: number;
    /**
     * Quantity of this item.
     * @type {number}
     * @memberof RequestCartPostLineItem
     */
    quantity: number;
    /**
     * ID of the variant.
     * @type {number}
     * @memberof RequestCartPostLineItem
     */
    variantId: number;
    /**
     * 
     * @type {Array<object>}
     * @memberof RequestCartPostLineItem
     */
    optionSelections: Array<object>;
}

export function RequestCartPostLineItemFromJSON(json: any): RequestCartPostLineItem {
    return RequestCartPostLineItemFromJSONTyped(json, false);
}

export function RequestCartPostLineItemFromJSONTyped(json: any, ignoreDiscriminator: boolean): RequestCartPostLineItem {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'productId': json['productId'],
        'quantity': json['quantity'],
        'variantId': json['variantId'],
        'optionSelections': json['optionSelections'],
    };
}

export function RequestCartPostLineItemToJSON(value?: RequestCartPostLineItem | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'productId': value.productId,
        'quantity': value.quantity,
        'variantId': value.variantId,
        'optionSelections': value.optionSelections,
    };
}


