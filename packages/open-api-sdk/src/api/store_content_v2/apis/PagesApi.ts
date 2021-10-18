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


import * as runtime from '../runtime';
import {
    PageBase,
    PageBaseFromJSON,
    PageBaseToJSON,
    PageFull,
    PageFullFromJSON,
    PageFullToJSON,
} from '../models';

export interface CreateAPageRequest {
    accept: string;
    contentType: string;
    body: PageBase;
}

export interface DeleteAPageRequest {
    id: number;
    accept: string;
    contentType: string;
}

export interface GetAPageRequest {
    id: number;
    accept: string;
    contentType: string;
}

export interface GetAllPagesRequest {
    accept: string;
    contentType: string;
    page?: number;
    limit?: number;
}

export interface UpdateAPageRequest {
    id: string;
    accept?: string;
    contentType?: string;
    body?: PageBase;
}

/**
 * 
 */
export class PagesApi extends runtime.BaseAPI {

    /**
     * Creates a *Page*. The payload limit is 1MB. This endpoint is deprecated.  **Required Fields** *   `type` *   `name` *   `link` (for a page of `type: link`) *   `feed` (for a page of `type: rss_feed`) *   `body` (for a page of `type: raw`)  **Read Only Fields** *   `id`  ## Content Type  The default value for `content_type` is `text/html`; however, if `page_type` is set to `raw`, `content_type` can be changed to `text/javascript` or `application/json`. Updating this field allows you to place a JavaScript or a JSON file in the root directory.
     * Create a Page
     */
    async createAPageRaw(requestParameters: CreateAPageRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<PageFull>> {
        if (requestParameters.accept === null || requestParameters.accept === undefined) {
            throw new runtime.RequiredError('accept','Required parameter requestParameters.accept was null or undefined when calling createAPage.');
        }

        if (requestParameters.contentType === null || requestParameters.contentType === undefined) {
            throw new runtime.RequiredError('contentType','Required parameter requestParameters.contentType was null or undefined when calling createAPage.');
        }

        if (requestParameters.body === null || requestParameters.body === undefined) {
            throw new runtime.RequiredError('body','Required parameter requestParameters.body was null or undefined when calling createAPage.');
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
            path: `/pages`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: PageBaseToJSON(requestParameters.body),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => PageFullFromJSON(jsonValue));
    }

    /**
     * Creates a *Page*. The payload limit is 1MB. This endpoint is deprecated.  **Required Fields** *   `type` *   `name` *   `link` (for a page of `type: link`) *   `feed` (for a page of `type: rss_feed`) *   `body` (for a page of `type: raw`)  **Read Only Fields** *   `id`  ## Content Type  The default value for `content_type` is `text/html`; however, if `page_type` is set to `raw`, `content_type` can be changed to `text/javascript` or `application/json`. Updating this field allows you to place a JavaScript or a JSON file in the root directory.
     * Create a Page
     */
    async createAPage(requestParameters: CreateAPageRequest, initOverrides?: RequestInit): Promise<PageFull> {
        const response = await this.createAPageRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Deletes a *Page*. This endpoint is deprecated. 
     * Delete a Page
     */
    async deleteAPageRaw(requestParameters: DeleteAPageRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling deleteAPage.');
        }

        if (requestParameters.accept === null || requestParameters.accept === undefined) {
            throw new runtime.RequiredError('accept','Required parameter requestParameters.accept was null or undefined when calling deleteAPage.');
        }

        if (requestParameters.contentType === null || requestParameters.contentType === undefined) {
            throw new runtime.RequiredError('contentType','Required parameter requestParameters.contentType was null or undefined when calling deleteAPage.');
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
            path: `/pages/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Deletes a *Page*. This endpoint is deprecated. 
     * Delete a Page
     */
    async deleteAPage(requestParameters: DeleteAPageRequest, initOverrides?: RequestInit): Promise<void> {
        await this.deleteAPageRaw(requestParameters, initOverrides);
    }

    /**
     * Returns a *Page*. This endpoint is deprecated.
     * Get A Page
     */
    async getAPageRaw(requestParameters: GetAPageRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<PageFull>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling getAPage.');
        }

        if (requestParameters.accept === null || requestParameters.accept === undefined) {
            throw new runtime.RequiredError('accept','Required parameter requestParameters.accept was null or undefined when calling getAPage.');
        }

        if (requestParameters.contentType === null || requestParameters.contentType === undefined) {
            throw new runtime.RequiredError('contentType','Required parameter requestParameters.contentType was null or undefined when calling getAPage.');
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
            path: `/pages/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => PageFullFromJSON(jsonValue));
    }

    /**
     * Returns a *Page*. This endpoint is deprecated.
     * Get A Page
     */
    async getAPage(requestParameters: GetAPageRequest, initOverrides?: RequestInit): Promise<PageFull> {
        const response = await this.getAPageRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Returns a list of *Pages*. Default sorting is by auto-generated ID from oldests to newest. This endpoint is deprecated. 
     * Get All Pages
     */
    async getAllPagesRaw(requestParameters: GetAllPagesRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<Array<PageFull>>> {
        if (requestParameters.accept === null || requestParameters.accept === undefined) {
            throw new runtime.RequiredError('accept','Required parameter requestParameters.accept was null or undefined when calling getAllPages.');
        }

        if (requestParameters.contentType === null || requestParameters.contentType === undefined) {
            throw new runtime.RequiredError('contentType','Required parameter requestParameters.contentType was null or undefined when calling getAllPages.');
        }

        const queryParameters: any = {};

        if (requestParameters.page !== undefined) {
            queryParameters['page'] = requestParameters.page;
        }

        if (requestParameters.limit !== undefined) {
            queryParameters['limit'] = requestParameters.limit;
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
            path: `/pages`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(PageFullFromJSON));
    }

    /**
     * Returns a list of *Pages*. Default sorting is by auto-generated ID from oldests to newest. This endpoint is deprecated. 
     * Get All Pages
     */
    async getAllPages(requestParameters: GetAllPagesRequest, initOverrides?: RequestInit): Promise<Array<PageFull>> {
        const response = await this.getAllPagesRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Updates a *Page*. The payload limit is 1MB. This endpoint is deprecated.  **Read Only Fields** * id
     * Update a Page
     */
    async updateAPageRaw(requestParameters: UpdateAPageRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<PageBase>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling updateAPage.');
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
            path: `/pages/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: PageBaseToJSON(requestParameters.body),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => PageBaseFromJSON(jsonValue));
    }

    /**
     * Updates a *Page*. The payload limit is 1MB. This endpoint is deprecated.  **Read Only Fields** * id
     * Update a Page
     */
    async updateAPage(requestParameters: UpdateAPageRequest, initOverrides?: RequestInit): Promise<PageBase> {
        const response = await this.updateAPageRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
