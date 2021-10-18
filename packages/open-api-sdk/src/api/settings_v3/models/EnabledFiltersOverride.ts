/* tslint:disable */
/* eslint-disable */
/**
 * Settings V3
 * Manage settings and configuration for BigCommerce hosted stores and headless storefronts.  ## Authentication  Authenticate requests by including an [OAuth](https://developer.bigcommerce.com/api-docs/getting-started/authentication) `access_token` in the request header.  ```http GET /stores/{{STORE_HASH}}/v3/settings/storefront/status host: api.bigcommerce.com Accept: application/json X-Auth-Token: {{ACCESS_TOKEN}} ```  ### OAuth Scopes |  **UI Name** | **Permission** | **Parameter** | |-|-|-| |  Information & Settings | modify | `store_v2_information` | |  Information & Settings | read-only | `store_v2_information_read_only` |
 *
 * The version of the OpenAPI document: 3.0.0
 * Contact: support@bigcommerce.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import {
    EnabledFilter,
    EnabledFilterFromJSON,
    EnabledFilterFromJSONTyped,
    EnabledFilterToJSON,
    SearchFilterOverrideScopeIdentifier,
    SearchFilterOverrideScopeIdentifierFromJSON,
    SearchFilterOverrideScopeIdentifierFromJSONTyped,
    SearchFilterOverrideScopeIdentifierToJSON,
} from './';

/**
 * A new set of enabled Product Filtering filters which should display in a particular context, such as on a particular Channel, or while viewing a particular Category. Array order indicates the display order on the storefront.
 * @export
 * @interface EnabledFiltersOverride
 */
export interface EnabledFiltersOverride {
    /**
     * 
     * @type {SearchFilterOverrideScopeIdentifier}
     * @memberof EnabledFiltersOverride
     */
    scope?: SearchFilterOverrideScopeIdentifier;
    /**
     * 
     * @type {Array<EnabledFilter>}
     * @memberof EnabledFiltersOverride
     */
    data?: Array<EnabledFilter>;
}

export function EnabledFiltersOverrideFromJSON(json: any): EnabledFiltersOverride {
    return EnabledFiltersOverrideFromJSONTyped(json, false);
}

export function EnabledFiltersOverrideFromJSONTyped(json: any, ignoreDiscriminator: boolean): EnabledFiltersOverride {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'scope': !exists(json, 'scope') ? undefined : SearchFilterOverrideScopeIdentifierFromJSON(json['scope']),
        'data': !exists(json, 'data') ? undefined : ((json['data'] as Array<any>).map(EnabledFilterFromJSON)),
    };
}

export function EnabledFiltersOverrideToJSON(value?: EnabledFiltersOverride | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'scope': SearchFilterOverrideScopeIdentifierToJSON(value.scope),
        'data': value.data === undefined ? undefined : ((value.data as Array<any>).map(EnabledFilterToJSON)),
    };
}


