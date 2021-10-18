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
    JobErrors,
    JobErrorsFromJSON,
    JobErrorsFromJSONTyped,
    JobErrorsToJSON,
    JobWarnings,
    JobWarningsFromJSON,
    JobWarningsFromJSONTyped,
    JobWarningsToJSON,
} from './';

/**
 * The job for theme upload or download
 * @export
 * @interface Job1
 */
export interface Job1 {
    /**
     * The errors.
     * @type {Array<JobErrors>}
     * @memberof Job1
     */
    errors?: Array<JobErrors>;
    /**
     * The identifier.
     * @type {string}
     * @memberof Job1
     */
    id?: string;
    /**
     * The percent complete.
     * @type {number}
     * @memberof Job1
     */
    percentComplete?: number;
    /**
     * The result.
     * @type {{ [key: string]: string; }}
     * @memberof Job1
     */
    result?: { [key: string]: string; };
    /**
     * The status.
     * @type {string}
     * @memberof Job1
     */
    status?: Job1StatusEnum;
    /**
     * The time.
     * @type {Date}
     * @memberof Job1
     */
    time?: Date;
    /**
     * The warnings.
     * @type {Array<JobWarnings>}
     * @memberof Job1
     */
    warnings?: Array<JobWarnings>;
}

/**
* @export
* @enum {string}
*/
export enum Job1StatusEnum {
    Completed = 'COMPLETED',
    Queued = 'QUEUED',
    Working = 'WORKING',
    Failed = 'FAILED'
}

export function Job1FromJSON(json: any): Job1 {
    return Job1FromJSONTyped(json, false);
}

export function Job1FromJSONTyped(json: any, ignoreDiscriminator: boolean): Job1 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'errors': !exists(json, 'errors') ? undefined : ((json['errors'] as Array<any>).map(JobErrorsFromJSON)),
        'id': !exists(json, 'id') ? undefined : json['id'],
        'percentComplete': !exists(json, 'percent_complete') ? undefined : json['percent_complete'],
        'result': !exists(json, 'result') ? undefined : json['result'],
        'status': !exists(json, 'status') ? undefined : json['status'],
        'time': !exists(json, 'time') ? undefined : (new Date(json['time'])),
        'warnings': !exists(json, 'warnings') ? undefined : ((json['warnings'] as Array<any>).map(JobWarningsFromJSON)),
    };
}

export function Job1ToJSON(value?: Job1 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'errors': value.errors === undefined ? undefined : ((value.errors as Array<any>).map(JobErrorsToJSON)),
        'id': value.id,
        'percent_complete': value.percentComplete,
        'result': value.result,
        'status': value.status,
        'time': value.time === undefined ? undefined : (value.time.toISOString()),
        'warnings': value.warnings === undefined ? undefined : ((value.warnings as Array<any>).map(JobWarningsToJSON)),
    };
}


