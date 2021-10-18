/* tslint:disable */
/* eslint-disable */
/**
 * Shipping V2
 * Manage shipping zones, shipping methods, and shipping carrier connections.  ### Shipping Zones The Shipping Zone object and endpoints manage shipping zones within countries.  ### Shipping Methods The Shipping Methods object and endpoints manage shipping rules within Shipping Zones. These rules determine the shipping rates displayed at checkout, and related parts of the control panel, such as the shipping of manual orders.  ### Shipping Carrier Connections Carrier connections refer to specific settings required to connect to a specific shipping carrier. Each carrier requires your app to supply a unique set of properties/fields to establish a connection with that carrier.
 *
 * The version of the OpenAPI document: 
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface ShippingMethodFullAllOf
 */
export interface ShippingMethodFullAllOf {
    /**
     * Shipping-method ID. READ-ONLY
     * @type {number}
     * @memberof ShippingMethodFullAllOf
     */
    id?: number;
}

export function ShippingMethodFullAllOfFromJSON(json: any): ShippingMethodFullAllOf {
    return ShippingMethodFullAllOfFromJSONTyped(json, false);
}

export function ShippingMethodFullAllOfFromJSONTyped(json: any, ignoreDiscriminator: boolean): ShippingMethodFullAllOf {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
    };
}

export function ShippingMethodFullAllOfToJSON(value?: ShippingMethodFullAllOf | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
    };
}


