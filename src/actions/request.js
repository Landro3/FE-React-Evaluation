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
export const loadData = (
  interests, 
  skills,
  interestColors,
  skillColors
) => ({
  type: 'LOAD_DATA',
  interests,
  skills,
  interestColors,
  skillColors
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

        // Color list used for skill/interest types
        const typeColors = [
          '#7E1711',
          '#1A5B1C',
          '#1E14DB',
          '#595512',
          '#14615D',
          '#8C0BA2',
          '#7D440B',
          '#3A5C26',
          '#263c5c',
          '#673C4C',
          '#614438',
          '#618a51',
          '#3A3F64',
          '#544B30',
          '#334E2D',
          '#395763',
          '#695047',
          '#30463B',
          '#5f4769',
          '#4C4F36',
        ];

        // Map types to color dictionaries for each type
        // Two dictionaries so that colors don't overlap
        const interestColors = {};
        const skillColors = {};
        let i = 0; // index to track color used

        fakeInterests.forEach(interest => {
          if (interestColors[interest.type] === undefined) {
            interestColors[interest.type] = typeColors[i];
            i++;
          }
        });

        fakeSkills.forEach(skill => {
          if (skillColors[skill.type] === undefined) {
            skillColors[skill.type] = typeColors[i];
            i++;
          }
        });

        // load dummy data here
        dispatch(loadData(fakeInterests, fakeSkills, interestColors, skillColors));
        dispatch(getRequestSuccess());

        // normally a dispatch getRequestError if anything went wrong
      }
    )
  }
}