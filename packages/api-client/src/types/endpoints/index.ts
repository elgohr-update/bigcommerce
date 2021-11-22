import { CreateCustomerParameters, CustomerData } from '../customers';
import { GetProductsParameters, ProductsResponse } from '../product';
import { BigcommerceIntegrationContext } from '../context';
import {
  GetProductReviewProps,
  GetProductReviewCollectionProps,
  GetProductReviewCollectionQuery,
  ProductReviewResponse,
  ProductReviewCollectionResponse,
  CreateProductReviewProps
} from '../review';
import {
  CategoryParameters,
  CategoryResponse,
  CategoryTreeResponse
} from '../category';

/**
 * Definition of all API-client methods available in context.
 */
export interface Endpoints {
  /**
   * Returns a list of Products.
   * @param {BigcommerceIntegrationContext} context An auto-generated value prepended to the method as a first parameter.
   * @param {GetProductsParameters} props An object containing the filters for products.
   */
  getProducts(
    context: BigcommerceIntegrationContext,
    params: GetProductsParameters
  ): Promise<ProductsResponse>;

  /*
   * Creates the new customer
   * @param {BigcommerceIntegrationContext} context An auto-generated value prepended to the method as a first parameter.
   * @param {CreateCustomerParameters} params Parameters for `createCustomer` endpoint
   */
  createCustomer(
    context: BigcommerceIntegrationContext,
    params: CreateCustomerParameters
  ): Promise<CustomerData>;

  /**
   * Returns a single Product Review.
   * @param {BigcommerceIntegrationContext} context An auto-generated value prepended to the method as a first parameter.
   * @param {GetProductReviewProps} props An object which contains necessary properties for getting a product review data.
   */
  getProductReview(
    context: BigcommerceIntegrationContext,
    props: GetProductReviewProps
  ): Promise<ProductReviewResponse>;

  /**
   * Returns a colection of Product Reviews.
   * @param {BigcommerceIntegrationContext} context An auto-generated value prepended to the method as a first parameter.
   * @param {GetProductReviewCollectionProps} props An object which contains necessary properties for getting a product reviews collection.
   * @param {GetProductReviewCollectionQuery} query (Optional) An object which contains optional properties for getting a product reviews collection.
   */
  getProductReviewCollection(
    context: BigcommerceIntegrationContext,
    props: GetProductReviewCollectionProps,
    query?: GetProductReviewCollectionQuery
  ): Promise<ProductReviewCollectionResponse>;

  /**
   * Returns a colection of Category.
   * @param {BigcommerceIntegrationContext} context An auto-generated value prepended to the method as a first parameter.
   * @param {GetCategoryParams} params An object which contains necessary parameters for getting a category.
   */
  getCategory(
    context: BigcommerceIntegrationContext,
    params: CategoryParameters
  ): Promise<CategoryResponse>;

  /**
   * Returns a colection of CategoryTree.
   * @param {BigcommerceIntegrationContext} context An auto-generated value prepended to the method as a first parameter.
   */
  getCategoryTree(
    context: BigcommerceIntegrationContext
  ): Promise<CategoryTreeResponse>;

  /**
   * Creates a Product Review.
   * @param {BigcommerceIntegrationContext} context An auto-generated value prepended to the method as a first parameter.
   * @param {CreateProductReviewProps} props An object which contains necessary properties for creating a product review.
  */
   createProductReview(
    context: BigcommerceIntegrationContext,
    props: CreateProductReviewProps
  ): Promise<ProductReviewResponse>

}