import "/scss/pricing.scss";

// Components
import { useTheme } from "./components/theme.js";
useTheme();
import { useBurger } from "./components/burger.js";
useBurger();
import { useHeader } from "./components/header.js";
useHeader();
import { usePriceSwither } from "./components/pricing/plans.js";
usePriceSwither();
import { useAccordion } from "./components/accordion.js";
useAccordion();
