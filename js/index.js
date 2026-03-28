document.addEventListener('DOMContentLoaded', () => {

    const profileButtons = document.querySelectorAll('.profile button');

    profileButtons.forEach((button) => {
        button.addEventListener('click', () => {
            const profileElement = button.closest('.profile');
            if (!profileElement) return;

            const img = profileElement.querySelector('img');
            const nameEl = profileElement.querySelector('.perfil-nome');
            const nome = nameEl ? nameEl.textContent.trim() : '';
            const imagem = img ? new URL(img.getAttribute('src'), window.location.href).href : '';

            if (nome && imagem) {
                const perfil = { nome, imagem };
                localStorage.setItem('perfilAtivo', JSON.stringify(perfil));
            }

            // Redireciona para o catálogo
            window.location.href = 'catalogo/catálogo.html';
        });
    });
});