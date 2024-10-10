const toggleTheme = () => {
    const currentTheme = document.body.dataset.theme;
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    document.body.dataset.theme = newTheme;
    localStorage.setItem('theme', newTheme);
};

const renderPosts = () => {
    const postsContainer = document.getElementById('posts-container');
    const posts = JSON.parse(localStorage.getItem('blogPosts')) || [];

    if (posts.length === 0) {
        postsContainer.innerHTML = '<p>No blog posts available.</p>';
        return;
    }

    postsContainer.innerHTML = posts.map(post => `
        <div class="post">
            <h2>${post.title}</h2>
            <p><strong>Author:</strong> ${post.username}</p>
            <p>${post.content}</p>
        </div>
    `).join('');
};

document.getElementById('toggle-theme').addEventListener('click', toggleTheme);

const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    document.body.dataset.theme = savedTheme;
}

document.addEventListener('DOMContentLoaded', renderPosts);