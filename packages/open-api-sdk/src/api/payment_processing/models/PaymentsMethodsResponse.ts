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
import {
    PaymentMethodFull,
    PaymentMethodFullFromJSON,
    PaymentMethodFullFromJSONTyped,
    PaymentMethodFullToJSON,
} from './';

/**
 * 
 * @export
 * @interface PaymentsMethodsResponse
 */
export interface PaymentsMethodsResponse {
    /**
     * 
     * @type {Array<PaymentMethodFull>}
     * @memberof PaymentsMethodsResponse
     */
    data?: Array<PaymentMethodFull>;
}

export function PaymentsMethodsResponseFromJSON(json: any): PaymentsMethodsResponse {
    return PaymentsMethodsResponseFromJSONTyped(json, false);
}

export function PaymentsMethodsResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): PaymentsMethodsResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': !exists(json, 'data') ? undefined : ((json['data'] as Array<any>).map(PaymentMethodFullFromJSON)),
    };
}

export function PaymentsMethodsResponseToJSON(value?: PaymentsMethodsResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': value.data === undefined ? undefined : ((value.data as Array<any>).map(PaymentMethodFullToJSON)),
    };
}


