import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ThemeProvider } from "@ui5/webcomponents-react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import Home from "./pages/Home";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/about",
      element: <div>About</div>,
    },
  ]);

  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <RouterProvider router={router} />
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
