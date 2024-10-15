import "/scss/blog.scss";

// Components
import { useTheme } from "./components/theme.js";
useTheme();
import { useBurger } from "./components/burger.js";
useBurger();
import { useHeader } from "./components/header.js";
useHeader();
import { useBlogSlider, useTabFilter } from "./components/blog/blogSlider.js";
useBlogSlider();
useTabFilter();
import { useArticlesSlider } from "./components/blog/articlesSlider.js";
useArticlesSlider();
import { useAccordion } from "./components/accordion.js";
useAccordion();
