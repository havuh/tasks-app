const path = require('node:path')

const removeConsole = false

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    removeConsole: removeConsole ? { exclude: ['error'] } : false,
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'src', 'styles')],
    prependData: '@import "@/styles/includes.scss";',
  },
  images: {},
  // async redirects() {
  //   return [
  //     {
  //       source: '/home',
  //       destination: '/',
  //       permanent: true,
  //     },
  //   ]
  // },
}

module.exports = nextConfig
