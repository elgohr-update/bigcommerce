/* tslint:disable */
/* eslint-disable */
/**
 * Catalog
 * Manage products, brands and categories. To learn more about catalog resources see [Catalog Overview](https://developer.bigcommerce.com/api-docs/catalog/products-overview).  - [Authentication](#authentication) - [Differentiating Variants and Modifiers](#differentiating-variants-and-modifiers) - [Available Endpoints](#available-endpoints) - [Resources](#resources)  ## Authentication Requests can be authenticated by sending an `access_token` via `X-Auth-Token` HTTP header:  ```http GET /stores/{$$.env.store_hash}/v3/catalog/summary host: api.bigcommerce.com Accept: application/json X-Auth-Token: {access_token} ```  |Header|Parameter|Description| |-|-|-| |`X-Auth-Token`|`access_token `|Obtained by creating an API account or installing an app in a BigCommerce control panel.|  ### OAuth Scopes | UI Name  | Permission | Parameter                     | |----------|------------|-------------------------------| | Products | modify     | `store_v2_products`           | | Products | read-only  | `store_v2_products_read_only` |  For more information on OAuth Scopes, see: [Authentication](https://developer.bigcommerce.com/api-docs/getting-started/authentication).  For more information on Authenticating BigCommerce APIs, see: [Authentication](https://developer.bigcommerce.com/api-docs/getting-started/authentication).  ## Differentiating Variants and Modifiers [Variants](https://support.bigcommerce.com/s/article/Product-Options-v3#variations) represent a physical product made up of [Product Option](https://support.bigcommerce.com/s/article/Product-Options-v3) choices, i.e. a large blue t-shirt. Each variant can have a unique SKU.  Modifiers represent a choice a customer makes about a product that doesn\'t represent a physical item, i.e. text to be printed on a t-shirt. Assigning a SKU to a modifier will turn it into a variant.  See [Variant Options](https://developer.bigcommerce.com/api-docs/catalog/products-overview#variant-options) and [Modifier Options](https://developer.bigcommerce.com/api-docs/catalog/products-overview#modifier-options) for more information.  ## Available Endpoints | Resource / Endpoint                     | Description                                                             | |-----------------------------------------|-------------------------------------------------------------------------| | Brand Images                            | Create and manage brand images                                          | | Brand Metafields                        | Create and manage brand metafields                                      | | Brands                                  | Create and manage brands                                                | | Catalog                                 | Create and manage store categories, products, and brands                | | Categories                              | Create and manage categorties                                           | | Category Images                         | Create and manage category images                                       | | Category Metafields                     | Create and manage category metafields                                   | | Product Bulk Pricing Rules              | Create and manage product bulk pricing rules                            | | Product Complex Rules                   | Create and manage product complex rules                                 | | Product Custom Fields                   | Create and manage product custom fields                                 | | Product Images                          | Create and manage product images                                        | | Product Metafields                      | Create and manage product meta fields                                   | | Product Modifier Images                 | Create and manage product modifer images                                | | Product Modifier Values                 | Create and manage product modifier values                               | | Product Modifiers                       | Create and manage product midifiers                                     | | Product Reviews                         | Create and manage product reviews                                       | | Product Variant Option Values           | Create and manage product variant option values                         | | Product Variant Options                 | Create and manage product variant options                               | | Product Variants                        | Create and manage product variants                                      | | Product Videos                          | Create and manage product videos                                        | | Products                                | Create and manage products                                              | | ProductVariant Metafields               | Create and manage product meta flields                                  | | Variants                                | Get and update all variants                                             |  ## Resources  ### Webhooks * [Products](/api-docs/store-management/webhooks/events#products) * [Categories](/api-docs/store-management/webhooks/events#category) * [SKU](/api-docs/store-management/webhooks/events#sku)
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
    ProductReviewBase,
    ProductReviewBaseFromJSON,
    ProductReviewBaseFromJSONTyped,
    ProductReviewBaseToJSON,
} from './';

/**
 * The model for a PUT to update a product review.
 * @export
 * @interface ProductReviewPut
 */
export interface ProductReviewPut {
    /**
     * The title for the product review.
     * Required in /POST.
     * @type {string}
     * @memberof ProductReviewPut
     */
    title: string;
    /**
     * The text for the product review.
     * @type {string}
     * @memberof ProductReviewPut
     */
    text?: string;
    /**
     * The status of the product review. Must be one of `approved`, `disapproved` or `pending`.
     * @type {string}
     * @memberof ProductReviewPut
     */
    status?: string;
    /**
     * The rating of the product review. Must be one of 0, 1, 2, 3, 4, 5.
     * @type {number}
     * @memberof ProductReviewPut
     */
    rating?: number;
    /**
     * The email of the reviewer. Must be a valid email, or an empty string.
     * @type {string}
     * @memberof ProductReviewPut
     */
    email?: string;
    /**
     * The name of the reviewer.
     * @type {string}
     * @memberof ProductReviewPut
     */
    name?: string;
    /**
     * Date the product was reviewed. Required in /POST.
     * @type {Date}
     * @memberof ProductReviewPut
     */
    dateReviewed: Date;
}

export function ProductReviewPutFromJSON(json: any): ProductReviewPut {
    return ProductReviewPutFromJSONTyped(json, false);
}

export function ProductReviewPutFromJSONTyped(json: any, ignoreDiscriminator: boolean): ProductReviewPut {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'title': json['title'],
        'text': !exists(json, 'text') ? undefined : json['text'],
        'status': !exists(json, 'status') ? undefined : json['status'],
        'rating': !exists(json, 'rating') ? undefined : json['rating'],
        'email': !exists(json, 'email') ? undefined : json['email'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'dateReviewed': (new Date(json['date_reviewed'])),
    };
}

export function ProductReviewPutToJSON(value?: ProductReviewPut | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'title': value.title,
        'text': value.text,
        'status': value.status,
        'rating': value.rating,
        'email': value.email,
        'name': value.name,
        'date_reviewed': (value.dateReviewed.toISOString()),
    };
}


