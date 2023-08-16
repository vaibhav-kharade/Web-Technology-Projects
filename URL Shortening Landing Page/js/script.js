const urlForm = document.getElementById("url-form");
const urlInput = document.getElementById("url-input");
const shortenedLinks = document.getElementById("shortened-links");

urlForm.addEventListener("submit", shortenURL);

function shortenURL(event) {
  event.preventDefault();

  const originalURL = urlInput.value;
  if (!originalURL) {
    alert("Please enter a valid URL.");
    return;
  }

  fetch(`https://rel.ink/api/links/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      url: originalURL
    })
  })
    .then(response => response.json())
    .then(data => {
      const shortenedURL = `https://rel.ink/${data.hashid}`;
      const linkElement = document.createElement("div");
      linkElement.innerHTML = `
        <p>
          <a href="${originalURL}" target="_blank">${originalURL}</a>
          &rarr;
          <a href="${shortenedURL}" target="_blank">${shortenedURL}</a>
          <button class="copy-button" data-url="${shortenedURL}">Copy</button>
        </p>`;
      shortenedLinks.appendChild(linkElement);
      updateCopyButtons();
    })
    .catch(error => console.error("Error:", error));

  urlInput.value = "";
}

function updateCopyButtons() {
  const copyButtons = document.querySelectorAll(".copy-button");
  copyButtons.forEach(button => {
    button.addEventListener("click", () => {
      const urlToCopy = button.getAttribute("data-url");
      copyToClipboard(urlToCopy);
    });
  });
}

function copyToClipboard(text) {
  const textarea = document.createElement("textarea");
  textarea.value = text;
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand("copy");
  document.body.removeChild(textarea);
  alert("Shortened URL copied to clipboard!");
}
