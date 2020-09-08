import { SET_POST_WORKORDER_LIST } from "../actions";

const workOrderList = require("../sampleJson/getWorkOrderList.json").job;
const postWorkOrderList = require("../sampleJson/postWorkOrderList.json").job;
const employeeList = require("../sampleJson/getEmployeeList.json").Employess;

const inetialState = {
  employeeList: employeeList,
  postWorkOrderList: postWorkOrderList,
  workOrderList: workOrderList,
};

export default function (state = inetialState, action) {
  switch (action.type) {
    case SET_POST_WORKORDER_LIST:
      let updatedPostWorkOrderList = state.postWorkOrderList.map(
        (item) => item
      );
      updatedPostWorkOrderList.forEach((workorder) => {
        if (workorder.jobname === action.jobname) {
          workorder.workorders.map((item) => {
            if (item.name === action.workorderName) {
              item.Employee = action.assignedTo;
              item.Date = new Date(action.selectedDate);
            }
          });
        }
      });
      return {
        ...state,
        postWorkOrderList: updatedPostWorkOrderList,
      };

    default:
      return state;
  }
}
