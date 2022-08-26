import './App.css'
import {Trans, useTranslation} from "react-i18next";

function App() {
    const {t, i18n} = useTranslation();

    const changeLanguage = (lng: string) => {
        i18n.changeLanguage(lng);
    };

  return (
    <div className="App">
        <h1>{t('hello')}</h1>
        <p>
        <Trans i18nKey={"date"} >本日の日付は{{date: (new Date()).toDateString()}}です。</Trans>
        </p>
        <p>
        <Trans i18nKey={"colored"}>次の文字の色は<span style={{color: "green"}}>緑色</span>です。次は、<span style={{color:"orange"}}>オレンジ</span>です。</Trans>
        </p>
        <button onClick={() => changeLanguage('ja')}>ja</button>
        <button onClick={() => changeLanguage('en')}>en</button>
    </div>
  )
}

export default App
