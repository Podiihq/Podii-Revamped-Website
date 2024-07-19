// webpack.config.js             
import { resolve as _resolve, join } from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin, { loader as _loader } from 'mini-css-extract-plugin';

export default [
    // Client-side configuration
    {
        mode: 'development', // Change to 'production' for production build
        entry: './src/index.js',
        output: {
            path: _resolve(__dirname, 'build'),
            filename: 'static/js/bundle.js',
            publicPath: '/',
        },
        module: {
            rules: [
                {
                    test: /\.jsx?$/,
                    exclude: /node_modules/,
                    use: {
                        loader: 'babel-loader',
                        options: {
                            presets: ['@babel/preset-env', '@babel/preset-react'],
                        },
                    },
                },
                {
                    test: /\.css$/,
                    use: [_loader, 'css-loader'],
                },
                // Add other loaders as needed (e.g., for images, fonts)
            ],
        },
        resolve: {
            extensions: ['.js', '.jsx'],
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: './public/index.html',
            }),
            new MiniCssExtractPlugin({
                filename: 'static/css/[name].css',
            }),
        ],
        devServer: {
            contentBase: join(__dirname, 'build'),
            compress: true,
            port: 3000,
            historyApiFallback: true, // for React Router
        },
    },
    // Server-side configuration
    {
        mode: 'development', // Change to 'production' for production build
        target: 'node', // Important for server-side
        entry: './src/server.js',
        output: {
            path: _resolve(__dirname, 'build'),
            filename: 'server.js',
            libraryTarget: 'commonjs2',
        },
        module: {
            rules: [
                {
                    test: /\.jsx?$/,
                    exclude: /node_modules/,
                    use: {
                        loader: 'babel-loader',
                        options: {
                            presets: ['@babel/preset-env', '@babel/preset-react'],
                        },
                    },
                },
                {
                    test: /\.css$/,
                    use: ['css-loader/locals'], // Local CSS for server-side
                },
            ],
        },
        resolve: {
            extensions: ['.js', '.jsx'],
        },
        externals: {
            express: 'commonjs express', // Exclude Express from the bundle
        },
    },
];
