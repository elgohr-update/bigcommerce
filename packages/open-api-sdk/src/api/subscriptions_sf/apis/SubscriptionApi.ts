/* tslint:disable */
/* eslint-disable */
/**
 * Storefront Subscriptions
 * Manage newsletter and marketing email subscriptions on the storefront.  - [Additional Information](#additional-information)  ## Additional Information  * [Collecting Newsletter Subscriptions](https://support.bigcommerce.com/s/article/Collecting-Newsletter-Subscriptions) (support.bigcommerce.com) * [Customers Overview](https://developer.bigcommerce.com/api-docs/customers/customers-subscribers-overview) * [Working with Storefront APIs](https://developer.bigcommerce.com/api-docs/cart-and-checkout/working-sf-apis)
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
    Subscription,
    SubscriptionFromJSON,
    SubscriptionToJSON,
    SubscriptionRequest,
    SubscriptionRequestFromJSON,
    SubscriptionRequestToJSON,
} from '../models';

export interface SubscriptionsPostRequest {
    body?: SubscriptionRequest;
}

/**
 * 
 */
export class SubscriptionApi extends runtime.BaseAPI {

    /**
     * Creates or updates an email subscription.  By default, customers receive abandoned cart emails as soon as they provide their email address in the checkout flow. They can opt out using this endpoint.  However, if **Store Settings > Miscellaneous > Require Consent** is enabled, Abandoned Cart Emails are not sent by default, and the customer should opt-in.  <div class=\"HubBlock--callout\"> <div class=\"CalloutBlock--info\"> <div class=\"HubBlock-content\">   > ### Note > The Send a Test Request feature is not currently supported for this endpoint.   </div> </div> </div>
     * Create a Subscription
     */
    async subscriptionsPostRaw(requestParameters: SubscriptionsPostRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<Subscription>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/subscriptions`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: SubscriptionRequestToJSON(requestParameters.body),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => SubscriptionFromJSON(jsonValue));
    }

    /**
     * Creates or updates an email subscription.  By default, customers receive abandoned cart emails as soon as they provide their email address in the checkout flow. They can opt out using this endpoint.  However, if **Store Settings > Miscellaneous > Require Consent** is enabled, Abandoned Cart Emails are not sent by default, and the customer should opt-in.  <div class=\"HubBlock--callout\"> <div class=\"CalloutBlock--info\"> <div class=\"HubBlock-content\">   > ### Note > The Send a Test Request feature is not currently supported for this endpoint.   </div> </div> </div>
     * Create a Subscription
     */
    async subscriptionsPost(requestParameters: SubscriptionsPostRequest, initOverrides?: RequestInit): Promise<Subscription> {
        const response = await this.subscriptionsPostRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
