import { uiActions } from './ui-slice';
import { cartActions } from './cart-slice';

const FIREBASE_URL = process.env.REACT_APP_FIREBASE_URL;

export const fetchCartData = () => {
  return async dispatch => {
    const fetchData = async () => {
      const response = await fetch(FIREBASE_URL + '/cart.json');

      if (!response.ok) {
        throw new Error('Sending cart data failed.');
      }

      const data = await response.json();

      return data;
    };

    try {
      const cartData = await fetchData();
      dispatch(cartActions.replaceCart(cartData));
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: 'error',
          title: 'Error!',
          message: 'Fetching cart data failed!',
        })
      );
    }
  };
};

export const sendCartData = cartData => {
  return async dispatch => {
    dispatch(
      uiActions.showNotification({
        status: 'pending',
        title: 'Sending...',
        message: 'Sending cart data!',
      })
    );

    const sendRequest = async () => {
      const response = await fetch(FIREBASE_URL + '/cart.json', {
        method: 'PUT',
        body: JSON.stringify(cartData),
      });

      if (!response.ok) {
        throw new Error('Sending cart data failed.');
      }
    };

    try {
      await sendRequest();
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: 'error',
          title: 'Error!',
          message: 'Sending cart data failed!',
        })
      );
    }

    dispatch(
      uiActions.showNotification({
        status: 'success',
        title: 'Success!',
        message: 'Sent cart data successfully!',
      })
    );
  };
};
