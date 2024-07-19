// webpack.config.js
import { resolve as _resolve } from 'path';

export const entry = './src/index.js';
export const output = {
    path: _resolve(__dirname, 'public'),
    filename: 'bundle.js',
};
export const module = {
    rules: [
        {
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
            },
        },
    ],
};
export const resolve = {
    extensions: ['.js', '.jsx'],
};
