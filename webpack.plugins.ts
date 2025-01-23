// import type IForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
// const ForkTsCheckerWebpackPlugin: typeof IForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
import { TanStackRouterWebpack } from '@tanstack/router-plugin/webpack';

export const plugins = (renderer = false) => [
    new HtmlWebpackPlugin(),
    ...renderer ? [new MiniCssExtractPlugin(), TanStackRouterWebpack()] : []
    // new ForkTsCheckerWebpackPlugin({
    //     logger: 'webpack-infrastructure'
    // })
];
