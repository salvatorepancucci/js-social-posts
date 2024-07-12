// Array di post di esempio
const posts = [
    { id: 1, content: "Primo post!", likes: 0 },
    { id: 2, content: "Secondo post!", likes: 0 },
    { id: 3, content: "Terzo post!", likes: 0 }
];

// Array per memorizzare gli id dei post ai quali abbiamo messo il like
let likedPosts = [];

// Funzione per stampare i post nel feed
function renderPosts() {
    const feed = document.getElementById('feed');
    feed.innerHTML = ""; // Pulisce il feed esistente

    posts.forEach(post => {
        const postElement = document.createElement('div');
        postElement.className = 'post';
        postElement.innerHTML = `
            <p>${post.content}</p>
            <button class="like-button" data-id="${post.id}">Mi Piace (${post.likes})</button>
        `;
        feed.appendChild(postElement);
    });
}

// Funzione per gestire il click sul pulsante "Mi Piace"
function handleLike(event) {
    const button = event.target;
    const postId = parseInt(button.getAttribute('data-id'));
    const post = posts.find(p => p.id === postId);

    if (!post) return;

    // Incrementa il contatore dei likes
    post.likes++;

    // Cambia colore del bottone se già messo il like
    if (likedPosts.includes(postId)) {
        button.classList.remove('liked');
        likedPosts = likedPosts.filter(id => id !== postId);
    } else {
        button.classList.add('liked');
        likedPosts.push(postId);
    }

    // Rende di nuovo visibile il post aggiornato
    renderPosts();
}

// Inizializza il feed
renderPosts();