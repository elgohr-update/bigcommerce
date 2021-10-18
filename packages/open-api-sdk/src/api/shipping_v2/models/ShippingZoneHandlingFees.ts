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
 * @interface ShippingZoneHandlingFees
 */
export interface ShippingZoneHandlingFees {
    /**
     * 
     * @type {string}
     * @memberof ShippingZoneHandlingFees
     */
    fixedSurcharge?: string;
    /**
     * 
     * @type {string}
     * @memberof ShippingZoneHandlingFees
     */
    percentageSurcharge?: string;
    /**
     * 
     * @type {boolean}
     * @memberof ShippingZoneHandlingFees
     */
    displaySeparately?: boolean;
}

export function ShippingZoneHandlingFeesFromJSON(json: any): ShippingZoneHandlingFees {
    return ShippingZoneHandlingFeesFromJSONTyped(json, false);
}

export function ShippingZoneHandlingFeesFromJSONTyped(json: any, ignoreDiscriminator: boolean): ShippingZoneHandlingFees {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'fixedSurcharge': !exists(json, 'fixed_surcharge') ? undefined : json['fixed_surcharge'],
        'percentageSurcharge': !exists(json, 'percentage_surcharge') ? undefined : json['percentage_surcharge'],
        'displaySeparately': !exists(json, 'display_separately') ? undefined : json['display_separately'],
    };
}

export function ShippingZoneHandlingFeesToJSON(value?: ShippingZoneHandlingFees | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'fixed_surcharge': value.fixedSurcharge,
        'percentage_surcharge': value.percentageSurcharge,
        'display_separately': value.displaySeparately,
    };
}


