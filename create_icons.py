from PIL import Image, ImageDraw

def create_icon(size, filename):
    # Create image with blue background
    img = Image.new('RGB', (size, size), color='#FF0000')
    draw = ImageDraw.Draw(img)
    
    # Draw a simple play symbol
    margin = size // 4
    # Draw forward arrow
    draw.polygon([
        (margin, margin),
        (margin, size - margin),
        (size - margin, size // 2)
    ], fill='white')
    
    img.save(filename)
    print(f'Created {filename}')

# Create all three icon sizes
create_icon(16, 'icon16.png')
create_icon(48, 'icon48.png')
create_icon(128, 'icon128.png')

print('All icons created successfully!')
