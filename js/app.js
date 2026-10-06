/**
 * LG Refrigerator Lineup - Interactive App Logic
 * Mở trực tiếp trang web sản phẩm khi click/chạm và hỗ trợ quay lại trang chính bằng nút Back trình duyệt
 */

document.addEventListener('DOMContentLoaded', () => {
  // Clear any legacy hash from URL
  if (window.location.hash) {
    try {
      history.replaceState(null, '', window.location.pathname + window.location.search);
    } catch (e) {}
  }

  // State
  let currentFilter = 'all';
  let searchQuery = '';
  let currentViewMode = 'presentation'; // 'presentation' | 'grid'

  // DOM Elements
  const presentationContainer = document.getElementById('presentationContainer');
  const gridContainer = document.getElementById('gridContainer');
  const searchInput = document.getElementById('searchInput');
  const searchClear = document.getElementById('searchClear');
  const categoryPillsContainer = document.getElementById('categoryPills');
  const totalCountEl = document.getElementById('totalCount');
  const visibleCountEl = document.getElementById('visibleCount');
  const noResultsEl = document.getElementById('noResults');
  const btnFloatingTop = document.getElementById('btnFloatingTop');
  const btnViewPresentation = document.getElementById('btnViewPresentation');
  const btnViewGrid = document.getElementById('btnViewGrid');

  // Product Viewer Modal Elements
  const viewerModal = document.getElementById('productViewerModal');
  const btnBackMain = document.getElementById('btnBackMain');
  const btnViewerClose = document.getElementById('btnViewerClose');
  const viewerModelBadge = document.getElementById('viewerModelBadge');
  const viewerCategoryTag = document.getElementById('viewerCategoryTag');
  const viewerNoticeUrl = document.getElementById('viewerNoticeUrl');
  const btnViewerOpenExternal = document.getElementById('btnViewerOpenExternal');
  const btnViewerRefresh = document.getElementById('btnViewerRefresh');
  const viewerIframe = document.getElementById('viewerIframe');
  const viewerLoading = document.getElementById('viewerLoading');

  // Total products counter
  if (totalCountEl) totalCountEl.textContent = PRODUCTS.length;

  // ==========================================
  // Render Category Filter Pills
  // ==========================================
  function initFilterPills() {
    const hotCount = PRODUCTS.filter(p => p.badge === 'HOT').length;
    const newCount = PRODUCTS.filter(p => p.badge === 'NEW 2026').length;

    const pills = [
      { id: 'all', label: 'Tất cả', count: PRODUCTS.length },
      { id: 'badge_hot', label: '🔥 HOT', count: hotCount, isBadge: 'hot' },
      { id: 'badge_new', label: '✨ NEW 2026', count: newCount, isBadge: 'new' },
      { id: 'french_door', label: 'French Door', count: PRODUCTS.filter(p => p.type === 'French Door').length },
      { id: 'side_by_side', label: 'Side-by-Side', count: PRODUCTS.filter(p => p.type === 'Side-by-Side').length },
      { id: 'bottom_freezer', label: 'Ngăn đá dưới', count: PRODUCTS.filter(p => p.type === 'Ngăn đá dưới').length },
      { id: 'top_freezer', label: 'Ngăn đá trên', count: PRODUCTS.filter(p => p.type === 'Ngăn đá trên').length },
      { id: 'freezer', label: 'Tủ đông', count: PRODUCTS.filter(p => p.type === 'Tủ đông').length },
    ];

    categoryPillsContainer.innerHTML = pills.map(pill => {
      let badgeClass = '';
      if (pill.isBadge === 'hot') badgeClass = 'badge-pill-hot';
      if (pill.isBadge === 'new') badgeClass = 'badge-pill-new';

      return `
        <button class="pill-btn ${pill.id === currentFilter ? 'active' : ''} ${badgeClass}" 
                data-filter="${pill.id}">
          <span>${pill.label}</span>
          <span class="pill-count">${pill.count}</span>
        </button>
      `;
    }).join('');

    // Attach click events
    categoryPillsContainer.querySelectorAll('.pill-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        categoryPillsContainer.querySelectorAll('.pill-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        currentFilter = btn.dataset.filter;
        renderAll();
      });
    });
  }

  // ==========================================
  // Filter Logic
  // ==========================================
  function getFilteredProducts() {
    return PRODUCTS.filter(product => {
      // 1. Category / Badge Filter
      let matchesFilter = true;
      if (currentFilter === 'badge_hot') {
        matchesFilter = product.badge === 'HOT';
      } else if (currentFilter === 'badge_new') {
        matchesFilter = product.badge === 'NEW 2026';
      } else if (currentFilter === 'french_door') {
        matchesFilter = product.type === 'French Door';
      } else if (currentFilter === 'side_by_side') {
        matchesFilter = product.type === 'Side-by-Side';
      } else if (currentFilter === 'bottom_freezer') {
        matchesFilter = product.type === 'Ngăn đá dưới';
      } else if (currentFilter === 'top_freezer') {
        matchesFilter = product.type === 'Ngăn đá trên';
      } else if (currentFilter === 'freezer') {
        matchesFilter = product.type === 'Tủ đông';
      }

      // 2. Search Query Filter
      let matchesSearch = true;
      if (searchQuery.trim().length > 0) {
        const query = searchQuery.toLowerCase().trim();
        const model = (product.model || '').toLowerCase();
        const name = (product.name || '').toLowerCase();
        const desc = (product.desc || '').toLowerCase();
        const type = (product.type || '').toLowerCase();
        matchesSearch = model.includes(query) || name.includes(query) || desc.includes(query) || type.includes(query);
      }

      return matchesFilter && matchesSearch;
    });
  }

  // ==========================================
  // Render Presentation Layout (Slide Mode - 2 Columns)
  // ==========================================
  function renderPresentationView(filteredProducts) {
    const col1Categories = CATEGORIES.filter(c => c.column === 1);
    const col2Categories = CATEGORIES.filter(c => c.column === 2);

    function renderColumn(categories) {
      return categories.map(cat => {
        const catProducts = filteredProducts.filter(p => p.categoryId === cat.id);
        if (catProducts.length === 0) return '';

        return `
          <div class="catalog-section" data-category="${cat.id}">
            <div class="section-header">
              <div class="section-title">
                <span class="section-indicator"></span>
                <span>${cat.title}</span>
              </div>
              <span class="section-count">${catProducts.length} model</span>
            </div>
            <div class="product-slide-row">
              ${catProducts.map(renderSlideCard).join('')}
            </div>
          </div>
        `;
      }).join('');
    }

    const col1Html = renderColumn(col1Categories);
    const col2Html = renderColumn(col2Categories);

    if (!col1Html && !col2Html) {
      presentationContainer.innerHTML = '';
      noResultsEl.classList.add('show');
    } else {
      noResultsEl.classList.remove('show');
      presentationContainer.innerHTML = `
        <div class="catalog-column">${col1Html}</div>
        <div class="catalog-column">${col2Html}</div>
      `;
    }
  }

  // ==========================================
  // Render Single Card (Slide Mode)
  // ==========================================
  function renderSlideCard(product) {
    const badgeHtml = product.badgeImg ? `
      <div class="card-badge">
        <img class="badge-img" src="${product.badgeImg}" alt="${product.badge}" loading="lazy" />
      </div>
    ` : '';

    return `
      <a href="${product.link}" 
         class="product-card-slide ${product.highlight ? 'highlight' : ''}" 
         data-id="${product.id}" 
         title="Chạm để xem ${product.model} (Có nút Quay lại trang chính)">
        <div class="card-image-wrap">
          ${badgeHtml}
          <img class="product-img" src="${product.image}" alt="${product.model}" loading="lazy" />
        </div>
        <div class="card-model-box">
          <span class="card-model-name">${product.model}</span>
          <span class="card-hint">Xem chi tiết ➔</span>
        </div>
      </a>
    `;
  }

  // ==========================================
  // Render Modern Grid Layout
  // ==========================================
  function renderGridView(filteredProducts) {
    if (filteredProducts.length === 0) {
      gridContainer.innerHTML = '';
      noResultsEl.classList.add('show');
      return;
    }

    noResultsEl.classList.remove('show');
    gridContainer.innerHTML = filteredProducts.map(product => {
      const badgeHtml = product.badgeImg ? `
        <div class="grid-badge-wrap">
          <img class="badge-img" src="${product.badgeImg}" alt="${product.badge}" loading="lazy" />
        </div>
      ` : '';

      return `
        <a href="${product.link}" 
           class="product-card-grid" 
           data-id="${product.id}"
           title="Chạm để xem ${product.model} (Có nút Quay lại trang chính)">
          <div class="grid-image-wrap">
            ${badgeHtml}
            <img class="grid-product-img" src="${product.image}" alt="${product.model}" loading="lazy" />
          </div>
          <div class="grid-category-tag">${product.type}</div>
          <h3 class="grid-model-name">${product.model}</h3>
          <p class="grid-desc">${product.desc}</p>
          <div class="grid-card-footer">
            <span class="btn-card-action">
              <span>Xem trực tiếp sản phẩm</span>
              <span>➔</span>
            </span>
          </div>
        </a>
      `;
    }).join('');
  }

  // ==========================================
  // Render Master Controller
  // ==========================================
  function renderAll() {
    const filtered = getFilteredProducts();
    if (visibleCountEl) visibleCountEl.textContent = filtered.length;

    if (currentViewMode === 'presentation') {
      presentationContainer.style.display = 'grid';
      gridContainer.style.display = 'none';
      renderPresentationView(filtered);
    } else {
      presentationContainer.style.display = 'none';
      gridContainer.style.display = 'grid';
      renderGridView(filtered);
    }
  }

  // ==========================================
  // Search Input Handlers
  // ==========================================
  searchInput.addEventListener('input', (e) => {
    searchQuery = e.target.value;
    if (searchQuery.length > 0) {
      searchClear.style.display = 'block';
    } else {
      searchClear.style.display = 'none';
    }
    renderAll();
  });

  searchClear.addEventListener('click', () => {
    searchInput.value = '';
    searchQuery = '';
    searchClear.style.display = 'none';
    searchInput.focus();
    renderAll();
  });

  // Press '/' to search
  document.addEventListener('keydown', (e) => {
    if (e.key === '/' && document.activeElement !== searchInput) {
      e.preventDefault();
      searchInput.focus();
    }
  });

  // ==========================================
  // View Mode Toggle (Slide / Grid)
  // ==========================================
  btnViewPresentation.addEventListener('click', () => {
    btnViewPresentation.classList.add('active');
    btnViewGrid.classList.remove('active');
    currentViewMode = 'presentation';
    renderAll();
  });

  btnViewGrid.addEventListener('click', () => {
    btnViewGrid.classList.add('active');
    btnViewPresentation.classList.remove('active');
    currentViewMode = 'grid';
    renderAll();
  });

  // ==========================================
  // Floating Back to Top Button
  // ==========================================
  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      btnFloatingTop.classList.add('visible');
    } else {
      btnFloatingTop.classList.remove('visible');
    }
  }, { passive: true });

  btnFloatingTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // ==========================================
  // Product Viewer Fullscreen Modal Logic
  // ==========================================
  let activeProduct = null;

  function openProduct(product) {
    if (!product) return;
    activeProduct = product;

    // Set meta information
    viewerModelBadge.textContent = product.model;
    viewerCategoryTag.textContent = `${product.type} • LG Electronics Vietnam`;
    viewerNoticeUrl.textContent = product.link;
    viewerNoticeUrl.href = product.link;
    btnViewerOpenExternal.href = product.link;

    // Show loading spinner
    viewerLoading.classList.remove('hidden');

    // Load official LG product page inside iframe
    viewerIframe.src = product.link;

    // Hide spinner once loaded
    viewerIframe.onload = () => {
      viewerLoading.classList.add('hidden');
    };
    // Failsafe to ensure spinner hides
    setTimeout(() => {
      viewerLoading.classList.add('hidden');
    }, 2000);

    // Show viewer modal
    viewerModal.classList.add('active');
    document.body.style.overflow = 'hidden';

    // Push browser history state for native Back button
    try {
      history.pushState({ modalOpen: true, productId: product.id }, '', `#${product.id}`);
    } catch (e) {}
  }

  function closeProduct(fromPopState = false) {
    if (!viewerModal.classList.contains('active')) return;

    viewerModal.classList.remove('active');
    document.body.style.overflow = '';
    viewerIframe.src = 'about:blank';
    activeProduct = null;

    if (!fromPopState) {
      try {
        if (window.location.hash) {
          history.replaceState(null, '', window.location.pathname + window.location.search);
        }
      } catch (e) {}
    }
  }

  // Card click delegation for both Presentation and Grid views
  function handleCardClick(e) {
    const card = e.target.closest('.product-card-slide, .product-card-grid');
    if (!card) return;

    // Allow user to open in new tab with Ctrl/Cmd key or middle click
    if (e.ctrlKey || e.metaKey || e.button === 1) return;

    e.preventDefault();
    const productId = card.dataset.id;
    const product = PRODUCTS.find(p => p.id === productId);
    if (product) {
      openProduct(product);
    }
  }

  presentationContainer.addEventListener('click', handleCardClick);
  gridContainer.addEventListener('click', handleCardClick);

  // Close & Back Handlers
  btnBackMain.addEventListener('click', () => closeProduct(false));
  btnViewerClose.addEventListener('click', () => closeProduct(false));

  btnViewerRefresh.addEventListener('click', () => {
    if (activeProduct) {
      viewerLoading.classList.remove('hidden');
      viewerIframe.src = activeProduct.link;
    }
  });

  // Native Browser Back Button & History Navigation Support
  window.addEventListener('popstate', (e) => {
    if (viewerModal.classList.contains('active')) {
      closeProduct(true);
    }
  });

  // ESC Key Support
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && viewerModal.classList.contains('active')) {
      closeProduct(false);
    }
  });

  // Initial check if opened with hash (e.g. #s60bg)
  function checkInitialHash() {
    if (window.location.hash) {
      const hashId = window.location.hash.replace('#', '').trim().toLowerCase();
      const foundProduct = PRODUCTS.find(p => p.id.toLowerCase() === hashId);
      if (foundProduct) {
        openProduct(foundProduct);
      }
    }
  }

  // ==========================================
  // Initial Boot
  // ==========================================
  initFilterPills();
  renderAll();
  checkInitialHash();
});
