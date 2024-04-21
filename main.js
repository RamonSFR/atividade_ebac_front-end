document.addEventListener("DOMContentLoaded", () => {
    document.querySelector("#search").addEventListener('click', () => {
        const user = document.querySelector("#user").value;
        
        fetch(`https://api.github.com/users/${user}`).then((resposta) => {
            if (!resposta.ok) {
                throw new Error("Usuário não encontrado");
            }
            return resposta.json();
        })
        .then((json) => {
            const login = `@${json.login}`;
            const name = json.name;
            const avatar = json.avatar_url;
            const repos = json.public_repos;
            const followers = json.followers;
            const following = json.following;
            console.log(json);


            document.querySelector(".profile-name").innerHTML = name;
            document.querySelector(".profile-username").innerHTML = login;
            document.querySelector('#repositorios').innerHTML = repos;
            document.querySelector('#seguidores').innerHTML = followers;
            document.querySelector('#seguindo').innerHTML = following;
            document.querySelector(".profile-avatar").src = avatar;
        })
        .catch(function(erro) {
            alert("Digite um perfil válido!");
            document.querySelector(".profile-name").innerHTML = "Not Found";
            document.querySelector(".profile-username").innerHTML = "";
            document.querySelector('#repositorios').innerHTML = "";
            document.querySelector('#seguidores').innerHTML = "";
            document.querySelector('#seguindo').innerHTML = "";
            document.querySelector(".profile-avatar").src = "https://via.placeholder.com/180x180";
        })
    })
});