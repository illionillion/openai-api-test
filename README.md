# OpenAI Chatbot

このプログラムはOpenAI APIを使用した対話型のチャットボットです。ユーザーが入力した質問に対して、OpenAIのモデルを使って回答を生成します。

## セットアップ

1. `.env`ファイルを作成し、OpenAI APIキーを設定してください。
```
OPENAI_API_KEY=<your api key>
```

2. `npm install`コマンドを使って、必要なパッケージをインストールしてください。

## 使い方

`main`関数を実行すると、ユーザーからの入力を待ちます。ユーザーが「終了」と入力するまで、続けて質問を受け付けます。ユーザーが入力した質問に対して、自動で回答を生成します。

### `ask(content: string, model?: string, role?: ChatCompletionRequestMessageRoleEnum)`

OpenAIのAPIを使って質問に対する回答を自動生成します。

- `content` : ユーザーが入力した質問
- `model`: 使用するモデルの名前。デフォルトは `"gpt-3.5-turbo-0301"` です。
- `role`: ボットかアシスタントかを指定します。デフォルトは `"user"` です。

### `prompt(msg: string)`

ユーザーに対して、メッセージを出力し、標準入力から回答を受け取ります。

- `msg`: ユーザーに表示するメッセージ。

### `question(question: string): Promise<string>`

ユーザーに対して、質問をし、回答を受け取ります。

- `question`: ユーザーに表示する質問。

### `main()`

`main`関数を実行することで、ユーザーからの入力を待ちます。ユーザーが "終了" と入力するまで、質問を受け付け、自動で回答を生成します。