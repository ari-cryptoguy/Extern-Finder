import { takeEvery, fork, put, all, call } from 'redux-saga/effects';

// Login Redux States
import { CHECK_LOGIN, LOGOUT_USER } from './actionTypes';
import { apiError, loginUserSuccessful, logoutUserSuccess } from './actions';

// AUTH related methods
import { postLogin } from '../../../helpers/fackBackend_Helper';
import { getFirebaseBackend } from '../../../helpers/firebase_helper';

//Initilize firebase
const fireBaseBackend = getFirebaseBackend();

//If user is login then dispatch redux action's are directly from here.
function* loginUser({ payload: { user, history } }) {
        try {
            if(process.env.REACT_APP_DEFAULTAUTH === "firebase") {
                const response = yield call(fireBaseBackend.loginUser, user.username, user.password);
                yield put(loginUserSuccessful(response));
            }
            else {
                const response = yield call(postLogin, '/post-login', {username: user.username, password: user.password});
                localStorage.setItem("authUser", JSON.stringify(response));
                yield put(loginUserSuccessful(response));
            }
            history.push('/dashboard');
        } catch (error) {
            yield put(apiError(error));
        }
}

function* logoutUser({ payload: { history } }) {
    try {
        localStorage.removeItem("authUser");

        if (process.env.REACT_APP_DEFAULTAUTH === 'firebase') {
            const response = yield call(fireBaseBackend.logout);
            yield put(logoutUserSuccess(response));
        }

        history.push('/login');
    } catch (error) {
        yield put(apiError(error));
    }
}

export function* watchUserLogin() {
    yield takeEvery(CHECK_LOGIN, loginUser)
}

export function* watchUserLogout() {
    yield takeEvery(LOGOUT_USER, logoutUser)
}

function* loginSaga() {
    yield all([
        fork(watchUserLogin),
        fork(watchUserLogout),
    ]);
}

export default loginSaga;