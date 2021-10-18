/* tslint:disable */
/* eslint-disable */
/**
 * Marketing
 * Manage coupons, banners, and gift certificates.  - [Authentication](#authentication) - [Subresources](#subresources)  ## Authentication  Authenticate requests by including an [OAuth](https://developer.bigcommerce.com/api-docs/getting-started/authentication) `access_token` in the request header.  ```http GET https://api.bigcommerce.com/stores/{{STORE_HASH}}/v3/{{ENDPOINT}} Content-Type: application/json X-Auth-Token: {{ACCESS_TOKEN}} ```  ### OAuth Scopes |  **UI Name** | **Permission** | **Parameter** | | --- | --- | --- | |  Marketing | modify | `store_v2_marketing` | |  Marketing | read-only | `store_v2_marketing_read_only` |  ## Subresources  ### Coupons Category or product discounts that can be applied to orders for customers who enter a given code.  ### Banners Banners available to display on a store.  ### Gift Certificates Gift certificates available to offer to a store’s customers.
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
    CouponBase,
    CouponBaseFromJSON,
    CouponBaseFromJSONTyped,
    CouponBaseToJSON,
    CouponBaseAppliesTo,
    CouponBaseAppliesToFromJSON,
    CouponBaseAppliesToFromJSONTyped,
    CouponBaseAppliesToToJSON,
    CouponBaseRestrictedTo,
    CouponBaseRestrictedToFromJSON,
    CouponBaseRestrictedToFromJSONTyped,
    CouponBaseRestrictedToToJSON,
    CouponFullAllOf,
    CouponFullAllOfFromJSON,
    CouponFullAllOfFromJSONTyped,
    CouponFullAllOfToJSON,
} from './';

/**
 * 
 * @export
 * @interface CouponFull
 */
export interface CouponFull {
    /**
     * The coupon's ID. This is a read-only field; do not set or modify its value in a POST or PUT request.
     * @type {number}
     * @memberof CouponFull
     */
    id: number;
    /**
     * Date Created
     * @type {string}
     * @memberof CouponFull
     */
    dateCreated?: string;
    /**
     * Number of times this coupon has been used. This is a read-only field; do not set or modify its value in a POST or PUT request.
     * @type {number}
     * @memberof CouponFull
     */
    numUses?: number;
    /**
     * The name of the coupon.
     * @type {string}
     * @memberof CouponFull
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof CouponFull
     */
    type: CouponFullTypeEnum;
    /**
     * The discount to apply to an order, as either an amount or a percentage. This field's usage is determined by the coupon `type`. For example, a `type` of + `percentage_discount` would determine a percentage here.
     * @type {string}
     * @memberof CouponFull
     */
    amount: string;
    /**
     * Specifies a minimum value that an order must have before the coupon can be applied to it.
     * @type {string}
     * @memberof CouponFull
     */
    minPurchase?: string;
    /**
     * Specifies when a coupon expires. Coupons need not have an expiry date – you can also control expiry via + `max_uses` or `max_uses_per_customer`. If you do use this date field, the value must be in <a href="http://tools.ietf.org/html/rfc2822#section-3.3" target="_blank">RFC 2822</a> format.
     * @type {string}
     * @memberof CouponFull
     */
    expires?: string;
    /**
     * If the coupon is enabled, this field's value is `true`; otherwise, `false`.
     * @type {boolean}
     * @memberof CouponFull
     */
    enabled?: boolean;
    /**
     * The coupon code that customers will use to receive their discounts. Value must be unique. Only letters, numbers, white space, underscores, and hyphens are allowed.
     * @type {string}
     * @memberof CouponFull
     */
    code: string;
    /**
     * 
     * @type {CouponBaseAppliesTo}
     * @memberof CouponFull
     */
    appliesTo: CouponBaseAppliesTo;
    /**
     * Maximum number of times this coupon can be used.
     * @type {number}
     * @memberof CouponFull
     */
    maxUses?: number;
    /**
     * Maximum number of times each customer can use this coupon.
     * @type {number}
     * @memberof CouponFull
     */
    maxUsesPerCustomer?: number;
    /**
     * 
     * @type {CouponBaseRestrictedTo}
     * @memberof CouponFull
     */
    restrictedTo?: CouponBaseRestrictedTo;
    /**
     * This is a list of shipping-method names. A shipping method must be enabled on the store to use it with a coupon. To check which shipping methods are enabled, please use the [List Shipping Methods](/api/v2#list-shipping-methods) endpoint.
     * @type {Array<string>}
     * @memberof CouponFull
     */
    shippingMethods?: Array<string>;
}

/**
* @export
* @enum {string}
*/
export enum CouponFullTypeEnum {
    PerItemDiscount = 'per_item_discount',
    PerTotalDiscount = 'per_total_discount',
    ShippingDiscount = 'shipping_discount',
    FreeShipping = 'free_shipping',
    PercentageDiscount = 'percentage_discount',
    Promotion = 'promotion'
}

export function CouponFullFromJSON(json: any): CouponFull {
    return CouponFullFromJSONTyped(json, false);
}

export function CouponFullFromJSONTyped(json: any, ignoreDiscriminator: boolean): CouponFull {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'dateCreated': !exists(json, 'date_created') ? undefined : json['date_created'],
        'numUses': !exists(json, 'num_uses') ? undefined : json['num_uses'],
        'name': json['name'],
        'type': json['type'],
        'amount': json['amount'],
        'minPurchase': !exists(json, 'min_purchase') ? undefined : json['min_purchase'],
        'expires': !exists(json, 'expires') ? undefined : json['expires'],
        'enabled': !exists(json, 'enabled') ? undefined : json['enabled'],
        'code': json['code'],
        'appliesTo': CouponBaseAppliesToFromJSON(json['applies_to']),
        'maxUses': !exists(json, 'max_uses') ? undefined : json['max_uses'],
        'maxUsesPerCustomer': !exists(json, 'max_uses_per_customer') ? undefined : json['max_uses_per_customer'],
        'restrictedTo': !exists(json, 'restricted_to') ? undefined : CouponBaseRestrictedToFromJSON(json['restricted_to']),
        'shippingMethods': !exists(json, 'shipping_methods') ? undefined : json['shipping_methods'],
    };
}

export function CouponFullToJSON(value?: CouponFull | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'date_created': value.dateCreated,
        'num_uses': value.numUses,
        'name': value.name,
        'type': value.type,
        'amount': value.amount,
        'min_purchase': value.minPurchase,
        'expires': value.expires,
        'enabled': value.enabled,
        'code': value.code,
        'applies_to': CouponBaseAppliesToToJSON(value.appliesTo),
        'max_uses': value.maxUses,
        'max_uses_per_customer': value.maxUsesPerCustomer,
        'restricted_to': CouponBaseRestrictedToToJSON(value.restrictedTo),
        'shipping_methods': value.shippingMethods,
    };
}


