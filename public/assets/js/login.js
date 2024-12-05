import { auth, db } from './firebaseConfig.js';
import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js";
import { getDoc, doc } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore.js";

document.getElementById("loginForm").addEventListener("submit", async function (event) {
    event.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    try {
        // Tenta autenticar o usuário com Firebase Auth
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;

        // Consulta as coleções para verificar o tipo de usuário
        const adminDoc = await getDoc(doc(db, "admins", user.uid));
        const userDoc = await getDoc(doc(db, "usuarios", user.uid));

        if (adminDoc.exists()) {
            // Redirecionar para painel do administrador
            alert("Login como administrador bem-sucedido!");
            window.location.href = "painel-admins.html";
        } else if (userDoc.exists()) {
            // Redirecionar para painel do desenvolvedor
            alert("Login como desenvolvedor bem-sucedido!");
            window.location.href = "perfil-dev.html";
        } else {
            // Caso o UID não exista em nenhuma coleção
            alert("Usuário não registrado no sistema.");
            auth.signOut(); // Desconecta o usuário
        }
    } catch (error) {
        console.error("Erro no login:", error);
        switch (error.code) {
            case "auth/user-not-found":
                alert("Usuário não encontrado.");
                break;
            case "auth/wrong-password":
                alert("Senha incorreta.");
                break;
            default:
                alert("Erro ao fazer login. Tente novamente.");
        }
    }
});
