/** @jsx jsx */
import { jsx } from "@emotion/core";
import { connect } from "react-redux";
import ListItem from "@material-ui/core/ListItem";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import Button from "@material-ui/core/Button";
import { setPostWorkOrderList } from "../actions";

export const AvailableWorkOrderListPopupUnwrapped = (props) => {
  return (
    <Dialog
      onClose={props.handleClose}
      aria-labelledby="customized-dialog-title"
      open={props.isModalOpen}
    >
      <MuiDialogTitle id="customized-dialog-title" onClose={props.handleClose}>
        Available WorkOrders
      </MuiDialogTitle>
      <MuiDialogContent dividers>
        {props.availableWorkorder.length === 0 ? (
          <Button
            color="primary"
            onClick={() => {
              props.handleClose();
            }}
            gutterBottom
          >
            {"No workorder available for this date"}
          </Button>
        ) : (
          props.availableWorkorder.map((workorder) => {
            return (
              <ListItem>
                <Button
                  color="primary"
                  onClick={() => {
                    props.setPostWorkOrderList(
                      workorder.JobName,
                      workorder.name,
                      props.assignedTo,
                      props.selectedDate
                    );
                    props.handleClose();
                  }}
                  gutterBottom
                >
                  {workorder.name}
                </Button>
              </ListItem>
            );
          })
        )}
      </MuiDialogContent>
    </Dialog>
  );
};

export const AvailableWorkOrderListPopup = connect(null, {
  setPostWorkOrderList,
})(AvailableWorkOrderListPopupUnwrapped);
