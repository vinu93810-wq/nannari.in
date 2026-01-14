document.addEventListener('DOMContentLoaded', () => {
  const menuIcon = document.querySelector('.menu-icon');
  const desktopNav = document.querySelector('.desktop-nav');
  let isMenuOpen = false;

  if (menuIcon && desktopNav) {
    menuIcon.addEventListener('click', () => {
      isMenuOpen = !isMenuOpen;
      
      if (isMenuOpen) {
        desktopNav.classList.add('mobile-menu-active');
        menuIcon.classList.add('menu-active');
      } else {
        desktopNav.classList.remove('mobile-menu-active');
        menuIcon.classList.remove('menu-active');
      }
    });

    // Close menu when a link is clicked
    const navLinks = document.querySelectorAll('.desktop-nav a');
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        isMenuOpen = false;
        desktopNav.classList.remove('mobile-menu-active');
        menuIcon.classList.remove('menu-active');
      });
    });
  }

  updateCartCount();
});

function updateCartCount() {
  const cartCountElement = document.querySelector('.cart-count');
  if (cartCountElement) {
    const qty = localStorage.getItem("order_qty") || 0;
    cartCountElement.innerText = qty;
  }
}

function goToCheckout() {
  const qty = localStorage.getItem("order_qty");

  if (!qty || qty == 0) {
    alert("Your cart is empty 🛒");
    return;
  }

  window.location.href = "checkout.html";
}
