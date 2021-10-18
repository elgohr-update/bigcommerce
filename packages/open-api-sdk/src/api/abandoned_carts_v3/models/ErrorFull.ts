/* tslint:disable */
/* eslint-disable */
/**
 * Abandoned Carts
 * Use `/abandoned-carts/{token}` on headless storefronts to retrieve the `cart_id` via the abandoned cart `token` passed in to headless storefront via an abandoned cart email link clicked on by a shopper. Once the `cart_id` has been retrieved, it can be used to fetch and display information about the cart to the shopper via the storefront cart and/or server-to-server cart APIs.  - [OAuth Scopes](#oauth-scopes) - [Authentication](#authentication)  ## OAuth Scopes | UI Name                                      | Permission | Parameter                                     | |----------------------------------------------|------------|-----------------------------------------------| | Carts                                        | modify     | `store_cart`                                  | | Carts                                        | read-only  | `store_cart_read_only`                        |  For more information on OAuth Scopes, see: [Authentication](https://developer.bigcommerce.com/api-docs/getting-started/authentication).  ## Authentication  Requests can be authenticated by sending an `access_token` via `X-Auth-Token` HTTP header:  ```http GET /stores/{$$.env.store_hash}/v3/catalog/summary host: api.bigcommerce.com Accept: application/json X-Auth-Token: {access_token} ```  |Header|Parameter|Description| |-|-|-| |`X-Auth-Token`|`access_token `|Obtained by creating an API account or installing an app in a BigCommerce control panel.|  For more information on Authenticating BigCommerce APIs, see: [Authentication](https://developer.bigcommerce.com/api-docs/getting-started/authentication).
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
 * @interface ErrorFull
 */
export interface ErrorFull {
    /**
     * The HTTP status code.
     * @type {number}
     * @memberof ErrorFull
     */
    status?: number;
    /**
     * The error title describing the particular error.
     * @type {string}
     * @memberof ErrorFull
     */
    title?: string;
    /**
     * 
     * @type {string}
     * @memberof ErrorFull
     */
    type?: string;
}

export function ErrorFullFromJSON(json: any): ErrorFull {
    return ErrorFullFromJSONTyped(json, false);
}

export function ErrorFullFromJSONTyped(json: any, ignoreDiscriminator: boolean): ErrorFull {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'status': !exists(json, 'status') ? undefined : json['status'],
        'title': !exists(json, 'title') ? undefined : json['title'],
        'type': !exists(json, 'type') ? undefined : json['type'],
    };
}

export function ErrorFullToJSON(value?: ErrorFull | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'status': value.status,
        'title': value.title,
        'type': value.type,
    };
}


