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
/**
 * 
 * @export
 * @interface ResponseCartLineItemsGiftCertificatesSender
 */
export interface ResponseCartLineItemsGiftCertificatesSender {
    /**
     * Contact's email address.
     * @type {string}
     * @memberof ResponseCartLineItemsGiftCertificatesSender
     */
    email?: string;
    /**
     * Contact's name.
     * @type {string}
     * @memberof ResponseCartLineItemsGiftCertificatesSender
     */
    name?: string;
}

export function ResponseCartLineItemsGiftCertificatesSenderFromJSON(json: any): ResponseCartLineItemsGiftCertificatesSender {
    return ResponseCartLineItemsGiftCertificatesSenderFromJSONTyped(json, false);
}

export function ResponseCartLineItemsGiftCertificatesSenderFromJSONTyped(json: any, ignoreDiscriminator: boolean): ResponseCartLineItemsGiftCertificatesSender {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'email': !exists(json, 'email') ? undefined : json['email'],
        'name': !exists(json, 'name') ? undefined : json['name'],
    };
}

export function ResponseCartLineItemsGiftCertificatesSenderToJSON(value?: ResponseCartLineItemsGiftCertificatesSender | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'email': value.email,
        'name': value.name,
    };
}


