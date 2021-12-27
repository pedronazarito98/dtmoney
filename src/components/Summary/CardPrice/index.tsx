import { Card } from "./styles";

interface CardPriceProps {
  title: string;
  icon: string;
  price: number;
  className?: string;
}

export function CardPrice({ title, icon, price, className}: CardPriceProps) {
  return (
    <>
      <Card className={className}>
        <header>
          <p>{title}</p>
          <img src={icon} alt={title} />
        </header>
        <strong>
          {new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).format(price)}
        </strong>
      </Card>
    </>
  );
}
