# Fredges Ltd. — Corporate Site

株式会社Fredges のコーポレートサイト。**HTML / CSS / JS のみ**で動作する純粋な静的サイトです。

## ファイル構成

```
docs/
├── index.html              # エントリーポイント
├── .nojekyll               # GitHub Pages の Jekyll 処理を無効化
├── css/
│   └── styles.css          # デザイントークン / テーマ / モーション
└── js/
    ├── image-slot.js       # 画像プレースホルダーカスタム要素
    ├── hero-variants.js    # ヒーロー3案 (A: Statement / B: Kinetic / C: Editorial)
    ├── site-sections.js    # Services / Strengths / Process / Company / Contact / Footer
    └── app.js              # ルート React コンポーネント
```

> JSX はビルド時に通常の JavaScript (React.createElement) に変換済みです。
> Babel など、ブラウザ上のトランスパイラは不要です。
> React は CDN の production ビルドを読み込みます。

## ローカル確認

ブラウザの仕様上、`index.html` をダブルクリックで開くとモジュールが
読み込めません。簡易サーバーを立ててください。

```bash
# どちらか
python3 -m http.server 8000
# or
npx serve .
```

→ `http://localhost:8000/` を開く。

## GitHub Pages にデプロイ

1. このリポジトリを GitHub に push
2. リポジトリの **Settings → Pages** を開く
3. **Source** を *Deploy from a branch* に設定
4. **Branch** を `main` (または `master`) に、フォルダを **`/docs`** に設定して **Save**
5. 数十秒後、`https://<username>.github.io/<repo>/` で公開される

> ファイルを `docs/` 配下に更新して push するだけで、GitHub Pages が
> 自動的に再デプロイします。

### カスタムドメインを使う場合

`docs/CNAME` というテキストファイルを作成し、1行にドメインを記載します。
例：
```
fredges.com
```

その後、ドメイン側で CNAME / A レコードを GitHub Pages に向けます。

## コピーの編集

ヒーローのコピー、サブヘッド、CTAラベルは `docs/js/app.js` の
`SITE_COPY` を編集してください。

```js
var SITE_COPY = {
  headlineL1: "AI × マーケティング",
  headlineL2: "ビジネスの可能性を、もっと大きく",
  subhead:    "...",
  ctaLabel:   "お問い合わせ",
};
```

会社概要・事業内容などのコピーは `docs/js/site-sections.js` に
セクションごとにまとめてあります。

## 写真の差し替え

各セクションの `<ImgSlot>` の `src` プロパティに任意の画像 URL を
指定してください。既定は Unsplash のフリー素材です。

```jsx
<ImgSlot id="band-1" src="https://example.com/your-photo.jpg" ... />
```

## 注意点

- React と Babel をブラウザ上で読み込む構成のため、初回ロードは数百
  ミリ秒遅くなります。本番運用時は事前ビルド（Vite / esbuild など）に
  切り替えることを推奨します。
- ブラウザは `oklch()` カラーをサポートしている必要があります（主要
  モダンブラウザは対応済み）。
