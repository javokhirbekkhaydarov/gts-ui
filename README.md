# Easybooking UI Library

## Overview
This is a Vue-based UI component library for the GTS projects, providing reusable and customizable components.

## Prerequisites
- Node.js (v20 or later)
- npm (v8 or later)
- Vue 3

## Local Development Setup

### 1. Clone the Repository
```bash
git clone https://github.com/MamatovUmar/gts-ui.git
cd gts-ui
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Run Storybook
To view and develop components interactively:
```bash
npm run storybook
```

### 4. Build the Library
To build the library for production:
```bash
npm run build
```

## Installation in Other Projects

### 1. Install via npm
```bash
npm install gts-ui
```

### 2. Import Components
```typescript
// In your Vue component
import { EasyIcon } from 'gts-ui'
```

### 3. Import Styles
```typescript
// In your main.ts or main.js
import 'gts-ui/styles'
```

### 4. Global Import
```typescript
// In your main.ts or main.js
import gts from 'gts-ui'

const app = createApp(App)

app.use(gts)
```

## Utils

### catcher
function for handling asynchronous errors. Wraps an asynchronous function and handles potential errors.

```typescript
import { catcher } from 'gts-ui'

// example usage
const safeFetch = catcher(async () => {
  const response = await fetch('https://api.example.com/data')
  return response.json()
})

const fetchInfo = catcher(async () => {
  const response = await fetch('https://api.example.com/data')
  return response.json()
}, (error) => {
  console.error('Произошла ошибка:', error)
})
```

### debounce
Function for preventing frequent function calls. Useful for handling input events or scrolling.

```typescript
import { debounce } from 'gts-ui'

// example usage
const handleSearch = debounce((searchTerm: string) => {
  // search
  console.log('Search:', searchTerm)
}, 300) // Delay of 300ms
```

### padStart
Function for padding a string or number with zeros to the left to a specified length.

```typescript
import { padStart } from 'gts-ui'

// Example usage
const formattedNumber = padStart(5, 2) // "05"
const formattedHour = padStart(9, 2)   // "09"
```

## License
Distributed under the MIT License. See `LICENSE` for more information.

## Contact
Mamatov Umar - mamatov.umar@mail.ru

Project Link: [https://mamatovumar.github.io/gts-ui](https://mamatovumar.github.io/gts-ui)
