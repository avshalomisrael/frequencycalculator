import { Paper } from '@mui/material';
import styled from '@mui/material/styles/styled';

// export const theme = createTheme({
//     palette: {
//       primary: {
//         main: '#1976d2',
//       },
//       secondary: {
//         main: '#dc004e',
//       },
//     },
//     spacing: 8,
// });

export const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: '#fff',
    padding: theme.spacing(1),
    textAlign: 'center',
  }));