# Fredges Ltd. — Corporate Site

株式会社Fredges のコーポレートサイト。静的サイトとして配信できる構成です。

## ファイル構成

```
docs/
├── index.html              # エントリーポイント
├── .nojekyll               # GitHub Pages の Jekyll 処理を無効化
├── css/
│   └── styles.css          # デザイントークン / テーマ / モーション
└── js/
    ├── image-slot.js       # 画像プレースホルダーカスタム要素
    ├── tweaks-panel.jsx    # 開発用 Tweaks パネル（本番では非表示）
    ├── hero-variants.jsx   # ヒーロー3案 (A: Statement / B: Kinetic / C: Editorial)
    ├── site-sections.jsx   # Services / Strengths / Process / Company / Contact / Footer
    └── app.jsx             # ルート React コンポーネント
```

## ローカル確認

ブラウザのセキュリティ仕様上、`index.html` をダブルクリックで開くと
スクリプトが読み込めません。簡易サーバを立ててください。

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

ヒーローのコピー、サブヘッド、CTAラベルは `docs/js/app.jsx` の
`SITE_COPY` を編集してください。

```js
const SITE_COPY = {
  headlineL1: "AI × マーケティング",
  headlineL2: "ビジネスの可能性を、もっと大きく",
  subhead:    "...",
  ctaLabel:   "お問い合わせ",
};
```

会社概要・事業内容などのコピーは `docs/js/site-sections.jsx` に
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
