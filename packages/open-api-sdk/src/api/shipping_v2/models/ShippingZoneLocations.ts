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
 * @interface ShippingZoneLocations
 */
export interface ShippingZoneLocations {
    /**
     * Location’s ID.
     * @type {number}
     * @memberof ShippingZoneLocations
     */
    id?: number;
    /**
     * Location’s ZIP/postal code.
     * @type {string}
     * @memberof ShippingZoneLocations
     */
    zip?: string;
    /**
     * 2-letter ISO Alpha-2 code for the country.
     * @type {string}
     * @memberof ShippingZoneLocations
     */
    countryIso2?: string;
    /**
     * ISO Alpha-2 code for the state.
     * @type {string}
     * @memberof ShippingZoneLocations
     */
    stateIso2?: string;
}

export function ShippingZoneLocationsFromJSON(json: any): ShippingZoneLocations {
    return ShippingZoneLocationsFromJSONTyped(json, false);
}

export function ShippingZoneLocationsFromJSONTyped(json: any, ignoreDiscriminator: boolean): ShippingZoneLocations {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'zip': !exists(json, 'zip') ? undefined : json['zip'],
        'countryIso2': !exists(json, 'country_iso2') ? undefined : json['country_iso2'],
        'stateIso2': !exists(json, 'state_iso2') ? undefined : json['state_iso2'],
    };
}

export function ShippingZoneLocationsToJSON(value?: ShippingZoneLocations | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'zip': value.zip,
        'country_iso2': value.countryIso2,
        'state_iso2': value.stateIso2,
    };
}


