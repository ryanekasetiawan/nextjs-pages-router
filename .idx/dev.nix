{pkgs}: {
  channel = "stable-23.11";
  packages = [
    pkgs.nodejs_20
  ];
  idx.extensions = [
    "anseki.vscode-color"
    "christian-kohler.path-intellisense"
    "Codeium.codeium"
    "dbaeumer.vscode-eslint"
    "dsznajder.es7-react-js-snippets"
    "esbenp.prettier-vscode"
    "formulahendry.auto-rename-tag"
    "mhutchie.git-graph"
    "mrmlnc.vscode-scss"
    "oderwat.indent-rainbow"
    "steoates.autoimport"
    "bradlc.vscode-tailwindcss"
    "ms-vscode.js-debug"
    "ms-vscode.vscode-typescript-next"
    "rangav.vscode-thunder-client"
    "Zignd.html-css-class-completion"];
  idx.previews = {
    previews = {
      web = {
        command = [
          "npm"
          "run"
          "dev"
          "--"
          "--port"
          "$PORT"
          "--hostname"
          "0.0.0.0"
        ];
        manager = "web";
      };
    };
  };
}
