import { GlobalStyle } from "./GlobalStyle";
import FontsHelmet from "./FontsHelmet";
import { ThemeProvider } from "styled-components";
import { lazy, useState } from "react";
import RootLayout from "../layouts/RootLayout/RootLayout";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

const theme = {
  light: {
    colors: {
      mainTextColor: "#101828",
      secondaryTextColor: "#475467",
      cardItemBgColor: "#e2e8f0",
      mainTextColorReverse: "#fafafa",
      mainTextColorLowOp: "rgb(18, 20, 23,0.5)",
      mainTextColorLowOpReverse: "rgb(250, 250, 250, 0.5)",
      mainTextColorVeryLowOp: "rgba(18, 20, 23, 0.2)",
      headerBgColor: "#e2e8f0",
      mainBgColor: "#f1f5f9",
      calendarBgColor: "#cbd5e1",
      mainBgColorReverse: "#242424",
      mainBgColorLowOp: "rgb(247, 247, 251, 0,5)",
      mainBgColorReverseVeryLowOp: "#24242410",
      heroBgLowOp: "rgb(36, 36, 36, 0.5)",
      inputBgColor: "#e2e8f0",
      inputBgColorHover: "#f8fafc",
      accentColor: "#E44848",
      accentColorHover: "#d84343",
      white: "#fff",
      lightWhiteColor: "#fafafa",
      green: "#37b24d",
      mail: "#d62828",
      whiteLowOp: "rgb(255, 255, 255, 0.5)",
      black: "#121212",
      switcherHoverBg: "rgb(36, 36, 36,0.1)",
      emptyHeart: "rgba(255, 255, 255, 0.8)",
      boxFocus: "rgba(100, 100, 111, 0.2)",
      burgerOverlay: "rgb(250, 250, 250,0.9)",
      featuresBgColor: "#f2f4f7",
      readMoreBtn: "#1f09cd",
      inputTextColor: "rgba(16, 24, 40, 0.6)",
      borderFilterItem: "rgba(16, 24, 40, 0.2)",
      filtersLine: "rgba(16, 24, 40, 0.2)",
    },
  },
  dark: {
    colors: {
      mainTextColor: "#fafafa",
      secondaryTextColor: "#d3d6da",
      cardItemBgColor: "#e2e8f0",
      mainTextColorReverse: "#121417",
      mainTextColorLowOp: "rgb(250, 250, 250, 0.5)",
      mainTextColorVeryLowOp: "rgb(250, 250, 250, 0.2)",
      mainTextColorLowOpReverse: "rgb(18, 20, 23,0.5)",
      headerBgColor: "#161616",
      mainBgColor: "#242424",
      calendarBgColor: "#1c1917",
      mainBgColorReverse: "#fdfcf8",
      mainBgColorLowOp: "rgb(36, 36, 36, 0.5)",
      mainBgColorReverseVeryLowOp: "#f1f5f910",
      heroBgLowOp: "rgb(36, 36, 36, 0.5)",
      inputBgColor: "#161616",
      inputBgColorHover: "#383838",
      accentColor: "#E44848",
      accentColorHover: "#d84343",
      white: "#fff",
      lightWhiteColor: "#fafafa",
      green: "#37b24d",
      mail: "#d62828",
      whiteLowOp: "rgb(255, 255, 255, 0.5)",
      black: "#121212",
      switcherHoverBg: "rgb(254, 250, 224, 0.1)",
      emptyHeart: "rgba(255, 255, 255, 0.8)",
      boxFocus: "rgba(237, 237, 245, 0.2)",
      burgerOverlay: "rgb(36, 36, 36,0.9)",
      featuresBgColor: "#f2f4f7",
      readMoreBtn: "#4dabf7",
      inputTextColor: "rgba(239, 231, 215, 0.6)",
      borderFilterItem: "rgba(239, 231, 215, 0.2)",
      filtersLine: "rgba(239, 231, 215, 0.1)",
    },
  },
};

const Home = lazy(() => import("../pages/Home/Home"));
const Catalog = lazy(() => import("../pages/Catalog/Catalog"));
const Favorites = lazy(() => import("../pages/Favorites/Favorites"));
const Privacy = lazy(() => import("../pages/Privacy/Privacy"));
const Terms = lazy(() => import("../pages/Terms/Terms"));
const NotFound = lazy(() => import("../pages/NotFound/NotFound"));

function App() {
  const [isDarkTheme, setIsDarkTheme] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme === "light" ? false : true;
  });

  const scrollToTop = () => {
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  };

  const toggleTheme = () => {
    setIsDarkTheme((prevIsDarkTheme) => !prevIsDarkTheme);
    localStorage.setItem("theme", isDarkTheme ? "light" : "dark");
  };

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route
        path="/camp-on-wheels/"
        element={
          <RootLayout toggleTheme={toggleTheme} isDarkTheme={isDarkTheme} />
        }
      >
        <Route index element={<Home />} />
        <Route path="catalog" element={<Catalog />} />
        <Route path="favorites" element={<Favorites />} />
        <Route path="privacy" element={<Privacy scrollToTop={scrollToTop} />} />
        <Route path="terms" element={<Terms scrollToTop={scrollToTop} />} />
        <Route path="*" element={<NotFound scrollToTop={scrollToTop} />} />
      </Route>
    )
  );

  return (
    <ThemeProvider theme={isDarkTheme ? theme.dark : theme.light}>
      <GlobalStyle />
      <FontsHelmet />
      <ToastContainer />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
