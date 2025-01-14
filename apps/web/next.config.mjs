// @ts-check

import transpile from 'next-transpile-modules'

const withTM = transpile(['@business-card/sdk'])

/** @type {import('next').NextConfig} */
const nextConfig = withTM({
    compiler: { removeConsole: true },
    images: { domains: ['business-card.infura-ipfs.io'] },
    poweredByHeader: false,
    reactStrictMode: true,
    swcMinify: true,
})

export default nextConfig
