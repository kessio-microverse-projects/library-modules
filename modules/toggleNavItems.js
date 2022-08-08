const toggleNavItems = () => {
  const menuItems = document.querySelectorAll('.menu-items');
  const container = document.querySelectorAll('.container');
  menuItems.forEach((navLink) => {
    navLink.addEventListener('click', (e) => {
      const linkID = e.target.className;
      container.forEach((section) => {
        section.classList.remove('active');
        if (section.id === linkID) {
          section.classList.add('active');
        }
      });
    });
  });
};

export default toggleNavItems;