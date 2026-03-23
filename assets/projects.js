document.querySelectorAll('a[href="#"]').forEach(function (a) {
  a.addEventListener('click', function (e) {
    e.preventDefault();
  });
});
