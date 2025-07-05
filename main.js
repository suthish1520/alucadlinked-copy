
    function toggleMenu() {
      const navMenu = document.getElementById('navMenu');
      const icon = document.querySelector('.menu-icon');

      navMenu.classList.toggle('show');

      // Toggle icon (optional)
      icon.textContent = navMenu.classList.contains('show') ? '✖' : '☰';
    }
 
    let lastScrollTop = 0;
    const headerWrapper = document.getElementById('headerWrapper');

    window.addEventListener('scroll', function () {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

      if (scrollTop > lastScrollTop) {
        // Scrolling down
        headerWrapper.classList.add('hide-header');
      } else {
        // Scrolling up
        headerWrapper.classList.remove('hide-header');
      }
      lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
    });
 