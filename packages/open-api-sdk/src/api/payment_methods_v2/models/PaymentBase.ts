/* tslint:disable */
/* eslint-disable */
/**
 * Payment Methods
 * Get a list of a store\'s enabled payment methods. For processing payments, see [Payment Processing API](/api-docs/payments/payments-api-overview).  - [Authentication](#authentication) - [Subresources](#subresources) - [Additional Resources](#additional-resources)  ## Authentication  Authenticate requests by including an [OAuth](https://developer.bigcommerce.com/api-docs/getting-started/authentication) `access_token` in the request header.  ```http GET https://api.bigcommerce.com/stores/{{STORE_HASH}}/v2/{{ENDPOINT}} Content-Type: application/json X-Auth-Token: {{ACCESS_TOKEN}} ```  ### OAuth Scopes |  **UI Name** | **Permission** | **Parameter** | | --- | --- | --- | |  Information & Settings | read-only | `store_payments_methods_read` |
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
 * @interface PaymentBase
 */
export interface PaymentBase {
    /**
     * Unique platform-wide code identifying the payment method.
     * @type {string}
     * @memberof PaymentBase
     */
    code?: string;
    /**
     * Descriptive name of the payment method.
     * @type {string}
     * @memberof PaymentBase
     */
    name?: string;
    /**
     * Determines whether the payment gateway is in test mode. Always false for offline payment methods.
     * @type {boolean}
     * @memberof PaymentBase
     */
    testMode?: boolean;
}

export function PaymentBaseFromJSON(json: any): PaymentBase {
    return PaymentBaseFromJSONTyped(json, false);
}

export function PaymentBaseFromJSONTyped(json: any, ignoreDiscriminator: boolean): PaymentBase {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'code': !exists(json, 'code') ? undefined : json['code'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'testMode': !exists(json, 'test_mode') ? undefined : json['test_mode'],
    };
}

export function PaymentBaseToJSON(value?: PaymentBase | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'code': value.code,
        'name': value.name,
        'test_mode': value.testMode,
    };
}


