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
    MetaCollection,
    MetaCollectionFromJSON,
    MetaCollectionFromJSONTyped,
    MetaCollectionToJSON,
    WishlistFull,
    WishlistFullFromJSON,
    WishlistFullFromJSONTyped,
    WishlistFullToJSON,
} from './';

/**
 * 
 * @export
 * @interface InlineResponse200
 */
export interface InlineResponse200 {
    /**
     * 
     * @type {Array<WishlistFull>}
     * @memberof InlineResponse200
     */
    data?: Array<WishlistFull>;
    /**
     * 
     * @type {MetaCollection}
     * @memberof InlineResponse200
     */
    meta?: MetaCollection;
}

export function InlineResponse200FromJSON(json: any): InlineResponse200 {
    return InlineResponse200FromJSONTyped(json, false);
}

export function InlineResponse200FromJSONTyped(json: any, ignoreDiscriminator: boolean): InlineResponse200 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': !exists(json, 'data') ? undefined : ((json['data'] as Array<any>).map(WishlistFullFromJSON)),
        'meta': !exists(json, 'meta') ? undefined : MetaCollectionFromJSON(json['meta']),
    };
}

export function InlineResponse200ToJSON(value?: InlineResponse200 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': value.data === undefined ? undefined : ((value.data as Array<any>).map(WishlistFullToJSON)),
        'meta': MetaCollectionToJSON(value.meta),
    };
}


