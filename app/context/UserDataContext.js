import createDataContext from './createDataContext';
import trackerApi from '../api/tracker';

const dataReducer = (state, action) => {
    switch (action.type) {
        case 'fetch_user_firstName':
            return { ...state, firstName: action.payload };
        case 'fetch_user_lastName':
            return { ...state, lastName: action.payload };
        case 'fetch_user_email':
            return { ...state, email: action.payload };
        case 'fetch_user_homeAdd':
            return { ...state, homeAddress: action.payload };
        case 'fetch_user_schoolAdd':
            return { ...state, schoolAddress: action.payload };
        default:
            return state;
    }
}

const fetchData = dispatch => async () => {
    const response = await trackerApi.get('/userData');
    dispatch({ type: 'fetch_user_firstName', payload: response.data.firstName });
    dispatch({ type: 'fetch_user_lastName', payload: response.data.lastName });
    dispatch({ type: 'fetch_user_email', payload: response.data.email });
    dispatch({ type: 'fetch_user_homeAdd', payload: response.data.homeAddress });
    dispatch({ type: 'fetch_user_schoolAdd', payload: response.data.schoolAddress });
    
};

export const { Provider, Context } = createDataContext(
    dataReducer,
    { fetchData },
    { firstName: '', lastName: '', email: '', homeAddress: '', schoolAddress: '' }
);