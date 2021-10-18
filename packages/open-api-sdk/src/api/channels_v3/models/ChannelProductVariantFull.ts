/* tslint:disable */
/* eslint-disable */
/**
 * Channels
 * Create and manage sales [channels](https://developer.bigcommerce.com/api-docs/channels/overview), their [sites](https://developer.bigcommerce.com/api-reference/store-management/channels/channel-site), and their [product listings](https://developer.bigcommerce.com/api-reference/store-management/channels/channel-listings).  - [Authentication](#authentication) - [Channels](#channels) - [Channel listings](#channel-listings) - [Channel site](#channel-site) - [Resources](#resources)  ## Authentication  Authenticate requests by including an [OAuth](https://developer.bigcommerce.com/api-docs/getting-started/authentication) `access_token` in the request header.  ```http GET https://api.bigcommerce.com/stores/{{STORE_HASH}}/v3/channels Content-Type: application/json X-Auth-Token: {{ACCESS_TOKEN}} ```  ### [OAuth Scopes](https://developer.bigcommerce.com/api-docs/getting-started/authentication/rest-api-authentication#oauth-scopes)  | UI Name                                      | Permission | Parameter                                     | |----------------------------------------------|------------|-----------------------------------------------| | Channel Listings                             | modify     | `store_channel_listings`                      | | Channel Listings                             | read-only  | `store_channel_listings_read_only`            | | Channel Settings                             | modify     | `store_channel_settings`                      | | Channel Settings                             | read-only  | `store_channel_settings_read_only`            |  ## Channels  A [channel](https://developer.bigcommerce.com/api-reference/cart-checkout/channels-listings-api/channels) is anywhere a merchant sells their products. This encompasses headless storefronts, marketplaces, POS systems, and marketing platforms.  ### Platform  A channel\'s `type` and `platform` combination must be a valid pair as indicated in the table below.  | Platform          | Accepted Type             | |-------------------|---------------------------| | `square`          | `pos`                     | | `stripe`          | `pos`                     | | `vend`            | `pos`                     | | `clover`          | `pos`                     | | `talech`          | `pos`                     | | `facebook`        | `marketplace`,`marketing` | | `instagram`       | `marketplace`,`marketing` | | `amazon`          | `marketplace`             | | `ebay`            | `marketplace`             | | `pinterest`       | `marketplace`             | | `wayfair`         | `marketplace`             | | `overstock`       | `marketplace`             | | `etsy`            | `marketplace`             | | `wish`            | `marketplace`             | | `walmart`         | `marketplace`             | | `gatsby`          | `storefront`              | | `wordpress`       | `storefront`              | | `drupal`          | `storefront`              | | `acquia`          | `storefront`              | | `bloomreach`      | `storefront`              | | `deity`           | `storefront`              | | `next`            | `storefront`              | | `vue`             | `storefront`              | | `google_shopping` | `marketing`               | | `custom`          | `storefront`, `pos`, `marketing`, `marketplace` |  ### Status  Allowed values for a channel\'s `status` vary by channel `type` and `platform`.  |Type|Platform|Allowed Statuses| |--|--|--| |`storefront`|`bigcommerce`|`prelaunch`, `active`, `inactive`, `archived`, `deleted`| |`storefront`|**Is not** `bigcommerce` |`active`, `inactive`, `archived`, `deleted` |`marketing`, `marketplace`, `pos`|N/A|`connected`, `disconnected`, `archived`, `deleted`|  <div class=\"HubBlock--callout\"> <div class=\"CalloutBlock--warning\"> <div class=\"HubBlock-content\">  > ### Note > * A Channel with `deleted` status can be restored within 90 days after deleting by contacting BigCommerce support team. Once the 90 days grace period is over, the Channel `status` will become `terminated`. > * The `terminated` status is read-only. `terminated` channels cannot be restored. > * As of April 2020, `status`  should be used in place of `is_enabled` -- `is_enabled` is deprecated.  </div> </div> </div>  ## Channel listings  [Channel listings](https://developer.bigcommerce.com/api-reference/store-management/channels/channel-listings) allow you to manage catalog differences among different storefronts or marketplaces.  ## Channel site  A [Channel site](https://developer.bigcommerce.com/api-reference/store-management/channels/channel-site) refers to the domain associated with a channel.  ## Resources  * [Sites and Routes API Reference](https://developer.bigcommerce.com/api-reference/cart-checkout/sites-routes-api) * [Building Channels Overview](https://developer.bigcommerce.com/api-docs/channels/overview) * [Building Channel Apps](https://developer.bigcommerce.com/api-docs/channels/building-channel-apps) * [Channels Toolkit Reference](https://developer.bigcommerce.com/api-docs/channels/channels-toolkit-reference)
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import {
    VariantState,
    VariantStateFromJSON,
    VariantStateFromJSONTyped,
    VariantStateToJSON,
} from './';

/**
 * Details about a variant of the product for this channel listing.
 * @export
 * @interface ChannelProductVariantFull
 */
export interface ChannelProductVariantFull {
    /**
     * The ID of the channel associated with this channel listing.
     * @type {number}
     * @memberof ChannelProductVariantFull
     */
    channelId?: number;
    /**
     * The ID of the product associated with this channel listing.
     * @type {number}
     * @memberof ChannelProductVariantFull
     */
    productId?: number;
    /**
     * The ID of the product variant associated with this channel listing.
     * @type {number}
     * @memberof ChannelProductVariantFull
     */
    variantId?: number;
    /**
     * Associated ID within a system / platform outside of BC.
     * @type {string}
     * @memberof ChannelProductVariantFull
     */
    externalId?: string;
    /**
     * 
     * @type {VariantState}
     * @memberof ChannelProductVariantFull
     */
    state?: VariantState;
    /**
     * Name of the product variant for this channel listing specifically. This is an optional field that can be used to override the name of the product variant in the catalog.
     * @type {string}
     * @memberof ChannelProductVariantFull
     */
    name?: string;
    /**
     * Description of the product variant for this channel listing specifically. This is an optional field that can be used to override the description of the product variant in the catalog.
     * @type {string}
     * @memberof ChannelProductVariantFull
     */
    description?: string;
    /**
     * Date on which the channel listing variant was first created.
     * @type {Date}
     * @memberof ChannelProductVariantFull
     */
    dateCreated?: Date;
    /**
     * Date on which the channel listing variant was most recently changed.
     * @type {Date}
     * @memberof ChannelProductVariantFull
     */
    dateModified?: Date;
}

export function ChannelProductVariantFullFromJSON(json: any): ChannelProductVariantFull {
    return ChannelProductVariantFullFromJSONTyped(json, false);
}

export function ChannelProductVariantFullFromJSONTyped(json: any, ignoreDiscriminator: boolean): ChannelProductVariantFull {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'channelId': !exists(json, 'channel_id') ? undefined : json['channel_id'],
        'productId': !exists(json, 'product_id') ? undefined : json['product_id'],
        'variantId': !exists(json, 'variant_id') ? undefined : json['variant_id'],
        'externalId': !exists(json, 'external_id') ? undefined : json['external_id'],
        'state': !exists(json, 'state') ? undefined : VariantStateFromJSON(json['state']),
        'name': !exists(json, 'name') ? undefined : json['name'],
        'description': !exists(json, 'description') ? undefined : json['description'],
        'dateCreated': !exists(json, 'date_created') ? undefined : (new Date(json['date_created'])),
        'dateModified': !exists(json, 'date_modified') ? undefined : (new Date(json['date_modified'])),
    };
}

export function ChannelProductVariantFullToJSON(value?: ChannelProductVariantFull | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'channel_id': value.channelId,
        'product_id': value.productId,
        'variant_id': value.variantId,
        'external_id': value.externalId,
        'state': VariantStateToJSON(value.state),
        'name': value.name,
        'description': value.description,
        'date_created': value.dateCreated === undefined ? undefined : (value.dateCreated.toISOString()),
        'date_modified': value.dateModified === undefined ? undefined : (value.dateModified.toISOString()),
    };
}


