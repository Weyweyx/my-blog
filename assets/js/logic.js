function displayPosts() {
    const postContainer = document.getElementById('post-container');
    const posts = JSON.parse(localStorage.getItem('blogPosts')) || [];

    postContainer.innerHTML = '';

    posts.forEach(post => {
        const postElement = document.createElement('div');
        postElement.className = 'post'; 
        
        const postTitle = document.createElement('h3');
        postTitle.innerText = post.title;

        const postContent = document.createElement('p');
        postContent.innerText = post.content;

        const postAuthor = document.createElement('p');
        postAuthor.innerText = `Posted by: ${post.username}`;
        postAuthor.className = 'author'; 
       
        postElement.appendChild(postTitle);
        postElement.appendChild(postContent);
        postElement.appendChild(postAuthor);

        postContainer.appendChild(postElement);
    });
}

function toggleTheme() {
    const body = document.body;
    body.classList.toggle('dark-mode'); 

    const theme = body.classList.contains('dark-mode') ? 'dark' : 'light';
    localStorage.setItem('theme', theme);
}

function loadTheme() {
    const theme = localStorage.getItem('theme') || 'light';
    if (theme === 'dark') {
        document.body.classList.add('dark-mode');
    }
}

document.getElementById('theme-toggle').addEventListener('click', toggleTheme);

window.onload = function () {
    loadTheme();
    displayPosts();
};