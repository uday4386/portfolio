import re

html_file = r"c:\Users\savya\Downloads\portfolio\portio.html"
with open(html_file, "r", encoding="utf-8") as f:
    content = f.read()

with open(r"c:\Users\savya\Downloads\portfolio\certs_html.txt", "r", encoding="utf-8") as f:
    certs = f.read()

# Replace existing cert-container if it exists
if '<div class="cert-container">' in content:
    new_content = re.sub(
        r'<div class="cert-container">.*?</div>\s*</section>',
        certs.replace('\\', '\\\\') + '\n    </section>',
        content,
        flags=re.DOTALL
    )
else:
    new_content = re.sub(
        r'(<section class="certifications" id="certifications">\s*<h2 class="heading">My <span>Certifications</span></h2>\s*)<!-- Add content here later -->',
        r'\g<1>' + certs.replace('\\', '\\\\'),
        content
    )

with open(html_file, "w", encoding="utf-8") as f:
    f.write(new_content)
print("Injected HTML successfully.")
