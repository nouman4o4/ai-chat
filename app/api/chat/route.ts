import Groq from "groq-sdk"
const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
})

export async function POST(req: Request) {
  try {
    const { messages } = await req.json()

    const chatCompletion = await groq.chat.completions.create({
      messages,
      model: "openai/gpt-oss-20b",
    })

    const reply = chatCompletion.choices[0].message

    return Response.json(reply)
  } catch (error) {
    console.log(error)
    Response.json({ status: 500, message: "internel server error" })
  }
}
