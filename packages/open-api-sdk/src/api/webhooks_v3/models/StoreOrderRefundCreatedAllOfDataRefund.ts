/* tslint:disable */
/* eslint-disable */
/**
 * Webhooks v3
 * Get notified when specific events occur on a BigCommerce store. For more information, see [Webhooks Overview](https://developer.bigcommerce.com/api-docs/store-management/webhooks/overview).
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
 * @interface StoreOrderRefundCreatedAllOfDataRefund
 */
export interface StoreOrderRefundCreatedAllOfDataRefund {
    /**
     * ID of the refund submitted against the order
     * @type {number}
     * @memberof StoreOrderRefundCreatedAllOfDataRefund
     */
    refundId?: number;
}

export function StoreOrderRefundCreatedAllOfDataRefundFromJSON(json: any): StoreOrderRefundCreatedAllOfDataRefund {
    return StoreOrderRefundCreatedAllOfDataRefundFromJSONTyped(json, false);
}

export function StoreOrderRefundCreatedAllOfDataRefundFromJSONTyped(json: any, ignoreDiscriminator: boolean): StoreOrderRefundCreatedAllOfDataRefund {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'refundId': !exists(json, 'refund_id') ? undefined : json['refund_id'],
    };
}

export function StoreOrderRefundCreatedAllOfDataRefundToJSON(value?: StoreOrderRefundCreatedAllOfDataRefund | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'refund_id': value.refundId,
    };
}


