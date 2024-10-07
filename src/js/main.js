import "/scss/main.scss";

// components
import { useTheme } from "./components/theme";
import { useBurger } from "./components/burger";
import { useHeader } from "./components/header";
import {
  useInsightSlider,
  useTestimonialsSlider,
} from "./components/home/slider";
import { usePartnerItems } from "./components/partners";
import { useFooterAcc } from "./components/footer";


useTheme();
useBurger();
useInsightSlider();
useTestimonialsSlider();
useTestimonialsSlider();
useHeader();
usePartnerItems();
