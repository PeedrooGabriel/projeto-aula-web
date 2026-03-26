const introSection = document.getElementById('intro-section');
const catalogSection = document.getElementById('catalog-section');
const startBtn = document.getElementById('start-btn');

startBtn.addEventListener('click', () => {
    
    introSection.classList.add('fade-out-up');
    
    
    setTimeout(() => {
        introSection.classList.add('hidden-section');
        catalogSection.classList.remove('hidden-section');
        
        catalogSection.classList.add('fade-in-up');
    }, 600);
});

const cards = document.querySelectorAll('.card');
const modalOverlay = document.getElementById('modal-overlay');
const btnClose = document.getElementById('close-modal');

cards.forEach(card => {
    card.addEventListener('click', () => {
        const data = card.dataset;
        const imagemSrc = card.querySelector('img').src;

        document.getElementById('modal-title').innerText = `${data.marca} — ${data.modelo}`;
        document.getElementById('modal-image').src = imagemSrc;
        
        document.getElementById('modal-details').innerHTML = `
            <div class="detail-item">
                <h4>Potência</h4>
                <p>${data.potencia}</p>
            </div>
            <div class="detail-item">
                <h4>Motor</h4>
                <p>${data.motor}</p>
            </div>
            <div class="detail-item">
                <h4>Transmissão</h4>
                <p>${data.transmissao}</p>
            </div>
            <div class="detail-item">
                <h4>Peso</h4>
                <p>${data.peso}</p>
            </div>
            <div class="detail-item full-width">
                <h4>Uso</h4>
                <p>${data.uso}</p>
            </div>
        `;

        modalOverlay.classList.remove('hidden');
    });
});

btnClose.addEventListener('click', () => {
    modalOverlay.classList.add('hidden');
});

modalOverlay.addEventListener('click', (e) => {
    if(e.target === modalOverlay) {
        modalOverlay.classList.add('hidden');
    }
});