import { fakeInterests, fakeSkills } from '../dummy-data';

// Actions to change loading state before and after request
export const getRequestStart = () => ({
  type: 'GET_REQUEST_START'
});

export const getRequestSuccess = () => ({
  type: 'GET_REQUEST_SUCCESS'
});

// Not used in this instance since everything is ignored from server request
export const getRequestFailure = (error) => ({
  type: 'GET_REQUEST_FAILURE',
  error
});

// Action to load data into app state
export const loadData = (interests, skills) => ({
  type: 'LOAD_DATA',
  interests,
  skills
});

// Async function to load data, 
// sets a loading flag that the UI will use for a spinner
export const getData = () => {
  return (dispatch) => {
    dispatch(getRequestStart());
    return fetch('/', {
      method: 'GET',
    }).then(
      () => {
        // Ignoring anything returned from server, including errors

        // load dummy data here
        dispatch(loadData(fakeInterests, fakeSkills));
        dispatch(getRequestSuccess());

        // normally a dispatch getRequestError if anything went wrong
      }
    )
  }
}