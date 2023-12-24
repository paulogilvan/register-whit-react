import ReactDOM from 'react-dom/client';
import GlobalStyle from './styles/globalStyle';
import { BrowserRouter } from "react-router-dom";
import MainRoutes from './MainRoutes';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <MainRoutes />
    <GlobalStyle />
  </BrowserRouter>,
);
