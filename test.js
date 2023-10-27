const OpenAIChatController = require('./chatgpt');
const chatController = new OpenAIChatController();

async function runChat() {
    try {
        chatController.on('end_turn', (response) => {
            fs.writeFileSync('result0.txt', "a??\n", 'utf-8');
            console.log('GPT-4 response: ', response);

            const fs = require('fs');
            fs.writeFileSync('result00.txt', response, 'utf-8');

        });
        await chatController.initialize();
        const fs = require('fs');
        fs.writeFileSync('result1.txt', "finish initialize.\n", 'utf-8');
        await chatController.typeIntoPrompt("hello, GPT-4.");
        fs.writeFileSync('result2.txt', "finish type intoprompt.\n", 'utf-8');
        await chatController.clickSendButton();
        fs.writeFileSync('result3.txt', "finish clicksend.\n", 'utf-8');

        chatController.on('end_turn', (response) => {
            fs.writeFileSync('result4.txt', "a??\n", 'utf-8');
            console.log('GPT-4 response: ', response);

            const fs = require('fs');
            fs.writeFileSync('result5.txt', response, 'utf-8');

        });
        fs.writeFileSync('result6.txt', "all is finished.", 'utf-8');
    } finally {
        await chatController.close();
    }
}

runChat().catch(error => {
    console.error(error);
});
