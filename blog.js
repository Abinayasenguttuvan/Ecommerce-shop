// Simple comment system
const commentForm = document.getElementById("commentForm");
const commentList = document.getElementById("commentList");

commentForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.getElementById("name").value.trim();
  const comment = document.getElementById("comment").value.trim();

  if (name && comment) {
    const div = document.createElement("div");
    div.classList.add("comment");
    div.innerHTML = `<strong>${name}</strong><p>${comment}</p>`;
    commentList.prepend(div);

    commentForm.reset();
  }
});

