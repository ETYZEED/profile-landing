// placeholder for interactivity
function simulateBuy(plan){
  alert('Pilihan: ' + plan + '. Ini contoh simulasi checkout.');
}

document.getElementById('contactForm')?.addEventListener('submit', function(e){
  e.preventDefault();
  document.getElementById('contactResult').textContent = 'Terima kasih — pesan Anda telah dikirim (simulasi).';
  document.getElementById('contactResult').style.display = 'block';
});

document.getElementById('trialBtn')?.addEventListener('click', function(){
  document.getElementById('trialModal').setAttribute('aria-hidden','false');
});

document.getElementById('closeTrial')?.addEventListener('click', function(){
  document.getElementById('trialModal').setAttribute('aria-hidden','true');
});
