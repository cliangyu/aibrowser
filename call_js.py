import subprocess

class GPT4v():
    def __init__(self,imgpath,text) -> None:
        self.imgpath = imgpath
        self.text = text
    def call_javascript(self):
        try:
            result = subprocess.run(["node", "test.js", self.imgpath, self.text], capture_output=True, text=True, check=True)
            # print(result.stdout)
            ans = result.stdout
            # print(ans)
            return ans
        except subprocess.CalledProcessError as e:
            print("Error:", e)
            print(e.stderr)

if __name__ == "__main__":
    imgpath = "/data/lychen/code/web/aibrowser/output_image.jpg"
    text = "what's in the image"
    a = GPT4v(imgpath,text)
    print(a.call_javascript())
