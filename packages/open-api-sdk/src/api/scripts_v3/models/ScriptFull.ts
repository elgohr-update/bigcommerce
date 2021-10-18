/* tslint:disable */
/* eslint-disable */
/**
 * Scripts
 * Inject client-side code onto a BigCommere storefront. To learn more about scripts, see [Scripts API](/api-docs/store-management/scripts).   - [OAuth Scopes](#oauth-scopes) - [Authentication](#authentication) - [Available Endpoints](#available-endpoints)  ## OAuth Scopes | UI Name                                      | Permission | Parameter                                     | |----------------------------------------------|------------|-----------------------------------------------| | Checkout Content<sup>1</sup>                             | modify     | `store_content_checkout`                      | | Checkout Content<sup>1</sup>                             | read-only  | `store_content_checkout_read_only`            | | Content                                       | modify     | `store_v2_content`                            | | Content                                       | read-only  | `store_v2_content_read_only`                  |  1. `Checkout Content` scopes are required to create or read scripts on the checkout page.  For more information on OAuth Scopes, see [Authentication](https://developer.bigcommerce.com/api-docs/getting-started/authentication).  ## Authentication  Requests can be authenticated by sending an`access_token` via `X-Auth-Token` HTTP header:  ```http GET /stores/{$$.env.store_hash}/v3/catalog/summary host: api.bigcommerce.com Accept: application/json X-Auth-Token: {access_token} ```  |Header|Parameter|Description| |-|-|-| |`X-Auth-Token`|`access_token`|Obtained by creating an API account or installing an app in a BigCommerce control panel.|  For more information on Authenticating BigCommerce APIs, see [Authentication](https://developer.bigcommerce.com/api-docs/getting-started/authentication).  ## Available Endpoints | Resource / Endpoint                     | Description                                                             | |-----------------------------------------|-------------------------------------------------------------------------| | Scripts                                 | Add client-side code to a store                                         |
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
    ScriptBase,
    ScriptBaseFromJSON,
    ScriptBaseFromJSONTyped,
    ScriptBaseToJSON,
    ScriptFullAllOf,
    ScriptFullAllOfFromJSON,
    ScriptFullAllOfFromJSONTyped,
    ScriptFullAllOfToJSON,
} from './';

/**
 * 
 * @export
 * @interface ScriptFull
 */
export interface ScriptFull {
    /**
     * The primary identifier.
     * @type {string}
     * @memberof ScriptFull
     */
    uuid?: string;
    /**
     * The date on which this object was initially created.
     * @type {Date}
     * @memberof ScriptFull
     */
    dateCreated?: Date;
    /**
     * The date on which this object was last updated.
     * @type {Date}
     * @memberof ScriptFull
     */
    dateModified?: Date;
    /**
     * The user-friendly description.
     * @type {string}
     * @memberof ScriptFull
     */
    description?: string;
    /**
     * An html string containing exactly one `script` tag. Only present if `kind` is `script_tag`.
     * @type {string}
     * @memberof ScriptFull
     */
    html?: string;
    /**
     * The `src` attribute of the script to load. Only present if `kind` is `src`.
     * @type {string}
     * @memberof ScriptFull
     */
    src?: string;
    /**
     * It will enable automatic cleanup of the script when the single click app is uninstalled or OAuth token is revoked.
     * @type {boolean}
     * @memberof ScriptFull
     */
    autoUninstall?: boolean;
    /**
     * The load method to use for the script. Values are `default`, `async`, or `defer`. It determines how the script should be loaded into the page.
     * @type {string}
     * @memberof ScriptFull
     */
    loadMethod?: ScriptFullLoadMethodEnum;
    /**
     * Where on the page to place the script. Values are `head` or `footer`.
     * @type {string}
     * @memberof ScriptFull
     */
    location?: ScriptFullLocationEnum;
    /**
     * Which set of pages the script should load on. 
     * 
     * Please note that you need to have `Checkout content` scope to use `all_pages` and `checkout`.
     * 
     * - The current visibility options are `storefront`, `checkout`, `all_pages` and `order_confirmation`.
     * 
     *      `storefront`: All pages that are not `checkout` or `order_confirmation`.
     * 		 
     * For a list of all locations visit [Scripts Visibility](https://developer.bigcommerce.com/api-docs/storefront/scripts-overview#scripts_scripts-visibility).
     * @type {string}
     * @memberof ScriptFull
     */
    visibility?: ScriptFullVisibilityEnum;
    /**
     * What type of script this is.
     * 
     * `src` - a `script` tag will be generated with its `src` attribute set to the value of `src`; For scripts that use the src url. By providing a path to the script, we can optimize and serve the script tag automatically for you.
     * 
     * `script_tag` - The value of `html` will be injected directly onto the page.
     * For scripts which include a raw HTML script_tag to be inserted into the page. The load_method must be default.
     * @type {string}
     * @memberof ScriptFull
     */
    kind?: ScriptFullKindEnum;
    /**
     * The client id of the API user that created this script, or blank if created by other means.
     * @type {string}
     * @memberof ScriptFull
     */
    apiClientId?: string;
    /**
     * Consent category for GDPR and CCPA compliance. Defaults to `uknown` when not specified. Scripts with an `uknown` consent category do not display on stores with customer cookie consent banners enabled. 
     * @type {string}
     * @memberof ScriptFull
     */
    consentCategory?: ScriptFullConsentCategoryEnum;
    /**
     * Indicates whether a script is enabled.
     * @type {boolean}
     * @memberof ScriptFull
     */
    enabled?: boolean;
}

/**
* @export
* @enum {string}
*/
export enum ScriptFullLoadMethodEnum {
    Default = 'default',
    Async = 'async',
    Defer = 'defer'
}/**
* @export
* @enum {string}
*/
export enum ScriptFullLocationEnum {
    Head = 'head',
    Footer = 'footer'
}/**
* @export
* @enum {string}
*/
export enum ScriptFullVisibilityEnum {
    Storefront = 'storefront',
    AllPages = 'all_pages',
    Checkout = 'checkout',
    OrderConfirmation = 'order_confirmation'
}/**
* @export
* @enum {string}
*/
export enum ScriptFullKindEnum {
    Src = 'src',
    ScriptTag = 'script_tag'
}/**
* @export
* @enum {string}
*/
export enum ScriptFullConsentCategoryEnum {
    Essential = 'essential',
    Functional = 'functional',
    Analytics = 'analytics',
    Targeting = 'targeting'
}

export function ScriptFullFromJSON(json: any): ScriptFull {
    return ScriptFullFromJSONTyped(json, false);
}

export function ScriptFullFromJSONTyped(json: any, ignoreDiscriminator: boolean): ScriptFull {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'uuid': !exists(json, 'uuid') ? undefined : json['uuid'],
        'dateCreated': !exists(json, 'date_created') ? undefined : (new Date(json['date_created'])),
        'dateModified': !exists(json, 'date_modified') ? undefined : (new Date(json['date_modified'])),
        'description': !exists(json, 'description') ? undefined : json['description'],
        'html': !exists(json, 'html') ? undefined : json['html'],
        'src': !exists(json, 'src') ? undefined : json['src'],
        'autoUninstall': !exists(json, 'auto_uninstall') ? undefined : json['auto_uninstall'],
        'loadMethod': !exists(json, 'load_method') ? undefined : json['load_method'],
        'location': !exists(json, 'location') ? undefined : json['location'],
        'visibility': !exists(json, 'visibility') ? undefined : json['visibility'],
        'kind': !exists(json, 'kind') ? undefined : json['kind'],
        'apiClientId': !exists(json, 'api_client_id') ? undefined : json['api_client_id'],
        'consentCategory': !exists(json, 'consent_category') ? undefined : json['consent_category'],
        'enabled': !exists(json, 'enabled') ? undefined : json['enabled'],
    };
}

export function ScriptFullToJSON(value?: ScriptFull | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'uuid': value.uuid,
        'date_created': value.dateCreated === undefined ? undefined : (value.dateCreated.toISOString()),
        'date_modified': value.dateModified === undefined ? undefined : (value.dateModified.toISOString()),
        'description': value.description,
        'html': value.html,
        'src': value.src,
        'auto_uninstall': value.autoUninstall,
        'load_method': value.loadMethod,
        'location': value.location,
        'visibility': value.visibility,
        'kind': value.kind,
        'api_client_id': value.apiClientId,
        'consent_category': value.consentCategory,
        'enabled': value.enabled,
    };
}


