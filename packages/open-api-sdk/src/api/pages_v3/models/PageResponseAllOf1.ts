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
 * @interface PageResponseAllOf1
 */
export interface PageResponseAllOf1 {
    /**
     * 
     * @type {object}
     * @memberof PageResponseAllOf1
     */
    meta?: object;
}

export function PageResponseAllOf1FromJSON(json: any): PageResponseAllOf1 {
    return PageResponseAllOf1FromJSONTyped(json, false);
}

export function PageResponseAllOf1FromJSONTyped(json: any, ignoreDiscriminator: boolean): PageResponseAllOf1 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'meta': !exists(json, 'meta') ? undefined : json['meta'],
    };
}

export function PageResponseAllOf1ToJSON(value?: PageResponseAllOf1 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'meta': value.meta,
    };
}


