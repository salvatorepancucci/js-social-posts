const posts = [
    {
        "id": 1,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/300?image=171",
        "author": {
            "name": "Phil Mangione",
            "image": "https://unsplash.it/300/300?image=15"
        },
        "likes": 80,
        "created": "2021-06-25"
    },
    {
        "id": 2,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=112",
        "author": {
            "name": "Sofia Perlari",
            "image": "https://unsplash.it/300/300?image=10"
        },
        "likes": 120,
        "created": "2021-09-03"
    },
    {
        "id": 3,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=234",
        "author": {
            "name": "Chiara Passaro",
            "image": "https://unsplash.it/300/300?image=20"
        },
        "likes": 78,
        "created": "2021-05-15"
    },
    {
        "id": 4,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=24",
        "author": {
            "name": "Luca Formicola",
            "image": null
        },
        "likes": 56,
        "created": "2021-04-03"
    },
    {
        "id": 5,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=534",
        "author": {
            "name": "Alessandro Sainato",
            "image": "https://unsplash.it/300/300?image=29"
        },
        "likes": 95,
        "created": "2021-03-05"
    }
];

// Array per memorizzare gli ID dei post ai quali è stato messo il like
const likedPosts = [];

document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('container');
    renderPosts(posts, container);

    container.addEventListener('click', function(event) {
        if (event.target.classList.contains('js-like-button') || event.target.closest('.js-like-button')) {
            const button = event.target.closest('.js-like-button');
            const postId = parseInt(button.getAttribute('data-postid'));
            toggleLike(postId, button);
        }
    });
});

function renderPosts(posts, container) {
    posts.forEach(post => {
        const postElement = createPostElement(post);
        container.appendChild(postElement);
    });
}

function createPostElement(post) {
    const postDiv = document.createElement('div');
    postDiv.classList.add('post');
    
    const postHeader = `
        <div class="post__header">
            <div class="post-meta">                    
                <div class="post-meta__icon">
                    ${post.author.image ? `<img class="profile-pic" src="${post.author.image}" alt="${post.author.name}">` : `<div class="profile-pic-default"><span>${getInitials(post.author.name)}</span></div>`}
                </div>
                <div class="post-meta__data">
                    <div class="post-meta__author">${post.author.name}</div>
                    <div class="post-meta__time">${timeAgo(post.created)}</div>
                </div>                    
            </div>
        </div>
        <div class="post__text">${post.content}</div>
        <div class="post__image">
            <img src="${post.media}" alt="">
        </div>
        <div class="post__footer">
            <div class="likes js-likes">
                <div class="likes__cta">
                    <a class="like-button js-like-button" href="#" data-postid="${post.id}">
                        <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                        <span class="like-button__label">Mi Piace</span>
                    </a>
                </div>
                <div class="likes__counter">
                    Piace a <b id="like-counter-${post.id}" class="js-likes-counter">${post.likes}</b> persone
                </div>
            </div> 
        </div>
    `;
    
    postDiv.innerHTML = postHeader;
    return postDiv;
}

function toggleLike(postId, button) {
    const likeCounter = document.getElementById(`like-counter-${postId}`);
    const post = posts.find(post => post.id === postId);
    
    if (button.classList.contains('like-button--liked')) {
        // Rimuovi like
        button.classList.remove('like-button--liked');
        post.likes--;
        likedPosts.splice(likedPosts.indexOf(postId), 1);
    } else {
        // Aggiungi like
        button.classList.add('like-button--liked');
        post.likes++;
        likedPosts.push(postId);
    }
    
    likeCounter.textContent = post.likes;
}

function getInitials(name) {
    return name.split(' ').map(word => word[0]).join('');
}

function timeAgo(dateString) {
    const date = new Date(dateString);
    const now = new Date();
    const diff = now - date;
    const diffInDays = diff / (1000 * 60 * 60 * 24);
    
    if (diffInDays < 1) return 'Oggi';
    if (diffInDays < 30) return `${Math.floor(diffInDays)} giorni fa`;
    if (diffInDays < 365) return `${Math.floor(diffInDays / 30)} mesi fa`;
    return `${Math.floor(diffInDays / 365)} anni fa`;
}
