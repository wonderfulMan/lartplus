module.exports = {
  "plugins": [
    {
      "postcss-px-to-viewport": {
        "unitToConvert": "px",
        "viewportWidth": 750,
        "viewportHeight": 1334,
        "unitPrecision": 3,
        "viewportUnit": "vw",
        "selectorBlackList": [
          ".ignore",
          ".hairlines"
        ],
        "minPixelValue": 1,
        "mediaQuery": false
      }
    }
  ]
}