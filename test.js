const OpenAIChatController = require('./chatgpt');

async function runGPT4() {
    const chatController = new OpenAIChatController();

    try {
        await chatController.initialize();

        const inputText = "are you gpt-4 or gpt-3.5?";
        await chatController.typeIntoPrompt(inputText);

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


runGPT4();



// const OpenAIChatController = require('./chatgpt');
// const chatController = new OpenAIChatController();

// async function runChat() {
//     try {
//         chatController.on('end_turn', (response) => {
//             fs.writeFileSync('result0.txt', "a??\n", 'utf-8');
//             console.log('GPT-4 response: ', response);

//             const fs = require('fs');
//             fs.writeFileSync('result00.txt', response, 'utf-8');

//         });
//         await chatController.initialize();
//         const fs = require('fs');
//         fs.writeFileSync('result1.txt', "finish initialize.\n", 'utf-8');
//         await chatController.typeIntoPrompt("fuckyou, GPT-4.");
//         fs.writeFileSync('result2.txt', "finish type intoprompt.\n", 'utf-8');
//         await chatController.clickSendButton();
//         fs.writeFileSync('result3.txt', "finish clicksend.\n", 'utf-8');

//         chatController.on('end_turn', (response) => {
//             fs.writeFileSync('result4.txt', "a??\n", 'utf-8');
//             console.log('GPT-4 response: ', response);

//             const fs = require('fs');
//             fs.writeFileSync('result5.txt', response, 'utf-8');

//         });
//         fs.writeFileSync('result6.txt', "all is finished.", 'utf-8');
//     } finally {
//         await chatController.close();
//     }
// }

// runChat().catch(error => {
//     console.error(error);
// });