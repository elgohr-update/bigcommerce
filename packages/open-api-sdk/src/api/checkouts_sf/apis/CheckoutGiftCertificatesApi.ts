/* tslint:disable */
/* eslint-disable */
/**
 * Storefront Checkouts
 * Manage checkout operations and data via front-end JavaScript on BigCommerce stencil powered storefronts.
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
    CheckoutFull,
    CheckoutFullFromJSON,
    CheckoutFullToJSON,
    GiftCertificateRequest,
    GiftCertificateRequestFromJSON,
    GiftCertificateRequestToJSON,
} from '../models';

export interface CheckoutsGiftCertificatesByCheckoutIdAndGiftCertificateCodeDeleteRequest {
    checkoutId: string;
    giftCertificateCode: string;
}

export interface CheckoutsGiftCertificatesByCheckoutIdPostRequest {
    checkoutId: string;
    body: GiftCertificateRequest;
}

/**
 * 
 */
export class CheckoutGiftCertificatesApi extends runtime.BaseAPI {

    /**
     * Deletes an existing *Gift Certificate*.  This removes the *Gift Certificate* payment method.  <div class=\"HubBlock--callout\"> <div class=\"CalloutBlock--info\"> <div class=\"HubBlock-content\">  > ### Note > > The Send a Test Request feature is not currently supported for this endpoint.  </div> </div> </div>
     * Delete Gift Certificate
     */
    async checkoutsGiftCertificatesByCheckoutIdAndGiftCertificateCodeDeleteRaw(requestParameters: CheckoutsGiftCertificatesByCheckoutIdAndGiftCertificateCodeDeleteRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<CheckoutFull>> {
        if (requestParameters.checkoutId === null || requestParameters.checkoutId === undefined) {
            throw new runtime.RequiredError('checkoutId','Required parameter requestParameters.checkoutId was null or undefined when calling checkoutsGiftCertificatesByCheckoutIdAndGiftCertificateCodeDelete.');
        }

        if (requestParameters.giftCertificateCode === null || requestParameters.giftCertificateCode === undefined) {
            throw new runtime.RequiredError('giftCertificateCode','Required parameter requestParameters.giftCertificateCode was null or undefined when calling checkoutsGiftCertificatesByCheckoutIdAndGiftCertificateCodeDelete.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/checkouts/{checkoutId}/gift-certificates/{giftCertificateCode}`.replace(`{${"checkoutId"}}`, encodeURIComponent(String(requestParameters.checkoutId))).replace(`{${"giftCertificateCode"}}`, encodeURIComponent(String(requestParameters.giftCertificateCode))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => CheckoutFullFromJSON(jsonValue));
    }

    /**
     * Deletes an existing *Gift Certificate*.  This removes the *Gift Certificate* payment method.  <div class=\"HubBlock--callout\"> <div class=\"CalloutBlock--info\"> <div class=\"HubBlock-content\">  > ### Note > > The Send a Test Request feature is not currently supported for this endpoint.  </div> </div> </div>
     * Delete Gift Certificate
     */
    async checkoutsGiftCertificatesByCheckoutIdAndGiftCertificateCodeDelete(requestParameters: CheckoutsGiftCertificatesByCheckoutIdAndGiftCertificateCodeDeleteRequest, initOverrides?: RequestInit): Promise<CheckoutFull> {
        const response = await this.checkoutsGiftCertificatesByCheckoutIdAndGiftCertificateCodeDeleteRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Adds a *Gift Certificate Code* to *Checkout*.  <div class=\"HubBlock--callout\"> <div class=\"CalloutBlock--info\"> <div class=\"HubBlock-content\">  > ### Note > * *Gift Certificates* are treated as a payment methods. > * You are not able to purchase a gift certificate with a gift certificate. > * The Send a Test Request feature is not currently supported for this endpoint.  </div> </div> </div>
     * Add Gift Certificate to Checkout
     */
    async checkoutsGiftCertificatesByCheckoutIdPostRaw(requestParameters: CheckoutsGiftCertificatesByCheckoutIdPostRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<CheckoutFull>> {
        if (requestParameters.checkoutId === null || requestParameters.checkoutId === undefined) {
            throw new runtime.RequiredError('checkoutId','Required parameter requestParameters.checkoutId was null or undefined when calling checkoutsGiftCertificatesByCheckoutIdPost.');
        }

        if (requestParameters.body === null || requestParameters.body === undefined) {
            throw new runtime.RequiredError('body','Required parameter requestParameters.body was null or undefined when calling checkoutsGiftCertificatesByCheckoutIdPost.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/checkouts/{checkoutId}/gift-certificates`.replace(`{${"checkoutId"}}`, encodeURIComponent(String(requestParameters.checkoutId))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: GiftCertificateRequestToJSON(requestParameters.body),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => CheckoutFullFromJSON(jsonValue));
    }

    /**
     * Adds a *Gift Certificate Code* to *Checkout*.  <div class=\"HubBlock--callout\"> <div class=\"CalloutBlock--info\"> <div class=\"HubBlock-content\">  > ### Note > * *Gift Certificates* are treated as a payment methods. > * You are not able to purchase a gift certificate with a gift certificate. > * The Send a Test Request feature is not currently supported for this endpoint.  </div> </div> </div>
     * Add Gift Certificate to Checkout
     */
    async checkoutsGiftCertificatesByCheckoutIdPost(requestParameters: CheckoutsGiftCertificatesByCheckoutIdPostRequest, initOverrides?: RequestInit): Promise<CheckoutFull> {
        const response = await this.checkoutsGiftCertificatesByCheckoutIdPostRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
