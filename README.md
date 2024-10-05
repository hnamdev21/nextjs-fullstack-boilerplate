# Next.js Full Stack Boilerplate

## Getting Started

1. Clone the repository
2. Add secrets to the repository: [Github Repository Settings](https://github.com/nguyenkims/next-boilerplate/settings/secrets). See all secrets in [.github/workflows](.github/workflows)
3. Install dependencies: `npm install`
4. Prepare husky: `npm run prepare`
5. Generate database schema: `npm run db:generate`
6. Create database: `npm run db:push`
7. Create .env.local file
8. Copy environment variables from .env.example: `cp .env.example .env.local`
9. Configure environment variables in .env.local
10. Run the local server: `npm run dev`

## Available Scripts

- `npm run dev`: Runs the app in development mode with development environment
- `npm run dev:local`: Runs the app in development mode with local environment
- `npm run dev:staging`: Runs the app in development mode with staging environment
- `npm run dev:production`: Runs the app in development mode with production environment
- `npm run build`: Builds the app for production
- `npm run start`: Runs the built app in production mode
- `npm run db:push`: Pushes the database schema to the database
- `npm run db:generate`: Generates the database schema
- `npm run db:migrate`: Migrates the database schema
- `npm run db:migrate:prod`: Migrates the database schema for production
- `npm run db:migrate:staging`: Migrates the database schema for staging
- `npm run lint:fix`: Fixes lint errors
- `npm run commit`: Commit with commitlint
- `npm run format`: Format code
- `npm run prepare`: Prepare husky

## Project Structure

- `src/app`: Next.js pages
- `src/components`: Reusable React components
- `src/config`: Configuration
- `src/constants`: Constants
- `src/hooks`: Custom React hooks
- `src/layouts`: Layouts (e.g. MainLayout)
- `src/lib`: Library code
- `src/i18n`: Internationalization
- `src/dto`: Data Transfer Object
- `src/modules`: Modules (e.g. AuthModule, UserModule)
- `src/providers`: Providers (e.g. AuthProvider, ThemeProvider)
- `src/services`: API services and actions
- `src/stores`: Redux store configuration and slices
- `src/styles`: Global styles and SCSS modules
- `src/types`: TypeScript types
- `src/utils`: Utility functions
- `src/auth.ts`: Authentication configuration

## Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct and the process for submitting pull requests.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

## Commit message

Project uses commitlint to standardize commit messages. Please follow these rules when committing:

- Use prefixes: feat, fix, docs, style, refactor, test, chore
- Example: `feat: add login feature`, `fix: fix mobile display issue`

To commit, use the command: `npm run commit`
