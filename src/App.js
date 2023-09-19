import { Route, Routes } from 'react-router';
import Login from './components/Login';
import SignUp from './components/SignUp';
import { Container } from '@mui/material';

function App() {
  return (
    <div className="App">
      <Container sx={{ height: '100vh', display: 'flex', justifyContent: "center", alignItems: 'center' }}>
        <Routes>
          <Route path='/' element={<SignUp />} />
          <Route path='/login' element={<Login />} />
        </Routes>
      </Container>

    </div>
  );
}

export default App;
