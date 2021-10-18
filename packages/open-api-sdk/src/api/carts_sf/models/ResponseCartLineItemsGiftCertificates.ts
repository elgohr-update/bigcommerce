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
    ResponseCartLineItemsGiftCertificatesRecipient,
    ResponseCartLineItemsGiftCertificatesRecipientFromJSON,
    ResponseCartLineItemsGiftCertificatesRecipientFromJSONTyped,
    ResponseCartLineItemsGiftCertificatesRecipientToJSON,
    ResponseCartLineItemsGiftCertificatesSender,
    ResponseCartLineItemsGiftCertificatesSenderFromJSON,
    ResponseCartLineItemsGiftCertificatesSenderFromJSONTyped,
    ResponseCartLineItemsGiftCertificatesSenderToJSON,
} from './';

/**
 * 
 * @export
 * @interface ResponseCartLineItemsGiftCertificates
 */
export interface ResponseCartLineItemsGiftCertificates {
    /**
     * Value must be between 1.00 and 1,000.00 in the store's default currency.
     * @type {number}
     * @memberof ResponseCartLineItemsGiftCertificates
     */
    amount: number;
    /**
     * ID of this gift certificate.
     * @type {string}
     * @memberof ResponseCartLineItemsGiftCertificates
     */
    id?: string;
    /**
     * Whether or not the gift certificate is taxable.
     * @type {boolean}
     * @memberof ResponseCartLineItemsGiftCertificates
     */
    isTaxable?: boolean;
    /**
     * Message that will be sent to the gift certificate's recipient. Limited to 200 characters.
     * @type {string}
     * @memberof ResponseCartLineItemsGiftCertificates
     */
    message?: string;
    /**
     * GiftCertificate-provided name that will appear in the control panel.
     * @type {string}
     * @memberof ResponseCartLineItemsGiftCertificates
     */
    name?: string;
    /**
     * 
     * @type {ResponseCartLineItemsGiftCertificatesRecipient}
     * @memberof ResponseCartLineItemsGiftCertificates
     */
    recipient: ResponseCartLineItemsGiftCertificatesRecipient;
    /**
     * 
     * @type {ResponseCartLineItemsGiftCertificatesSender}
     * @memberof ResponseCartLineItemsGiftCertificates
     */
    sender: ResponseCartLineItemsGiftCertificatesSender;
    /**
     * Currently supports `Birthday`, `Boy`, `Celebration`, `Christmas`, `General`, and `Girl`.
     * @type {string}
     * @memberof ResponseCartLineItemsGiftCertificates
     */
    theme: string;
}

export function ResponseCartLineItemsGiftCertificatesFromJSON(json: any): ResponseCartLineItemsGiftCertificates {
    return ResponseCartLineItemsGiftCertificatesFromJSONTyped(json, false);
}

export function ResponseCartLineItemsGiftCertificatesFromJSONTyped(json: any, ignoreDiscriminator: boolean): ResponseCartLineItemsGiftCertificates {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'amount': json['amount'],
        'id': !exists(json, 'id') ? undefined : json['id'],
        'isTaxable': !exists(json, 'isTaxable') ? undefined : json['isTaxable'],
        'message': !exists(json, 'message') ? undefined : json['message'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'recipient': ResponseCartLineItemsGiftCertificatesRecipientFromJSON(json['recipient']),
        'sender': ResponseCartLineItemsGiftCertificatesSenderFromJSON(json['sender']),
        'theme': json['theme'],
    };
}

export function ResponseCartLineItemsGiftCertificatesToJSON(value?: ResponseCartLineItemsGiftCertificates | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'amount': value.amount,
        'id': value.id,
        'isTaxable': value.isTaxable,
        'message': value.message,
        'name': value.name,
        'recipient': ResponseCartLineItemsGiftCertificatesRecipientToJSON(value.recipient),
        'sender': ResponseCartLineItemsGiftCertificatesSenderToJSON(value.sender),
        'theme': value.theme,
    };
}


