module.exports = {
	"env": {
		"node": true,
		"es6": true
	},
	"extends": ["eslint:recommended", "plugin:prettier/recommended"],
	"plugins": [],
	"parserOptions": {
		"ecmaVersion": 2018
	},
	"parser": "@babel/eslint-parser",
	"rules": {
		"prettier/prettier": ["error"]
	}
}
