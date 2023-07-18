const openai = require('../config/openaiConfig') 
const generateMeta = async(req, res) => {
    const {title} = req.body

    const desciption = await openai.createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: [
            {
            role: 'user',
            content: `Come up with a desciption for YouTube video called ${title}` 
            }
    ],
    max_tokens: 100
    })
    res.status(200).json({
        desciption: RTCSessionDescription.data.choices[0]. message,
        tags: tags.data.choices[0].message
    })
}
const generateImage = async (req, res) =>{
    const image = await openai.createImage({
    prompt: req.body. prompt,
    n: 1,
    size: '512x512'
})
res.json({
    url: console.log(image.data.data[0].url)
})
}
module.exports = {generateMeta}
