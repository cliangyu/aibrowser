from PIL import Image, ImageDraw, ImageFont

image_paths = ["/data/lychen/code/web/ai-browser/images/building.jpg",
               "/data/lychen/code/web/ai-browser/images/cat.jpg",
               "/data/lychen/code/web/ai-browser/images/IMG_20230428_182125.jpg"
               ]
class MergeImage():
    def __init__(self) -> None:
        pass
    
    def merge(self, image_paths, text):
        images = [Image.open(path) for path in image_paths]

        font_size = 80
        font = ImageFont.truetype("/data/lychen/code/web/aibrowser/Times New Roman.ttf", font_size)

        text_heights = [ImageDraw.Draw(Image.new("RGB", (1, 1))).textsize(txt, font=font)[1] for txt in text]
        max_text_height = max(text_heights)

        widths, heights = zip(*(i.size for i in images))
        max_height = max(heights) + max_text_height
        total_widths = sum(widths)

        new_image = Image.new("RGB", (total_widths, max_height), "white")

        x_offset = 0
        text_color = (0, 0, 0)

        num = 1

        for image, txt in zip(images, text):
            draw = ImageDraw.Draw(new_image)
            text_size = draw.textsize(txt, font=font)
            
            new_image.paste(image, (x_offset, 0))
            
            x = x_offset + (image.width - text_size[0]) // 2
            y = max_height - max_text_height
            draw.text((x, y), "["+str(num)+"]" + txt, fill=text_color, font=font)
            num+=1
            
            x_offset += image.width

        new_image.save("output_image.jpg")


# total_height = sum(heights)
# max_widths = max(widths)
# horizon_image = Image.new("RGB", (max_widths,total_height))

# y_offset = 0
# for image in images:
#     horizon_image.paste(image, (0, y_offset))
#     y_offset += image.height
# horizon_image.save("horizon_image.jpg")

