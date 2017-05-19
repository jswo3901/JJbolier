module.exports = {
    "env": {
        "browser": true,
        "commonjs": true,
        "es6": true,
        "node": true
    },
    "extends": "airbnb",
    "parserOptions": {
        "sourceType": "module"
    },
    "rules": {
        "no-console":0,
        "linebreak-style": [
            "error",
            "windows"
        ],
        "quotes": [
            "error",
            "single"
        ],
        "semi": [
            "error",
            "always"
        ],
        "react/jsx-filename-extension": [
            1, { "extensions": [".js", ".jsx"] }
        ],
    },

    "plugins": [
        "react",
        "jsx-a11y",
        "import"
    ]
};