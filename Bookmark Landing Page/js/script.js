const bookmarkForm = document.getElementById("bookmark-form");
const bookmarksContainer = document.getElementById("bookmarks-container");

bookmarkForm.addEventListener("submit", addBookmark);

function addBookmark(event) {
  event.preventDefault();

  const urlInput = document.getElementById("url-input");
  const nameInput = document.getElementById("name-input");

  const url = urlInput.value;
  const name = nameInput.value;

  if (url && name) {
    const bookmark = createBookmarkElement(url, name);
    bookmarksContainer.appendChild(bookmark);

    urlInput.value = "";
    nameInput.value = "";
  }
}

function createBookmarkElement(url, name, category) {
  const bookmark = document.createElement("div");
  bookmark.classList.add("bookmark");

  const link = document.createElement("a");
  link.href = url;
  link.target = "_blank";
  link.textContent = name;

  const categories = document.createElement("div");
  categories.classList.add("categories");
  const categoryDiv = document.createElement("div");
  categoryDiv.classList.add("category");
  categoryDiv.textContent = category;
  categories.appendChild(categoryDiv);

  const editButton = document.createElement("button");
  editButton.textContent = "Edit";
  editButton.classList.add("edit-button");
  editButton.addEventListener("click", () => {
    const newName = prompt("Enter a new name for the bookmark:", name);
    if (newName) {
      link.textContent = newName;}
    });

  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";
  deleteButton.addEventListener("click", () => {
    bookmark.remove();
  });

  bookmark.appendChild(link);
  bookmark.appendChild(categories);
  bookmark.appendChild(editButton);
  bookmark.appendChild(deleteButton);

  return bookmark;
}
//In this example, we're creating a bookmark landing page where users can add their favorite websites as bookmarks. The app allows users to input the URL and a name for the bookmark, and it displays the bookmarks in a responsive and user-friendly layout.