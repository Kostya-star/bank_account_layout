import { DebitCard } from 'components/DebitCard';
import { Header } from './components/Header';
import { Menu } from './components/Menu';
import { Button } from './components/UI/Button/Button';
import { Heading } from './components/content/Heading';
import { MoneyStatCard } from './components/content/MoneyStatCard/MoneyStatCard';
import './scss/main.scss';

function App() {
  return (
    <div className="wrapper">
      <Menu />

      <div className="content">
        <Header />
        <div className="content__container">
          {/* MAIN CONTENT */}
          <main>
            <div className="heading">
              <Heading />
            </div>

            {/* TWO BIG  COLUMNS*/}

            <div className="content__columns">
              <div className="column-1">
                <div className="column-1__top">
                  <MoneyStatCard
                    heading={'Total Income'}
                    sum={'974,99'}
                    percentage={7.85}
                    isGreen
                  />
                  <MoneyStatCard
                    heading={'Total Expence'}
                    sum={'425,30'}
                    percentage={22.3}
                  />
                  <MoneyStatCard
                    heading={'Total Savings'}
                    sum={'549,61'}
                    percentage={9.5}
                    isGreen
                  />
                </div>
                <div className="column-1__debit-card">
                  <DebitCard />
                </div>
              </div>

              <div className="column-2" style={{ backgroundColor: 'red' }}>COLUMN 2</div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

export default App;
