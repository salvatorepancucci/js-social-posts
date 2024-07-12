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

    });
}