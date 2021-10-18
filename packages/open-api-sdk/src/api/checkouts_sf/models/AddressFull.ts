/* tslint:disable */
/* eslint-disable */
/**
 * Storefront Checkouts
 * Manage checkout operations and data via front-end JavaScript on BigCommerce stencil powered storefronts.
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
    AddressBase,
    AddressBaseFromJSON,
    AddressBaseFromJSONTyped,
    AddressBaseToJSON,
    AddressFullAllOf,
    AddressFullAllOfFromJSON,
    AddressFullAllOfFromJSONTyped,
    AddressFullAllOfToJSON,
    CustomFields,
    CustomFieldsFromJSON,
    CustomFieldsFromJSONTyped,
    CustomFieldsToJSON,
} from './';

/**
 * 
 * @export
 * @interface AddressFull
 */
export interface AddressFull {
    /**
     * 
     * @type {string}
     * @memberof AddressFull
     */
    firstName?: string;
    /**
     * 
     * @type {string}
     * @memberof AddressFull
     */
    lastName?: string;
    /**
     * 
     * @type {string}
     * @memberof AddressFull
     */
    email?: string;
    /**
     * 
     * @type {string}
     * @memberof AddressFull
     */
    company?: string;
    /**
     * 
     * @type {string}
     * @memberof AddressFull
     */
    address1?: string;
    /**
     * 
     * @type {string}
     * @memberof AddressFull
     */
    address2?: string;
    /**
     * 
     * @type {string}
     * @memberof AddressFull
     */
    city?: string;
    /**
     * Represents state or province.
     * @type {string}
     * @memberof AddressFull
     */
    stateOrProvince?: string;
    /**
     * 
     * @type {string}
     * @memberof AddressFull
     */
    stateOrProvinceCode?: string;
    /**
     * ISO 3166-1 alpha-2 country code. (See: https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)
     * @type {string}
     * @memberof AddressFull
     */
    countryCode: string;
    /**
     * 
     * @type {string}
     * @memberof AddressFull
     */
    postalCode?: string;
    /**
     * 
     * @type {string}
     * @memberof AddressFull
     */
    phone?: string;
    /**
     * 
     * @type {Array<CustomFields>}
     * @memberof AddressFull
     */
    customFields?: Array<CustomFields>;
    /**
     * 
     * @type {string}
     * @memberof AddressFull
     */
    id?: string;
    /**
     * Indicates if we should add this address to the customer address book.
     * @type {boolean}
     * @memberof AddressFull
     */
    shouldSaveAddress?: boolean;
}

export function AddressFullFromJSON(json: any): AddressFull {
    return AddressFullFromJSONTyped(json, false);
}

export function AddressFullFromJSONTyped(json: any, ignoreDiscriminator: boolean): AddressFull {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'firstName': !exists(json, 'firstName') ? undefined : json['firstName'],
        'lastName': !exists(json, 'lastName') ? undefined : json['lastName'],
        'email': !exists(json, 'email') ? undefined : json['email'],
        'company': !exists(json, 'company') ? undefined : json['company'],
        'address1': !exists(json, 'address1') ? undefined : json['address1'],
        'address2': !exists(json, 'address2') ? undefined : json['address2'],
        'city': !exists(json, 'city') ? undefined : json['city'],
        'stateOrProvince': !exists(json, 'stateOrProvince') ? undefined : json['stateOrProvince'],
        'stateOrProvinceCode': !exists(json, 'stateOrProvinceCode') ? undefined : json['stateOrProvinceCode'],
        'countryCode': json['countryCode'],
        'postalCode': !exists(json, 'postalCode') ? undefined : json['postalCode'],
        'phone': !exists(json, 'phone') ? undefined : json['phone'],
        'customFields': !exists(json, 'customFields') ? undefined : ((json['customFields'] as Array<any>).map(CustomFieldsFromJSON)),
        'id': !exists(json, 'id') ? undefined : json['id'],
        'shouldSaveAddress': !exists(json, 'shouldSaveAddress') ? undefined : json['shouldSaveAddress'],
    };
}

export function AddressFullToJSON(value?: AddressFull | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'firstName': value.firstName,
        'lastName': value.lastName,
        'email': value.email,
        'company': value.company,
        'address1': value.address1,
        'address2': value.address2,
        'city': value.city,
        'stateOrProvince': value.stateOrProvince,
        'stateOrProvinceCode': value.stateOrProvinceCode,
        'countryCode': value.countryCode,
        'postalCode': value.postalCode,
        'phone': value.phone,
        'customFields': value.customFields === undefined ? undefined : ((value.customFields as Array<any>).map(CustomFieldsToJSON)),
        'id': value.id,
        'shouldSaveAddress': value.shouldSaveAddress,
    };
}


