import { Suspense, lazy } from "react";
import { ThemeProvider } from "@mui/material/styles";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import theme from "./theme";
import CssBaseline from "@mui/material/CssBaseline";
import Loader from "./components/Loader";
import { AuthProvider } from "./context/authContext";
import { SnackbarProvider } from "./context/snackBarContext";
import ProtectedRoute from "./components/ProtectedRoute";
import Error from "./components/Error";
const SearchResult = lazy(() => import("./features/search/SearchResult"));
const Landing = lazy(() => import("./pages/Landing"));
const Login = lazy(() => import("./pages/Login"));
const Contact = lazy(() => import("./pages/Contact"));
const PropertyDetails = lazy(() => import("./pages/PropertyDetails"));
const SavedProperty = lazy(() => import("./pages/SavedProperty"));
const Search = lazy(() => import("./pages/Search"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing />
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/contacts",
    element: (
      <ProtectedRoute>
        <Contact />
      </ProtectedRoute>
    )
  },
  {
    path: "/saved",
    element: (
      <ProtectedRoute>
        <SavedProperty />
      </ProtectedRoute>
    )
  },
  {
    path: "/details/:id",
    element: (
      <ProtectedRoute>
        <PropertyDetails />
      </ProtectedRoute>
    )
  },
  {
    path: "/search",
    element: <Search />,
    children: [
      {
        path: ":query",
        element: (
          <ProtectedRoute>
            <SearchResult />
          </ProtectedRoute>
        )
      }
    ]
  },
  {
    path: "*",
    element: <Error />
  }
]);

function App() {
  return (
    <SnackbarProvider>
      <AuthProvider>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Suspense
            fallback={
              <div style={{ height: "100dvh" }}>
                <Loader />
              </div>
            }
          >
            <RouterProvider router={router} />
          </Suspense>
        </ThemeProvider>
      </AuthProvider>
    </SnackbarProvider>
  );
}

export default App;
