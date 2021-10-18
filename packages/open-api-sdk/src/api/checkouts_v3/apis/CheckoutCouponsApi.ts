/* tslint:disable */
/* eslint-disable */
/**
 * Checkouts
 * Create checkouts from existing carts using BigCommerce checkout logic.
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
    CouponCodeRequest,
    CouponCodeRequestFromJSON,
    CouponCodeRequestToJSON,
    InlineResponse200,
    InlineResponse200FromJSON,
    InlineResponse200ToJSON,
} from '../models';

export interface CheckoutsCouponsByCheckoutIdAndCouponCodeDeleteRequest {
    checkoutId: string;
    accept: string;
    contentType: string;
    couponCode: string;
}

export interface CheckoutsCouponsByCheckoutIdPostRequest {
    checkoutId: string;
    accept: string;
    contentType: string;
    body: CouponCodeRequest;
}

/**
 * 
 */
export class CheckoutCouponsApi extends runtime.BaseAPI {

    /**
     * Deletes a *Coupon Code* from *Checkout*.
     * Delete Checkout Coupon
     */
    async checkoutsCouponsByCheckoutIdAndCouponCodeDeleteRaw(requestParameters: CheckoutsCouponsByCheckoutIdAndCouponCodeDeleteRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<InlineResponse200>> {
        if (requestParameters.checkoutId === null || requestParameters.checkoutId === undefined) {
            throw new runtime.RequiredError('checkoutId','Required parameter requestParameters.checkoutId was null or undefined when calling checkoutsCouponsByCheckoutIdAndCouponCodeDelete.');
        }

        if (requestParameters.accept === null || requestParameters.accept === undefined) {
            throw new runtime.RequiredError('accept','Required parameter requestParameters.accept was null or undefined when calling checkoutsCouponsByCheckoutIdAndCouponCodeDelete.');
        }

        if (requestParameters.contentType === null || requestParameters.contentType === undefined) {
            throw new runtime.RequiredError('contentType','Required parameter requestParameters.contentType was null or undefined when calling checkoutsCouponsByCheckoutIdAndCouponCodeDelete.');
        }

        if (requestParameters.couponCode === null || requestParameters.couponCode === undefined) {
            throw new runtime.RequiredError('couponCode','Required parameter requestParameters.couponCode was null or undefined when calling checkoutsCouponsByCheckoutIdAndCouponCodeDelete.');
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
            path: `/checkouts/{checkoutId}/coupons/{couponCode}`.replace(`{${"checkoutId"}}`, encodeURIComponent(String(requestParameters.checkoutId))).replace(`{${"couponCode"}}`, encodeURIComponent(String(requestParameters.couponCode))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => InlineResponse200FromJSON(jsonValue));
    }

    /**
     * Deletes a *Coupon Code* from *Checkout*.
     * Delete Checkout Coupon
     */
    async checkoutsCouponsByCheckoutIdAndCouponCodeDelete(requestParameters: CheckoutsCouponsByCheckoutIdAndCouponCodeDeleteRequest, initOverrides?: RequestInit): Promise<InlineResponse200> {
        const response = await this.checkoutsCouponsByCheckoutIdAndCouponCodeDeleteRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Adds a *Coupon Code* to *Checkout*.  **Required Fields** * coupon_code
     * Add Coupon to Checkout
     */
    async checkoutsCouponsByCheckoutIdPostRaw(requestParameters: CheckoutsCouponsByCheckoutIdPostRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<InlineResponse200>> {
        if (requestParameters.checkoutId === null || requestParameters.checkoutId === undefined) {
            throw new runtime.RequiredError('checkoutId','Required parameter requestParameters.checkoutId was null or undefined when calling checkoutsCouponsByCheckoutIdPost.');
        }

        if (requestParameters.accept === null || requestParameters.accept === undefined) {
            throw new runtime.RequiredError('accept','Required parameter requestParameters.accept was null or undefined when calling checkoutsCouponsByCheckoutIdPost.');
        }

        if (requestParameters.contentType === null || requestParameters.contentType === undefined) {
            throw new runtime.RequiredError('contentType','Required parameter requestParameters.contentType was null or undefined when calling checkoutsCouponsByCheckoutIdPost.');
        }

        if (requestParameters.body === null || requestParameters.body === undefined) {
            throw new runtime.RequiredError('body','Required parameter requestParameters.body was null or undefined when calling checkoutsCouponsByCheckoutIdPost.');
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
            path: `/checkouts/{checkoutId}/coupons`.replace(`{${"checkoutId"}}`, encodeURIComponent(String(requestParameters.checkoutId))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: CouponCodeRequestToJSON(requestParameters.body),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => InlineResponse200FromJSON(jsonValue));
    }

    /**
     * Adds a *Coupon Code* to *Checkout*.  **Required Fields** * coupon_code
     * Add Coupon to Checkout
     */
    async checkoutsCouponsByCheckoutIdPost(requestParameters: CheckoutsCouponsByCheckoutIdPostRequest, initOverrides?: RequestInit): Promise<InlineResponse200> {
        const response = await this.checkoutsCouponsByCheckoutIdPostRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
