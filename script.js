document.addEventListener("DOMContentLoaded", function () {
    const postItems = document.querySelectorAll('.post-item');

    postItems.forEach(postItem => {
        const themes = postItem.querySelectorAll('.theme');

        let leftPosition = 0; // Position de départ pour le premier carré

        themes.forEach(theme => {
            theme.style.left = leftPosition + 'px';
            leftPosition += theme.offsetWidth + 6;
        });
    });

    const recentPostSection = document.querySelector('.recent-post');
    if (recentPostSection) {
        const recentPosts = document.createElement('ul');

        const postTitles = Array.from(document.querySelectorAll('.post-content h3'));
        const postLinks = Array.from(document.querySelectorAll('.post-item a'));

        const recentTitles = postTitles.slice(0, 5);
        const recentLinks = postLinks.slice(0, 5);

        recentTitles.forEach((title, index) => {
            const li = document.createElement('li');
            const link = document.createElement('a');
            link.textContent = title.textContent;
            link.href = recentLinks[index].href;
            li.appendChild(link);
            recentPosts.appendChild(li);
        });

        recentPostSection.appendChild(recentPosts);
    } else {
        console.log("L'élément .recent-post n'a pas été trouvé dans le DOM. La manipulation de cet élément sera ignorée.");
    }
});
