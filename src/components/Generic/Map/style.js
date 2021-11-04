import styled from "styled-components";
import { ReactComponent as map } from "../../../assets/icons/map.svg";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  min-width: 44px;
  height: 44px;
  min-height: 44px;
  border-radius: 50%;
  border: 3px solid #edeff3;
  cursor: pointer;
`;
export const Map = styled(map)`
  box-sizing: content-box;
  width: 21px;
  height: 21px;
`;
