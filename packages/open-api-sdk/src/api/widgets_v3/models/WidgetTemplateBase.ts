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
 * @interface WidgetTemplateBase
 */
export interface WidgetTemplateBase {
    /**
     * The user-friendly name.
     * @type {string}
     * @memberof WidgetTemplateBase
     */
    name?: string;
    /**
     * The schema for the widget's merchant-facing UI. For more information on the available schema settings, see [Widget UI Schema](https://developer.bigcommerce.com/stencil-docs/page-builder/widget-ui-schema). 
     * @type {Array<object>}
     * @memberof WidgetTemplateBase
     */
    schema?: Array<object>;
    /**
     * The widget template HTML. Supports Handlebars and Paper helpers.
     * @type {string}
     * @memberof WidgetTemplateBase
     */
    template?: string;
    /**
     * The GraphQL Storefront API query that provides widget data.
     * @type {string}
     * @memberof WidgetTemplateBase
     */
    storefrontApiQuery?: string;
}

export function WidgetTemplateBaseFromJSON(json: any): WidgetTemplateBase {
    return WidgetTemplateBaseFromJSONTyped(json, false);
}

export function WidgetTemplateBaseFromJSONTyped(json: any, ignoreDiscriminator: boolean): WidgetTemplateBase {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'name': !exists(json, 'name') ? undefined : json['name'],
        'schema': !exists(json, 'schema') ? undefined : json['schema'],
        'template': !exists(json, 'template') ? undefined : json['template'],
        'storefrontApiQuery': !exists(json, 'storefront_api_query') ? undefined : json['storefront_api_query'],
    };
}

export function WidgetTemplateBaseToJSON(value?: WidgetTemplateBase | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'name': value.name,
        'schema': value.schema,
        'template': value.template,
        'storefront_api_query': value.storefrontApiQuery,
    };
}


