/* tslint:disable */
/* eslint-disable */
/**
 * Orders V3
 * Surfaces endpoints related to payment processing. The `/orders/{id}/transactions` endpoint returns transaction details for the specified order. To programmatically create, update, and delete orders themselves, see [Orders v2](https://developer.bigcommerce.com/api-reference/store-management/orders). To process payments, see [Payment Processing](https://developer.bigcommerce.com/api-reference/payments/payments-process-payments).  - [Authentication](#authentication) - [Order Transactions](#order-transactions) - [Payment Actions](#payment-actions) - [Resources](#resources)  ## Authentication  Authenticate requests by including an [OAuth](https://developer.bigcommerce.com/api-docs/getting-started/authentication) `access_token` in the request header.  ```http GET https://api.bigcommerce.com/stores/{{STORE_HASH}}/v3/{{ENDPOINT}} Content-Type: application/json X-Auth-Token: {{ACCESS_TOKEN}} ```  ### OAuth Scopes  | UI Name| Permission |Parameter| |----------------------------------------------|------------|----------| | Order Transactions|modify|`store_v2_transactions`| | Order Transactions|read-only  |`store_v2_transactions_read_only`| | Orders| modify|`store_v2_orders`| | Orders| read-only|`store_v2_orders_read_only`|  ## Order Transactions The `/orders/{id}/transactions` endpoint returns details about the payment instruments used to pay for an order. Depending on the payment method used, different details will be available. Not all credit card payment gateways return full card or fraud details. Transactions endpoints are primarily used to get detailed gateway response information for credit card transactions; however they will also return any available information about digital wallet and offline payments.  **Note**: transactions are not created for the following payment methods: * Test Payment Gateway * PayPal Express * Amazon Pay  ## Payment Actions ### Capture and Void Capture or void the payment for and order.  ### Order Refunds The Order API refund endpoints allow developers to process refunds against orders with settled payments. Refund endpoints are useful when building order management or payment integrations. They make embedding refund functionality directly into the application possible without requiring merchants to return to their BigCommerce Control Panel.  ## Resources * [Orders Overview](https://developer.bigcommerce.com/api-docs/orders/orders-overview) * [Orders V2](https://developer.bigcommerce.com/api-reference/store-management/orders)
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
 * Pagination links for the previous and next parts of the whole collection.
 * @export
 * @interface PaginationLinks
 */
export interface PaginationLinks {
    /**
     * Link to the previous page returned in the response.
     * @type {string}
     * @memberof PaginationLinks
     */
    previous?: string;
    /**
     * Link to the current page returned in the response.
     * @type {string}
     * @memberof PaginationLinks
     */
    current?: string;
    /**
     * Link to the next page returned in the response.
     * @type {string}
     * @memberof PaginationLinks
     */
    next?: string;
}

export function PaginationLinksFromJSON(json: any): PaginationLinks {
    return PaginationLinksFromJSONTyped(json, false);
}

export function PaginationLinksFromJSONTyped(json: any, ignoreDiscriminator: boolean): PaginationLinks {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'previous': !exists(json, 'previous') ? undefined : json['previous'],
        'current': !exists(json, 'current') ? undefined : json['current'],
        'next': !exists(json, 'next') ? undefined : json['next'],
    };
}

export function PaginationLinksToJSON(value?: PaginationLinks | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'previous': value.previous,
        'current': value.current,
        'next': value.next,
    };
}


