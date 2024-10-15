export const usePriceSwither = () => {
  const swither = document.querySelector('[data-price="swither"]');
  const starterPrice = document.querySelector('[data-price="starter"]');
  const popularPrice = document.querySelector('[data-price="popular"]');
  const enterprisePrice = document.querySelector('[data-price="enterprise"]');
  const procePeriod = document.querySelectorAll("[data-period]");

  const priceList = {
    starter: {
      monthlyPrice: 10,
      annualPrice: 100,
    },
    popular: {
      monthlyPrice: 140,
      annualPrice: 1400,
    },
    enterprise: {
      monthlyPrice: 210,
      annualPrice: 2100,
    },
  };

  const setPricesAnnual = () => {
    starterPrice.textContent = priceList.starter.annualPrice;
    popularPrice.textContent = priceList.popular.annualPrice;
    enterprisePrice.textContent = priceList.enterprise.annualPrice;
  };

  const setPricesMonthly = () => {
    starterPrice.textContent = priceList.starter.monthlyPrice;
    popularPrice.textContent = priceList.popular.monthlyPrice;
    enterprisePrice.textContent = priceList.enterprise.monthlyPrice;
  };

  swither.checked = true;

  swither.addEventListener("change", () => {
    if (swither.checked) {
      setPricesAnnual();
    } else {
      setPricesMonthly();
    }
  });

  procePeriod.forEach((e) => {
    swither.addEventListener("change", () => {
      if (swither.checked) {
        e.textContent = "/year";
      } else {
        e.textContent = "/month";
      }
    });
  });
};
