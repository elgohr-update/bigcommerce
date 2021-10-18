/* tslint:disable */
/* eslint-disable */
/**
 * Content
 * Manage blog posts, blog tags, content pages, and redirects.  <div class=\"HubBlock--callout\"> <div class=\"CalloutBlock--warning\"> <div class=\"HubBlock-content\">  ### Note * Redirects V2 are deprecated; use [V3 Redirects](https://developer.bigcommerce.com/api-reference/storefront/redirects/redirects/getredirects) instead. * Pages V2 are deprecated; use [Pages V3](https://developer.bigcommerce.com/api-reference/store-management/pages) instead.   </div> </div> </div>
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
 * @interface PublishedDate
 */
export interface PublishedDate {
    /**
     * 
     * @type {string}
     * @memberof PublishedDate
     */
    timezoneType?: string;
    /**
     * 
     * @type {Date}
     * @memberof PublishedDate
     */
    date?: Date;
    /**
     * 
     * @type {string}
     * @memberof PublishedDate
     */
    timezone?: string;
}

export function PublishedDateFromJSON(json: any): PublishedDate {
    return PublishedDateFromJSONTyped(json, false);
}

export function PublishedDateFromJSONTyped(json: any, ignoreDiscriminator: boolean): PublishedDate {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'timezoneType': !exists(json, 'timezone_type') ? undefined : json['timezone_type'],
        'date': !exists(json, 'date') ? undefined : (new Date(json['date'])),
        'timezone': !exists(json, 'timezone') ? undefined : json['timezone'],
    };
}

export function PublishedDateToJSON(value?: PublishedDate | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'timezone_type': value.timezoneType,
        'date': value.date === undefined ? undefined : (value.date.toISOString()),
        'timezone': value.timezone,
    };
}


