/* tslint:disable */
/* eslint-disable */
/**
 * Checkouts
 * Create checkouts from existing carts using BigCommerce checkout logic.
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
 * @interface Currency
 */
export interface Currency {
    /**
     * ISO-4217 currency code. (See: http://en.wikipedia.org/wiki/ISO_4217.)
     * @type {string}
     * @memberof Currency
     */
    code?: string;
}

export function CurrencyFromJSON(json: any): Currency {
    return CurrencyFromJSONTyped(json, false);
}

export function CurrencyFromJSONTyped(json: any, ignoreDiscriminator: boolean): Currency {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'code': !exists(json, 'code') ? undefined : json['code'],
    };
}

export function CurrencyToJSON(value?: Currency | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'code': value.code,
    };
}


