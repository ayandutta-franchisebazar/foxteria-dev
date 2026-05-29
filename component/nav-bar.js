document.addEventListener("DOMContentLoaded", function () {
  // Define the reusable navbar template string
  const navbarHTML = `
  <nav id="mainNav" class="navbar navbar-expand-xl">
    <div class="container-fluid px-4">
      <!-- LOGO -->
      <a class="navbar-brand" href="#">
        <img src="media/logo.png" alt="Foxteria Logo" class="brand-logo">
      </a>
      
      <!-- MOBILE TOGGLE -->
      <button class="navbar-toggler ms-auto" type="button" data-bs-toggle="collapse" data-bs-target="#navbarMain" aria-controls="navbarMain" aria-expanded="false">
        <span class="navbar-toggler-icon"></span>
      </button>
      
      <div class="collapse navbar-collapse" id="navbarMain">
        <ul class="navbar-nav ms-auto align-items-xl-center">
          
          <!-- SERVICES DROPDOWN (L1) -->
          <li class="nav-item fx-dropdown" id="servicesMenu">
            <a class="nav-link-custom fx-toggle" href="#">
              Services <i class="bi bi-chevron-down fx-chevron"></i>
            </a>
            
            <!-- L2 DROPDOWN PANEL -->
            <ul class="fx-dropdown-menu">
              <!-- L2 Item 1 -->
              <li class="fx-has-sub">
                <a class="fx-l2-link" href="#">
                  <span class="fx-l2-icon"><i class="bi bi-megaphone-fill"></i></span>
                  <span class="fx-l2-text">Franchise Marketing Services</span>
                  <i class="bi bi-chevron-right fx-arrow"></i>
                </a>
                <ul class="fx-submenu">
                  <li><a href="#">Social Media Management</a></li>
                  <li><a href="#">Campaign Setup &amp; Optimization</a></li>
                  <li><a href="#">Meta &amp; Google Ads for Franchise Leads</a></li>
                  <li><a href="#">Content Strategy &amp; Community Engagement</a></li>
                </ul>
              </li>
              
              <!-- L2 Item 2 -->
              <li class="fx-has-sub">
                <a class="fx-l2-link" href="#">
                  <span class="fx-l2-icon"><i class="bi bi-building-fill"></i></span>
                  <span class="fx-l2-text">Franchise Development Services</span>
                  <i class="bi bi-chevron-right fx-arrow"></i>
                </a>
                <ul class="fx-submenu">
                  <li><a href="#">Dealer, Distributor &amp; Franchise Appointment</a></li>
                  <li><a href="#">Pan-India Franchise Opportunity</a></li>
                  <li><a href="#">Strategy &amp; Workshops</a></li>
                  <li><a href="#">Franchise Model Structuring, Training &amp; SOPs</a></li>
                  <li><a href="#">Franchise Agreement Drafting &amp; Legal Documentation</a></li>
                </ul>
              </li>
              
              <!-- L2 Item 3 -->
              <li class="fx-has-sub">
                <a class="fx-l2-link" href="#">
                  <span class="fx-l2-icon"><i class="bi bi-people-fill"></i></span>
                  <span class="fx-l2-text">Franchise Manager Services</span>
                  <i class="bi bi-chevron-right fx-arrow"></i>
                </a>
                <ul class="fx-submenu">
                  <li><a href="#">Outsourced Franchise Managers</a></li>
                  <li><a href="#">Multilingual Managers for Effective Communication</a></li>
                  <li><a href="#">Lead Qualification &amp; Management</a></li>
                  <li><a href="#">Ongoing Franchisee Coordination &amp; Onboarding</a></li>
                </ul>
              </li>
              
              <!-- L2 Item 4 -->
              <li class="fx-has-sub">
                <a class="fx-l2-link" href="#">
                  <span class="fx-l2-icon"><i class="bi bi-file-earmark-slides-fill"></i></span>
                  <span class="fx-l2-text">Pitch Decks &amp; Marketing Kits</span>
                  <i class="bi bi-chevron-right fx-arrow"></i>
                </a>
                <ul class="fx-submenu">
                  <li><a href="#">Custom Franchise Pitch Decks &amp; Investor Presentations</a></li>
                  <li><a href="#">Financial Modeling &amp; ROI Projections</a></li>
                  <li><a href="#">Brand Collaterals: Infographics, Marketing Kits</a></li>
                  <li><a href="#">Interactive Presentations for Maximum Impact</a></li>
                </ul>
              </li>
              
              <!-- L2 Item 5 -->
              <li class="fx-has-sub">
                <a class="fx-l2-link" href="#">
                  <span class="fx-l2-icon"><i class="bi bi-shop-window"></i></span>
                  <span class="fx-l2-text">Franchise Exhibition Services</span>
                  <i class="bi bi-chevron-right fx-arrow"></i>
                </a>
                <ul class="fx-submenu">
                  <li><a href="#">Standee, Leaflet &amp; Brochure Design</a></li>
                  <li><a href="#">Booth Design &amp; Setup for Franchise Expos</a></li>
                  <li><a href="#">On-Ground Franchise Managers &amp; Team Training</a></li>
                  <li><a href="#">5X Franchise Sign-Ups &amp; Conversion Boost at Events</a></li>
                </ul>
              </li>
            </ul>
          </li>
          
          <!-- FLAT NAV ITEMS -->
          <li class="nav-item"><a class="nav-link-custom" href="#">Who We Are</a></li>
          <li class="nav-item"><a class="nav-link-custom" href="#">Our History</a></li>
          <li class="nav-item"><a class="nav-link-custom" href="#">Contact Us</a></li>
          <li class="nav-item"><a class="nav-link-custom" href="#">Careers</a></li>
          <li class="nav-item"><a class="nav-link-custom" href="#">What's New</a></li>
          
          <!-- CTA -->
          <li class="nav-item ms-xl-3 mt-3 mt-xl-0 mb-3 mb-xl-0">
            <a class="btn-quote" href="#">Request A Quote</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  `;

  // Inject into page
  const container = document.getElementById("navbar-container");
  if (container) {
    container.innerHTML = navbarHTML;
  }

  // Initialize Navbar Functionality
  function initNavbar() {
    const nav = document.getElementById('mainNav');
    
    // Navbar Scroll Effect
    window.addEventListener('scroll', function () {
      if(nav) nav.classList.toggle('scrolled', window.scrollY > 60);
    }, { passive: true });

    // Desktop Edge Detection — flip submenu left if it overflows
    function checkEdge() {
      if (window.innerWidth < 1200) return;
      document.querySelectorAll('.fx-has-sub').forEach(function (li) {
        let sub = li.querySelector('.fx-submenu');
        if (!sub) return;
        li.classList.remove('flip-left');
        let rect = li.getBoundingClientRect();
        if (rect.right > window.innerWidth * 0.65) {
          li.classList.add('flip-left');
        }
      });
    }
    checkEdge();
    window.addEventListener('resize', checkEdge);

    // Mobile specific toggles
    const servicesMenu = document.getElementById('servicesMenu');
    if(servicesMenu) {
        const servicesToggle = servicesMenu.querySelector('.fx-toggle');
        
        // L1 Toggle (Services label)
        servicesToggle.addEventListener('click', function (e) {
        if (window.innerWidth >= 1200) return;
        e.preventDefault();
        servicesMenu.classList.toggle('open');
        });

        // L2 toggles (each sub-topic)
        document.querySelectorAll('.fx-has-sub').forEach(function (li) {
        let l2link = li.querySelector('.fx-l2-link');
        l2link.addEventListener('click', function (e) {
            if (window.innerWidth >= 1200) return;
            e.preventDefault();
            li.parentElement.querySelectorAll('.fx-has-sub.sub-open').forEach(function (sib) {
            if (sib !== li) sib.classList.remove('sub-open');
            });
            li.classList.toggle('sub-open');
        });
        });

        // Close dropdown when clicking outside
        document.addEventListener('click', function (e) {
        if (window.innerWidth >= 1200) return;
        if (!servicesMenu.contains(e.target)) {
            servicesMenu.classList.remove('open');
            document.querySelectorAll('.fx-has-sub.sub-open').forEach(function (li) {
            li.classList.remove('sub-open');
            });
        }
        });
    }

    // Close mobile nav on link click inside L3
    document.querySelectorAll('.fx-submenu a').forEach(function (a) {
      a.addEventListener('click', function () {
        if (window.innerWidth >= 1200) return;
        let bsCollapse = document.getElementById('navbarMain');
        if (bsCollapse && bsCollapse.classList.contains('show')) {
          let toggler = document.querySelector('.navbar-toggler');
          if (toggler) toggler.click();
        }
      });
    });
  }

  // Run init function
  initNavbar();
});