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
    WidgetSchemaSettingBase,
    WidgetSchemaSettingBaseFromJSON,
    WidgetSchemaSettingBaseFromJSONTyped,
    WidgetSchemaSettingBaseToJSON,
} from './';

/**
 * 
 * @export
 * @interface WidgetSchemaTabSections
 */
export interface WidgetSchemaTabSections {
    /**
     * 
     * @type {string}
     * @memberof WidgetSchemaTabSections
     */
    label?: string;
    /**
     * For examples of each type of setting, see [Page Builder > Schema Settings](https://developer.bigcommerce.com/stencil-docs/page-builder/schema-settings/alignment) in Theme Docs.
     * @type {Array<WidgetSchemaSettingBase>}
     * @memberof WidgetSchemaTabSections
     */
    settings?: Array<WidgetSchemaSettingBase>;
}

export function WidgetSchemaTabSectionsFromJSON(json: any): WidgetSchemaTabSections {
    return WidgetSchemaTabSectionsFromJSONTyped(json, false);
}

export function WidgetSchemaTabSectionsFromJSONTyped(json: any, ignoreDiscriminator: boolean): WidgetSchemaTabSections {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'label': !exists(json, 'label') ? undefined : json['label'],
        'settings': !exists(json, 'settings') ? undefined : ((json['settings'] as Array<any>).map(WidgetSchemaSettingBaseFromJSON)),
    };
}

export function WidgetSchemaTabSectionsToJSON(value?: WidgetSchemaTabSections | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'label': value.label,
        'settings': value.settings === undefined ? undefined : ((value.settings as Array<any>).map(WidgetSchemaSettingBaseToJSON)),
    };
}


