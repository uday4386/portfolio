import os
import re

cert_dir = r"c:\Users\savya\Downloads\portfolio\certificates"

cert_data = {
    "AI for India 2.0.png": {"date_str": "August 2023", "sort_date": "2023-08-15"},
    "Basics of Python.pdf": {"date_str": "June 2025", "sort_date": "2025-06-05"},
    "Blockchain_Beginner Python.png": {"date_str": "August 2024", "sort_date": "2024-08-01"},
    "Blockchain_Intermediate Python.png": {"date_str": "May 2024", "sort_date": "2024-05-23"},
    "Delloite_data analytics Simulation.pdf": {"date_str": "March 2025", "sort_date": "2025-03-04"},
    "Foundations of AI.jpg": {"date_str": "May 2025", "sort_date": "2025-05-10"},
    "HACK THE CODE CHALLENGE.jpg": {"date_str": "March 2024", "sort_date": "2024-03-12"},
    "Hackathon-Participation-Certificate.pdf": {"date_str": "December 2025", "sort_date": "2025-12-21"},
    "Introduction to Data Science.pdf": {"date_str": "February 2024", "sort_date": "2024-02-26"},
    "Natural Language Processing.pdf": {"date_str": "February 2024", "sort_date": "2024-02-26"},
    "PowerBI_certificate.jpg": {"date_str": "January 2025", "sort_date": "2025-01-17"},
    "Python Certification Practice Test.jpg": {"date_str": "July 2025", "sort_date": "2025-07-23"},
    "Python Programming.jpg": {"date_str": "August 2024", "sort_date": "2024-08-15"},
    "Python for Beginners.pdf": {"date_str": "February 2024", "sort_date": "2024-02-28"},
}

files = []

for filename in os.listdir(cert_dir):
    filepath = os.path.join(cert_dir, filename)
    if os.path.isfile(filepath):
        if filename in cert_data:
            sort_date = cert_data[filename]["sort_date"]
            date_str = cert_data[filename]["date_str"]
        else:
            sort_date = "1970-01-01"
            date_str = "Unknown"
        
        name_no_ext = os.path.splitext(filename)[0]
        # Clean title
        title = name_no_ext.replace("_", " ").replace("-", " ")
        title = re.sub(r'(?i)certificate|participation|simulation', '', title)
        title = title.strip()
        
        files.append({
            "filename": filename,
            "filepath": f"certificates/{filename}",
            "sort_date": sort_date,
            "date_str": date_str,
            "title": title
        })

# Sort by date descending
files.sort(key=lambda x: x["sort_date"], reverse=True)

html = '<div class="cert-container">\n'
for f in files:
    html += f'''    <div class="glass-card cert-card" onclick="openModal('{f["filepath"]}')" style="cursor: pointer;">
        <div class="cert-icon-wrapper"><i class="fa-solid fa-award"></i></div>
        <div class="cert-info">
            <h4>{f["title"]}</h4>
            <p>{f["date_str"]}</p>
        </div>
    </div>\n'''
html += '</div>'

with open(r"c:\Users\savya\Downloads\portfolio\certs_html.txt", "w", encoding="utf-8") as f:
    f.write(html)
print("Successfully generated certs_html.txt with " + str(len(files)) + " items.")
