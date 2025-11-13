from django.contrib import admin
from .models import Category, Game, Cart, CartItem, Order, OrderItem, Review


@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):
    list_display = ['name', 'slug', 'created_at']
    prepopulated_fields = {'slug': ('name',)}
    search_fields = ['name']
    readonly_fields = ['created_at']
    list_per_page = 20


class OrderItemInline(admin.TabularInline):
    model = OrderItem
    extra = 1
    fields = ['game', 'quantity', 'price']
    readonly_fields = []
    can_delete = True


@admin.register(Game)
class GameAdmin(admin.ModelAdmin):
    list_display = ['title', 'category', 'platform', 'price', 'in_stock', 'is_featured', 'created_at']
    list_filter = ['category', 'platform', 'in_stock', 'is_featured', 'is_new']
    prepopulated_fields = {'slug': ('title',)}
    search_fields = ['title', 'developer', 'publisher']
    readonly_fields = ['views', 'created_at', 'updated_at']
    list_editable = ['in_stock', 'is_featured']
    list_per_page = 20
    fieldsets = (
        ('Основная информация', {
            'fields': ('title', 'slug', 'category', 'platform')
        }),
        ('Описание', {
            'fields': ('description', 'short_description')
        }),
        ('Цены', {
            'fields': ('price', 'old_price', 'discount_percentage')
        }),
        ('Изображения', {
            'fields': ('cover_image', 'screenshot_1', 'screenshot_2', 'screenshot_3')
        }),
        ('Дополнительная информация', {
            'fields': ('developer', 'publisher', 'release_date', 'rating')
        }),
        ('Статус', {
            'fields': ('in_stock', 'is_featured', 'is_new')
        }),
        ('Статистика', {
            'fields': ('views', 'created_at', 'updated_at'),
            'classes': ('collapse',)
        }),
    )


@admin.register(Order)
class OrderAdmin(admin.ModelAdmin):
    list_display = ['order_number', 'user', 'status', 'total_price', 'created_at']
    list_filter = ['status', 'created_at']
    search_fields = ['order_number', 'email', 'first_name', 'last_name', 'user__username']
    readonly_fields = ['order_number', 'total_price', 'created_at', 'updated_at', 'paid_at']
    list_editable = ['status']
    list_per_page = 20
    inlines = [OrderItemInline]
    fieldsets = (
        ('Информация о заказе', {
            'fields': ('order_number', 'user', 'status', 'total_price')
        }),
        ('Информация о покупателе', {
            'fields': ('first_name', 'last_name', 'email', 'phone')
        }),
        ('Даты', {
            'fields': ('created_at', 'updated_at', 'paid_at'),
            'classes': ('collapse',)
        }),
    )


@admin.register(Cart)
class CartAdmin(admin.ModelAdmin):
    list_display = ['id', 'user', 'session_key', 'created_at', 'get_total_items']
    readonly_fields = ['created_at', 'updated_at', 'get_total_cost']
    search_fields = ['user__username', 'session_key']
    list_per_page = 20
    
    def get_total_items(self, obj):
        return obj.total_items
    get_total_items.short_description = 'Количество товаров'
    
    def get_total_cost(self, obj):
        return f"{obj.total_cost} руб."
    get_total_cost.short_description = 'Общая стоимость'


class CartItemInline(admin.TabularInline):
    model = CartItem
    extra = 1
    fields = ['game', 'quantity']
    can_delete = True


@admin.register(CartItem)
class CartItemAdmin(admin.ModelAdmin):
    list_display = ['cart', 'game', 'quantity', 'get_total_price', 'added_at']
    readonly_fields = ['added_at', 'get_total_price']
    search_fields = ['game__title', 'cart__user__username']
    list_filter = ['added_at']
    list_per_page = 20
    
    def get_total_price(self, obj):
        return f"{obj.total_price} руб."
    get_total_price.short_description = 'Общая цена'


@admin.register(Review)
class ReviewAdmin(admin.ModelAdmin):
    list_display = ['game', 'user', 'rating', 'created_at']
    list_filter = ['rating', 'created_at']
    search_fields = ['game__title', 'user__username', 'comment']
    readonly_fields = ['created_at', 'updated_at']
    list_per_page = 20
    fieldsets = (
        ('Основная информация', {
            'fields': ('game', 'user', 'rating')
        }),
        ('Отзыв', {
            'fields': ('comment',)
        }),
        ('Даты', {
            'fields': ('created_at', 'updated_at'),
            'classes': ('collapse',)
        }),
    )
