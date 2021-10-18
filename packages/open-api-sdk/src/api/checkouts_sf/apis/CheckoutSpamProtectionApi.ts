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
    SpamProtectionRequest,
    SpamProtectionRequestFromJSON,
    SpamProtectionRequestToJSON,
} from '../models';

export interface CheckoutSpamProtectionRequest {
    checkoutId: string;
    body: SpamProtectionRequest;
}

/**
 * 
 */
export class CheckoutSpamProtectionApi extends runtime.BaseAPI {

    /**
     * Verifies if checkout is created by human.  <div class=\"HubBlock--callout\"> <div class=\"CalloutBlock--info\"> <div class=\"HubBlock-content\">  > ### Note > The Send a Test Request feature is not currently supported for this endpoint.  </div> </div> </div>
     * Checkout Spam Protection
     */
    async checkoutSpamProtectionRaw(requestParameters: CheckoutSpamProtectionRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<CheckoutFull>> {
        if (requestParameters.checkoutId === null || requestParameters.checkoutId === undefined) {
            throw new runtime.RequiredError('checkoutId','Required parameter requestParameters.checkoutId was null or undefined when calling checkoutSpamProtection.');
        }

        if (requestParameters.body === null || requestParameters.body === undefined) {
            throw new runtime.RequiredError('body','Required parameter requestParameters.body was null or undefined when calling checkoutSpamProtection.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/checkouts/{checkoutId}/spam-protection`.replace(`{${"checkoutId"}}`, encodeURIComponent(String(requestParameters.checkoutId))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: SpamProtectionRequestToJSON(requestParameters.body),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => CheckoutFullFromJSON(jsonValue));
    }

    /**
     * Verifies if checkout is created by human.  <div class=\"HubBlock--callout\"> <div class=\"CalloutBlock--info\"> <div class=\"HubBlock-content\">  > ### Note > The Send a Test Request feature is not currently supported for this endpoint.  </div> </div> </div>
     * Checkout Spam Protection
     */
    async checkoutSpamProtection(requestParameters: CheckoutSpamProtectionRequest, initOverrides?: RequestInit): Promise<CheckoutFull> {
        const response = await this.checkoutSpamProtectionRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
