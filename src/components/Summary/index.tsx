import incomeImg from "../../assets/income.svg";
import outcomeImg from "../../assets/outcome.svg";
import totalImg from "../../assets/total.svg";
import { useTransactions } from "../../hooks/useTransactions";

import { Container } from "./styles";
import { CardPrice } from "./CardPrice/index";

export function Summary() {
  const { transactions } = useTransactions();

  const summary = transactions.reduce(
    (acc, transaction) => {
      if (transaction.type === "deposit") {
        acc.deposits += transaction.amount;
        acc.total += transaction.amount;
      } else {
        acc.withdraws += transaction.amount;
        acc.total -= transaction.amount;
      }

      return acc;
    },
    {
      deposits: 0,
      withdraws: 0,
      total: 0,
    }
  );

  return (
    <Container>
      <CardPrice title="Entradas" icon={incomeImg} price={summary.deposits} />
      <CardPrice title="Saídas" icon={outcomeImg} price={summary.withdraws} />
      <CardPrice
        title="Total"
        icon={totalImg}
        price={summary.total}
        className="highlight-background"
      />
    </Container>
  );
}
