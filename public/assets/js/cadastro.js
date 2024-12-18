import { auth, db, storage } from './firebaseConfig.js';
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js";
import { getFirestore, doc, setDoc } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore.js";
import { getStorage, ref, uploadBytes, getDownloadURL } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-storage.js";

// Função de cadastro
async function registrarUsuario(event) {
    event.preventDefault();

    // Captura dos valores dos campos
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const github = document.getElementById("github").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;
    const profilePicture = document.getElementById("profilePicture").files[0];

    // Validações
    if (password.length < 6) {
        alert("A senha deve ter pelo menos 6 caracteres.");
        return;
    }

    if (password !== confirmPassword) {
        alert("As senhas não coincidem!");
        return;
    }

    if (!github.startsWith("https://github.com/")) {
        alert("O link do GitHub deve começar com 'https://github.com/'");
        return;
    }

    if (!profilePicture) {
        alert("Por favor, envie uma foto de perfil.");
        return;
    }

    try {
        // Cadastrar usuário no Firebase Auth
        const credenciais = await createUserWithEmailAndPassword(auth, email, password);
        const userId = credenciais.user.uid;

        // Upload da foto de perfil no Firebase Storage
        const storageRef = ref(storage, `usuarios/${userId}/arquivo.jpg`);
        await uploadBytes(storageRef, profilePicture);
        const photoURL = await getDownloadURL(storageRef);

        // Guardar dados adicionais no Firestore
        await setDoc(doc(db, 'usuarios', userId), {
            nome: name,
            email: email,
            telefone: phone,
            github: github,
            fotoPerfil: photoURL,
            dataCadastro: new Date().toISOString(),
        });

        alert("Usuário cadastrado com sucesso!");
        window.location.href = "login.html"; // Redirecionar para a página de login
    } catch (error) {
        if (error.code === 'auth/email-already-in-use') {
            alert("Esse e-mail já está em uso. Tente outro.");
        } else {
            console.error("Erro ao cadastrar usuário:", error);
            alert("Erro ao cadastrar usuário. Tente novamente.");
        }
    }
}

// Associar a função ao formulário
document.querySelector('#devForm').addEventListener('submit', registrarUsuario);
