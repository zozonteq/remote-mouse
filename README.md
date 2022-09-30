# remote-mouse
スマホをパソコンのマウスの代わりとして動かすパソコン用ソフトウェアです。  
スマホ(クライアント)にアプリをインストールする必要はなく動作します。
# インストール
```bash
git clone https://github.com/zozonteq/remote-mouse #リポジトリをクローン
cd remote-mouse # ディレクトリに移動
npm i # 依存関係を解決
node index.js # 実行
```
# 使い方
```bash
node index.js #実行
```
起動するとターミナルにQRコードが出力されます。  
そのQRコードをスマホで読みとるとブラウザ上で操作画面が表示され、パソコンを操作することができます。

# 注意
 - macOSの場合、アクセシビリティの設定が求められる可能性があります。
 - サーバーとクライアントは同一ネットワークに接続してください。
 - 環境によってはFirewallの設定をするする必要があります。(デフォルトでは2222ポートが開きます。)
 - まだ開発途中なので動作が不安定な場合があります。
# 開発環境
## サーバー
 - node.js 14.15.3  
 - Ubuntu 22.04  
 - macOS catalina(10.15.7)  
 - windows 10  
## クライアント
 - iOS15.7  
 - Android 7  
 - Android 10  
 - watchOS 8
 # 実装予定
 - GUIサポート
 - .dmg .exe 形式ビルド
 - 操作画面のカスタマイズ(テーマ)
