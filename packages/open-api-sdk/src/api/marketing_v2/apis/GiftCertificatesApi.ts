/* tslint:disable */
/* eslint-disable */
/**
 * Marketing
 * Manage coupons, banners, and gift certificates.  - [Authentication](#authentication) - [Subresources](#subresources)  ## Authentication  Authenticate requests by including an [OAuth](https://developer.bigcommerce.com/api-docs/getting-started/authentication) `access_token` in the request header.  ```http GET https://api.bigcommerce.com/stores/{{STORE_HASH}}/v3/{{ENDPOINT}} Content-Type: application/json X-Auth-Token: {{ACCESS_TOKEN}} ```  ### OAuth Scopes |  **UI Name** | **Permission** | **Parameter** | | --- | --- | --- | |  Marketing | modify | `store_v2_marketing` | |  Marketing | read-only | `store_v2_marketing_read_only` |  ## Subresources  ### Coupons Category or product discounts that can be applied to orders for customers who enter a given code.  ### Banners Banners available to display on a store.  ### Gift Certificates Gift certificates available to offer to a store’s customers.
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
    GiftCertificateFull,
    GiftCertificateFullFromJSON,
    GiftCertificateFullToJSON,
    GiftCertificatePost,
    GiftCertificatePostFromJSON,
    GiftCertificatePostToJSON,
    GiftCertificatePut,
    GiftCertificatePutFromJSON,
    GiftCertificatePutToJSON,
} from '../models';

export interface CreateAGiftCertificateRequest {
    accept: string;
    contentType: string;
    body?: GiftCertificatePost;
}

export interface DeleteAGiftCertificateRequest {
    id: number;
    accept: string;
    contentType: string;
}

export interface DeleteAllGiftCertificatesRequest {
    accept?: string;
    contentType?: string;
}

export interface GetAGiftCertificateRequest {
    id: number;
    accept: string;
    contentType: string;
}

export interface GetAllGiftCertificatesRequest {
    accept: string;
    contentType: string;
    minId?: number;
    maxId?: number;
    code?: string;
    orderId?: number;
    toName?: string;
    toEmail?: string;
    fromName?: string;
    fromEmail?: string;
    page?: number;
    limit?: number;
}

export interface UpdateAGiftCertificateRequest {
    id: string;
    accept: string;
    contentType: string;
    body?: GiftCertificatePut;
}

/**
 * 
 */
export class GiftCertificatesApi extends runtime.BaseAPI {

    /**
     * Creates a *Gift Certificate*.   **Required Fields** * to_name * to_email * from_name * from_email * amount  **Read Only Fields** * id * order_id  **Notes**  When a gift certificate is created through the API, no email notification is triggered to the specified recipient.
     * Create a Gift Certificate
     */
    async createAGiftCertificateRaw(requestParameters: CreateAGiftCertificateRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<GiftCertificateFull>> {
        if (requestParameters.accept === null || requestParameters.accept === undefined) {
            throw new runtime.RequiredError('accept','Required parameter requestParameters.accept was null or undefined when calling createAGiftCertificate.');
        }

        if (requestParameters.contentType === null || requestParameters.contentType === undefined) {
            throw new runtime.RequiredError('contentType','Required parameter requestParameters.contentType was null or undefined when calling createAGiftCertificate.');
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
            path: `/gift_certificates`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: GiftCertificatePostToJSON(requestParameters.body),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => GiftCertificateFullFromJSON(jsonValue));
    }

    /**
     * Creates a *Gift Certificate*.   **Required Fields** * to_name * to_email * from_name * from_email * amount  **Read Only Fields** * id * order_id  **Notes**  When a gift certificate is created through the API, no email notification is triggered to the specified recipient.
     * Create a Gift Certificate
     */
    async createAGiftCertificate(requestParameters: CreateAGiftCertificateRequest, initOverrides?: RequestInit): Promise<GiftCertificateFull> {
        const response = await this.createAGiftCertificateRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Deletes a *Gift Certificate*.
     * Delete a Gift Certificate
     */
    async deleteAGiftCertificateRaw(requestParameters: DeleteAGiftCertificateRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling deleteAGiftCertificate.');
        }

        if (requestParameters.accept === null || requestParameters.accept === undefined) {
            throw new runtime.RequiredError('accept','Required parameter requestParameters.accept was null or undefined when calling deleteAGiftCertificate.');
        }

        if (requestParameters.contentType === null || requestParameters.contentType === undefined) {
            throw new runtime.RequiredError('contentType','Required parameter requestParameters.contentType was null or undefined when calling deleteAGiftCertificate.');
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
            path: `/gift_certificates/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Deletes a *Gift Certificate*.
     * Delete a Gift Certificate
     */
    async deleteAGiftCertificate(requestParameters: DeleteAGiftCertificateRequest, initOverrides?: RequestInit): Promise<void> {
        await this.deleteAGiftCertificateRaw(requestParameters, initOverrides);
    }

    /**
     * By default, it deletes all *Gift Certificates*.
     * Delete All Gift Certificates
     */
    async deleteAllGiftCertificatesRaw(requestParameters: DeleteAllGiftCertificatesRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<object>> {
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
            path: `/gift_certificates`,
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse<any>(response);
    }

    /**
     * By default, it deletes all *Gift Certificates*.
     * Delete All Gift Certificates
     */
    async deleteAllGiftCertificates(requestParameters: DeleteAllGiftCertificatesRequest, initOverrides?: RequestInit): Promise<object> {
        const response = await this.deleteAllGiftCertificatesRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Returns a single *Gift Certificate*.
     * Get a Gift Certificate
     */
    async getAGiftCertificateRaw(requestParameters: GetAGiftCertificateRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<GiftCertificateFull>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling getAGiftCertificate.');
        }

        if (requestParameters.accept === null || requestParameters.accept === undefined) {
            throw new runtime.RequiredError('accept','Required parameter requestParameters.accept was null or undefined when calling getAGiftCertificate.');
        }

        if (requestParameters.contentType === null || requestParameters.contentType === undefined) {
            throw new runtime.RequiredError('contentType','Required parameter requestParameters.contentType was null or undefined when calling getAGiftCertificate.');
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
            path: `/gift_certificates/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => GiftCertificateFullFromJSON(jsonValue));
    }

    /**
     * Returns a single *Gift Certificate*.
     * Get a Gift Certificate
     */
    async getAGiftCertificate(requestParameters: GetAGiftCertificateRequest, initOverrides?: RequestInit): Promise<GiftCertificateFull> {
        const response = await this.getAGiftCertificateRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Returns a list of *Gift Certificates*. Optional filter parameters can be passed in.  Default sorting is by gift-certificate id, from lowest to highest.  The maximum limit is 250. If a limit isn’t provided, up to 50 gift_certificates are returned by default.
     * Get All Gift Certificates
     */
    async getAllGiftCertificatesRaw(requestParameters: GetAllGiftCertificatesRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<Array<GiftCertificateFull>>> {
        if (requestParameters.accept === null || requestParameters.accept === undefined) {
            throw new runtime.RequiredError('accept','Required parameter requestParameters.accept was null or undefined when calling getAllGiftCertificates.');
        }

        if (requestParameters.contentType === null || requestParameters.contentType === undefined) {
            throw new runtime.RequiredError('contentType','Required parameter requestParameters.contentType was null or undefined when calling getAllGiftCertificates.');
        }

        const queryParameters: any = {};

        if (requestParameters.minId !== undefined) {
            queryParameters['min_id'] = requestParameters.minId;
        }

        if (requestParameters.maxId !== undefined) {
            queryParameters['max_id'] = requestParameters.maxId;
        }

        if (requestParameters.code !== undefined) {
            queryParameters['code'] = requestParameters.code;
        }

        if (requestParameters.orderId !== undefined) {
            queryParameters['order_id'] = requestParameters.orderId;
        }

        if (requestParameters.toName !== undefined) {
            queryParameters['to_name'] = requestParameters.toName;
        }

        if (requestParameters.toEmail !== undefined) {
            queryParameters['to_email'] = requestParameters.toEmail;
        }

        if (requestParameters.fromName !== undefined) {
            queryParameters['from_name'] = requestParameters.fromName;
        }

        if (requestParameters.fromEmail !== undefined) {
            queryParameters['from_email'] = requestParameters.fromEmail;
        }

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
            path: `/gift_certificates`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(GiftCertificateFullFromJSON));
    }

    /**
     * Returns a list of *Gift Certificates*. Optional filter parameters can be passed in.  Default sorting is by gift-certificate id, from lowest to highest.  The maximum limit is 250. If a limit isn’t provided, up to 50 gift_certificates are returned by default.
     * Get All Gift Certificates
     */
    async getAllGiftCertificates(requestParameters: GetAllGiftCertificatesRequest, initOverrides?: RequestInit): Promise<Array<GiftCertificateFull>> {
        const response = await this.getAllGiftCertificatesRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Updates a *Gift Certificate*.  **Read Only Fields** * id * order_id
     * Update a Gift Certificate
     */
    async updateAGiftCertificateRaw(requestParameters: UpdateAGiftCertificateRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<GiftCertificateFull>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling updateAGiftCertificate.');
        }

        if (requestParameters.accept === null || requestParameters.accept === undefined) {
            throw new runtime.RequiredError('accept','Required parameter requestParameters.accept was null or undefined when calling updateAGiftCertificate.');
        }

        if (requestParameters.contentType === null || requestParameters.contentType === undefined) {
            throw new runtime.RequiredError('contentType','Required parameter requestParameters.contentType was null or undefined when calling updateAGiftCertificate.');
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
            path: `/gift_certificates/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: GiftCertificatePutToJSON(requestParameters.body),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => GiftCertificateFullFromJSON(jsonValue));
    }

    /**
     * Updates a *Gift Certificate*.  **Read Only Fields** * id * order_id
     * Update a Gift Certificate
     */
    async updateAGiftCertificate(requestParameters: UpdateAGiftCertificateRequest, initOverrides?: RequestInit): Promise<GiftCertificateFull> {
        const response = await this.updateAGiftCertificateRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
