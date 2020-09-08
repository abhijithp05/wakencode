/** @jsx jsx */
import { jsx } from "@emotion/core";
import styled from "@emotion/styled";
import Paper from "@material-ui/core/Paper";
import { connect } from "react-redux";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableRow from "@material-ui/core/TableRow";
import { StyledTableCell, StyledTableContainer } from "../styles";

const dateList = [
  new Date("20-Apr-20"),
  new Date("21-Apr-20"),
  new Date("22-Apr-20"),
  new Date("23-Apr-20"),
  new Date("24-Apr-20"),
  new Date("25-Apr-20"),
];

const UnassignedWorkOrderListUnwrapped = (props) => {
  return (
    <StyledTableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableBody>
          {props.workOrderList.map((job, index) => {
            return (
              <TableRow key={"TableRow" + job.jobname + index}>
                <StyledTableCell key={job.jobname + index} align="right">
                  {job.jobname}
                </StyledTableCell>
                {dateList.map((date, index) => {
                  return (
                    <StyledTableCell key={date.getDate() + index} align="right">
                      {job.workorders.map((workorder) => {
                        if (
                          date.getDate() === new Date(workorder.Date).getDate()
                        ) {
                          return workorder.name;
                        } else {
                          return "";
                        }
                      })}
                    </StyledTableCell>
                  );
                })}
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </StyledTableContainer>
  );
};

const mapStateToProps = (state) => {
  return {
    workOrderList: state.get.workOrderList,
  };
};

export const UnassignedWorkOrderList = connect(
  mapStateToProps,
  null
)(UnassignedWorkOrderListUnwrapped);
