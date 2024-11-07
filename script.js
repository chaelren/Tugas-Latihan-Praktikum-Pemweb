// Mendeklarasikan variabel untuk elemen form dan input yang akan divalidasi
const form = document.getElementById('registrationForm');
const nama = document.getElementById('nama');
const nim = document.getElementById('nim');
const programStudi = document.getElementById('programStudi');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirmPassword');

// Validasi Nama: memeriksa apakah panjang nama kurang dari 3 karakter
nama.addEventListener('keyup', () => {
    const namaError = document.getElementById('namaError');
    if(nama.value.trim().length < 3){
        namaError.textContent = "Nama harus lebih dari tiga karakter.";
    } else{
        namaError.textContent = "";
    }
});

// Validasi NIM: memeriksa apakah NIM terdiri dari 9 angka (0-8) menggunakan regex
nim.addEventListener('keyup', () => {
    const nimError = document.getElementById('nimError');
    const regex = /^[0-8]{9}$/;
    if(!regex.test(nim.value)){
        nimError.textContent = "NIM harus berupa angka dan memiliki panjang 9 karakter.";
    } else{
        nimError.textContent = "";
    }
});

// Validasi Username: memeriksa apakah username memenuhi syarat panjang dan format alfanumerik
username.addEventListener('keyup', () => {
    const usernameError = document.getElementById('usernameError');
    const usernameValid = document.getElementById('usernameValid');
    const regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    if(!regex.test(username.value)){
        usernameError.textContent = "Username harus berupa huruf dan angka, memiliki panjang 5-20 karakter";
        usernameValid.style.color = "red";
    } else{
        usernameError.textContent = "";
        usernameError.textContent = "Username Valid";
        usernameError.style.color = "green";
    }
});

// Validasi Email: memeriksa apakah email dalam format yang benar menggunakan regex
email.addEventListener('change', () => {
    const emailError = document.getElementById('emailError');
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!regex.test(email.value)){
        emailError.textContent = "Email harus berupa alamat email yang valid.";
    } else{
        emailError.textContent = "";
    }
});

// Validasi Password: memeriksa apakah password memiliki minimal 8 karakter, mengandung huruf dan angka
password.addEventListener('keyup', () => {
    const passwordError = document.getElementById('passwordError');
    const passwordStrength = document.getElementById('passwordStrength');
    const regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    if (!regex.test(password.value)) {
        passwordError.textContent = "Password minimal 8 karakter, termasuk huruf dan angka.";
        passwordStrength.textContent = "Kekuatan Password: Lemah";
        passwordStrength.style.color = "red";
    } else {
        passwordError.textContent = "";
        passwordStrength.textContent = "Kekuatan Password: Kuat";
        passwordStrength.style.color = "green";
    }
});

// Validasi Konfirmasi Password: memeriksa apakah password dan konfirmasi password sesuai
confirmPassword.addEventListener('input', () => {
    const confirmPasswordError = document.getElementById('confirmPasswordError');
    if(password.value !== confirmPassword.value){
        confirmPasswordError.textContent = "Konfirmasi password tidak sesuai dengan password";
    } else{
        confirmPasswordError.textContent = "";
    }
});

// Validasi akhir saat form disubmit
form.addEventListener('submit', (event) => {
    // Cek semua validasi
    let valid = true;

    // Validasi Nama
    if (nama.value.trim().length < 3) {
        valid = false;
        document.getElementById('namaError').textContent = "Nama harus lebih dari 3 karakter.";
    }

    // Validasi NIM
    const nimRegex = /^[0-8]{9}$/;
    if (!nimRegex.test(nim.value)) {
        valid = false;
        document.getElementById('nimError').textContent = "NIM harus berupa 9 digit angka.";
    }

    // Validasi Program Studi
    if (programStudi.value === "") {
        valid = false;
        document.getElementById('programStudiError').textContent = "Silakan pilih program studi.";
    }

    // Validasi Username
    const usernameRegex = /^[a-zA-Z0-9]{5,20}$/;
    if (!usernameRegex.test(username.value)) {
        valid = false;
        document.getElementById('usernameError').textContent = "Username 5-20 karakter, alfanumerik.";
    }

    // Validasi Email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.value)) {
        valid = false;
        document.getElementById('emailError').textContent = "Format email tidak valid.";
    }

    // Validasi Password
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    if (!passwordRegex.test(password.value)) {
        valid = false;
        document.getElementById('passwordError').textContent = "Password minimal 8 karakter, termasuk huruf dan angka.";
    }

    // Validasi Konfirmasi Password
    if (confirmPassword.value !== password.value) {
        valid = false;
        document.getElementById('confirmPasswordError').textContent = "Password tidak cocok.";
    }

    if (!valid) {
        event.preventDefault(); // Mencegah submit jika ada error
        alert("Harap periksa kembali input Anda.");
    }
});