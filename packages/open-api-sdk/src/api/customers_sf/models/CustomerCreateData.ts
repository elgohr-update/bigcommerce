/* tslint:disable */
/* eslint-disable */
/**
 * Storefront Customers
 * Manage customers and data via front-end JavaScript on BigCommerce stencil powered storefronts.
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
    CustomFields,
    CustomFieldsFromJSON,
    CustomFieldsFromJSONTyped,
    CustomFieldsToJSON,
} from './';

/**
 * 
 * @export
 * @interface CustomerCreateData
 */
export interface CustomerCreateData {
    /**
     * First name of customer
     * @type {string}
     * @memberof CustomerCreateData
     */
    firstName?: string;
    /**
     * Last name of customer
     * @type {string}
     * @memberof CustomerCreateData
     */
    lastName?: string;
    /**
     * Email of customer
     * @type {string}
     * @memberof CustomerCreateData
     */
    email?: string;
    /**
     * Password of customer
     * @type {string}
     * @memberof CustomerCreateData
     */
    password?: string;
    /**
     * Has customer provided consent to receive marketing emails.
     * @type {boolean}
     * @memberof CustomerCreateData
     */
    acceptsMarketingEmails?: boolean;
    /**
     * 
     * @type {Array<CustomFields>}
     * @memberof CustomerCreateData
     */
    customFields?: Array<CustomFields>;
}

export function CustomerCreateDataFromJSON(json: any): CustomerCreateData {
    return CustomerCreateDataFromJSONTyped(json, false);
}

export function CustomerCreateDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): CustomerCreateData {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'firstName': !exists(json, 'firstName') ? undefined : json['firstName'],
        'lastName': !exists(json, 'lastName') ? undefined : json['lastName'],
        'email': !exists(json, 'email') ? undefined : json['email'],
        'password': !exists(json, 'password') ? undefined : json['password'],
        'acceptsMarketingEmails': !exists(json, 'acceptsMarketingEmails') ? undefined : json['acceptsMarketingEmails'],
        'customFields': !exists(json, 'customFields') ? undefined : ((json['customFields'] as Array<any>).map(CustomFieldsFromJSON)),
    };
}

export function CustomerCreateDataToJSON(value?: CustomerCreateData | null): any {
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
        'password': value.password,
        'acceptsMarketingEmails': value.acceptsMarketingEmails,
        'customFields': value.customFields === undefined ? undefined : ((value.customFields as Array<any>).map(CustomFieldsToJSON)),
    };
}


