# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

BroadcastChannel is an Astro-based web application that converts Telegram channels into microblog websites. It fetches content from public Telegram channels and presents them as a clean, SEO-friendly website with RSS feeds.

## Commands

### Development

- `pnpm dev` or `pnpm start` - Start development server
- `pnpm build` - Build for production
- `pnpm build:edgeone` - Build optimized for EdgeOne Pages deployment
- `pnpm preview` - Preview production build

### Code Quality

- `pnpm lint` - Run ESLint
- `pnpm lint:fix` - Fix ESLint issues automatically

### Package Management

- Uses `pnpm` as the package manager (version 9.9.0)
- `pnpm install` - Install dependencies
- Git hooks are configured via `simple-git-hooks` with pre-commit linting

## Architecture

### Core Components

- **Telegram API Integration** (`src/lib/telegram/index.js`): Main logic for fetching and parsing Telegram channel content with caching
- **Environment Configuration** (`src/lib/env.js`): Centralized environment variable access supporting both build-time and runtime environments
- **Base Layout** (`src/layouts/base.astro`): Main layout with navigation, search, and SEO configuration

### Key Features

- **Multi-platform Deployment**: Supports Vercel, Cloudflare Pages, EdgeOne Pages, Netlify, and Node.js via adapter configuration in `astro.config.mjs`
- **Content Processing**: Parses Telegram HTML, handles media (images, videos, stickers), code highlighting with Prism, and link previews
- **Caching**: LRU cache implementation for Telegram API responses (5-minute TTL, 10MB max for Edge Runtime compatibility)
- **SEO & RSS**: Automatic sitemap generation, RSS/JSON feeds, and OpenGraph metadata

### File Structure

- `/src/pages/` - Route handlers including dynamic routes for posts, pagination, and search
- `/src/components/` - Reusable Astro components (header, item, list)
- `/src/lib/` - Core business logic and utilities
- `/src/assets/` - Static assets including CSS and SVG icons

### Environment Variables

The application requires `CHANNEL` (Telegram channel username) as the primary configuration. Optional variables include localization settings, social media links, SEO controls, and Sentry integration.

### Content Types

- Supports text posts, images, videos, stickers, audio, polls, documents, and link previews
- Implements spoiler tags, hashtag linking, and code syntax highlighting
- Handles message replies and forwards

## Development Notes

- Uses TypeScript with Astro's base configuration
- ESLint configured with Antfu's config preset
- CSS uses PostCSS with nesting support
- Code highlighting powered by Prism.js with automatic language detection
- Static proxy support for media content delivery
