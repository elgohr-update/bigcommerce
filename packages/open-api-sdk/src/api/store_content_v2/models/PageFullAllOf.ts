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
 * @interface PageFullAllOf
 */
export interface PageFullAllOf {
    /**
     * ID of the page.
     * @type {number}
     * @memberof PageFullAllOf
     */
    id?: number;
}

export function PageFullAllOfFromJSON(json: any): PageFullAllOf {
    return PageFullAllOfFromJSONTyped(json, false);
}

export function PageFullAllOfFromJSONTyped(json: any, ignoreDiscriminator: boolean): PageFullAllOf {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
    };
}

export function PageFullAllOfToJSON(value?: PageFullAllOf | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
    };
}


