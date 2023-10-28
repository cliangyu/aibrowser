import subprocess

def call_javascript(imgpath, text):
    try:
        result = subprocess.run(["node", "test.js", imgpath, text], capture_output=True, text=True, check=True)
        print(result.stdout)
    except subprocess.CalledProcessError as e:
        print("Error:", e)
        print(e.stderr)

if __name__ == "__main__":
    imgpath = "/data/lychen/code/web/ai-browser/images/building.jpg"
    text = "what is in the image?"
    
    call_javascript(imgpath,text)
