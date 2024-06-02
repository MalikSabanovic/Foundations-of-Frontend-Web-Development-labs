document.addEventListener("DOMContentLoaded", function() {
    const data = {
        "fourth-section": {
            "fourth-section-text": {
                "headings": [
                    { "level": "h5", "text": "Follow us on" },
                    { "level": "h1", "text": "Socials" },
                    { "level": "h5", "text": "Volkswagen das autos" }
                ]
            }
        }
    };

    const fourthSectionText = document.getElementById("jsonContent");
    data["fourth-section"]["fourth-section-text"]["headings"].forEach(heading => {
        const element = document.createElement(heading.level);
        element.textContent = heading.text;
        fourthSectionText.appendChild(element);
    });
});