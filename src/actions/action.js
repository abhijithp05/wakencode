import * as action from "./actionTypes";

export const setPostWorkOrderList = (jobname,workorderName,assignedTo,selectedDate) => (
  dispatch
) => {
  dispatch({
    type: action.SET_POST_WORKORDER_LIST,
    workorderName,
    jobname,
    assignedTo,
    selectedDate
  });
};


