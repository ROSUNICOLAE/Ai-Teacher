// a express server, which will handle api requests in and respond back with a json object, it will use body barser as well as cors


const OpenAI = require('openai');
const { Configuration, OpenAIApi } = OpenAI;


const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = 3001;

const configuration = new Configuration({
    organization: "org-nAqkmOz2e39VHuQvHQIDYKon",
    apiKey: "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",
});
const openai = new OpenAIApi(configuration);

app.use(bodyParser.json());

app.use(cors());
app.post('/', async (req, res) =>{
    const { message } = req.body;
    const response = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: ` Act like a Math teacher, a genius in mathematics.And do not accept other questions from anything else. Try to answer in Romanian language.And try to be as explicit as possible.

        Person :  ${message}`,
        max_tokens: 1500,
        temperature: 0,
        top_p : 1.0,
        frequency_penalty : 0.5,
        presence_penalty : 0.0,
    });
    console.log(response);
    if(response.data.choices[0].text){
        res.json({message : response.data.choices[0].text})
    }
});
app.listen(port, () => console.log(`Example app listening on port ${port}!`)); // start the server on port 3000

