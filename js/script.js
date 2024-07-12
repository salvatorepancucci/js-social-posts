// Array di post di esempio
const posts = [
    { id: 1, likes: 0, image: "https://picsum.photos/seed/pic1/300/300" },
    { id: 2, likes: 0, image: "https://picsum.photos/seed/pic2/300/300" },
    { id: 3, likes: 0, image: "https://picsum.photos/seed/pic3/300/300" }
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
            <img src="${post.image}" alt="Post image">
            <button class="like-button ${likedPosts.includes(post.id) ? 'liked' : ''}" data-id="${post.id}">Mi Piace (${post.likes})</button>
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

// Aggiungi l'event listener per il click sui pulsanti "Mi Piace"
document.getElementById('feed').addEventListener('click', event => {
    if (event.target.classList.contains('like-button')) {
        handleLike(event);
    }
});
