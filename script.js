function addComment() {
    let comment = document.getElementById("commentBox").value;
    if (comment) {
        let comments = document.getElementById("comments");
        let newComment = document.createElement("p");
        newComment.textContent = comment;
        comments.appendChild(newComment);
        document.getElementById("commentBox").value = "";
    }
}
