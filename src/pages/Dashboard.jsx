import * as Style from "../styles/DashboardStyles";
import { useAssetsData } from "../services/ApiAssets";
import { useAssetSummary } from "../hooks/useAssetsSummary";
import { useFormatCurrency } from "../hooks/useFormatCurrency";
import { useState } from "react";
import { Plus } from "lucide-react";
import CreateAssetModal from "../ui/CreateAssetModal";

function Dashboard() {
  const { assets, isLoading } = useAssetsData();
  const { netWorth, reduceAsset } = useAssetSummary(assets);
  const formatCurrency = useFormatCurrency();
  const [isModalOpen, setIsModalOpen] = useState(false);
  if (isLoading) return <p>Syncing with Nexus Wealth Engine...</p>;

  return (
    <Style.DashboardGrid>
      <Style.DashboardHeader>
        <Style.SummaryCard>
          <Style.NetWorthLabel>Total Net Worth</Style.NetWorthLabel>
          <Style.NetWorthAmount>
            {formatCurrency(netWorth)}
          </Style.NetWorthAmount>
          <Style.AddAssetBtn onClick={() => setIsModalOpen(true)}>
            <Plus size={18} /> Add Asset
          </Style.AddAssetBtn>
        </Style.SummaryCard>
      </Style.DashboardHeader>
      {assets?.map((asset) => (
        <Style.AssetCard key={asset.id} to={`/asset/${asset.id}`}>
          <div>
            <Style.AssetType>{asset.type}</Style.AssetType>
            <Style.AssetName>{asset.name}</Style.AssetName>
          </div>
          <Style.AssetAmount>{formatCurrency(asset.amount)}</Style.AssetAmount>
        </Style.AssetCard>
      ))}
      {isModalOpen && (
        <CreateAssetModal onClose={() => setIsModalOpen(false)} />
      )}
    </Style.DashboardGrid>
  );
}

export default Dashboard;
