import React from "react";
import ReactDOM from "react-dom/client";
import { QueryClient, QueryClientProvider } from "react-query";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Movie from "./routes/movie/movie";
import { loader as rootLoader } from "./routes/root/MovieList";
import Root from "./routes/root/root";

const queryClient = new QueryClient()

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    loader: rootLoader(queryClient),
    children: [
      {
        path: "movie/:id",
        element: <Movie />,
      },
    ]
  },

]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
    <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>
);
