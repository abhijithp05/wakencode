/** @jsx jsx */
import { sideBarIcons } from "../styles";
import styled from "@emotion/styled";
import HomeIcon from "@material-ui/icons/Home";
import GraphicEqIcon from "@material-ui/icons/GraphicEq";
import DashboardIcon from "@material-ui/icons/Dashboard";
import SettingsIcon from "@material-ui/icons/Settings";
import FeedbackIcon from "@material-ui/icons/Feedback";
import MenuBookIcon from "@material-ui/icons/MenuBook";
import ReceiptIcon from "@material-ui/icons/Receipt";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";

export const StyledGraphicEqIcon = styled(GraphicEqIcon)`
  ${sideBarIcons}
`;

export const StyledDashboardIcon = styled(DashboardIcon)`
  ${sideBarIcons}
`;

export const StyledSettingsIcon = styled(SettingsIcon)`
  ${sideBarIcons}
`;

export const StyledFeedbackIcon = styled(FeedbackIcon)`
  ${sideBarIcons}
`;

export const StyledHomeIcon = styled(HomeIcon)`
  ${sideBarIcons}
`;

export const StyledMenuBookIcon = styled(MenuBookIcon)`
  ${sideBarIcons}
`;

export const StyledReceiptIcon = styled(ReceiptIcon)`
  ${sideBarIcons}
`;

export const StyledTableCell = styled(TableCell)`
  && {
    border: 1px solid black;
    height: 50px;
    width: 14%;
    font-weight:700
  }
`;

export const StyledTableContainer = styled(TableContainer)`
  margin-top: 20px;
  margin-bottom: 20px;
`;
