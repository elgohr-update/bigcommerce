import { CreateWishlistProps } from '../../../src/types';
import { createWishlist } from '../../../src/api/wishlist';
import { contextMock } from '../../../__mocks__/context.mock';
import { COOKIE_KEY_CUSTOMER_DATA } from '../../../src/helpers/consts';
import jwt from 'jsonwebtoken';

const customerId = 1;
const jwtVerifyMock = jest.spyOn(jwt, 'verify');
jwtVerifyMock.mockReturnValue({ customer: { id: customerId } });
contextMock.req = {
  cookies: {
    [COOKIE_KEY_CUSTOMER_DATA]: 'token'
  }
};

describe('[BigCommerce-api-client] create wishlist', () => {
  beforeEach(() => {
    contextMock.client.v3.post = jest.fn(() => Promise.resolve());
  });

  it('should call api with expected props', async () => {
    // Given
    const props: CreateWishlistProps = {
      name: 'Test wishlist',
      is_public: true,
      items: []
    };
    const expectedEndpoint = '/wishlists';

    // When
    await createWishlist(contextMock, props);

    // Then
    expect(contextMock.client.v3.post).toHaveBeenLastCalledWith(expectedEndpoint, {
      ...props,
      customer_id: customerId
    });
  });

  it('should throw an error when name was not provided', async () => {
    const props: CreateWishlistProps = {
      name: undefined,
      is_public: true,
      items: []
    };

    try {
      await createWishlist(contextMock, props);
    } catch (error) {
      const expectedErrorMessage = `Name with value: ${props.name} is not valid. Use string value.`;
      expect(error.message).toBe(expectedErrorMessage);
    } finally {
      expect(contextMock.client.v3.post).toHaveBeenCalledTimes(0);
    }
  });

  it('should throw an error when customer id was not provided', async () => {
    jwtVerifyMock.mockReturnValue({ customer: { id: undefined } });

    const props: CreateWishlistProps = {
      name: 'Test wishlist',
      is_public: true,
      items: []
    };

    try {
      await createWishlist(contextMock, props);
    } catch (error) {
      const expectedErrorMessage = 'No customer ID';
      expect(error.message).toBe(expectedErrorMessage);
    } finally {
      expect(contextMock.client.v3.post).toHaveBeenCalledTimes(0);
    }
  });
});
