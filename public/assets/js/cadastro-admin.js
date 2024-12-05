import { auth, db } from './firebaseConfig.js';
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js";
import { getFirestore, doc, setDoc } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore.js";

// Função de cadastro de administrador
async function registrarAdmin(event) {
    event.preventDefault();

    // Captura dos valores dos campos
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    // Validações
    if (password.length < 6) {
        alert("A senha deve ter pelo menos 6 caracteres.");
        return;
    }

    if (password !== confirmPassword) {
        alert("As senhas não coincidem!");
        return;
    }

    try {
        // Cadastrar usuário no Firebase Auth
        const credenciais = await createUserWithEmailAndPassword(auth, email, password);
        const userId = credenciais.user.uid;

        // Guardar dados adicionais no Firestore
        await setDoc(doc(db, 'admins', userId), {
            nome: name,
            email: email,
            dataCadastro: new Date().toISOString(),
        });

        alert("Administrador cadastrado com sucesso!");
        window.location.href = "login.html"; // Redirecionar para a página de login
    } catch (error) {
        if (error.code === 'auth/email-already-in-use') {
            alert("Esse e-mail já está em uso. Tente outro.");
        } else {
            console.error("Erro ao cadastrar administrador:", error);
            alert("Erro ao cadastrar administrador. Tente novamente.");
        }
    }
}

// Associar a função ao formulário
document.querySelector('#adminForm').addEventListener('submit', registrarAdmin);
