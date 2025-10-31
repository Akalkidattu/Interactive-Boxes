const offerBoxes = document.querySelectorAll('.offer-box');

offerBoxes.forEach(box => {
  box.addEventListener('click', () => {
    offerBoxes.forEach(b => b.classList.remove('active'));
    box.classList.add('active');
    box.querySelector('input[type="radio"]').checked = true;

  });
});
