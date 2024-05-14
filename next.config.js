/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    DATABASE_URL: process.env.DATABASE_URL ?? "",
    DIRECT_URL: process.env.DIRECT_URL ?? "",
    JWT_SECRET: process.env.JWT_SECRET ?? "",
    TMDB_API_ACCESS_TOKEN: process.env.TMDB_API_ACCESS_TOKEN ?? "",
    TMDB_API_KEY: process.env.TMDB_API_KEY ?? "",
    NEXT_PUBLIC_SUPABASE_URL: process.env.NEXT_PUBLIC_SUPABASE_URL ?? "",
    NEXT_PUBLIC_SUPABASE_ANON_KEY: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? "",
  },
  reactStrictMode: true,
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },
}

module.exports = nextConfig
