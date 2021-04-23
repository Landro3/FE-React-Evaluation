export default function user(state = initialUserState, action) {
    switch (action.type) {
        case 'GET_REQUEST_START':
            return {
                ...state,
                loading: true
            };
        
        case 'GET_REQUEST_SUCCESS':
            return {
                ...state,
                loading: false
            };

        case 'GET_REQUEST_FAILURE':
            return {
                ...state,
                loading: false,
                error: action.error
            };

        case 'LOAD_DATA':
            return {
                ...state,
                interests: action.interests,
                skills: action.skills,
                interestColors: action.interestColors,
                skillColors: action.skillColors
            };

        case 'SET_USERNAME':
            return {
                ...state,
                userName: action.userName
            };

        default:
            return state;
    }
}

const initialUserState = {
    userName: '',
    interests: [],
    skills: [],
    interestColors: {},
    skillColors: {},
    loading: false,
    error: undefined
};
