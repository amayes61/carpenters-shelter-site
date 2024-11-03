function redirectToGoogle() {
    const query = document.getElementById('searchQuery').value;
    if (query.trim() !== "") {
        const googleUrl = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
        window.location.href = googleUrl; // Redirect directly to Google
    } else {
        alert("Please enter a search query.");
    }
    return false; // Prevent default form submission
}


function loadSearchResults() {
    const googleSearchUrl = localStorage.getItem('googleSearchUrl');
    if (googleSearchUrl) {
        document.getElementById('resultsFrame').src = googleSearchUrl;
    } else {
        document.getElementById('resultsFrame').src = 'about:blank';
        document.getElementById('message').innerText = 'No search query found.';
    }
}
