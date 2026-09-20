# 005: hyper_copy

- **コード**: [https://github.com/ongaeshi/hyper_copy](https://github.com/ongaeshi/hyper_copy)

## 目的
ファイルをコピーする際に、大文字小文字のルール（キャメルケースやスネークケースなど）を維持したまま、ファイル名とファイル内のテキストを置換するため。

## 概要
Ruby製のコマンドラインツール。コピー時に特定の文字列をスマートに置換し、PascalCaseやcamelCaseなどのケースを自動的に保持して変換してくれます。

## 最初のプロンプト

```text
コンソールから中のテキストと合わせて hyper_copy コマンドを Ruby で作って。
hyper_copy --from FooBar --to AaaBbb --from2 フー --to2 バー CmdFoo.cs CmdBar.cs
デフォルトで Preserve Case 有効となる。(FooBar -> AaaBbb, fooBar -> aaaBar, FOOBAR -> AAABBB)
```

## メモ・所感
