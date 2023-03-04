import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SearchPage from "./components/SearchPage/SearchPage";
import DetailsPage from "./components/DetailsPage/DetailsPage";
import CustomSearchPage from "./components/CustomSearchPage/CustomSearchPage"

const router = createBrowserRouter([
  {
    path: "/",
    element: <SearchPage />,
    errorElement: <div>An error occured</div>
  },
  {
    path: "works/:id",
    element: <DetailsPage />,
    errorElement: <div>An error occured</div>
  },
  {
    path: "custom-search",
    element: <CustomSearchPage />,
    errorElement: <div>An error occured</div>
  }
]);

export default function App() {
  return <RouterProvider router={router} />
}
