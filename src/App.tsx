import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import { RouterProvider } from 'react-router-dom';
import { appRouter } from './utils/appRouter';

export default function App() {
  return <RouterProvider router={appRouter} />
}