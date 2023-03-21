import {
  ChatCompletionRequestMessageRoleEnum,
  Configuration,
  OpenAIApi,
} from "openai";
import * as dotenv from "dotenv";
import { createInterface } from "readline";
dotenv.config();

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

export const ask = async (
  content: string,
  model = "gpt-3.5-turbo-0301",
  role: ChatCompletionRequestMessageRoleEnum = "user"
) => {
  const response = await openai.createChatCompletion({
    model: model,
    messages: [{ role: role, content: content }],
  });

  const answer = response.data.choices[0].message?.content;
  console.log(answer);
};
/**
 * ユーザーに値を入力させる
 */
const prompt = async (msg: string) => {
  const answer = await question(msg);
  return answer.trim();
};
/**
 * 標準入力を取得する
 */
const question = (question: string): Promise<string> => {
  const readlineInterface = createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  return new Promise((resolve) =>
    readlineInterface.question(question, (answer) => {
      resolve(answer);
      readlineInterface.close();
    })
  );
};
const main = async () => {
  while (true) {
    console.log("\n");
    console.log("質問を入力してください（終了する場合は「終了」のみを入力）");
    const input = await prompt("質問を入力：");
    if (input === "終了") break;
    if (input !== "") await ask(input);
  }
};

main();
