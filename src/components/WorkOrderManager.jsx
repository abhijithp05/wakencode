/** @jsx jsx */
import { jsx } from "@emotion/core";
import Grid from "@material-ui/core/Grid";
import {
  WorkOrderList,
  NavBar,
  SideBarView,
} from "./index";
import {
  fullContainerHeight,
  rootContainer,
  mainContainerHeight,
  sideBarFixWidth,
  sideBarStyles,
} from "../styles";

export const WorkOrderManager = (props) => {
  return (
    <div css={rootContainer}>
      <NavBar />
      <Grid css={fullContainerHeight} container>
        <Grid css={(fullContainerHeight, sideBarFixWidth)} item xs={1}>
          <SideBarView styleObject={sideBarStyles} />
        </Grid>
        <Grid css={mainContainerHeight} item xs={11}>
          <WorkOrderList />
        </Grid>
      </Grid>
    </div>
  );
};

