/*
  Bhoomi-Plots Admin Dashboard
  ---------------------------------------
  - Dummy/static data
  - Simple state management in memory
  - Basic CRUD for properties (add, edit, delete)
  - Chart.js for charts
*/

// ----------------------
// Dummy Data
// ----------------------
const state = {
    // In real app these would come from backend
    properties: [
      {
        id: 1,
        title: "Sunrise Residency Plot A-12",
        category: "plots",
        location: "Electronic City, Bengaluru",
        price: 4200000,
        status: "Active",
        updatedAt: "2026-02-06",
      },
      {
        id: 2,
        title: "Green Valley Agricultural Land",
        category: "lands",
        location: "Hoskote, Bengaluru Rural",
        price: 7800000,
        status: "Pending",
        updatedAt: "2026-02-08",
      },
      {
        id: 3,
        title: "Lakeview Heights 3BHK",
        category: "residential",
        location: "Whitefield, Bengaluru",
        price: 9500000,
        status: "Active",
        updatedAt: "2026-02-09",
      },
      {
        id: 4,
        title: "Partner - Elite Realtors Villa Plot",
        category: "partner",
        location: "Sarjapur Road, Bengaluru",
        price: 12500000,
        status: "Active",
        updatedAt: "2026-02-07",
      },
      {
        id: 5,
        title: "Metro Connect Premium Plot",
        category: "plots",
        location: "KR Puram, Bengaluru",
        price: 5200000,
        status: "Sold",
        updatedAt: "2026-01-28",
      },
      {
        id: 6,
        title: "Palm Meadows Villa",
        category: "residential",
        location: "Yelahanka, Bengaluru",
        price: 13200000,
        status: "Pending",
        updatedAt: "2026-02-01",
      },
    ],
    // Fake sales/monthly bookings data for charts
    metrics: {
      totalSales: 7.5e7,
      previousSales: 6.8e7,
      activeListings: 18,
      newThisWeek: 5,
      pendingRequests: 4,
      categoryCounts: {
        plots: 12,
        lands: 6,
        residential: 9,
        partner: 4,
      },
      monthlySales: [
        4200000, 5100000, 6200000, 5600000, 7100000, 8300000,
        9000000, 10200000, 9800000, 11000000, 12300000, 13000000,
      ],
      monthlyBookings: [8, 10, 9, 11, 12, 13, 14, 16, 15, 18, 20, 22],
      yearlySales: [4.5e7, 5.2e7, 6.1e7, 7.5e7],
      yearlyLabels: ["2022", "2023", "2024", "2025"],
    },
    recentActivities: [
      {
        title: "New plot added: Sunrise Residency Plot A-12",
        meta: "By Admin · 5 mins ago",
        type: "New Listing",
      },
      {
        title: "Booking confirmed for Lakeview Heights 3BHK",
        meta: "Payment received · 32 mins ago",
        type: "Booking",
      },
      {
        title: "Status changed: Palm Meadows Villa → Pending",
        meta: "Edited by Sales Team · 1 hr ago",
        type: "Update",
      },
      {
        title: "Partner property onboarded: Elite Realtors Villa Plot",
        meta: "By Partner Manager · 3 hrs ago",
        type: "Partner",
      },
      {
        title: "Price updated for Green Valley Agricultural Land",
        meta: "By Admin · 6 hrs ago",
        type: "Price Update",
      },
    ],
    partners: [
      {
        id: 1,
        name: "Elite Realtors",
        city: "Bengaluru · Sarjapur / ORR",
        tier: "Platinum",
        totalListings: 14,
        activeListings: 9,
        status: "Active",
      },
      {
        id: 2,
        name: "Metro Edge Realty",
        city: "Bengaluru · KR Puram / Whitefield",
        tier: "Gold",
        totalListings: 11,
        activeListings: 7,
        status: "Active",
      },
      {
        id: 3,
        name: "Greenline Associates",
        city: "Bengaluru Rural · Hoskote",
        tier: "Silver",
        totalListings: 6,
        activeListings: 4,
        status: "Active",
      },
      {
        id: 4,
        name: "Skyline Brokers",
        city: "Bengaluru · North Corridor",
        tier: "Gold",
        totalListings: 8,
        activeListings: 3,
        status: "Paused",
      },
    ],
    ui: {
      activeSection: "dashboard",
      activeCategory: "plots",
      editingPropertyId: null,
      searchQuery: "",
      filters: {
        status: "all",
        minPrice: null,
        maxPrice: null,
      },
    },
  };
  
  // Simple ID generator for demo
  function getNextPropertyId() {
    return (
      state.properties.reduce((maxId, p) => Math.max(maxId, p.id), 0) + 1
    );
  }
  
  // Format helpers
  function formatCurrency(num) {
    return "₹" + num.toLocaleString("en-IN", { maximumFractionDigits: 0 });
  }
  
  function formatPercent(num) {
    return num.toFixed(1) + "%";
  }
  
  // ----------------------
  // DOM references
  // ----------------------
  // Stats
  const statTotalPropsEl = document.getElementById("stat-total-properties");
  const statTotalSalesEl = document.getElementById("stat-total-sales");
  const statActiveListingsEl = document.getElementById("stat-active-listings");
  const statPendingReqEl = document.getElementById("stat-pending-requests");
  const statTotalPropsMetaEl = document.getElementById("stat-total-properties-meta");
  const statTotalSalesMetaEl = document.getElementById("stat-total-sales-meta");
  const statActiveListingsMetaEl = document.getElementById("stat-active-listings-meta");
  const statPendingReqMetaEl = document.getElementById("stat-pending-requests-meta");
  const globalSearchInput = document.querySelector(".search-input");
  const btnExport = document.getElementById("btn-export");
  
  // Category counts
  const countPlotsEl = document.getElementById("count-plots");
  const countLandsEl = document.getElementById("count-lands");
  const countResEl = document.getElementById("count-residential");
  const countPartnerEl = document.getElementById("count-partner");
  
  // Properties table
  const propertiesTableBody = document.getElementById("properties-table-body");
  const propertiesTableMeta = document.getElementById("properties-table-meta");
  const categoryTabs = document.querySelectorAll(".tab");
  const filterStatusEl = document.getElementById("filter-status");
  const filterMinPriceEl = document.getElementById("filter-min-price");
  const filterMaxPriceEl = document.getElementById("filter-max-price");
  const filterResetEl = document.getElementById("filter-reset");
  
  // Property form
  const formWrapper = document.getElementById("property-form-wrapper");
  const propertyForm = document.getElementById("property-form");
  const btnOpenForm = document.getElementById("btn-open-form");
  const btnCloseForm = document.getElementById("btn-close-form");
  const btnCancelForm = document.getElementById("btn-cancel-form");
  const btnResetForm = document.getElementById("btn-reset-form");
  const propertyFormTitle = document.getElementById("property-form-title");
  const fieldId = document.getElementById("property-id");
  const fieldTitle = document.getElementById("property-title");
  const fieldCategory = document.getElementById("property-category");
  const fieldLocation = document.getElementById("property-location");
  const fieldPrice = document.getElementById("property-price");
  const fieldStatus = document.getElementById("property-status");
  const fieldDescription = document.getElementById("property-description");
  
  // Activity + charts
  const activityListEl = document.getElementById("activity-list");
  const chartFilterEl = document.getElementById("chart-filter");
  const statCategoryTotalEl = document.getElementById("stat-category-total");
  const statAvgTicketEl = document.getElementById("stat-avg-ticket");
  const statConversionEl = document.getElementById("stat-conversion");

  // Partners
  const partnerTotalEl = document.getElementById("partner-total");
  const partnerListingsEl = document.getElementById("partner-listings");
  const partnerRevenueEl = document.getElementById("partner-revenue");
  const partnerTableBody = document.getElementById("partner-table-body");
  
  // Settings / logout
  const btnLogout = document.getElementById("btn-logout");
  const btnLogoutIcon = document.getElementById("btn-logout-icon");
  const btnResetDemo = document.getElementById("btn-reset-demo");
  const toastContainer = document.getElementById("toast-container");

  // Property detail drawer
  const detailDrawer = document.getElementById("property-detail");
  const btnDetailClose = document.getElementById("btn-detail-close");
  const detailTitleEl = document.getElementById("detail-title");
  const detailLocationEl = document.getElementById("detail-location");
  const detailCategoryEl = document.getElementById("detail-category");
  const detailStatusEl = document.getElementById("detail-status");
  const detailPriceEl = document.getElementById("detail-price");
  const detailUpdatedEl = document.getElementById("detail-updated");
  const detailDescriptionEl = document.getElementById("detail-description");
  const btnDetailEdit = document.getElementById("btn-detail-edit");
  const btnDetailMarkSold = document.getElementById("btn-detail-mark-sold");
  
  // Chart instances
  let salesChartInstance;
  let categoryChartInstance;
  let yearlyChartInstance;
  
  // ----------------------
  // Rendering functions
  // ----------------------
  
  // Overview stats
  function renderStats() {
    const { metrics } = state;
    const totalProps = Object.values(metrics.categoryCounts).reduce(
      (sum, val) => sum + val,
      0
    );
  
    statTotalPropsEl.textContent = totalProps;
    const propsDiff = totalProps - 25; // fake baseline
    statTotalPropsMetaEl.textContent =
      (propsDiff >= 0 ? "+" : "") + propsDiff + " from last month";
  
    statTotalSalesEl.textContent = formatCurrency(metrics.totalSales);
    const salesGrowth =
      ((metrics.totalSales - metrics.previousSales) / metrics.previousSales) * 100;
    statTotalSalesMetaEl.textContent =
      (salesGrowth >= 0 ? "+" : "") + salesGrowth.toFixed(1) + "% vs last month";
  
    statActiveListingsEl.textContent = metrics.activeListings;
    statActiveListingsMetaEl.textContent =
      metrics.newThisWeek + " new this week";
  
    statPendingReqEl.textContent = metrics.pendingRequests;
    statPendingReqMetaEl.textContent =
      metrics.pendingRequests + " approvals required";
  
    // Reports mini stats (only on reports page)
    if (statCategoryTotalEl && statAvgTicketEl && statConversionEl) {
      statCategoryTotalEl.textContent = totalProps;
      const avgTicket =
        metrics.totalSales / Math.max(1, metrics.monthlyBookings.reduce((a, b) => a + b, 0));
      statAvgTicketEl.textContent = formatCurrency(avgTicket);
  
      const fakeConversion = 37.5; // static for demo
      statConversionEl.textContent = formatPercent(fakeConversion);
    }
  }
  
  // Category counts
  function renderCategoryCounts() {
    const { categoryCounts } = state.metrics;
    countPlotsEl.textContent = categoryCounts.plots;
    countLandsEl.textContent = categoryCounts.lands;
    countResEl.textContent = categoryCounts.residential;
    countPartnerEl.textContent = categoryCounts.partner;
  }
  
  // Properties table
  function getFilteredPropertiesForCurrentCategory() {
    const category = state.ui.activeCategory;
    const { status, minPrice, maxPrice } = state.ui.filters;
    const query = (state.ui.searchQuery || "").toLowerCase();

    return state.properties.filter((p) => {
      if (p.category !== category) return false;

      if (status !== "all" && p.status !== status) return false;

      if (typeof minPrice === "number" && !Number.isNaN(minPrice)) {
        if (p.price < minPrice) return false;
      }

      if (typeof maxPrice === "number" && !Number.isNaN(maxPrice)) {
        if (p.price > maxPrice) return false;
      }

      if (query) {
        const haystack =
          (p.title + " " + p.location + " " + humanizeCategory(p.category)).toLowerCase();
        if (!haystack.includes(query)) return false;
      }

      return true;
    });
  }

  function renderPropertyTable() {
    const category = state.ui.activeCategory;
    const props = getFilteredPropertiesForCurrentCategory();
  
    propertiesTableBody.innerHTML = "";
  
    props.forEach((prop) => {
      const tr = document.createElement("tr");
  
      tr.innerHTML = `
        <td>${prop.title}</td>
        <td>${prop.location}</td>
        <td>${humanizeCategory(prop.category)}</td>
        <td>${formatCurrency(prop.price)}</td>
        <td>
          <span class="status-badge ${statusClass(prop.status)}">
            ${prop.status}
          </span>
        </td>
        <td>${prop.updatedAt}</td>
        <td>
          <div class="table-actions">
            <button data-action="view" data-id="${prop.id}" title="View">👁</button>
            <button data-action="edit" data-id="${prop.id}" title="Edit">✏️</button>
            <button data-action="delete" data-id="${prop.id}" title="Delete">🗑</button>
          </div>
        </td>
      `;
  
      propertiesTableBody.appendChild(tr);
    });
  
    propertiesTableMeta.textContent = `${props.length} properties in ${humanizeCategory(
      category
    )}`;
  }
  
  function humanizeCategory(cat) {
    switch (cat) {
      case "plots":
        return "Plots";
      case "lands":
        return "Lands";
      case "residential":
        return "Residential";
      case "partner":
        return "Partner";
      default:
        return cat;
    }
  }
  
  function statusClass(status) {
    if (status === "Active") return "status-badge--active";
    if (status === "Pending") return "status-badge--pending";
    if (status === "Sold") return "status-badge--sold";
    return "";
  }
  
  // Recent activities
  function renderActivities() {
    activityListEl.innerHTML = "";
    state.recentActivities.forEach((a) => {
      const li = document.createElement("li");
      li.className = "activity-item";
      li.innerHTML = `
        <div class="activity-item__main">
          <span class="activity-item__title">${a.title}</span>
          <span class="activity-item__meta">${a.meta}</span>
        </div>
        <span class="activity-item__chip">${a.type}</span>
      `;
      activityListEl.appendChild(li);
    });
  }

  // Toast helper
  function showToast(message, type = "info") {
    if (!toastContainer) return;

    const toast = document.createElement("div");
    toast.className = `toast toast--${type}`;
    toast.innerHTML = `
      <span class="toast__dot"></span>
      <span>${message}</span>
    `;

    toastContainer.appendChild(toast);

    // Trigger animation
    requestAnimationFrame(() => {
      toast.classList.add("toast--visible");
    });

    const remove = () => {
      toast.classList.remove("toast--visible");
      setTimeout(() => {
        if (toast.parentNode) {
          toast.parentNode.removeChild(toast);
        }
      }, 160);
    };

    const timeoutId = setTimeout(remove, 2800);

    toast.addEventListener("click", () => {
      clearTimeout(timeoutId);
      remove();
    });
  }

  // Partners
  function renderPartners() {
    if (!partnerTotalEl || !partnerTableBody) return;

    const partners = state.partners || [];
    const totalPartners = partners.length;
    const totalListings = partners.reduce(
      (sum, p) => sum + (p.activeListings || 0),
      0
    );

    partnerTotalEl.textContent = totalPartners;
    partnerListingsEl.textContent = totalListings;

    // Static contribution number for demo
    const approxShare = 32.5;
    partnerRevenueEl.textContent = formatPercent(approxShare);

    partnerTableBody.innerHTML = "";

  const query = (state.ui.searchQuery || "").toLowerCase();

  partners
    .filter((p) => {
      if (!query) return true;
      const haystack = (p.name + " " + p.city + " " + p.tier).toLowerCase();
      return haystack.includes(query);
    })
    .forEach((p) => {
      const tr = document.createElement("tr");
      tr.innerHTML = `
        <td>${p.name}</td>
        <td>${p.city}</td>
        <td>${p.tier}</td>
        <td>${p.totalListings}</td>
        <td>${p.activeListings}</td>
        <td>
          <span class="status-badge ${p.status === "Active" ? "status-badge--active" : "status-badge--pending"}">
            ${p.status}
          </span>
        </td>
      `;
      partnerTableBody.appendChild(tr);
    });
  }
  
  // Charts
  function initCharts() {
    const { metrics } = state;

    const salesCanvas = document.getElementById("salesChart");
    if (salesCanvas) {
      const salesCtx = salesCanvas.getContext("2d");
      salesChartInstance = new Chart(salesCtx, {
        type: "line",
        data: {
          labels: [
            "Jan", "Feb", "Mar", "Apr", "May", "Jun",
            "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
          ],
          datasets: [
            {
              label: "Sales",
              data: metrics.monthlySales,
              borderColor: "#22c55e",
              backgroundColor: "rgba(34,197,94,0.18)",
              borderWidth: 2,
              tension: 0.35,
              fill: true,
              pointRadius: 3,
            },
          ],
        },
        options: chartOptions("₹"),
      });
    }

    const categoryCanvas = document.getElementById("categoryChart");
    if (categoryCanvas) {
      const categoryCtx = categoryCanvas.getContext("2d");
      categoryChartInstance = new Chart(categoryCtx, {
        type: "doughnut",
        data: {
          labels: ["Plots", "Lands", "Residential", "Partner"],
          datasets: [
            {
              data: [
                metrics.categoryCounts.plots,
                metrics.categoryCounts.lands,
                metrics.categoryCounts.residential,
                metrics.categoryCounts.partner,
              ],
              backgroundColor: ["#22c55e", "#60a5fa", "#f97316", "#a855f7"],
              borderWidth: 1,
              borderColor: "#020617",
            },
          ],
        },
        options: {
          plugins: {
            legend: {
              labels: {
                color: "#000000",
                font: { size: 11 },
              },
            },
          },
        },
      });
    }

    const yearlyCanvas = document.getElementById("yearlyChart");
    if (yearlyCanvas) {
      const yearlyCtx = yearlyCanvas.getContext("2d");
      yearlyChartInstance = new Chart(yearlyCtx, {
        type: "bar",
        data: {
          labels: metrics.yearlyLabels,
          datasets: [
            {
              label: "Yearly Sales",
              data: metrics.yearlySales,
              backgroundColor: "rgba(59,130,246,0.7)",
              borderColor: "#3b82f6",
              borderWidth: 1.5,
              borderRadius: 6,
            },
          ],
        },
        options: chartOptions("₹"),
      });
    }
  }
  
  function chartOptions(prefixSymbol) {
    return {
      responsive: true,
      plugins: {
        legend: {
          labels: {
            color: "#000000",
            font: { size: 11 },
          },
        },
        tooltip: {
          callbacks: {
            label(context) {
              const v = context.parsed.y;
              if (prefixSymbol === "₹") {
                return " " + formatCurrency(v);
              }
              return " " + v;
            },
          },
        },
      },
      scales: {
        x: {
          ticks: {
            color: "#9ca3af",
            font: { size: 10 },
          },
          grid: {
            display: false,
          },
        },
        y: {
          ticks: {
            color: "#9ca3af",
            font: { size: 10 },
          },
          grid: {
            color: "rgba(31,41,55,0.8)",
          },
        },
      },
    };
  }
  
  // Update sales chart dataset on filter change
  function updateSalesChart() {
    if (!chartFilterEl) return;
    const mode = chartFilterEl.value;
    const { metrics } = state;
  
    if (!salesChartInstance) return;
  
    if (mode === "sales") {
      salesChartInstance.data.datasets[0].label = "Sales";
      salesChartInstance.data.datasets[0].data = metrics.monthlySales;
    } else {
      salesChartInstance.data.datasets[0].label = "Bookings";
      salesChartInstance.data.datasets[0].data = metrics.monthlyBookings;
    }
    salesChartInstance.update();
  }
  
  // ----------------------
  // UI interactions
  // ----------------------
  
  // Category tabs
  categoryTabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      const category = tab.dataset.category;
      state.ui.activeCategory = category;
  
      categoryTabs.forEach((t) => t.classList.remove("tab--active"));
      tab.classList.add("tab--active");
  
      renderPropertyTable();
    });
  });

  // Global search (properties / partners depending on current page)
  if (globalSearchInput) {
    globalSearchInput.addEventListener("input", () => {
      state.ui.searchQuery = globalSearchInput.value.trim();

      if (propertiesTableBody) renderPropertyTable();
      if (partnerTableBody) renderPartners();
    });
  }

  // Property filters
  if (filterStatusEl) {
    filterStatusEl.addEventListener("change", () => {
      state.ui.filters.status = filterStatusEl.value;
      renderPropertyTable();
    });
  }

  function parsePriceInput(value) {
    const num = Number(value);
    return Number.isNaN(num) || value === "" ? null : num;
  }

  if (filterMinPriceEl) {
    filterMinPriceEl.addEventListener("input", () => {
      state.ui.filters.minPrice = parsePriceInput(filterMinPriceEl.value);
      renderPropertyTable();
    });
  }

  if (filterMaxPriceEl) {
    filterMaxPriceEl.addEventListener("input", () => {
      state.ui.filters.maxPrice = parsePriceInput(filterMaxPriceEl.value);
      renderPropertyTable();
    });
  }

  if (filterResetEl) {
    filterResetEl.addEventListener("click", () => {
      state.ui.filters.status = "all";
      state.ui.filters.minPrice = null;
      state.ui.filters.maxPrice = null;

      filterStatusEl.value = "all";
      filterMinPriceEl.value = "";
      filterMaxPriceEl.value = "";

      renderPropertyTable();
    });
  }

  // Export properties as CSV (based on current filters & search)
  if (btnExport) {
    btnExport.addEventListener("click", () => {
      // Only works on pages where the properties table exists
      if (!propertiesTableBody) {
        showToast(
          "Export works for the Properties section. Switch to Properties to export.",
          "info"
        );
        return;
      }

      const props = getFilteredPropertiesForCurrentCategory();
      if (!props.length) {
        showToast("No properties to export for the current filters and search.", "info");
        return;
      }

      const headers = [
        "ID",
        "Title",
        "Category",
        "Location",
        "Price",
        "Status",
        "UpdatedAt",
      ];

      const escapeCsv = (value) => {
        const str = String(value ?? "");
        return `"${str.replace(/"/g, '""')}"`;
      };

      const rows = props.map((p) =>
        [
          p.id,
          p.title,
          humanizeCategory(p.category),
          p.location,
          p.price,
          p.status,
          p.updatedAt,
        ]
          .map(escapeCsv)
          .join(",")
      );

      const csvContent = [headers.join(","), ...rows].join("\r\n");
      const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
      const url = URL.createObjectURL(blob);

      const link = document.createElement("a");
      link.href = url;
      link.download = "bhoomi-properties.csv";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);

      showToast(`Exported ${props.length} properties to CSV.`, "success");
    });
  }
  
  // Properties table actions (view / edit / delete)
  if (propertiesTableBody) {
    propertiesTableBody.addEventListener("click", (e) => {
      const btn = e.target.closest("button");
      if (!btn) return;
  
      const id = Number(btn.dataset.id);
      const action = btn.dataset.action;
      const prop = state.properties.find((p) => p.id === id);
      if (!prop) return;
  
      if (action === "view") {
        openDetailDrawer(prop);
      } else if (action === "edit") {
        openForm("edit", prop);
      } else if (action === "delete") {
        const confirmDelete = confirm(
          `Delete property "${prop.title}"? This cannot be undone in this session.`
        );
        if (confirmDelete) {
          state.properties = state.properties.filter((p) => p.id !== id);
          renderPropertyTable();
          showToast("Property deleted from this session.", "success");
        }
      }
    });
  }
  
  // Property form controls
  if (btnOpenForm && propertyForm) {
    btnOpenForm.addEventListener("click", () => openForm("add"));
  }
  if (btnCloseForm && propertyForm) {
    btnCloseForm.addEventListener("click", closeForm);
  }
  if (btnCancelForm && propertyForm) {
    btnCancelForm.addEventListener("click", closeForm);
  }
  if (btnResetForm && propertyForm) {
    btnResetForm.addEventListener("click", () => propertyForm.reset());
  }
  
  // Submit handler (add / edit)
  if (propertyForm) {
    propertyForm.addEventListener("submit", (e) => {
      e.preventDefault();
  
      const payload = {
        title: fieldTitle.value.trim(),
        category: fieldCategory.value,
        location: fieldLocation.value.trim(),
        price: Number(fieldPrice.value),
        status: fieldStatus.value,
        description: fieldDescription.value.trim(),
      };
  
      const isEditing = !!fieldId.value;
  
      if (isEditing) {
        const id = Number(fieldId.value);
        const existing = state.properties.find((p) => p.id === id);
        if (!existing) return;
        Object.assign(existing, payload, {
          updatedAt: new Date().toISOString().slice(0, 10),
        });
      } else {
        const newProp = {
          id: getNextPropertyId(),
          ...payload,
          updatedAt: new Date().toISOString().slice(0, 10),
        };
        state.properties.push(newProp);
      }
  
      renderPropertyTable();
      propertyForm.reset();
      closeForm();
  
      showToast(isEditing ? "Property updated." : "New property added.", "success");
    });
  }
  
  // Open form for add or edit
  function openForm(mode, prop) {
    if (mode === "add") {
      propertyFormTitle.textContent = "Add New Property";
      propertyForm.reset();
      fieldId.value = "";
      fieldCategory.value = state.ui.activeCategory;
    } else if (mode === "edit" && prop) {
      propertyFormTitle.textContent = "Edit Property";
      fieldId.value = prop.id;
      fieldTitle.value = prop.title;
      fieldCategory.value = prop.category;
      fieldLocation.value = prop.location;
      fieldPrice.value = prop.price;
      fieldStatus.value = prop.status;
      fieldDescription.value = prop.description || "";
    }
  
    formWrapper.classList.remove("property-form-wrapper--hidden");
    fieldTitle.focus();
  }
  
  function closeForm() {
    formWrapper.classList.add("property-form-wrapper--hidden");
    propertyForm.reset();
    fieldId.value = "";
  }

  // Detail drawer helpers
  function openDetailDrawer(prop) {
    if (!detailDrawer) return;

    detailTitleEl.textContent = prop.title;
    detailLocationEl.textContent = prop.location;
    detailCategoryEl.textContent = humanizeCategory(prop.category);
    detailStatusEl.textContent = prop.status;
    detailPriceEl.textContent = formatCurrency(prop.price);
    detailUpdatedEl.textContent = prop.updatedAt;
    detailDescriptionEl.textContent =
      prop.description && prop.description.trim().length > 0
        ? prop.description
        : "No description available for this property.";

    detailDrawer.classList.remove("detail-drawer--hidden");
    detailDrawer.setAttribute("aria-hidden", "false");
  }

  function closeDetailDrawer() {
    if (!detailDrawer) return;
    detailDrawer.classList.add("detail-drawer--hidden");
    detailDrawer.setAttribute("aria-hidden", "true");
  }
  
  // Sales chart filter
  if (chartFilterEl) {
    chartFilterEl.addEventListener("change", updateSalesChart);
  }
  
  // Reset demo (simple reload)
  if (btnResetDemo) {
    btnResetDemo.addEventListener("click", () => {
      showToast("Resetting demo data...", "info");
      setTimeout(() => {
        window.location.reload();
      }, 400);
    });
  }

  // Simple logout: send user back to login screen
  function wireLogoutButton(button) {
    if (!button) return;
    button.addEventListener("click", () => {
      window.location.href = "login.html";
    });
  }

  wireLogoutButton(btnLogout);
  wireLogoutButton(btnLogoutIcon);

  // Detail drawer events
  if (btnDetailClose) {
    btnDetailClose.addEventListener("click", closeDetailDrawer);
  }

  if (detailDrawer) {
    detailDrawer.addEventListener("click", (e) => {
      if (e.target === detailDrawer) {
        closeDetailDrawer();
      }
    });
  }

  if (btnDetailEdit) {
    btnDetailEdit.addEventListener("click", () => {
      const title = detailTitleEl.textContent;
      const match = state.properties.find((p) => p.title === title);
      if (match) {
        openForm("edit", match);
      }
      closeDetailDrawer();
    });
  }

  if (btnDetailMarkSold) {
    btnDetailMarkSold.addEventListener("click", () => {
      const title = detailTitleEl.textContent;
      const prop = state.properties.find((p) => p.title === title);
      if (!prop) return;
      prop.status = "Sold";
      prop.updatedAt = new Date().toISOString().slice(0, 10);
      renderPropertyTable();
      closeDetailDrawer();
      showToast("Property marked as Sold.", "success");
    });
  }
  
  // ----------------------
  // Initial render (per-page safe)
  // ----------------------
  document.addEventListener("DOMContentLoaded", () => {
    if (statTotalPropsEl && statTotalSalesEl) {
      renderStats();
    }
    if (countPlotsEl && countLandsEl) {
      renderCategoryCounts();
    }
    if (propertiesTableBody && propertiesTableMeta) {
      renderPropertyTable();
    }
    if (activityListEl) {
      renderActivities();
    }
    if (partnerTotalEl && partnerTableBody) {
      renderPartners();
    }
    if (
      document.getElementById("salesChart") ||
      document.getElementById("categoryChart") ||
      document.getElementById("yearlyChart")
    ) {
      initCharts();
      if (document.getElementById("salesChart")) {
        updateSalesChart();
      }
    }

    // Mobile sidebar toggle
    const sidebar = document.querySelector(".sidebar");
    const menuToggle = document.querySelector(".menu-toggle");
    if (sidebar && menuToggle) {
      menuToggle.addEventListener("click", () => {
        sidebar.classList.toggle("sidebar--open");
      });
    }
  });