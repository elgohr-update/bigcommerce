/* tslint:disable */
/* eslint-disable */
/**
 * Payment Processing
 * Process payments using payment instrument such as credit card. See [Payments Overview](https://developer.bigcommerce.com/api-docs/store-management/payment-processing) for more information.
 *
 * The version of the OpenAPI document: 1.0.0
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
 * @interface ErrorResponse1
 */
export interface ErrorResponse1 {
    /**
     * HTTP status code
     * @type {number}
     * @memberof ErrorResponse1
     */
    status: number;
    /**
     * Short summary describing the particular error
     * @type {string}
     * @memberof ErrorResponse1
     */
    title: string;
    /**
     * Detailed summary describing the particular error
     * @type {string}
     * @memberof ErrorResponse1
     */
    detail?: string;
    /**
     * Reference that identifies the particular error
     * @type {string}
     * @memberof ErrorResponse1
     */
    type: string;
    /**
     * Code representing the particular error
     * @type {number}
     * @memberof ErrorResponse1
     */
    code?: number;
    /**
     * 
     * @type {{ [key: string]: string; }}
     * @memberof ErrorResponse1
     */
    errors?: { [key: string]: string; };
}

export function ErrorResponse1FromJSON(json: any): ErrorResponse1 {
    return ErrorResponse1FromJSONTyped(json, false);
}

export function ErrorResponse1FromJSONTyped(json: any, ignoreDiscriminator: boolean): ErrorResponse1 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'status': json['status'],
        'title': json['title'],
        'detail': !exists(json, 'detail') ? undefined : json['detail'],
        'type': json['type'],
        'code': !exists(json, 'code') ? undefined : json['code'],
        'errors': !exists(json, 'errors') ? undefined : json['errors'],
    };
}

export function ErrorResponse1ToJSON(value?: ErrorResponse1 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'status': value.status,
        'title': value.title,
        'detail': value.detail,
        'type': value.type,
        'code': value.code,
        'errors': value.errors,
    };
}


