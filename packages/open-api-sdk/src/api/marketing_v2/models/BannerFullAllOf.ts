/* tslint:disable */
/* eslint-disable */
/**
 * Marketing
 * Manage coupons, banners, and gift certificates.  - [Authentication](#authentication) - [Subresources](#subresources)  ## Authentication  Authenticate requests by including an [OAuth](https://developer.bigcommerce.com/api-docs/getting-started/authentication) `access_token` in the request header.  ```http GET https://api.bigcommerce.com/stores/{{STORE_HASH}}/v3/{{ENDPOINT}} Content-Type: application/json X-Auth-Token: {{ACCESS_TOKEN}} ```  ### OAuth Scopes |  **UI Name** | **Permission** | **Parameter** | | --- | --- | --- | |  Marketing | modify | `store_v2_marketing` | |  Marketing | read-only | `store_v2_marketing_read_only` |  ## Subresources  ### Coupons Category or product discounts that can be applied to orders for customers who enter a given code.  ### Banners Banners available to display on a store.  ### Gift Certificates Gift certificates available to offer to a store’s customers.
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
 * @interface BannerFullAllOf
 */
export interface BannerFullAllOf {
    /**
     * Id of the banner.
     * This is a READ-ONLY field; do not set or modify its value in a POST or PUT request.
     * @type {number}
     * @memberof BannerFullAllOf
     */
    id?: number;
    /**
     * Date the banner is created.
     * @type {Date}
     * @memberof BannerFullAllOf
     */
    dateCreated?: Date;
    /**
     * If the banner is on a specific category or brand page then the `item_id` will correspond the category or brand id.
     * @type {string}
     * @memberof BannerFullAllOf
     */
    itemId?: string;
}

export function BannerFullAllOfFromJSON(json: any): BannerFullAllOf {
    return BannerFullAllOfFromJSONTyped(json, false);
}

export function BannerFullAllOfFromJSONTyped(json: any, ignoreDiscriminator: boolean): BannerFullAllOf {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'dateCreated': !exists(json, 'date_created') ? undefined : (new Date(json['date_created'])),
        'itemId': !exists(json, 'item_id') ? undefined : json['item_id'],
    };
}

export function BannerFullAllOfToJSON(value?: BannerFullAllOf | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'date_created': value.dateCreated === undefined ? undefined : (value.dateCreated.toISOString()),
        'item_id': value.itemId,
    };
}


