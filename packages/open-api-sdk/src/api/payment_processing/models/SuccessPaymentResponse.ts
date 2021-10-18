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
 * @interface SuccessPaymentResponse
 */
export interface SuccessPaymentResponse {
    /**
     * Identifier for this transaction
     * @type {string}
     * @memberof SuccessPaymentResponse
     */
    id?: string;
    /**
     * Transaction type for this payment
     * @type {string}
     * @memberof SuccessPaymentResponse
     */
    transactionType?: SuccessPaymentResponseTransactionTypeEnum;
    /**
     * Status to indicate a success response
     * @type {string}
     * @memberof SuccessPaymentResponse
     */
    status?: SuccessPaymentResponseStatusEnum;
}

/**
* @export
* @enum {string}
*/
export enum SuccessPaymentResponseTransactionTypeEnum {
    Authorization = 'authorization',
    Purchase = 'purchase'
}/**
* @export
* @enum {string}
*/
export enum SuccessPaymentResponseStatusEnum {
    Success = 'success',
    Pending = 'pending'
}

export function SuccessPaymentResponseFromJSON(json: any): SuccessPaymentResponse {
    return SuccessPaymentResponseFromJSONTyped(json, false);
}

export function SuccessPaymentResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): SuccessPaymentResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'transactionType': !exists(json, 'transaction_type') ? undefined : json['transaction_type'],
        'status': !exists(json, 'status') ? undefined : json['status'],
    };
}

export function SuccessPaymentResponseToJSON(value?: SuccessPaymentResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'transaction_type': value.transactionType,
        'status': value.status,
    };
}


