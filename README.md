# portfolio
ポートフォリオ

## Compass の導入
### rbenv のインストール
1. Ruby のバージョンを確認する
    ```
    $ ruby -v
    ruby 2.7.0p114 (2019-10-01 revision 67812) [x86_64-darwin19]
    ```
1. rbenv を入れる
    ```
    $ brew install rbenv ruby-build
    ```
### Ruby のインストール
1. 最新安定版をインストールする
    ```
    $ rbenv install 3.1.2
    ```
### バージョンの切り替え
1. 現在適用されているバージョンを確認する  
    *がついている行（初期だとsystem）が現在適用されているバージョン
    ```
    $ rbenv version
    * system
      3.1.2 (set by /Users/hoge/.rbenv/version)
    ```
1. インストールした最新安定版を適用する
    ```
    $ rbenv global 3.1.2
    ```
1. Ruby のバージョンを確認する
    ```
    $ ruby -v
    ruby 2.7.0p114 (2019-10-01 revision 67812) [x86_64-darwin19]
    ```
1. 変更が適用されない場合、rbenvのパスを通す必要がある  
    1. user 直下の .zshrc ファイルを開き、下記を追加する
        ```
        export PATH="$HOME/.rbenv/bin:$PATH" 
        eval "$(rbenv init - zsh)"
        ```
    1. 変更した .zshrc を読み込む
        ```
        $ source ~/.zshrc
        ```
1. パスを確認する
    ```
    $ which ruby
    /Users/hoge/.rbenv/shims/ruby

    $ which gem
    /Users/hoge/.rbenv/shims/gem
    ```
### Sass のインストール
1. Sass をインストールする
    ```
    $ sudo gem install sass
    ```
1. インストールされたか確認する
    ```
    $ sass -v
    Ruby Sass 3.7.4
    ```
### Compass のインストール
1. Compass をインストールする
    ```
    $ sudo gem install compass
    ```
1. インストールされたか確認する
    ```
    $ compass -v
    Compass 1.0.3 (Polaris)
    Copyright (c) 2008-2022 Chris Eppstein
    Released under the MIT License.
    Compass is charityware.
    Please make a tax deductable donation for a worthy cause: http://umdf.org/compass
    ```
### Compass の起動
1. 作業ディレクトリ直下にプロジェクトを作成する
    ```
    $ compass create
    ```
1. 起動する
    ```
    $ compass w
    ```
1. 停止する場合は、ctrl+c
### 参考
- [Mac Catalinaにアップデートしたらsassが効かなくなった時](https://bank-of-clouds.com/mac-update-calalina-cause-ruby-sass-not-working)
- [Macのzshでrbenvを使う](https://qiita.com/seijikohara/items/79b479c9dd2e3b950301)
- [macOS Mojave や Catalina で compass を動かす方法を紹介](https://hirashimatakumi.com/blog/5815.html)
- [Compass導入ガイド](https://qiita.com/AsagiriDesign/items/db12237796d1e7c9e632)