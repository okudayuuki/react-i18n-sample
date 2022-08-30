# react-i18n-sample

## ライブラリ

- [react-i18next](https://react.i18next.com/)
- [本家i18n](https://www.i18next.com/)

## DateとかNumberのフォーマッティング

- https://www.i18next.com/translation-function/formatting

## 翻訳ファイルの書き方

#### シンプルな翻訳

```jsx
<h1>{t('hello')}</h1>
```

```json
{
  "hello": "こんにちは"
}
```

```json
{
  "hello": "Hello"
}
```

---

#### 値を埋め込む

```jsx
<p>
    {t("date", {date: new Date()})}
</p>
<p>
    <Trans i18nKey={"date2"}>{{date: new Date()}}</Trans>
</p>
```

```json
{
  "date": "本日の日付は {{date, datetime}} です。",
  "date2": "値を埋め込むだけなら、！{{date, datetime}}！元の文はjsx内に不要。"
}
```

```json
{
  "date": "Today is  {{date, datetime}}.",
  "date2": "If you just want to embed the value, !{{date, datetime}}! the original statement is unnecessary in jsx.。"
}
```

- {{`date`, datetime}} は任意の識別名、埋め込むときにオブジェクトのキーとして使う
- {{date, `datetime`}} はフォーマッティング用タグ、詳細は↑のURL参照

---

#### ネストしたJSOＮ

```jsx
<Trans i18nKey={"nest.hoge"}/>
```

```json
{
  "nest": {
    "hoge": "hogehoge<br/>fugafuga"
  }
}
```

```json
{
  "nest": {
    "hoge": "foofoo<br/>barbar"
  }
}
```

---

#### 翻訳文へのタグの埋め込み

下記のようなJSXは、htmlタグもしくは値の埋め込みを区切りとして配列として扱われる:
[参考](https://react.i18next.com/latest/trans-component)

```jsx
<Trans i18nKey={"colored"}>
    0 次の文字の色は
    1 <span style={{color: "green"}}>緑色</span>
    2 です。唐突なカウント
    3 {{val: 100}}
    4 ！ 次は、
    5 <span style={{color: "orange"}}>オレンジ</span>
    6 です。
</Trans>
```

上記配列のindexを使用してhtmlタグで囲いたい文字列をマークする

```json
{
  "colored": "次の文字は<1>緑色</1>です。唐突なカウント{{val}}！ 次は、<5>オレンジ</5>です。"
}
```

```json
{
  "colored": "Next characters color is <1>Green</1>. Suddenly count {{val}}! And next, <5>Orange</5>"
}
```

indexは`Trans`タグ内に書いたテンプレートの順序で決定するため、語順が前後する場合も同じindexを使用できる

```jsx
<Trans i18nKey={"gameResult"}>
    0 {{color: t("white")}}
    1 <span style={{color: 'green', textAlign: 'left'}}>{{score: 100}}</span>
</Trans>
```

```json
{
  "gameResult": "{{color}}<1>{{score}}</1>目"
}
```

```json
{
  "gameResult": "<1>{{score}}</1>Moku {{color}}"
}
```

##### タグで囲ってなくても同じ要領で埋め込める

```jsx
<div>
    <Trans i18nKey={"fruitToAction"}>
        <select> {/* 0 */}
            <option>{t("fruit.apple")}</option>
            <option>{t("fruit.orange")}</option>
            <option>{t("fruit.banana")}</option>
        </select>  {/* 0 */}
        を  {/* 1 */}
        <select>  {/* 2 */}
            <option>{t("action.buy")}</option>
            <option>{t("action.sell")}</option>
        </select> {/* 2 */}
    </Trans>
</div>
```

```json
{
  "fruitToAction": "<0/>を<2/>",
  "fruit": {
    "apple": "りんご",
    "orange": "オレンジ",
    "banana": "バナナ"
  },
  "action": {
    "buy": "買う",
    "sell": "売る"
  }
}
```

```json
{
  "fruitToAction": "<2/> the <0/>",
  "fruit": {
    "apple": "Apple",
    "orange": "Orange",
    "banana": "Banana"
  },
  "action": {
    "buy": "Buy",
    "sell": "Sell"
  }
}
```