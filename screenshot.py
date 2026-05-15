from playwright.sync_api import sync_playwright
import time

def run():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()
        page.goto('http://localhost:8000/portio.html')
        time.sleep(2)  # Wait for animations
        
        # Scroll down incrementally to trigger ScrollReveal
        for i in range(10):
            page.evaluate("window.scrollBy(0, window.innerHeight)")
            time.sleep(0.5)
            
        page.screenshot(path='c:/Users/savya/Downloads/portfolio/screenshot2.png', full_page=True)
        browser.close()

if __name__ == '__main__':
    run()
