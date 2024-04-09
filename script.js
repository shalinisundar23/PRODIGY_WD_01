// Function to handle navigation clicks
function handleNavigationClick(event) {
    // Prevent default link behavior
    event.preventDefault();
  
    // Get the target of the clicked link
    const target = event.target;
  
    // Check if the target is a navigation item
    if (target.classList.contains('nav-item')) {
      // Get the href attribute of the clicked link
      const href = target.getAttribute('href');
  
      // Redirect to the corresponding page
      window.location.href = href;
    }
  }
  
  // Function to handle scroll event
  function handleScroll() {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  }
  
  // Add event listener to the navbar
  const navbar = document.getElementById('navbar');
  navbar.addEventListener('click', handleNavigationClick);
  
  // Add event listener to the window for scroll event
  window.addEventListener('scroll', handleScroll);
  