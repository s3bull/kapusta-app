import { useDispatch } from 'react-redux/es/exports';
import { useState, useEffect } from 'react';
import sprite from '../../../assets/images/symbol-defs.svg';
import { getTransactionsPerPeriod } from '../../../redux/periodData/periodDataOperations';
import s from './Data.module.scss';

const months = [
  'Январь',
  'Февраль',
  'Март',
  'Апрель',
  'Май',
  'Июнь',
  'Июль',
  'Август',
  'Сентябрь',
  'Октябрь',
  'Ноябрь',
  'Декабрь',
];

const dateNow = new Date();

function getMonth(number) {
  return months[number];
}

const Data = () => {
  const dispatch = useDispatch();
  const [month, setMonth] = useState(() => getMonth(dateNow.getMonth()));
  const [year, setYear] = useState(() => dateNow.getFullYear());

  const handleDecrementMonth = () => {
    dateNow.setMonth(dateNow.getMonth() - 1);
    if (month === 'Январь') {
      setYear(dateNow.getFullYear());
    }
    return setMonth(getMonth(dateNow.getMonth()));
  };
  const handleIncrementMonth = () => {
    dateNow.setMonth(dateNow.getMonth() + 1);
    if (month === 'Декабрь') {
      setYear(dateNow.getFullYear());
    }
    return setMonth(getMonth(dateNow.getMonth()));
  };

  useEffect(() => {
    dispatch(
      getTransactionsPerPeriod(
        `${year}-${String(months.indexOf(month) + 1).padStart(2, '0')}`
      )
    );
    //eslint-disable-next-line
  }, [month, year]);

  return (
    <div className={s.wrapp}>
      <p className={s.descr}>Текущий период:</p>
      <div className={s.date}>
        <button
          className={s.button}
          type="button"
          onClick={handleDecrementMonth}
        >
          <svg width="4" height="10">
            <use href={sprite + '#left'} />
          </svg>
        </button>
        <p className={s.currentDate}>
          <span className={s.month}>{month}</span>
          <span className={s.year}>{year}</span>
        </p>
        <button
          className={s.button}
          type="button"
          onClick={handleIncrementMonth}
        >
          <svg width="4" height="10">
            <use href={sprite + '#right'} />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Data;
