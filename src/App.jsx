import { Route, Routes } from 'react-router-dom';
import { SuggestionsPage } from './pages/suggestions-page/SuggestionsPage';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<SuggestionsPage />}></Route>
      </Routes>
    </>
  );
}

export default App;
