from PIL import Image


image_paths = ["/data/lychen/code/web/ai-browser/images/building.jpg", 
               "/data/lychen/code/web/ai-browser/images/cat.jpg", 
               "/data/lychen/code/web/ai-browser/images/IMG_20230428_182125.jpg"
              ] 
images = [Image.open(path) for path in image_paths]


# new_size = (400, 400)
# resized_images = [image.resize(new_size) for image in images]


widths, heights = zip(*(i.size for i in images))


total_width = sum(widths)
max_height = max(heights)

new_image = Image.new("RGB", (total_width, max_height))


x_offset = 0
for image in images:
    new_image.paste(image, (x_offset, 0))
    x_offset += image.width
new_image.save("new_image.jpg")


total_height = sum(heights)
max_widths = max(widths)
horizon_image = Image.new("RGB", (max_widths,total_height))

y_offset = 0
for image in images:
    horizon_image.paste(image, (0, y_offset))
    y_offset += image.height
horizon_image.save("horizon_image.jpg")

