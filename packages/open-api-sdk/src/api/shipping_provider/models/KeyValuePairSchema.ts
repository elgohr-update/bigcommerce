/* tslint:disable */
/* eslint-disable */
/**
 * Shipping Providers
 * Implement endpoints consumed by BigCommerce for custom shipping integrations. To learn more, see [Shipping Provider API Overview](/api-docs/store-management/shipping/shipping-provider-api).  <div class=\"otp\" id=\"no-index\">  ### On this Page - [Authentication](#authentication) - [Subresources](#subresources) - [Additional Information](#additional-information)  </div>  ## Authentication This specification file describes API requests BigCommerce will make to a registered shipping carrier\'s server to check connection options and retrieve rates. As such, the method of authentication is determined by the carrier\'s server.  ## Subresources  ### Check Connection Options The Check Connection Options request is made by BigCommerce when checking for available shipping options. Each Shipping Provider will have different configurations for the payload.  ### Rate The Rate request is made by BigCommerce to get shipping quotes from the provider.  ## Additional Information  **Webhooks** - [Shipment](https://developer.bigcommerce.com/api-docs/getting-started/webhooks/webhook-events#shipment)  **Related API Resources** - [Shipping Provider](/api-reference/store-management/shipping-provider-api) - [Shipping Zones](/api-reference/store-management/shipping-api/shipping-zones) - [Shipping Methods](/api-reference/store-management/shipping-api/shipping-method) - [Shipping Carriers](/api-reference/store-management/shipping-api/shipping-carrier)
 *
 * The version of the OpenAPI document: 
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import {
    DateRange,
    DateRangeFromJSON,
    DateRangeFromJSONTyped,
    DateRangeToJSON,
} from './';

/**
 * An individual carrier defined field to display at checkout, along with any defaults and validation
 * @export
 * @interface KeyValuePairSchema
 */
export interface KeyValuePairSchema {
    /**
     * The internal code that represents this input field
     * @type {string}
     * @memberof KeyValuePairSchema
     */
    code: string;
    /**
     * Display name for this input field
     * @type {string}
     * @memberof KeyValuePairSchema
     */
    label: string;
    /**
     * Longer description text to be displayed as a tooltip at checkout
     * @type {string}
     * @memberof KeyValuePairSchema
     */
    description?: string;
    /**
     * Placeholder for any validation we choose to implement
     * @type {string}
     * @memberof KeyValuePairSchema
     */
    validation?: string;
    /**
     * How this input will be displayed
     * @type {string}
     * @memberof KeyValuePairSchema
     */
    type: KeyValuePairSchemaTypeEnum;
    /**
     * A valid default value for this field
     * @type {string}
     * @memberof KeyValuePairSchema
     */
    defaultValue: string;
    /**
     * For select type fields, the list of available options
     * @type {Array<string>}
     * @memberof KeyValuePairSchema
     */
    valueOptions?: Array<string>;
    /**
     * For date type fields, a set of valid date ranges available to choose from
     * @type {Array<DateRange>}
     * @memberof KeyValuePairSchema
     */
    dateRanges?: Array<DateRange>;
}

/**
* @export
* @enum {string}
*/
export enum KeyValuePairSchemaTypeEnum {
    Date = 'date',
    String = 'string',
    Select = 'select',
    Code = 'code'
}

export function KeyValuePairSchemaFromJSON(json: any): KeyValuePairSchema {
    return KeyValuePairSchemaFromJSONTyped(json, false);
}

export function KeyValuePairSchemaFromJSONTyped(json: any, ignoreDiscriminator: boolean): KeyValuePairSchema {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'code': json['code'],
        'label': json['label'],
        'description': !exists(json, 'description') ? undefined : json['description'],
        'validation': !exists(json, 'validation') ? undefined : json['validation'],
        'type': json['type'],
        'defaultValue': json['default_value'],
        'valueOptions': !exists(json, 'value_options') ? undefined : json['value_options'],
        'dateRanges': !exists(json, 'date_ranges') ? undefined : ((json['date_ranges'] as Array<any>).map(DateRangeFromJSON)),
    };
}

export function KeyValuePairSchemaToJSON(value?: KeyValuePairSchema | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'code': value.code,
        'label': value.label,
        'description': value.description,
        'validation': value.validation,
        'type': value.type,
        'default_value': value.defaultValue,
        'value_options': value.valueOptions,
        'date_ranges': value.dateRanges === undefined ? undefined : ((value.dateRanges as Array<any>).map(DateRangeToJSON)),
    };
}


