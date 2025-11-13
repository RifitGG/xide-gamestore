class ProfilePage {
    constructor(api) {
        this.api = api;
        this.userData = null;
        this.stats = null;
    }

    async render() {
        const page = document.createElement('div');
        page.className = 'profile-page';
        page.id = 'profilePage';

        if (!this.api.isAuthenticated) {
            page.innerHTML = `
                <div class="auth-required">
                    <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
                        <circle cx="32" cy="32" r="30" stroke="currentColor" stroke-width="4"/>
                        <circle cx="32" cy="24" r="10" stroke="currentColor" stroke-width="4"/>
                        <path d="M12 54C12 54 16 40 32 40C48 40 52 54 52 54" stroke="currentColor" stroke-width="4" stroke-linecap="round"/>
                    </svg>
                    <h2>Требуется авторизация</h2>
                    <p>Войдите в свой аккаунт</p>
                    <button class="btn-primary" onclick="window.app.showLoginPage()">Войти</button>
                </div>
            `;
            return page;
        }

        page.innerHTML = `
            <div class="profile-layout">
                <!-- Левая колонка - карточка профиля -->
                <aside class="profile-card">
                    <div class="profile-card-header">
                        <div class="profile-avatar-large">
                            <svg width="120" height="120" viewBox="0 0 120 120" fill="none">
                                <circle cx="60" cy="60" r="58" stroke="currentColor" stroke-width="4"/>
                                <circle cx="60" cy="48" r="18" stroke="currentColor" stroke-width="4"/>
                                <path d="M24 102C24 102 30 75 60 75C90 75 96 102 96 102" stroke="currentColor" stroke-width="4" stroke-linecap="round"/>
                            </svg>
                        </div>
                        <h2 class="profile-username" id="profileUsername">Загрузка...</h2>
                        <p class="profile-email" id="profileEmail"></p>
                    </div>

                    <!-- Уровень игрока -->
                    <div class="profile-level-section">
                        <div class="level-header">
                            <span class="level-label">Уровень игрока</span>
                            <span class="level-value" id="playerLevel">1</span>
                        </div>
                        <div class="level-progress">
                            <div class="level-progress-bar" id="levelProgressBar" style="width: 0%"></div>
                        </div>
                        <p class="level-info" id="levelInfo">0 / 10 заказов</p>
                    </div>

                    <!-- Статистика -->
                    <div class="profile-mini-stats">
                        <div class="mini-stat">
                            <div class="mini-stat-value" id="ordersCount">0</div>
                            <div class="mini-stat-label">Заказов</div>
                        </div>
                        <div class="mini-stat">
                            <div class="mini-stat-value" id="gamesCount">0</div>
                            <div class="mini-stat-label">Игр</div>
                        </div>
                    </div>

                    <!-- Дата регистрации -->
                    <p class="profile-member-since" id="memberSince">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <rect x="2" y="3" width="12" height="11" rx="2" stroke="currentColor" stroke-width="1.5"/>
                            <path d="M2 6H14" stroke="currentColor" stroke-width="1.5"/>
                            <path d="M5 1V4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
                            <path d="M11 1V4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
                        </svg>
                        Участник с...
                    </p>

                    <!-- Кнопки действий -->
                    <div class="profile-actions">
                        <button class="btn-secondary btn-block" id="settingsBtn">
                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                                <circle cx="9" cy="9" r="2" stroke="currentColor" stroke-width="1.5"/>
                                <path d="M9 1V3M9 15V17M3.34 3.34L4.76 4.76M13.24 13.24L14.66 14.66M1 9H3M15 9H17M3.34 14.66L4.76 13.24M13.24 4.76L14.66 3.34" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
                            </svg>
                            Настройки профиля
                        </button>
                        <button class="btn-outline-danger btn-block" id="logoutBtn">
                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                                <path d="M7 17H3C1.89543 17 1 16.1046 1 15V3C1 1.89543 1.89543 1 3 1H7" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
                                <path d="M13 13L17 9L13 5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M17 9H7" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
                            </svg>
                            Выйти
                        </button>
                    </div>
                </aside>

                <!-- Правая колонка - контент -->
                <main class="profile-content">
                    <h2 class="content-title">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2"/>
                            <circle cx="12" cy="10" r="3" stroke="currentColor" stroke-width="2"/>
                            <path d="M6 20C6 20 7 16 12 16C17 16 18 20 18 20" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                        </svg>
                        ЛИЧНЫЙ КАБИНЕТ
                    </h2>

                    <!-- История заказов -->
                    <section class="profile-section">
                        <h3 class="section-title">
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <rect x="3" y="5" width="14" height="12" rx="2" stroke="currentColor" stroke-width="1.5"/>
                                <path d="M7 9V13M10 9V13M13 9V13" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
                                <path d="M7 3L8 5M13 3L12 5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
                            </svg>
                            История заказов
                        </h3>
                        <div class="orders-grid" id="ordersGrid">
                            <div class="loading-state"><div class="spinner"></div><p>Загрузка...</p></div>
                        </div>
                    </section>

                    <!-- Библиотека игр -->
                    <section class="profile-section">
                        <h3 class="section-title">
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <rect x="2" y="4" width="16" height="12" rx="2" stroke="currentColor" stroke-width="1.5"/>
                                <path d="M6 1V4M14 1V4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
                                <path d="M6 10H10M6 13H8" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
                            </svg>
                            Моя библиотека игр
                            <button class="btn-text" onclick="window.app.showPage('library')">Смотреть все →</button>
                        </h3>
                        <div class="library-grid" id="libraryGrid">
                            <div class="loading-state"><div class="spinner"></div><p>Загрузка...</p></div>
                        </div>
                    </section>
                </main>
            </div>
        `;

        setTimeout(() => {
            document.querySelector('#logoutBtn')?.addEventListener('click', async () => {
                await this.api.logout();
                showNotification('Вы вышли из системы', 'info');
                window.app.showLoginPage();
            });

            document.querySelector('#settingsBtn')?.addEventListener('click', () => {
                this.showSettingsModal();
            });

            this.loadProfileData();
            this.loadOrders();
            this.loadLibrary();
        }, 100);

        return page;
    }

    async loadProfileData() {
        console.log('� Загрузка данных профиля...');

        const result = await this.api.request('/user/current/');
        console.log('👤 Данные пользователя:', result);

        if (result.success && result.data) {
            this.userData = result.data;
            this.stats = result.data.stats || {};

            const username = result.data.username || result.data.first_name || 'Пользователь';
            const email = result.data.email || '';
            
            document.querySelector('#profileUsername').textContent = username;
            document.querySelector('#profileEmail').textContent = email;

            const ordersCount = this.stats.total_orders || 0;
            const gamesCount = this.stats.games_owned || 0;
            
            document.querySelector('#ordersCount').textContent = ordersCount;
            document.querySelector('#gamesCount').textContent = gamesCount;

            const level = Math.floor(ordersCount / 5) + 1;
            const progress = ((ordersCount % 5) / 5) * 100;
            const nextLevelOrders = Math.ceil(ordersCount / 5) * 5;
            
            document.querySelector('#playerLevel').textContent = level;
            document.querySelector('#levelProgressBar').style.width = `${progress}%`;
            document.querySelector('#levelInfo').textContent = `${ordersCount} / ${nextLevelOrders} заказов`;

            if (result.data.date_joined) {
                const date = new Date(result.data.date_joined);
                document.querySelector('#memberSince').innerHTML = `
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <rect x="2" y="3" width="12" height="11" rx="2" stroke="currentColor" stroke-width="1.5"/>
                        <path d="M2 6H14" stroke="currentColor" stroke-width="1.5"/>
                        <path d="M5 1V4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
                        <path d="M11 1V4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
                    </svg>
                    Участник с ${date.toLocaleDateString('ru-RU')}
                `;
            }
        }
    }

    async loadOrders() {
        console.log('📋 Загрузка заказов...');
        const container = document.querySelector('#ordersGrid');
        
        if (!container) return;

        const result = await this.api.getOrders();
        console.log('� Результат заказов:', result);

        container.innerHTML = '';

        if (result.success && result.data) {
            const orders = (result.data.results || result.data).slice(0, 6);
            
            if (orders.length > 0) {
                orders.forEach(order => {
                    const orderCard = this.renderOrderCard(order);
                    container.appendChild(orderCard);
                });
            } else {
                container.innerHTML = `
                    <div class="empty-state-card">
                        <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
                            <rect x="12" y="16" width="40" height="36" rx="4" stroke="currentColor" stroke-width="3"/>
                            <path d="M20 28V40M28 28V40M36 28V40M44 28V40" stroke="currentColor" stroke-width="3" stroke-linecap="round"/>
                        </svg>
                        <h3>Заказов пока нет</h3>
                        <p>Начните с <a href="#" onclick="window.app.showPage('store'); return false;">каталога игр</a>!</p>
                    </div>
                `;
            }
        } else {
            container.innerHTML = '<p class="error-state">Ошибка загрузки заказов</p>';
        }
    }

    renderOrderCard(order) {
        const card = document.createElement('div');
        card.className = 'order-card';
        
        const statusClass = order.status.toLowerCase();
        const statusText = this.getStatusText(order.status);
        const date = new Date(order.created_at).toLocaleDateString('ru-RU', {
            day: 'numeric',
            month: 'long',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        });

        const gamesList = order.items?.slice(0, 3).map(item => 
            `<span class="order-game-item">• ${item.game.title} (${item.quantity} шт.)</span>`
        ).join('') || '';
        
        const moreGames = order.items && order.items.length > 3 
            ? `<span class="order-game-more">и ещё ${order.items.length - 3}...</span>`
            : '';

        card.innerHTML = `
            <div class="order-card-header">
                <div>
                    <h4 class="order-number">Заказ #${order.order_number}</h4>
                    <p class="order-date">${date}</p>
                </div>
                <span class="order-status status-${statusClass}">${statusText}</span>
            </div>
            <div class="order-games-list">
                ${gamesList}
                ${moreGames}
            </div>
            <div class="order-card-footer">
                <span class="order-total">${Math.floor(Number(order.total_price))} ₽</span>
                <button class="btn-sm btn-secondary">
                    Подробнее
                </button>
            </div>
        `;

        const detailBtn = card.querySelector('.btn-secondary');
        detailBtn.addEventListener('click', () => this.showOrderDetails(order));

        return card;
    }

    showOrderDetails(order) {
        const date = new Date(order.created_at).toLocaleDateString('ru-RU', {
            day: 'numeric',
            month: 'long',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        });

        const statusText = this.getStatusText(order.status);
        const statusClass = order.status.toLowerCase();

        const itemsList = order.items?.map(item => {
            const itemTotal = Number(item.price) * Number(item.quantity);
            return `
                <div class="receipt-item">
                    <div class="receipt-item-info">
                        <span class="receipt-item-name">${item.game.title}</span>
                        <span class="receipt-item-platform">${item.game.platform}</span>
                    </div>
                    <div class="receipt-item-price">
                        <span class="receipt-item-quantity">${item.quantity} × ${Math.floor(Number(item.price))} ₽</span>
                        <span class="receipt-item-total">${itemTotal.toFixed(2)} ₽</span>
                    </div>
                </div>
            `;
        }).join('') || '<p>Нет товаров</p>';

        const modal = new Modal('Детали заказа', `
            <div class="order-receipt">
                <div class="receipt-header">
                    <div class="receipt-order-info">
                        <h3>Заказ #${order.order_number}</h3>
                        <p class="receipt-date">📅 ${date}</p>
                        <span class="order-status status-${statusClass}">${statusText}</span>
                    </div>
                </div>

                <div class="receipt-divider"></div>

                <div class="receipt-customer">
                    <h4>👤 Информация о получателе</h4>
                    <div class="customer-details">
                        <p><strong>Имя:</strong> ${order.first_name || 'Не указано'} ${order.last_name || ''}</p>
                        <p><strong>Email:</strong> ${order.email || 'Не указан'}</p>
                        <p><strong>Телефон:</strong> ${order.phone || 'Не указан'}</p>
                    </div>
                </div>

                <div class="receipt-divider"></div>

                <div class="receipt-items">
                    <h4>🎮 Товары в заказе</h4>
                    ${itemsList}
                </div>

                <div class="receipt-divider"></div>

                <div class="receipt-summary">
                    <div class="receipt-row">
                        <span>Товаров:</span>
                        <span>${order.items?.length || 0} шт.</span>
                    </div>
                    <div class="receipt-row receipt-total">
                        <span><strong>Итого:</strong></span>
                        <span><strong>${Math.floor(Number(order.total_price))} ₽</strong></span>
                    </div>
                </div>

                <div class="receipt-footer">
                    <p>💡 Все игры доступны в вашей <a href="#" onclick="window.app.showPage('library'); this.closest('.modal').querySelector('.modal-close').click(); return false;">библиотеке</a></p>
                </div>
            </div>
        `, 'large');
        
        modal.show();
    }

    async loadLibrary() {
        console.log('📚 Загрузка библиотеки...');
        const container = document.querySelector('#libraryGrid');
        
        if (!container) return;

        const result = await this.api.getLibrary();
        console.log('📚 Результат библиотеки:', result);

        container.innerHTML = '';

        if (result.success && result.data) {
            const gamesData = result.data.games || result.data;
            const games = Array.isArray(gamesData) ? gamesData : [];
            const displayGames = games.slice(0, 6);
            
            if (displayGames.length > 0) {
                displayGames.forEach(game => {
                    const gameCard = this.renderLibraryGameCard(game);
                    container.appendChild(gameCard);
                });
            } else {
                container.innerHTML = `
                    <div class="empty-state-card">
                        <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
                            <rect x="12" y="16" width="40" height="36" rx="4" stroke="currentColor" stroke-width="3"/>
                            <circle cx="32" cy="32" r="8" stroke="currentColor" stroke-width="3"/>
                            <path d="M28 32H36M32 28V36" stroke="currentColor" stroke-width="3" stroke-linecap="round"/>
                        </svg>
                        <h3>Библиотека пуста</h3>
                        <p>Купите игры в <a href="#" onclick="window.app.showPage('store'); return false;">магазине</a></p>
                    </div>
                `;
            }
        } else {
            container.innerHTML = '<p class="error-state">Ошибка загрузки библиотеки</p>';
        }
    }

    renderLibraryGameCard(game) {
        const card = document.createElement('div');
        card.className = 'library-game-card';
        
        const imageUrl = game.cover_image?.startsWith('http') 
            ? game.cover_image 
            : `http://127.0.0.1:8000${game.cover_image}`;

        card.innerHTML = `
            <div class="library-game-image">
                <img src="${imageUrl}" alt="${game.title}" onerror="this.style.display='none'">
                <div class="library-game-overlay">
                    <button class="btn-play" onclick="showNotification('Запуск игры...', 'info')">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M8 5v14l11-7z"/>
                        </svg>
                        ИГРАТЬ
                    </button>
                </div>
            </div>
            <div class="library-game-info">
                <h4 class="library-game-title">${game.title}</h4>
                <p class="library-game-platform">${game.platform || 'PC'}</p>
            </div>
        `;

        card.addEventListener('click', () => {
            window.app.showGameDetail(game.slug);
        });

        return card;
    }

    getStatusText(status) {
        const statusMap = {
            'PENDING': 'Ожидает оплаты',
            'PAID': 'Оплачен',
            'PROCESSING': 'В обработке',
            'COMPLETED': 'Завершен',
            'CANCELLED': 'Отменен'
        };
        return statusMap[status] || status;
    }

    showSettingsModal() {
        if (!this.userData) {
            showNotification('Данные профиля не загружены', 'error');
            return;
        }

        const modal = new Modal('Настройки профиля', `
            <form id="profileSettingsForm" class="settings-form">
                <div class="form-group">
                    <label>Имя пользователя</label>
                    <input type="text" name="username" value="${this.userData.username}" disabled class="form-input-disabled">
                    <small class="form-hint">Имя пользователя нельзя изменить</small>
                </div>
                <div class="form-group">
                    <label>Имя *</label>
                    <input type="text" name="first_name" value="${this.userData.first_name || ''}" class="form-input" required>
                </div>
                <div class="form-group">
                    <label>Фамилия *</label>
                    <input type="text" name="last_name" value="${this.userData.last_name || ''}" class="form-input" required>
                </div>
                <div class="form-group">
                    <label>Email *</label>
                    <input type="email" name="email" value="${this.userData.email || ''}" class="form-input" required>
                </div>
                <div class="form-actions">
                    <button type="submit" class="btn-primary">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" style="margin-right: 8px;">
                            <path d="M16 6L7.5 14.5L4 11" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        Сохранить изменения
                    </button>
                    <button type="button" class="btn-secondary" onclick="this.closest('.modal').querySelector('.modal-close').click()">
                        Отмена
                    </button>
                </div>
            </form>
        `);

        modal.show();

        setTimeout(() => {
            const form = document.querySelector('#profileSettingsForm');
            if (form) {
                form.addEventListener('submit', async (e) => {
                    e.preventDefault();
                    await this.updateProfile(new FormData(form));
                    modal.close();
                });
            }
        }, 100);
    }

    async updateProfile(formData) {
        const data = {
            first_name: formData.get('first_name'),
            last_name: formData.get('last_name'),
            email: formData.get('email')
        };

        const result = await this.api.request('/user/update/', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        if (result.success) {
            showNotification('Профиль успешно обновлен', 'success');
            this.userData = result.data;
            
            // Обновляем отображение
            const displayName = result.data.first_name || result.data.username;
            document.querySelector('#profileUsername').textContent = displayName;
            document.querySelector('#profileEmail').textContent = result.data.email;
        } else {
            showNotification(result.error || 'Ошибка обновления профиля', 'error');
        }
    }
}

window.ProfilePage = ProfilePage;
