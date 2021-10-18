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
    RequestCartPostLineItem,
    RequestCartPostLineItemFromJSON,
    RequestCartPostLineItemFromJSONTyped,
    RequestCartPostLineItemToJSON,
} from './';

/**
 * 
 * @export
 * @interface RequestCartOneOf
 */
export interface RequestCartOneOf {
    /**
     * 
     * @type {Array<RequestCartPostLineItem>}
     * @memberof RequestCartOneOf
     */
    lineItems: Array<RequestCartPostLineItem>;
    /**
     * 
     * @type {string}
     * @memberof RequestCartOneOf
     */
    locale?: string;
}

export function RequestCartOneOfFromJSON(json: any): RequestCartOneOf {
    return RequestCartOneOfFromJSONTyped(json, false);
}

export function RequestCartOneOfFromJSONTyped(json: any, ignoreDiscriminator: boolean): RequestCartOneOf {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'lineItems': ((json['lineItems'] as Array<any>).map(RequestCartPostLineItemFromJSON)),
        'locale': !exists(json, 'locale') ? undefined : json['locale'],
    };
}

export function RequestCartOneOfToJSON(value?: RequestCartOneOf | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'lineItems': ((value.lineItems as Array<any>).map(RequestCartPostLineItemToJSON)),
        'locale': value.locale,
    };
}


