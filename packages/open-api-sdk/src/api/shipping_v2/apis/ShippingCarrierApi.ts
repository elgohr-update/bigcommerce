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


import * as runtime from '../runtime';
import {
    CarrierConnection,
    CarrierConnectionFromJSON,
    CarrierConnectionToJSON,
    InlineObject,
    InlineObjectFromJSON,
    InlineObjectToJSON,
} from '../models';

export interface DeleteCarrierConnectionRequest {
    accept: string;
    contentType: string;
    body: InlineObject;
}

export interface ShippingCarrierConnectionPostRequest {
    accept: string;
    contentType: string;
    body?: CarrierConnection;
}

export interface UpdateACarrierConnectionRequest {
    accept: string;
    contentType: string;
    body?: CarrierConnection;
}

/**
 * 
 */
export class ShippingCarrierApi extends runtime.BaseAPI {

    /**
     * Deletes a *Carrier Connection*.  **Required Fields** * carrier_id
     * Delete a Carrier Connection
     */
    async deleteCarrierConnectionRaw(requestParameters: DeleteCarrierConnectionRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.accept === null || requestParameters.accept === undefined) {
            throw new runtime.RequiredError('accept','Required parameter requestParameters.accept was null or undefined when calling deleteCarrierConnection.');
        }

        if (requestParameters.contentType === null || requestParameters.contentType === undefined) {
            throw new runtime.RequiredError('contentType','Required parameter requestParameters.contentType was null or undefined when calling deleteCarrierConnection.');
        }

        if (requestParameters.body === null || requestParameters.body === undefined) {
            throw new runtime.RequiredError('body','Required parameter requestParameters.body was null or undefined when calling deleteCarrierConnection.');
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
            path: `/shipping/carrier/connection`,
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
            body: InlineObjectToJSON(requestParameters.body),
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Deletes a *Carrier Connection*.  **Required Fields** * carrier_id
     * Delete a Carrier Connection
     */
    async deleteCarrierConnection(requestParameters: DeleteCarrierConnectionRequest, initOverrides?: RequestInit): Promise<void> {
        await this.deleteCarrierConnectionRaw(requestParameters, initOverrides);
    }

    /**
     * Creates a *Carrier Connection*.   Carrier connections refer to specific settings required to connect to a specific shipping carrier. Each carrier requires your app to supply a unique set of properties/fields to establish a connection with that carrier.  *Notes:*  - There is no `GET` with this resource. It has `PUT`, `POST` and `DELETE`.     * `PUT` is used to update. The connection can be updated via API.      - Connections created here do not enable the shipping method. To enable the carrier for a shipping zone, use the Shipping Methods API.   - The Carrier Connection resource returns a 204 for both succesful and unsuccesful attempts to connect. If a field is missing, it will return a 400.  ### Australia Post  #### Sample Request – PUT or POST  ```json {  \"carrier_id\" : \"auspost\",  \"connection\" : {   \"auth_key\" : \"yourAusPostAuthKey\",   \"test_mode\" : false  } } ```  #### Sample Request – DELETE  ```json {  \"carrier_id\" : \"auspost\" } ```  #### Australia Post Connection Object – Properties  Australia Post `PUT` or `POST` requests require all of the following properties. (These requests won’t be fulfilled unless these properties are valid.) `DELETE` requests require only a `carrier_id`.   | Property | Type | Description | - | - | - | | auth_key | string | Australia Post authorization key. | | test_mode | boolean | Whether or not to use Australia Post test-mode settings. Acceptable values are `true` or `false`. |   ### Endicia USPS is connected through Endicia.  #### Sample Request – PUT or POST  ```json { \"carrier_id\" : \"endicia\",  \"connection\": {   \"account_id\" : \"yourEndiciaAccountId\",   \"pass_phrase\" : \"yourEndiciaPassphrase\"  } } ```  #### Sample Request – DELETE  ```json {  \"carrier_id\" : \"endicia\" } ```  #### Endicia Connection Object – Properties  Endicia `PUT` or `POST` requests require all of the following properties. (These requests won’t be fulfilled unless these properties are valid.) `DELETE` requests require only a `carrier_id`.   | Property | Type | Description | | - | - | - | | account_id | string | Endicia account ID. | | passphrase | string | Endicia passphrase. |   ### FedEx  #### Sample Request – PUT or POST  ```json {  \"carrier_id\" : \"fedex\",  \"connection\" : {   \"key\" : \"yourFedexKey\",   \"password\" : \"yourFedexPassword\",   \"account_number\" : \"yourFedexAccountNumber\",   \"meter_number\" : \"yourFedexMeterNumber\"  } } ```  #### Sample Request – DELETE  ```json {  \"carrier_id\" : \"fedex\" } ```  #### FedEx Connection Object – Properties  FedEx `PUT` or `POST` requests require all of the following properties. (These requests won’t be fulfilled unless these properties are valid.) `DELETE` requests require only a `carrier_id`.   | Property | Type | Description |  | - | - | - | | key | string | FedEx account ID. |  | password | string | FedEx passphrase. | | account_number | string | FedEx account number. | | meter_number | string | FedEx meter number. |  ### Royal Mail  Sample Request - PUT or POST  ```json {     \"carrier_id\" : \"royalmail\",     \"connection\" : {              } } ```  Sample Request - DELETE  ```json {     \"carrier_id\" : \"royalmail\" } ```  #### Royal Mail Connection Object - Properties  Royal Mail has no connection object properties.   ### Zoom2U  #### Sample Request – PUT or POST  ```json {  \"carrier_id\" : \"zoom2u\",  \"connection\" : {   \"auth_key\" : \"yourZoom2uAuthKey\",   \"test_mode\" : false  } } ```  #### Sample Request – DELETE  ```json {  \"carrier_id\" : \"zoom2u\" } ```  #### Zoom2U Connection Object – Properties  Zoom2U `PUT` or `POST` requests require all of the following properties. (These requests won’t be fulfilled unless these properties are valid.) `DELETE` requests require only a `carrier_id`.   | Property | Type | Description |  | - | - | - | | auth_key | string | Zoom2U authorization key. | | test_mode | boolean | Whether or not to use Zoom2U test-mode settings. Acceptable values are `true` or `false`. |
     * Create a Carrier Connection
     */
    async shippingCarrierConnectionPostRaw(requestParameters: ShippingCarrierConnectionPostRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.accept === null || requestParameters.accept === undefined) {
            throw new runtime.RequiredError('accept','Required parameter requestParameters.accept was null or undefined when calling shippingCarrierConnectionPost.');
        }

        if (requestParameters.contentType === null || requestParameters.contentType === undefined) {
            throw new runtime.RequiredError('contentType','Required parameter requestParameters.contentType was null or undefined when calling shippingCarrierConnectionPost.');
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
            path: `/shipping/carrier/connection`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: CarrierConnectionToJSON(requestParameters.body),
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Creates a *Carrier Connection*.   Carrier connections refer to specific settings required to connect to a specific shipping carrier. Each carrier requires your app to supply a unique set of properties/fields to establish a connection with that carrier.  *Notes:*  - There is no `GET` with this resource. It has `PUT`, `POST` and `DELETE`.     * `PUT` is used to update. The connection can be updated via API.      - Connections created here do not enable the shipping method. To enable the carrier for a shipping zone, use the Shipping Methods API.   - The Carrier Connection resource returns a 204 for both succesful and unsuccesful attempts to connect. If a field is missing, it will return a 400.  ### Australia Post  #### Sample Request – PUT or POST  ```json {  \"carrier_id\" : \"auspost\",  \"connection\" : {   \"auth_key\" : \"yourAusPostAuthKey\",   \"test_mode\" : false  } } ```  #### Sample Request – DELETE  ```json {  \"carrier_id\" : \"auspost\" } ```  #### Australia Post Connection Object – Properties  Australia Post `PUT` or `POST` requests require all of the following properties. (These requests won’t be fulfilled unless these properties are valid.) `DELETE` requests require only a `carrier_id`.   | Property | Type | Description | - | - | - | | auth_key | string | Australia Post authorization key. | | test_mode | boolean | Whether or not to use Australia Post test-mode settings. Acceptable values are `true` or `false`. |   ### Endicia USPS is connected through Endicia.  #### Sample Request – PUT or POST  ```json { \"carrier_id\" : \"endicia\",  \"connection\": {   \"account_id\" : \"yourEndiciaAccountId\",   \"pass_phrase\" : \"yourEndiciaPassphrase\"  } } ```  #### Sample Request – DELETE  ```json {  \"carrier_id\" : \"endicia\" } ```  #### Endicia Connection Object – Properties  Endicia `PUT` or `POST` requests require all of the following properties. (These requests won’t be fulfilled unless these properties are valid.) `DELETE` requests require only a `carrier_id`.   | Property | Type | Description | | - | - | - | | account_id | string | Endicia account ID. | | passphrase | string | Endicia passphrase. |   ### FedEx  #### Sample Request – PUT or POST  ```json {  \"carrier_id\" : \"fedex\",  \"connection\" : {   \"key\" : \"yourFedexKey\",   \"password\" : \"yourFedexPassword\",   \"account_number\" : \"yourFedexAccountNumber\",   \"meter_number\" : \"yourFedexMeterNumber\"  } } ```  #### Sample Request – DELETE  ```json {  \"carrier_id\" : \"fedex\" } ```  #### FedEx Connection Object – Properties  FedEx `PUT` or `POST` requests require all of the following properties. (These requests won’t be fulfilled unless these properties are valid.) `DELETE` requests require only a `carrier_id`.   | Property | Type | Description |  | - | - | - | | key | string | FedEx account ID. |  | password | string | FedEx passphrase. | | account_number | string | FedEx account number. | | meter_number | string | FedEx meter number. |  ### Royal Mail  Sample Request - PUT or POST  ```json {     \"carrier_id\" : \"royalmail\",     \"connection\" : {              } } ```  Sample Request - DELETE  ```json {     \"carrier_id\" : \"royalmail\" } ```  #### Royal Mail Connection Object - Properties  Royal Mail has no connection object properties.   ### Zoom2U  #### Sample Request – PUT or POST  ```json {  \"carrier_id\" : \"zoom2u\",  \"connection\" : {   \"auth_key\" : \"yourZoom2uAuthKey\",   \"test_mode\" : false  } } ```  #### Sample Request – DELETE  ```json {  \"carrier_id\" : \"zoom2u\" } ```  #### Zoom2U Connection Object – Properties  Zoom2U `PUT` or `POST` requests require all of the following properties. (These requests won’t be fulfilled unless these properties are valid.) `DELETE` requests require only a `carrier_id`.   | Property | Type | Description |  | - | - | - | | auth_key | string | Zoom2U authorization key. | | test_mode | boolean | Whether or not to use Zoom2U test-mode settings. Acceptable values are `true` or `false`. |
     * Create a Carrier Connection
     */
    async shippingCarrierConnectionPost(requestParameters: ShippingCarrierConnectionPostRequest, initOverrides?: RequestInit): Promise<void> {
        await this.shippingCarrierConnectionPostRaw(requestParameters, initOverrides);
    }

    /**
     * Updates a *Carrier Connection*.  Updating the carrier connection is done using the same information as creating the connection. This endpoint can be used to update credentials.
     * Update a Carrier Connection
     */
    async updateACarrierConnectionRaw(requestParameters: UpdateACarrierConnectionRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.accept === null || requestParameters.accept === undefined) {
            throw new runtime.RequiredError('accept','Required parameter requestParameters.accept was null or undefined when calling updateACarrierConnection.');
        }

        if (requestParameters.contentType === null || requestParameters.contentType === undefined) {
            throw new runtime.RequiredError('contentType','Required parameter requestParameters.contentType was null or undefined when calling updateACarrierConnection.');
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
            path: `/shipping/carrier/connection`,
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: CarrierConnectionToJSON(requestParameters.body),
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Updates a *Carrier Connection*.  Updating the carrier connection is done using the same information as creating the connection. This endpoint can be used to update credentials.
     * Update a Carrier Connection
     */
    async updateACarrierConnection(requestParameters: UpdateACarrierConnectionRequest, initOverrides?: RequestInit): Promise<void> {
        await this.updateACarrierConnectionRaw(requestParameters, initOverrides);
    }

}
