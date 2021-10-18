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
import {
    CollectionMeta,
    CollectionMetaFromJSON,
    CollectionMetaFromJSONTyped,
    CollectionMetaToJSON,
    ThemeConfigurationFull,
    ThemeConfigurationFullFromJSON,
    ThemeConfigurationFullFromJSONTyped,
    ThemeConfigurationFullToJSON,
} from './';

/**
 * Response payload for the BigCommerce API.
 * @export
 * @interface InlineResponse200
 */
export interface InlineResponse200 {
    /**
     * 
     * @type {Array<ThemeConfigurationFull>}
     * @memberof InlineResponse200
     */
    data?: Array<ThemeConfigurationFull>;
    /**
     * 
     * @type {CollectionMeta}
     * @memberof InlineResponse200
     */
    meta?: CollectionMeta;
}

export function InlineResponse200FromJSON(json: any): InlineResponse200 {
    return InlineResponse200FromJSONTyped(json, false);
}

export function InlineResponse200FromJSONTyped(json: any, ignoreDiscriminator: boolean): InlineResponse200 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': !exists(json, 'data') ? undefined : ((json['data'] as Array<any>).map(ThemeConfigurationFullFromJSON)),
        'meta': !exists(json, 'meta') ? undefined : CollectionMetaFromJSON(json['meta']),
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
        
        'data': value.data === undefined ? undefined : ((value.data as Array<any>).map(ThemeConfigurationFullToJSON)),
        'meta': CollectionMetaToJSON(value.meta),
    };
}


