 // Dark mode toggle functionality with enhanced animation
 const themeToggle = document.getElementById('themeToggle');
 const icon = themeToggle.querySelector('i');
 const themeText = themeToggle.querySelector('span');
 
 themeToggle.addEventListener('click', () => {
     const currentTheme = document.body.getAttribute('data-bs-theme');
     const newTheme = currentTheme === 'light' ? 'dark' : 'light';
     document.body.setAttribute('data-bs-theme', newTheme);
     
     // Animate icon change
     icon.style.transform = 'rotate(360deg)';
     setTimeout(() => {
         icon.className = newTheme === 'light' ? 'fas fa-moon' : 'fas fa-sun';
         icon.style.transform = 'rotate(0deg)';
     }, 150);

     // Update theme text
     themeText.setAttribute('data-i18n', newTheme === 'light' ? 'dark_mode' : 'light_mode');
     themeText.textContent = newTheme === 'light' ? 'Dark' : 'Light';
 });