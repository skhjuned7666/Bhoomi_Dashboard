document.addEventListener("DOMContentLoaded", function () {
  // Dummy data – later backend/API se aayega
  let properties = [
    {
      id: 1,
      title: "2 BHK Flats – Kharadi Heights",
      city: "Pune",
      locality: "Kharadi",
      project: "Kharadi Heights",
      type: "Apartment",
      bhk: 2,
      area: 950,
      price: "₹ 45L – 75L",
      status: "Active",
      tag: "High Demand",
      featured: true,
    },
    {
      id: 2,
      title: "Premium 2 BHK – Bavdhan",
      city: "Pune",
      locality: "Bavdhan",
      project: "Zen Estate",
      type: "Apartment",
      bhk: 2,
      area: 895,
      price: "₹ 1.05 Cr",
      status: "Active",
      tag: "Featured",
      featured: true,
    },
    {
      id: 3,
      title: "NA Plots – Hinjewadi Meadows",
      city: "Pune",
      locality: "Hinjewadi",
      project: "Hinjewadi Meadows",
      type: "Plot/Land",
      bhk: null,
      area: 1200,
      price: "₹ 20L – 40L",
      status: "Active",
      tag: "Plots & Land",
      featured: false,
    },
    {
      id: 4,
      title: "Luxury Villas – Baner Hills",
      city: "Pune",
      locality: "Baner",
      project: "Baner Hills Estate",
      type: "Villa",
      bhk: 4,
      area: 2400,
      price: "₹ 2.8 Cr",
      status: "Active",
      tag: "Luxury",
      featured: true,
    },
    {
      id: 5,
      title: "Commercial Offices – Kharadi IT Park",
      city: "Pune",
      locality: "Kharadi",
      project: "Kharadi IT Park",
      type: "Commercial",
      bhk: null,
      area: 1500,
      price: "₹ 1.9 Cr",
      status: "Active",
      tag: "Commercial",
      featured: false,
    },
    {
      id: 6,
      title: "1 BHK Starter Homes – Wagholi",
      city: "Pune",
      locality: "Wagholi",
      project: "Eco Greens",
      type: "Apartment",
      bhk: 1,
      area: 550,
      price: "₹ 32L – 38L",
      status: "Active",
      tag: "Budget",
      featured: false,
    },
    {
      id: 7,
      title: "2 & 3 BHK – Ravet Riverside",
      city: "Pune",
      locality: "Ravet",
      project: "Big Star City",
      type: "Apartment",
      bhk: 3,
      area: 1200,
      price: "₹ 45L – 62L",
      status: "Active",
      tag: "High Demand",
      featured: true,
    },
    {
      id: 8,
      title: "Sea View Apartments – Navi Mumbai",
      city: "Mumbai",
      locality: "Navi Mumbai",
      project: "Ocean Crest",
      type: "Apartment",
      bhk: 2,
      area: 980,
      price: "₹ 1.45 Cr",
      status: "Active",
      tag: "Premium",
      featured: true,
    },
    {
      id: 9,
      title: "Corporate Offices – Thane West",
      city: "Mumbai",
      locality: "Thane",
      project: "Thane Corporate Park",
      type: "Commercial",
      bhk: null,
      area: 2000,
      price: "₹ 3.2 Cr",
      status: "Active",
      tag: "Commercial",
      featured: false,
    },
    {
      id: 10,
      title: "Whitefield Tech Homes – 2 BHK",
      city: "Bangalore",
      locality: "Whitefield",
      project: "Whitefield Heights",
      type: "Apartment",
      bhk: 2,
      area: 900,
      price: "₹ 78L – 95L",
      status: "Active",
      tag: "IT Hub",
      featured: true,
    },
    {
      id: 11,
      title: "Sarjapur Row Houses",
      city: "Bangalore",
      locality: "Sarjapur Road",
      project: "Sarjapur Greens",
      type: "Villa",
      bhk: 3,
      area: 1900,
      price: "₹ 1.6 Cr",
      status: "Draft",
      tag: "Upcoming",
      featured: false,
    },
    {
      id: 12,
      title: "Farmhouse Plots – Outskirts of Pune",
      city: "Pune",
      locality: "Mulshi",
      project: "Lakeview Farms",
      type: "Plot/Land",
      bhk: null,
      area: 5000,
      price: "₹ 35L – 65L",
      status: "Upcoming",
      tag: "Farmhouses",
      featured: false,
    },
  ];

  // Dummy leads
  let leads = [
    {
      id: 101,
      name: "Rahul Sharma",
      phone: "+91-98765 11111",
      city: "Pune",
      interest: "2 BHK Apartment",
      status: "New",
      source: "Homes you may like - Bavdhan",
      createdAt: "Yesterday",
    },
    {
      id: 102,
      name: "Priya Desai",
      phone: "+91-98765 22222",
      city: "Mumbai",
      interest: "NA Plots",
      status: "In Contact",
      source: "Plots & Land section",
      createdAt: "2 days ago",
    },
    {
      id: 103,
      name: "Amit Verma",
      phone: "+91-98765 33333",
      city: "Bangalore",
      interest: "Investment",
      status: "Site Visit",
      source: "High Demand Apartments",
      createdAt: "Apr 1, 2025",
    },
    {
      id: 104,
      name: "Neha Kulkarni",
      phone: "+91-98765 44444",
      city: "Pune",
      interest: "Luxury villa in Baner",
      status: "New",
      source: "Luxury Villas banner",
      createdAt: "Just now",
    },
    {
      id: 105,
      name: "Sanjay Rao",
      phone: "+91-98765 55555",
      city: "Pune",
      interest: "Commercial office in Kharadi",
      status: "In Contact",
      source: "Commercial category",
      createdAt: "Today",
    },
    {
      id: 106,
      name: "Isha Deshpande",
      phone: "+91-98765 66666",
      city: "Mumbai",
      interest: "Sea view apartment in Navi Mumbai",
      status: "New",
      source: "Homes you may like - Mumbai",
      createdAt: "Yesterday",
    },
    {
      id: 107,
      name: "Aditya Nair",
      phone: "+91-98765 77777",
      city: "Bangalore",
      interest: "2 BHK in Whitefield Heights",
      status: "Site Visit",
      source: "High demand apartments - Bangalore",
      createdAt: "3 days ago",
    },
    {
      id: 108,
      name: "Pooja Jain",
      phone: "+91-98765 88888",
      city: "Pune",
      interest: "Farmhouse plot in Mulshi",
      status: "New",
      source: "Farmhouses card",
      createdAt: "Just now",
    },
    {
      id: 109,
      name: "Vivek Singh",
      phone: "+91-98765 99999",
      city: "Pune",
      interest: "1 BHK in Wagholi",
      status: "Closed - Won",
      source: "Budget apartments",
      createdAt: "Last week",
    },
    {
      id: 110,
      name: "Anjali Gupta",
      phone: "+91-98766 00000",
      city: "Mumbai",
      interest: "Commercial in Thane",
      status: "Closed - Lost",
      source: "Commercial search",
      createdAt: "Last week",
    },
  ];

  // Dummy users
  const users = [
    {
      id: 1,
      name: "Karan Mehta",
      email: "karan@example.com",
      phone: "+91-90000 11111",
      city: "Pune",
      type: "Buyer",
      signupAt: "Mar 20, 2025",
    },
    {
      id: 2,
      name: "Sneha Patil",
      email: "sneha@example.com",
      phone: "+91-90000 22222",
      city: "Mumbai",
      type: "Investor",
      signupAt: "Mar 25, 2025",
    },
    {
      id: 3,
      name: "Rohit Kulkarni",
      email: "rohit@example.com",
      phone: "+91-90000 33333",
      city: "Bangalore",
      type: "Buyer",
      signupAt: "Apr 1, 2025",
    },
    {
      id: 4,
      name: "Aisha Khan",
      email: "aisha@example.com",
      phone: "+91-90000 44444",
      city: "Pune",
      type: "Buyer",
      signupAt: "Apr 2, 2025",
    },
    {
      id: 5,
      name: "Vikram Joshi",
      email: "vikram@example.com",
      phone: "+91-90000 55555",
      city: "Pune",
      type: "Channel Partner",
      signupAt: "Apr 5, 2025",
    },
    {
      id: 6,
      name: "Meera Iyer",
      email: "meera@example.com",
      phone: "+91-90000 66666",
      city: "Pune",
      type: "Buyer",
      signupAt: "Apr 7, 2025",
    },
    {
      id: 7,
      name: "Sameer Shah",
      email: "sameer@example.com",
      phone: "+91-90000 77777",
      city: "Mumbai",
      type: "Buyer",
      signupAt: "Apr 8, 2025",
    },
    {
      id: 8,
      name: "Priyanka Rao",
      email: "priyanka@example.com",
      phone: "+91-90000 88888",
      city: "Bangalore",
      type: "Investor",
      signupAt: "Apr 8, 2025",
    },
    {
      id: 9,
      name: "Harish Menon",
      email: "harish@example.com",
      phone: "+91-90000 99999",
      city: "Pune",
      type: "Buyer",
      signupAt: "Apr 9, 2025",
    },
    {
      id: 10,
      name: "Nidhi Verma",
      email: "nidhi@example.com",
      phone: "+91-90001 00000",
      city: "Pune",
      type: "Buyer",
      signupAt: "Apr 10, 2025",
    },
  ];

  let editPropertyId = null;

  const menuButtons = document.querySelectorAll(".menu-item");
  const views = document.querySelectorAll(".view");
  const pageTitle = document.getElementById("pageTitle");

  const propertiesTableBody = document.querySelector(
    "#propertiesTable tbody"
  );

  const propertyModalBackdrop = document.getElementById(
    "propertyModalBackdrop"
  );
  const btnOpenPropertyForm = document.getElementById(
    "btnOpenPropertyForm"
  );
  const btnClosePropertyModal = document.getElementById(
    "btnClosePropertyModal"
  );
  const btnCancelProperty = document.getElementById("btnCancelProperty");
  const propertyForm = document.getElementById("propertyForm");
  const propertyModalTitle = document.getElementById("propertyModalTitle");

  const statProperties = document.getElementById("statProperties");
  const statLeads = document.getElementById("statLeads");
  const statUsers = document.getElementById("statUsers");
  const statActiveProperties = document.getElementById("statActiveProperties");
  const statNewLeads = document.getElementById("statNewLeads");
  const statBuyerUsers = document.getElementById("statBuyerUsers");
  const recentLeadsBody = document.getElementById("recentLeadsBody");
  const recentPropertiesList = document.getElementById(
    "recentPropertiesList"
  );
  const leadsTableBody = document.querySelector("#leadsTable tbody");
  const usersTableBody = document.querySelector("#usersTable tbody");

  const leadModalBackdrop = document.getElementById("leadModalBackdrop");
  const btnOpenLeadForm = document.getElementById("btnOpenLeadForm");
  const btnCloseLeadModal = document.getElementById("btnCloseLeadModal");
  const btnCancelLead = document.getElementById("btnCancelLead");
  const leadForm = document.getElementById("leadForm");

  const cityPuneValue = document.getElementById("cityPuneValue");
  const cityMumbaiValue = document.getElementById("cityMumbaiValue");
  const cityBangaloreValue = document.getElementById("cityBangaloreValue");

  const reachUsersValue = document.getElementById("reachUsers");
  const reachChangeValue = document.getElementById("reachChange");
  const reachSparkline = document.getElementById("reachSparkline");

  const propTypeBars = document.getElementById("propTypeBars");
  const propStatusBars = document.getElementById("propStatusBars");
  const leadStatusBars = document.getElementById("leadStatusBars");
  const leadCityBars = document.getElementById("leadCityBars");
  const userTypeBars = document.getElementById("userTypeBars");
  const userCityBars = document.getElementById("userCityBars");

  // KPI elements for inner pages
  const kpiPropsTotal = document.getElementById("kpiPropsTotal");
  const kpiPropsFeatured = document.getElementById("kpiPropsFeatured");
  const kpiPropsActive = document.getElementById("kpiPropsActive");
  const kpiPropsCityTop = document.getElementById("kpiPropsCityTop");

  const kpiLeadsTotal = document.getElementById("kpiLeadsTotal");
  const kpiLeadsNew = document.getElementById("kpiLeadsNew");
  const kpiLeadsVisits = document.getElementById("kpiLeadsVisits");
  const kpiLeadsClosed = document.getElementById("kpiLeadsClosed");

  const kpiUsersTotal = document.getElementById("kpiUsersTotal");
  const kpiUsersBuyers = document.getElementById("kpiUsersBuyers");
  const kpiUsersCities = document.getElementById("kpiUsersCities");
  const kpiUsersTopCity = document.getElementById("kpiUsersTopCity");

  // Update top stats
  const activeProperties = properties.filter(
    (p) => p.status === "Active"
  ).length;
  if (statProperties) statProperties.textContent = properties.length;
  if (statActiveProperties)
    statActiveProperties.textContent = `Active: ${activeProperties}`;

  if (statLeads) statLeads.textContent = leads.length;
  if (statNewLeads)
    statNewLeads.textContent = `New today: ${
      leads.filter((l) => l.createdAt === "Just now").length
    }`;

  if (statUsers) statUsers.textContent = users.length;
  if (statBuyerUsers)
    statBuyerUsers.textContent = `Buyers: ${
      users.filter((u) => u.type === "Buyer").length
    }`;

  // Init KPIs for properties
  function updatePropertyKpis() {
    const total = properties.length;
    const active = properties.filter((p) => p.status === "Active").length;
    const featured = properties.filter((p) => p.featured).length;

    const cityCounts = {};
    properties.forEach((p) => {
      cityCounts[p.city] = (cityCounts[p.city] || 0) + 1;
    });
    let topCity = "-";
    let topCount = 0;
    Object.entries(cityCounts).forEach(([city, count]) => {
      if (count > topCount) {
        topCity = city;
        topCount = count;
      }
    });

    if (kpiPropsTotal) kpiPropsTotal.textContent = total;
    if (kpiPropsActive) kpiPropsActive.textContent = active;
    if (kpiPropsFeatured)
      kpiPropsFeatured.textContent = `${featured} featured`;
    if (kpiPropsCityTop)
      kpiPropsCityTop.textContent =
        topCity !== "-" ? `Top city: ${topCity}` : "Top city: -";
  }

  function updateLeadKpis() {
    const total = leads.length;
    const newToday = leads.filter(
      (l) => l.createdAt === "Just now" || l.createdAt === "Today"
    ).length;
    const siteVisits = leads.filter((l) => l.status === "Site Visit").length;
    const closed = leads.filter((l) =>
      (l.status || "").startsWith("Closed")
    ).length;

    if (kpiLeadsTotal) kpiLeadsTotal.textContent = total;
    if (kpiLeadsNew)
      kpiLeadsNew.textContent = `${newToday} new today`;
    if (kpiLeadsVisits) kpiLeadsVisits.textContent = siteVisits;
    if (kpiLeadsClosed)
      kpiLeadsClosed.textContent = `Closed: ${closed}`;
  }

  function updateUserKpis() {
    const total = users.length;
    const buyers = users.filter((u) => u.type === "Buyer").length;
    const citySet = new Set(users.map((u) => u.city).filter(Boolean));

    // top city by user count
    const cityCounts = {};
    users.forEach((u) => {
      if (!u.city) return;
      cityCounts[u.city] = (cityCounts[u.city] || 0) + 1;
    });
    let topCity = "-";
    let topCount = 0;
    Object.entries(cityCounts).forEach(([city, count]) => {
      if (count > topCount) {
        topCity = city;
        topCount = count;
      }
    });

    if (kpiUsersTotal) kpiUsersTotal.textContent = total;
    if (kpiUsersBuyers)
      kpiUsersBuyers.textContent = `Buyers: ${buyers}`;
    if (kpiUsersCities)
      kpiUsersCities.textContent = citySet.size.toString();
    if (kpiUsersTopCity)
      kpiUsersTopCity.textContent =
        topCity !== "-" ? `Top city: ${topCity}` : "Top city: -";
  }

  // Sidebar navigation handling
  menuButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const viewName = btn.getAttribute("data-view");

      // active state
      menuButtons.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");

      // show view
      views.forEach((v) => {
        if (v.getAttribute("data-view") === viewName) {
          v.classList.remove("hidden");
        } else {
          v.classList.add("hidden");
        }
      });

      // page heading
      pageTitle.textContent =
        viewName.charAt(0).toUpperCase() + viewName.slice(1);
    });
  });

  // Properties table render
  function renderPropertiesTable() {
    propertiesTableBody.innerHTML = "";

    properties.forEach((prop) => {
      const tr = document.createElement("tr");

      tr.innerHTML = `
        <td>${prop.id}</td>
        <td>${prop.title}</td>
        <td>${prop.project || "-"}</td>
        <td>${prop.city}</td>
        <td>${prop.locality || "-"}</td>
        <td>${prop.type}</td>
        <td>${prop.bhk != null ? prop.bhk : "-"}</td>
        <td>${prop.area != null ? prop.area : "-"}</td>
        <td>${prop.price}</td>
        <td>${prop.status}</td>
        <td>${prop.tag || "Normal"}</td>
        <td>${prop.featured ? "Yes" : "No"}</td>
        <td>
          <button class="btn-secondary btn-sm" data-action="edit" data-id="${prop.id}">Edit</button>
          <button class="btn-secondary btn-sm" data-action="delete" data-id="${prop.id}">Delete</button>
        </td>
      `;

      propertiesTableBody.appendChild(tr);
    });
  }

  renderPropertiesTable();

  // Dashboard recent sections
  function renderRecentLeads() {
    if (!recentLeadsBody) return;
    recentLeadsBody.innerHTML = "";

    leads.slice(0, 5).forEach((lead) => {
      const tr = document.createElement("tr");
      tr.innerHTML = `
        <td>${lead.name}</td>
        <td>${lead.phone}</td>
        <td>${lead.city}</td>
        <td>${lead.interest}</td>
        <td>${lead.status}</td>
      `;
      recentLeadsBody.appendChild(tr);
    });
  }

  function renderLeadsTable() {
    if (!leadsTableBody) return;
    leadsTableBody.innerHTML = "";

    leads.forEach((lead) => {
      const tr = document.createElement("tr");
      tr.innerHTML = `
        <td>${lead.id}</td>
        <td>${lead.name}</td>
        <td>${lead.phone}</td>
        <td>${lead.city || "-"}</td>
        <td>${lead.interest || "-"}</td>
        <td>${lead.status || "-"}</td>
        <td>${lead.source || "-"}</td>
        <td>${lead.createdAt || "-"}</td>
      `;
      leadsTableBody.appendChild(tr);
    });
  }

  function renderRecentProperties() {
    if (!recentPropertiesList) return;
    recentPropertiesList.innerHTML = "";

    // Most recent by id (simple sort desc)
    const sorted = [...properties].sort((a, b) => b.id - a.id).slice(0, 5);

    sorted.forEach((prop) => {
      const li = document.createElement("li");
      li.className = "recent-item";
      li.innerHTML = `
        <div class="recent-main">
          <span class="recent-title">${prop.title}</span>
          <span class="recent-meta">
            ${prop.city}${
              prop.locality ? " • " + prop.locality : ""
            } • ${prop.type} • ${prop.status}
          </span>
        </div>
        <span class="tag-pill">${
          prop.tag ? prop.tag : prop.featured ? "Featured" : "Normal"
        }</span>
      `;
      recentPropertiesList.appendChild(li);
    });
  }

  renderRecentLeads();
  renderRecentProperties();
  renderLeadsTable();

  function renderUsersTable() {
    if (!usersTableBody) return;
    usersTableBody.innerHTML = "";

    users.forEach((user) => {
      const tr = document.createElement("tr");
      tr.innerHTML = `
        <td>${user.id}</td>
        <td>${user.name}</td>
        <td>${user.email}</td>
        <td>${user.phone}</td>
        <td>${user.city || "-"}</td>
        <td>${user.type || "Buyer"}</td>
        <td>${user.signupAt || "-"}</td>
      `;
      usersTableBody.appendChild(tr);
    });
  }

  renderUsersTable();

  // --- Generic helper to render horizontal bar rows into a container ---
  function renderHBarGroup(container, counts) {
    if (!container) return;
    container.innerHTML = "";

    const entries = Object.entries(counts);
    if (!entries.length) return;

    const max = Math.max(...entries.map(([, v]) => v), 1);

    entries.forEach(([label, value]) => {
      const row = document.createElement("div");
      row.className = "hbar-row";
      const width = (value / max) * 100;
      row.innerHTML = `
        <div class="hbar-label">${label}</div>
        <div class="hbar-track">
          <div class="hbar-fill" style="width:${Math.max(
            value > 0 ? width : 0,
            value > 0 ? 10 : 0
          )}%"></div>
        </div>
        <span class="hbar-value">${value}</span>
      `;
      container.appendChild(row);
    });
  }

  function renderPropertyAnalytics() {
    const typeCounts = {};
    const statusCounts = {};
    properties.forEach((p) => {
      typeCounts[p.type] = (typeCounts[p.type] || 0) + 1;
      statusCounts[p.status] = (statusCounts[p.status] || 0) + 1;
    });
    renderHBarGroup(propTypeBars, typeCounts);
    renderHBarGroup(propStatusBars, statusCounts);
  }

  function renderLeadAnalytics() {
    const statusCounts = {};
    const cityCounts = {};
    leads.forEach((l) => {
      statusCounts[l.status] = (statusCounts[l.status] || 0) + 1;
      if (l.city) {
        cityCounts[l.city] = (cityCounts[l.city] || 0) + 1;
      }
    });
    renderHBarGroup(leadStatusBars, statusCounts);
    renderHBarGroup(leadCityBars, cityCounts);
  }

  function renderUserAnalytics() {
    const typeCounts = {};
    const cityCounts = {};
    users.forEach((u) => {
      typeCounts[u.type || "Buyer"] =
        (typeCounts[u.type || "Buyer"] || 0) + 1;
      cityCounts[u.city || "Unknown"] =
        (cityCounts[u.city || "Unknown"] || 0) + 1;
    });
    renderHBarGroup(userTypeBars, typeCounts);
    renderHBarGroup(userCityBars, cityCounts);
  }

  renderPropertyAnalytics();
  renderLeadAnalytics();
  renderUserAnalytics();
  updatePropertyKpis();
  updateLeadKpis();
  updateUserKpis();

  // Simple chart data & rendering
  function initRevenueChart() {
    const bars = document.querySelectorAll("[data-revenue-bar]");
    if (!bars.length) return;

    // Dummy revenue data (Mon..Sun)
    const values = [40, 55, 48, 50, 80, 60, 45];
    const max = Math.max(...values);

    bars.forEach((bar, idx) => {
      const v = values[idx] ?? 0;
      const height = (v / max) * 100;
      bar.style.height = `${Math.max(height, 8)}%`;
    });
  }

  function initCityPerformance() {
    const cityCounts = { Pune: 0, Mumbai: 0, Bangalore: 0 };

    properties.forEach((p) => {
      if (p.city === "Pune") cityCounts.Pune += 1;
      if (p.city === "Mumbai") cityCounts.Mumbai += 1;
      if (p.city === "Bangalore") cityCounts.Bangalore += 1;
    });

    const max = Math.max(...Object.values(cityCounts), 1);
    document
      .querySelectorAll("[data-city-bar]")
      .forEach((el) => {
        const city = el.getAttribute("data-city-bar");
        const value = cityCounts[city] ?? 0;
        const width = (value / max) * 100;
        el.style.width = `${Math.max(width, value > 0 ? 10 : 0)}%`;
      });

    if (cityPuneValue) cityPuneValue.textContent = `${cityCounts.Pune} props`;
    if (cityMumbaiValue)
      cityMumbaiValue.textContent = `${cityCounts.Mumbai} props`;
    if (cityBangaloreValue)
      cityBangaloreValue.textContent = `${cityCounts.Bangalore} props`;
  }

  function initReachSparkline() {
    if (!reachSparkline || !reachUsersValue || !reachChangeValue) return;

    // Dummy engagement points (last 7 days)
    const points = [8, 10, 9, 11, 13, 12, 14];
    const max = Math.max(...points);
    reachSparkline.innerHTML = "";

    points.forEach((v, idx) => {
      const bar = document.createElement("div");
      bar.className = "sparkline-bar" + (idx === points.length - 1 ? " main" : "");
      bar.style.height = `${(v / max) * 100}%`;
      reachSparkline.appendChild(bar);
    });

    reachUsersValue.textContent = users.length * 10; // dummy multiplier
    reachChangeValue.textContent = "+12.5%";
  }

  initRevenueChart();
  initCityPerformance();
  initReachSparkline();

  // Modal open/close helpers
  function openPropertyModal(mode, property) {
    propertyModalBackdrop.classList.remove("hidden");

    if (mode === "edit" && property) {
      propertyModalTitle.textContent = "Edit Property";
      propertyForm.title.value = property.title;
      propertyForm.city.value = property.city;
      propertyForm.locality.value = property.locality || "";
      propertyForm.project.value = property.project || "";
      propertyForm.type.value = property.type;
      propertyForm.bhk.value =
        property.bhk != null && property.bhk !== "" ? property.bhk : "";
      propertyForm.area.value =
        property.area != null && property.area !== "" ? property.area : "";
      propertyForm.price.value = property.price;
      propertyForm.status.value = property.status;
      propertyForm.tag.value = property.tag || "";
      propertyForm.featured.checked = !!property.featured;
    } else {
      propertyModalTitle.textContent = "Add Property";
      propertyForm.reset();
    }
  }

  function closePropertyModal() {
    propertyModalBackdrop.classList.add("hidden");
    editPropertyId = null;
  }

  btnOpenPropertyForm.addEventListener("click", () => {
    editPropertyId = null;
    openPropertyModal("add");
  });

  btnClosePropertyModal.addEventListener("click", closePropertyModal);
  btnCancelProperty.addEventListener("click", closePropertyModal);

  propertyModalBackdrop.addEventListener("click", (e) => {
    if (e.target === propertyModalBackdrop) {
      closePropertyModal();
    }
  });

  // Handle add/edit submit
  propertyForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const formData = new FormData(propertyForm);
    const newData = {
      title: formData.get("title"),
      city: formData.get("city"),
      locality: formData.get("locality") || "",
      project: formData.get("project") || "",
      type: formData.get("type"),
      bhk: formData.get("bhk") ? Number(formData.get("bhk")) : null,
      area: formData.get("area") ? Number(formData.get("area")) : null,
      price: formData.get("price"),
      status: formData.get("status"),
      tag: formData.get("tag") || "",
      featured: formData.get("featured") === "on",
    };

    if (editPropertyId != null) {
      // update existing
      properties = properties.map((p) =>
        p.id === editPropertyId ? { ...p, ...newData } : p
      );
    } else {
      // add new
      const newId =
        properties.length > 0
          ? Math.max(...properties.map((p) => p.id)) + 1
          : 1;
      properties.push({
        id: newId,
        ...newData,
      });
    }

    renderPropertiesTable();
    renderPropertyAnalytics();
    initCityPerformance();
    updatePropertyKpis();
    closePropertyModal();
  });

  // Edit/Delete actions from table (event delegation)
  propertiesTableBody.addEventListener("click", (e) => {
    const btn = e.target.closest("button");
    if (!btn) return;

    const action = btn.getAttribute("data-action");
    const id = Number(btn.getAttribute("data-id"));
    const prop = properties.find((p) => p.id === id);

    if (action === "edit" && prop) {
      editPropertyId = id;
      openPropertyModal("edit", prop);
    }

    if (action === "delete" && prop) {
      const confirmDelete = window.confirm(
        `Delete property "${prop.title}"?`
      );
      if (confirmDelete) {
        properties = properties.filter((p) => p.id !== id);
        renderPropertiesTable();
      }
    }
  });

  // Lead modal helpers
  function openLeadModal() {
    if (!leadModalBackdrop) return;
    leadModalBackdrop.classList.remove("hidden");
    if (leadForm) {
      leadForm.reset();
    }
  }

  function closeLeadModal() {
    if (!leadModalBackdrop) return;
    leadModalBackdrop.classList.add("hidden");
  }

  if (btnOpenLeadForm) {
    btnOpenLeadForm.addEventListener("click", openLeadModal);
  }

  if (btnCloseLeadModal) {
    btnCloseLeadModal.addEventListener("click", closeLeadModal);
  }

  if (btnCancelLead) {
    btnCancelLead.addEventListener("click", closeLeadModal);
  }

  if (leadModalBackdrop) {
    leadModalBackdrop.addEventListener("click", (e) => {
      if (e.target === leadModalBackdrop) {
        closeLeadModal();
      }
    });
  }

  if (leadForm) {
    leadForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const formData = new FormData(leadForm);
      const newLead = {
        id:
          leads.length > 0
            ? Math.max(...leads.map((l) => l.id)) + 1
            : 1,
        name: formData.get("name"),
        phone: formData.get("phone"),
        city: formData.get("city") || "",
        interest: formData.get("interest") || "",
        status: formData.get("status") || "New",
        source: formData.get("source") || "Manual entry",
        createdAt: "Just now",
      };

      leads.push(newLead);
      renderLeadsTable();
      renderRecentLeads();
      renderLeadAnalytics();

      if (statLeads) statLeads.textContent = leads.length;
      updateLeadKpis();

      closeLeadModal();
    });
  }

  // Buttons with data-view-jump (from dashboard)
  document.querySelectorAll("[data-view-jump]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const targetView = btn.getAttribute("data-view-jump");
      const targetMenu = document.querySelector(
        `.menu-item[data-view="${targetView}"]`
      );
      if (targetMenu) {
        targetMenu.click();
      }
    });
  });

  // Sidebar toggle for mobile/tablet
  const sidebarToggle = document.getElementById("sidebarToggle");
  const sidebar = document.getElementById("adminSidebar");
  const sidebarOverlay = document.getElementById("sidebarOverlay");
  const sidebarClose = document.getElementById("sidebarClose");

  function toggleSidebar() {
    const isActive = sidebar?.classList.contains("active");
    if (isActive) {
      closeSidebar();
    } else {
      openSidebar();
    }
  }

  function openSidebar() {
    if (!sidebar || !sidebarOverlay) return;
    
    sidebar.classList.add("active");
    sidebarOverlay.classList.add("active");
    sidebarOverlay.setAttribute("aria-hidden", "false");
    sidebar.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
    
    // Announce to screen readers
    const announcement = document.createElement("div");
    announcement.setAttribute("role", "status");
    announcement.setAttribute("aria-live", "polite");
    announcement.className = "sr-only";
    announcement.textContent = "Sidebar menu opened";
    document.body.appendChild(announcement);
    setTimeout(() => document.body.removeChild(announcement), 1000);
    
    // Focus first menu item for accessibility
    setTimeout(() => {
      const firstMenuItem = sidebar.querySelector(".menu-item");
      firstMenuItem?.focus();
    }, 100);
  }

  function closeSidebar() {
    if (!sidebar || !sidebarOverlay) return;
    
    sidebar.classList.remove("active");
    sidebarOverlay.classList.remove("active");
    sidebarOverlay.setAttribute("aria-hidden", "true");
    sidebar.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
    // Reset any inline transforms applied by swipe gestures
    sidebar.style.transform = "";
    
    // Announce to screen readers
    const announcement = document.createElement("div");
    announcement.setAttribute("role", "status");
    announcement.setAttribute("aria-live", "polite");
    announcement.className = "sr-only";
    announcement.textContent = "Sidebar menu closed";
    document.body.appendChild(announcement);
    setTimeout(() => document.body.removeChild(announcement), 1000);
    
    // Return focus to toggle button
    sidebarToggle?.focus();
  }

  sidebarToggle?.addEventListener("click", toggleSidebar);
  sidebarClose?.addEventListener("click", closeSidebar);
  sidebarOverlay?.addEventListener("click", closeSidebar);

  // Keyboard support for overlay
  sidebarOverlay?.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      closeSidebar();
    }
    if (e.key === "Escape") {
      closeSidebar();
    }
  });

  // Close sidebar when menu item is clicked on mobile / tablet
  if (window.innerWidth <= 1024) {
    menuButtons.forEach((btn) => {
      btn.addEventListener("click", () => {
        setTimeout(closeSidebar, 200);
      });
    });
  }

  // Swipe gesture support for mobile
  let touchStartX = 0;
  let touchEndX = 0;
  let isSwiping = false;

  sidebar?.addEventListener("touchstart", (e) => {
    touchStartX = e.changedTouches[0].screenX;
    isSwiping = true;
  });

  sidebar?.addEventListener("touchmove", (e) => {
    if (!isSwiping) return;
    touchEndX = e.changedTouches[0].screenX;
    const swipeDistance = touchStartX - touchEndX;
    
    // If swiping left (closing sidebar)
    if (swipeDistance > 50) {
      const currentTransform = sidebar.style.transform || "translateX(0)";
      if (currentTransform.includes("translateX(0)")) {
        sidebar.style.transform = `translateX(${-swipeDistance}px)`;
      }
    }
  });

  sidebar?.addEventListener("touchend", () => {
    if (!isSwiping) return;
    const swipeDistance = touchStartX - touchEndX;
    
    // If swiped more than 100px, close sidebar
    if (swipeDistance > 100) {
      closeSidebar();
    } else {
      // Otherwise, snap back
      sidebar.style.transform = "";
    }
    
    isSwiping = false;
    touchStartX = 0;
    touchEndX = 0;
  });

  // Swipe from left edge to open sidebar (on main content)
  let edgeTouchStartX = 0;
  const mainContent = document.querySelector(".admin-main");

  mainContent?.addEventListener("touchstart", (e) => {
    edgeTouchStartX = e.touches[0].clientX;
  });

  mainContent?.addEventListener("touchmove", (e) => {
    const currentX = e.touches[0].clientX;
    const swipeDistance = currentX - edgeTouchStartX;
    
    // If starting from left edge (within 20px) and swiping right
    if (edgeTouchStartX < 20 && swipeDistance > 50 && !sidebar?.classList.contains("active")) {
      // Show preview of sidebar opening
      sidebar.style.transform = `translateX(${swipeDistance - 280}px)`;
    }
  });

  mainContent?.addEventListener("touchend", (e) => {
    const currentX = e.changedTouches[0].clientX;
    const swipeDistance = currentX - edgeTouchStartX;
    
    // If swiped from left edge more than 100px, open sidebar
    if (edgeTouchStartX < 20 && swipeDistance > 100 && !sidebar?.classList.contains("active")) {
      openSidebar();
    } else {
      sidebar.style.transform = "";
    }
    
    edgeTouchStartX = 0;
  });

  // Handle window resize
  window.addEventListener("resize", () => {
    if (window.innerWidth > 1024) {
      closeSidebar();
      sidebar.style.transform = "";
    }
  });

  // ESC key to close sidebar
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && sidebar?.classList.contains("active")) {
      closeSidebar();
    }
  });
});


