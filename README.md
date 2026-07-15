# GSNET Management System

A modern, secure, and scalable management system built for **GSNET** using a full-stack TypeScript architecture. It provides authentication, organization management, user administration, and role-based access control while following a modular, maintainable, and secure architecture.

## Overview

GSNET Management System centralizes the management of administrators, staff, and clients through a unified web application. The project emphasizes security, scalability, developer experience, and clean architecture using modern TypeScript technologies.

## Features

### Authentication

- Email & Password Authentication
- Email OTP Verification
- Two-Factor Authentication (2FA)
- Passkey (WebAuthn) Authentication
- Secure Session Management
- Protected Routes
- Role-Based Access Control (RBAC)

### User Management

- User Registration
- User Profiles
- Role Management
- Account Status Management
- Email Verification
- Password Reset

### Organization

- Organization Management
- Member Management
- Organization Roles
- Permission Management

### Dashboard

- Administrator Dashboard
- Staff Dashboard
- Client Dashboard
- Analytics Overview
- User Statistics

### Security

- CSRF Protection
- HTTP-Only Cookies
- Session Validation
- Rate Limiting
- Password Hashing
- Secure API Endpoints

## Technology Stack

### Frontend

- React
- TypeScript
- TanStack Start
- TanStack Router
- TanStack Query
- React Hook Form
- Zod
- Tailwind CSS

### Backend

- Bun
- Better Auth
- TypeScript

### Database

- MongoDB

## Authentication Auth

- Better Auth
- Email OTP
- Passkeys (WebAuthn)
- Two-Factor Authentication

## Project Structure

```text
GSNET-Management-System/
├── public/
├── src/
│   ├── features/
│   ├── gen/
│   ├── integrations/
│   ├── lib/
│   ├── routes/
│   ├── shared/
│   └── router.tsx
│  
├── .cta.json
├── .env
├── .gitignore
├── biome.json
├── notes.txt
├── package-lock.json
├── package.json
├── README.md
├── tsconfig.json
├── tsr.config.json
└── vite.config.ts
```

## Installation

Clone the repository:

```bash
git clone https://github.com/your-username/gsnet-management-system.git
cd gsnet-management-system
```

Install dependencies:

```bash
bun install
```

or

```bash
npm install
```

## Environment Variables

Create a `.env` file:

```env
VITE_API_URL=http://localhost:3000

MONGODB_URI=

BETTER_AUTH_SECRET=

BETTER_AUTH_URL=http://localhost:3000

SMTP_HOST=
SMTP_PORT=
SMTP_USER=
SMTP_PASSWORD=
SMTP_FROM=
```

## Running the Application

Development:

```bash
bun run dev
```

Build:

```bash
bun run build
```

Production:

```bash
bun run start
```

## Authentication Flow

1. Register an account.
2. Verify the email using the OTP.
3. Sign in with email and password.
4. Complete Two-Factor Authentication (if enabled).
5. A secure session is created.
6. The user is redirected according to their assigned role.

## User Roles

| Role   | Description                |
| ------ | -------------------------- |
| Admin  | Full system administration |
| Staff  | Operational management     |
| Client | Client portal access       |

## API Endpoints

Authentication endpoints are available under:

```text
/api/v1/auth
```

Example endpoints:

```text
POST /sign-up/email
POST /sign-in/email
POST /email-otp/send-verification-otp
POST /two-factor/enable
POST /two-factor/disable
POST /passkey/register
POST /passkey/authenticate
GET  /get-session
POST /sign-out
```

## Development Standards

- TypeScript Strict Mode
- ESLint
- Feature-Based Architecture
- Reusable Components
- Modular Hooks
- Type-Safe APIs
- Consistent Folder Structure

## Available Scripts

```bash
bun run dev
```

Starts the development server.

```bash
bun run build
```

Builds the project.

```bash
bun run start
```

Runs the production server.

```bash
bun run lint
```

Runs ESLint.

```bash
bun run typecheck
```

Runs the TypeScript compiler.

## Roadmap

- Audit Logs
- Activity History
- Notifications
- File Uploads
- Reporting Module
- Dashboard Charts
- Backup Management
- Multi-language Support
- Dark Mode

## License

This project is proprietary software developed for **GSNET**.

Unauthorized copying, modification, distribution, or commercial use without permission is prohibited.

## Author

## Dev Waren (Software Engineer)

Built with React, TypeScript, Bun, Better Auth, and MongoDB.
