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
    Pagination1,
    Pagination1FromJSON,
    Pagination1FromJSONTyped,
    Pagination1ToJSON,
} from './';

/**
 * Data about the response, including pagination and collection totals.
 * @export
 * @interface CollectionMeta
 */
export interface CollectionMeta {
    /**
     * 
     * @type {Pagination1}
     * @memberof CollectionMeta
     */
    pagination?: Pagination1;
}

export function CollectionMetaFromJSON(json: any): CollectionMeta {
    return CollectionMetaFromJSONTyped(json, false);
}

export function CollectionMetaFromJSONTyped(json: any, ignoreDiscriminator: boolean): CollectionMeta {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'pagination': !exists(json, 'pagination') ? undefined : Pagination1FromJSON(json['pagination']),
    };
}

export function CollectionMetaToJSON(value?: CollectionMeta | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'pagination': Pagination1ToJSON(value.pagination),
    };
}


