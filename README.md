# GPT-4V-Act: Chromium Copilot(Adapted)

## This is develeped from [GPT-4V-Act](https://github.com/ddupont808/GPT-4V-Act)

you need to install MobaXterm or ```Xvfb``` (suggested) first.

```bash
sudo apt update
sudo apt install xvfb
```

Attention : maybe your ```Node.js``` version is not available during the installation of ```npm```. So run following commands first.

(Reference website: [nvm install](https://github.com/nvm-sh/nvm#installing-and-updating). We need to install nvm first)

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.5/install.sh | bash

# or

wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.5/install.sh | bash
```

```bash
export NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && printf %s "${HOME}/.nvm" || printf %s "${XDG_CONFIG_HOME}/nvm")"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" # This loads nvm
```

Use this command to check whether nvm has been installed successfully. The output should be ```nvm```.
```bash
command -v nvm
```

Then, update ```Node.js```.
```bash
nvm install --lts
```


**Get Started!**
```bash
# Clone the repo
git clone https://github.com/MichaelZona/GPT4v_test.git
# Navigate to the repo directory
cd ai-browser
# Install the required packages
npm install
# Start test
xvfb-run test.js
```
