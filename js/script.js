// Array che contiene i dati dei post
const posts = [
    {
        id: 1,
        author: 'Phil Mangione',
        date: '4 mesi fa',
        content: 'Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.',
        image: 'https://picsum.photos/600/400?random=1', // URL dell'immagine da Lorem Picsum
        profilePic: 'https://picsum.photos/40/40?random=1', // URL dell'immagine profilo da Lorem Picsum
        likes: 80
    },
    {
        id: 2,
        author: 'Sofia Perlati',
        date: '2 mesi fa',
        content: 'Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.',
        image: 'https://picsum.photos/600/400?random=2', // URL dell'immagine da Lorem Picsum
        profilePic: 'https://picsum.photos/40/40?random=2', // URL dell'immagine profilo da Lorem Picsum
        likes: 60
    }
];

// Array per tenere traccia dei post ai quali abbiamo messo il like
let likedPosts = [];

// Funzione per renderizzare i post
function renderPosts() {
    const postsContainer = document.getElementById('posts-container');
    postsContainer.innerHTML = '';

    posts.forEach(post => {
        const postElement = document.createElement('div');
        postElement.classList.add('post');
        postElement.innerHTML = `
            <div class="post-header">
                <img src="${post.profilePic}" alt="Profile Picture" class="profile-pic">
                <div>
                    <h2>${post.author}</h2>
                    <p>${post.date}</p>
                </div>
            </div>
            <p>${post.content}</p>
            <img src="${post.image}" alt="Post Image">
            <div class="post-footer">
                <span class="like-btn" onclick="toggleLike(${post.id})"><i class="fas fa-thumbs-up"></i> Mi Piace</span>
                <span>Piace a <span id="like-count-${post.id}">${post.likes}</span> persone</span>
            </div>
        `;
        postsContainer.appendChild(postElement);
    });
}

// Funzione per gestire il click sul bottone "Mi Piace"
function toggleLike(postId) {
    const post = posts.find(p => p.id === postId);
    const likeCountElement = document.getElementById(`like-count-${postId}`);
    const likeBtnElement = document.querySelector(`.like-btn[onclick="toggleLike(${postId})"]`);

    if (likedPosts.includes(postId)) {
        post.likes--;
        likedPosts = likedPosts.filter(id => id !== postId);
        likeBtnElement.classList.remove('liked');
    } else {
        post.likes++;
        likedPosts.push(postId);
        likeBtnElement.classList.add('liked');
    }

    likeCountElement.innerText = post.likes;
}

// Render iniziale dei post
renderPosts();
