require('../settings.js')
const { OpenAI } = require('openai');
var openaiapi = global.openaiapi

const apiKey = `${openaiapi}`;
const openai = new OpenAI({ apiKey });

async function generateResponse(userText) {
  try {
    const completion = await openai.chat.completions.create({
      messages: [{ role: "system", content: "You are a helpful assistant." }, { role: "user", content: userText }],
      model: "gpt-3.5-turbo",
    });

    const response = completion.choices[0].message.content;
    return response;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

module.exports = generateResponse;
