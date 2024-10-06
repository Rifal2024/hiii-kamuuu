let clickCount = 0;

function showMessage() {
    clickCount++;

    if (clickCount <= 5) {
        moveButtonRandomly();
    } else {
        window.location.href = "index2.html"; // Ganti dengan URL halaman yang dituju
    }
}

function moveButtonRandomly() {
    const button = document.querySelector('.btn');
    const container = document.querySelector('.container');

    // Dapatkan ukuran kontainer dan tombol
    const containerRect = container.getBoundingClientRect();
    const buttonRect = button.getBoundingClientRect();

    // Hitung posisi baru yang acak
    const newLeft = Math.random() * (containerRect.width - buttonRect.width);
    const newTop = Math.random() * (containerRect.height - buttonRect.height);

    // Terapkan posisi baru ke tombol
    button.style.position = 'absolute';
    button.style.left = `${newLeft}px`;
    button.style.top = `${newTop}px`;
}
