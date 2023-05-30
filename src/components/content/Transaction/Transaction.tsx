import { FC } from 'react';
import style from './Transaction.module.scss';

interface ITransactionProps {
  svg: JSX.Element;
  product: string;
  date: string;
  totalSum: number;
  incoming?: boolean;
}

export const Transaction: FC<ITransactionProps> = ({
  svg,
  product,
  date,
  totalSum,
  incoming,
}) => {
  return (
    <div className={style.transaction}>
      <div className={style.transaction__body}>
        {svg}
        <div className={style.transaction__data}>
          <h4>{product}</h4>
          <span>{date}</span>
        </div>
      </div>

      <span className={`${style.transaction__totalSum} ${incoming ? style.transaction_incoming : ''}`}>{incoming ? '+' : '-'}${totalSum}</span>
    </div>
  );
};
