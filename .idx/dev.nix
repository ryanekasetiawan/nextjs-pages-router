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
 "steoates.autoimport"];
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