function switchTheme(){
  document.body.classList.toggle('dark-theme');
  document.body.classList.toggle('light-theme');
  
  const isDark = document.body.classList.contains('dark-theme');
  document.getElementById('switch-theme-button')
    .setAttribute('aria-pressed', isDark);
}