/* tslint:disable */
/* eslint-disable */
/**
 * Widgets
 * Create and manage widget templates, widgets, regions, and placements.  - [Authentication](#authentication) - [Subresources](#subresources) - [Additional Information](#additional-information)  ## Authentication  [Authenticate](https://developer.bigcommerce.com/api-docs/getting-started/authentication) requests by including an OAuth `access_token` in the request header.  ```http GET https://api.bigcommerce.com/stores/{{STORE_HASH}}/v3/{{ENDPOINT}} Content-Type: application/json X-Auth-Token: {{ACCESS_TOKEN}} ```  ### OAuth scopes |  **UI Name** | **Permission** | **Parameter** | | --- | --- | --- | |  Content | modify | `store_v2_content` | |  Content | read-only | `store_v2_content_read_only` |  For more information on OAuth scopes, see [Authenticating BigCommerce\'s REST APIs](https://developer.bigcommerce.com/api-docs/getting-started/authentication/rest-api-authentication#oauth-scopes).  ## Subresources  ### Widget templates [Widget templates](https://developer.bigcommerce.com/api-reference/store-management/widgets/widget-template/getwidgettemplates) are reusable Handlebars-enabled HTML templates that define the structure of the widget on a page.  ### Widgets [Widgets](https://developer.bigcommerce.com/api-reference/store-management/widgets/widget/getwidgets) are units of content placed on specific pages in a Stencil theme. Widgets consist of a widget configuration and a widget template UUID and render as part of the storefront’s HTML.  ### Regions [Regions](https://developer.bigcommerce.com/api-reference/store-management/widgets/regions/getcontentregions) are specific locations in the Stencil theme template files where you can place a widget.  ### Placements [Placements](https://developer.bigcommerce.com/api-reference/store-management/widgets/placement/getplacements) determine the region where you place widgets and in what order.  ## Additional Information  * [Widgets API Overview](https://developer.bigcommerce.com/api-docs/store-management/widgets/overview) * [Widget UI Schema](https://developer.bigcommerce.com/stencil-docs/page-builder/widget-ui-schema) * [Widget UI Input Types](https://developer.bigcommerce.com/stencil-docs/page-builder/schema-settings)
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
    WidgetTemplateFull,
    WidgetTemplateFullFromJSON,
    WidgetTemplateFullFromJSONTyped,
    WidgetTemplateFullToJSON,
} from './';

/**
 * 
 * @export
 * @interface WidgetFullAllOf
 */
export interface WidgetFullAllOf {
    /**
     * The primary identifier.
     * @type {string}
     * @memberof WidgetFullAllOf
     */
    uuid?: string;
    /**
     * 
     * @type {WidgetTemplateFull}
     * @memberof WidgetFullAllOf
     */
    widgetTemplate?: WidgetTemplateFull;
    /**
     * The date on which this object was initially created.
     * @type {string}
     * @memberof WidgetFullAllOf
     */
    dateCreated?: string;
    /**
     * The date on which this object was last updated.
     * @type {string}
     * @memberof WidgetFullAllOf
     */
    dateModified?: string;
    /**
     * The identifier of the widget template version associated with this widget.
     * @type {string}
     * @memberof WidgetFullAllOf
     */
    versionUuid?: string;
}

export function WidgetFullAllOfFromJSON(json: any): WidgetFullAllOf {
    return WidgetFullAllOfFromJSONTyped(json, false);
}

export function WidgetFullAllOfFromJSONTyped(json: any, ignoreDiscriminator: boolean): WidgetFullAllOf {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'uuid': !exists(json, 'uuid') ? undefined : json['uuid'],
        'widgetTemplate': !exists(json, 'widget_template') ? undefined : WidgetTemplateFullFromJSON(json['widget_template']),
        'dateCreated': !exists(json, 'date_created') ? undefined : json['date_created'],
        'dateModified': !exists(json, 'date_modified') ? undefined : json['date_modified'],
        'versionUuid': !exists(json, 'version_uuid') ? undefined : json['version_uuid'],
    };
}

export function WidgetFullAllOfToJSON(value?: WidgetFullAllOf | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'uuid': value.uuid,
        'widget_template': WidgetTemplateFullToJSON(value.widgetTemplate),
        'date_created': value.dateCreated,
        'date_modified': value.dateModified,
        'version_uuid': value.versionUuid,
    };
}


