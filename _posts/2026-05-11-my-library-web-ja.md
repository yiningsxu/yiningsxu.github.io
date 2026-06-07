---
layout: post
title: モバイル向け蔵書管理アプリ「My Library」を作りました。
date: 2026-05-11
categories: blog
tags: [Web App, Books]
thumbnail: /assets/img/2026-05-11_my_library.png
subcategory: hobbies
lang: ja
ref: my-library-web-post
permalink: /ja/blog/2026/my-library-web/
---

![My Library](/assets/img/2026-05-11_my_library.png){: width="300px"}

### スマホで使いやすい蔵書管理アプリ「My Library」を作りました

ブラウザだけで使える、個人向けの軽量な蔵書管理Webアプリを作りました。バーコードの読み取り、またはISBNの手入力から書誌情報を取得し、読書状況・メモ・価格・表紙画像などを記録できます。

ビルド不要の単一HTMLアプリとして作っているため、GitHub Pagesなどに置くだけで使いやすい構成です。

### できること（主な機能）

- **バーコード読み取り**と**ISBN手動検索**
- **openBD**、**Google Books**、**Open Library**による書誌情報取得
- 読書状況、感想・メモ、価格、表紙画像、登録日時の管理
- 表紙写真のアップロードとブラウザ内での画像圧縮
- **CSVエクスポート/インポート**によるバックアップ
- **多言語対応**: 日本語/English/中文
- 任意の **Firebase Authentication + Firestore** 同期
- Firebaseが使えない場合の `localStorage` ローカル保存

### 作った理由

専用アプリのインストールや複雑なデータベース設定なしで、手元の本をすばやく登録・整理できる道具が欲しかったからです。読書メモを残しつつ、CSVでデータを持ち出せることも重視しました。

### リンク

- [今すぐ使う](https://yiningsxu.github.io/my_library_web/bookmanager.html)
- ソースコード: [GitHub](https://github.com/yiningsxu/my_library_web)
