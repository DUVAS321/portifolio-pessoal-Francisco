// Espera o HTML carregar completamente
document.addEventListener('DOMContentLoaded', () => {

    // --- LÓGICA DO MODAL (CURRÍCULO) ---
    const botaoAbrirModal = document.getElementById('botao-curriculo');
    const botaoFecharModal = document.getElementById('fechar-modal-btn');
    const overlayDoModal = document.getElementById('modal-curriculo');

    if (botaoAbrirModal && botaoFecharModal && overlayDoModal) {
        
        // Função para abrir
        const abrirModal = () => {
            overlayDoModal.classList.add('active');
        }

        // Função para fechar
        const fecharModal = () => {
            overlayDoModal.classList.remove('active');
        }

        // Eventos de clique
        botaoAbrirModal.addEventListener('click', abrirModal);
        botaoFecharModal.addEventListener('click', fecharModal);

        // Fechar ao clicar fora (no overlay)
        overlayDoModal.addEventListener('click', (event) => {
            if (event.target === overlayDoModal) {
                fecharModal();
            }
        });
    }

    
    const laptopAnimado = document.getElementById('laptop-animado');

    if (laptopAnimado) {
        laptopAnimado.addEventListener('click', () => {
            
            laptopAnimado.classList.toggle('open');
        });
    }

    const circuloMagico = document.getElementById('circulo-magico');
    const todosIcones = document.querySelectorAll('.icone-skill');

    if (circuloMagico && todosIcones.length > 0) {
        todosIcones.forEach(icon => {
            icon.addEventListener('mouseenter', () => {
                circuloMagico.classList.add('paused');
                icon.classList.add('active');
            });

            icon.addEventListener('mouseleave', () => {
                circuloMagico.classList.remove('paused');
                icon.classList.remove('active');
            });
        });
    }

    
    const botaoHamburger = document.getElementById('botao-hamburger');
    const menuCelular = document.getElementById('menu-celular');
    const linksDoMenu = document.querySelectorAll('#menu-celular a');

    if (botaoHamburger && menuCelular) {
        
        
        const toggleMenu = () => {
            botaoHamburger.classList.toggle('active');
            menuCelular.classList.toggle('active');
            
            
            const estaAberto = menuCelular.classList.contains('active');
            botaoHamburger.setAttribute('aria-expanded', estaAberto);
        };


        botaoHamburger.addEventListener('click', toggleMenu);

        linksDoMenu.forEach(link => {
            link.addEventListener('click', () => {
                if (menuCelular.classList.contains('active')) {
                    toggleMenu(); 
                }
            });
        });
    }

});