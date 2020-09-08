/** @jsx jsx */
import { jsx } from "@emotion/core";
import styled from "@emotion/styled";
import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";
import {
  search,
  searchIcon,
  grow,
  inputInput,
} from "../styles";

const StyledAppBar = styled(AppBar)`
  ${grow}
`;

export class NavBar extends React.Component {
  render() {
    return (
      <div css={grow}>
        <StyledAppBar position="static">
          <Toolbar>
            <Typography variant="h6" noWrap>
              WakenCode WorkOrder
            </Typography>
            <div css={search}>
              <div css={searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder="Search…"
                css={inputInput}
                inputProps={{ "aria-label": "search" }}
              />
            </div>
            <div css={grow} />
          </Toolbar>
        </StyledAppBar>
      </div>
    );
  }
}
