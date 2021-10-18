/* tslint:disable */
/* eslint-disable */
/**
 * Storefront Orders
 * Get order data immediately after an order is placed on the storefront.
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
    ItemPhysical,
    ItemPhysicalFromJSON,
    ItemPhysicalFromJSONTyped,
    ItemPhysicalToJSON,
    OrderItemDigital,
    OrderItemDigitalFromJSON,
    OrderItemDigitalFromJSONTyped,
    OrderItemDigitalToJSON,
    OrderItemGiftCertificate,
    OrderItemGiftCertificateFromJSON,
    OrderItemGiftCertificateFromJSONTyped,
    OrderItemGiftCertificateToJSON,
} from './';

/**
 * 
 * @export
 * @interface OrderLineItem
 */
export interface OrderLineItem {
    /**
     * Array of `ItemPhysical` objects.
     * @type {Array<ItemPhysical>}
     * @memberof OrderLineItem
     */
    physicalItems: Array<ItemPhysical>;
    /**
     * Array of `ItemDigital` objects.
     * @type {Array<OrderItemDigital>}
     * @memberof OrderLineItem
     */
    digitalItems: Array<OrderItemDigital>;
    /**
     * Array of `ItemGiftCertificate` objects.
     * @type {Array<OrderItemGiftCertificate>}
     * @memberof OrderLineItem
     */
    giftCertificate: Array<OrderItemGiftCertificate>;
}

export function OrderLineItemFromJSON(json: any): OrderLineItem {
    return OrderLineItemFromJSONTyped(json, false);
}

export function OrderLineItemFromJSONTyped(json: any, ignoreDiscriminator: boolean): OrderLineItem {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'physicalItems': ((json['physicalItems'] as Array<any>).map(ItemPhysicalFromJSON)),
        'digitalItems': ((json['digitalItems'] as Array<any>).map(OrderItemDigitalFromJSON)),
        'giftCertificate': ((json['giftCertificate'] as Array<any>).map(OrderItemGiftCertificateFromJSON)),
    };
}

export function OrderLineItemToJSON(value?: OrderLineItem | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'physicalItems': ((value.physicalItems as Array<any>).map(ItemPhysicalToJSON)),
        'digitalItems': ((value.digitalItems as Array<any>).map(OrderItemDigitalToJSON)),
        'giftCertificate': ((value.giftCertificate as Array<any>).map(OrderItemGiftCertificateToJSON)),
    };
}


