# GSNET Management System

A modern, secure, and scalable management system built for **GSNET** using a full-stack TypeScript architecture. The application provides authentication, organization management, user management, and administrative tools while following a modular and maintainable codebase.

---

## Overview

GSNET Management System is designed to centralize the management of users, clients, staff, and administrators. It focuses on security, performance, and developer experience by leveraging modern technologies and best practices.

## Features

### Authentication

- Email & Password Authentication
- Email OTP Verification
- Two-Factor Authentication (2FA)
- Passkey (WebAuthn) Authentication
- Session Management
- Secure Authentication Cookies
- Protected Routes
- Role-Based Access Control (RBAC)

### User Management

- User Registration
- User Profiles
- User Roles
- Account Status Management
- Email Verification
- Password Reset

### Organization

- Organization Management
- Member Management
- Organization Roles
- Organization Permissions

### Dashboard

- Administrative Dashboard
- Staff Dashboard
- Client Dashboard
- Analytics Overview
- User Statistics

### Security

- CSRF Protection
- Secure HTTP Cookies
- Session Validation
- Rate Limiting
- Password Hashing
- Email Verification
- Two-Factor Authentication
- Passkey Authentication
- Secure API Endpoints

---

# Tech Stack

## Frontend

- React
- TypeScript
- TanStack Start
- TanStack Router
- TanStack Query
- React Hook Form
- Zod
- Tailwind CSS

## Backend

- Bun Runtime
- Better Auth
- MongoDB
- TypeScript

## Database

- MongoDB

## Authentication

- Better Auth
- Email OTP
- Passkeys (WebAuthn)
- Two-Factor Authentication

---

# Project Structure

```text
GSNET-Management-System/
│
├── apps/
│   ├── web/
│   └── server/
│
├── src/
│   ├── components/
│   ├── features/
│   ├── hooks/
│   ├── lib/
│   ├── routes/
│   ├── services/
│   ├── schemas/
│   ├── utils/
│   └── types/
│
├── public/
├── docs/
├── scripts/
├── package.json
└── README.md
```

---

# Installation

## Clone Repository

```bash
git clone https://github.com/your-username/gsnet-management-system.git
```

```bash
cd gsnet-management-system
```

---

## Install Dependencies

Using Bun

```bash
bun install
```

or npm

```bash
npm install
```

---

## Environment Variables

Create a `.env` file.

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

---

# Development

Run development server

```bash
bun run dev
```

or

```bash
npm run dev
```

---

# Build

```bash
bun run build
```

---

# Production

```bash
bun run start
```

---

# Authentication Flow

1. User registers.
2. Email verification OTP is sent.
3. User verifies email.
4. User signs in.
5. Optional Two-Factor Authentication is requested.
6. Session is created.
7. User is redirected based on their role.

---

# User Roles

| Role | Description |
|------|-------------|
| Admin | Full system access |
| Staff | Operational management |
| Client | Client portal access |

---

# Security Features

- Better Auth
- Secure Session Management
- HTTP Only Cookies
- Email Verification
- Two-Factor Authentication
- Passkeys (WebAuthn)
- CSRF Protection
- Input Validation using Zod
- Role-Based Authorization
- Password Hashing
- Secure API Design

---

# API

Authentication endpoints are served under:

```
/api/v1/auth
```

Example endpoints:

```
POST /sign-in/email
POST /sign-up/email
POST /email-otp/send-verification-otp
POST /two-factor/enable
POST /two-factor/disable
POST /passkey/register
POST /passkey/authenticate
GET  /get-session
POST /sign-out
```

---

# Coding Standards

- TypeScript Strict Mode
- ESLint
- Consistent Folder Structure
- Feature-Based Architecture
- Reusable Components
- Modular Hooks
- Type-Safe APIs

---

# Scripts

```bash
bun run dev
```

Start development server.

```bash
bun run build
```

Build the application.

```bash
bun run start
```

Start production server.

```bash
bun run lint
```

Run linter.

```bash
bun run typecheck
```

Run TypeScript checks.

---

# Future Improvements

- Audit Logs
- Activity History
- Notifications
- File Uploads
- Reporting Module
- System Settings
- Backup Management
- Multi-language Support
- Dark Mode
- Dashboard Charts

---

# License

This project is proprietary software developed for **GSNET**.

Unauthorized copying, distribution, modification, or commercial use without permission is prohibited.

---

# Author

**GSNET Development Team**

Built with ❤️ using TypeScript, React, Bun, Better Auth, and MongoDB.