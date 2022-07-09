const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const smodals = document.querySelectorAll('.show-modal');
const cmodal = document.querySelector('.close-modal');

const showModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};
const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

smodals.forEach(function (smodals) {
  smodals.addEventListener('click', () => {
    showModal();
  });
});
cmodal.addEventListener('click', () => {
  closeModal();
});
overlay.addEventListener('click', () => {
  closeModal();
});

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
