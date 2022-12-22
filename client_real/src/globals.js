export const BASE_URL =
  process.env.NODE_ENV === 'production'
    ? `${window.location.origin}/api`
    : 'http://localhost:3001/api'

export const STRIPE_URL =
  process.env.NODE_ENV === 'production'
    ? `${window.location.origin}/stripe/charge`
    : 'http://localhost:3001/stripe/charge'
