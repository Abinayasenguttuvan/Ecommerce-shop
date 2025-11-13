
const dropArea = document.getElementById("drop-area");
const fileElem = document.getElementById("fileElem");
const progressBar = document.querySelector(".progress-bar");
const filePreview = document.getElementById("file-preview");

// Highlight drag
["dragenter", "dragover"].forEach(event => {
  dropArea.addEventListener(event, e => {
    e.preventDefault();
    dropArea.classList.add("active");
  });
});

// Remove highlight
["dragleave", "drop"].forEach(event => {
  dropArea.addEventListener(event, e => {
    e.preventDefault();
    dropArea.classList.remove("active");
  });
});

dropArea.addEventListener("click", () => fileElem.click());

// Handle drop files
dropArea.addEventListener("drop", (e) => {
  let files = e.dataTransfer.files;
  handleFiles(files);
});

fileElem.addEventListener("change", (e) => {
  handleFiles(e.target.files);
});

function handleFiles(files) {
  [...files].forEach(uploadFile);
}

function uploadFile(file) {
  let reader = new FileReader();

  reader.onloadstart = () => {
    gsap.to(".progress-bar", { width: "0%", duration: 0 });
  };

  reader.onprogress = (event) => {
    let progress = Math.round((event.loaded / event.total) * 100);
    gsap.to(".progress-bar", { width: `${progress}%`, duration: 0.35 });
  };

  reader.onloadend = () => {
    showPreview(file);
  };

  reader.readAsDataURL(file);
}

function showPreview(file) {
  const div = document.createElement("div");
  div.className = "preview-item";

  if (file.type.startsWith("image/")) {
    const img = document.createElement("img");
    img.src = URL.createObjectURL(file);
    img.style.width = "120px";
    img.style.borderRadius = "10px";
    img.style.margin = "10px";
    div.appendChild(img);
  }

  div.innerHTML += `<p>${file.name}</p>`;
  filePreview.appendChild(div);

  gsap.from(div, {
    y: 40,
    opacity: 0,
    duration: 0.6,
    ease: "bounce"
  });
}



const uploadArea = document.getElementById("upload-area");
const fileInput = document.getElementById("file-input");
const previewGrid = document.getElementById("preview-grid");
const progressBar = document.querySelector(".progress-bar");

uploadArea.addEventListener("click", () => fileInput.click());

uploadArea.addEventListener("dragover", (e) => {
  e.preventDefault();
  uploadArea.classList.add("active");
});

uploadArea.addEventListener("dragleave", () => {
  uploadArea.classList.remove("active");
});

uploadArea.addEventListener("drop", (e) => {
  e.preventDefault();
  let files = e.dataTransfer.files;
  handleFiles(files);
});

fileInput.addEventListener("change", () => {
  handleFiles(fileInput.files);
});

function handleFiles(files) {
  [...files].forEach(showPreview);
}

function showPreview(file) {
  let reader = new FileReader();

  reader.onloadstart = () => {
    progressBar.style.width = "0%";
  };

  reader.onprogress = (event) => {
    let percent = Math.round((event.loaded / event.total) * 100);
    progressBar.style.width = percent + "%";
  };

  reader.onloadend = () => {
    createPreviewItem(reader.result, file.name);
  };

  reader.readAsDataURL(file);
}

function createPreviewItem(src, name) {
  const div = document.createElement("div");
  div.classList.add("preview-item");

  div.innerHTML = `
    <img src="${src}" style="width:100%;height:100%;object-fit:cover;">
    <span class="remove-btn">✖</span>
  `;

  previewGrid.appendChild(div);

  div.querySelector(".remove-btn").addEventListener("click", () => {
    div.style.animation = "fadeOut 0.5s forwards";
    setTimeout(() => div.remove(), 500);
  });
}






