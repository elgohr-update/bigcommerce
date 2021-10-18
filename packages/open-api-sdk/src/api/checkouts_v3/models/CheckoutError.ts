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
import {
    ErrorDetail,
    ErrorDetailFromJSON,
    ErrorDetailFromJSONTyped,
    ErrorDetailToJSON,
} from './';

/**
 * 
 * @export
 * @interface CheckoutError
 */
export interface CheckoutError {
    /**
     * 
     * @type {Array<ErrorDetail>}
     * @memberof CheckoutError
     */
    errors?: Array<ErrorDetail>;
}

export function CheckoutErrorFromJSON(json: any): CheckoutError {
    return CheckoutErrorFromJSONTyped(json, false);
}

export function CheckoutErrorFromJSONTyped(json: any, ignoreDiscriminator: boolean): CheckoutError {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'errors': !exists(json, 'errors') ? undefined : ((json['errors'] as Array<any>).map(ErrorDetailFromJSON)),
    };
}

export function CheckoutErrorToJSON(value?: CheckoutError | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'errors': value.errors === undefined ? undefined : ((value.errors as Array<any>).map(ErrorDetailToJSON)),
    };
}


