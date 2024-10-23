/** @type {import('next').NextConfig} */
import type { NextConfig } from 'next'
import mdx from '@next/mdx'

const withMDX = mdx({
	extension: /\.mdx?$/,
    options: { },
});

const nextConfig = {
	pageExtensions: ['ts', 'tsx', 'md', 'mdx'],
    experimental: {
        turbo: {
            rules: {
                "*.scss": {
                    loaders: ["sass-loader"],
                    as: "*.css",
                },
            },
        }
    }
} satisfies NextConfig

export default withMDX(nextConfig);