/* tslint:disable */
/* eslint-disable */
/**
 * Themes
 * Backup, restore, download, and activate themes; and, get the status of theme jobs and read theme configurations.  - [OAuth Scopes](#oauth-scopes) - [Authentication](#authentication)  ## Authentication  Requests can be authenticated by sending an `access_token` via `X-Auth-Token` HTTP header.  ```http GET /stores/{$$.env.store_hash}/v3/themes host: api.bigcommerce.com Accept: application/json X-Auth-Token: {access_token} ```  ### OAuth Scopes | UI Name                                      | Permission | Parameter                                     | |----------------------------------------------|------------|-----------------------------------------------| | Themes                                       | modify     | `store_themes_manage`                         | For more information on OAuth Scopes, see: [Authentication](https://developer.bigcommerce.com/api-docs/getting-started/authentication).
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * A theme.
 * @export
 * @interface ThemeConfigurationFull
 */
export interface ThemeConfigurationFull {
    /**
     * 
     * @type {string}
     * @memberof ThemeConfigurationFull
     */
    uuid?: string;
    /**
     * The Theme to which the Configuration belongs.
     * @type {string}
     * @memberof ThemeConfigurationFull
     */
    themeUuid?: string;
    /**
     * The Variation to which the Configuration belongs.
     * @type {string}
     * @memberof ThemeConfigurationFull
     */
    variationId?: string;
    /**
     * The content of the configuration, which is a JSON object which will vary in structure from theme to theme.
     * @type {object}
     * @memberof ThemeConfigurationFull
     */
    settings?: object;
    /**
     * 
     * @type {string}
     * @memberof ThemeConfigurationFull
     */
    dateCreated?: string;
    /**
     * Site ID to which this configuration belongs. Will be 0 for the original configuration for a Theme.
     * @type {number}
     * @memberof ThemeConfigurationFull
     */
    siteId?: number;
}

export function ThemeConfigurationFullFromJSON(json: any): ThemeConfigurationFull {
    return ThemeConfigurationFullFromJSONTyped(json, false);
}

export function ThemeConfigurationFullFromJSONTyped(json: any, ignoreDiscriminator: boolean): ThemeConfigurationFull {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'uuid': !exists(json, 'uuid') ? undefined : json['uuid'],
        'themeUuid': !exists(json, 'theme_uuid') ? undefined : json['theme_uuid'],
        'variationId': !exists(json, 'variation_id') ? undefined : json['variation_id'],
        'settings': !exists(json, 'settings') ? undefined : json['settings'],
        'dateCreated': !exists(json, 'date_created') ? undefined : json['date_created'],
        'siteId': !exists(json, 'site_id') ? undefined : json['site_id'],
    };
}

export function ThemeConfigurationFullToJSON(value?: ThemeConfigurationFull | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'uuid': value.uuid,
        'theme_uuid': value.themeUuid,
        'variation_id': value.variationId,
        'settings': value.settings,
        'date_created': value.dateCreated,
        'site_id': value.siteId,
    };
}


