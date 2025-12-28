import { useAssetDetails } from "../hooks/useAssetDetails";
import { useFormatCurrency } from "../hooks/useFormatCurrency";
import * as S from "../styles/AssetDetailStyle";
import TransactionForm from "../ui/TransactionForm";

function AssetDetail() {
  const { assetById, transactions, isLoading } = useAssetDetails();
  const formatCurrency = useFormatCurrency();

  if (isLoading) return <p>Loading Nexus Ledger...</p>;
  if (!assetById) return <p>Asset not found.</p>;

  return (
    <S.DetailWrapper>
      <S.HeaderSection>
        <p style={{ color: "#64748b", fontWeight: 700 }}>{assetById.type}</p>
        <h1>{assetById.asset_name}</h1>
        <h2 style={{ color: "#10b981" }}>{formatCurrency(assetById.amount)}</h2>
      </S.HeaderSection>

      <S.TransactionGrid>
        <S.HistoryTable>
          <h3 style={{ marginBottom: "1rem", fontFamily: "Poppins" }}>
            History
          </h3>
          {transactions?.length === 0 ? (
            <p style={{ color: "#64748b" }}>No transactions yet.</p>
          ) : (
            transactions.map((t) => (
              <S.TransactionRow key={t.id}>
                <div>
                  <p style={{ fontWeight: 600 }}>{t.description}</p>
                  <span className="category">{t.categories?.name}</span>
                </div>
                <div style={{ color: "#64748b", fontSize: "0.9rem" }}>
                  {new Date(t.created_at).toLocaleDateString()}
                </div>
                <div className="amount">{formatCurrency(t.amount)}</div>
              </S.TransactionRow>
            ))
          )}
        </S.HistoryTable>

        {/* 3. Add Transaction Sidebar (Form) */}
        <aside>
          {/* We will insert the TransactionForm component here */}
          <div className="glass-card">
            <h4>Add Transaction</h4>
            <TransactionForm />
          </div>
        </aside>
      </S.TransactionGrid>
    </S.DetailWrapper>
  );
}

export default AssetDetail;
