import { useMemo } from "react";

export const useAssetSummary = (assets) => {
  return useMemo(() => {
    if (!assets) return {};

    return assets.reduce((acc, cur) => {
      const { type, amount } = cur;

      if (!acc[type]) acc[type] = 0;
      acc[type] += Number(amount);

      return acc;
    }, {});
  }, [assets]);
};
