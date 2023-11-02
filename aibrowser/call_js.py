import subprocess

class GPT4v():
    def __init__(self) -> None:
        pass
    
    def call_javascript(self,imgpath,text):
        try:
            # print("imgpath : "+imgpath)
            # print("text : "+text)
            result = subprocess.run(["node", "/data/lychen/code/web/aibrowser/test.js", imgpath, text], capture_output=True, text=True, check=True)
            # print(result.stdout)
            ans = result.stdout
            # print(ans)
            return ans
        except subprocess.CalledProcessError as e:
            print("Error:", e)
            print(e.stderr)

if __name__ == "__main__":
    imgpath = "/data/lychen/code/web/aibrowser/images/building.jpg"
    text = "what's in the image"
    a = GPT4v()
    print(a.call_javascript(imgpath,text))
