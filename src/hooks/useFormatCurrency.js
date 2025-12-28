import { useProfileData } from "../services/apiProfiles";

export const useFormatCurrency = () => {
  const { profile } = useProfileData();

  const locale = profile?.currency_pref === "PHP" ? "en-PH" : "en-US";
  const currency = profile?.currency_pref || "PHP";

  function formatCurrency(value) {
    return new Intl.NumberFormat(locale, {
      style: "currency",
      currency: currency,
    }).format(value);
  }

  return formatCurrency;
};
