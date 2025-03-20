// Funkcja do dodawania komentarza
function addComment() {
    const commentInput = document.getElementById("commentInput").value.trim();
    if (commentInput === "") return; // Jeśli pole jest puste, nie dodawaj komentarza

    // Pobierz istniejące komentarze z LocalStorage lub ustaw pustą tablicę
    let comments = JSON.parse(localStorage.getItem("comments")) || [];

    // Dodaj nowy komentarz do tablicy
    comments.push({
        text: commentInput,
        timestamp: new Date().toISOString() // Zapisać czas w formacie ISO
    });

    // Zapisz zaktualizowaną tablicę komentarzy do LocalStorage
    localStorage.setItem("comments", JSON.stringify(comments));

    // Wyczyść pole tekstowe
    document.getElementById("commentInput").value = "";

    // Odśwież listę komentarzy
    loadComments();
}

// Funkcja do ładowania komentarzy
function loadComments() {
    const commentList = document.getElementById("commentList");

    // Pobierz komentarze z LocalStorage
    const comments = JSON.parse(localStorage.getItem("comments")) || [];

    // Wyczyść obecną listę komentarzy
    commentList.innerHTML = "";

    // Wyświetl wszystkie komentarze
    comments.forEach((comment) => {
        const li = document.createElement("li");
        li.textContent = `${comment.text} (${new Date(comment.timestamp).toLocaleString()})`;
        commentList.appendChild(li);
    });
}

// Załaduj komentarze po załadowaniu strony
document.addEventListener("DOMContentLoaded", loadComments);
