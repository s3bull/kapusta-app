import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useMatch } from 'react-router-dom';
import s from '../../components/Summary/Summary.module.scss';
import {
  getMonthExpensesData,
  getMonthIncomesData,
} from '../../redux/transactions/transactionsSelectors';
import { langOpts } from '../../utils/function/translateBackEndResp';

import getArrayLastMonths from '../../utils/function/getArrayLastMonths';


export default function Summary() {
  const expensesData = useSelector(getMonthExpensesData);
  const incomesData = useSelector(getMonthIncomesData);
  const [data, setData] = useState([]);
  const match = useMatch('/main/*');

  const months = getArrayLastMonths(data);

  useEffect(() => {
    switch (match.params['*']) {
      case 'expenses':
        setData(expensesData);
        break;
      case 'incomes':
        setData(incomesData);
        break;
      default:
        break;
    }
  }, [expensesData, incomesData, match]);

  return (
    <div className={s.summary}>
      <h2 className={s.title}>підсумок</h2>
      <ul className={s.list}>
        {months.map((month, idx) => (
          <li key={idx} className={s.item}>
            <p>{langOpts[month[0]].ua}</p>
            <p>
              {typeof month[1] === 'number'
                ? month[1]
                    .toLocaleString('ua-UA', { minimumFractionDigits: 2 })
                    .replace(',', '.')
                : '0.00'}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
