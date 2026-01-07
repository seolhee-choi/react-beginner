import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";

import "./index.css";
import App from "./pages";
import SignUp from "@/pages/sign-up";
import SignIn from "@/pages/sign-in";
import RootLayout from "@/layout.tsx"; // 전역 레이아웃 컴포넌트
import { ThemeProvider } from "@/components/theme-provider.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <BrowserRouter>
        <Routes>
          <Route element={<RootLayout />}>
            <Route index element={<App />} />
            <Route path="sign-up" element={<SignUp />} />
            <Route path="sign-in" element={<SignIn />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  </StrictMode>
);
