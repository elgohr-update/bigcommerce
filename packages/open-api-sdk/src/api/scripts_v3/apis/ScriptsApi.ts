/* tslint:disable */
/* eslint-disable */
/**
 * Scripts
 * Inject client-side code onto a BigCommere storefront. To learn more about scripts, see [Scripts API](/api-docs/store-management/scripts).   - [OAuth Scopes](#oauth-scopes) - [Authentication](#authentication) - [Available Endpoints](#available-endpoints)  ## OAuth Scopes | UI Name                                      | Permission | Parameter                                     | |----------------------------------------------|------------|-----------------------------------------------| | Checkout Content<sup>1</sup>                             | modify     | `store_content_checkout`                      | | Checkout Content<sup>1</sup>                             | read-only  | `store_content_checkout_read_only`            | | Content                                       | modify     | `store_v2_content`                            | | Content                                       | read-only  | `store_v2_content_read_only`                  |  1. `Checkout Content` scopes are required to create or read scripts on the checkout page.  For more information on OAuth Scopes, see [Authentication](https://developer.bigcommerce.com/api-docs/getting-started/authentication).  ## Authentication  Requests can be authenticated by sending an`access_token` via `X-Auth-Token` HTTP header:  ```http GET /stores/{$$.env.store_hash}/v3/catalog/summary host: api.bigcommerce.com Accept: application/json X-Auth-Token: {access_token} ```  |Header|Parameter|Description| |-|-|-| |`X-Auth-Token`|`access_token`|Obtained by creating an API account or installing an app in a BigCommerce control panel.|  For more information on Authenticating BigCommerce APIs, see [Authentication](https://developer.bigcommerce.com/api-docs/getting-started/authentication).  ## Available Endpoints | Resource / Endpoint                     | Description                                                             | |-----------------------------------------|-------------------------------------------------------------------------| | Scripts                                 | Add client-side code to a store                                         |
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
    ErrorResponse,
    ErrorResponseFromJSON,
    ErrorResponseToJSON,
    NoContent,
    NoContentFromJSON,
    NoContentToJSON,
    ScriptPost,
    ScriptPostFromJSON,
    ScriptPostToJSON,
    ScriptPut,
    ScriptPutFromJSON,
    ScriptPutToJSON,
    ScriptResponse,
    ScriptResponseFromJSON,
    ScriptResponseToJSON,
    ScriptsResponse,
    ScriptsResponseFromJSON,
    ScriptsResponseToJSON,
} from '../models';

export interface CreateScriptRequest {
    accept: string;
    contentType: string;
    scriptBody: ScriptPost;
}

export interface DeleteScriptRequest {
    uuid: string;
    accept: string;
    contentType: string;
}

export interface GetScriptRequest {
    uuid: string;
    accept: string;
    contentType: string;
}

export interface GetScriptsRequest {
    accept: string;
    contentType: string;
    page?: number;
    limit?: number;
    sort?: GetScriptsSortEnum;
    direction?: GetScriptsDirectionEnum;
    channelIdin?: Array<string>;
}

export interface UpdateScriptRequest {
    uuid: string;
    contentType: string;
    accept: string;
    scriptBody: ScriptPut;
}

/**
 * 
 */
export class ScriptsApi extends runtime.BaseAPI {

    /**
     * Creates a *Script*.  **Required Fields** * name  **Read Only Fields** * uuid  **Notes** * If kind is `src` –- Only the `src` property is needed, and you can optionally supply a `load_method`. The `html` field should not be specified. * If kind is `script_tag` -- Only the `script_tag` is needed. The `src` field should not be specified. * Each app can have 10 scripts installed. * Multiple scripts can be created [per call](https://developer.bigcommerce.com/api-docs/store-management/scripts#notes). 
     * Create a Script
     */
    async createScriptRaw(requestParameters: CreateScriptRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<ScriptResponse>> {
        if (requestParameters.accept === null || requestParameters.accept === undefined) {
            throw new runtime.RequiredError('accept','Required parameter requestParameters.accept was null or undefined when calling createScript.');
        }

        if (requestParameters.contentType === null || requestParameters.contentType === undefined) {
            throw new runtime.RequiredError('contentType','Required parameter requestParameters.contentType was null or undefined when calling createScript.');
        }

        if (requestParameters.scriptBody === null || requestParameters.scriptBody === undefined) {
            throw new runtime.RequiredError('scriptBody','Required parameter requestParameters.scriptBody was null or undefined when calling createScript.');
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
            path: `/content/scripts`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: ScriptPostToJSON(requestParameters.scriptBody),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ScriptResponseFromJSON(jsonValue));
    }

    /**
     * Creates a *Script*.  **Required Fields** * name  **Read Only Fields** * uuid  **Notes** * If kind is `src` –- Only the `src` property is needed, and you can optionally supply a `load_method`. The `html` field should not be specified. * If kind is `script_tag` -- Only the `script_tag` is needed. The `src` field should not be specified. * Each app can have 10 scripts installed. * Multiple scripts can be created [per call](https://developer.bigcommerce.com/api-docs/store-management/scripts#notes). 
     * Create a Script
     */
    async createScript(requestParameters: CreateScriptRequest, initOverrides?: RequestInit): Promise<ScriptResponse> {
        const response = await this.createScriptRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Deletes a *Script*.
     * Delete a Script
     */
    async deleteScriptRaw(requestParameters: DeleteScriptRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<NoContent>> {
        if (requestParameters.uuid === null || requestParameters.uuid === undefined) {
            throw new runtime.RequiredError('uuid','Required parameter requestParameters.uuid was null or undefined when calling deleteScript.');
        }

        if (requestParameters.accept === null || requestParameters.accept === undefined) {
            throw new runtime.RequiredError('accept','Required parameter requestParameters.accept was null or undefined when calling deleteScript.');
        }

        if (requestParameters.contentType === null || requestParameters.contentType === undefined) {
            throw new runtime.RequiredError('contentType','Required parameter requestParameters.contentType was null or undefined when calling deleteScript.');
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
            path: `/content/scripts/{uuid}`.replace(`{${"uuid"}}`, encodeURIComponent(String(requestParameters.uuid))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => NoContentFromJSON(jsonValue));
    }

    /**
     * Deletes a *Script*.
     * Delete a Script
     */
    async deleteScript(requestParameters: DeleteScriptRequest, initOverrides?: RequestInit): Promise<NoContent> {
        const response = await this.deleteScriptRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Returns a single *Script*.
     * Get a Script
     */
    async getScriptRaw(requestParameters: GetScriptRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<ScriptResponse>> {
        if (requestParameters.uuid === null || requestParameters.uuid === undefined) {
            throw new runtime.RequiredError('uuid','Required parameter requestParameters.uuid was null or undefined when calling getScript.');
        }

        if (requestParameters.accept === null || requestParameters.accept === undefined) {
            throw new runtime.RequiredError('accept','Required parameter requestParameters.accept was null or undefined when calling getScript.');
        }

        if (requestParameters.contentType === null || requestParameters.contentType === undefined) {
            throw new runtime.RequiredError('contentType','Required parameter requestParameters.contentType was null or undefined when calling getScript.');
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
            path: `/content/scripts/{uuid}`.replace(`{${"uuid"}}`, encodeURIComponent(String(requestParameters.uuid))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ScriptResponseFromJSON(jsonValue));
    }

    /**
     * Returns a single *Script*.
     * Get a Script
     */
    async getScript(requestParameters: GetScriptRequest, initOverrides?: RequestInit): Promise<ScriptResponse> {
        const response = await this.getScriptRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Returns a list of *Scripts*. Optional parameters can be passed in.  This operation will only return scripts generated by the API key and password used to create the script originally. 
     * Get All Scripts
     */
    async getScriptsRaw(requestParameters: GetScriptsRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<ScriptsResponse>> {
        if (requestParameters.accept === null || requestParameters.accept === undefined) {
            throw new runtime.RequiredError('accept','Required parameter requestParameters.accept was null or undefined when calling getScripts.');
        }

        if (requestParameters.contentType === null || requestParameters.contentType === undefined) {
            throw new runtime.RequiredError('contentType','Required parameter requestParameters.contentType was null or undefined when calling getScripts.');
        }

        const queryParameters: any = {};

        if (requestParameters.page !== undefined) {
            queryParameters['page'] = requestParameters.page;
        }

        if (requestParameters.limit !== undefined) {
            queryParameters['limit'] = requestParameters.limit;
        }

        if (requestParameters.sort !== undefined) {
            queryParameters['sort'] = requestParameters.sort;
        }

        if (requestParameters.direction !== undefined) {
            queryParameters['direction'] = requestParameters.direction;
        }

        if (requestParameters.channelIdin) {
            queryParameters['channel_id:in'] = requestParameters.channelIdin.join(runtime.COLLECTION_FORMATS["csv"]);
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
            path: `/content/scripts`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ScriptsResponseFromJSON(jsonValue));
    }

    /**
     * Returns a list of *Scripts*. Optional parameters can be passed in.  This operation will only return scripts generated by the API key and password used to create the script originally. 
     * Get All Scripts
     */
    async getScripts(requestParameters: GetScriptsRequest, initOverrides?: RequestInit): Promise<ScriptsResponse> {
        const response = await this.getScriptsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Updates a *Script*.
     * Update a Script
     */
    async updateScriptRaw(requestParameters: UpdateScriptRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<ScriptResponse>> {
        if (requestParameters.uuid === null || requestParameters.uuid === undefined) {
            throw new runtime.RequiredError('uuid','Required parameter requestParameters.uuid was null or undefined when calling updateScript.');
        }

        if (requestParameters.contentType === null || requestParameters.contentType === undefined) {
            throw new runtime.RequiredError('contentType','Required parameter requestParameters.contentType was null or undefined when calling updateScript.');
        }

        if (requestParameters.accept === null || requestParameters.accept === undefined) {
            throw new runtime.RequiredError('accept','Required parameter requestParameters.accept was null or undefined when calling updateScript.');
        }

        if (requestParameters.scriptBody === null || requestParameters.scriptBody === undefined) {
            throw new runtime.RequiredError('scriptBody','Required parameter requestParameters.scriptBody was null or undefined when calling updateScript.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (requestParameters.contentType !== undefined && requestParameters.contentType !== null) {
            headerParameters['Content-Type'] = String(requestParameters.contentType);
        }

        if (requestParameters.accept !== undefined && requestParameters.accept !== null) {
            headerParameters['Accept'] = String(requestParameters.accept);
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-Auth-Token"] = this.configuration.apiKey("X-Auth-Token"); // X-Auth-Token authentication
        }

        const response = await this.request({
            path: `/content/scripts/{uuid}`.replace(`{${"uuid"}}`, encodeURIComponent(String(requestParameters.uuid))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: ScriptPutToJSON(requestParameters.scriptBody),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ScriptResponseFromJSON(jsonValue));
    }

    /**
     * Updates a *Script*.
     * Update a Script
     */
    async updateScript(requestParameters: UpdateScriptRequest, initOverrides?: RequestInit): Promise<ScriptResponse> {
        const response = await this.updateScriptRaw(requestParameters, initOverrides);
        return await response.value();
    }

}

/**
    * @export
    * @enum {string}
    */
export enum GetScriptsSortEnum {
    Name = 'name',
    Description = 'description',
    DateCreated = 'date_created',
    DateModified = 'date_modified'
}
/**
    * @export
    * @enum {string}
    */
export enum GetScriptsDirectionEnum {
    Asc = 'asc',
    Desc = 'desc'
}
