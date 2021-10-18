/* tslint:disable */
/* eslint-disable */
/**
 * Pricing
 * Get product pricing.  ## Authentication  Authenticate requests by including an [OAuth](https://developer.bigcommerce.com/api-docs/getting-started/authentication) `access_token` in the request header.  ```http GET /stores/{{STORE_HASH}}/v3/pricing/products host: api.bigcommerce.com Accept: application/json X-Auth-Token: {{ACCESS_TOKEN}} ```  ### OAuth Scopes | UI Name  | Permission | Parameter                     | |----------|------------|-------------------------------| | Products | read-only  | `store_v2_products_read_only` |
 *
 * The version of the OpenAPI document: 
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import {
    PricingProductsOptions,
    PricingProductsOptionsFromJSON,
    PricingProductsOptionsFromJSONTyped,
    PricingProductsOptionsToJSON,
} from './';

/**
 * Details/configuration for the product to request a price for.
 * @export
 * @interface PricingProductsItems
 */
export interface PricingProductsItems {
    /**
     * The (required) product ID of the item
     * @type {number}
     * @memberof PricingProductsItems
     */
    productId?: number;
    /**
     * The (optional) variant ID of the item
     * @type {number}
     * @memberof PricingProductsItems
     */
    variantId?: number;
    /**
     * The (optional) option configuration of the product. May be "partially" configured for estimates.
     * @type {Array<PricingProductsOptions>}
     * @memberof PricingProductsItems
     */
    options?: Array<PricingProductsOptions>;
}

export function PricingProductsItemsFromJSON(json: any): PricingProductsItems {
    return PricingProductsItemsFromJSONTyped(json, false);
}

export function PricingProductsItemsFromJSONTyped(json: any, ignoreDiscriminator: boolean): PricingProductsItems {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'productId': !exists(json, 'product_id') ? undefined : json['product_id'],
        'variantId': !exists(json, 'variant_id') ? undefined : json['variant_id'],
        'options': !exists(json, 'options') ? undefined : ((json['options'] as Array<any>).map(PricingProductsOptionsFromJSON)),
    };
}

export function PricingProductsItemsToJSON(value?: PricingProductsItems | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'product_id': value.productId,
        'variant_id': value.variantId,
        'options': value.options === undefined ? undefined : ((value.options as Array<any>).map(PricingProductsOptionsToJSON)),
    };
}


