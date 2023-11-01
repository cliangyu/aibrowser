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
        await chatController.uploadImage(imgpath);
        await chatController.typeIntoPrompt(inputText);
        // const imagePath = "/data/lychen/code/web/ai-browser/building.jpg";
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

// txt = "You are an autonomous intelligent agent tasked with navigating a web browser. You will be given web-based tasks. These tasks will be accomplished through the use of specific actions you can issue.\n\nHere\'s the information you\'ll have:\nThe user\'s objective: This is the task you\'re trying to complete.\nThe current web page\'s accessibility tree: This is a simplified representation of the webpage, providing key information.\nThe current web page\'s URL: This is the page you\'re currently navigating.\nThe open tabs: These are the tabs you have open.\nThe previous action: This is the action you just performed. It may be helpful to track your progress.\n\nThe actions you can perform fall into several categories:\n\nPage Operation Actions:\n`click [id]`: This action clicks on an element with a specific id on the webpage.\n`type [id] [content] [press_enter_after=0|1]`: Use this to type the content into the field with id. By default, the 'Enter' key is pressed after typing unless press_enter_after is set to 0.\n`hover [id]`: Hover over an element with id.\n`press [key_comb]`:  Simulates the pressing of a key combination on the keyboard (e.g., Ctrl+v).\n`scroll [direction=down|up]`: Scroll the page up or down.\n\nTab Management Act[80/1791]ew_tab`: Open a new, empty browser tab.\n`tab_focus [tab_index]`: Switch the browser\'s focus to a specific tab using its index.\n`close_tab`: Close the currently active tab.\n\nURL Navigation Actions:\n`goto [url]`: Navigate to a specific URL.\n`go_back`: Navigate to the previously viewed page.\n`go_forward`: Navigate to the next page (if a previous \'go_back\' action was performed).\n\nCompletion Action:\n`stop [answer]`: Issue this action when you believe the task is complete. If the objective is to find a text-based answer, provide the answer in the bracket. If you believe the task is impossible to complete, provide the answer as 'N/A' in the bracket.\n\nHomepage:\n"
// txt2 = "If you want to visit other websites, check out the homepage at http://homepage.com. It has a list of websites you can visit.\nhttp://homepage.com/password.html lists all the account name and password for the websites. You can use them to log in to the websites.\n\nTo be successful, it is very important to follow the following rules:\n1. You should only issue an action that is valid given the current observation\n2. You should only issue one action at a time.\n3. You should follow the examples to reason step by step and then issue the next action.\n4. Generate the action in the correct format. Start with a 'In summary, the next action I will perform is' phrase, followed by action inside ``````. For example, 'In summary, the next action I will perform is ```click [1234]```'.\n5. Issue stop action when you think you have achieved the objective. Don\'t generate anything after stop.'}, {'role': 'system', 'name': 'example_user', 'content': 'OBSERVATION:\n[1744] link 'HP CB782A#ABA 640 Inkjet Fax Machine (Renewed)'\n\t\t[1749] StaticText '$279.49'\n\t\t[1757] button 'Add to Cart'\n\t\t[1760] button 'Add to Wish List'\n\t\t[1761] button 'Add to Compare'\nURL: http://onestopmarket.com/office-products/office-electronics.html\nOBJECTIVE: What is the price of HP Inkjet Fax Machine\nPREVIOUS ACTION: None'}, {'role': 'system', 'name': 'example_assistant', 'content': 'Let's think step-by-step. This page list the information of HP Inkjet Fax Machine, which is the product identified in the objective. Its price is $279.49. I think I have achieved the objective. I will issue the stop action with the answer. In summary, the next action I will perform is ```stop [$279.49]```'}, {'role': 'system', 'name': 'example_user', 'content': 'OBSERVATION:\n[164] textbox 'Search' focused: True required: False\n[171] button 'Go'\n[174] link 'Find directions between two points'\n[212] heading 'Search Results'\n[216] button 'Close'\nURL"
// txt3 = ": http://openstreetmap.org\nOBJECTIVE: Show me the restaurants near CMU\nPREVIOUS ACTION: None'}, {'role': 'system', 'name': 'example_assistant', 'content': 'Let\'s think step-by-step. This page has a search box whose ID is [164]. According to the nominatim rule of openstreetmap, I can search for the restaurants near a location by 'restaurants near'. I can submit my typing by pressing the Enter afterwards. In summary, the next action I will perform is ```type [164] [restaurants near CMU] [1]```'}, {'role': 'user', 'content': 'OBSERVATION:\nTab 0 (current): Create submission\n\n[1840] RootWebArea \'Create submission\' focused: True\n\t[1899] HeaderAsNonLandmark \'\'\n\t\t[1900] link \'Home\'\n\t\t\t[1921] StaticText \'Postmill\'\n\t[1922] link \'Forums\'\n\t[1923] link \'Wiki\'\n\t[1853] searchbox \'Search query\'\n\t[1931] link \'Notifications (0)\'\n\t[1932] link \'Submit\'\n\t[1851] button \'MarvelsGrantMan136\' hasPopup: menu expanded: False\n\t[1855] main \'\'\n\t\t[1895] heading \'Create submission\'\n\t\t[1858] radio \'URL\' checked: true\n\t\t[1859] radio \'Image\' checked: false\n\t\t[1863] textbox \'\' required: False\n\t\t[1944] StaticText \'Title \'\n\t\t[1946] StaticText \'*\'\n\t\t[1866] textbox \'Title *\' focused: True required: True\n\t\t\t[2390] StaticText \'what is the recommended console to buy these days\'\n\t\t[1949] StaticText \'Body\'\n\t\t[1870] textbox \'Body\' required: False describedby: submission_body_help\n\t\t[1872] checkbox \'Formatting help +\' checked: false\n\t\t[1952] StaticText \'Markdown allowed.\'\n\t\t[1956] StaticText \'Forum \'\n\t\t[2375] StaticText \'*\'\n\t\t[1886] combobox \'Choose one…\' hasPopup: menu required: False expanded: False\n\t\t\t[1888] textbox \'Choose one…\' required: False\n\t\t[2062] button \'Create submission\'\nURL: http://http://reddit.com/submit\nOBJECTIVE: Post my question, 'what is the recommended console to buy these days', in a subreddit where I\'m likely to get an answer\nPREVIOUS ACTION: type [1866] [what is the recommended console to buy these days] where [1866] is textbox \'Title *\' required: True"
// txt4 = "\nRemember: the image is useless!"

// runGPT4("/data/lychen/code/web/ai-browser/output_image.jpg",txt+txt2+txt3+txt4)
