import { styled } from "@mui/material";

export const LoadingStateContainer = styled("div")`
  height: 100%;
  min-height: ${({ theme }) => theme.spacing(60)};
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing(4)};
`;
