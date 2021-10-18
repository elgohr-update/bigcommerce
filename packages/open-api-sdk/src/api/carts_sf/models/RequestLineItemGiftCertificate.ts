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
    RequestLineItemGiftCertificateRecipient,
    RequestLineItemGiftCertificateRecipientFromJSON,
    RequestLineItemGiftCertificateRecipientFromJSONTyped,
    RequestLineItemGiftCertificateRecipientToJSON,
    RequestLineItemGiftCertificateSender,
    RequestLineItemGiftCertificateSenderFromJSON,
    RequestLineItemGiftCertificateSenderFromJSONTyped,
    RequestLineItemGiftCertificateSenderToJSON,
} from './';

/**
 * 
 * @export
 * @interface RequestLineItemGiftCertificate
 */
export interface RequestLineItemGiftCertificate {
    /**
     * Gift-certificate amount.
     * @type {number}
     * @memberof RequestLineItemGiftCertificate
     */
    amount: number;
    /**
     * Message shown to recipient, as provided by sender.
     * @type {string}
     * @memberof RequestLineItemGiftCertificate
     */
    message?: string;
    /**
     * Name assigned to this gift-certificate line item.
     * @type {string}
     * @memberof RequestLineItemGiftCertificate
     */
    name: string;
    /**
     * Quantity of this item.
     * @type {number}
     * @memberof RequestLineItemGiftCertificate
     */
    quantity: number;
    /**
     * 
     * @type {RequestLineItemGiftCertificateRecipient}
     * @memberof RequestLineItemGiftCertificate
     */
    recipient: RequestLineItemGiftCertificateRecipient;
    /**
     * 
     * @type {RequestLineItemGiftCertificateSender}
     * @memberof RequestLineItemGiftCertificate
     */
    sender: RequestLineItemGiftCertificateSender;
    /**
     * Currently supports `Birthday`, `Boy`, `Celebration`, `Christmas`, `General`, and `Girl`.
     * @type {string}
     * @memberof RequestLineItemGiftCertificate
     */
    theme: string;
}

export function RequestLineItemGiftCertificateFromJSON(json: any): RequestLineItemGiftCertificate {
    return RequestLineItemGiftCertificateFromJSONTyped(json, false);
}

export function RequestLineItemGiftCertificateFromJSONTyped(json: any, ignoreDiscriminator: boolean): RequestLineItemGiftCertificate {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'amount': json['amount'],
        'message': !exists(json, 'message') ? undefined : json['message'],
        'name': json['name'],
        'quantity': json['quantity'],
        'recipient': RequestLineItemGiftCertificateRecipientFromJSON(json['recipient']),
        'sender': RequestLineItemGiftCertificateSenderFromJSON(json['sender']),
        'theme': json['theme'],
    };
}

export function RequestLineItemGiftCertificateToJSON(value?: RequestLineItemGiftCertificate | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'amount': value.amount,
        'message': value.message,
        'name': value.name,
        'quantity': value.quantity,
        'recipient': RequestLineItemGiftCertificateRecipientToJSON(value.recipient),
        'sender': RequestLineItemGiftCertificateSenderToJSON(value.sender),
        'theme': value.theme,
    };
}


