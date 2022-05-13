/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
        'upload.wikimedia.org',
        'flagcdn.com'
    ]
  }
  // module: {
  //   env: {
  //     REACT_APP_API: 'https://restcountries.com'
  //   }
  // }
}

module.exports = nextConfig
