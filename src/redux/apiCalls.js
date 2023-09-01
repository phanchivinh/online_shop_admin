import { publicRequest } from "../requestMethod"
import { getProductFailure, getProductStart, getProductSuccess } from "./productRedux"
import { loginFailure, loginStart, loginSuccess } from "./userRedux"

export const login = async (dispatch, user) => {
  dispatch(loginStart())
  try {
    const res = await publicRequest.post("/v1/auth/user/sign-in", user)
    dispatch(loginSuccess(res.data))
  } catch (error) {
    dispatch(loginFailure())
  }
}

export const getProducts = async (dispatch) => {
  const accessToken = useSelector(state => state.auth.accessToken)
  try {
    const res = await publicRequest.get("/v1/management/products/", {
      headers: { Authorization: `Bearer ${accessToken}` }
    })
    dispatch(getProductSuccess(res.data))
  } catch (error) {
    dispatch(getProductFailure())
  }
}
