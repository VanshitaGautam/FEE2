document.getElementById('update-button').onclick = function() {

    const name = document.getElementById('name-input').value;
    const bio = document.getElementById('bio-input').value;
    const picUrl = document.getElementById('pic-input').value;
    if (name) {
        document.getElementById('profile-name').innerText = `Name: ${name}`;
    }
    if (bio) {
        document.getElementById('profile-bio').innerText = `Bio: ${bio}`;
    }
    if (picUrl) {
        document.getElementById('profile-pic').src = picUrl;
    }
};