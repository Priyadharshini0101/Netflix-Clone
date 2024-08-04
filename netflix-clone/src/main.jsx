import React from "react";
import ReactDOM from "react-dom/client";
import Layout from "./Layout.jsx";
import {Route,RouterProvider,createBrowserRouter,createRoutesFromElements} from "react-router-dom";
import "./index.css";
import { Home, TVShows, Movies, NotFound, MyList, Login, Player} from "./pages/index.js";
import { store } from "./app/store.js";
import { Provider } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'


const router = createBrowserRouter(
  createRoutesFromElements(
    <>

      <Route path="/" element={<Layout></Layout>}>
        <Route path="" element={<Home></Home>}></Route>
        <Route path="tvshows" element={<TVShows></TVShows>}>
      </Route>
        <Route path="movies" element={<Movies></Movies>} />
        <Route path="mylist" element={<MyList></MyList>} />
        <Route path="*" element={<NotFound title="Oops! We ran out of code"></NotFound>}></Route>
      </Route>
      <Route path="/login" element={<Login></Login>}></Route>
      <Route path="/player" element={<Player></Player>}>
        <Route path=":content" element={<Player></Player>}>
          <Route path=":id" element={<Player></Player>}></Route>
        </Route>
      </Route>
    </>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <ToastContainer theme="darl"></ToastContainer>
    <RouterProvider router={router} />
  </Provider>

);
