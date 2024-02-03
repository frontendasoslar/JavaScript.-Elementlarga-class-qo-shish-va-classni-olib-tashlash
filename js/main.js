// const elSitelistlink = document.querySelector('.site-list-link');
// const changelogotextbutton = document.querySelector('.change-logo-text-button');

// changelogotextbutton.addEventListener ('click', function() {
//   elSitelistlink.textContent = ('Mening ismim Faxriddin')
// })




// Elemantga klass qo'shish uchun avval klass qo'shuvchi tugma yoki elementni klasini quyidagicha topib olamiz
const ellightbutton = document.querySelector('.dark-button')

// Undan so'ng hodisaga quloq soluvchi va funksiyani quyidagicha qo'shim boamiz
ellightbutton.addEventListener ('click', function() {
  // Va body ning klasiga dark-mode ya'ni tungi rejim klasini qo'shayapdi
  document.body.classList.add('dark-mode');
})

// Elemantga qo'shilgan klassni olib tashlash uchun avval klass qo'shuvchi tugma yoki elementni klasini quyidagicha topib olamiz
const eldarkbutton = document.querySelector('.light-button')

eldarkbutton.addEventListener ('click', function() {
  // Qo'shilgan klasni olib tashlash uchun add o'rniga remove dan foydalanamiz
  document.body.classList.remove('dark-mode');
})