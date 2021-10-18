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


import * as runtime from '../runtime';
import {
    ErrorBase,
    ErrorBaseFromJSON,
    ErrorBaseToJSON,
    InlineResponse200,
    InlineResponse200FromJSON,
    InlineResponse200ToJSON,
    WidgetTemplatePost,
    WidgetTemplatePostFromJSON,
    WidgetTemplatePostToJSON,
    WidgetTemplatePut,
    WidgetTemplatePutFromJSON,
    WidgetTemplatePutToJSON,
} from '../models';

export interface CreateWidgetTemplateRequest {
    templateBody: WidgetTemplatePost;
    accept?: string;
    contentType?: string;
}

export interface DeleteWidgetTemplateRequest {
    uuid: string;
    accept?: string;
    contentType?: string;
}

export interface GetWidgetTemplateRequest {
    uuid: string;
    accept?: string;
    contentType?: string;
}

export interface GetWidgetTemplatesRequest {
    page?: number;
    limit?: number;
    widgetTemplateKind?: string;
    accept?: string;
    contentType?: string;
    channelId?: number;
}

export interface UpdateWidgetTemplateRequest {
    uuid: string;
    templateBody: WidgetTemplatePut;
    accept?: string;
    contentType?: string;
}

/**
 * 
 */
export class WidgetTemplateApi extends runtime.BaseAPI {

    /**
     * Creates a **Widget Template**.  ***Note:*** *There is a limit of 100 custom widget templates per store.*  **Required Fields** * name * template
     * Create a Widget Template
     */
    async createWidgetTemplateRaw(requestParameters: CreateWidgetTemplateRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<object>> {
        if (requestParameters.templateBody === null || requestParameters.templateBody === undefined) {
            throw new runtime.RequiredError('templateBody','Required parameter requestParameters.templateBody was null or undefined when calling createWidgetTemplate.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (requestParameters.accept !== undefined && requestParameters.accept !== null) {
            headerParameters['Accept'] = String(requestParameters.accept);
        }

        if (requestParameters.contentType !== undefined && requestParameters.contentType !== null) {
            headerParameters['Content-Type'] = String(requestParameters.contentType);
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-Auth-Token"] = this.configuration.apiKey("X-Auth-Token"); // X-Auth-Token authentication
        }

        const response = await this.request({
            path: `/content/widget-templates`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: WidgetTemplatePostToJSON(requestParameters.templateBody),
        }, initOverrides);

        return new runtime.JSONApiResponse<any>(response);
    }

    /**
     * Creates a **Widget Template**.  ***Note:*** *There is a limit of 100 custom widget templates per store.*  **Required Fields** * name * template
     * Create a Widget Template
     */
    async createWidgetTemplate(requestParameters: CreateWidgetTemplateRequest, initOverrides?: RequestInit): Promise<object> {
        const response = await this.createWidgetTemplateRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Deletes a **Widget Template**.
     * Delete A Widget Template
     */
    async deleteWidgetTemplateRaw(requestParameters: DeleteWidgetTemplateRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.uuid === null || requestParameters.uuid === undefined) {
            throw new runtime.RequiredError('uuid','Required parameter requestParameters.uuid was null or undefined when calling deleteWidgetTemplate.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters.accept !== undefined && requestParameters.accept !== null) {
            headerParameters['Accept'] = String(requestParameters.accept);
        }

        if (requestParameters.contentType !== undefined && requestParameters.contentType !== null) {
            headerParameters['Content-Type'] = String(requestParameters.contentType);
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-Auth-Token"] = this.configuration.apiKey("X-Auth-Token"); // X-Auth-Token authentication
        }

        const response = await this.request({
            path: `/content/widget-templates/{uuid}`.replace(`{${"uuid"}}`, encodeURIComponent(String(requestParameters.uuid))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Deletes a **Widget Template**.
     * Delete A Widget Template
     */
    async deleteWidgetTemplate(requestParameters: DeleteWidgetTemplateRequest, initOverrides?: RequestInit): Promise<void> {
        await this.deleteWidgetTemplateRaw(requestParameters, initOverrides);
    }

    /**
     * Returns a single **Widget Template**.
     * Get a Widget Template
     */
    async getWidgetTemplateRaw(requestParameters: GetWidgetTemplateRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<object>> {
        if (requestParameters.uuid === null || requestParameters.uuid === undefined) {
            throw new runtime.RequiredError('uuid','Required parameter requestParameters.uuid was null or undefined when calling getWidgetTemplate.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters.accept !== undefined && requestParameters.accept !== null) {
            headerParameters['Accept'] = String(requestParameters.accept);
        }

        if (requestParameters.contentType !== undefined && requestParameters.contentType !== null) {
            headerParameters['Content-Type'] = String(requestParameters.contentType);
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-Auth-Token"] = this.configuration.apiKey("X-Auth-Token"); // X-Auth-Token authentication
        }

        const response = await this.request({
            path: `/content/widget-templates/{uuid}`.replace(`{${"uuid"}}`, encodeURIComponent(String(requestParameters.uuid))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse<any>(response);
    }

    /**
     * Returns a single **Widget Template**.
     * Get a Widget Template
     */
    async getWidgetTemplate(requestParameters: GetWidgetTemplateRequest, initOverrides?: RequestInit): Promise<object> {
        const response = await this.getWidgetTemplateRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Returns a list of **Widget Templates**.
     * Get All Widget Templates
     */
    async getWidgetTemplatesRaw(requestParameters: GetWidgetTemplatesRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<InlineResponse200>> {
        const queryParameters: any = {};

        if (requestParameters.page !== undefined) {
            queryParameters['page'] = requestParameters.page;
        }

        if (requestParameters.limit !== undefined) {
            queryParameters['limit'] = requestParameters.limit;
        }

        if (requestParameters.widgetTemplateKind !== undefined) {
            queryParameters['widget_template_kind'] = requestParameters.widgetTemplateKind;
        }

        if (requestParameters.channelId !== undefined) {
            queryParameters['channel_id'] = requestParameters.channelId;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters.accept !== undefined && requestParameters.accept !== null) {
            headerParameters['Accept'] = String(requestParameters.accept);
        }

        if (requestParameters.contentType !== undefined && requestParameters.contentType !== null) {
            headerParameters['Content-Type'] = String(requestParameters.contentType);
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-Auth-Token"] = this.configuration.apiKey("X-Auth-Token"); // X-Auth-Token authentication
        }

        const response = await this.request({
            path: `/content/widget-templates`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => InlineResponse200FromJSON(jsonValue));
    }

    /**
     * Returns a list of **Widget Templates**.
     * Get All Widget Templates
     */
    async getWidgetTemplates(requestParameters: GetWidgetTemplatesRequest, initOverrides?: RequestInit): Promise<InlineResponse200> {
        const response = await this.getWidgetTemplatesRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Updates a **Widget Template**.
     * Update a Widget Template
     */
    async updateWidgetTemplateRaw(requestParameters: UpdateWidgetTemplateRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<object>> {
        if (requestParameters.uuid === null || requestParameters.uuid === undefined) {
            throw new runtime.RequiredError('uuid','Required parameter requestParameters.uuid was null or undefined when calling updateWidgetTemplate.');
        }

        if (requestParameters.templateBody === null || requestParameters.templateBody === undefined) {
            throw new runtime.RequiredError('templateBody','Required parameter requestParameters.templateBody was null or undefined when calling updateWidgetTemplate.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (requestParameters.accept !== undefined && requestParameters.accept !== null) {
            headerParameters['Accept'] = String(requestParameters.accept);
        }

        if (requestParameters.contentType !== undefined && requestParameters.contentType !== null) {
            headerParameters['Content-Type'] = String(requestParameters.contentType);
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-Auth-Token"] = this.configuration.apiKey("X-Auth-Token"); // X-Auth-Token authentication
        }

        const response = await this.request({
            path: `/content/widget-templates/{uuid}`.replace(`{${"uuid"}}`, encodeURIComponent(String(requestParameters.uuid))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: WidgetTemplatePutToJSON(requestParameters.templateBody),
        }, initOverrides);

        return new runtime.JSONApiResponse<any>(response);
    }

    /**
     * Updates a **Widget Template**.
     * Update a Widget Template
     */
    async updateWidgetTemplate(requestParameters: UpdateWidgetTemplateRequest, initOverrides?: RequestInit): Promise<object> {
        const response = await this.updateWidgetTemplateRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
