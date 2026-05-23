import re

def clean_file(filename):
    with open(filename, 'r') as f:
        content = f.read()
    
    content = re.sub(r'/\*\s*──\s*(.*?)\s*──\s*\*/', r'/* \1 */', content)
    content = content.replace('Apex Grand Prix — Refined F1 Theme', 'Apex Grand Prix Theme')
    content = content.replace('Animations — Alive & Intuitive', 'Animations')
    
    with open(filename, 'w') as f:
        f.write(content)

clean_file('styles.css')
clean_file('script.js')
