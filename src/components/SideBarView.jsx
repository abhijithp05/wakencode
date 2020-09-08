/** @jsx jsx */
import { jsx } from "@emotion/core";
import {
  StyledReceiptIcon,
  StyledGraphicEqIcon,
  StyledHomeIcon,
  StyledMenuBookIcon,
  StyledDashboardIcon,
  StyledSettingsIcon,
  StyledFeedbackIcon,
} from "../styles";

export const SideBarView = (props) => {
  return (
    <div css={props.styleObject}>
      <StyledGraphicEqIcon />
      <StyledHomeIcon />
      <StyledMenuBookIcon />
      <StyledDashboardIcon />
      <StyledReceiptIcon />
      <StyledSettingsIcon />
      <StyledFeedbackIcon />
    </div>
  );
};
