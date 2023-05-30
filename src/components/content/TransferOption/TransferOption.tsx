import { FC } from 'react';
import style from './TransferOption.module.scss';

interface ITransferOptionProps {
  svg: JSX.Element;
  type: string;
  currency: string;
}

export const TransferOption: FC<ITransferOptionProps> = ({
  svg,
  type,
  currency,
}) => {
  return (
    <div className={style.option}>
      <div className={style.option__card}>{svg}</div>
      <p>
        <span className={style.option__type}>{type}</span>
        <span className={style.currency}>{currency}</span>
      </p>
    </div>
  );
};
