# Директива Permissions и Composable usePermission

## Директива permissionsDirective

### Описание

Директива `permissionsDirective` используется для условного отображения элементов DOM на основе разрешений пользователя. Если у пользователя нет необходимых прав, элемент будет полностью удален из DOM.

### Установка

Для использования директивы необходимо зарегистрировать её в вашем приложении Vue.

```typescript
// main.ts
import { createApp } from 'vue'
import App from './App.vue'
import { permissionsDirective } from 'gts-ui'

const app = createApp(App)

// Регистрация глобальной директивы
app.directive('permissions', permissionsDirective)

app.mount('#app')
```

### Использование

Директива применяется к HTML элементам с помощью префикса `v-permissions`. В качестве значения директивы передается массив строк с кодами разрешений:

```vue
<template>
  <!-- Элемент будет отображен только если у пользователя есть разрешение "user-create" -->
  <button v-permissions="['user-create']">Создать пользователя</button>

  <!-- Можно проверять несколько разрешений одновременно -->
  <div v-permissions="['user-view', 'user-edit']">
    <!-- Контент будет виден только если у пользователя есть оба разрешения -->
  </div>
</template>
```

## Composable usePermission

### Описание

`usePermission` - композабл, предоставляющий функции для работы с разрешениями пользователя и маршрутами на основе этих разрешений. Принимает опциональный параметр `sidebar` для фильтрации маршрутов.

### Использование

```typescript
import { usePermission } from 'gts-ui'
import sidebarRoutes from '@/constants/sidebar' // Ваши маршруты боковой панели

// В компоненте Vue
export default {
  setup() {
    const { hasAccessAction, definePermission, availableRoutes, getFirstAvailablePage } = usePermission(sidebarRoutes)
    
    // Проверка доступа к действию
    const canCreateUser = hasAccessAction(['user-create'])
    
    // Проверка конкретного разрешения
    const hasHomeAccess = definePermission('home')
    
    // Получить доступные маршруты для текущего пользователя
    const routes = availableRoutes.value
    
    // Получить путь к первой доступной странице
    const firstPagePath = getFirstAvailablePage()
    
    return {
      canCreateUser,
      hasHomeAccess,
      routes,
      firstPagePath
    }
  }
}
```

### Доступные функции

#### hasAccessAction(permissions: string[]): boolean

Проверяет, есть ли у пользователя все указанные разрешения. Принимает массив строк с кодами разрешений.

```typescript
// Проверка на наличие одного разрешения
const canViewUsers = hasAccessAction(['user-view'])

// Проверка на наличие нескольких разрешений
const canManageUsers = hasAccessAction(['user-view', 'user-edit', 'user-delete'])
```

#### definePermission(code: string): boolean

Проверяет наличие отдельного разрешения у пользователя.

```typescript
const canAccessDashboard = definePermission('dashboard')
```

#### availableRoutes: Ref<ISidebarItem[]>

Вычисляемое свойство, возвращающее отфильтрованный список маршрутов, доступных текущему пользователю.

```typescript
// Получение всех доступных маршрутов
const routes = availableRoutes.value
```

#### getFirstAvailablePage(): string

Возвращает путь к первой доступной для пользователя странице. Полезно для перенаправления после входа.

```typescript
// Перенаправление на первую доступную страницу
router.push(getFirstAvailablePage())
```

### Пример интеграции с Vue Router

```typescript
import { createRouter, createWebHistory } from 'vue-router'
import { usePermission } from 'gts-ui'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    // маршруты приложения
  ]
})

router.beforeEach((to, from, next) => {
  const { hasAccessAction } = usePermission()
  
  // Проверка, требуется ли разрешение для страницы
  if (to.meta.permissions) {
    // Если у пользователя есть нужные разрешения, разрешаем переход
    if (hasAccessAction(to.meta.permissions)) {
      next()
    } else {
      // Иначе перенаправляем на страницу с ошибкой доступа
      next('/access-denied')
    }
  } else {
    // Если разрешения не требуются, разрешаем переход
    next()
  }
})

export default router
```

## Заметки по реализации

- `usePermission` принимает опциональный параметр `sidebar` - массив элементов боковой панели для фильтрации.
- Список разрешений пользователя (`apiList`) получается из localStorage.
- Тип пользователя (`userType`) также берется из localStorage.
- Пользователи с типом 'AGENT' имеют доступ ко всем функциям без проверки разрешений.
