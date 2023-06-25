const dotenv = require('dotenv');
dotenv.config();
const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);


module.exports = {
    Greet:(req,res)=>
    {
        res.json({success:'Hello'})
    },
    GPT: async (req,res) => {
        console.log("in backend")
        try {
            const {transcript} = req.body
            const {data} = await openai.createCompletion({
                model: "text-davinci-003",
                prompt: `Summarize this \n ${transcript}`,
                max_tokens: 500,
                temperature: 0.5,
            })

            if(data) {
                if(data.choices[0].text){
                    console.log("success", transcript)
                    const result = data.choices[0].text
                    return res.status(200).json({message:'Success',result});
                }
            }
        } catch (error) {
            console.log("error", error)
            return res.status(404).json({
                message: error.message
            })
        }
    }
}