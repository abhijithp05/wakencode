/** @jsx jsx */
import { css } from "@emotion/core";

export const paperStyles = css`
  color: rgba(0, 0, 0, 0.54);
  text-align: center;
  overflow-y: auto;
  max-height: 100%;
  height: 100%;
`;

export const search = css`
  margin-left: 38px;
  width: 40%;
  position: relative;
  margin-right: 16px;
  border-radius: 4px;
  background-color: rgba(255, 255, 255, 0.15);
`;

export const searchIcon = css`
  padding: 12px 16px;
  height: 100%;
  position: absolute;
  pointerevents: none;
  display: flex;
  alignitems: center;
  justifycontent: center;
`;

export const grow = css`
  && {
    flex-grow: 1;
    background-color: #0c2667;
  }
`;

export const inputRoot = css`
  color: inherit;
`;

export const inputInput = css`
  ${inputRoot};
  padding: 8px 8px 8px 0px;
  transition: width 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  padding-left: calc(1em + 32px);
`;

export const rootContainer = css`
  flex-grow: 1;
  flex-direction: column;
  height: 100%;
  overflow-y: hidden;
`;

export const fullContainerHeight = css`
  height: 100%;
`;

export const mainContainerHeight = css`
  height: 90%;
`;

export const sideBarFixWidth = css`
  width: 105px;
`;

export const sideBarStyles = css`
  background-color: #141419;
  width: 100%;
  height: 100%;
  overflow-y: hidden;
  color: #9d9ea3;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

export const sideBarIcons = css`
  && {
    font-size: 2rem;
    margin: 15px 0;
  }
`;

