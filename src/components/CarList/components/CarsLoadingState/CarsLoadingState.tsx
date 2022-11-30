import CircularProgress from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";

import * as S from "./CarsLoadingState.styles";

const LoadingState = () => {
  return (
    <S.LoadingStateContainer>
      <CircularProgress />
      <Typography>Loading cars</Typography>
    </S.LoadingStateContainer>
  );
};

export default LoadingState;
