/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

declare global {
  namespace App {
    interface Locals {
      SITE_URL: string
      RSS_URL: string
      RSS_PREFIX: string
    }
  }
}