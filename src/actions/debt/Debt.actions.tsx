import { ssClient } from "../../axios/ss.client";

export const debtTypes = {
    GET_DEBTS: 'GET_ALL_DEBTS',
    PAID_DEBT: 'UPDATE_PAID_DEBT',
    ACCEPT_PAYMENT: 'UPDATE_ACCEPTED_PAYMENT',
    FAILED_GET_DEBT: 'FAILED_GETTING_DEBT',
    FAILED_PAID_DEBT: 'FAILED_PAYING_DEBT',
    FAILED_ACCEPT_DEBT: 'FAILED_ACCEPTING_DEBT'
}

  export const getDebts = (userId:number) => async (dispatch) => {
    try {
        const res = await ssClient.get(`/debts/users/${userId}`);
        console.log(res)
        dispatch({
            payload: {
                debts: res.data
            },
            type: debtTypes.GET_DEBTS
        })
    } catch (err) {
        console.log(err);
        dispatch({
            payload: {
            },
            type: debtTypes.FAILED_GET_DEBT
        })
    }
}

export const paidDebt = (debtId:number) => async (dispatch) => {
  try {
      const res = await ssClient.patch(`/debts/paid/${debtId}`);
      console.log(res)
      dispatch({
          payload: {
              debts: res.data
          },
          type: debtTypes.PAID_DEBT
      })
  } catch (err) {
      console.log(err);
      dispatch({
          payload: {
          },
          type: debtTypes.FAILED_PAID_DEBT
      })
  }
}

export const acceptDebt = (debtId:number) => async (dispatch) => {
  try {
      const res = await ssClient.patch(`/debts/verified/${debtId}`);
      console.log(res)
      dispatch({
          payload: {
              debts: res.data
          },
          type: debtTypes.ACCEPT_PAYMENT
      })
  } catch (err) {
      console.log(err);
      dispatch({
          payload: {
          },
          type: debtTypes.FAILED_ACCEPT_DEBT
      })
  }
}