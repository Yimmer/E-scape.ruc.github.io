jQuery("#simulation")
  .on("click", ".s-705f1e9e-9aa4-4f04-b61e-426d2a245555 .click", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Label_534")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/4267064d-ae0f-44bc-ab17-2fc0284ba52f"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Image_30")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-705f1e9e-9aa4-4f04-b61e-426d2a245555 #s-Image_30 > svg": {
                      "attributes": {
                        "overlay": "none"
                      }
                    }
                  },{
                    "#s-705f1e9e-9aa4-4f04-b61e-426d2a245555 #s-Image_30": {
                      "attributes": {
                        "opacity": "0.75"
                      }
                    }
                  },{
                    "#s-705f1e9e-9aa4-4f04-b61e-426d2a245555 #s-Image_30": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=75)",
                        "filter": "alpha(opacity=75)"
                      }
                    }
                  },{
                    "#s-705f1e9e-9aa4-4f04-b61e-426d2a245555 #s-Image_30": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=75)",
                        "filter": "alpha(opacity=75)"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimPause",
                  "parameter": {
                    "pause": 300
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-705f1e9e-9aa4-4f04-b61e-426d2a245555 #s-Image_30 > svg": {
                      "attributes": {
                        "overlay": "none"
                      }
                    }
                  },{
                    "#s-705f1e9e-9aa4-4f04-b61e-426d2a245555 #s-Image_30": {
                      "attributes": {
                        "opacity": "1.0"
                      }
                    }
                  },{
                    "#s-705f1e9e-9aa4-4f04-b61e-426d2a245555 #s-Image_30": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-705f1e9e-9aa4-4f04-b61e-426d2a245555 #s-Image_30": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_530")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-705f1e9e-9aa4-4f04-b61e-426d2a245555 #s-Label_525": {
                      "attributes": {
                        "font-size": "8.0pt",
                        "font-family": "Roboto-Regular,Arial"
                      }
                    }
                  },{
                    "#s-705f1e9e-9aa4-4f04-b61e-426d2a245555 #s-Label_525 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-705f1e9e-9aa4-4f04-b61e-426d2a245555 #s-Label_525 span": {
                      "attributes": {
                        "color": "#A9A9A9",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "Roboto-Regular,Arial",
                        "font-size": "8.0pt"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-705f1e9e-9aa4-4f04-b61e-426d2a245555 #s-Label_527": {
                      "attributes": {
                        "font-size": "8.0pt",
                        "font-family": "Roboto-Regular,Arial"
                      }
                    }
                  },{
                    "#s-705f1e9e-9aa4-4f04-b61e-426d2a245555 #s-Label_527 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-705f1e9e-9aa4-4f04-b61e-426d2a245555 #s-Label_527 span": {
                      "attributes": {
                        "color": "#A9A9A9",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "Roboto-Regular,Arial",
                        "font-size": "8.0pt"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-705f1e9e-9aa4-4f04-b61e-426d2a245555 #s-Label_530": {
                      "attributes": {
                        "font-size": "20.0pt",
                        "font-family": "IOS9-Icons-Regular,Arial"
                      }
                    }
                  },{
                    "#s-705f1e9e-9aa4-4f04-b61e-426d2a245555 #s-Label_530 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-705f1e9e-9aa4-4f04-b61e-426d2a245555 #s-Label_530 span": {
                      "attributes": {
                        "color": "#FC3768",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "IOS9-Icons-Regular,Arial",
                        "font-size": "20.0pt"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-705f1e9e-9aa4-4f04-b61e-426d2a245555 #s-Label_529": {
                      "attributes": {
                        "font-size": "8.0pt",
                        "font-family": "Roboto-Regular,Arial"
                      }
                    }
                  },{
                    "#s-705f1e9e-9aa4-4f04-b61e-426d2a245555 #s-Label_529 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-705f1e9e-9aa4-4f04-b61e-426d2a245555 #s-Label_529 span": {
                      "attributes": {
                        "color": "#FC3768",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "Roboto-Regular,Arial",
                        "font-size": "8.0pt"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Image_31")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-705f1e9e-9aa4-4f04-b61e-426d2a245555 #s-Image_31 > svg": {
                      "attributes": {
                        "overlay": "none"
                      }
                    }
                  },{
                    "#s-705f1e9e-9aa4-4f04-b61e-426d2a245555 #s-Image_31": {
                      "attributes": {
                        "opacity": "0.75"
                      }
                    }
                  },{
                    "#s-705f1e9e-9aa4-4f04-b61e-426d2a245555 #s-Image_31": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=75)",
                        "filter": "alpha(opacity=75)"
                      }
                    }
                  },{
                    "#s-705f1e9e-9aa4-4f04-b61e-426d2a245555 #s-Image_31": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=75)",
                        "filter": "alpha(opacity=75)"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimPause",
                  "parameter": {
                    "pause": 300
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-705f1e9e-9aa4-4f04-b61e-426d2a245555 #s-Image_31 > svg": {
                      "attributes": {
                        "overlay": "none"
                      }
                    }
                  },{
                    "#s-705f1e9e-9aa4-4f04-b61e-426d2a245555 #s-Image_31": {
                      "attributes": {
                        "opacity": "1.0"
                      }
                    }
                  },{
                    "#s-705f1e9e-9aa4-4f04-b61e-426d2a245555 #s-Image_31": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-705f1e9e-9aa4-4f04-b61e-426d2a245555 #s-Image_31": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/019596e7-0e05-4d15-a95d-0a04a5525741"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_531")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-705f1e9e-9aa4-4f04-b61e-426d2a245555 #s-Label_525": {
                      "attributes": {
                        "font-size": "8.0pt",
                        "font-family": "Roboto-Regular,Arial"
                      }
                    }
                  },{
                    "#s-705f1e9e-9aa4-4f04-b61e-426d2a245555 #s-Label_525 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-705f1e9e-9aa4-4f04-b61e-426d2a245555 #s-Label_525 span": {
                      "attributes": {
                        "color": "#A9A9A9",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "Roboto-Regular,Arial",
                        "font-size": "8.0pt"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-705f1e9e-9aa4-4f04-b61e-426d2a245555 #s-Label_527": {
                      "attributes": {
                        "font-size": "8.0pt",
                        "font-family": "Roboto-Regular,Arial"
                      }
                    }
                  },{
                    "#s-705f1e9e-9aa4-4f04-b61e-426d2a245555 #s-Label_527 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-705f1e9e-9aa4-4f04-b61e-426d2a245555 #s-Label_527 span": {
                      "attributes": {
                        "color": "#A9A9A9",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "Roboto-Regular,Arial",
                        "font-size": "8.0pt"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-705f1e9e-9aa4-4f04-b61e-426d2a245555 #s-Label_531": {
                      "attributes": {
                        "font-size": "20.0pt",
                        "font-family": "IOS9-Icons-Regular,Arial"
                      }
                    }
                  },{
                    "#s-705f1e9e-9aa4-4f04-b61e-426d2a245555 #s-Label_531 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-705f1e9e-9aa4-4f04-b61e-426d2a245555 #s-Label_531 span": {
                      "attributes": {
                        "color": "#FC3768",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "IOS9-Icons-Regular,Arial",
                        "font-size": "20.0pt"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-705f1e9e-9aa4-4f04-b61e-426d2a245555 #s-Label_529": {
                      "attributes": {
                        "font-size": "8.0pt",
                        "font-family": "Roboto-Regular,Arial"
                      }
                    }
                  },{
                    "#s-705f1e9e-9aa4-4f04-b61e-426d2a245555 #s-Label_529 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-705f1e9e-9aa4-4f04-b61e-426d2a245555 #s-Label_529 span": {
                      "attributes": {
                        "color": "#FC3768",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "Roboto-Regular,Arial",
                        "font-size": "8.0pt"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Image_32")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-705f1e9e-9aa4-4f04-b61e-426d2a245555 #s-Image_32 > svg": {
                      "attributes": {
                        "overlay": "none"
                      }
                    }
                  },{
                    "#s-705f1e9e-9aa4-4f04-b61e-426d2a245555 #s-Image_32": {
                      "attributes": {
                        "opacity": "0.75"
                      }
                    }
                  },{
                    "#s-705f1e9e-9aa4-4f04-b61e-426d2a245555 #s-Image_32": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=75)",
                        "filter": "alpha(opacity=75)"
                      }
                    }
                  },{
                    "#s-705f1e9e-9aa4-4f04-b61e-426d2a245555 #s-Image_32": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=75)",
                        "filter": "alpha(opacity=75)"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimPause",
                  "parameter": {
                    "pause": 300
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-705f1e9e-9aa4-4f04-b61e-426d2a245555 #s-Image_32 > svg": {
                      "attributes": {
                        "overlay": "none"
                      }
                    }
                  },{
                    "#s-705f1e9e-9aa4-4f04-b61e-426d2a245555 #s-Image_32": {
                      "attributes": {
                        "opacity": "1.0"
                      }
                    }
                  },{
                    "#s-705f1e9e-9aa4-4f04-b61e-426d2a245555 #s-Image_32": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-705f1e9e-9aa4-4f04-b61e-426d2a245555 #s-Image_32": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_532")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-705f1e9e-9aa4-4f04-b61e-426d2a245555 #s-Label_525": {
                      "attributes": {
                        "font-size": "8.0pt",
                        "font-family": "Roboto-Regular,Arial"
                      }
                    }
                  },{
                    "#s-705f1e9e-9aa4-4f04-b61e-426d2a245555 #s-Label_525 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-705f1e9e-9aa4-4f04-b61e-426d2a245555 #s-Label_525 span": {
                      "attributes": {
                        "color": "#A9A9A9",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "Roboto-Regular,Arial",
                        "font-size": "8.0pt"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-705f1e9e-9aa4-4f04-b61e-426d2a245555 #s-Label_527": {
                      "attributes": {
                        "font-size": "8.0pt",
                        "font-family": "Roboto-Regular,Arial"
                      }
                    }
                  },{
                    "#s-705f1e9e-9aa4-4f04-b61e-426d2a245555 #s-Label_527 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-705f1e9e-9aa4-4f04-b61e-426d2a245555 #s-Label_527 span": {
                      "attributes": {
                        "color": "#A9A9A9",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "Roboto-Regular,Arial",
                        "font-size": "8.0pt"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-705f1e9e-9aa4-4f04-b61e-426d2a245555 #s-Label_532": {
                      "attributes": {
                        "font-size": "20.0pt",
                        "font-family": "IOS9-Icons-Regular,Arial"
                      }
                    }
                  },{
                    "#s-705f1e9e-9aa4-4f04-b61e-426d2a245555 #s-Label_532 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-705f1e9e-9aa4-4f04-b61e-426d2a245555 #s-Label_532 span": {
                      "attributes": {
                        "color": "#FC3768",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "IOS9-Icons-Regular,Arial",
                        "font-size": "20.0pt"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-705f1e9e-9aa4-4f04-b61e-426d2a245555 #s-Label_529": {
                      "attributes": {
                        "font-size": "8.0pt",
                        "font-family": "Roboto-Regular,Arial"
                      }
                    }
                  },{
                    "#s-705f1e9e-9aa4-4f04-b61e-426d2a245555 #s-Label_529 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-705f1e9e-9aa4-4f04-b61e-426d2a245555 #s-Label_529 span": {
                      "attributes": {
                        "color": "#FC3768",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "Roboto-Regular,Arial",
                        "font-size": "8.0pt"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Image_33")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-705f1e9e-9aa4-4f04-b61e-426d2a245555 #s-Image_33 > svg": {
                      "attributes": {
                        "overlay": "none"
                      }
                    }
                  },{
                    "#s-705f1e9e-9aa4-4f04-b61e-426d2a245555 #s-Image_33": {
                      "attributes": {
                        "opacity": "0.75"
                      }
                    }
                  },{
                    "#s-705f1e9e-9aa4-4f04-b61e-426d2a245555 #s-Image_33": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=75)",
                        "filter": "alpha(opacity=75)"
                      }
                    }
                  },{
                    "#s-705f1e9e-9aa4-4f04-b61e-426d2a245555 #s-Image_33": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=75)",
                        "filter": "alpha(opacity=75)"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimPause",
                  "parameter": {
                    "pause": 300
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-705f1e9e-9aa4-4f04-b61e-426d2a245555 #s-Image_33 > svg": {
                      "attributes": {
                        "overlay": "none"
                      }
                    }
                  },{
                    "#s-705f1e9e-9aa4-4f04-b61e-426d2a245555 #s-Image_33": {
                      "attributes": {
                        "opacity": "1.0"
                      }
                    }
                  },{
                    "#s-705f1e9e-9aa4-4f04-b61e-426d2a245555 #s-Image_33": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-705f1e9e-9aa4-4f04-b61e-426d2a245555 #s-Image_33": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_536")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-705f1e9e-9aa4-4f04-b61e-426d2a245555 #s-Label_525": {
                      "attributes": {
                        "font-size": "8.0pt",
                        "font-family": "Roboto-Regular,Arial"
                      }
                    }
                  },{
                    "#s-705f1e9e-9aa4-4f04-b61e-426d2a245555 #s-Label_525 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-705f1e9e-9aa4-4f04-b61e-426d2a245555 #s-Label_525 span": {
                      "attributes": {
                        "color": "#A9A9A9",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "Roboto-Regular,Arial",
                        "font-size": "8.0pt"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-705f1e9e-9aa4-4f04-b61e-426d2a245555 #s-Label_527": {
                      "attributes": {
                        "font-size": "8.0pt",
                        "font-family": "Roboto-Regular,Arial"
                      }
                    }
                  },{
                    "#s-705f1e9e-9aa4-4f04-b61e-426d2a245555 #s-Label_527 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-705f1e9e-9aa4-4f04-b61e-426d2a245555 #s-Label_527 span": {
                      "attributes": {
                        "color": "#A9A9A9",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "Roboto-Regular,Arial",
                        "font-size": "8.0pt"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-705f1e9e-9aa4-4f04-b61e-426d2a245555 #s-Label_536": {
                      "attributes": {
                        "font-size": "20.0pt",
                        "font-family": "IOS9-Icons-Regular,Arial"
                      }
                    }
                  },{
                    "#s-705f1e9e-9aa4-4f04-b61e-426d2a245555 #s-Label_536 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-705f1e9e-9aa4-4f04-b61e-426d2a245555 #s-Label_536 span": {
                      "attributes": {
                        "color": "#FC3768",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "IOS9-Icons-Regular,Arial",
                        "font-size": "20.0pt"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-705f1e9e-9aa4-4f04-b61e-426d2a245555 #s-Label_529": {
                      "attributes": {
                        "font-size": "8.0pt",
                        "font-family": "Roboto-Regular,Arial"
                      }
                    }
                  },{
                    "#s-705f1e9e-9aa4-4f04-b61e-426d2a245555 #s-Label_529 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-705f1e9e-9aa4-4f04-b61e-426d2a245555 #s-Label_529 span": {
                      "attributes": {
                        "color": "#FC3768",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "Roboto-Regular,Arial",
                        "font-size": "8.0pt"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Image_34")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-705f1e9e-9aa4-4f04-b61e-426d2a245555 #s-Image_34 > svg": {
                      "attributes": {
                        "overlay": "none"
                      }
                    }
                  },{
                    "#s-705f1e9e-9aa4-4f04-b61e-426d2a245555 #s-Image_34": {
                      "attributes": {
                        "opacity": "0.75"
                      }
                    }
                  },{
                    "#s-705f1e9e-9aa4-4f04-b61e-426d2a245555 #s-Image_34": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=75)",
                        "filter": "alpha(opacity=75)"
                      }
                    }
                  },{
                    "#s-705f1e9e-9aa4-4f04-b61e-426d2a245555 #s-Image_34": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=75)",
                        "filter": "alpha(opacity=75)"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimPause",
                  "parameter": {
                    "pause": 300
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-705f1e9e-9aa4-4f04-b61e-426d2a245555 #s-Image_34 > svg": {
                      "attributes": {
                        "overlay": "none"
                      }
                    }
                  },{
                    "#s-705f1e9e-9aa4-4f04-b61e-426d2a245555 #s-Image_34": {
                      "attributes": {
                        "opacity": "1.0"
                      }
                    }
                  },{
                    "#s-705f1e9e-9aa4-4f04-b61e-426d2a245555 #s-Image_34": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-705f1e9e-9aa4-4f04-b61e-426d2a245555 #s-Image_34": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_533")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-705f1e9e-9aa4-4f04-b61e-426d2a245555 #s-Label_525": {
                      "attributes": {
                        "font-size": "8.0pt",
                        "font-family": "Roboto-Regular,Arial"
                      }
                    }
                  },{
                    "#s-705f1e9e-9aa4-4f04-b61e-426d2a245555 #s-Label_525 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-705f1e9e-9aa4-4f04-b61e-426d2a245555 #s-Label_525 span": {
                      "attributes": {
                        "color": "#A9A9A9",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "Roboto-Regular,Arial",
                        "font-size": "8.0pt"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-705f1e9e-9aa4-4f04-b61e-426d2a245555 #s-Label_527": {
                      "attributes": {
                        "font-size": "8.0pt",
                        "font-family": "Roboto-Regular,Arial"
                      }
                    }
                  },{
                    "#s-705f1e9e-9aa4-4f04-b61e-426d2a245555 #s-Label_527 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-705f1e9e-9aa4-4f04-b61e-426d2a245555 #s-Label_527 span": {
                      "attributes": {
                        "color": "#A9A9A9",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "Roboto-Regular,Arial",
                        "font-size": "8.0pt"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-705f1e9e-9aa4-4f04-b61e-426d2a245555 #s-Label_533": {
                      "attributes": {
                        "font-size": "20.0pt",
                        "font-family": "IOS9-Icons-Regular,Arial"
                      }
                    }
                  },{
                    "#s-705f1e9e-9aa4-4f04-b61e-426d2a245555 #s-Label_533 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-705f1e9e-9aa4-4f04-b61e-426d2a245555 #s-Label_533 span": {
                      "attributes": {
                        "color": "#FC3768",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "IOS9-Icons-Regular,Arial",
                        "font-size": "20.0pt"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-705f1e9e-9aa4-4f04-b61e-426d2a245555 #s-Label_529": {
                      "attributes": {
                        "font-size": "8.0pt",
                        "font-family": "Roboto-Regular,Arial"
                      }
                    }
                  },{
                    "#s-705f1e9e-9aa4-4f04-b61e-426d2a245555 #s-Label_529 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-705f1e9e-9aa4-4f04-b61e-426d2a245555 #s-Label_529 span": {
                      "attributes": {
                        "color": "#FC3768",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "Roboto-Regular,Arial",
                        "font-size": "8.0pt"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Cell_bottom")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/59fda856-db52-46f5-95f8-b3ed4909cfaf"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Image_12")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/0f4a962b-610c-461b-a077-16cd43dc821e"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Image_13")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/59fda856-db52-46f5-95f8-b3ed4909cfaf"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  })
  .on("pageload", ".s-705f1e9e-9aa4-4f04-b61e-426d2a245555 .pageload", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Label_39")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-Label_39",
                    "value": {
                      "action": "jimConcat",
                      "parameter": [ {
                        "action": "jimSubstring",
                        "parameter": [ {
                          "action": "jimSystemTime"
                        },"0","5" ]
                      }," PM" ]
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  });