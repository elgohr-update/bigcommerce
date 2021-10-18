/* tslint:disable */
/* eslint-disable */
/**
 * Carts
 * Create a cart using BigCommerce cart logic.
 *
 * The version of the OpenAPI document: 
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
 * @interface ProductOption
 */
export interface ProductOption {
    /**
     * The product option name. For example, Color or Size
     * @type {string}
     * @memberof ProductOption
     */
    name?: string;
    /**
     * The product option identifier.
     * @type {number}
     * @memberof ProductOption
     */
    nameId?: number;
    /**
     * The product option value. For example, Red or Medium
     * @type {string}
     * @memberof ProductOption
     */
    value?: string;
    /**
     * The product option value identifier.
     * @type {number}
     * @memberof ProductOption
     */
    valueId?: number;
}

export function ProductOptionFromJSON(json: any): ProductOption {
    return ProductOptionFromJSONTyped(json, false);
}

export function ProductOptionFromJSONTyped(json: any, ignoreDiscriminator: boolean): ProductOption {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'name': !exists(json, 'name') ? undefined : json['name'],
        'nameId': !exists(json, 'name_id') ? undefined : json['name_id'],
        'value': !exists(json, 'value') ? undefined : json['value'],
        'valueId': !exists(json, 'value_id') ? undefined : json['value_id'],
    };
}

export function ProductOptionToJSON(value?: ProductOption | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'name': value.name,
        'name_id': value.nameId,
        'value': value.value,
        'value_id': value.valueId,
    };
}


