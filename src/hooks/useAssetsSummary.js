import { useMemo } from "react";

export const useAssetSummary = (assets) => {
  return useMemo(() => {
    if (!assets) return {};

    const reduceAsset = assets.reduce((acc, cur) => {
      const { type, amount } = cur;

      if (!acc[type]) acc[type] = 0;
      acc[type] += Number(amount);

      return acc;
    }, {});

    const netWorth = Object.values(reduceAsset).reduce((a, b) => a + b, 0);

    return { reduceAsset, netWorth };
  }, [assets]);
};
