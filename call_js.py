import subprocess

imgpath = "/data/lychen/code/web/ai-browser/images/building.jpg"
text = "what is in the image?"

def call_javascript():
    try:
        result = subprocess.run(["node", "test.js", imgpath, text], capture_output=True, text=True, check=True)
        print(result.stdout)
    except subprocess.CalledProcessError as e:
        print("Error:", e)
        print(e.stderr)

if __name__ == "__main__":
    call_javascript()
