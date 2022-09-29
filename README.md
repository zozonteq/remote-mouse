# remote-mouse
スマホをパソコンのマウスの代わりにするソフトです。  
スマホ(クライアント)にアプリをインストールする必要はなくSafari、Chromeなどのブラウザ上で動作します。
# Install
```bash
git clone https://github.com/zozonteq/remote-mouse #clone this repo.
cd remote-mouse # into repo
npm i # install libs
node index.js # run
```
# 使い方
起動するとターミナルにQRコードが出力されます。
そのQRコードをスマホで読みとるとブラウザ上で操作画面が表示される使うことができます。

# 注意
 - macOSで利用する場合、アクセシビリティの設定が必要です。
 - まだ開発途中なので動作が不安定な場合があります。
# 開発環境
node.js 14.15.3  
Ubuntu 22.04  
macOS catalina(10.15.7)  
windows 10  
iOS15.7  
Android 7  
Android 10  
watchOS 8.7  
