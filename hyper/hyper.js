// -- hyper-stylesheet-hash:128569e017c92721d52dee4a814c9cf1 --
// Future versions of Hyper may add additional config options,
// which will not automatically be merged into this file.
// See https://hyper.is#cfg for all currently supported options.

module.exports = {
  config: {
    // choose either `'stable'` for receiving highly polished,
    // or `'canary'` for less polished but more frequent updates
    updateChannel: "stable",

    // default font size in pixels for all tabs
    fontSize: 17,

    // font family with optional fallbacks
    fontFamily:
      '"MesloLGS NF", "DejaVu Sans Mono", Consolas, "Lucida Console", monospace',

    // default font weight: 'normal' or 'bold'
    fontWeight: "normal",

    // font weight for bold characters: 'normal' or 'bold'
    fontWeightBold: "bold",

    // line height as a relative unit
    lineHeight: 1,

    // letter spacing as a relative unit
    letterSpacing: 0,

    // terminal cursor background color and opacity (hex, rgb, hsl, hsv, hwb or cmyk)
    // cursorColor: 'rgba(248,28,229,0.8)',
    cursorColor: "#0d95d9",
    // terminal text color under BLOCK cursor
    cursorAccentColor: "#0d95d9",

    // `'BEAM'` for |, `'UNDERLINE'` for _, `'BLOCK'` for █
    cursorShape: "BLOCK",

    // set to `true` (without backticks and without quotes) for blinking cursor
    cursorBlink: true,

    // color of the text
    foregroundColor: "#0d95d9",

    // terminal background color
    // opacity is only supported on macOS
    backgroundColor: "#212121",

    // terminal selection color
    selectionColor: "#444344",

    // border color (window, tabs)
    borderColor: "#333",

    // custom CSS to embed in the main window
    css: `
      .term_fit:not(.term._term) {
        opacity: 1 !important
      }
    `,

    // custom CSS to embed in the terminal window
    termCSS: "",

    // if you're using a Linux setup which show native menus, set to false
    // default: `true` on Linux, `true` on Windows, ignored on macOS
    showHamburgerMenu: "true",

    // set to `false` (without backticks and without quotes) if you want to hide the minimize, maximize and close buttons
    // additionally, set to `'left'` if you want them on the left, like in Ubuntu
    // default: `true` (without backticks and without quotes) on Windows and Linux, ignored on macOS
    showWindowControls: "true",

    // custom padding (CSS format, i.e.: `top right bottom left`)
    padding: "10px 10px 10px 10px",

    // the full list. if you're going to provide the full color palette,
    // including the 6 x 6 color cubes and the grayscale map, just provide
    // an array here instead of a color map object
    colors: {
      black: "#000000",
      red: "#C51E14",
      green: "#1DC121",
      yellow: "#C7C329",
      blue: "#0A2FC4",
      magenta: "#C839C5",
      cyan: "#20C5C6",
      white: "#C7C7C7",
      lightBlack: "#686868",
      lightRed: "#FD6F6B",
      lightGreen: "#67F86F",
      lightYellow: "#FFFA72",
      lightBlue: "#6A76FB",
      lightMagenta: "#FD7CFC",
      lightCyan: "#68FDFE",
      lightWhite: "#FFFFFF",
      textColor: "#0d95d9",
      backgroundColor: "#212121",
      selectionColor: "#444344",
    },

    // the shell to run when spawning a new session (i.e. /usr/local/bin/fish)
    // if left empty, your system's login shell will be used by default
    //
    // Windows
    // - Make sure to use a full path if the binary name doesn't work
    // - Remove `--login` in shellArgs
    //
    // Bash on Windows
    // - Example: `C:\\Windows\\System32\\bash.exe`
    //
    // PowerShell on Windows
    // - Example: `C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe`
    shell: "/bin/zsh",

    // for setting shell arguments (i.e. for using interactive shellArgs: `['-i']`)
    // by default `['--login']` will be used
    shellArgs: ["--login"],

    // for environment variables
    env: {},

    // set to `false` for no bell
    bell: "false",

    // if `true` (without backticks and without quotes), selected text will automatically be copied to the clipboard
    copyOnSelect: true,

    // if `true` (without backticks and without quotes), hyper will be set as the default protocol client for SSH
    defaultSSHApp: false,

    // if `true` (without backticks and without quotes), on right click selected text will be copied or pasted if no
    // selection is present (`true` by default on Windows and disables the context menu feature)
    quickEdit: true,

    // choose either `'vertical'`, if you want the column mode when Option key is hold during selection (Default)
    // or `'force'`, if you want to force selection regardless of whether the terminal is in mouse events mode
    // (inside tmux or vim with mouse mode enabled for example).
    macOptionSelectionMode: "vertical",

    // URL to custom bell
    // bellSoundURL: 'http://example.com/bell.mp3',

    // Whether to use the WebGL renderer. Set it to false to use canvas-based
    // rendering (slower, but supports transparent backgrounds)
    webGLRenderer: true,

    hyperTransparent: {
      backgroundColor: "#212121",
      opacity: 0.8,
      vibrancy: ["", "medium-light", "ultra-dark"],
    },

    // for advanced config flags please refer to https://hyper.is/#cfg
  },

  // a list of plugins to fetch and install from npm
  // format: [@org/]project[#version]
  // examples:
  //   `hyperpower`
  //   `@company/project`
  //   `project#1.0.1`
  plugins: [
    "hyper-drop-file",
    "hyper-dnd-tabs",
    "hyper-sync-settings",
    //"hyperterm-visor",
    //"hyper-stylesheet",
    "hyperduck",
    "hyper-dark-scrollbar",
    "hyper-transparent",
    "hyperterm-cursor",
    "hyper-font-ligatures",
    "hyper-one-dark",
    "hyper-search",
    "hyper-pane",
    "hypercwd",
    "hyper-active-tab",
    "hyperline",
    "hyper-mac-controls",
    "hyper-tabs-enhanced",
    "hyperterm-crosshair",
    //"hyper-folder-icon",
    "hyper-tab-touchbar",
    "hyper-custom-touchbar",
    "hyperterm-open-devtools",
    "hyperterm-install-devtools",
    "htyt",
    "gitrocket",
    "space-pull",
    "hyper-atom-dark-transparent",
    "hyper-darkmatter",
    "hyper-material-box",
    "hyper-material-theme",
    "hyper-materialshell",
    "hyper-midnight",
    "hyper-monokai-deluxe",
    "hyper-one-dark-vivid",
    "hyperterm-atom-dark",
    "hyperterm-dark-fusion",
    "hyper-electron-highlighter",
    "hyperterm-material-spacegray",
    "hyperterm-material",
    "hyperterm-monokai",
    "hyperborder",
    "hyper-snazzy",
  ],

  // in development, you can create a directory under
  // `~/.hyper_plugins/local/` and include it here
  // to load it and avoid it being `npm install`ed
  localPlugins: [],

  keymaps: {
    // Example
    // 'window:devtools': 'cmd+alt+o',
  },
};
