import * as path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import webpack from 'webpack';
import 'webpack-dev-server';

const config: webpack.Configuration = {
  // Point d'entrée du projet
  entry: './src/index.tsx',

  // Configuration de la sortie
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true, // Nettoie le dossier dist à chaque compilation
  },

  // Résolution des extensions de fichiers
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },

  // Configuration des règles de traitement des fichiers
  module: {
    rules: [
      {
        test: /\.tsx?$/, // Tous les fichiers .ts et .tsx
        use: 'ts-loader', // Utiliser ts-loader pour compiler TypeScript
        exclude: /node_modules/, // Ne pas traiter les fichiers dans node_modules
      },
      {
        test: /\.css$/, // Tous les fichiers CSS
        use: ['style-loader', 'css-loader'], // Utiliser style-loader et css-loader pour traiter les fichiers CSS
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i, // Traitement des images
        type: 'asset/resource',
      },
    ],
  },

  // Plugins pour améliorer la configuration
  plugins: [
    new CleanWebpackPlugin(), // Nettoyer le dossier dist avant chaque compilation
    new HtmlWebpackPlugin({
      template: './public/index.html', // Utiliser le template index.html
    }),
  ],

  // Configuration du serveur de développement
  devServer: {
    static: path.join(__dirname, 'dist'), // Dossier à servir
    compress: true, // Compression des fichiers
    port: 9000, // Port du serveur
    open: true, // Ouvrir le navigateur au lancement
  },

  // Source maps pour le debugging
  devtool: 'source-map',
};

export default config;
