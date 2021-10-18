/* tslint:disable */
/* eslint-disable */
/**
 * Price Lists
 * Populate different versions of catalog pricing and assign them to different [customer groups](/api-reference/customer-subscribers/customers-api) at the variant level.  - [Authentication](#authentication) - [Price Lists](#price-lists) - [Price Lists Assignments](#price-lists-assignments) - [Usage notes](#usage-notes) - [Additional information](#additional-information)  ## Authentication  Authenticate requests by including an [OAuth](https://developer.bigcommerce.com/api-docs/getting-started/authentication) `access_token` in the request headers.  ```http GET https://api.bigcommerce.com/stores/{{STORE_HASH}}/v3/{{ENDPOINT}} Content-Type: application/json X-Auth-Token: {{ACCESS_TOKEN}} ```  ### OAuth Scopes  | UI Name                                      | Permission | Parameter                                     | |----------------------------------------------|------------|-----------------------------------------------| | Products                                     | modify     | `store_v2_products`                           | | Products                                     | read-only  | `store_v2_products_read_only`                 |  ## Price Lists  The association of a Price List to a customer group can be done either via the control panel or using the [Customer Groups API.](/api-reference/customer-subscribers/customers-api)  [Price List Assignments](https://developer.bigcommerce.com/api-reference/store-management/price-lists/price-lists-records/) can be created to assign Price Lists to a specific [channel](https://developer.bigcommerce.com/api-reference/cart-checkout/channels-listings-api). Price Lists assigned to a channel apply to all shoppers on that channel, unless there are more specific assignments or customer group discounts set up for the shopper\'s customer group.  If an active Price List does not contain prices for a variant, then the catalog pricing will be used.  Price Lists provide overridden price values to the Stencil storefront. Final price display can be further customized within the Stencil template using the template\'s [price](https://developer.bigcommerce.com/stencil-docs/reference-docs/global-objects-and-properties/models/price) object.  To learn more about Price Lists, see [Price Lists API](/api-docs/store-management/price-list-overview).  ## Price Lists Assignments  ### Order of operations  **IF** Price List assigned to current customer group **AND** Price List assigned to current channel: * Use this Price List -- any prices not found fall back to the catalog price (or in the case of multi-currency, auto-converted prices)  **ELSE IF** Price List assigned to current customer group: * Use this Price List -- any prices not found fall back to the catalog price (or in the case of multi-currency, auto-converted prices)  **ELSE IF** Customer group discounts: * Use them -- any prices not found fall back to the catalog price (or in the case of multi-currency, auto-converted prices)  **ELSE IF** Channel has a default Price List: * Use this Price List -- any prices not found fall back to the catalog price (or in the case of multi-currency, auto-converted prices)  **ELSE**: * Fall back to the catalog price (or in the case of multi-currency, auto-converted prices)  ## Usage notes - Price Lists cannot be assigned to a customer group that has customer group discounts -- the customer group discounts must be deleted first. - Bulk pricing Tiers may additionally be associated with a price record to indicate different pricing as the quantity in the cart increases. - If a variant has a Price Record, any existing product-level bulk pricing will not apply in the cart. For variants without Price Records, any existing product bulk pricing will apply. - [Price Lists Records](https://developer.bigcommerce.com/api-reference/store-management/price-lists/price-lists-records/setpricelistrecordcollection) accepts bulk upsert. You can only do one bulk upsert at a time. Running more than one in parallel on the **same store** will cause a 429 error and the request will fail. - There are no webhooks available for Price Lists. Since Price Lists directly relate to products, product webhooks will fire for corresponding changes such as pricing.  ## Additional information  ### Webhooks  * [Products](/api-docs/store-management/webhooks/events#products) * [SKU](/api-docs/store-management/webhooks/events#sku)  ### Related endpoints * [Get All Price Lists](/api-reference/store-management/price-lists/price-lists/getpricelistcollection)
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
 * @interface ErrorResponseAllOf
 */
export interface ErrorResponseAllOf {
    /**
     * 
     * @type {{ [key: string]: string; }}
     * @memberof ErrorResponseAllOf
     */
    errors?: { [key: string]: string; };
}

export function ErrorResponseAllOfFromJSON(json: any): ErrorResponseAllOf {
    return ErrorResponseAllOfFromJSONTyped(json, false);
}

export function ErrorResponseAllOfFromJSONTyped(json: any, ignoreDiscriminator: boolean): ErrorResponseAllOf {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'errors': !exists(json, 'errors') ? undefined : json['errors'],
    };
}

export function ErrorResponseAllOfToJSON(value?: ErrorResponseAllOf | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'errors': value.errors,
    };
}


