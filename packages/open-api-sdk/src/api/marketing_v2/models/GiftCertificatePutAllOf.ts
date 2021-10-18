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
/**
 * 
 * @export
 * @interface GiftCertificatePutAllOf
 */
export interface GiftCertificatePutAllOf {
    /**
     * Remaining value of the gift certificate. If not set, will default to the amount.
     * @type {string}
     * @memberof GiftCertificatePutAllOf
     */
    balance?: string;
    /**
     * Date the gift certificate was purchased. If not assigned, this will be set to today’s date. Enter date in RFC-2822 format.
     * @type {string}
     * @memberof GiftCertificatePutAllOf
     */
    purchaseDate?: string;
    /**
     * Date on which the gift certificate is set to expire.
     * @type {string}
     * @memberof GiftCertificatePutAllOf
     */
    expiryDate?: string;
    /**
     * The ID of the customer placing the order.
     * @type {number}
     * @memberof GiftCertificatePutAllOf
     */
    customerId?: number;
    /**
     * The email theme to use in the message sent to the recipient.
     * @type {string}
     * @memberof GiftCertificatePutAllOf
     */
    template?: GiftCertificatePutAllOfTemplateEnum;
    /**
     * Text that will be sent to the recipient, such as “Congratulations.”
     * @type {string}
     * @memberof GiftCertificatePutAllOf
     */
    message?: string;
    /**
     * A unique string that a customer can input to redeem a gift certificate. Values greater than 20 characters will be trimmed down to the first 20 characters and returned in the response. 
     * If this field is not set, a value will be autogenerated.
     * @type {string}
     * @memberof GiftCertificatePutAllOf
     */
    code?: string;
    /**
     * 
     * @type {string}
     * @memberof GiftCertificatePutAllOf
     */
    status?: GiftCertificatePutAllOfStatusEnum;
}

/**
* @export
* @enum {string}
*/
export enum GiftCertificatePutAllOfTemplateEnum {
    Birthday = 'Birthday',
    Boy = 'Boy',
    Girl = 'Girl',
    Celebration = 'Celebration',
    Christmas = 'Christmas',
    General = 'General'
}/**
* @export
* @enum {string}
*/
export enum GiftCertificatePutAllOfStatusEnum {
    Active = 'active',
    Pending = 'pending',
    Expired = 'expired',
    Disabled = 'disabled'
}

export function GiftCertificatePutAllOfFromJSON(json: any): GiftCertificatePutAllOf {
    return GiftCertificatePutAllOfFromJSONTyped(json, false);
}

export function GiftCertificatePutAllOfFromJSONTyped(json: any, ignoreDiscriminator: boolean): GiftCertificatePutAllOf {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'balance': !exists(json, 'balance') ? undefined : json['balance'],
        'purchaseDate': !exists(json, 'purchase_date') ? undefined : json['purchase_date'],
        'expiryDate': !exists(json, 'expiry_date') ? undefined : json['expiry_date'],
        'customerId': !exists(json, 'customer_id') ? undefined : json['customer_id'],
        'template': !exists(json, 'template') ? undefined : json['template'],
        'message': !exists(json, 'message') ? undefined : json['message'],
        'code': !exists(json, 'code') ? undefined : json['code'],
        'status': !exists(json, 'status') ? undefined : json['status'],
    };
}

export function GiftCertificatePutAllOfToJSON(value?: GiftCertificatePutAllOf | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'balance': value.balance,
        'purchase_date': value.purchaseDate,
        'expiry_date': value.expiryDate,
        'customer_id': value.customerId,
        'template': value.template,
        'message': value.message,
        'code': value.code,
        'status': value.status,
    };
}


