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


import * as runtime from '../runtime';
import {
    ErrorResponse,
    ErrorResponseFromJSON,
    ErrorResponseToJSON,
    Page,
    PageFromJSON,
    PageToJSON,
    PagePut,
    PagePutFromJSON,
    PagePutToJSON,
    PageResponse,
    PageResponseFromJSON,
    PageResponseToJSON,
    PagesCollectionResponse,
    PagesCollectionResponseFromJSON,
    PagesCollectionResponseToJSON,
} from '../models';

export interface ContentPagesDeleteRequest {
    idin?: number;
    channelId?: number;
}

export interface ContentPagesGetRequest {
    channelId?: number;
    id?: number;
    idin?: string;
    name?: string;
    namelike?: string;
    limit?: number;
    page?: number;
    include?: ContentPagesGetIncludeEnum;
}

export interface ContentPagesPostRequest {
    page: Page;
}

export interface ContentPagesPutRequest {
    pagePut: PagePut;
}

/**
 * 
 */
export class PagesApi extends runtime.BaseAPI {

    /**
     * Deletes a page from a store.  <div class=\"HubBlock--callout\"> <div class=\"CalloutBlock--info\"> <div class=\"HubBlock-content\">  > ### Note > This endpoint is in beta. Any comments on performance should be submitted via the **Docs Feedback** button on this page.  </div> </div> </div>
     * Delete a Page
     */
    async contentPagesDeleteRaw(requestParameters: ContentPagesDeleteRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<void>> {
        const queryParameters: any = {};

        if (requestParameters.idin !== undefined) {
            queryParameters['id:in'] = requestParameters.idin;
        }

        if (requestParameters.channelId !== undefined) {
            queryParameters['channel_id'] = requestParameters.channelId;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-Auth-Token"] = this.configuration.apiKey("X-Auth-Token"); // X-Auth-Token authentication
        }

        const response = await this.request({
            path: `/content/pages`,
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Deletes a page from a store.  <div class=\"HubBlock--callout\"> <div class=\"CalloutBlock--info\"> <div class=\"HubBlock-content\">  > ### Note > This endpoint is in beta. Any comments on performance should be submitted via the **Docs Feedback** button on this page.  </div> </div> </div>
     * Delete a Page
     */
    async contentPagesDelete(requestParameters: ContentPagesDeleteRequest, initOverrides?: RequestInit): Promise<void> {
        await this.contentPagesDeleteRaw(requestParameters, initOverrides);
    }

    /**
     * Returns a list of content pages.  <div class=\"HubBlock--callout\"> <div class=\"CalloutBlock--info\"> <div class=\"HubBlock-content\">  > ### Note > This endpoint is in beta. Any comments on performance should be submitted via the **Docs Feedback** button on this page.  </div> </div> </div>
     * Get Pages
     */
    async contentPagesGetRaw(requestParameters: ContentPagesGetRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<PagesCollectionResponse>> {
        const queryParameters: any = {};

        if (requestParameters.channelId !== undefined) {
            queryParameters['channel_id'] = requestParameters.channelId;
        }

        if (requestParameters.id !== undefined) {
            queryParameters['id'] = requestParameters.id;
        }

        if (requestParameters.idin !== undefined) {
            queryParameters['id:in'] = requestParameters.idin;
        }

        if (requestParameters.name !== undefined) {
            queryParameters['name'] = requestParameters.name;
        }

        if (requestParameters.namelike !== undefined) {
            queryParameters['name:like'] = requestParameters.namelike;
        }

        if (requestParameters.limit !== undefined) {
            queryParameters['limit'] = requestParameters.limit;
        }

        if (requestParameters.page !== undefined) {
            queryParameters['page'] = requestParameters.page;
        }

        if (requestParameters.include !== undefined) {
            queryParameters['include'] = requestParameters.include;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-Auth-Token"] = this.configuration.apiKey("X-Auth-Token"); // X-Auth-Token authentication
        }

        const response = await this.request({
            path: `/content/pages`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => PagesCollectionResponseFromJSON(jsonValue));
    }

    /**
     * Returns a list of content pages.  <div class=\"HubBlock--callout\"> <div class=\"CalloutBlock--info\"> <div class=\"HubBlock-content\">  > ### Note > This endpoint is in beta. Any comments on performance should be submitted via the **Docs Feedback** button on this page.  </div> </div> </div>
     * Get Pages
     */
    async contentPagesGet(requestParameters: ContentPagesGetRequest, initOverrides?: RequestInit): Promise<PagesCollectionResponse> {
        const response = await this.contentPagesGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Creates a content page.  <div class=\"HubBlock--callout\"> <div class=\"CalloutBlock--info\"> <div class=\"HubBlock-content\">  > ### Note > This endpoint is in beta. Any comments on performance should be submitted via the **Docs Feedback** button on this page. </div> </div> </div>
     * Create a Page
     */
    async contentPagesPostRaw(requestParameters: ContentPagesPostRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<PageResponse>> {
        if (requestParameters.page === null || requestParameters.page === undefined) {
            throw new runtime.RequiredError('page','Required parameter requestParameters.page was null or undefined when calling contentPagesPost.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-Auth-Token"] = this.configuration.apiKey("X-Auth-Token"); // X-Auth-Token authentication
        }

        const response = await this.request({
            path: `/content/pages`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: PageToJSON(requestParameters.page),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => PageResponseFromJSON(jsonValue));
    }

    /**
     * Creates a content page.  <div class=\"HubBlock--callout\"> <div class=\"CalloutBlock--info\"> <div class=\"HubBlock-content\">  > ### Note > This endpoint is in beta. Any comments on performance should be submitted via the **Docs Feedback** button on this page. </div> </div> </div>
     * Create a Page
     */
    async contentPagesPost(requestParameters: ContentPagesPostRequest, initOverrides?: RequestInit): Promise<PageResponse> {
        const response = await this.contentPagesPostRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Updates a content page.  <div class=\"HubBlock--callout\"> <div class=\"CalloutBlock--info\"> <div class=\"HubBlock-content\">  > ### Note > This endpoint is in beta. Any comments on performance should be submitted via the **Docs Feedback** button on this page.  </div> </div> </div>
     * Update a Page
     */
    async contentPagesPutRaw(requestParameters: ContentPagesPutRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<PageResponse>> {
        if (requestParameters.pagePut === null || requestParameters.pagePut === undefined) {
            throw new runtime.RequiredError('pagePut','Required parameter requestParameters.pagePut was null or undefined when calling contentPagesPut.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-Auth-Token"] = this.configuration.apiKey("X-Auth-Token"); // X-Auth-Token authentication
        }

        const response = await this.request({
            path: `/content/pages`,
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: PagePutToJSON(requestParameters.pagePut),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => PageResponseFromJSON(jsonValue));
    }

    /**
     * Updates a content page.  <div class=\"HubBlock--callout\"> <div class=\"CalloutBlock--info\"> <div class=\"HubBlock-content\">  > ### Note > This endpoint is in beta. Any comments on performance should be submitted via the **Docs Feedback** button on this page.  </div> </div> </div>
     * Update a Page
     */
    async contentPagesPut(requestParameters: ContentPagesPutRequest, initOverrides?: RequestInit): Promise<PageResponse> {
        const response = await this.contentPagesPutRaw(requestParameters, initOverrides);
        return await response.value();
    }

}

/**
    * @export
    * @enum {string}
    */
export enum ContentPagesGetIncludeEnum {
    Body = 'body'
}
