// Create overlay
const overlay = document.createElement('div');
overlay.className = 'filter-overlay';
document.body.appendChild(overlay);

// Add close button to filter sidebar
const filterSidebar = document.querySelector('.filter-sidebar');
const closeBtn = document.createElement('button');
closeBtn.className = 'filter-close';
closeBtn.innerHTML = '<i class="fas fa-times"></i>';
filterSidebar.insertBefore(closeBtn, filterSidebar.firstChild);

// Toggle functions
mobileFilterBtn.addEventListener('click', () => {
    filterSidebar.classList.add('active');
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
});

closeBtn.addEventListener('click', closeFilters);
overlay.addEventListener('click', closeFilters);

function closeFilters() {
    filterSidebar.classList.remove('active');
    overlay.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Close filters with Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeFilters();
});

// Update filter count for mobile view
function updateMobileFilterButton(count) {
    if (count > 0) {
        mobileFilterBtn.innerHTML = `<i class="fas fa-filter"></i><span class="badge">${count}</span>`;
        mobileFilterBtn.style.background = '#ff6b6b';
    } else {
        mobileFilterBtn.innerHTML = '<i class="fas fa-filter"></i>';
        mobileFilterBtn.style.background = '#0066cc';
    }
}

// Add some CSS for the badge on mobile button
const style = document.createElement('style');
style.textContent = `
    .mobile-filter-toggle .badge {
        position: absolute;
        top: -5px;
        right: -5px;
        background: #ff6b6b;
        color: white;
        border-radius: 50%;
        width: 20px;
        height: 20px;
        font-size: 0.7rem;
        display: flex;
        align-items: center;
        justify-content: center;
    }
`;
document.head.appendChild(style);

// Initialize
updateMobileFilterButton(0);