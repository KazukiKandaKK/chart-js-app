# 開発者用マニュアル

## Github 運用

### ブランチ

ブランチは、下記のルールに準拠すること。  
|ブランチ名|内容|プルリク|
|-|-|-|
|main|メインブランチ|要|
|develop|開発用ブランチ|要|
|feature/hogehoghe|機能追加/改修用ブランチ|不要|
|bug/hogehoghe|バグ Fix 用ブランチ|不要|

### 運用ルール

main ブランチはリリース用のブランチの為、直接のコミットは行わずプルリク後にマージする。  
マージ後にリリースノートを作成し、下記の例に倣ってタグ付けをする。  
`vM.m.r`  
|名前|内容|詳細|
|-|-|-|
|v|バージョンの接頭辞|必ず接頭辞に付与する|
|M|メジャーバージョン|プロダクトそのものの文脈が変わるような、大きな機能追加を行った際にインクリメントする。(e.g. チャートの機能に任意の CSV からデータを読み書きできる機能を追加。)|
|m|マイナーバージョン|プロダクト自体は変わらないが、小さな機能追加を行った際にインクリメントする。(e.g. チャート機能に拡大縮小機能を追加。)|
|r|リビジョン|機能追加ではなく、バグ修正やドキュメント更新を行った際にインクリメントする。|

develop ブランチは feature/bug ブランチからマージされてデグレやバグが起きていないかを確認後マージする。  
Develop のマージ条件として、それぞれの feature/bug ブランチを commit/push すると GithubActions で CI が開始される(後日追加予定)ため、エラーが出ないことと ESLint に準拠していることである。  
ESLint については、[コーディングマニュアル](./developers-coding-manual.md)を参照いただきたい。  
また、develop にマージ後に再度 GithubActions で CI が開始される(後日追加予定)ため、上記でエラーが出ないことが main へのプルリク条件とする。