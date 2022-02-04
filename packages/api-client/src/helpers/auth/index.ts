import jwt from 'jsonwebtoken';
import { BigcommerceIntegrationContext, COOKIE_KEY_CUSTOMER_DATA } from '../..';

export const getCustomerIdFromCookie = (
  context: BigcommerceIntegrationContext
): number => {
  const {
    config: {
      sdkSettings: { devtoolsAppSecret }
    },
    req
  } = context;

  try {
    if (req.cookies[COOKIE_KEY_CUSTOMER_DATA]) {
      const decodedToken = jwt.verify(
        req.cookies[COOKIE_KEY_CUSTOMER_DATA],
        devtoolsAppSecret
      );
      if (decodedToken?.customer?.id) {
        return decodedToken.customer.id;
      }
    }
  } catch (error) {
    throw { statusCode: 401, error };
  }

  throw { statusCode: 404, error: 'No customer ID' };
};
