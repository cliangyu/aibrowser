import subprocess

def call_javascript():
    try:
        # 调用 JavaScript 文件并执行其中的函数
        result = subprocess.run(["xvfb-run","node", "test.js"], capture_output=True, text=True, check=True)

        # 打印 JavaScript 返回的结果
        print(result.stdout)
    except subprocess.CalledProcessError as e:
        print("Error:", e)
        print(e.stderr)

if __name__ == "__main__":
    call_javascript()
