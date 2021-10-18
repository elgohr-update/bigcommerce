/* tslint:disable */
/* eslint-disable */
/**
 * Wishlist
 * Create and manage customer [wishlists](https://support.bigcommerce.com/s/article/Wishlists).  - [Authentication](#authentication) - [Additional Information](#additional-information)  ## Authentication  [Authenticate](https://developer.bigcommerce.com/api-docs/getting-started/authentication) requests by including an OAuth `access_token` in the request header.  ```http GET https://api.bigcommerce.com/stores/{{STORE_HASH}}/v3/{{ENDPOINT}} Content-Type: application/json X-Auth-Token: {{ACCESS_TOKEN}} ```  ### OAuth scopes |  **UI Name** | **Permission** | **Parameter** | | --- | --- | --- | |  Customers | modify | `store_v2_customers` | |  Customers | read-only | `store_v2_customers_read_only` |  For more information on OAuth scopes, see [Authenticating BigCommerce\'s REST APIs](https://developer.bigcommerce.com/api-docs/getting-started/authentication/rest-api-authentication#oauth-scopes).  ## Additional Information * [Wishlists](https://support.bigcommerce.com/s/article/Wishlists)
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
    WishlistItem,
    WishlistItemFromJSON,
    WishlistItemFromJSONTyped,
    WishlistItemToJSON,
} from './';

/**
 * 
 * @export
 * @interface WishlistPut
 */
export interface WishlistPut {
    /**
     * The customer ID. A read-only value.
     * @type {number}
     * @memberof WishlistPut
     */
    customerId: number;
    /**
     * Whether the wishlist is available to the public.
     * @type {boolean}
     * @memberof WishlistPut
     */
    isPublic?: boolean;
    /**
     * The title of the wishlist.
     * @type {string}
     * @memberof WishlistPut
     */
    name?: string;
    /**
     * Array of wishlist items.
     * @type {Array<WishlistItem>}
     * @memberof WishlistPut
     */
    items: Array<WishlistItem>;
}

export function WishlistPutFromJSON(json: any): WishlistPut {
    return WishlistPutFromJSONTyped(json, false);
}

export function WishlistPutFromJSONTyped(json: any, ignoreDiscriminator: boolean): WishlistPut {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'customerId': json['customer_id'],
        'isPublic': !exists(json, 'is_public') ? undefined : json['is_public'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'items': ((json['items'] as Array<any>).map(WishlistItemFromJSON)),
    };
}

export function WishlistPutToJSON(value?: WishlistPut | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'customer_id': value.customerId,
        'is_public': value.isPublic,
        'name': value.name,
        'items': ((value.items as Array<any>).map(WishlistItemToJSON)),
    };
}


