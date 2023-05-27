import styles from './MoneyStatCard.module.scss';
import { FC } from 'react';
import { ReactComponent as ArrowUpRightSvg } from 'assets/arrow-up-right.svg';
import { ReactComponent as ArrowDownLeftSvg } from 'assets/arrow-down-left.svg';

interface IMoneyStatCardProps {
  heading: string;
  sum: string;
  percentage: number;
  isGreen?: boolean;
}

export const MoneyStatCard: FC<IMoneyStatCardProps> = ({
  heading,
  sum,
  percentage,
  isGreen,
}) => {
  return (
    <div className={styles.card}>
      <span className={styles.card__heading}>{heading}</span>
      <span className={styles.card__sum}>${sum}</span>
      <p>
        <span className={styles.card__date}>from last week</span>
        <span className={`${styles.card__percentage} ${isGreen ? styles.green : styles.red}`}>

          {isGreen ? <ArrowUpRightSvg /> : <ArrowDownLeftSvg />}
          {percentage}%
        </span>
      </p>
    </div>
  );
};
