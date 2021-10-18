/* tslint:disable */
/* eslint-disable */
/**
 * Pages V3
 * Manage content pages across multiple sites.
 *
 * The version of the OpenAPI document: 3.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import {
    PageAllOf,
    PageAllOfFromJSON,
    PageAllOfFromJSONTyped,
    PageAllOfToJSON,
    PageBase,
    PageBaseFromJSON,
    PageBaseFromJSONTyped,
    PageBaseToJSON,
} from './';

/**
 * 
 * @export
 * @interface Page
 */
export interface Page {
    /**
     * Where the page’s type is a contact form: contact email address that receives messages sent via the form. Must be unique.
     * @type {string}
     * @memberof Page
     */
    email?: string;
    /**
     * 
     * @type {string}
     * @memberof Page
     */
    metaTitle?: string;
    /**
     * HTML or variable that populates this page’s  element, in default/desktop view. Required in a `POST` request if the page type is `raw`.
     * @type {string}
     * @memberof Page
     */
    body?: string;
    /**
     * The URL of the RSS feed. Required in a `POST` request if the page type is `rss_feed`.
     * @type {string}
     * @memberof Page
     */
    feed?: string;
    /**
     * Required in a `POST` request to create a link if the page type is `link`.
     * @type {string}
     * @memberof Page
     */
    link?: string;
    /**
     * Where the page’s type is `contact_form`: comma-separated list of keywords representing the fields enabled in the control panel for storefront display. Possible fields include:
     * 
     * |Field|Description|
     * |-|-|
     * |`fullname`|Full name of the customer submitting the form|
     * |`phone`|Customer’s phone number, as submitted on the form|
     * |`companyname`|Customer’s submitted company name|
     * |`orderno`|Customer’s submitted order number|
     * |`rma`|Customer’s submitted RMA (Return Merchandise Authorization) number|
     * @type {string}
     * @memberof Page
     */
    contactFields?: string;
    /**
     * Comma-separated list of SEO-relevant keywords to include in the page’s  element.
     * @type {string}
     * @memberof Page
     */
    metaKeywords?: string;
    /**
     * Description contained within this page’s  element.
     * @type {string}
     * @memberof Page
     */
    metaDescription?: string;
    /**
     * Comma-separated list of keywords that shoppers can use to locate this page when searching the store.
     * @type {string}
     * @memberof Page
     */
    searchKeywords?: string;
    /**
     * Relative URL on the storefront for this page.
     * @type {string}
     * @memberof Page
     */
    url?: string;
    /**
     * The Id of the channel where this page should be shown.
     * @type {number}
     * @memberof Page
     */
    channelId?: number;
    /**
     * The name of the page. Must be unique.
     * @type {string}
     * @memberof Page
     */
    name: string;
    /**
     * Determines the visibility of the page in the storefront’s navigation menu.
     * @type {boolean}
     * @memberof Page
     */
    isVisible?: boolean;
    /**
     * ID of any parent Web page.
     * @type {number}
     * @memberof Page
     */
    parentId?: number;
    /**
     * Determines the order in which the page is displayed on the storefront. (Lower integers specify earlier display.)
     * @type {number}
     * @memberof Page
     */
    sortOrder?: number;
    /**
     * Determines the type of the page.
     * 
     * |Value|Description|
     * |-|-|
     * |`contact_form`|when the store’s contact form is used|
     * |`link`|link to another web address|
     * |`page`|free-text page|
     * |`raw`|raw page|
     * |`rss_feed`|syndicated content from an RSS feed|
     * @type {string}
     * @memberof Page
     */
    type: string;
    /**
     * Determines whether this page is the storefront’s home page.
     * @type {boolean}
     * @memberof Page
     */
    isHomepage?: boolean;
    /**
     * If `true`, this will be displayed as a home page.
     * @type {boolean}
     * @memberof Page
     */
    isCustomersOnly?: boolean;
}

export function PageFromJSON(json: any): Page {
    return PageFromJSONTyped(json, false);
}

export function PageFromJSONTyped(json: any, ignoreDiscriminator: boolean): Page {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'email': !exists(json, 'email') ? undefined : json['email'],
        'metaTitle': !exists(json, 'meta_title') ? undefined : json['meta_title'],
        'body': !exists(json, 'body') ? undefined : json['body'],
        'feed': !exists(json, 'feed') ? undefined : json['feed'],
        'link': !exists(json, 'link') ? undefined : json['link'],
        'contactFields': !exists(json, 'contact_fields') ? undefined : json['contact_fields'],
        'metaKeywords': !exists(json, 'meta_keywords') ? undefined : json['meta_keywords'],
        'metaDescription': !exists(json, 'meta_description') ? undefined : json['meta_description'],
        'searchKeywords': !exists(json, 'search_keywords') ? undefined : json['search_keywords'],
        'url': !exists(json, 'url') ? undefined : json['url'],
        'channelId': !exists(json, 'channel_id') ? undefined : json['channel_id'],
        'name': json['name'],
        'isVisible': !exists(json, 'is_visible') ? undefined : json['is_visible'],
        'parentId': !exists(json, 'parent_id') ? undefined : json['parent_id'],
        'sortOrder': !exists(json, 'sort_order') ? undefined : json['sort_order'],
        'type': json['type'],
        'isHomepage': !exists(json, 'is_homepage') ? undefined : json['is_homepage'],
        'isCustomersOnly': !exists(json, 'is_customers_only') ? undefined : json['is_customers_only'],
    };
}

export function PageToJSON(value?: Page | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'email': value.email,
        'meta_title': value.metaTitle,
        'body': value.body,
        'feed': value.feed,
        'link': value.link,
        'contact_fields': value.contactFields,
        'meta_keywords': value.metaKeywords,
        'meta_description': value.metaDescription,
        'search_keywords': value.searchKeywords,
        'url': value.url,
        'channel_id': value.channelId,
        'name': value.name,
        'is_visible': value.isVisible,
        'parent_id': value.parentId,
        'sort_order': value.sortOrder,
        'type': value.type,
        'is_homepage': value.isHomepage,
        'is_customers_only': value.isCustomersOnly,
    };
}


