# DevTools Hub — デプロイ & 収益化ガイド

## 1. GitHubリポジトリの準備

### 1-1. moonrift-studio Organization にリポジトリを作成

```bash
cd /Users/yokotanaoya/Documents/claude_dev/devtools-hub

# 既存のgit originがあれば削除
git remote remove origin 2>/dev/null

# moonrift-studio Organization にリポジトリを作成
gh repo create moonrift-studio/devtools-hub --public --push --source=.
```

> **注意**: `gh` CLIがmoonrift-studioへのアクセス権を持っている必要があります。
> 権限がない場合は GitHub Web UI で手動作成:
> 1. https://github.com/organizations/moonrift-studio/repositories/new
> 2. Repository name: `devtools-hub`
> 3. Public を選択 → Create repository
> 4. ローカルで:
>    ```bash
>    git remote add origin https://github.com/moonrift-studio/devtools-hub.git
>    git push -u origin main
>    ```

### 1-2. プライバシーポリシーページの追加

telbackのプライバシーポリシーを参考に、devtools-hub用のプライバシーポリシーページを作成する必要があります。

AdSense審査に必要な最低限の内容:
- データ収集について（このサイトはデータを収集しない旨）
- Cookie使用について（Google AdSenseがCookieを使用する旨）
- 第三者広告について（Google AdSenseの広告配信）
- 連絡先情報

ページ追加場所: `src/app/[locale]/privacy/page.tsx`

---

## 2. Vercelにデプロイ（無料）

### 2-1. Vercelアカウント作成 & インポート

1. https://vercel.com/signup → GitHubアカウントで登録
2. "Add New Project" → "Import Git Repository"
3. `moonrift-studio/devtools-hub` を選択
4. Framework Preset: **Next.js** (自動検出)
5. **Deploy** をクリック

### 2-2. 環境変数の設定

Vercel管理画面 → Settings → Environment Variables:

| 変数名 | 値 | 説明 |
|--------|-----|------|
| `NEXT_PUBLIC_BASE_URL` | `https://your-domain.com` | サイトのベースURL（カスタムドメイン or Vercel URL） |
| `NEXT_PUBLIC_ADSENSE_CLIENT` | `ca-pub-XXXXXXXXXX` | AdSense審査通過後に設定 |

### 2-3. カスタムドメイン（推奨）

SEO効果を高めるにはカスタムドメインを設定:
1. ドメイン購入: Cloudflare Registrar 等（年 ~$10）
2. Vercel管理画面 → Settings → Domains で設定
3. DNS設定（Vercelが案内を表示）

---

## 3. Google AdSense 設定（広告収益化）

### 3-1. 審査前の準備チェックリスト

- [ ] サイトがVercelで公開されている
- [ ] プライバシーポリシーページが存在する
- [ ] コンテンツが充実している（20ツール → OK）
- [ ] サイトが正常に動作している

### 3-2. AdSense申請

1. https://www.google.com/adsense/start/ にアクセス
2. Googleアカウントでログイン
3. サイトURL: デプロイ先のURL を入力
4. 支払い情報を入力
5. AdSenseコードをサイトに追加（下記参照）
6. 審査を申請（通常 1〜14日）

### 3-3. 審査用コードの設置

審査中は、AdSenseから提供される確認コードを `<head>` に追加する必要があります。
→ 現在の `src/app/layout.tsx` に既にAdSenseスクリプト読み込みの仕組みがあるため、
   Vercel環境変数 `NEXT_PUBLIC_ADSENSE_CLIENT` に Publisher ID を設定するだけでOK。

### 3-4. 審査通過後の設定

1. AdSense管理画面で **広告ユニット** を作成
   - 種類: 「ディスプレイ広告」（自動サイズ）
   - 配置: ツールページ上部 / 下部
2. 広告スロットID（`data-ad-slot`）を取得
3. `AdBanner` コンポーネントに `slot` props を渡すように更新
4. Vercelに再デプロイ

### 3-5. 自動広告（推奨・簡単）

手動で広告ユニットを配置する代わりに、AdSenseの **自動広告** を有効にすると、
Googleが最適な位置に自動で広告を配置します:

1. AdSense管理画面 → 広告 → サイトごと → 自動広告を ON
2. Publisher IDが `<head>` にあれば自動で動作
3. 追加のコード変更は不要

---

## 4. SEO対策（検索流入を最大化）

### 4-1. Google Search Console

1. https://search.google.com/search-console/ にアクセス
2. プロパティを追加（サイトURL）
3. 所有権の確認（DNS or HTMLタグ）
4. サイトマップ送信: `https://your-domain.com/sitemap.xml`

### 4-2. 既に対応済み

- ✅ 各ページ固有の title / description
- ✅ sitemap.xml 自動生成
- ✅ robots.txt 自動生成
- ✅ OGP メタタグ
- ✅ 構造化データ（JSON-LD）
- ✅ FAQ スキーマ
- ✅ 7言語対応 (en, ja, ko, de, fr, es, pt)
- ✅ 全ページ静的生成（高速表示）
- ✅ セキュリティヘッダー設定済み

---

## 5. 収益見通し

| 月間PV | 想定RPM | 月間収益 |
|--------|---------|----------|
| 10,000 | $3-5 | $30-50 (~4,500-7,500円) |
| 30,000 | $3-5 | $90-150 (~13,500-22,500円) |
| 100,000 | $3-5 | $300-500 (~45,000-75,000円) |

## 6. ランニングコスト

| 項目 | コスト |
|------|--------|
| Vercelホスティング | $0 (無料枠) |
| ドメイン（オプション） | ~$10/年 |
| AdSense | $0 |
| **合計** | **$0-10/年** |
