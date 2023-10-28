const OpenAIChatController = require('./chatgpt');

const imgpaths=[
    "/data/lychen/code/web/ai-browser/images/building.jpg",
    "/data/lychen/code/web/ai-browser/images/cat.jpg",
    "/data/lychen/code/web/ai-browser/images/cat2.JPG",
    "/data/lychen/code/web/ai-browser/images/IMG_20230401_220704.jpg",
    "/data/lychen/code/web/ai-browser/images/IMG_20230428_182125.jpg",
    "/data/lychen/code/web/ai-browser/images/IMG_20230502_213559.jpg",
    "/data/lychen/code/web/ai-browser/images/Signal.jpg",
    "/data/lychen/code/web/ai-browser/images/IMG_20230429_180018.jpg",
    "/data/lychen/code/web/ai-browser/images/2374d854cccba27.jpg",
    "/data/lychen/code/web/ai-browser/images/emoji.jpg"
];

async function runGPT4(imgpath,inputText) {
    const chatController = new OpenAIChatController();

    try {
        await chatController.initialize();

        // const inputText = "what's in the image?";
        await chatController.typeIntoPrompt(inputText);
        // const imagePath = "/data/lychen/code/web/ai-browser/building.jpg";
        await chatController.uploadImage(imgpath);
        await chatController.clickSendButton();

        console.log("wait for the response");
        let gpt4Response = await new Promise((resolve) => {
            console.log("got a resolve");
            chatController.once('end_turn', (response) => {
                console.log("got a response")
                resolve(response);
            });
        });
        console.log('GPT-4 response: ', gpt4Response);
    } catch (error) {
        console.error('got an error: ', error);
    } finally {
        await chatController.close();
    }
}


async function multitask(){
    for (const imgpath of imgpaths){
        await runGPT4(imgpath);
    }
}
// multitask();
const args = process.argv.slice(2);
if (args.length > 0){
    const imgpath = args[0];
    const inputText = args[1];
    runGPT4(imgpath,inputText);
}


