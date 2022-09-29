// @packages
import Container from '@mui/material/Container';
import { FC } from 'react';

const HomePage: FC = () => (
  <Container
    maxWidth="sm"
    sx={{
      my: 4,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    }}
  >
    React baseline
  </Container>
);

export default HomePage;
