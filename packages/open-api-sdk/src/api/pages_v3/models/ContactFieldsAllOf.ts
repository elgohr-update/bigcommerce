/* tslint:disable */
/* eslint-disable */
/**
 * Pages V3
 * Manage content pages across multiple sites.
 *
 * The version of the OpenAPI document: 3.0
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
 * @interface ContactFieldsAllOf
 */
export interface ContactFieldsAllOf {
    /**
     * Full name of the customer submitting the form.
     * @type {string}
     * @memberof ContactFieldsAllOf
     */
    fullname?: string;
    /**
     * Customer’s phone number, as submitted on the form.
     * @type {string}
     * @memberof ContactFieldsAllOf
     */
    phone?: string;
    /**
     * Customer’s submitted company name.
     * @type {string}
     * @memberof ContactFieldsAllOf
     */
    companyname?: string;
    /**
     * Customer’s submitted order number.
     * @type {string}
     * @memberof ContactFieldsAllOf
     */
    orderno?: string;
    /**
     * Customer’s submitted RMA (Return Merchandise Authorization) number.
     * @type {string}
     * @memberof ContactFieldsAllOf
     */
    rma?: string;
}

export function ContactFieldsAllOfFromJSON(json: any): ContactFieldsAllOf {
    return ContactFieldsAllOfFromJSONTyped(json, false);
}

export function ContactFieldsAllOfFromJSONTyped(json: any, ignoreDiscriminator: boolean): ContactFieldsAllOf {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'fullname': !exists(json, 'fullname') ? undefined : json['fullname'],
        'phone': !exists(json, 'phone') ? undefined : json['phone'],
        'companyname': !exists(json, 'companyname') ? undefined : json['companyname'],
        'orderno': !exists(json, 'orderno') ? undefined : json['orderno'],
        'rma': !exists(json, 'rma') ? undefined : json['rma'],
    };
}

export function ContactFieldsAllOfToJSON(value?: ContactFieldsAllOf | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'fullname': value.fullname,
        'phone': value.phone,
        'companyname': value.companyname,
        'orderno': value.orderno,
        'rma': value.rma,
    };
}


