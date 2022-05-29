import HeaderNav from '../../components/Header/HeaderNav';
import ChartReport from '../../components/Report/ChartReport/ChartReport';
import ReportControlPanel from '../../components/Report/ReportControlPanel/ReportControlPanel';
import ReportTransactionsList from '../../components/Report/ReportTransactionsList/ReportTransactionsList';
import TotalAmount from '../../components/Report/TotalAmount/TotalAmount';
const ReportPage = () => {
  return (
    <>
      <HeaderNav />
      <section className={'page'}>
        <ReportControlPanel />
        <TotalAmount />
        <ReportTransactionsList />
        <ChartReport />
      </section>
    </>
  );
};

export default ReportPage;
