# React Native Starter with DDD Architecture 🚀

A production-ready React Native starter template built with Expo and Domain-Driven Design principles. This template serves as a foundation for scalable and maintainable React Native applications.

## Features

- 📱 Built with [Expo](https://expo.dev)
- 🏗️ Domain-Driven Design (DDD) architecture
- 🔄 State management with Zustand/Redux
- 🎨 NativeBase UI components and theming
- ✨ Performance optimizations out of the box
- 🧪 Clean Architecture principles
- 💉 Dependency Injection pattern
- 🔍 Strict TypeScript configuration

## Project Structure

```
app/
├── _layout.tsx           # Root layout
├── index.tsx             # Root component
├── providers/            # Application providers
├── (auth)/               # Auth feature routes
│   ├── login.tsx        # Login screen
│   └── register.tsx     # Register screen
├── (dashboard)/          # Dashboard feature routes
│   ├── _layout.tsx      # Dashboard layout
│   └── index.tsx       # Dashboard home

features/
├── auth/               # Auth feature
│   ├── presentation/   # Auth presentation
│   │   ├── components/    # Auth components
│   │   ├── hooks/        # Auth hooks
│   │   └── store/        # Auth state management
│   └── domain/         # Auth domain
│       ├── entities/    # Auth entities
│       ├── repositories/ # Auth repositories
│       ├── services/    # Auth services
│       └── useCases/    # Auth use cases
│   └── infrastructure/ # Auth infrastructure
│       ├── datasources/  # Auth datasources
│       ├── gateways/     # Auth gateways
│       └── services/     # Auth services

├── dashboard/         # Dashboard feature
│   ├── presentation/   # Dashboard presentation
│   │   ├── components/    # Dashboard components
│   │   ├── hooks/        # Dashboard hooks
│   │   └── store/        # Dashboard state management
│   └── domain/         # Dashboard domain
│       ├── entities/    # Dashboard entities
│       ├── repositories/ # Dashboard repositories
│       ├── services/    # Dashboard services
│       └── useCases/    # Dashboard use cases
│   └── infrastructure/ # Dashboard infrastructure
│       ├── datasources/  # Dashboard datasources
│       ├── gateways/     # Dashboard gateways
│       └── services/     # Dashboard services
```

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npx expo start
   ```

## Development Guidelines

- Components follow PascalCase naming convention
- API calls must be made through services, not directly in components
- State management uses Zustand/Redux patterns
- Inline styles are discouraged in favor of StyleSheet
- Strict dependency rules between layers (Clean Architecture)
- Performance optimization through proper memoization

## Available Scripts

- `npx expo start`: Start the development server
- `npm run lint`: Run linting checks
- `npm run test`: Run tests
- `npm run build`: Build for production

## Contributing

1. Follow the established folder structure
2. Adhere to the linting rules
3. Write tests for new features
4. Submit PRs with clear descriptions

## License

MIT

---
*This README will be updated as new features are added to the starter template.*
