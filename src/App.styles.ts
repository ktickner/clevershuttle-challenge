import { styled } from "@mui/material";
import Container from "@mui/material/Container";

export const AppContainer = styled(Container)`
  padding: ${({ theme }) => theme.spacing(4, 0)};
`;
