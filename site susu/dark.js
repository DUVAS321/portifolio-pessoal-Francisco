document.addEventListener('DOMContentLoaded', () => {

    const checkboxTema = document.getElementById('checkbox-tema');
    const corpoDaPagina = document.body;

    if (checkboxTema && corpoDaPagina) {
        
        checkboxTema.addEventListener('change', () => {
            if (checkboxTema.checked) {
                corpoDaPagina.classList.add('light-mode');
            } else {
                corpoDaPagina.classList.remove('light-mode');
            }
        });
    }

});