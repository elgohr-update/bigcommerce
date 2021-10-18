/* tslint:disable */
/* eslint-disable */
/**
 * Redirects
 * Manage 301 redirects for one or more storefronts powered by a single BigCommerce back-end.  **On This Page** - [Authentication](#authentication) - [OAuth Scopes](#oauth-scopes) ---   ## Authentication  Requests can be authenticated by sending an `access_token` via `X-Auth-Token` HTTP header:  ```http GET /stores/{$$.env.store_hash}/v3/catalog/summary host: api.bigcommerce.com Accept: application/json X-Auth-Token: {access_token} ```  |Header|Parameter|Description| |-|-|-| |`X-Auth-Token`|`access_token `|Obtained by creating an API account or installing an app in a BigCommerce control panel.|  For more information on Authenticating BigCommerce APIs, see: [Authentication](https://developer.bigcommerce.com/api-docs/getting-started/authentication).
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
    RedirectTo,
    RedirectToFromJSON,
    RedirectToFromJSONTyped,
    RedirectToToJSON,
} from './';

/**
 * Full detail of a Redirect, optionally including the full destination URL.
 * @export
 * @interface Model301RedirectRead
 */
export interface Model301RedirectRead {
    /**
     * 
     * @type {string}
     * @memberof Model301RedirectRead
     */
    fromPath: string;
    /**
     * 
     * @type {number}
     * @memberof Model301RedirectRead
     */
    siteId: number;
    /**
     * 
     * @type {RedirectTo}
     * @memberof Model301RedirectRead
     */
    to?: RedirectTo;
    /**
     * 
     * @type {number}
     * @memberof Model301RedirectRead
     */
    id?: number;
    /**
     * Full destination URL for the redirect. Must be explicitly included via URL parameter.
     * @type {string}
     * @memberof Model301RedirectRead
     */
    toUrl?: string;
}

export function Model301RedirectReadFromJSON(json: any): Model301RedirectRead {
    return Model301RedirectReadFromJSONTyped(json, false);
}

export function Model301RedirectReadFromJSONTyped(json: any, ignoreDiscriminator: boolean): Model301RedirectRead {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'fromPath': json['from_path'],
        'siteId': json['site_id'],
        'to': !exists(json, 'to') ? undefined : RedirectToFromJSON(json['to']),
        'id': !exists(json, 'id') ? undefined : json['id'],
        'toUrl': !exists(json, 'to_url') ? undefined : json['to_url'],
    };
}

export function Model301RedirectReadToJSON(value?: Model301RedirectRead | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'from_path': value.fromPath,
        'site_id': value.siteId,
        'to': RedirectToToJSON(value.to),
        'id': value.id,
        'to_url': value.toUrl,
    };
}


