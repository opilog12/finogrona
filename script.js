// Konfiguracja Firebase
const firebaseConfig = {
    apiKey: "AIzaSyD8l6kQZFZHO9YXALnTJ-N_kBu61ma-02E",
    authDomain: "finogrona-2acc5.firebaseapp.com",
    projectId: "finogrona-2acc5",
    storageBucket: "finogrona-2acc5.appspot.com",
    messagingSenderId: "341989551043",
    appId: "1:341989551043:web:4546bcc46ea7fc0d7ceb76",
};

// Inicjalizacja Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

// Funkcja dodawania komentarza do Firestore
function addComment() {
    let commentInput = document.getElementById("commentInput").value.trim();
    if (commentInput === "") return;

    db.collection("comments").add({
        text: commentInput,
        timestamp: firebase.firestore.FieldValue.serverTimestamp()
    }).then(() => {
        document.getElementById("commentInput").value = ""; // Czyszczenie pola tekstowego
        loadComments(); // Przeładowanie listy komentarzy
    }).catch(error => {
        console.error("Błąd podczas dodawania komentarza: ", error);
    });
}

// Funkcja pobierania komentarzy i wyświetlania ich na stronie
function loadComments() {
    let commentList = document.getElementById("commentList");
    commentList.innerHTML = "";

    db.collection("comments").orderBy("timestamp", "desc").onSnapshot(snapshot => {
        commentList.innerHTML = ""; // Czyścimy listę przed załadowaniem nowych danych
        snapshot.forEach(doc => {
            let li = document.createElement("li");
            li.textContent = doc.data().text;
            commentList.appendChild(li);
        });
    });
}

// Nasłuchujemy na załadowanie strony i wczytujemy komentarze
document.addEventListener("DOMContentLoaded", loadComments);
