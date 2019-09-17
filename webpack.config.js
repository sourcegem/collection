const path = require('path');

module.exports = function(env, argv)
{
	return {
		entry:   './src/index.ts',

		output: {
			filename: 'collection' + (argv.mode === 'production' ? '.min' : '') + '.js',
			path:     path.resolve(__dirname, 'dist'),

			libraryTarget: 'window',
			library:       'Collection'
		},

		module: {
			rules: [
				{
					test:   /\.tsx?$/,
					loader: 'ts-loader'
				}
			]
		},

		resolve: {
			extensions: ['.ts', '.tsx', '.js']
		}
	};
};
