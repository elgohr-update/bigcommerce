/* eslint-disable global-require */
import { addItem } from '../../src/useGuestWishlist/actions';
import { contextMock } from '../../__mocks__/context.mock';
import { Wishlist, WishlistItem } from '../../src/types';

describe('[BigCommerce - composables] useGuestWishlist addItem', () => {
  let getProductsMock: jest.Mock<any, any>;
  const wishlistItemParams = {
    productId: 1,
    variantId: 1
  };

  beforeEach(() => {
    jest.clearAllMocks();
    jest.resetModules();
    jest.spyOn(window.localStorage.__proto__, 'setItem');
    window.localStorage.__proto__.setItem = jest.fn();

    getProductsMock = jest.fn();
    contextMock.$bigcommerce.api.getProducts = getProductsMock;
  });

  it('should add item to the items array', async () => {
    const { guestWishlistMock: wishlistMock }: { guestWishlistMock: Wishlist } = require(
      '../../__mocks__/useGuestWishlist/guestWishlist.mock'
    );

    const wishlistItem: WishlistItem = { id: '1_1', product_id: 1, variant_id: 1 };
    const expectedItems: Wishlist['items'] = [wishlistItem];

    const res = await addItem(contextMock, wishlistMock, wishlistItemParams);

    expect(res.items).toStrictEqual(expectedItems);
  });

  it('should call api to get products from guest wishlists', async () => {
    const { guestWishlistMock: wishlistMock }: { guestWishlistMock: Wishlist } = require(
      '../../__mocks__/useGuestWishlist/guestWishlist.mock'
    );
    const expectedParams = { 'id:in': [1], include: 'variants' };

    await addItem(contextMock, wishlistMock, wishlistItemParams);

    expect(getProductsMock).toHaveBeenCalledTimes(1);
    expect(getProductsMock).toHaveBeenCalledWith(expectedParams);
  });

  it('should not add item to items array if it is there', async () => {
    const { guestWishlistMock: wishlistMock }: { guestWishlistMock: Wishlist } = require(
      '../../__mocks__/useGuestWishlist/guestWishlist.mock'
    );
    const wishlistItem: WishlistItem = { id: '1_1', product_id: 1, variant_id: 1 };
    wishlistMock.items.push(wishlistItem);
    const expectedLength = 1;

    const res = await addItem(contextMock, wishlistMock, wishlistItemParams);

    expect(getProductsMock).toHaveBeenCalledTimes(0);
    expect(res.items).toHaveLength(expectedLength);
  });
});
