import './App.css';
// import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HomePage } from "./pages/Home/HomePage"
import { SignupPage } from "./pages/Home/SignupPage";
import BookPage from './pages/Book/BookPage';
import { SearchPage } from './pages/Search/SearchPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/sign-up",
    element: <SignupPage />
  },
  {
    path: "/books/:bookId",
    element: <BookPage />
  },

  {
    path: '/books/search',
    element: <SearchPage />
  },
]);


function App() {

  return (
    <>
    <RouterProvider router={router} />
    </>
  )
};

export default App;
