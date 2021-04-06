import { AsyncStorage } from 'react-native';
import createDataContext from './createDataContext';
import trackerApi from '../api/tracker';
import { navigate } from '../navigationRef';

const authReducer = (state, action) => {
    switch (action.type) {
        case 'add_error':
            return { ...state, errorMessage: action.payload };
        case 'signin':
            return { errorMessage: '', token: action.payload };
        case 'clear_error_message':
            return { ...state, errorMessage: ''};
        case 'signout':
            return { token: null, errorMessage: ''};
        // case 'profile':
        //     return { firstName: action.payload}
        // case 'homeAddress':
        //     return { ...state, homeAddress: action.payload };
        // case 'schoolAddress':
        //     return { ...state, schoolAddress: action.payload };
        default:
            return state;
    }
};

// const destination = dispatch => async () => {
//     const schoolAddress = await AsyncStorage.getItem('schoolAddress');
//     if (schoolAddress) {
//         dispatch({ type: 'schoolAddress', payload: schoolAddress });
//     }
// }

// const origin = dispatch => async () => {
//     const homeAddress = await AsyncStorage.getItem('homeAddress');
//     if (homeAddress) {
//         dispatch({ type: 'homeAddress', payload: homeAddress });
//     }
// }

const tryLocalSignin = dispatch => async () => {
    const token = await AsyncStorage.getItem('token');
    if (token) {
        dispatch({ type: 'signin', payload: token });
        navigate('mainFlow');
    }
    else {
        navigate('loginFlow');
    }
}

const clearErrorMessage = dispatch => () => {
    dispatch({ type: 'clear_error_message' });
};

const signup = (dispatch) => async ({ firstName, lastName, dateOfBirth, email, password, homeAddress, schoolAddress }) => {
    try {
        const response = await trackerApi.post('/signup', { firstName, lastName, dateOfBirth, email, password, homeAddress, schoolAddress });
        await AsyncStorage.setItem('token', response.data.token);
        // await AsyncStorage.setItem('homeAddress', response.data.homeAddress);
        // await AsyncStorage.setItem('schoolAddress', response.data.schoolAddress);
        dispatch({ type: 'signin', payload: response.data.token });

        navigate('mainFlow');

    } catch (err) {
        dispatch({ type: 'add_error', payload: 'Something went wrong with sign up' });
    }
};

const signin = (dispatch) => async ({ email, password }) => {
    try {
        const response = await trackerApi.post('/signin', { email, password });
        await AsyncStorage.setItem('token', response.data.token);
        // await AsyncStorage.getItem('firstName', response.data.firstName);
        // console.log(response.data.firstName);
        // await AsyncStorage.setItem('homeAddress', response.data.homeAddress);
        // await AsyncStorage.setItem('schoolAddress', response.data.schoolAddress);
        dispatch({ type: 'signin', payload: response.data.token });
        // dispatch({ type: 'profile', payload: response.data.firstName });
        navigate('mainFlow')
    } catch (err) {
        dispatch({ type: 'add_error', payload: 'Something went wrong with sign in' });
    }
};



// const userData = (dispatch) => async ({firstName, lastName}) => {
//     try {
//         const response = await trackerApi.get('/userData', {firstName, lastName});
//         console.log(response.data);
//         dispatch({ type: 'profile', payload: response.data.firstName });
//     } catch (err) {
//         console.log(err);
//     }
// }

// const firstname = (dispatch) => async ({ firstName }) => {
//     try {
//         const response = await trackerApi.get('/profile', { firstName });
//         await AsyncStorage.getItem('firstName', response.data.firstName);
//         dispatch({ type: 'profile', payload: response.data.firstName });
//     } catch (err) {
//         dispatch({ type: 'add_error', payload: 'Something went wrong' });
//     }
// } 

const signout = (dispatch) => async () => {
    await AsyncStorage.removeItem('token');
    dispatch({ type: 'signout' });
    navigate('loginFlow');  
};

export const { Provider, Context } = createDataContext(
    authReducer,
    { signin, signout, signup, clearErrorMessage, tryLocalSignin },
    { token: null, errorMessage: ''}
);