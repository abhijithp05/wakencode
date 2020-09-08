/** @jsx jsx */
import { jsx } from "@emotion/core";
import { useState } from "react";
import Paper from "@material-ui/core/Paper";
import { connect } from "react-redux";
import { paperStyles, StyledTableCell, StyledTableContainer } from "../styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { setPostWorkOrderList } from "../actions";
import { UnassignedWorkOrderList, AvailableWorkOrderListPopup } from "./index";

const dateList = [
  new Date("20-Apr-20"),
  new Date("21-Apr-20"),
  new Date("22-Apr-20"),
  new Date("23-Apr-20"),
  new Date("24-Apr-20"),
  new Date("25-Apr-20"),
];

const WorkOrderListUnwrapped = (props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [availableWorkorder, setAvailableWorkorder] = useState([]);
  const [selectedDate, setSelectedDate] = useState("");
  const [assignedTo, setAssignedTo] = useState("");

  const onTableCellClick = (selectedDate, employeeName) => {
    setAssignedTo(employeeName);
    getWorkOrderForSelectedDate(selectedDate);
    setIsModalOpen(true);
  };

  const onHandleClose = () => {
    setIsModalOpen(false);
  };

  const getWorkOrderForSelectedDate = (date) => {
    let selectedDate = date.getDate();
    let availableWorkorder = [];
    props.postWorkOrderList.map((job) => {
      job.workorders.filter((workorder) => {
        if (selectedDate === new Date(workorder.Date).getDate()) {
          workorder.JobName = job.jobname;
          availableWorkorder.push(workorder);
        }
      });
    });
    setSelectedDate(date);
    setAvailableWorkorder(availableWorkorder);
  };

  return (
    <Paper css={paperStyles}>
      <StyledTableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <StyledTableCell align="right">{"Employee Name"}</StyledTableCell>
              {dateList.map((date, index) => {
                return (
                  <StyledTableCell key={index} align="right">
                    {date.toDateString()}
                  </StyledTableCell>
                );
              })}
            </TableRow>
          </TableHead>
          <TableBody>
            {props.employeeList.map((row) => (
              <TableRow key={"TableRowWithDetails" + row.Name}>
                <StyledTableCell key={row.Name} align="right">
                  {row.Name}
                </StyledTableCell>
                {dateList.map((date) => {
                  return (
                    <StyledTableCell
                      key={date.getDate() + row.Name}
                      onClick={() => {
                        onTableCellClick(date, row.Name);
                      }}
                      align="right"
                    >
                      {props.postWorkOrderList.map((workOrderForEmployee) => {
                        return workOrderForEmployee.workorders.map(
                          (workorder) => {
                            if (
                              workorder.Employee === row.Name &&
                              date.getDate() ===
                                new Date(workorder.Date).getDate()
                            )
                              return (
                                <span
                                  key={"CellDetail" + row.Name + workorder.Date}
                                >
                                  {workorder.name}
                                  <br />
                                </span>
                              );
                            else return <span>{""}</span>;
                          }
                        );
                      })}
                    </StyledTableCell>
                  );
                })}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </StyledTableContainer>
      <UnassignedWorkOrderList />
      <AvailableWorkOrderListPopup
        isModalOpen={isModalOpen}
        handleClose={onHandleClose}
        availableWorkorder={availableWorkorder}
        selectedDate={selectedDate}
        assignedTo={assignedTo}
      />
    </Paper>
  );
};

const mapStateToProps = (state) => {
  return {
    employeeList: state.get.employeeList,
    postWorkOrderList: state.get.postWorkOrderList,
    workOrderList: state.get.workOrderList,
  };
};

export const WorkOrderList = connect(mapStateToProps, { setPostWorkOrderList })(
  WorkOrderListUnwrapped
);
