import { Bot as TelegramBot } from "grammy";
import * as dotenv from "dotenv";
dotenv.config();

if (!process.env.TELEGRAM_BOT_TOKEN) {
  throw new Error("TELEGRAM_BOT_TOKEN env variable is not defined");
}

export const bot = new TelegramBot(process.env.TELEGRAM_BOT_TOKEN);

bot.on("message:text", async (ctx) => {
  const msgId = ctx.message.message_id;

  if (!msgId) return;

  await ctx.reply("sup", {
    reply_to_message_id: msgId,
    disable_notification: true,
  });
});

bot.start();
console.info("[ Bot started... ]");
