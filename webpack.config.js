const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const HtmlWebpackDeployPlugin = require("html-webpack-deploy-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const FileManagerPlugin = require("filemanager-webpack-plugin");
// const webpack = require('webpack');

const mode = process.argv[process.argv.indexOf("--mode") + 1];
const devMode = mode === "development";
const devtool = devMode ? "source-map" : undefined;

// module.exports = function (env, argv) {
//     return {
//         devtool: argv.mode === "production" ? "source-map" : "eval",
//     };
// };

module.exports = {
  mode,
  devtool,
  resolve: {
    alias: {
      Plugs: path.resolve(__dirname, "src/js/vendor/plugins/"),
      scss: path.resolve(__dirname, "src/scss/"),
      media: path.resolve(__dirname, "src/media/"),
      '@': path.resolve(__dirname, "src")
    },
  },
  // watch: true,
  // externalsType: 'script',
  // externals: {
  //     jqueryMousewheel: ['https://cdnjs.cloudflare.com/ajax/libs/jquery-mousewheel/3.1.13/jquery.mousewheel.min.js'],
  // },
  entry: {
    vendors: path.resolve(__dirname, "src", "js/vendors.js"),
    index: path.resolve(__dirname, "src", "js/index.js"), //'@babel/polyfill',
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "assets/js/[name].bundle.js",
    clean: true,
    // publicPath: './',
    // assetModuleFilename: path.join('images', '[name][ext]'),
  },
  // externals: {
  //   ymaps3: 'ymaps3'
  // },
  /*   externalsType: 'script',
    externals: {
      // Вместо YOUR_API_KEY подставить значение настоящего ключа
      
    }, */
  module: {
    rules: [
      {
        test: /\.(c|sa|sc)ss$/i,
        // test: /\.s[ac]ss$/i,
        // sideEffects: true,
        use: [
          // { loader: MiniCssExtractPlugin.loader,
          // options: {
          //     publicPath: (resourcePath, context) => {
          //         // publicPath is the relative path of the resource to the context
          //         // e.g. for ./css/admin/main.css the publicPath will be ../../
          //         // while for ./css/main.css the publicPath will be ../
          //         return path.relative(path.dirname(resourcePath), context).replace('\\', '/') + '/';
          //     },
          // },
          // },
          // devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
          MiniCssExtractPlugin.loader,
          "css-loader",
          "postcss-loader",
          "sass-loader",
        ],
      },
      {
        test: /\.(png|jpg|jpeg|gif)$/i,
        type: "asset/resource",
        use: [
          {
            loader: "image-webpack-loader",
            options: {
              mozjpeg: {
                progressive: true,
              },
              // optipng.enabled: false will disable optipng
              optipng: {
                enabled: false,
              },
              pngquant: {
                quality: [0.65, 0.9],
                speed: 4,
              },
              gifsicle: {
                interlaced: false,
              },
              // the webp option will enable WEBP
              webp: {
                quality: 75,
              },
            },
          },
        ],
        generator: {
          filename: "assets/media/img/[name][ext]",
        },
      },
      {
        test: /\.svg$/,
        type: "asset/resource",
        use: [
          {
            loader: "image-webpack-loader",
            options: {
              svgo: {
                name: "preset-default",
              },
            },
          },
        ],
        generator: {
          filename: "assets/media/icons/[name][ext]",
        },
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: "asset/resource",
        generator: {
          filename: "assets/fonts/[name][ext]",
        },
        /*   filename:  */
      },
      {
        test: /\.(?:js|mjs|cjs)$/,
        use: "babel-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.html$/i,
        loader: "html-loader",
        options: {
          sources: {
            list: [
              {
                // tag: "img",
                attribute: "src",
                type: "src",
              },
              {
                // tag: "img",
                attribute: "data-src",
                type: "src",
              },
              {
                // tag: "img",
                attribute: "srcset",
                type: "srcset",
              },
              // {
              //   // tag: 'a',
              //   // // Attribute name
              //   // attribute: 'href',
              //   // // Type of processing, can be `src` or `scrset`
              //   // type: 'src',
              // },
              // {
              //   tag: "div",
              //   attribute: "data-src",
              //   type: "src",
              // },
              /*  {
                 tag: "div",
                 attribute: "style",
                 type: "style",
               }, */
            ],
          },
          preprocessor: (content) =>
            //{
            // const BGReplace = contentEdit => {
            content.replace(/\url\('~@\/[^)]+'\)/g, (match) => {
              let url = '';
              match.replace(/\'~@\/[^)]+'/, (path) => url = path.replace(/\'/g, ''));
              const newAttr = `${match.replace(/~@/, 'assets')}" data-src="${url}"`
              // console.log(match.replace(/~@/, 'assets'))
              return newAttr;
            })
          // .replace(/\href=['\"](~@\/[^'\"]+)['\"]/g, (match) => {
          //   let url = '';
          //   url = match.replace('href="', '');
          //   // match.replace(/\href=['\"]/, (path) => url = path.replace('href="', ''));
          //   const newAttr2 = `data-src="${url}`
          //   // console.log(match.replace(/~@/, 'assets'));
          //   // console.log(newAttr2);
          //   return newAttr2;
          // }),

          // return contentEdit
          // }
          // content = BGReplace(content)
          // return content;
          // },
        },
      },
    ],
  },
  // mode: 'development',
  plugins: [
    // new webpack.ProvidePlugin({
    //     SlidersElems: path.resolve(__dirname, 'src', 'js/components/sliders/sliders.js')
    // }),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "src", "index.html"),
      filename: "index.html",
      chunks: ["vendors", "index"],
      inject: "body",
      // publicPath: './'
    }),
    new HtmlWebpackDeployPlugin({
      packagesPath: "vendor",
      packages: {
        jquery: {
          copy: [{ from: "dist/jquery.min.js", to: "/" }],
          scripts: {
            variableName: "jQuery",
            path: "/jquery.min.js",
          },
        },
        "jquery-mousewheel": {
          copy: [{ from: "/jquery.mousewheel.js", to: "/" }],
          scripts: {
            variableName: "",
            path: "jquery.mousewheel.js",
            // cdnPath: 'umd/react.production.min.js',
          },
        },

      },
    }),
    new MiniCssExtractPlugin({
      filename: "assets/css/[name].css", //[contenthash]
    }),
    new FileManagerPlugin({
      events: {
        onStart: {
          delete: [
            {
              source: path.join(__dirname, "dist").replaceAll("\\", "/"),
              options: {
                force: true,
                recursive: true,
              },
            },
          ],
        },
        // onEnd: {
        //     copy: [
        //         {
        //             source: path.join('src', 'media'),
        //             destination: 'dist/media',
        //         },
        //     ],
        // },
      },
    }),
    // new HtmlWebpackExternalsPlugin({
    //     // See API section
    //     externals: [
    //         {
    //             module: 'jquery',
    //             entry: 'dist/jquery.min.js',
    //             global: 'jQuery',
    //             // append: true,
    //         },
    //         {
    //             module: 'jquery-mousewheel',
    //             entry: 'https://cdnjs.cloudflare.com/ajax/libs/jquery-mousewheel/3.1.13/jquery.mousewheel.min.js',
    //             global: 'jQuery_mouse',
    //             // append: true,
    //         },
    //     ],
    // }),
  ],

  devServer: {
    client: {
      overlay: true,
    },
    watchFiles: path.join(__dirname, "src"),
    port: 9003,
    hot: true,
    open: true,
    // static: {
    //     directory: path.join(__dirname, 'dist'),
    // },
  },
};
