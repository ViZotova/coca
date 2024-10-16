import "/scss/main.scss";

// Components
import { useTheme } from "./components/theme.js";
useTheme();
import { useBurger } from "./components/burger.js";
useBurger();
import { useHeader } from "./components/header.js";
useHeader();
import {
  useSlider,
  useTestimonialsSlider,
  usePartnersSlider,
} from "./components/home/slider.js";
useSlider();
useTestimonialsSlider();
usePartnersSlider();

import { useAccordion } from "./components/accordion.js";
useAccordion();
