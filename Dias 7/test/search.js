document.addEventListener('DOMContentLoaded', function () {
    const searchInput = document.getElementById('searchInput');
    const searchResults = document.getElementById('searchResults');

    const data = [
        'JavaScript',
        'HTML',
        'CSS',
        'Node.js',
        'React',
        'Angular',
        'Vue.js',
        'Express.js',
        'RoR'
        // Agrega más datos según sea necesario
    ];

    function search(query) {
        searchResults.innerHTML = '';
        const regex = new RegExp(query, 'i');
        const results = data.filter(item => regex.test(item));
        results.forEach(result => {
            const li = document.createElement('li');
            li.textContent = result;
            searchResults.appendChild(li);
        });
    }

    searchInput.addEventListener('input', function () {
        const query = this.value.trim();
        if (query.length > 0) {
            search(query);
        } else {
            searchResults.innerHTML = '';
        }
    });
});