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
/**
 * 
 * @export
 * @interface WidgetPutAllOf
 */
export interface WidgetPutAllOf {
    /**
     * The widget template UUID.
     * @type {string}
     * @memberof WidgetPutAllOf
     */
    widgetTemplateUuid?: string;
}

export function WidgetPutAllOfFromJSON(json: any): WidgetPutAllOf {
    return WidgetPutAllOfFromJSONTyped(json, false);
}

export function WidgetPutAllOfFromJSONTyped(json: any, ignoreDiscriminator: boolean): WidgetPutAllOf {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'widgetTemplateUuid': !exists(json, 'widget_template_uuid') ? undefined : json['widget_template_uuid'],
    };
}

export function WidgetPutAllOfToJSON(value?: WidgetPutAllOf | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'widget_template_uuid': value.widgetTemplateUuid,
    };
}


