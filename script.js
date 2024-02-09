const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const h1Element = document.querySelector('h1');


const confirmYesBtn = document.getElementById('confirmYesBtn');
const confirmNoBtn = document.getElementById('confirmNoBtn');
const okBtn = document.getElementById('okBtn');

noBtn.addEventListener('click', () => {
    showModal('custom-confirm');
    h1Element.style.display = 'none'; // Hide <h1>
    
});
yesBtn.addEventListener('click', () => {
    showModal('custom-alert');
    h1Element.style.display = 'none'; // Hide <h1>
    
});

confirmYesBtn.addEventListener('click', () => {

    sadImage.style.display = 'block';
    hideModal('custom-confirm');
    h1Element.style.display = 'none';
    yesBtn.style.display = 'none';
    noBtn.style.display = 'none';
});

confirmNoBtn.addEventListener('click', () => {
    // Your logic if user cancels
    hideModal('custom-confirm');
});

okBtn.addEventListener('click', () => {
    // Your logic after user acknowledges
    hideModal('custom-alert');
    valentineImage.style.display = 'block';
    
    yesBtn.style.display = 'none'; // Hide "Yes" button
    noBtn.style.display = 'none'; // Hide "No" button
    
    // Hide h1 and buttons
    h1Element.style.display = 'none';
    yesBtn.style.display = 'none';
    noBtn.style.display = 'none';
});

function hideModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.style.display = 'none';
}
function showModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.style.display = 'block';
    
    if (modalId === 'custom-confirm') {
        const confirmMessage = document.querySelector('#custom-confirm p');
        confirmMessage.style.display = 'block'; // Show <p> in the confirmation dialog
    } else {
        pElement.style.display = 'none'; // Hide <p> in the main section for other modals
    }
}