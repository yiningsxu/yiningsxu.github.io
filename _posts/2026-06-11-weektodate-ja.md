---
layout: post
title: 日付変換ツール「WeekToDate」を作りました。
date: 2026-06-11
categories: blog
tags: [Web App, LifeHack, Public Health]
thumbnail: /assets/img/Date%20Conversion%20Tool%20jp.png
subcategory: hobbies
lang: ja
ref: weektodate-post
permalink: /ja/blog/2026/weektodate/
---

![WeekToDate](/assets/img/Date%20Conversion%20Tool%20jp.png){: width="300px"}

### 報告週・西暦日付・和暦を変換できる「WeekToDate」を作りました

日本の報告週、西暦日付、感染症シーズン週、和暦表記をすばやく変換できる、小さな静的HTMLツールを作りました。

ブラウザで `index.html` を開くだけで使える構成です。リポジトリ内のPythonスクリプトからHTMLを再生成したり、コマンドラインで単発変換することもできます。

### できること（主な機能）

- **JIHS/IDWR形式の報告週**を、その週の月曜日の日付へ変換
- 報告週に対応する**月曜日から日曜日までの日付範囲**を表示
- モードを切り替えて、**西暦日付**から報告年・報告週・週内日へ変換
- 第36週をシーズン開始週として、**感染症シーズン年・疫学年**を表示
- **昭和・平成・令和**の和暦表記を西暦日付へ変換
- 全角数字・全角英字・全角記号の入力を正規化
- 主結果、日付範囲、感染症シーズン詳細を個別にコピー
- 外部ライブラリ不要のレスポンシブな静的HTMLページ

### 作った理由

感染症サーベイランスでは報告週が便利ですが、週番号、カレンダー上の日付、感染症シーズン年を行き来するときに確認が少し面倒です。表やスプレッドシートを開かなくても、ブラウザですぐ確認できる軽い道具が欲しくて作りました。

### リンク

- [今すぐ使う](https://yiningsxu.github.io/WeekToDate/)
- ソースコード: [GitHub](https://github.com/yiningsxu/WeekToDate)
