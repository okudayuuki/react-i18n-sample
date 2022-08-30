import './App.css'
import {Trans, useTranslation} from "react-i18next";

function App() {
    const {t, i18n} = useTranslation();

    const changeLanguage = (lng: string) => {
        i18n.changeLanguage(lng);
    };

    return (
        <div className="App">
            {/* シンプルな翻訳文 */}
            <h1>{t('hello')}</h1>
            <p>
                {/* 値を埋め込む翻訳文 */}
                {t("date", {date: new Date()})}
            </p>
            <p>
                {/* Transを使った値の埋め込み */}
                {/* ただ埋め込むだけなら`t`を使った方が良い */}
                <Trans i18nKey={"date2"}>{{date: new Date()}}</Trans>
            </p>
            <p>
                {/* 翻訳文の一部にtagを嚙ませたい場合 */}
                <Trans i18nKey={"colored"}>
                    次の文字の色は
                    <span style={{color: "green"}}>緑色</span>
                    です。唐突なカウント
                    {{val: 100}}
                    ！ 次は、
                    <span style={{color: "orange"}}>オレンジ</span>
                    です。
                </Trans>
            </p>
            <p>
                {/* 翻訳JSONがネストしている場合 */}
                <Trans i18nKey={"nest.hoge"}/>
            </p>
            <div>
                {/* 改行２種 */}
                <Trans i18nKey={"withLf"}/>
            </div>
            <div>
                <Trans i18nKey={"withBr"}/>
            </div>
            <p>
                {/* 文頭が埋め込みの値でも大丈夫 */}
                <Trans i18nKey={"gameResult"}>
                    {{color: t("white")}}
                    <span style={{color: 'green', textAlign: 'left'}}>
                            {{score: 100}}
                        </span>
                </Trans>
            </p>
            <div>
                <Trans i18nKey={"fruitToAction"}>
                    <select>
                        <option>{t("fruit.apple")}</option>
                        <option>{t("fruit.orange")}</option>
                        <option>{t("fruit.banana")}</option>
                    </select>
                    を
                    <select>
                        <option>{t("action.buy")}</option>
                        <option>{t("action.sell")}</option>
                    </select>
                </Trans>
            </div>
            <button onClick={() => changeLanguage('ja')}>ja</button>
            <button onClick={() => changeLanguage('en')}>en</button>
        </div>
    )
}

export default App
