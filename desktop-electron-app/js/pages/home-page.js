class HomePage {
    constructor(api) {
        this.api = api;
    }

    async render() {
        console.log('🏠 Рендеринг главной страницы...');
        
        const page = document.createElement('div');
        page.className = 'home-page';
        page.id = 'homePage';

        page.innerHTML = `
            <!-- Hero Section with Slider -->
            <section class="hero-main-section">
                <div class="hero-container">
                    <!-- Left Side - Text Content -->
                    <div class="hero-content">
                        <h1 class="hero-title">Добро пожаловать в Xide</h1>
                        <p class="hero-description">Огромный маркетплейс видеоигр для всех платформ. Лучшие цены и мгновенная доставка!</p>
                        <div class="hero-buttons">
                            <button class="btn-hero-primary" id="goToCatalogBtn">
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                                    <path d="M3 3h14M3 7h14M3 11h14M3 15h14" stroke="currentColor" stroke-width="2"/>
                                </svg>
                                ПЕРЕЙТИ В КАТАЛОГ
                            </button>
                        </div>
                    </div>

                    <!-- Right Side - Game Slider -->
                    <div class="hero-slider-container">
                        <div class="hero-slider-mini" id="heroSliderMini">
                            <div class="slider-wrapper-mini" id="sliderWrapperMini">
                                <div class="loading-state-mini"><div class="spinner"></div></div>
                            </div>
                            <button class="slider-control-mini slider-prev-mini" id="sliderPrevMini">
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                                    <path d="M12 4L6 10L12 16" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                                </svg>
                            </button>
                            <button class="slider-control-mini slider-next-mini" id="sliderNextMini">
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                                    <path d="M8 4L14 10L8 16" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                                </svg>
                            </button>
                            <div class="slider-indicators-mini" id="sliderIndicatorsMini"></div>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Рекомендуемые игры -->
            <section class="section featured-section">
                <h2 class="section-title">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/>
                    </svg>
                    РЕКОМЕНДУЕМЫЕ ИГРЫ
                </h2>
                <div class="games-grid" id="featuredGames">
                    <div class="loading-state"><div class="spinner"></div><p>Загрузка...</p></div>
                </div>
            </section>

            <!-- Новинки -->
            <section class="section new-games-section">
                <h2 class="section-title">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M13 3L14.5 9L21 9L15.5 13L17 19L11 14.5L5 19L6.5 13L1 9L7.5 9L9 3H13Z"/>
                    </svg>
                    НОВИНКИ
                </h2>
                <div class="games-grid" id="newGames">
                    <div class="loading-state"><div class="spinner"></div><p>Загрузка...</p></div>
                </div>
            </section>

            <!-- Категории -->
            <section class="section categories-section">
                <h2 class="section-title">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                        <rect x="3" y="3" width="7" height="7"/>
                        <rect x="14" y="3" width="7" height="7"/>
                        <rect x="3" y="14" width="7" height="7"/>
                        <rect x="14" y="14" width="7" height="7"/>
                    </svg>
                    КАТЕГОРИИ
                </h2>
                <div class="categories-grid" id="categories">
                    <div class="loading-state"><div class="spinner"></div><p>Загрузка...</p></div>
                </div>
            </section>

            <!-- Преимущества -->
            <section class="section features-section">
                <div class="features-grid">
                    <div class="feature-card">
                        <div class="feature-icon">
                            <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                                <path d="M24 8L28 20L40 22L30 30L33 42L24 36L15 42L18 30L8 22L20 20L24 8Z" stroke="currentColor" stroke-width="3"/>
                            </svg>
                        </div>
                        <h3 class="feature-title">Мгновенная доставка</h3>
                        <p class="feature-desc">Получите ключ сразу после оплаты</p>
                    </div>
                    <div class="feature-card">
                        <div class="feature-icon">
                            <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                                <path d="M24 4L20 16L8 18L18 26L15 38L24 32L33 38L30 26L40 18L28 16L24 4Z" stroke="currentColor" stroke-width="3"/>
                                <circle cx="24" cy="24" r="18" stroke="currentColor" stroke-width="3"/>
                            </svg>
                        </div>
                        <h3 class="feature-title">Безопасность</h3>
                        <p class="feature-desc">Гарантия подлинности всех ключей</p>
                    </div>
                    <div class="feature-card">
                        <div class="feature-icon">
                            <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                                <circle cx="24" cy="24" r="20" stroke="currentColor" stroke-width="3"/>
                                <path d="M18 24L22 28L30 20" stroke="currentColor" stroke-width="3" stroke-linecap="round"/>
                            </svg>
                        </div>
                        <h3 class="feature-title">Выгодные цены</h3>
                        <p class="feature-desc">Скидки до 90% на популярные игры</p>
                    </div>
                    <div class="feature-card">
                        <div class="feature-icon">
                            <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                                <circle cx="24" cy="18" r="8" stroke="currentColor" stroke-width="3"/>
                                <path d="M8 42C8 42 12 28 24 28C36 28 40 42 40 42" stroke="currentColor" stroke-width="3" stroke-linecap="round"/>
                            </svg>
                        </div>
                        <h3 class="feature-title">Поддержка 24/7</h3>
                        <p class="feature-desc">Всегда готовы помочь</p>
                    </div>
                </div>
            </section>
            
            <!-- Категории -->
            <section class="categories-section">
                <div class="section-header">
                    <h2 class="section-title">Категории игр</h2>
                    <p class="section-subtitle">Выберите свой любимый жанр</p>
                </div>
                <div class="categories-grid" id="categories">
                    <div class="loading">Загрузка категорий...</div>
                </div>
            </section>
        `;

        setTimeout(() => this.loadContent(), 100);
        
        return page;
    }

    async loadContent() {
        console.log('📦 Загрузка контента главной страницы...');

        this.loadHeroSlider();
        
        this.loadFeaturedGames();

        this.loadNewGames();

        this.loadCategories();
        
        // Обработчик кнопки "Перейти в каталог"
        document.getElementById('goToCatalogBtn')?.addEventListener('click', () => {
            window.app.showPage('store');
        });
    }

    async loadHeroSlider() {
        console.log('🎬 Загрузка мини-слайдера...');
        const sliderWrapper = document.getElementById('sliderWrapperMini');
        const sliderIndicators = document.getElementById('sliderIndicatorsMini');
        
        if (!sliderWrapper) {
            console.error('❌ #sliderWrapperMini не найден!');
            return;
        }

        const result = await this.api.getFeaturedGames();

        if (result.success && result.data) {
            const games = result.data.results || result.data;
            const sliderGames = games.slice(0, 5);
            
            console.log(`   └─ Слайдов: ${sliderGames.length}`);
            
            sliderWrapper.innerHTML = '';
            sliderIndicators.innerHTML = '';
            
            sliderGames.forEach((game, index) => {
                const slide = this.renderMiniSlide(game, index);
                sliderWrapper.appendChild(slide);
                
                const indicator = document.createElement('button');
                indicator.className = `slider-indicator-mini ${index === 0 ? 'active' : ''}`;
                indicator.addEventListener('click', () => this.goToSlide(index));
                sliderIndicators.appendChild(indicator);
            });
            
            this.currentSlide = 0;
            this.totalSlides = sliderGames.length;
            this.initializeSlider();
        } else {
            sliderWrapper.innerHTML = `
                <div class="slider-slide active">
                    <div class="slide-content">
                        <h1>Добро пожаловать в Xide</h1>
                        <p>Огромный маркетплейс видеоигр для всех платформ</p>
                        <button class="btn-primary btn-lg" onclick="window.app.showPage('store')">
                            Перейти в каталог
                        </button>
                    </div>
                </div>
            `;
        }
    }

    renderMiniSlide(game, index) {
        const slide = document.createElement('div');
        slide.className = `slider-slide-mini ${index === 0 ? 'active' : ''}`;
        
        const imageUrl = game.cover_image 
            ? (game.cover_image.startsWith('http') ? game.cover_image : `${this.api.baseURL}${game.cover_image}`)
            : 'https://via.placeholder.com/400x500?text=Game';
        
        slide.style.backgroundImage = `url('${imageUrl}')`;
        
        slide.innerHTML = `
            <div class="mini-slide-overlay">
                ${game.is_new ? '<span class="mini-slide-badge">Новинка</span>' : ''}
            </div>
        `;
        
        slide.addEventListener('click', () => {
            window.app.showPage('game-detail', game.slug);
        });
        
        return slide;
    }

    renderSlide(game, index) {
        const slide = document.createElement('div');
        slide.className = `slider-slide ${index === 0 ? 'active' : ''}`;
        
        const imageUrl = game.cover_image 
            ? (game.cover_image.startsWith('http') ? game.cover_image : `${this.api.baseURL}${game.cover_image}`)
            : 'https://via.placeholder.com/1200x500?text=Game';
        
        slide.style.backgroundImage = `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.7)), url('${imageUrl}')`;
        
        const discount = game.discount_percentage > 0 
            ? `<span class="slide-discount">-${game.discount_percentage}%</span>` 
            : '';
        
        const oldPrice = game.discount_percentage > 0 
            ? `<span class="slide-old-price">${Math.floor(game.price)} ₽</span>` 
            : '';
        
        slide.innerHTML = `
            <div class="slide-content">
                <div class="slide-badge">${game.is_new ? 'Новинка' : 'Рекомендуем'}</div>
                <h1 class="slide-title">${game.title}</h1>
                <p class="slide-description">${game.short_description || game.description?.substring(0, 150) || 'Захватывающее игровое приключение'}</p>
                <div class="slide-price">
                    ${discount}
                    ${oldPrice}
                    <span class="slide-current-price">${Math.floor(game.final_price || game.price)} ₽</span>
                </div>
                <div class="slide-actions">
                    <button class="btn-primary btn-lg" onclick="window.app.showGameDetail('${game.slug}')">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <circle cx="10" cy="10" r="8" stroke="currentColor" stroke-width="2"/>
                            <path d="M10 6V10L13 13" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                        </svg>
                        Подробнее
                    </button>
                    <button class="btn-success btn-lg" onclick="window.addToCart(${game.id})">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <path d="M5 2L3 5V17C3 17.5523 3.44772 18 4 18H16C16.5523 18 17 17.5523 17 17V5L15 2H5Z" stroke="currentColor" stroke-width="2"/>
                            <path d="M3 5H17" stroke="currentColor" stroke-width="2"/>
                            <path d="M10 8V14M7 11H13" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                        </svg>
                        В корзину
                    </button>
                </div>
            </div>
        `;
        
        return slide;
    }

    initializeSlider() {
        const prevBtn = document.getElementById('sliderPrevMini');
        const nextBtn = document.getElementById('sliderNextMini');
        
        if (prevBtn) prevBtn.addEventListener('click', () => this.previousSlide());
        if (nextBtn) nextBtn.addEventListener('click', () => this.nextSlide());
        
        // Автоматическая прокрутка каждые 4 секунды
        if (this.sliderInterval) clearInterval(this.sliderInterval);
        this.sliderInterval = setInterval(() => this.nextSlide(), 4000);
        
        // Остановка автопрокрутки при наведении
        const slider = document.getElementById('heroSliderMini');
        if (slider) {
            slider.addEventListener('mouseenter', () => {
                if (this.sliderInterval) clearInterval(this.sliderInterval);
            });
            slider.addEventListener('mouseleave', () => {
                this.sliderInterval = setInterval(() => this.nextSlide(), 4000);
            });
        }
    }

    goToSlide(index) {
        const slides = document.querySelectorAll('.slider-slide-mini');
        const indicators = document.querySelectorAll('.slider-indicator-mini');
        
        slides.forEach((slide, i) => {
            slide.classList.toggle('active', i === index);
        });
        
        indicators.forEach((indicator, i) => {
            indicator.classList.toggle('active', i === index);
        });
        
        this.currentSlide = index;
    }

    nextSlide() {
        const nextIndex = (this.currentSlide + 1) % this.totalSlides;
        this.goToSlide(nextIndex);
    }

    previousSlide() {
        const prevIndex = (this.currentSlide - 1 + this.totalSlides) % this.totalSlides;
        this.goToSlide(prevIndex);
    }

    async loadFeaturedGames() {
        console.log('⭐ Загрузка рекомендуемых игр...');
        const container = document.getElementById('featuredGames');
        
        if (!container) {
            console.error('❌ #featuredGames не найден!');
            return;
        }

        const result = await this.api.getFeaturedGames();
        console.log('⭐ Результат рекомендуемых:', result);

        if (result.success && result.data) {
            const games = result.data.results || result.data;
            const limitedGames = games.slice(0, 4);
            
            console.log(`   └─ Найдено игр: ${limitedGames.length}`);
            
            container.innerHTML = '';
            limitedGames.forEach(game => {
                const card = new GameCard(game, this.api);
                container.appendChild(card.render());
            });
        } else {
            container.innerHTML = '<p class="empty-state">Не удалось загрузить игры</p>';
        }
    }

    async loadNewGames() {
        console.log('🆕 Загрузка новинок...');
        const container = document.getElementById('newGames');
        
        if (!container) {
            console.error('❌ #newGames не найден!');
            return;
        }

        const result = await this.api.getNewGames();
        console.log('🆕 Результат новинок:', result);

        if (result.success && result.data) {
            const games = result.data.results || result.data;
            const limitedGames = games.slice(0, 4);
            
            console.log(`   └─ Найдено игр: ${limitedGames.length}`);
            
            container.innerHTML = '';
            limitedGames.forEach(game => {
                const card = new GameCard(game, this.api);
                container.appendChild(card.render());
            });
        } else {
            container.innerHTML = '<p class="empty-state">Не удалось загрузить игры</p>';
        }
    }

    async loadCategories() {
        console.log('📂 Загрузка категорий...');
        const container = document.getElementById('categories');
        
        if (!container) {
            console.error('❌ #categories не найден!');
            return;
        }

        const result = await this.api.getCategories();
        console.log('📂 Результат категорий:', result);

        if (result.success && result.data) {
            const categories = Array.isArray(result.data) ? result.data : result.data.results || [];
            
            console.log(`   └─ Найдено категорий: ${categories.length}`);
            console.log('   └─ Категории:', categories);
            
            if (categories.length === 0) {
                container.innerHTML = '<p class="empty-state">Категории не найдены</p>';
                return;
            }
            
            container.innerHTML = '';
            categories.forEach((category, index) => {
                console.log(`      ${index + 1}. Рендер категории: ${category.name}`);
                const categoryCard = this.renderCategoryCard(category);
                container.appendChild(categoryCard);
            });
            console.log(`   ✅ Отрисовано ${categories.length} категорий`);
        } else {
            container.innerHTML = '<p class="empty-state">Не удалось загрузить категории</p>';
        }
    }

    renderCategoryCard(category) {
        const card = document.createElement('div');
        card.className = 'category-card';
        
        card.innerHTML = `
            <div class="category-icon">
                <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 20C10 15.5817 13.5817 12 18 12H30L36 20H62C66.4183 20 70 23.5817 70 28V60C70 64.4183 66.4183 68 62 68H18C13.5817 68 10 64.4183 10 60V20Z" fill="#66c0f4"/>
                </svg>
            </div>
            <h3 class="category-name">${category.name}</h3>
            <p class="category-desc">${category.description || 'Игры категории'}</p>
        `;

        card.addEventListener('click', () => {
            window.app.showCatalogWithCategory(category.slug);
        });

        return card;
    }
}

window.HomePage = HomePage;
