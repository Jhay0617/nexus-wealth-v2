import { BrowserRouter, Route, Routes } from "react-router-dom";
import Applayout from "./ui/Applayout";
import Dashboard from "./pages/Dashboard";
import Settings from "./pages/Settings";
import PageNotFound from "./ui/PageNotFound";
import Login from "./pages/Login";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/Theme";
import { GlobalStyles } from "./styles/GlobalStyles";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import AssetDetail from "./pages/AssetDetail";
import ProtectedRoute from "./ui/ProtectedRoute";
import { Toaster } from "sonner";
function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 0,
      },
    },
  });

  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>
          <GlobalStyles />
          <Toaster position="top-center" richColors theme="dark" />
          <Routes>
            <Route
              element={
                <ProtectedRoute>
                  <Applayout />
                </ProtectedRoute>
              }
            >
              <Route path="/" element={<Dashboard />} />
              <Route path="/asset/:id" element={<AssetDetail />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="*" element={<PageNotFound />} />
            </Route>
            <Route path="/login" element={<Login />} />
          </Routes>
        </ThemeProvider>
      </QueryClientProvider>
    </BrowserRouter>
  );
}

export default App;
