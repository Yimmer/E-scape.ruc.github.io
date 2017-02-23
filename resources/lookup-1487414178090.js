(function(window, undefined) {
  var dictionary = {
    "705f1e9e-9aa4-4f04-b61e-426d2a245555": "My home page",
    "a27fe1dd-00fb-45bb-8a0d-c4144af1ded2": "Register Screen",
    "0f4a962b-610c-461b-a077-16cd43dc821e": "Chat Page",
    "b25617ac-3c30-419a-a041-d8c339a8b931": "Loading Screen",
    "4267064d-ae0f-44bc-ab17-2fc0284ba52f": "Search Page",
    "019596e7-0e05-4d15-a95d-0a04a5525741": "Theme Page",
    "59fda856-db52-46f5-95f8-b3ed4909cfaf": "Order Page",
    "509de9e9-1394-4c21-8242-00365cb8baad": "First Screen",
    "cc5c9bd5-aaf6-489b-8661-cede3e146593": "Side_Panel_1",
    "361ef7dc-4e97-42f7-a9d0-60efb9c86802": "Sign up Screen",
    "6c8de07c-bf4f-4655-bfb6-9f821a4fb4d4": "Chat Page 2",
    "d07f870b-d7cf-4259-9429-052ff1baf710": "SCREEN1",
    "bea257d5-f73c-4e18-b67d-8da11d3d9fe8": "Chat Page 1",
    "f39803f7-df02-4169-93eb-7547fb8c961a": "Template 1",
    "bb8abf58-f55e-472d-af05-a7d1bb0cc014": "default"
  };

  var uriRE = /^(\/#)?(screens|templates|masters|scenarios)\/(.*)(\.html)?/;
  window.lookUpURL = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, url;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      url = folder + "/" + canvas;
    }
    return url;
  };

  window.lookUpName = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, canvasName;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      canvasName = dictionary[canvas];
    }
    return canvasName;
  };
})(window);