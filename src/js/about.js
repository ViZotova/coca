import "/scss/about.scss";

// Components
import { useTheme } from "./components/theme.js";
useTheme();
import { useBurger } from "./components/burger.js";
useBurger();
import { useHeader } from "./components/header.js";
useHeader();
import { useTextAnimation } from "./components/about/textAnimation.js";
useTextAnimation();
import {
  useAboutSlider,
  useTeamSlider,
} from "./components/about/aboutSlider.js";
useAboutSlider();
useTeamSlider();
import { useAccordion } from "./components/accordion.js";
useAccordion();
