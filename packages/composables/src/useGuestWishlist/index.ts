import { Ref, computed } from '@vue/composition-api';
import { sharedRef, UseWishlistErrors, Logger, generateContext } from '@vue-storefront/core';
import { Context, Wishlist, WishlistItem } from '../types';
import { params } from './params';
/**
 *  Returns guest wishlist data and actions.
 *
 *  @remarks
 *  The `useGuestWishlist` composable has build in actions for loading, adding and removing items and veryfing if item is in the guest wishlist:
 *  - `{ load }` - Function for loading the guest wishlist.
 *  - `{ addItem }` - Function for adding product to the guest wishlist.
 *  - `{ removeItem }` - Function for removing product from the guest wishlist.
 *  - `{ clear }` - Function for removing all products from the guest wishlist.
 *  - `{ isInWishlist }` - Function for veryfing if product is in the guest wishlist.
 *
 *  @example
 *  Example of usage:
 *  ```vue
 *  <script>
 *  import { useGuestWishlist } from '@vue-storefront/bigcommerce';
 *
 *  setup (props) {
 *    const {
 *      wishlist,
 *      loading,
 *      error,
 *      load
 *    } = useGuestWishlist('wishlist');
 *
 *    onBeforeMount(() => {
 *      load()
 *    });
 *
 *    return {
 *      wishlist,
 *      loading
 *    }
 *  }
 *  </script>
 *  ```
 */
const useGuestWishlist = (id: string): any => {
  const wishlist: Ref<Wishlist> = sharedRef(null, `useGuestWishlist-wishlist-${id}`);
  const loading: Ref<boolean> = sharedRef(false, `useGuestWishlist-loading-${id}`);
  const error: Ref<UseWishlistErrors> = sharedRef({
    load: null,
    addItem: null,
    removeItem: null,
    clear: null,
    isInWishlist: null
  }, `useGuestWishlist-error-${id}`);

  const context = generateContext(params) as Context;

  const load = async (name: string, isPublic = true) => {
    try {
      loading.value = true;
      const response = await params.load(context, name, isPublic);
      wishlist.value = response;
      error.value.load = null;
    } catch (err) {
      error.value.load = err;
      Logger.error(`useGuestWishlist/${id}/load`, err);
    } finally {
      loading.value = false;
    }
  };

  const addItem = async (item: WishlistItem) => {
    try {
      loading.value = true;
      const response = await params.addItem(context, item);
      wishlist.value = response;
      error.value.addItem = null;
    } catch (err) {
      error.value.addItem = err;
      Logger.error(`useGuestWishlist/${id}/addItem`, err);
    } finally {
      loading.value = false;
    }
  };

  const removeItem = () => async (item: WishlistItem) => {
    try {
      loading.value = true;
      const response = await params.removeItem(context, item);
      wishlist.value = response;
      error.value.removeItem = null;
    } catch (err) {
      error.value.removeItem = err;
      Logger.error(`useGuestWishlist/${id}/removeItem`, err);
    } finally {
      loading.value = false;
    }
  };

  const clear = async () => {
    try {
      loading.value = true;
      const response = await params.clear(context);
      wishlist.value = response;
      error.value.clear = null;
    } catch (err) {
      error.value.clear = err;
      Logger.error(`useGuestWishlist/${id}/clear`, err);
    } finally {
      loading.value = false;
    }
  };

  const isInWishlist = (wishlist: Wishlist, wishlistItem: WishlistItem): boolean => {
    let result = false;

    try {
      loading.value = true;
      result = params.isInWishlist(wishlist, wishlistItem);
      error.value.clear = null;
    } catch (err) {
      error.value.clear = err;
      Logger.error(`useGuestWishlist/${id}/isInWishlist`, err);
    } finally {
      loading.value = false;
    }

    return result;
  };

  return {
    wishlist: computed(() => wishlist.value),
    loading: computed(() => loading.value),
    error: computed(() => error.value),
    load,
    addItem,
    removeItem,
    clear,
    isInWishlist
  };
};

export default useGuestWishlist;
