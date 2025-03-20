document.addEventListener("DOMContentLoaded", loadComments);

function addComment() {
    let commentInput = document.getElementById("comment-input");
    let commentText = commentInput.value.trim();

    if (commentText !== "") {
        let comments = JSON.parse(localStorage.getItem("comments")) || [];
        comments.push(commentText);
        localStorage.setItem("comments", JSON.stringify(comments));

        commentInput.value = ""; // Wyczyść pole tekstowe
        loadComments(); // Przeładuj listę komentarzy
    }
}

function loadComments() {
    let commentList = document.getElementById("comment-list");
    commentList.innerHTML = ""; // Wyczyść aktualne komentarze

    let comments = JSON.parse(localStorage.getItem("comments")) || [];

    comments.forEach(comment => {
        let li = document.createElement("li");
        li.textContent = comment;
        commentList.appendChild(li);
    });
}
