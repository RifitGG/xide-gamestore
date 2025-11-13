class LibraryPage {
    constructor(api) {
        this.api = api;
        this.games = [];
        this.filteredGames = [];
        this.currentPlatform = 'all';
        this.currentSort = 'recent';
    }

    async render() {
        const page = document.createElement('div');
        page.className = 'library-page';
        page.id = 'libraryPage';

        if (!this.api.isAuthenticated) {
            page.innerHTML = `
                <div class="auth-required">
                    <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
                        <circle cx="40" cy="40" r="30" stroke="currentColor" stroke-width="4"/>
                        <circle cx="40" cy="30" r="10" stroke="currentColor" stroke-width="4"/>
                        <path d="M15 65C15 65 20 50 40 50C60 50 65 65 65 65" stroke="currentColor" stroke-width="4" stroke-linecap="round"/>
                    </svg>
                    <h2>Требуется авторизация</h2>
                    <p>Войдите в свой аккаунт, чтобы увидеть библиотеку игр</p>
                    <button class="btn-primary" onclick="window.app.showLoginPage()">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <path d="M10 3V17M3 10H17" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                        </svg>
                        Войти
                    </button>
                </div>
            `;
            return page;
        }

        page.innerHTML = `
            <div class="page-header">
                <div class="header-content">
                    <div class="header-left">
                        <h1 class="page-title">📚 БИБЛИОТЕКА</h1>
                        <p class="page-subtitle" id="libraryCount">Загрузка...</p>
                    </div>
                    <div class="header-right">
                        <div class="library-toolbar">
                            <div class="filter-group">
                                <label class="filter-label">Платформа:</label>
                                <select class="filter-select" id="platformFilter">
                                    <option value="all">Все платформы</option>
                                    <option value="PC">PC</option>
                                    <option value="PS5">PlayStation 5</option>
                                    <option value="PS4">PlayStation 4</option>
                                    <option value="XBOX_SERIES">Xbox Series X/S</option>
                                    <option value="XBOX_ONE">Xbox One</option>
                                    <option value="SWITCH">Nintendo Switch</option>
                                    <option value="MULTI">Мультиплатформа</option>
                                </select>
                            </div>
                            <div class="filter-group">
                                <label class="filter-label">Сортировка:</label>
                                <select class="filter-select" id="sortFilter">
                                    <option value="recent">Недавно добавленные</option>
                                    <option value="name_asc">По названию (А-Я)</option>
                                    <option value="name_desc">По названию (Я-А)</option>
                                    <option value="price_desc">Сначала дорогие</option>
                                    <option value="price_asc">Сначала дешевые</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="library-content" id="libraryContent">
                <div class="loading-state">
                    <div class="spinner"></div>
                    <p>Загрузка библиотеки...</p>
                </div>
            </div>
        `;

        setTimeout(() => {
            this.setupFilters();
            this.loadLibrary();
        }, 100);
        
        return page;
    }

    setupFilters() {
        const platformFilter = document.querySelector('#platformFilter');
        const sortFilter = document.querySelector('#sortFilter');

        if (platformFilter) {
            platformFilter.addEventListener('change', (e) => {
                this.currentPlatform = e.target.value;
                this.applyFilters();
            });
        }

        if (sortFilter) {
            sortFilter.addEventListener('change', (e) => {
                this.currentSort = e.target.value;
                this.applyFilters();
            });
        }
    }

    applyFilters() {
        this.filteredGames = this.currentPlatform === 'all'
            ? [...this.games]
            : this.games.filter(g => g.platform === this.currentPlatform);

        // Сортировка
        switch (this.currentSort) {
            case 'name_asc':
                this.filteredGames.sort((a, b) => a.title.localeCompare(b.title));
                break;
            case 'name_desc':
                this.filteredGames.sort((a, b) => b.title.localeCompare(a.title));
                break;
            case 'price_desc':
                this.filteredGames.sort((a, b) => b.price - a.price);
                break;
            case 'price_asc':
                this.filteredGames.sort((a, b) => a.price - b.price);
                break;
            case 'recent':
            default:
                break;
        }

        this.renderGames();
    }

    async loadLibrary() {
        console.log('📚 Загрузка библиотеки...');
        const content = document.querySelector('#libraryContent');
        
        if (!content) {
            console.error('❌ #libraryContent не найден!');
            return;
        }
        
        const result = await this.api.getLibrary();
        console.log('📚 Результат библиотеки:', result);
        
        if (result.success && result.data) {
            const gamesData = result.data.games || result.data;
            this.games = Array.isArray(gamesData) ? gamesData : [];
            console.log(`   └─ Найдено игр в библиотеке: ${this.games.length}`);

            const countEl = document.querySelector('#libraryCount');
            if (countEl) {
                countEl.textContent = `${this.games.length} ${this.getGameWord(this.games.length)} в библиотеке`;
            }

            this.applyFilters();
        } else {
            console.error('❌ Ошибка загрузки библиотеки');
            content.innerHTML = `
                <div class="error-state-large">
                    <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
                        <circle cx="40" cy="40" r="30" stroke="currentColor" stroke-width="4"/>
                        <path d="M40 25V45" stroke="currentColor" stroke-width="4" stroke-linecap="round"/>
                        <circle cx="40" cy="55" r="3" fill="currentColor"/>
                    </svg>
                    <h3>Ошибка загрузки библиотеки</h3>
                    <p>${result.error || 'Не удалось загрузить библиотеку'}</p>
                    <button class="btn-secondary" onclick="window.app.showPage('library')">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <path d="M4 10H16M10 4V16" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                        </svg>
                        Повторить
                    </button>
                </div>
            `;
        }
    }

    renderGames() {
        console.log('🎮 Рендер игр библиотеки...');
        console.log('   └─ filteredGames.length:', this.filteredGames.length);
        
        const content = document.querySelector('#libraryContent');
        if (!content) {
            console.error('❌ #libraryContent не найден!');
            return;
        }

        if (this.filteredGames.length === 0) {
            console.log('   └─ Нет игр для отображения');
            content.innerHTML = `
                <div class="empty-state-large">
                    <svg width="120" height="120" viewBox="0 0 120 120" fill="none">
                        <rect x="20" y="30" width="80" height="60" rx="4" stroke="currentColor" stroke-width="4"/>
                        <circle cx="40" cy="55" r="8" stroke="currentColor" stroke-width="3"/>
                        <circle cx="80" cy="55" r="8" stroke="currentColor" stroke-width="3"/>
                        <path d="M50 70H70" stroke="currentColor" stroke-width="4" stroke-linecap="round"/>
                    </svg>
                    <h3>${this.currentPlatform === 'all' ? 'Библиотека пуста' : 'Игр не найдено'}</h3>
                    <p>${this.currentPlatform === 'all' 
                        ? 'Вы еще не купили ни одной игры' 
                        : `Нет игр для платформы ${this.currentPlatform}`}</p>
                    <button class="btn-primary" onclick="window.app.showPage('store')">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <path d="M3 10H17M17 10L11 4M17 10L11 16" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                        </svg>
                        Перейти в магазин
                    </button>
                </div>
            `;
            return;
        }

        console.log('   └─ Отрисовка карточек...');
        content.innerHTML = '';
        const grid = document.createElement('div');
        grid.className = 'library-grid';

        this.filteredGames.forEach(game => {
            grid.appendChild(this.renderLibraryGameCard(game));
        });

        content.appendChild(grid);
    }

    renderLibraryGameCard(game) {
        const card = document.createElement('div');
        card.className = 'library-game-card';

        const imageUrl = game.cover_image?.startsWith('http') 
            ? game.cover_image 
            : `http://127.0.0.1:8000${game.cover_image}`;

        card.innerHTML = `
            <div class="library-game-cover">
                <img src="${imageUrl}" alt="${game.title}" loading="lazy">
                <div class="library-game-overlay">
                    <button class="btn-play">
                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                            <circle cx="16" cy="16" r="15" stroke="currentColor" stroke-width="2"/>
                            <path d="M12 9L23 16L12 23V9Z" fill="currentColor"/>
                        </svg>
                        <span>ИГРАТЬ</span>
                    </button>
                    <button class="btn-library-detail" title="Подробнее">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <circle cx="10" cy="10" r="8" stroke="currentColor" stroke-width="2"/>
                            <path d="M10 10V14M10 6V7" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                        </svg>
                    </button>
                </div>
            </div>
            <div class="library-game-info">
                <h3 class="library-game-title">${game.title}</h3>
                <div class="library-game-meta">
                    <span class="library-game-platform">
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                            <rect x="2" y="3" width="10" height="8" rx="1" stroke="currentColor" stroke-width="1.5"/>
                            <path d="M2 5H12" stroke="currentColor" stroke-width="1.5"/>
                        </svg>
                        ${game.platform}
                    </span>
                    ${game.category ? `
                        <span class="library-game-category">
                            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                                <path d="M2 7L7 2L12 7" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
                                <path d="M3 7V11H11V7" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
                            </svg>
                            ${game.category.name}
                        </span>
                    ` : ''}
                </div>
            </div>
        `;

        const playBtn = card.querySelector('.btn-play');
        playBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            showNotification(`Запуск игры "${game.title}"...`, 'info');
        });

        const detailBtn = card.querySelector('.btn-library-detail');
        detailBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            window.app.showGameDetail(game.slug);
        });

        card.addEventListener('click', () => {
            window.app.showGameDetail(game.slug);
        });

        return card;
    }

    getGameWord(count) {
        const lastDigit = count % 10;
        const lastTwoDigits = count % 100;

        if (lastTwoDigits >= 11 && lastTwoDigits <= 19) {
            return 'игр';
        }
        if (lastDigit === 1) {
            return 'игра';
        }
        if (lastDigit >= 2 && lastDigit <= 4) {
            return 'игры';
        }
        return 'игр';
    }
}

window.LibraryPage = LibraryPage;
