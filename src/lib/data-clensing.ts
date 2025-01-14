import { CHUNK_SEPARATOR_SYMBOL } from "./const";
import { Order, Product } from "../services/store/types";

export const orderSampleData = JSON.stringify({

  "data": {
    "orders": {
      "edges": [
        {
          "node": {
            "id": "gid://shopify/Order/4014596030655",
            "createdAt": "2021-09-07T08:41:06Z",
            "note": null,
            "name": "#1001",
            "customer": null,
            "currentTotalPriceSet": {
              "presentmentMoney": {
                "amount": "10.6",
                "currencyCode": "MYR"
              }
            },
            "currentSubtotalLineItemsQuantity": 1,
            "tags": [],
            "lineItems": {
              "edges": [
                {
                  "node": {
                    "id": "gid://shopify/LineItem/10284862439615",
                    "title": "Test",
                    "quantity": 1,
                    "variantTitle": "",
                    "originalTotalSet": {
                      "presentmentMoney": {
                        "amount": "10.0",
                        "currencyCode": "MYR"
                      }
                    }
                  }
                }
              ]
            }
          }
        },
        {
          "node": {
            "id": "gid://shopify/Order/4471035920575",
            "createdAt": "2022-06-09T02:57:20Z",
            "note": null,
            "name": "#1002",
            "customer": {
              "id": "gid://shopify/Customer/6210008776895",
              "displayName": "AsmaraHanna",
              "email": "hannaasmara1980@gmail.com",
              "phone": null,
              "note": null
            },
            "currentTotalPriceSet": {
              "presentmentMoney": {
                "amount": "139.5",
                "currencyCode": "MYR"
              }
            },
            "currentSubtotalLineItemsQuantity": 1,
            "tags": [],
            "lineItems": {
              "edges": [
                {
                  "node": {
                    "id": "gid://shopify/LineItem/11147367874751",
                    "title": "DEEP HYDRATING CREAM \"ONE\" 50g",
                    "quantity": 1,
                    "variantTitle": "",
                    "originalTotalSet": {
                      "presentmentMoney": {
                        "amount": "139.5",
                        "currencyCode": "MYR"
                      }
                    }
                  }
                }
              ]
            }
          }
        },
        {
          "node": {
            "id": "gid://shopify/Order/4515071623359",
            "createdAt": "2022-07-10T09:21:12Z",
            "note": null,
            "name": "#1003",
            "customer": {
              "id": "gid://shopify/Customer/6263020191935",
              "displayName": "MianMuzaliha",
              "email": "muzalihamian@gmail.com",
              "phone": null,
              "note": null
            },
            "currentTotalPriceSet": {
              "presentmentMoney": {
                "amount": "139.5",
                "currencyCode": "MYR"
              }
            },
            "currentSubtotalLineItemsQuantity": 1,
            "tags": [],
            "lineItems": {
              "edges": [
                {
                  "node": {
                    "id": "gid://shopify/LineItem/11232106840255",
                    "title": "DEEP HYDRATING CREAM \"ONE\" 50g",
                    "quantity": 1,
                    "variantTitle": "",
                    "originalTotalSet": {
                      "presentmentMoney": {
                        "amount": "139.5",
                        "currencyCode": "MYR"
                      }
                    }
                  }
                }
              ]
            }
          }
        },
        {
          "node": {
            "id": "gid://shopify/Order/4522217570495",
            "createdAt": "2022-07-15T12:49:04Z",
            "note": null,
            "name": "#1004",
            "customer": {
              "id": "gid://shopify/Customer/6272042959039",
              "displayName": "farismohammad ",
              "email": "rafieshaaris@yahoo.com",
              "phone": null,
              "note": null
            },
            "currentTotalPriceSet": {
              "presentmentMoney": {
                "amount": "120.0",
                "currencyCode": "MYR"
              }
            },
            "currentSubtotalLineItemsQuantity": 1,
            "tags": [],
            "lineItems": {
              "edges": [
                {
                  "node": {
                    "id": "gid://shopify/LineItem/11245739802815",
                    "title": "RENEW VITAMIN CREAM \"ONE\" 50g",
                    "quantity": 1,
                    "variantTitle": "",
                    "originalTotalSet": {
                      "presentmentMoney": {
                        "amount": "120.0",
                        "currencyCode": "MYR"
                      }
                    }
                  }
                }
              ]
            }
          }
        },
        {
          "node": {
            "id": "gid://shopify/Order/4558047150271",
            "createdAt": "2022-08-09T00:33:36Z",
            "note": null,
            "name": "#1005",
            "customer": {
              "id": "gid://shopify/Customer/6313354133695",
              "displayName": "TanMarianne",
              "email": "maryannetsc@gmail.com",
              "phone": null,
              "note": null
            },
            "currentTotalPriceSet": {
              "presentmentMoney": {
                "amount": "248.0",
                "currencyCode": "MYR"
              }
            },
            "currentSubtotalLineItemsQuantity": 1,
            "tags": [],
            "lineItems": {
              "edges": [
                {
                  "node": {
                    "id": "gid://shopify/LineItem/11312744333503",
                    "title": "DEEP HYDRATING CREAM \"ONE\" 50g x 2SETS",
                    "quantity": 1,
                    "variantTitle": "",
                    "originalTotalSet": {
                      "presentmentMoney": {
                        "amount": "248.0",
                        "currencyCode": "MYR"
                      }
                    }
                  }
                }
              ]
            }
          }
        },
        {
          "node": {
            "id": "gid://shopify/Order/4575796461759",
            "createdAt": "2022-08-17T13:30:53Z",
            "note": null,
            "name": "#1006",
            "customer": {
              "id": "gid://shopify/Customer/6325939568831",
              "displayName": " GhazaliZalina",
              "email": "zalina.ghazali@affinhwang.com",
              "phone": null,
              "note": null
            },
            "currentTotalPriceSet": {
              "presentmentMoney": {
                "amount": "115.0",
                "currencyCode": "MYR"
              }
            },
            "currentSubtotalLineItemsQuantity": 1,
            "tags": [],
            "lineItems": {
              "edges": [
                {
                  "node": {
                    "id": "gid://shopify/LineItem/11353329893567",
                    "title": "DEEP HYDRATING CREAM \"ONE\" 50g",
                    "quantity": 1,
                    "variantTitle": "",
                    "originalTotalSet": {
                      "presentmentMoney": {
                        "amount": "115.0",
                        "currencyCode": "MYR"
                      }
                    }
                  }
                }
              ]
            }
          }
        },
        {
          "node": {
            "id": "gid://shopify/Order/4594159976639",
            "createdAt": "2022-08-29T22:22:10Z",
            "note": null,
            "name": "#1007",
            "customer": {
              "id": "gid://shopify/Customer/6344190951615",
              "displayName": "ImanAmeena",
              "email": null,
              "phone": "+60102568583",
              "note": null
            },
            "currentTotalPriceSet": {
              "presentmentMoney": {
                "amount": "115.0",
                "currencyCode": "MYR"
              }
            },
            "currentSubtotalLineItemsQuantity": 1,
            "tags": [],
            "lineItems": {
              "edges": [
                {
                  "node": {
                    "id": "gid://shopify/LineItem/11387005042879",
                    "title": "DEEP HYDRATING CREAM \"ONE\" 50g",
                    "quantity": 1,
                    "variantTitle": "",
                    "originalTotalSet": {
                      "presentmentMoney": {
                        "amount": "115.0",
                        "currencyCode": "MYR"
                      }
                    }
                  }
                }
              ]
            }
          }
        },
        {
          "node": {
            "id": "gid://shopify/Order/4604120236223",
            "createdAt": "2022-09-05T00:36:09Z",
            "note": null,
            "name": "#1008",
            "customer": {
              "id": "gid://shopify/Customer/6352229236927",
              "displayName": "tingyi",
              "email": null,
              "phone": "+60104662946",
              "note": null
            },
            "currentTotalPriceSet": {
              "presentmentMoney": {
                "amount": "115.0",
                "currencyCode": "MYR"
              }
            },
            "currentSubtotalLineItemsQuantity": 1,
            "tags": [],
            "lineItems": {
              "edges": [
                {
                  "node": {
                    "id": "gid://shopify/LineItem/11406690910399",
                    "title": "DEEP HYDRATING CREAM \"ONE\" 50g",
                    "quantity": 1,
                    "variantTitle": null,
                    "originalTotalSet": {
                      "presentmentMoney": {
                        "amount": "115.0",
                        "currencyCode": "MYR"
                      }
                    }
                  }
                }
              ]
            }
          }
        },
        {
          "node": {
            "id": "gid://shopify/Order/4604866658495",
            "createdAt": "2022-09-05T15:06:21Z",
            "note": null,
            "name": "#1009",
            "customer": {
              "id": "gid://shopify/Customer/6354069356735",
              "displayName": "MohanAnand",
              "email": "ashoanan@hotmail.com",
              "phone": null,
              "note": null
            },
            "currentTotalPriceSet": {
              "presentmentMoney": {
                "amount": "115.0",
                "currencyCode": "MYR"
              }
            },
            "currentSubtotalLineItemsQuantity": 1,
            "tags": [],
            "lineItems": {
              "edges": [
                {
                  "node": {
                    "id": "gid://shopify/LineItem/11408103375039",
                    "title": "DEEP HYDRATING CREAM \"ONE\" 50g",
                    "quantity": 1,
                    "variantTitle": null,
                    "originalTotalSet": {
                      "presentmentMoney": {
                        "amount": "115.0",
                        "currencyCode": "MYR"
                      }
                    }
                  }
                }
              ]
            }
          }
        },
        {
          "node": {
            "id": "gid://shopify/Order/4621204553919",
            "createdAt": "2022-09-16T08:09:37Z",
            "note": null,
            "name": "#1010",
            "customer": {
              "id": "gid://shopify/Customer/6369707229375",
              "displayName": "KwanJun Chung",
              "email": "kwan788@gmail.com",
              "phone": null,
              "note": null
            },
            "currentTotalPriceSet": {
              "presentmentMoney": {
                "amount": "115.0",
                "currencyCode": "MYR"
              }
            },
            "currentSubtotalLineItemsQuantity": 1,
            "tags": [],
            "lineItems": {
              "edges": [
                {
                  "node": {
                    "id": "gid://shopify/LineItem/11441718231231",
                    "title": "RENEW VITAMIN CREAM \"ONE\" 50g",
                    "quantity": 1,
                    "variantTitle": null,
                    "originalTotalSet": {
                      "presentmentMoney": {
                        "amount": "115.0",
                        "currencyCode": "MYR"
                      }
                    }
                  }
                }
              ]
            }
          }
        },
        {
          "node": {
            "id": "gid://shopify/Order/4677417009343",
            "createdAt": "2022-10-20T12:39:46Z",
            "note": null,
            "name": "#1011",
            "customer": {
              "id": "gid://shopify/Customer/6354069356735",
              "displayName": "MohanAnand",
              "email": "ashoanan@hotmail.com",
              "phone": null,
              "note": null
            },
            "currentTotalPriceSet": {
              "presentmentMoney": {
                "amount": "136.0",
                "currencyCode": "MYR"
              }
            },
            "currentSubtotalLineItemsQuantity": 1,
            "tags": [],
            "lineItems": {
              "edges": [
                {
                  "node": {
                    "id": "gid://shopify/LineItem/11543669375167",
                    "title": "RENEW VITAMIN CREAM \"ONE\" 50g",
                    "quantity": 1,
                    "variantTitle": null,
                    "originalTotalSet": {
                      "presentmentMoney": {
                        "amount": "136.0",
                        "currencyCode": "MYR"
                      }
                    }
                  }
                }
              ]
            }
          }
        },
        {
          "node": {
            "id": "gid://shopify/Order/4682481434815",
            "createdAt": "2022-10-23T06:41:23Z",
            "note": null,
            "name": "#1012",
            "customer": {
              "id": "gid://shopify/Customer/6420522631359",
              "displayName": "PHOATWINZKY",
              "email": null,
              "phone": "+60138627377",
              "note": null
            },
            "currentTotalPriceSet": {
              "presentmentMoney": {
                "amount": "131.75",
                "currencyCode": "MYR"
              }
            },
            "currentSubtotalLineItemsQuantity": 1,
            "tags": [],
            "lineItems": {
              "edges": [
                {
                  "node": {
                    "id": "gid://shopify/LineItem/11552451133631",
                    "title": "DEEP HYDRATING CREAM \"ONE\" 50g",
                    "quantity": 1,
                    "variantTitle": null,
                    "originalTotalSet": {
                      "presentmentMoney": {
                        "amount": "131.75",
                        "currencyCode": "MYR"
                      }
                    }
                  }
                }
              ]
            }
          }
        },
        {
          "node": {
            "id": "gid://shopify/Order/4695604363455",
            "createdAt": "2022-10-31T09:10:02Z",
            "note": null,
            "name": "#1013",
            "customer": {
              "id": "gid://shopify/Customer/5879020290239",
              "displayName": "KamimuraMai",
              "email": "mai.kamimura@palston.com",
              "phone": null,
              "note": null
            },
            "currentTotalPriceSet": {
              "presentmentMoney": {
                "amount": "131.75",
                "currencyCode": "MYR"
              }
            },
            "currentSubtotalLineItemsQuantity": 1,
            "tags": [],
            "lineItems": {
              "edges": [
                {
                  "node": {
                    "id": "gid://shopify/LineItem/11576112414911",
                    "title": "DEEP HYDRATING CREAM \"ONE\" 50g",
                    "quantity": 1,
                    "variantTitle": null,
                    "originalTotalSet": {
                      "presentmentMoney": {
                        "amount": "131.75",
                        "currencyCode": "MYR"
                      }
                    }
                  }
                }
              ]
            }
          }
        },
        {
          "node": {
            "id": "gid://shopify/Order/4794244268223",
            "createdAt": "2022-12-20T12:48:39Z",
            "note": null,
            "name": "#1014",
            "customer": {
              "id": "gid://shopify/Customer/6528098304191",
              "displayName": "HuichineChua",
              "email": "huichine9777@gmail.com",
              "phone": null,
              "note": null
            },
            "currentTotalPriceSet": {
              "presentmentMoney": {
                "amount": "200.0",
                "currencyCode": "MYR"
              }
            },
            "currentSubtotalLineItemsQuantity": 2,
            "tags": [],
            "lineItems": {
              "edges": [
                {
                  "node": {
                    "id": "gid://shopify/LineItem/11760784998591",
                    "title": "Hydrating Dual Cleansing \"ONE\" 120g",
                    "quantity": 1,
                    "variantTitle": null,
                    "originalTotalSet": {
                      "presentmentMoney": {
                        "amount": "90.0",
                        "currencyCode": "MYR"
                      }
                    }
                  }
                },
                {
                  "node": {
                    "id": "gid://shopify/LineItem/11760785031359",
                    "title": "RENEW VITAMIN CREAM \"ONE\" 50g",
                    "quantity": 1,
                    "variantTitle": null,
                    "originalTotalSet": {
                      "presentmentMoney": {
                        "amount": "110.0",
                        "currencyCode": "MYR"
                      }
                    }
                  }
                }
              ]
            }
          }
        },
        {
          "node": {
            "id": "gid://shopify/Order/4808399913151",
            "createdAt": "2022-12-30T04:07:44Z",
            "note": null,
            "name": "#1015",
            "customer": {
              "id": "gid://shopify/Customer/6540140183743",
              "displayName": "KokZen Min",
              "email": null,
              "phone": "+60122219398",
              "note": null
            },
            "currentTotalPriceSet": {
              "presentmentMoney": {
                "amount": "110.0",
                "currencyCode": "MYR"
              }
            },
            "currentSubtotalLineItemsQuantity": 1,
            "tags": [],
            "lineItems": {
              "edges": [
                {
                  "node": {
                    "id": "gid://shopify/LineItem/11786913153215",
                    "title": "DEEP HYDRATING CREAM \"ONE\" 50g",
                    "quantity": 1,
                    "variantTitle": null,
                    "originalTotalSet": {
                      "presentmentMoney": {
                        "amount": "110.0",
                        "currencyCode": "MYR"
                      }
                    }
                  }
                }
              ]
            }
          }
        },
        {
          "node": {
            "id": "gid://shopify/Order/4816789569727",
            "createdAt": "2023-01-04T23:58:02Z",
            "note": null,
            "name": "#1016",
            "customer": {
              "id": "gid://shopify/Customer/6547711197375",
              "displayName": "GhazaliRazmah",
              "email": "razmahg@gmail.com",
              "phone": null,
              "note": null
            },
            "currentTotalPriceSet": {
              "presentmentMoney": {
                "amount": "110.0",
                "currencyCode": "MYR"
              }
            },
            "currentSubtotalLineItemsQuantity": 1,
            "tags": [],
            "lineItems": {
              "edges": [
                {
                  "node": {
                    "id": "gid://shopify/LineItem/11802355335359",
                    "title": "DEEP HYDRATING CREAM \"ONE\" 50g",
                    "quantity": 1,
                    "variantTitle": null,
                    "originalTotalSet": {
                      "presentmentMoney": {
                        "amount": "110.0",
                        "currencyCode": "MYR"
                      }
                    }
                  }
                }
              ]
            }
          }
        },
        {
          "node": {
            "id": "gid://shopify/Order/4935074676927",
            "createdAt": "2023-03-16T18:15:14Z",
            "note": null,
            "name": "#1017",
            "customer": {
              "id": "gid://shopify/Customer/6707783467199",
              "displayName": "LohGerry",
              "email": null,
              "phone": "+60122183595",
              "note": null
            },
            "currentTotalPriceSet": {
              "presentmentMoney": {
                "amount": "96.0",
                "currencyCode": "MYR"
              }
            },
            "currentSubtotalLineItemsQuantity": 1,
            "tags": [],
            "lineItems": {
              "edges": [
                {
                  "node": {
                    "id": "gid://shopify/LineItem/12025869566143",
                    "title": "Hydrating Dual Cleansing \"ONE\" 120g",
                    "quantity": 1,
                    "variantTitle": null,
                    "originalTotalSet": {
                      "presentmentMoney": {
                        "amount": "96.0",
                        "currencyCode": "MYR"
                      }
                    }
                  }
                }
              ]
            }
          }
        },
        {
          "node": {
            "id": "gid://shopify/Order/4967290044607",
            "createdAt": "2023-04-06T09:26:48Z",
            "note": null,
            "name": "#1018",
            "customer": {
              "id": "gid://shopify/Customer/6738573328575",
              "displayName": "SidhuPavither",
              "email": "pavithersidhu@gmail.com",
              "phone": null,
              "note": null
            },
            "currentTotalPriceSet": {
              "presentmentMoney": {
                "amount": "150.0",
                "currencyCode": "MYR"
              }
            },
            "currentSubtotalLineItemsQuantity": 1,
            "tags": [],
            "lineItems": {
              "edges": [
                {
                  "node": {
                    "id": "gid://shopify/LineItem/12084790853823",
                    "title": "DEEP HYDRATING CREAM \"ONE\" 50g",
                    "quantity": 1,
                    "variantTitle": null,
                    "originalTotalSet": {
                      "presentmentMoney": {
                        "amount": "150.0",
                        "currencyCode": "MYR"
                      }
                    }
                  }
                }
              ]
            }
          }
        },
        {
          "node": {
            "id": "gid://shopify/Order/4976698032319",
            "createdAt": "2023-04-13T05:56:58Z",
            "note": null,
            "name": "#1019",
            "customer": {
              "id": "gid://shopify/Customer/6738573328575",
              "displayName": "SidhuPavither",
              "email": "pavithersidhu@gmail.com",
              "phone": null,
              "note": null
            },
            "currentTotalPriceSet": {
              "presentmentMoney": {
                "amount": "150.0",
                "currencyCode": "MYR"
              }
            },
            "currentSubtotalLineItemsQuantity": 1,
            "tags": [],
            "lineItems": {
              "edges": [
                {
                  "node": {
                    "id": "gid://shopify/LineItem/12103105183935",
                    "title": "DEEP HYDRATING CREAM \"ONE\" 50g",
                    "quantity": 1,
                    "variantTitle": null,
                    "originalTotalSet": {
                      "presentmentMoney": {
                        "amount": "150.0",
                        "currencyCode": "MYR"
                      }
                    }
                  }
                }
              ]
            }
          }
        },
        {
          "node": {
            "id": "gid://shopify/Order/5025969471679",
            "createdAt": "2023-05-17T11:41:08Z",
            "note": null,
            "name": "#1020",
            "customer": {
              "id": "gid://shopify/Customer/6796164300991",
              "displayName": "KumariAnisha",
              "email": null,
              "phone": "+60143071828",
              "note": null
            },
            "currentTotalPriceSet": {
              "presentmentMoney": {
                "amount": "150.0",
                "currencyCode": "MYR"
              }
            },
            "currentSubtotalLineItemsQuantity": 1,
            "tags": [],
            "lineItems": {
              "edges": [
                {
                  "node": {
                    "id": "gid://shopify/LineItem/12195494592703",
                    "title": "DEEP HYDRATING CREAM \"ONE\" 50g",
                    "quantity": 1,
                    "variantTitle": null,
                    "originalTotalSet": {
                      "presentmentMoney": {
                        "amount": "150.0",
                        "currencyCode": "MYR"
                      }
                    }
                  }
                }
              ]
            }
          }
        },
        {
          "node": {
            "id": "gid://shopify/Order/5028343611583",
            "createdAt": "2023-05-19T06:23:55Z",
            "note": null,
            "name": "#1021",
            "customer": {
              "id": "gid://shopify/Customer/6791655096511",
              "displayName": "LeeTricia",
              "email": null,
              "phone": "+60192266088",
              "note": null
            },
            "currentTotalPriceSet": {
              "presentmentMoney": {
                "amount": "150.0",
                "currencyCode": "MYR"
              }
            },
            "currentSubtotalLineItemsQuantity": 1,
            "tags": [],
            "lineItems": {
              "edges": [
                {
                  "node": {
                    "id": "gid://shopify/LineItem/12200209252543",
                    "title": "DEEP HYDRATING CREAM \"ONE\" 50g",
                    "quantity": 1,
                    "variantTitle": null,
                    "originalTotalSet": {
                      "presentmentMoney": {
                        "amount": "150.0",
                        "currencyCode": "MYR"
                      }
                    }
                  }
                }
              ]
            }
          }
        },
        {
          "node": {
            "id": "gid://shopify/Order/5064269594815",
            "createdAt": "2023-06-13T04:28:30Z",
            "note": null,
            "name": "#1022",
            "customer": {
              "id": "gid://shopify/Customer/6843821031615",
              "displayName": "testtest",
              "email": "ata@jinnovation.jp",
              "phone": null,
              "note": null
            },
            "currentTotalPriceSet": {
              "presentmentMoney": {
                "amount": "0.0",
                "currencyCode": "MYR"
              }
            },
            "currentSubtotalLineItemsQuantity": 0,
            "tags": [],
            "lineItems": {
              "edges": [
                {
                  "node": {
                    "id": "gid://shopify/LineItem/12267832541375",
                    "title": "[7 Days trial sets] DEEP HYDRATING CREAM \"ONE\" 1g x 7",
                    "quantity": 1,
                    "variantTitle": null,
                    "originalTotalSet": {
                      "presentmentMoney": {
                        "amount": "35.0",
                        "currencyCode": "MYR"
                      }
                    }
                  }
                }
              ]
            }
          }
        },
        {
          "node": {
            "id": "gid://shopify/Order/5084334751935",
            "createdAt": "2023-06-25T12:32:13Z",
            "note": null,
            "name": "#1023",
            "customer": {
              "id": "gid://shopify/Customer/6888943812799",
              "displayName": "Leesow chin",
              "email": "sowchin.lee@gmail.com",
              "phone": null,
              "note": null
            },
            "currentTotalPriceSet": {
              "presentmentMoney": {
                "amount": "150.0",
                "currencyCode": "MYR"
              }
            },
            "currentSubtotalLineItemsQuantity": 1,
            "tags": [],
            "lineItems": {
              "edges": [
                {
                  "node": {
                    "id": "gid://shopify/LineItem/12303749611711",
                    "title": "DEEP HYDRATING CREAM \"ONE\" 50g",
                    "quantity": 1,
                    "variantTitle": null,
                    "originalTotalSet": {
                      "presentmentMoney": {
                        "amount": "150.0",
                        "currencyCode": "MYR"
                      }
                    }
                  }
                }
              ]
            }
          }
        },
        {
          "node": {
            "id": "gid://shopify/Order/5735970209983",
            "createdAt": "2024-07-01T09:50:00Z",
            "note": null,
            "name": "#1024",
            "customer": {
              "id": "gid://shopify/Customer/7834430341311",
              "displayName": "ShariffJamaliah",
              "email": null,
              "phone": "+60193221264",
              "note": null
            },
            "currentTotalPriceSet": {
              "presentmentMoney": {
                "amount": "155.0",
                "currencyCode": "MYR"
              }
            },
            "currentSubtotalLineItemsQuantity": 1,
            "tags": [],
            "lineItems": {
              "edges": [
                {
                  "node": {
                    "id": "gid://shopify/LineItem/13518553776319",
                    "title": "RENEW VITAMIN CREAM \"ONE\" 50g",
                    "quantity": 1,
                    "variantTitle": null,
                    "originalTotalSet": {
                      "presentmentMoney": {
                        "amount": "155.0",
                        "currencyCode": "MYR"
                      }
                    }
                  }
                }
              ]
            }
          }
        },
        {
          "node": {
            "id": "gid://shopify/Order/5879211688127",
            "createdAt": "2024-09-20T06:22:14Z",
            "note": "Order from Shopee 240920EWAF51TF",
            "name": "#1025",
            "customer": {
              "id": "gid://shopify/Customer/8022467051711",
              "displayName": "ShopeeT******g",
              "email": "shopee@oscoapp.com",
              "phone": null,
              "note": null
            },
            "currentTotalPriceSet": {
              "presentmentMoney": {
                "amount": "304.0",
                "currencyCode": "JPY"
              }
            },
            "currentSubtotalLineItemsQuantity": 2,
            "tags": [
              "shopee"
            ],
            "lineItems": {
              "edges": [
                {
                  "node": {
                    "id": "gid://shopify/LineItem/13796838113471",
                    "title": "teinei Deep Hydrating Cream One For Sensitive & Dry Matured Skin (50g)",
                    "quantity": 2,
                    "variantTitle": null,
                    "originalTotalSet": {
                      "presentmentMoney": {
                        "amount": "310.0",
                        "currencyCode": "JPY"
                      }
                    }
                  }
                }
              ]
            }
          }
        },
        {
          "node": {
            "id": "gid://shopify/Order/5885638017215",
            "createdAt": "2024-09-23T18:01:48Z",
            "note": "Order from Shopee 2409140MA2QNK8",
            "name": "#1026",
            "customer": {
              "id": "gid://shopify/Customer/8022467051711",
              "displayName": "ShopeeT******g",
              "email": "shopee@oscoapp.com",
              "phone": null,
              "note": null
            },
            "currentTotalPriceSet": {
              "presentmentMoney": {
                "amount": "120.0",
                "currencyCode": "JPY"
              }
            },
            "currentSubtotalLineItemsQuantity": 1,
            "tags": [
              "shopee"
            ],
            "lineItems": {
              "edges": [
                {
                  "node": {
                    "id": "gid://shopify/LineItem/13809111105727",
                    "title": "teinei 2-In-1 Hydrating Dual Cleansing One (120g)",
                    "quantity": 1,
                    "variantTitle": null,
                    "originalTotalSet": {
                      "presentmentMoney": {
                        "amount": "120.0",
                        "currencyCode": "JPY"
                      }
                    }
                  }
                }
              ]
            }
          }
        },
        {
          "node": {
            "id": "gid://shopify/Order/5886150213823",
            "createdAt": "2024-09-24T00:32:06Z",
            "note": "Order from Shopee 240924RBM17NB8",
            "name": "#1027",
            "customer": {
              "id": "gid://shopify/Customer/8022467051711",
              "displayName": "ShopeeT******g",
              "email": "shopee@oscoapp.com",
              "phone": null,
              "note": null
            },
            "currentTotalPriceSet": {
              "presentmentMoney": {
                "amount": "310.0",
                "currencyCode": "JPY"
              }
            },
            "currentSubtotalLineItemsQuantity": 1,
            "tags": [
              "shopee"
            ],
            "lineItems": {
              "edges": [
                {
                  "node": {
                    "id": "gid://shopify/LineItem/13810116264127",
                    "title": "teinei Deep Hydrating Cream One (50g x 2 Sets)",
                    "quantity": 1,
                    "variantTitle": null,
                    "originalTotalSet": {
                      "presentmentMoney": {
                        "amount": "310.0",
                        "currencyCode": "JPY"
                      }
                    }
                  }
                }
              ]
            }
          }
        },
        {
          "node": {
            "id": "gid://shopify/Order/5889277886655",
            "createdAt": "2024-09-25T14:38:00Z",
            "note": "Order from Shopee 240925VBB7VTV9",
            "name": "#1028",
            "customer": {
              "id": "gid://shopify/Customer/8022467051711",
              "displayName": "ShopeeT******g",
              "email": "shopee@oscoapp.com",
              "phone": null,
              "note": null
            },
            "currentTotalPriceSet": {
              "presentmentMoney": {
                "amount": "147.0",
                "currencyCode": "JPY"
              }
            },
            "currentSubtotalLineItemsQuantity": 1,
            "tags": [
              "shopee"
            ],
            "lineItems": {
              "edges": [
                {
                  "node": {
                    "id": "gid://shopify/LineItem/13816830230719",
                    "title": "teinei Deep Hydrating Cream One For Sensitive & Dry Matured Skin (50g)",
                    "quantity": 1,
                    "variantTitle": null,
                    "originalTotalSet": {
                      "presentmentMoney": {
                        "amount": "147.0",
                        "currencyCode": "JPY"
                      }
                    }
                  }
                }
              ]
            }
          }
        },
        {
          "node": {
            "id": "gid://shopify/Order/5896998420671",
            "createdAt": "2024-09-29T11:31:50Z",
            "note": "Order from Shopee 2409298YG1BVXD",
            "name": "#1029",
            "customer": {
              "id": "gid://shopify/Customer/8022467051711",
              "displayName": "ShopeeT******g",
              "email": "shopee@oscoapp.com",
              "phone": null,
              "note": null
            },
            "currentTotalPriceSet": {
              "presentmentMoney": {
                "amount": "304.0",
                "currencyCode": "JPY"
              }
            },
            "currentSubtotalLineItemsQuantity": 1,
            "tags": [
              "shopee"
            ],
            "lineItems": {
              "edges": [
                {
                  "node": {
                    "id": "gid://shopify/LineItem/13830597312703",
                    "title": "teinei Renew Vitamin Cream One (50g x 2 Sets)",
                    "quantity": 1,
                    "variantTitle": null,
                    "originalTotalSet": {
                      "presentmentMoney": {
                        "amount": "304.0",
                        "currencyCode": "JPY"
                      }
                    }
                  }
                }
              ]
            }
          }
        },
        {
          "node": {
            "id": "gid://shopify/Order/5897306636479",
            "createdAt": "2024-09-29T15:59:11Z",
            "note": "Order from Shopee 2409299EE5584M",
            "name": "#1030",
            "customer": {
              "id": "gid://shopify/Customer/8022467051711",
              "displayName": "ShopeeT******g",
              "email": "shopee@oscoapp.com",
              "phone": null,
              "note": null
            },
            "currentTotalPriceSet": {
              "presentmentMoney": {
                "amount": "114.0",
                "currencyCode": "JPY"
              }
            },
            "currentSubtotalLineItemsQuantity": 1,
            "tags": [
              "shopee"
            ],
            "lineItems": {
              "edges": [
                {
                  "node": {
                    "id": "gid://shopify/LineItem/13831166099647",
                    "title": "teinei 2-In-1 Hydrating Dual Cleansing One (120g)",
                    "quantity": 1,
                    "variantTitle": null,
                    "originalTotalSet": {
                      "presentmentMoney": {
                        "amount": "114.0",
                        "currencyCode": "JPY"
                      }
                    }
                  }
                }
              ]
            }
          }
        },
        {
          "node": {
            "id": "gid://shopify/Order/5899933122751",
            "createdAt": "2024-10-01T03:39:23Z",
            "note": "Order from Shopee 241001D610M2UN",
            "name": "#1031",
            "customer": {
              "id": "gid://shopify/Customer/8022467051711",
              "displayName": "ShopeeT******g",
              "email": "shopee@oscoapp.com",
              "phone": null,
              "note": null
            },
            "currentTotalPriceSet": {
              "presentmentMoney": {
                "amount": "155.0",
                "currencyCode": "JPY"
              }
            },
            "currentSubtotalLineItemsQuantity": 1,
            "tags": [
              "shopee"
            ],
            "lineItems": {
              "edges": [
                {
                  "node": {
                    "id": "gid://shopify/LineItem/13836183142591",
                    "title": "teinei Deep Hydrating Cream One For Sensitive & Dry Matured Skin (50g)",
                    "quantity": 1,
                    "variantTitle": null,
                    "originalTotalSet": {
                      "presentmentMoney": {
                        "amount": "155.0",
                        "currencyCode": "JPY"
                      }
                    }
                  }
                }
              ]
            }
          }
        },
        {
          "node": {
            "id": "gid://shopify/Order/5914401702079",
            "createdAt": "2024-10-09T12:32:39Z",
            "note": "Order from Shopee 241009547KQK30",
            "name": "#1032",
            "customer": {
              "id": "gid://shopify/Customer/8022467051711",
              "displayName": "ShopeeT******g",
              "email": "shopee@oscoapp.com",
              "phone": null,
              "note": null
            },
            "currentTotalPriceSet": {
              "presentmentMoney": {
                "amount": "599.0",
                "currencyCode": "JPY"
              }
            },
            "currentSubtotalLineItemsQuantity": 2,
            "tags": [
              "shopee"
            ],
            "lineItems": {
              "edges": [
                {
                  "node": {
                    "id": "gid://shopify/LineItem/13863158415551",
                    "title": "teinei Deep Hydrating Cream One (50g x 2 Sets)",
                    "quantity": 1,
                    "variantTitle": null,
                    "originalTotalSet": {
                      "presentmentMoney": {
                        "amount": "295.0",
                        "currencyCode": "JPY"
                      }
                    }
                  }
                },
                {
                  "node": {
                    "id": "gid://shopify/LineItem/13863158448319",
                    "title": "teinei Renew Vitamin Cream One (50g x 2 Sets)",
                    "quantity": 1,
                    "variantTitle": null,
                    "originalTotalSet": {
                      "presentmentMoney": {
                        "amount": "304.0",
                        "currencyCode": "JPY"
                      }
                    }
                  }
                }
              ]
            }
          }
        },
        {
          "node": {
            "id": "gid://shopify/Order/5915589935295",
            "createdAt": "2024-10-10T02:40:51Z",
            "note": "Order from Shopee 2410106KMB2D03",
            "name": "#1033",
            "customer": {
              "id": "gid://shopify/Customer/8022467051711",
              "displayName": "ShopeeT******g",
              "email": "shopee@oscoapp.com",
              "phone": null,
              "note": null
            },
            "currentTotalPriceSet": {
              "presentmentMoney": {
                "amount": "147.0",
                "currencyCode": "JPY"
              }
            },
            "currentSubtotalLineItemsQuantity": 1,
            "tags": [
              "shopee"
            ],
            "lineItems": {
              "edges": [
                {
                  "node": {
                    "id": "gid://shopify/LineItem/13865393324223",
                    "title": "teinei Deep Hydrating Cream One For Sensitive & Dry Matured Skin (50g)",
                    "quantity": 1,
                    "variantTitle": null,
                    "originalTotalSet": {
                      "presentmentMoney": {
                        "amount": "147.0",
                        "currencyCode": "JPY"
                      }
                    }
                  }
                }
              ]
            }
          }
        },
        {
          "node": {
            "id": "gid://shopify/Order/5915658125503",
            "createdAt": "2024-10-10T03:40:31Z",
            "note": "Order from Shopee 2410106PY43KFU",
            "name": "#1034",
            "customer": {
              "id": "gid://shopify/Customer/8022467051711",
              "displayName": "ShopeeT******g",
              "email": "shopee@oscoapp.com",
              "phone": null,
              "note": null
            },
            "currentTotalPriceSet": {
              "presentmentMoney": {
                "amount": "152.0",
                "currencyCode": "JPY"
              }
            },
            "currentSubtotalLineItemsQuantity": 1,
            "tags": [
              "shopee"
            ],
            "lineItems": {
              "edges": [
                {
                  "node": {
                    "id": "gid://shopify/LineItem/13865516204223",
                    "title": "teinei Hyperpigmentation Renew Vitamin Cream One (50g)",
                    "quantity": 1,
                    "variantTitle": null,
                    "originalTotalSet": {
                      "presentmentMoney": {
                        "amount": "152.0",
                        "currencyCode": "JPY"
                      }
                    }
                  }
                }
              ]
            }
          }
        },
        {
          "node": {
            "id": "gid://shopify/Order/5915749679295",
            "createdAt": "2024-10-10T05:20:22Z",
            "note": "Order from Shopee 2410106VHKPQB4",
            "name": "#1035",
            "customer": {
              "id": "gid://shopify/Customer/8022467051711",
              "displayName": "ShopeeT******g",
              "email": "shopee@oscoapp.com",
              "phone": null,
              "note": null
            },
            "currentTotalPriceSet": {
              "presentmentMoney": {
                "amount": "152.0",
                "currencyCode": "JPY"
              }
            },
            "currentSubtotalLineItemsQuantity": 1,
            "tags": [
              "shopee"
            ],
            "lineItems": {
              "edges": [
                {
                  "node": {
                    "id": "gid://shopify/LineItem/13865678012607",
                    "title": "teinei Hyperpigmentation Renew Vitamin Cream One (50g)",
                    "quantity": 1,
                    "variantTitle": null,
                    "originalTotalSet": {
                      "presentmentMoney": {
                        "amount": "152.0",
                        "currencyCode": "JPY"
                      }
                    }
                  }
                }
              ]
            }
          }
        },
        {
          "node": {
            "id": "gid://shopify/Order/5915906179263",
            "createdAt": "2024-10-10T09:11:58Z",
            "note": "Order from Shopee 241009531MS10H",
            "name": "#1036",
            "customer": {
              "id": "gid://shopify/Customer/8022467051711",
              "displayName": "ShopeeT******g",
              "email": "shopee@oscoapp.com",
              "phone": null,
              "note": null
            },
            "currentTotalPriceSet": {
              "presentmentMoney": {
                "amount": "298.0",
                "currencyCode": "JPY"
              }
            },
            "currentSubtotalLineItemsQuantity": 2,
            "tags": [
              "shopee"
            ],
            "lineItems": {
              "edges": [
                {
                  "node": {
                    "id": "gid://shopify/LineItem/13865952444607",
                    "title": "teinei Hyperpigmentation Renew Vitamin Cream One (50g)",
                    "quantity": 2,
                    "variantTitle": null,
                    "originalTotalSet": {
                      "presentmentMoney": {
                        "amount": "320.0",
                        "currencyCode": "JPY"
                      }
                    }
                  }
                }
              ]
            }
          }
        },
        {
          "node": {
            "id": "gid://shopify/Order/5915944943807",
            "createdAt": "2024-10-10T10:17:15Z",
            "note": "Order from Shopee 241010791TGE2T",
            "name": "#1037",
            "customer": {
              "id": "gid://shopify/Customer/8022467051711",
              "displayName": "ShopeeT******g",
              "email": "shopee@oscoapp.com",
              "phone": null,
              "note": null
            },
            "currentTotalPriceSet": {
              "presentmentMoney": {
                "amount": "152.0",
                "currencyCode": "JPY"
              }
            },
            "currentSubtotalLineItemsQuantity": 1,
            "tags": [
              "shopee"
            ],
            "lineItems": {
              "edges": [
                {
                  "node": {
                    "id": "gid://shopify/LineItem/13866023649471",
                    "title": "teinei Hyperpigmentation Renew Vitamin Cream One (50g)",
                    "quantity": 1,
                    "variantTitle": null,
                    "originalTotalSet": {
                      "presentmentMoney": {
                        "amount": "152.0",
                        "currencyCode": "JPY"
                      }
                    }
                  }
                }
              ]
            }
          }
        },
        {
          "node": {
            "id": "gid://shopify/Order/5917299900607",
            "createdAt": "2024-10-11T04:09:31Z",
            "note": null,
            "name": "#1038",
            "customer": {
              "id": "gid://shopify/Customer/8084125122751",
              "displayName": "宮城建司",
              "email": "conquest.miyagi@gmail.com",
              "phone": null,
              "note": null
            },
            "currentTotalPriceSet": {
              "presentmentMoney": {
                "amount": "4097.0",
                "currencyCode": "JPY"
              }
            },
            "currentSubtotalLineItemsQuantity": 1,
            "tags": [],
            "lineItems": {
              "edges": [
                {
                  "node": {
                    "id": "gid://shopify/LineItem/13868554879167",
                    "title": "RENEW VITAMIN CREAM \"ONE\" 50g",
                    "quantity": 1,
                    "variantTitle": null,
                    "originalTotalSet": {
                      "presentmentMoney": {
                        "amount": "5413.0",
                        "currencyCode": "JPY"
                      }
                    }
                  }
                }
              ]
            }
          }
        },
        {
          "node": {
            "id": "gid://shopify/Order/5917385425087",
            "createdAt": "2024-10-11T05:42:41Z",
            "note": "Order from Shopee 2410119E7R5D07",
            "name": "#1039",
            "customer": {
              "id": "gid://shopify/Customer/8022467051711",
              "displayName": "ShopeeT******g",
              "email": "shopee@oscoapp.com",
              "phone": null,
              "note": null
            },
            "currentTotalPriceSet": {
              "presentmentMoney": {
                "amount": "147.0",
                "currencyCode": "JPY"
              }
            },
            "currentSubtotalLineItemsQuantity": 1,
            "tags": [
              "shopee"
            ],
            "lineItems": {
              "edges": [
                {
                  "node": {
                    "id": "gid://shopify/LineItem/13868699615423",
                    "title": "teinei Deep Hydrating Cream One For Sensitive & Dry Matured Skin (50g)",
                    "quantity": 1,
                    "variantTitle": null,
                    "originalTotalSet": {
                      "presentmentMoney": {
                        "amount": "147.0",
                        "currencyCode": "JPY"
                      }
                    }
                  }
                }
              ]
            }
          }
        },
        {
          "node": {
            "id": "gid://shopify/Order/5923378004159",
            "createdAt": "2024-10-14T12:18:10Z",
            "note": "Order from Shopee 241014HNRD442P",
            "name": "#1040",
            "customer": {
              "id": "gid://shopify/Customer/8022467051711",
              "displayName": "ShopeeT******g",
              "email": "shopee@oscoapp.com",
              "phone": null,
              "note": null
            },
            "currentTotalPriceSet": {
              "presentmentMoney": {
                "amount": "435.0",
                "currencyCode": "JPY"
              }
            },
            "currentSubtotalLineItemsQuantity": 1,
            "tags": [
              "shopee"
            ],
            "lineItems": {
              "edges": [
                {
                  "node": {
                    "id": "gid://shopify/LineItem/13879312482495",
                    "title": "teinei One Skin Combo - All-In-One Cream + 2-In-1 Cleansing",
                    "quantity": 1,
                    "variantTitle": null,
                    "originalTotalSet": {
                      "presentmentMoney": {
                        "amount": "435.0",
                        "currencyCode": "JPY"
                      }
                    }
                  }
                }
              ]
            }
          }
        },
        {
          "node": {
            "id": "gid://shopify/Order/5923408150719",
            "createdAt": "2024-10-14T12:58:08Z",
            "note": "Order from Shopee 241014HH9DDVGC",
            "name": "#1041",
            "customer": {
              "id": "gid://shopify/Customer/8022467051711",
              "displayName": "ShopeeT******g",
              "email": "shopee@oscoapp.com",
              "phone": null,
              "note": null
            },
            "currentTotalPriceSet": {
              "presentmentMoney": {
                "amount": "155.0",
                "currencyCode": "JPY"
              }
            },
            "currentSubtotalLineItemsQuantity": 1,
            "tags": [
              "shopee"
            ],
            "lineItems": {
              "edges": [
                {
                  "node": {
                    "id": "gid://shopify/LineItem/13879368286399",
                    "title": "teinei Deep Hydrating Cream One For Sensitive & Dry Matured Skin (50g)",
                    "quantity": 1,
                    "variantTitle": null,
                    "originalTotalSet": {
                      "presentmentMoney": {
                        "amount": "155.0",
                        "currencyCode": "JPY"
                      }
                    }
                  }
                }
              ]
            }
          }
        },
        {
          "node": {
            "id": "gid://shopify/Order/5924844535999",
            "createdAt": "2024-10-15T06:07:43Z",
            "note": "Order from Shopee 241015KHEACFVM",
            "name": "#1042",
            "customer": {
              "id": "gid://shopify/Customer/8022467051711",
              "displayName": "ShopeeT******g",
              "email": "shopee@oscoapp.com",
              "phone": null,
              "note": null
            },
            "currentTotalPriceSet": {
              "presentmentMoney": {
                "amount": "160.0",
                "currencyCode": "JPY"
              }
            },
            "currentSubtotalLineItemsQuantity": 1,
            "tags": [
              "shopee"
            ],
            "lineItems": {
              "edges": [
                {
                  "node": {
                    "id": "gid://shopify/LineItem/13882044383423",
                    "title": "teinei Hyperpigmentation Renew Vitamin Cream One (50g)",
                    "quantity": 1,
                    "variantTitle": null,
                    "originalTotalSet": {
                      "presentmentMoney": {
                        "amount": "160.0",
                        "currencyCode": "JPY"
                      }
                    }
                  }
                }
              ]
            }
          }
        },
        {
          "node": {
            "id": "gid://shopify/Order/5927059914943",
            "createdAt": "2024-10-16T14:07:40Z",
            "note": "Order from Shopee 241016PTD0E5YN",
            "name": "#1043",
            "customer": {
              "id": "gid://shopify/Customer/8022467051711",
              "displayName": "ShopeeT******g",
              "email": "shopee@oscoapp.com",
              "phone": null,
              "note": null
            },
            "currentTotalPriceSet": {
              "presentmentMoney": {
                "amount": "120.0",
                "currencyCode": "JPY"
              }
            },
            "currentSubtotalLineItemsQuantity": 1,
            "tags": [
              "shopee"
            ],
            "lineItems": {
              "edges": [
                {
                  "node": {
                    "id": "gid://shopify/LineItem/13886005379263",
                    "title": "teinei 2-In-1 Hydrating Dual Cleansing One (120g)",
                    "quantity": 1,
                    "variantTitle": null,
                    "originalTotalSet": {
                      "presentmentMoney": {
                        "amount": "120.0",
                        "currencyCode": "JPY"
                      }
                    }
                  }
                }
              ]
            }
          }
        },
        {
          "node": {
            "id": "gid://shopify/Order/5927840612543",
            "createdAt": "2024-10-16T23:47:14Z",
            "note": "Order from Shopee 241017QW6CSN8J",
            "name": "#1044",
            "customer": {
              "id": "gid://shopify/Customer/8022467051711",
              "displayName": "ShopeeT******g",
              "email": "shopee@oscoapp.com",
              "phone": null,
              "note": null
            },
            "currentTotalPriceSet": {
              "presentmentMoney": {
                "amount": "309.0",
                "currencyCode": "JPY"
              }
            },
            "currentSubtotalLineItemsQuantity": 2,
            "tags": [
              "shopee"
            ],
            "lineItems": {
              "edges": [
                {
                  "node": {
                    "id": "gid://shopify/LineItem/13887560253631",
                    "title": "teinei Deep Hydrating Cream One For Sensitive & Dry Matured Skin (50g)",
                    "quantity": 1,
                    "variantTitle": null,
                    "originalTotalSet": {
                      "presentmentMoney": {
                        "amount": "155.0",
                        "currencyCode": "JPY"
                      }
                    }
                  }
                },
                {
                  "node": {
                    "id": "gid://shopify/LineItem/13887560286399",
                    "title": "teinei Hyperpigmentation Renew Vitamin Cream One (50g)",
                    "quantity": 1,
                    "variantTitle": null,
                    "originalTotalSet": {
                      "presentmentMoney": {
                        "amount": "160.0",
                        "currencyCode": "JPY"
                      }
                    }
                  }
                }
              ]
            }
          }
        },
        {
          "node": {
            "id": "gid://shopify/Order/5930582737087",
            "createdAt": "2024-10-18T17:56:35Z",
            "note": "Order from Shopee 241019VAH4F4ST",
            "name": "#1045",
            "customer": {
              "id": "gid://shopify/Customer/8022467051711",
              "displayName": "ShopeeT******g",
              "email": "shopee@oscoapp.com",
              "phone": null,
              "note": null
            },
            "currentTotalPriceSet": {
              "presentmentMoney": {
                "amount": "155.0",
                "currencyCode": "JPY"
              }
            },
            "currentSubtotalLineItemsQuantity": 1,
            "tags": [
              "shopee"
            ],
            "lineItems": {
              "edges": [
                {
                  "node": {
                    "id": "gid://shopify/LineItem/13892620779711",
                    "title": "teinei Deep Hydrating Cream One For Sensitive & Dry Matured Skin (50g)",
                    "quantity": 1,
                    "variantTitle": null,
                    "originalTotalSet": {
                      "presentmentMoney": {
                        "amount": "155.0",
                        "currencyCode": "JPY"
                      }
                    }
                  }
                }
              ]
            }
          }
        },
        {
          "node": {
            "id": "gid://shopify/Order/5940296188095",
            "createdAt": "2024-10-24T12:04:16Z",
            "note": "Order from Shopee 241024DPAB8JCJ",
            "name": "#1046",
            "customer": {
              "id": "gid://shopify/Customer/8022467051711",
              "displayName": "ShopeeT******g",
              "email": "shopee@oscoapp.com",
              "phone": null,
              "note": null
            },
            "currentTotalPriceSet": {
              "presentmentMoney": {
                "amount": "147.0",
                "currencyCode": "JPY"
              }
            },
            "currentSubtotalLineItemsQuantity": 1,
            "tags": [
              "shopee"
            ],
            "lineItems": {
              "edges": [
                {
                  "node": {
                    "id": "gid://shopify/LineItem/13910946382015",
                    "title": "teinei Deep Hydrating Cream One For Sensitive & Dry Matured Skin (50g)",
                    "quantity": 1,
                    "variantTitle": null,
                    "originalTotalSet": {
                      "presentmentMoney": {
                        "amount": "147.0",
                        "currencyCode": "JPY"
                      }
                    }
                  }
                }
              ]
            }
          }
        },
        {
          "node": {
            "id": "gid://shopify/Order/5947468153023",
            "createdAt": "2024-10-28T15:03:30Z",
            "note": "Order from Shopee 241028R26B6G0A",
            "name": "#1047",
            "customer": {
              "id": "gid://shopify/Customer/8022467051711",
              "displayName": "ShopeeT******g",
              "email": "shopee@oscoapp.com",
              "phone": null,
              "note": null
            },
            "currentTotalPriceSet": {
              "presentmentMoney": {
                "amount": "256.0",
                "currencyCode": "JPY"
              }
            },
            "currentSubtotalLineItemsQuantity": 2,
            "tags": [
              "shopee"
            ],
            "lineItems": {
              "edges": [
                {
                  "node": {
                    "id": "gid://shopify/LineItem/13923912319167",
                    "title": "teinei Deep Hydrating Cream One For Sensitive & Dry Matured Skin (50g)",
                    "quantity": 1,
                    "variantTitle": null,
                    "originalTotalSet": {
                      "presentmentMoney": {
                        "amount": "155.0",
                        "currencyCode": "JPY"
                      }
                    }
                  }
                },
                {
                  "node": {
                    "id": "gid://shopify/LineItem/13923912351935",
                    "title": "teinei 2-In-1 Hydrating Dual Cleansing One (120g)",
                    "quantity": 1,
                    "variantTitle": null,
                    "originalTotalSet": {
                      "presentmentMoney": {
                        "amount": "120.0",
                        "currencyCode": "JPY"
                      }
                    }
                  }
                }
              ]
            }
          }
        },
        {
          "node": {
            "id": "gid://shopify/Order/5950133567679",
            "createdAt": "2024-10-30T06:50:04Z",
            "note": "Order from Shopee 241030V7J2ATSG",
            "name": "#1048",
            "customer": {
              "id": "gid://shopify/Customer/8022467051711",
              "displayName": "ShopeeT******g",
              "email": "shopee@oscoapp.com",
              "phone": null,
              "note": null
            },
            "currentTotalPriceSet": {
              "presentmentMoney": {
                "amount": "147.0",
                "currencyCode": "JPY"
              }
            },
            "currentSubtotalLineItemsQuantity": 1,
            "tags": [
              "shopee"
            ],
            "lineItems": {
              "edges": [
                {
                  "node": {
                    "id": "gid://shopify/LineItem/13929054666943",
                    "title": "teinei Deep Hydrating Cream One For Sensitive & Dry Matured Skin (50g)",
                    "quantity": 1,
                    "variantTitle": null,
                    "originalTotalSet": {
                      "presentmentMoney": {
                        "amount": "147.0",
                        "currencyCode": "JPY"
                      }
                    }
                  }
                }
              ]
            }
          }
        },
        {
          "node": {
            "id": "gid://shopify/Order/5951866929343",
            "createdAt": "2024-10-31T03:33:16Z",
            "note": "Order from Shopee 24103119PSCWTB",
            "name": "#1049",
            "customer": {
              "id": "gid://shopify/Customer/8022467051711",
              "displayName": "ShopeeT******g",
              "email": "shopee@oscoapp.com",
              "phone": null,
              "note": null
            },
            "currentTotalPriceSet": {
              "presentmentMoney": {
                "amount": "413.0",
                "currencyCode": "JPY"
              }
            },
            "currentSubtotalLineItemsQuantity": 1,
            "tags": [
              "shopee"
            ],
            "lineItems": {
              "edges": [
                {
                  "node": {
                    "id": "gid://shopify/LineItem/13933243433151",
                    "title": "teinei One Skin Combo - All-In-One Cream + 2-In-1 Cleansing",
                    "quantity": 1,
                    "variantTitle": null,
                    "originalTotalSet": {
                      "presentmentMoney": {
                        "amount": "413.0",
                        "currencyCode": "JPY"
                      }
                    }
                  }
                }
              ]
            }
          }
        },
        {
          "node": {
            "id": "gid://shopify/Order/5959518879935",
            "createdAt": "2024-11-04T13:01:36Z",
            "note": null,
            "name": "#1050",
            "customer": {
              "id": "gid://shopify/Customer/8034735325375",
              "displayName": "sakaiatsuki",
              "email": "atk721@icloud.com",
              "phone": null,
              "note": null
            },
            "currentTotalPriceSet": {
              "presentmentMoney": {
                "amount": "0.0",
                "currencyCode": "JPY"
              }
            },
            "currentSubtotalLineItemsQuantity": 0,
            "tags": [],
            "lineItems": {
              "edges": [
                {
                  "node": {
                    "id": "gid://shopify/LineItem/13947415232703",
                    "title": "DEEP HYDRATING CREAM \"ONE\" 50g",
                    "quantity": 1,
                    "variantTitle": null,
                    "originalTotalSet": {
                      "presentmentMoney": {
                        "amount": "5245.0",
                        "currencyCode": "JPY"
                      }
                    }
                  }
                }
              ]
            }
          }
        }
      ],
      "pageInfo": {
        "hasNextPage": true,
        "endCursor": "eyJsYXN0X2lkIjo1OTU5NTE4ODc5OTM1LCJsYXN0X3ZhbHVlIjoiMjAyNC0xMS0wNCAxMzowMTozMi4wMzA1ODEifQ=="
      }
    }
  },
  "extensions": {
    "cost": {
      "requestedQueryCost": 93,
      "actualQueryCost": 37,
      "throttleStatus": {
        "maximumAvailable": 2000,
        "currentlyAvailable": 1963,
        "restoreRate": 100
      }
    }
  }
})

export const productSampleData = JSON.stringify({
    "data": {
      "products": {
        "edges": [
          {
            "node": {
              "id": "gid://shopify/Product/6948275060927",
              "title": "teinei DEEP HYDRATING CREAM “ONE” (50g)",
              "handle": "teinei-deep-hydrating-cream-one",
              "description": "Want clear & healthy skin but too lazy to go through all the steps? ✨Presenting you simplicity in a tub. teinei DEEP HYDRATING CREAM \"ONE\" is a 4-IN-ONE product that includes toner, serum and emulsion into one product.✨ MADE & FORMULATED IN JAPAN *****SAFE FOR SENSITIVE AND DRY SKIN TYPES***** ・soft and light creamy formula・one step skincare routine・locks in moisture to provide long lasting hydration・gentle for all skin types・fine particulate components that quickly penetrate and absorb into the skin・strengthen skin barrier function・protects the skin from external irritants 🍊 yuzu essence improves rough and wrinkled skin and alleviates irritation.🌸 sakura essence brightens and penetrates into the foundation of the skin to improve turnover cycle.🍶 fermented sake paste essence provides anti-aging properties ★FREE FROM HARSH CHEMICALSFree of Paraben, Ethanol, Talc, UV absorber, Mineral Oil, Sulfate, Pig-derived ingredients, Cow-derived ingredients, Synthetic dye, Synthetic perfume, and Silicone that can cause irritation and breakouts. Making it safe for people with sensitive skin too. ★HOW TO USEAfter washing your face, take a suitable amount (about 1cm diameter). Scoop the product with the attached spatula in your hand, and blend into the skin by gently patting. Apply an extra layer to dry areas if required. ★INGREDIENTSWATER, GLYCERIN, BUTYLENE GLYCOL, PENTYLENE GLYCOL, JOJOBA OIL/MACADAMIA SEED OIL ESTERS, SODIUM ASPARTATE, SODIUM ACETYLATED HYALURONATE, ALANINE, ALLANTOIN, ARGININE, ISOBUTYL ISOSTEARATE, ISOLEUCINE, DISODIUM INOSINATE, ELLAGIC ACID, OLEA EUROPAEA (OLIVE) FRUIT OIL, CARBOMER, DISODIUM GUANYLATE, GLYCOSYL TREHALOSE, GLYCINE, GLYCERYL GLUCOSIDE, DIPOTASSIUM GLYCYRRHIZATE, GLUTAMIC ACID, COCOYL ADIPIC ACID/TRIMETHYLOLPROPANE COPOLYMER, PRUNUS LANNESIANA FLOWER EXTRACT, BUTYROSPERMUM PARKII (SHEA) BUTTER, DIGLYCERIN, SQUALANE, SQUALENE, SALVIA OFFICINALIS (SAGE) LEAF EXTRACT, CERAMIDE AP, CERAMIDE NG, CERAMIDE NP, SERINE, PHYTOSTERYL/ISOSTEARYL/CETYL/STEARYL/BEHENYL DIMER DILINOLEATE, TAURINE, TYROSINE, TRIISOSTEARIN, THREONINE, VALINE, SODIUM HYALURONATE CROSSPOLYMER, HISTIDINE HCL, PHYTOSTEROLS, PHENYLALANINE, PHENOXYETHANOL, PROLINE, SIMMONDSIA CHINENSIS (JOJOBA) SEED OIL, PHYTOSTERYL MACADAMIATE, OENOTHERA BIENNIS (EVENING PRIMROSE) SEED EXTRACT, CITRUS JUNOS FRUIT EXTRACT, LYSINE HCL, LEUCINE, HYDROLYZED COLLAGEN, HYDROLYZED HYALURONIC ACID, HYDROLYZED ROYAL JELLY EXTRACT, HYDROGENATED STARCH HYDROLYSATE, ORYZA SATIVA (RICE) LEES EXTRACT, HYDROGENATED LECITHIN",
              "productType": "化粧水・乳液",
              "vendor": "teinei-Japan",
              "status": "ACTIVE",
              "totalInventory": 187,
              "createdAt": "2021-09-10T12:25:51Z",
              "updatedAt": "2024-12-27T16:02:34Z",
              "options": [
                {
                  "id": "gid://shopify/ProductOption/8903308771519",
                  "name": "Title",
                  "values": [
                    "Default Title"
                  ]
                }
              ],
              "priceRangeV2": {
                "minVariantPrice": {
                  "amount": "5245.0",
                  "currencyCode": "JPY"
                },
                "maxVariantPrice": {
                  "amount": "5245.0",
                  "currencyCode": "JPY"
                }
              },
              "compareAtPriceRange": null,
              "metafields": {
                "edges": [
                  {
                    "node": {
                      "namespace": "judgeme",
                      "key": "badge",
                      "value": "<div style='display:none' class='jdgm-prev-badge' data-average-rating='4.87' data-number-of-reviews='120' data-number-of-questions='0'> <span class='jdgm-prev-badge__stars' data-score='4.87' tabindex='0' aria-label='4.87 stars' role='button'> <span class='jdgm-star jdgm--on'></span><span class='jdgm-star jdgm--on'></span><span class='jdgm-star jdgm--on'></span><span class='jdgm-star jdgm--on'></span><span class='jdgm-star jdgm--on'></span> </span> <span class='jdgm-prev-badge__text'> 120 reviews </span> </div>",
                      "type": "string"
                    }
                  },
                  {
                    "node": {
                      "namespace": "judgeme",
                      "key": "widget",
                      "value": "<div class='jdgm-rev-widg' data-updated-at='2024-11-22T06:13:54Z' data-average-rating='4.87' data-number-of-reviews='120' data-number-of-questions='0'> <style class='jdgm-temp-hiding-style'>.jdgm-rev-widg{ display: none }</style> <div class='jdgm-rev-widg__header'> <h2 class='jdgm-rev-widg__title'>Customer Reviews</h2>  <div class='jdgm-rev-widg__summary'> <div class='jdgm-rev-widg__summary-stars' aria-label='Average rating is 4.87 stars' role='img'> <span class='jdgm-star jdgm--on'></span><span class='jdgm-star jdgm--on'></span><span class='jdgm-star jdgm--on'></span><span class='jdgm-star jdgm--on'></span><span class='jdgm-star jdgm--on'></span> </div> <div class='jdgm-rev-widg__summary-text'>Based on 120 reviews</div> </div> <a style='display: none' href='#' class='jdgm-write-rev-link' role='button'>Write a review</a> <div class='jdgm-histogram jdgm-temp-hidden'>  <div class='jdgm-histogram__row' data-rating='5' data-frequency='108' data-percentage='90'>  <div class='jdgm-histogram__star' role='button' aria-label=\"90% (108) reviews with 5 star rating\"  tabindex='0' ><span class='jdgm-star jdgm--on'></span><span class='jdgm-star jdgm--on'></span><span class='jdgm-star jdgm--on'></span><span class='jdgm-star jdgm--on'></span><span class='jdgm-star jdgm--on'></span></div> <div class='jdgm-histogram__bar'> <div class='jdgm-histogram__bar-content' style='width: 90%;'> </div> </div> <div class='jdgm-histogram__percentage'>90%</div> <div class='jdgm-histogram__frequency'>(108)</div> </div>  <div class='jdgm-histogram__row' data-rating='4' data-frequency='8' data-percentage='7'>  <div class='jdgm-histogram__star' role='button' aria-label=\"7% (8) reviews with 4 star rating\"  tabindex='0' ><span class='jdgm-star jdgm--on'></span><span class='jdgm-star jdgm--on'></span><span class='jdgm-star jdgm--on'></span><span class='jdgm-star jdgm--on'></span><span class='jdgm-star jdgm--off'></span></div> <div class='jdgm-histogram__bar'> <div class='jdgm-histogram__bar-content' style='width: 7%;'> </div> </div> <div class='jdgm-histogram__percentage'>7%</div> <div class='jdgm-histogram__frequency'>(8)</div> </div>  <div class='jdgm-histogram__row' data-rating='3' data-frequency='4' data-percentage='3'>  <div class='jdgm-histogram__star' role='button' aria-label=\"3% (4) reviews with 3 star rating\"  tabindex='0' ><span class='jdgm-star jdgm--on'></span><span class='jdgm-star jdgm--on'></span><span class='jdgm-star jdgm--on'></span><span class='jdgm-star jdgm--off'></span><span class='jdgm-star jdgm--off'></span></div> <div class='jdgm-histogram__bar'> <div class='jdgm-histogram__bar-content' style='width: 3%;'> </div> </div> <div class='jdgm-histogram__percentage'>3%</div> <div class='jdgm-histogram__frequency'>(4)</div> </div>  <div class='jdgm-histogram__row' data-rating='2' data-frequency='0' data-percentage='0'>  <div class='jdgm-histogram__star' role='button' aria-label=\"0% (0) reviews with 2 star rating\"  tabindex='0' ><span class='jdgm-star jdgm--on'></span><span class='jdgm-star jdgm--on'></span><span class='jdgm-star jdgm--off'></span><span class='jdgm-star jdgm--off'></span><span class='jdgm-star jdgm--off'></span></div> <div class='jdgm-histogram__bar'> <div class='jdgm-histogram__bar-content' style='width: 0%;'> </div> </div> <div class='jdgm-histogram__percentage'>0%</div> <div class='jdgm-histogram__frequency'>(0)</div> </div>  <div class='jdgm-histogram__row' data-rating='1' data-frequency='0' data-percentage='0'>  <div class='jdgm-histogram__star' role='button' aria-label=\"0% (0) reviews with 1 star rating\"  tabindex='0' ><span class='jdgm-star jdgm--on'></span><span class='jdgm-star jdgm--off'></span><span class='jdgm-star jdgm--off'></span><span class='jdgm-star jdgm--off'></span><span class='jdgm-star jdgm--off'></span></div> <div class='jdgm-histogram__bar'> <div class='jdgm-histogram__bar-content' style='width: 0%;'> </div> </div> <div class='jdgm-histogram__percentage'>0%</div> <div class='jdgm-histogram__frequency'>(0)</div> </div>  <div class='jdgm-histogram__row jdgm-histogram__clear-filter' data-rating=null tabindex='0'></div> </div>     <div class='jdgm-rev-widg__sort-wrapper'></div> </div> <div class='jdgm-rev-widg__body'> <div class='jdgm-rev-widg__reviews'><div class='jdgm-rev jdgm-divider-top' data-verified-buyer='false' data-review-id='49b2eb19-7be0-46b1-9706-45dcef44aa1e' data-product-title='DEEP HYDRATING CREAM &quot;ONE&quot; 50g' data-product-url='/products/teinei-deep-hydrating-cream-one' data-thumb-up-count='0' data-thumb-down-count='0'> <div class='jdgm-rev__header'>  <div class='jdgm-rev__icon' > e </div>  <span class='jdgm-rev__rating' data-score='5' tabindex='0' aria-label='5 star review' role='img'> <span class='jdgm-star jdgm--on'></span><span class='jdgm-star jdgm--on'></span><span class='jdgm-star jdgm--on'></span><span class='jdgm-star jdgm--on'></span><span class='jdgm-star jdgm--on'></span> </span> <span class='jdgm-rev__timestamp jdgm-spinner' data-content='2024-10-30 00:00:00 UTC'></span>    <div class='jdgm-rev__br'></div> <span class='jdgm-rev__buyer-badge-wrapper'>  </span> <span class='jdgm-rev__author-wrapper'> <span class='jdgm-rev__author'>eddyc0212</span> <span class='jdgm-rev__location' >  </span>  </span> </div> <div class='jdgm-rev__content'> <div class='jdgm-rev__custom-form'>  </div> <b class='jdgm-rev__title'></b> <div class='jdgm-rev__body'><p>Skin Suitability:Yet to be know soon\n<br />Absorption:Yet to be know soon\n<br />Super fast delivery. Look premium and solid. Will try for a month or only leave my comment.</p></div> <div class='jdgm-rev__pics'>  <a class='jdgm-rev__pic-link jdgm--loading' target='_blank' rel='nofollow' href='https://judgeme.imgix.net/teinei-japan/1732255843__2__VfTBN5gv__my-11134103-7ras9-m1znxzxjwzp4bb__original.?auto=format' data-mfp-src='https://judgeme.imgix.net/teinei-japan/1732255843__2__VfTBN5gv__my-11134103-7ras9-m1znxzxjwzp4bb__original.?auto=format&amp;w=1024' aria-label='Link to user picture 1'> <img class='jdgm-rev__pic-img' alt='User picture' data-src='https://judgeme.imgix.net/teinei-japan/1732255843__2__VfTBN5gv__my-11134103-7ras9-m1znxzxjwzp4bb__original.?auto=format&amp;w=160'> </a>  <a class='jdgm-rev__pic-link jdgm--loading' target='_blank' rel='nofollow' href='https://judgeme.imgix.net/teinei-japan/1732255843__1__5J6xBml6__my-11134103-7rasi-m1znxzxjvl4obc__original.?auto=format' data-mfp-src='https://judgeme.imgix.net/teinei-japan/1732255843__1__5J6xBml6__my-11134103-7rasi-m1znxzxjvl4obc__original.?auto=format&amp;w=1024' aria-label='Link to user picture 2'> <img class='jdgm-rev__pic-img' alt='User picture' data-src='https://judgeme.imgix.net/teinei-japan/1732255843__1__5J6xBml6__my-11134103-7rasi-m1znxzxjvl4obc__original.?auto=format&amp;w=160'> </a>  <a class='jdgm-rev__pic-link jdgm--loading' target='_blank' rel='nofollow' href='https://judgeme.imgix.net/teinei-japan/1732255842__0__uRpO9SjI__my-11134103-7rash-m1znxzxju6k82d__original.?auto=format' data-mfp-src='https://judgeme.imgix.net/teinei-japan/1732255842__0__uRpO9SjI__my-11134103-7rash-m1znxzxju6k82d__original.?auto=format&amp;w=1024' aria-label='Link to user picture 3'> <img class='jdgm-rev__pic-img' alt='User picture' data-src='https://judgeme.imgix.net/teinei-japan/1732255842__0__uRpO9SjI__my-11134103-7rash-m1znxzxju6k82d__original.?auto=format&amp;w=160'> </a>  <a class='jdgm-rev__pic-link jdgm--loading' target='_blank' rel='nofollow' href='https://judgeme.imgix.net/teinei-japan/1732255843__3__5uERKFnW__my-11134103-7rasc-m1znxzxjye9k9d__original.?auto=format' data-mfp-src='https://judgeme.imgix.net/teinei-japan/1732255843__3__5uERKFnW__my-11134103-7rasc-m1znxzxjye9k9d__original.?auto=format&amp;w=1024' aria-label='Link to user picture 4'> <img class='jdgm-rev__pic-img' alt='User picture' data-src='https://judgeme.imgix.net/teinei-japan/1732255843__3__5uERKFnW__my-11134103-7rasc-m1znxzxjye9k9d__original.?auto=format&amp;w=160'> </a>  </div> <div class='jdgm-rev__vids'>   </div> </div> <div class='jdgm-rev__actions'> <div class='jdgm-rev__social'></div> <div class='jdgm-rev__votes'></div> </div> <div class='jdgm-rev__reply'>  </div> </div><div class='jdgm-rev jdgm-divider-top' data-verified-buyer='false' data-review-id='f74da42b-c076-4de6-87e9-77ac14c69d15' data-product-title='DEEP HYDRATING CREAM &quot;ONE&quot; 50g' data-product-url='/products/teinei-deep-hydrating-cream-one' data-thumb-up-count='0' data-thumb-down-count='0'> <div class='jdgm-rev__header'>  <div class='jdgm-rev__icon' > s </div>  <span class='jdgm-rev__rating' data-score='5' tabindex='0' aria-label='5 star review' role='img'> <span class='jdgm-star jdgm--on'></span><span class='jdgm-star jdgm--on'></span><span class='jdgm-star jdgm--on'></span><span class='jdgm-star jdgm--on'></span><span class='jdgm-star jdgm--on'></span> </span> <span class='jdgm-rev__timestamp jdgm-spinner' data-content='2024-08-26 00:00:00 UTC'></span>    <div class='jdgm-rev__br'></div> <span class='jdgm-rev__buyer-badge-wrapper'>  </span> <span class='jdgm-rev__author-wrapper'> <span class='jdgm-rev__author'>s*****8</span> <span class='jdgm-rev__location' >  </span>  </span> </div> <div class='jdgm-rev__content'> <div class='jdgm-rev__custom-form'>  </div> <b class='jdgm-rev__title'></b> <div class='jdgm-rev__body'><p>Absorption:good\n<br />Skin Suitability:good\n<br />Ordered on 27 July 2024. Received on 31 July 2024.\n<br />Received in good condition.</p></div> <div class='jdgm-rev__pics'>  <a class='jdgm-rev__pic-link jdgm--loading' target='_blank' rel='nofollow' href='https://judgeme.imgix.net/teinei-japan/1732255843__0__cNE94nn9__my-11134103-7r992-lzfhbfclen3d95__original.?auto=format' data-mfp-src='https://judgeme.imgix.net/teinei-japan/1732255843__0__cNE94nn9__my-11134103-7r992-lzfhbfclen3d95__original.?auto=format&amp;w=1024' aria-label='Link to user picture 1'> <img class='jdgm-rev__pic-img' alt='User picture' data-src='https://judgeme.imgix.net/teinei-japan/1732255843__0__cNE94nn9__my-11134103-7r992-lzfhbfclen3d95__original.?auto=format&amp;w=160'> </a>  </div> <div class='jdgm-rev__vids'>   </div> </div> <div class='jdgm-rev__actions'> <div class='jdgm-rev__social'></div> <div class='jdgm-rev__votes'></div> </div> <div class='jdgm-rev__reply'>  </div> </div><div class='jdgm-rev jdgm-divider-top' data-verified-buyer='false' data-review-id='5de80e43-8f5a-47f6-b1ef-a2f8cb670631' data-product-title='DEEP HYDRATING CREAM &quot;ONE&quot; 50g' data-product-url='/products/teinei-deep-hydrating-cream-one' data-thumb-up-count='0' data-thumb-down-count='0'> <div class='jdgm-rev__header'>  <div class='jdgm-rev__icon' > s </div>  <span class='jdgm-rev__rating' data-score='5' tabindex='0' aria-label='5 star review' role='img'> <span class='jdgm-star jdgm--on'></span><span class='jdgm-star jdgm--on'></span><span class='jdgm-star jdgm--on'></span><span class='jdgm-star jdgm--on'></span><span class='jdgm-star jdgm--on'></span> </span> <span class='jdgm-rev__timestamp jdgm-spinner' data-content='2024-06-07 00:00:00 UTC'></span>    <div class='jdgm-rev__br'></div> <span class='jdgm-rev__buyer-badge-wrapper'>  </span> <span class='jdgm-rev__author-wrapper'> <span class='jdgm-rev__author'>su33zan</span> <span class='jdgm-rev__location' >  </span>  </span> </div> <div class='jdgm-rev__content'> <div class='jdgm-rev__custom-form'>  </div> <b class='jdgm-rev__title'></b> <div class='jdgm-rev__body'><p>Absorption:good\n<br />My mom using it. Very good for her skin. Cheaper than lazada.</p></div> <div class='jdgm-rev__pics'>  </div> <div class='jdgm-rev__vids'>   </div> </div> <div class='jdgm-rev__actions'> <div class='jdgm-rev__social'></div> <div class='jdgm-rev__votes'></div> </div> <div class='jdgm-rev__reply'>  </div> </div><div class='jdgm-rev jdgm-divider-top' data-verified-buyer='false' data-review-id='5a17e2fe-7d92-4f22-a071-97b1b4a33075' data-product-title='DEEP HYDRATING CREAM &quot;ONE&quot; 50g' data-product-url='/products/teinei-deep-hydrating-cream-one' data-thumb-up-count='0' data-thumb-down-count='0'> <div class='jdgm-rev__header'>  <div class='jdgm-rev__icon' > s </div>  <span class='jdgm-rev__rating' data-score='5' tabindex='0' aria-label='5 star review' role='img'> <span class='jdgm-star jdgm--on'></span><span class='jdgm-star jdgm--on'></span><span class='jdgm-star jdgm--on'></span><span class='jdgm-star jdgm--on'></span><span class='jdgm-star jdgm--on'></span> </span> <span class='jdgm-rev__timestamp jdgm-spinner' data-content='2024-03-08 00:00:00 UTC'></span>    <div class='jdgm-rev__br'></div> <span class='jdgm-rev__buyer-badge-wrapper'>  </span> <span class='jdgm-rev__author-wrapper'> <span class='jdgm-rev__author'>suifongchew</span> <span class='jdgm-rev__location' >  </span>  </span> </div> <div class='jdgm-rev__content'> <div class='jdgm-rev__custom-form'>  </div> <b class='jdgm-rev__title'></b> <div class='jdgm-rev__body'><p>Received with many thanks, all is in good condition. Delivery was faster than expexcted</p></div> <div class='jdgm-rev__pics'>  <a class='jdgm-rev__pic-link jdgm--loading' target='_blank' rel='nofollow' href='https://judgeme.imgix.net/teinei-japan/1732255843__1__Lvk2WwTK__my-11134103-7r98y-lsmnzxtpchyv19__original.?auto=format' data-mfp-src='https://judgeme.imgix.net/teinei-japan/1732255843__1__Lvk2WwTK__my-11134103-7r98y-lsmnzxtpchyv19__original.?auto=format&amp;w=1024' aria-label='Link to user picture 1'> <img class='jdgm-rev__pic-img' alt='User picture' data-src='https://judgeme.imgix.net/teinei-japan/1732255843__1__Lvk2WwTK__my-11134103-7r98y-lsmnzxtpchyv19__original.?auto=format&amp;w=160'> </a>  <a class='jdgm-rev__pic-link jdgm--loading' target='_blank' rel='nofollow' href='https://judgeme.imgix.net/teinei-japan/1732255843__0__444ncBl4__my-11134103-7r98w-lsmnzxtpb3ef8d__original.?auto=format' data-mfp-src='https://judgeme.imgix.net/teinei-japan/1732255843__0__444ncBl4__my-11134103-7r98w-lsmnzxtpb3ef8d__original.?auto=format&amp;w=1024' aria-label='Link to user picture 2'> <img class='jdgm-rev__pic-img' alt='User picture' data-src='https://judgeme.imgix.net/teinei-japan/1732255843__0__444ncBl4__my-11134103-7r98w-lsmnzxtpb3ef8d__original.?auto=format&amp;w=160'> </a>  </div> <div class='jdgm-rev__vids'>   </div> </div> <div class='jdgm-rev__actions'> <div class='jdgm-rev__social'></div> <div class='jdgm-rev__votes'></div> </div> <div class='jdgm-rev__reply'>  </div> </div><div class='jdgm-rev jdgm-divider-top' data-verified-buyer='false' data-review-id='6e6492d6-0eac-42bb-b077-346e5ebd95cb' data-product-title='DEEP HYDRATING CREAM &quot;ONE&quot; 50g' data-product-url='/products/teinei-deep-hydrating-cream-one' data-thumb-up-count='0' data-thumb-down-count='0'> <div class='jdgm-rev__header'>  <div class='jdgm-rev__icon' > s </div>  <span class='jdgm-rev__rating' data-score='5' tabindex='0' aria-label='5 star review' role='img'> <span class='jdgm-star jdgm--on'></span><span class='jdgm-star jdgm--on'></span><span class='jdgm-star jdgm--on'></span><span class='jdgm-star jdgm--on'></span><span class='jdgm-star jdgm--on'></span> </span> <span class='jdgm-rev__timestamp jdgm-spinner' data-content='2024-02-08 00:00:00 UTC'></span>    <div class='jdgm-rev__br'></div> <span class='jdgm-rev__buyer-badge-wrapper'>  </span> <span class='jdgm-rev__author-wrapper'> <span class='jdgm-rev__author'>sharonbernadette</span> <span class='jdgm-rev__location' >  </span>  </span> </div> <div class='jdgm-rev__content'> <div class='jdgm-rev__custom-form'>  </div> <b class='jdgm-rev__title'></b> <div class='jdgm-rev__body'><p>Received in good condition! Cannot wait to try it out!</p></div> <div class='jdgm-rev__pics'>  <a class='jdgm-rev__pic-link jdgm--loading' target='_blank' rel='nofollow' href='https://judgeme.imgix.net/teinei-japan/1732255844__0__jMDy1N90__my-11134103-7r98v-lrh79uii5o1jc8__original.?auto=format' data-mfp-src='https://judgeme.imgix.net/teinei-japan/1732255844__0__jMDy1N90__my-11134103-7r98v-lrh79uii5o1jc8__original.?auto=format&amp;w=1024' aria-label='Link to user picture 1'> <img class='jdgm-rev__pic-img' alt='User picture' data-src='https://judgeme.imgix.net/teinei-japan/1732255844__0__jMDy1N90__my-11134103-7r98v-lrh79uii5o1jc8__original.?auto=format&amp;w=160'> </a>  </div> <div class='jdgm-rev__vids'>   </div> </div> <div class='jdgm-rev__actions'> <div class='jdgm-rev__social'></div> <div class='jdgm-rev__votes'></div> </div> <div class='jdgm-rev__reply'>  </div> </div></div> <div class='jdgm-paginate' data-per-page='5' data-url='https://judge.me/reviews/reviews_for_widget'><a class='jdgm-paginate__page jdgm-curt' data-page='1' aria-label='Page 1' tabindex='0'  role='button'>1</a><a class='jdgm-paginate__page ' data-page='2' aria-label='Page 2' tabindex='0'  role='button'>2</a><a class='jdgm-paginate__page ' data-page='3' aria-label='Page 3' tabindex='0'  role='button'>3</a><a class='jdgm-paginate__page jdgm-paginate__next-page' data-page='2' aria-label='Page 2' tabindex='0' rel='next' role='button'></a><a class='jdgm-paginate__page jdgm-paginate__last-page' data-page='24' aria-label='Page 24' tabindex='0'  role='button'></a></div> </div> <div class='jdgm-rev-widg__paginate-spinner-wrapper'> <div class='jdgm-spinner'></div> </div> </div>",
                      "type": "string"
                    }
                  },
                  {
                    "node": {
                      "namespace": "reviews",
                      "key": "rating",
                      "value": "{\"scale_min\":\"1.0\",\"scale_max\":\"5.0\",\"value\":\"4.87\"}",
                      "type": "rating"
                    }
                  },
                  {
                    "node": {
                      "namespace": "reviews",
                      "key": "rating_count",
                      "value": "120",
                      "type": "number_integer"
                    }
                  }
                ]
              },
              "variants": {
                "edges": [
                  {
                    "node": {
                      "id": "gid://shopify/ProductVariant/40649777676479",
                      "title": "Default Title",
                      "sku": "DH1",
                      "inventoryQuantity": 187,
                      "price": "5245",
                      "compareAtPrice": null,
                      "selectedOptions": [
                        {
                          "name": "Title",
                          "value": "Default Title"
                        }
                      ],
                      "metafields": {
                        "edges": []
                      }
                    }
                  }
                ]
              }
            }
          },
          {
            "node": {
              "id": "gid://shopify/Product/7291294548159",
              "title": "DEEP HYDRATING CREAM \"ONE\" 50g x 2SETS",
              "handle": "deep-hydrating-cream-one-50g-x-2sets",
              "description": "Enjoy 4 functions in One product. Taking into consideration of local factors that affects the skin such as weather and cuisine, teinei DEEP HYDRATING CREAM \"ONE\" is specially curated for Malaysians. What is All-in-one? A skincare product that includes Toner, Serum, Emulsion, Moisturizer so that you can complete your skincare routine in just ONE STEP after cleansing. Say goodbye to fumbling through your array of skincare products! Perfect for people on-the-go and those who want a simple yet effective product! Radiant & glowy skin in One step. Gently formulated for people with sensitive skin. Rest assured as teinei DEEP HYDRATING CREAM \"ONE\" is equipped to support all skin types through restoring your skin barrier function. Achieve a radiant and healthy complexion through our product! Japanese derived natural ingredients. Carefully selected ingredients from the nature of Japan; Sakura, Yuzu, Sage and Rice Lees Extract, to gently support your skin function. teinei DEEP HYDRATING CREAM \"ONE\" will keep your skin moisturized even in the hot climate of Malaysia. Diverse voices that said Hydrated skin with One Launched in Malaysia since October 2021, love and satisfied voices are spreading through the community from people of all ages and diverse backgrounds. High Quality & Safety from Japan. Why is our product curated for Malaysians even though it was Made-In-Japan? Through many research and finding the right manufacturer to provide you the best benefits of Japanese skincare, your safety is our concern. Your safety is our priority. Here at teinei, we strive for inclusivity when it comes to skincare. Harmful ingredients and harsh chemicals are removed, as well as pig and cow-derived ingredients for your peace of mind. Ingredients water, glycerin, butylene glycol, pentylene glycol, jojoba oil/macadamia seed oil esters, sodium aspartate, sodium acetylated hyaluronate, alanine, allantoin, arginine, isobutyl isostearate, isoleucine, disodium inosinate, ellagic acid, olea europaea (olive) fruit oil, carbomer, disodium guanylate, glycosyl trehalose, glycine, glyceryl glucoside, dipotassium glycyrrhizate, glutamic acid, cocoyl adipic acid / trimethylolpropane copolymer, simmondsia chinensis (jojoba) seed oil, phytosteryl macadamiate, oenothera biennis (evening primrose) seed extract, citrus junos fruit extract, lysine hcl, leucine, hydrolyzed collagen, hydrolyzed hyaluronic acid, hydrolyzed royal jelly extract, hydrogenated starch hydrolysate, oryza sativa (rice) lees extract, hydrogenated lecithin",
              "productType": "化粧水・乳液",
              "vendor": "teinei-Japan",
              "status": "DRAFT",
              "totalInventory": 49,
              "createdAt": "2022-07-06T05:39:54Z",
              "updatedAt": "2024-12-23T16:42:38Z",
              "options": [
                {
                  "id": "gid://shopify/ProductOption/9310256890047",
                  "name": "Title",
                  "values": [
                    "Default Title"
                  ]
                }
              ],
              "priceRangeV2": {
                "minVariantPrice": {
                  "amount": "256.0",
                  "currencyCode": "JPY"
                },
                "maxVariantPrice": {
                  "amount": "256.0",
                  "currencyCode": "JPY"
                }
              },
              "compareAtPriceRange": {
                "minVariantCompareAtPrice": {
                  "amount": "310.0",
                  "currencyCode": "JPY"
                },
                "maxVariantCompareAtPrice": {
                  "amount": "310.0",
                  "currencyCode": "JPY"
                }
              },
              "metafields": {
                "edges": []
              },
              "variants": {
                "edges": [
                  {
                    "node": {
                      "id": "gid://shopify/ProductVariant/41780121534655",
                      "title": "Default Title",
                      "sku": "DH2",
                      "inventoryQuantity": 49,
                      "price": "256",
                      "compareAtPrice": "310",
                      "selectedOptions": [
                        {
                          "name": "Title",
                          "value": "Default Title"
                        }
                      ],
                      "metafields": {
                        "edges": []
                      }
                    }
                  }
                ]
              }
            }
          },
          {
            "node": {
              "id": "gid://shopify/Product/7291303002303",
              "title": "DEEP HYDRATING CREAM \"ONE\" 50g x 3SETS",
              "handle": "deep-hydrating-cream-one-50g-x-3sets",
              "description": "Enjoy 4 functions in One product. Taking into consideration of local factors that affects the skin such as weather and cuisine, teinei DEEP HYDRATING CREAM \"ONE\" is specially curated for Malaysians. What is All-in-one? A skincare product that includes Toner, Serum, Emulsion, Moisturizer so that you can complete your skincare routine in just ONE STEP after cleansing. Say goodbye to fumbling through your array of skincare products! Perfect for people on-the-go and those who want a simple yet effective product! Radiant & glowy skin in One step. Gently formulated for people with sensitive skin. Rest assured as teinei DEEP HYDRATING CREAM \"ONE\" is equipped to support all skin types through restoring your skin barrier function. Achieve a radiant and healthy complexion through our product! Japanese derived natural ingredients. Carefully selected ingredients from the nature of Japan; Sakura, Yuzu, Sage and Rice Lees Extract, to gently support your skin function. teinei DEEP HYDRATING CREAM \"ONE\" will keep your skin moisturized even in the hot climate of Malaysia. Diverse voices that said Hydrated skin with One Launched in Malaysia since October 2021, love and satisfied voices are spreading through the community from people of all ages and diverse backgrounds. High Quality & Safety from Japan. Why is our product curated for Malaysians even though it was Made-In-Japan? Through many research and finding the right manufacturer to provide you the best benefits of Japanese skincare, your safety is our concern. Your safety is our priority. Here at teinei, we strive for inclusivity when it comes to skincare. Harmful ingredients and harsh chemicals are removed, as well as pig and cow-derived ingredients for your peace of mind. Ingredients water, glycerin, butylene glycol, pentylene glycol, jojoba oil/macadamia seed oil esters, sodium aspartate, sodium acetylated hyaluronate, alanine, allantoin, arginine, isobutyl isostearate, isoleucine, disodium inosinate, ellagic acid, olea europaea (olive) fruit oil, carbomer, disodium guanylate, glycosyl trehalose, glycine, glyceryl glucoside, dipotassium glycyrrhizate, glutamic acid, cocoyl adipic acid / trimethylolpropane copolymer, simmondsia chinensis (jojoba) seed oil, phytosteryl macadamiate, oenothera biennis (evening primrose) seed extract, citrus junos fruit extract, lysine hcl, leucine, hydrolyzed collagen, hydrolyzed hyaluronic acid, hydrolyzed royal jelly extract, hydrogenated starch hydrolysate, oryza sativa (rice) lees extract, hydrogenated lecithin",
              "productType": "化粧水・乳液",
              "vendor": "teinei-Japan",
              "status": "DRAFT",
              "totalInventory": 50,
              "createdAt": "2022-07-06T05:47:45Z",
              "updatedAt": "2024-12-23T16:42:38Z",
              "options": [
                {
                  "id": "gid://shopify/ProductOption/9310265704639",
                  "name": "Title",
                  "values": [
                    "Default Title"
                  ]
                }
              ],
              "priceRangeV2": {
                "minVariantPrice": {
                  "amount": "372.0",
                  "currencyCode": "JPY"
                },
                "maxVariantPrice": {
                  "amount": "372.0",
                  "currencyCode": "JPY"
                }
              },
              "compareAtPriceRange": {
                "minVariantCompareAtPrice": {
                  "amount": "465.0",
                  "currencyCode": "JPY"
                },
                "maxVariantCompareAtPrice": {
                  "amount": "465.0",
                  "currencyCode": "JPY"
                }
              },
              "metafields": {
                "edges": []
              },
              "variants": {
                "edges": [
                  {
                    "node": {
                      "id": "gid://shopify/ProductVariant/41780138639551",
                      "title": "Default Title",
                      "sku": "DH3",
                      "inventoryQuantity": 50,
                      "price": "372",
                      "compareAtPrice": "465",
                      "selectedOptions": [
                        {
                          "name": "Title",
                          "value": "Default Title"
                        }
                      ],
                      "metafields": {
                        "edges": []
                      }
                    }
                  }
                ]
              }
            }
          },
          {
            "node": {
              "id": "gid://shopify/Product/7291325153471",
              "title": "teinei RENEW VITAMIN CREAM “ONE” (50g)",
              "handle": "teinei-renew-vitamin-cream-one-50g",
              "description": "Are you concerned about pimples or breakouts? Introducing the newest addition to teinei's comprehensive skincare line ONE, teinei RENEW VITAMIN CREAM \"ONE\", a 4-IN-ONE product that combines toner, serum, and emulsion into one. Now with an added new function that provides intensive care for pimples with the power of vitamins. Supporting round-the-clock treatment for clear, renewed skin. Formulated with triple action vitamin B,C and E, its smooth texture blends into a watery-like consistency for a quick absorption that penetrates well into the skin. ・Promotes intensive care to achieve glowy, youthful skin in ONE step.・For those who may have pimples scars and rough skin concerns.・Prevents age spots, freckles and wrinkles. ・Provides UV protection and conditions rough skin from the inside by activating skin turnover.・Carefully selected natural active ingredients such as glasswort (moisturizing) and lemongrass (anti-inflammatory, antibacterial and antioxidant).・Contains 3% Niacinamide to prevent aging and revitalize the skin. Triple care in ONE 1. Inflammation →Soothing care2. Blemishes → Clear care 3. Enlarged pores → Moisturizing care ★FREE FROM HARSH CHEMICALSFree of Paraben, Ethanol, Talc, UV absorber, Mineral Oil, Sulfate, Pig-derived ingredients, Cow-derived ingredients, Synthetic dye, Synthetic perfume, and Silicone that can cause irritation and breakouts. Making it safe for people with sensitive skin too. ★HOW TO USE: After washing your face, take a suitable amount (about 1cm diameter). Scoop the product with the attached spatula in your hand, and blend into the skin by gently patting. Apply an extra layer to dry areas if required. ★INGREDIENTSWATER, GLYCERIN, BUTYLENE GLYCOL, NIACINAMIDE, PENTYLENE GLYCOL, CETYL ETHYLHEXANOATE, BETAINE, 3-O-ETHYL ASCORBIC ACID, ASCORBYL GLUCOSIDE, BIS-GLYCERYL ASCORBATE, TOCOPHEROL, TOCOPHERYL ACETATE, DIPOTASSIUM GLYCYRRHIZATE, SALICORNIA HERBACEA EXTRACT, POLYGONUM CUSPIDATUM ROOT EXTRACT, SCUTELLARIA BAICALENSIS ROOT EXTRACT, GLYCYRRHIZA GLABRA (LICORICE) ROOT EXTRACT, CHAMOMILLA RECUTITA (MATRICARIA) FLOWER EXTRACT, CAMELLIA SINENSIS LEAF EXTRACT, CENTELLA ASIATICA EXTRACT, CYMBOPOGON SCHOENANTHUS LEAF/STEM EXTRACT, ROSMARINUS OFFICINALIS (ROSEMARY) LEAF EXTRACT, SODIUM HYALURONATE, HYDROLYZED HYALURONIC ACID, GLYCOSYL TREHALOSE, GLYCERYL GLUCOSIDE, TURPENTINE, TREHALOSE, CITRUS AURANTIUM BERGAMIA (BERGAMOT) FRUIT OIL, ORIGANUM MAJORANA LEAF OIL, EUCALYPTUS GLOBULUS LEAF OIL, LAVANDULA ANGUSTIFOLIA (LAVENDER) OIL, ROSMARINUS OFFICINALIS (ROSEMARY) LEAF OIL, PHENOXYETHANOL, POLYSORBATE 60, HYDROGENATED STARCH HYDROLYSATE, TRISODIUM HEDTA, CARBOMER, XANTHAN GUM, POTASSIUM HYDROXIDE",
              "productType": "美容・健康",
              "vendor": "teinei-Japan",
              "status": "ACTIVE",
              "totalInventory": 294,
              "createdAt": "2022-07-06T06:06:44Z",
              "updatedAt": "2024-12-27T16:11:18Z",
              "options": [
                {
                  "id": "gid://shopify/ProductOption/9310289363135",
                  "name": "Title",
                  "values": [
                    "Default Title"
                  ]
                }
              ],
              "priceRangeV2": {
                "minVariantPrice": {
                  "amount": "5413.0",
                  "currencyCode": "JPY"
                },
                "maxVariantPrice": {
                  "amount": "5413.0",
                  "currencyCode": "JPY"
                }
              },
              "compareAtPriceRange": null,
              "metafields": {
                "edges": [
                  {
                    "node": {
                      "namespace": "global",
                      "key": "description_tag",
                      "value": "RENEW VITAMIN CREAM \"ONE\" provides intensive care for adult acne & acne scars with the power of vitamins. Supporting round-the-clock treatment for clear, renewed skin. Formulated with 3 action vitamin B,C,E, its smooth texture blends into a watery-like consistency for a quick absorption penetrates well into the skin. ",
                      "type": "string"
                    }
                  },
                  {
                    "node": {
                      "namespace": "judgeme",
                      "key": "badge",
                      "value": "<div style='display:none' class='jdgm-prev-badge' data-average-rating='4.92' data-number-of-reviews='95' data-number-of-questions='0'> <span class='jdgm-prev-badge__stars' data-score='4.92' tabindex='0' aria-label='4.92 stars' role='button'> <span class='jdgm-star jdgm--on'></span><span class='jdgm-star jdgm--on'></span><span class='jdgm-star jdgm--on'></span><span class='jdgm-star jdgm--on'></span><span class='jdgm-star jdgm--on'></span> </span> <span class='jdgm-prev-badge__text'> 95 reviews </span> </div>",
                      "type": "string"
                    }
                  },
                  {
                    "node": {
                      "namespace": "judgeme",
                      "key": "widget",
                      "value": "<div class='jdgm-rev-widg' data-updated-at='2024-11-22T06:11:31Z' data-average-rating='4.92' data-number-of-reviews='95' data-number-of-questions='0'> <style class='jdgm-temp-hiding-style'>.jdgm-rev-widg{ display: none }</style> <div class='jdgm-rev-widg__header'> <h2 class='jdgm-rev-widg__title'>Customer Reviews</h2>  <div class='jdgm-rev-widg__summary'> <div class='jdgm-rev-widg__summary-stars' aria-label='Average rating is 4.92 stars' role='img'> <span class='jdgm-star jdgm--on'></span><span class='jdgm-star jdgm--on'></span><span class='jdgm-star jdgm--on'></span><span class='jdgm-star jdgm--on'></span><span class='jdgm-star jdgm--on'></span> </div> <div class='jdgm-rev-widg__summary-text'>Based on 95 reviews</div> </div> <a style='display: none' href='#' class='jdgm-write-rev-link' role='button'>Write a review</a> <div class='jdgm-histogram jdgm-temp-hidden'>  <div class='jdgm-histogram__row' data-rating='5' data-frequency='89' data-percentage='94'>  <div class='jdgm-histogram__star' role='button' aria-label=\"94% (89) reviews with 5 star rating\"  tabindex='0' ><span class='jdgm-star jdgm--on'></span><span class='jdgm-star jdgm--on'></span><span class='jdgm-star jdgm--on'></span><span class='jdgm-star jdgm--on'></span><span class='jdgm-star jdgm--on'></span></div> <div class='jdgm-histogram__bar'> <div class='jdgm-histogram__bar-content' style='width: 94%;'> </div> </div> <div class='jdgm-histogram__percentage'>94%</div> <div class='jdgm-histogram__frequency'>(89)</div> </div>  <div class='jdgm-histogram__row' data-rating='4' data-frequency='4' data-percentage='4'>  <div class='jdgm-histogram__star' role='button' aria-label=\"4% (4) reviews with 4 star rating\"  tabindex='0' ><span class='jdgm-star jdgm--on'></span><span class='jdgm-star jdgm--on'></span><span class='jdgm-star jdgm--on'></span><span class='jdgm-star jdgm--on'></span><span class='jdgm-star jdgm--off'></span></div> <div class='jdgm-histogram__bar'> <div class='jdgm-histogram__bar-content' style='width: 4%;'> </div> </div> <div class='jdgm-histogram__percentage'>4%</div> <div class='jdgm-histogram__frequency'>(4)</div> </div>  <div class='jdgm-histogram__row' data-rating='3' data-frequency='2' data-percentage='2'>  <div class='jdgm-histogram__star' role='button' aria-label=\"2% (2) reviews with 3 star rating\"  tabindex='0' ><span class='jdgm-star jdgm--on'></span><span class='jdgm-star jdgm--on'></span><span class='jdgm-star jdgm--on'></span><span class='jdgm-star jdgm--off'></span><span class='jdgm-star jdgm--off'></span></div> <div class='jdgm-histogram__bar'> <div class='jdgm-histogram__bar-content' style='width: 2%;'> </div> </div> <div class='jdgm-histogram__percentage'>2%</div> <div class='jdgm-histogram__frequency'>(2)</div> </div>  <div class='jdgm-histogram__row' data-rating='2' data-frequency='0' data-percentage='0'>  <div class='jdgm-histogram__star' role='button' aria-label=\"0% (0) reviews with 2 star rating\"  tabindex='0' ><span class='jdgm-star jdgm--on'></span><span class='jdgm-star jdgm--on'></span><span class='jdgm-star jdgm--off'></span><span class='jdgm-star jdgm--off'></span><span class='jdgm-star jdgm--off'></span></div> <div class='jdgm-histogram__bar'> <div class='jdgm-histogram__bar-content' style='width: 0%;'> </div> </div> <div class='jdgm-histogram__percentage'>0%</div> <div class='jdgm-histogram__frequency'>(0)</div> </div>  <div class='jdgm-histogram__row' data-rating='1' data-frequency='0' data-percentage='0'>  <div class='jdgm-histogram__star' role='button' aria-label=\"0% (0) reviews with 1 star rating\"  tabindex='0' ><span class='jdgm-star jdgm--on'></span><span class='jdgm-star jdgm--off'></span><span class='jdgm-star jdgm--off'></span><span class='jdgm-star jdgm--off'></span><span class='jdgm-star jdgm--off'></span></div> <div class='jdgm-histogram__bar'> <div class='jdgm-histogram__bar-content' style='width: 0%;'> </div> </div> <div class='jdgm-histogram__percentage'>0%</div> <div class='jdgm-histogram__frequency'>(0)</div> </div>  <div class='jdgm-histogram__row jdgm-histogram__clear-filter' data-rating=null tabindex='0'></div> </div>     <div class='jdgm-rev-widg__sort-wrapper'></div> </div> <div class='jdgm-rev-widg__body'> <div class='jdgm-rev-widg__reviews'><div class='jdgm-rev jdgm-divider-top' data-verified-buyer='false' data-review-id='5adf71f1-f3af-4de2-98d5-08fd6b783bd7' data-product-title='RENEW VITAMIN CREAM &quot;ONE&quot; 50g' data-product-url='/products/teinei-renew-vitamin-cream-one-50g' data-thumb-up-count='0' data-thumb-down-count='0'> <div class='jdgm-rev__header'>  <div class='jdgm-rev__icon' > g </div>  <span class='jdgm-rev__rating' data-score='5' tabindex='0' aria-label='5 star review' role='img'> <span class='jdgm-star jdgm--on'></span><span class='jdgm-star jdgm--on'></span><span class='jdgm-star jdgm--on'></span><span class='jdgm-star jdgm--on'></span><span class='jdgm-star jdgm--on'></span> </span> <span class='jdgm-rev__timestamp jdgm-spinner' data-content='2024-09-12 00:00:00 UTC'></span>    <div class='jdgm-rev__br'></div> <span class='jdgm-rev__buyer-badge-wrapper'>  </span> <span class='jdgm-rev__author-wrapper'> <span class='jdgm-rev__author'>g.s.teh</span> <span class='jdgm-rev__location' >  </span>  </span> </div> <div class='jdgm-rev__content'> <div class='jdgm-rev__custom-form'>  </div> <b class='jdgm-rev__title'></b> <div class='jdgm-rev__body'><p>Skin Suitability:Not yet use\n<br />Absorption:Not yet use\n<br />First buy and not yet use. Can give any comments or recommendations.</p></div> <div class='jdgm-rev__pics'>  <a class='jdgm-rev__pic-link jdgm--loading' target='_blank' rel='nofollow' href='https://judgeme.imgix.net/teinei-japan/1732255822__0__l-waewIP__my-11134103-7r98o-m036asgn2v0bf9__original.?auto=format' data-mfp-src='https://judgeme.imgix.net/teinei-japan/1732255822__0__l-waewIP__my-11134103-7r98o-m036asgn2v0bf9__original.?auto=format&amp;w=1024' aria-label='Link to user picture 1'> <img class='jdgm-rev__pic-img' alt='User picture' data-src='https://judgeme.imgix.net/teinei-japan/1732255822__0__l-waewIP__my-11134103-7r98o-m036asgn2v0bf9__original.?auto=format&amp;w=160'> </a>  </div> <div class='jdgm-rev__vids'>   </div> </div> <div class='jdgm-rev__actions'> <div class='jdgm-rev__social'></div> <div class='jdgm-rev__votes'></div> </div> <div class='jdgm-rev__reply'>  </div> </div><div class='jdgm-rev jdgm-divider-top' data-verified-buyer='false' data-review-id='4d7008ab-90cd-4248-9674-cfea84e78a20' data-product-title='RENEW VITAMIN CREAM &quot;ONE&quot; 50g' data-product-url='/products/teinei-renew-vitamin-cream-one-50g' data-thumb-up-count='0' data-thumb-down-count='0'> <div class='jdgm-rev__header'>  <div class='jdgm-rev__icon' > c </div>  <span class='jdgm-rev__rating' data-score='5' tabindex='0' aria-label='5 star review' role='img'> <span class='jdgm-star jdgm--on'></span><span class='jdgm-star jdgm--on'></span><span class='jdgm-star jdgm--on'></span><span class='jdgm-star jdgm--on'></span><span class='jdgm-star jdgm--on'></span> </span> <span class='jdgm-rev__timestamp jdgm-spinner' data-content='2024-09-04 00:00:00 UTC'></span>    <div class='jdgm-rev__br'></div> <span class='jdgm-rev__buyer-badge-wrapper'>  </span> <span class='jdgm-rev__author-wrapper'> <span class='jdgm-rev__author'>carolinenizlee</span> <span class='jdgm-rev__location' >  </span>  </span> </div> <div class='jdgm-rev__content'> <div class='jdgm-rev__custom-form'>  </div> <b class='jdgm-rev__title'></b> <div class='jdgm-rev__body'><p>Penghantaran sangat lambat</p></div> <div class='jdgm-rev__pics'>  </div> <div class='jdgm-rev__vids'>   </div> </div> <div class='jdgm-rev__actions'> <div class='jdgm-rev__social'></div> <div class='jdgm-rev__votes'></div> </div> <div class='jdgm-rev__reply'>  </div> </div><div class='jdgm-rev jdgm-divider-top' data-verified-buyer='false' data-review-id='88fdf992-7d4e-45fa-8e82-8110ad16715a' data-product-title='RENEW VITAMIN CREAM &quot;ONE&quot; 50g' data-product-url='/products/teinei-renew-vitamin-cream-one-50g' data-thumb-up-count='0' data-thumb-down-count='0'> <div class='jdgm-rev__header'>  <div class='jdgm-rev__icon' > r </div>  <span class='jdgm-rev__rating' data-score='5' tabindex='0' aria-label='5 star review' role='img'> <span class='jdgm-star jdgm--on'></span><span class='jdgm-star jdgm--on'></span><span class='jdgm-star jdgm--on'></span><span class='jdgm-star jdgm--on'></span><span class='jdgm-star jdgm--on'></span> </span> <span class='jdgm-rev__timestamp jdgm-spinner' data-content='2024-08-02 00:00:00 UTC'></span>    <div class='jdgm-rev__br'></div> <span class='jdgm-rev__buyer-badge-wrapper'>  </span> <span class='jdgm-rev__author-wrapper'> <span class='jdgm-rev__author'>rohizam72</span> <span class='jdgm-rev__location' >  </span>  </span> </div> <div class='jdgm-rev__content'> <div class='jdgm-rev__custom-form'>  </div> <b class='jdgm-rev__title'></b> <div class='jdgm-rev__body'><p>Skin Suitability:soft\n<br />Absorption:effective\n<br />verry good</p></div> <div class='jdgm-rev__pics'>  <a class='jdgm-rev__pic-link jdgm--loading' target='_blank' rel='nofollow' href='https://judgeme.imgix.net/teinei-japan/1732255821__1__Clg3jh2c__my-11134103-7r98v-lyfxu95dkg9s47__original.?auto=format' data-mfp-src='https://judgeme.imgix.net/teinei-japan/1732255821__1__Clg3jh2c__my-11134103-7r98v-lyfxu95dkg9s47__original.?auto=format&amp;w=1024' aria-label='Link to user picture 1'> <img class='jdgm-rev__pic-img' alt='User picture' data-src='https://judgeme.imgix.net/teinei-japan/1732255821__1__Clg3jh2c__my-11134103-7r98v-lyfxu95dkg9s47__original.?auto=format&amp;w=160'> </a>  <a class='jdgm-rev__pic-link jdgm--loading' target='_blank' rel='nofollow' href='https://judgeme.imgix.net/teinei-japan/1732255822__0__ixt5rQhh__my-11134103-7r98t-lyfxu95dj1pc20__original.?auto=format' data-mfp-src='https://judgeme.imgix.net/teinei-japan/1732255822__0__ixt5rQhh__my-11134103-7r98t-lyfxu95dj1pc20__original.?auto=format&amp;w=1024' aria-label='Link to user picture 2'> <img class='jdgm-rev__pic-img' alt='User picture' data-src='https://judgeme.imgix.net/teinei-japan/1732255822__0__ixt5rQhh__my-11134103-7r98t-lyfxu95dj1pc20__original.?auto=format&amp;w=160'> </a>  </div> <div class='jdgm-rev__vids'>   </div> </div> <div class='jdgm-rev__actions'> <div class='jdgm-rev__social'></div> <div class='jdgm-rev__votes'></div> </div> <div class='jdgm-rev__reply'>  </div> </div><div class='jdgm-rev jdgm-divider-top' data-verified-buyer='false' data-review-id='a3e9d2a6-83b7-4178-b58c-f04c9ebad72c' data-product-title='RENEW VITAMIN CREAM &quot;ONE&quot; 50g' data-product-url='/products/teinei-renew-vitamin-cream-one-50g' data-thumb-up-count='0' data-thumb-down-count='0'> <div class='jdgm-rev__header'>  <div class='jdgm-rev__icon' > s </div>  <span class='jdgm-rev__rating' data-score='5' tabindex='0' aria-label='5 star review' role='img'> <span class='jdgm-star jdgm--on'></span><span class='jdgm-star jdgm--on'></span><span class='jdgm-star jdgm--on'></span><span class='jdgm-star jdgm--on'></span><span class='jdgm-star jdgm--on'></span> </span> <span class='jdgm-rev__timestamp jdgm-spinner' data-content='2024-07-15 00:00:00 UTC'></span>    <div class='jdgm-rev__br'></div> <span class='jdgm-rev__buyer-badge-wrapper'>  </span> <span class='jdgm-rev__author-wrapper'> <span class='jdgm-rev__author'>sarahidilfitri</span> <span class='jdgm-rev__location' >  </span>  </span> </div> <div class='jdgm-rev__content'> <div class='jdgm-rev__custom-form'>  </div> <b class='jdgm-rev__title'></b> <div class='jdgm-rev__body'><p>My second time buying this product.</p></div> <div class='jdgm-rev__pics'>  </div> <div class='jdgm-rev__vids'>   </div> </div> <div class='jdgm-rev__actions'> <div class='jdgm-rev__social'></div> <div class='jdgm-rev__votes'></div> </div> <div class='jdgm-rev__reply'>  </div> </div><div class='jdgm-rev jdgm-divider-top' data-verified-buyer='false' data-review-id='1846c447-f178-435e-bd45-d3287ff78d3c' data-product-title='RENEW VITAMIN CREAM &quot;ONE&quot; 50g' data-product-url='/products/teinei-renew-vitamin-cream-one-50g' data-thumb-up-count='0' data-thumb-down-count='0'> <div class='jdgm-rev__header'>  <div class='jdgm-rev__icon' > f </div>  <span class='jdgm-rev__rating' data-score='4' tabindex='0' aria-label='4 star review' role='img'> <span class='jdgm-star jdgm--on'></span><span class='jdgm-star jdgm--on'></span><span class='jdgm-star jdgm--on'></span><span class='jdgm-star jdgm--on'></span><span class='jdgm-star jdgm--off'></span> </span> <span class='jdgm-rev__timestamp jdgm-spinner' data-content='2024-04-29 00:00:00 UTC'></span>    <div class='jdgm-rev__br'></div> <span class='jdgm-rev__buyer-badge-wrapper'>  </span> <span class='jdgm-rev__author-wrapper'> <span class='jdgm-rev__author'>frankiechung</span> <span class='jdgm-rev__location' >  </span>  </span> </div> <div class='jdgm-rev__content'> <div class='jdgm-rev__custom-form'>  </div> <b class='jdgm-rev__title'></b> <div class='jdgm-rev__body'><p>Order said delivered but couldn't find and one week later, found out it is as delivered to post office instead of physical address. All is good! Refund cancelled</p></div> <div class='jdgm-rev__pics'>  </div> <div class='jdgm-rev__vids'>   </div> </div> <div class='jdgm-rev__actions'> <div class='jdgm-rev__social'></div> <div class='jdgm-rev__votes'></div> </div> <div class='jdgm-rev__reply'>  </div> </div></div> <div class='jdgm-paginate' data-per-page='5' data-url='https://judge.me/reviews/reviews_for_widget'><a class='jdgm-paginate__page jdgm-curt' data-page='1' aria-label='Page 1' tabindex='0'  role='button'>1</a><a class='jdgm-paginate__page ' data-page='2' aria-label='Page 2' tabindex='0'  role='button'>2</a><a class='jdgm-paginate__page ' data-page='3' aria-label='Page 3' tabindex='0'  role='button'>3</a><a class='jdgm-paginate__page jdgm-paginate__next-page' data-page='2' aria-label='Page 2' tabindex='0' rel='next' role='button'></a><a class='jdgm-paginate__page jdgm-paginate__last-page' data-page='19' aria-label='Page 19' tabindex='0'  role='button'></a></div> </div> <div class='jdgm-rev-widg__paginate-spinner-wrapper'> <div class='jdgm-spinner'></div> </div> </div>",
                      "type": "string"
                    }
                  },
                  {
                    "node": {
                      "namespace": "reviews",
                      "key": "rating",
                      "value": "{\"scale_min\":\"1.0\",\"scale_max\":\"5.0\",\"value\":\"4.92\"}",
                      "type": "rating"
                    }
                  },
                  {
                    "node": {
                      "namespace": "reviews",
                      "key": "rating_count",
                      "value": "95",
                      "type": "number_integer"
                    }
                  }
                ]
              },
              "variants": {
                "edges": [
                  {
                    "node": {
                      "id": "gid://shopify/ProductVariant/41780181926079",
                      "title": "Default Title",
                      "sku": "RV1",
                      "inventoryQuantity": 294,
                      "price": "5413",
                      "compareAtPrice": null,
                      "selectedOptions": [
                        {
                          "name": "Title",
                          "value": "Default Title"
                        }
                      ],
                      "metafields": {
                        "edges": []
                      }
                    }
                  }
                ]
              }
            }
          },
          {
            "node": {
              "id": "gid://shopify/Product/7336075428031",
              "title": "teinei 2-in-1 HYDRATING DUAL CLEANSING ONE (120g)",
              "handle": "hydrating-dual-cleansing-one",
              "description": "teinei Hydrating Dual Cleansing ONE is a hybrid makeup remover and cleanser featuring a skin-refreshing Yuzu Extract that clears away makeup, excess sebum and impurities without drying out the skin. Starting out as a firm yet soft gel out of the tube, the cleanser evolves into a smooth oil when applied to allow dirt and makeup to slide off the skin easily without stripping moisture away to reveal a refreshed glowy complexion. Key benefits: Unique oil-in-gel formula that transforms from a gel to silky consistency. Effectively melts away makeup, removes residual dirt and oil, cleanses away impurities. Leaves skin residue free without feeling tight and dry. Say goodbye to double cleansing! One wash for squeaky clean skin! Key Ingredients: Yuzu Extract enhances the skin barrier function, retains moisture and improves wrinkles and fine lines. Ultra hydrating Natto Gum, made from fermented soybeans, prolongs and improves key hyaluronic acid functions. Okinawa Mozuku Extract calms skin inflammation. Rice bran oil, brightens the complexion, encourages moisture retention, and soothes irritation. ★FREE FROM HARSH CHEMICALS Free of Paraben, Ethanol, Talc, UV absorber, Mineral Oil, Sulfate, Pig-derived ingredients, Cow-derived ingredients, Synthetic dye, Synthetic perfume, and Silicone that can cause irritation and breakouts. Making it safe for people with sensitive skin too. ★HOW TO USE: Squeeze a suitable amount (about 1cm diameter) and rub the product in between dry hands. Massage over dry skin, concentrating on areas where makeup is applied. Be gentle around the eyes and lip area. Rinse off once done and gently pat dry with a towel.",
              "productType": "Cleansing",
              "vendor": "teinei-Japan",
              "status": "ACTIVE",
              "totalInventory": 130,
              "createdAt": "2022-09-01T05:46:16Z",
              "updatedAt": "2024-12-25T04:33:46Z",
              "options": [
                {
                  "id": "gid://shopify/ProductOption/9361564696767",
                  "name": "Title",
                  "values": [
                    "Default Title"
                  ]
                }
              ],
              "priceRangeV2": {
                "minVariantPrice": {
                  "amount": "4061.0",
                  "currencyCode": "JPY"
                },
                "maxVariantPrice": {
                  "amount": "4061.0",
                  "currencyCode": "JPY"
                }
              },
              "compareAtPriceRange": null,
              "metafields": {
                "edges": [
                  {
                    "node": {
                      "namespace": "judgeme",
                      "key": "badge",
                      "value": "<div style='display:none' class='jdgm-prev-badge' data-average-rating='5.00' data-number-of-reviews='13' data-number-of-questions='0'> <span class='jdgm-prev-badge__stars' data-score='5.00' tabindex='0' aria-label='5.00 stars' role='button'> <span class='jdgm-star jdgm--on'></span><span class='jdgm-star jdgm--on'></span><span class='jdgm-star jdgm--on'></span><span class='jdgm-star jdgm--on'></span><span class='jdgm-star jdgm--on'></span> </span> <span class='jdgm-prev-badge__text'> 13 reviews </span> </div>",
                      "type": "string"
                    }
                  },
                  {
                    "node": {
                      "namespace": "judgeme",
                      "key": "widget",
                      "value": "<div class='jdgm-rev-widg' data-updated-at='2024-11-22T06:11:31Z' data-average-rating='5.00' data-number-of-reviews='13' data-number-of-questions='0'> <style class='jdgm-temp-hiding-style'>.jdgm-rev-widg{ display: none }</style> <div class='jdgm-rev-widg__header'> <h2 class='jdgm-rev-widg__title'>Customer Reviews</h2>  <div class='jdgm-rev-widg__summary'> <div class='jdgm-rev-widg__summary-stars' aria-label='Average rating is 5.00 stars' role='img'> <span class='jdgm-star jdgm--on'></span><span class='jdgm-star jdgm--on'></span><span class='jdgm-star jdgm--on'></span><span class='jdgm-star jdgm--on'></span><span class='jdgm-star jdgm--on'></span> </div> <div class='jdgm-rev-widg__summary-text'>Based on 13 reviews</div> </div> <a style='display: none' href='#' class='jdgm-write-rev-link' role='button'>Write a review</a> <div class='jdgm-histogram jdgm-temp-hidden'>  <div class='jdgm-histogram__row' data-rating='5' data-frequency='13' data-percentage='100'>  <div class='jdgm-histogram__star' role='button' aria-label=\"100% (13) reviews with 5 star rating\"  tabindex='0' ><span class='jdgm-star jdgm--on'></span><span class='jdgm-star jdgm--on'></span><span class='jdgm-star jdgm--on'></span><span class='jdgm-star jdgm--on'></span><span class='jdgm-star jdgm--on'></span></div> <div class='jdgm-histogram__bar'> <div class='jdgm-histogram__bar-content' style='width: 100%;'> </div> </div> <div class='jdgm-histogram__percentage'>100%</div> <div class='jdgm-histogram__frequency'>(13)</div> </div>  <div class='jdgm-histogram__row' data-rating='4' data-frequency='0' data-percentage='0'>  <div class='jdgm-histogram__star' role='button' aria-label=\"0% (0) reviews with 4 star rating\"  tabindex='0' ><span class='jdgm-star jdgm--on'></span><span class='jdgm-star jdgm--on'></span><span class='jdgm-star jdgm--on'></span><span class='jdgm-star jdgm--on'></span><span class='jdgm-star jdgm--off'></span></div> <div class='jdgm-histogram__bar'> <div class='jdgm-histogram__bar-content' style='width: 0%;'> </div> </div> <div class='jdgm-histogram__percentage'>0%</div> <div class='jdgm-histogram__frequency'>(0)</div> </div>  <div class='jdgm-histogram__row' data-rating='3' data-frequency='0' data-percentage='0'>  <div class='jdgm-histogram__star' role='button' aria-label=\"0% (0) reviews with 3 star rating\"  tabindex='0' ><span class='jdgm-star jdgm--on'></span><span class='jdgm-star jdgm--on'></span><span class='jdgm-star jdgm--on'></span><span class='jdgm-star jdgm--off'></span><span class='jdgm-star jdgm--off'></span></div> <div class='jdgm-histogram__bar'> <div class='jdgm-histogram__bar-content' style='width: 0%;'> </div> </div> <div class='jdgm-histogram__percentage'>0%</div> <div class='jdgm-histogram__frequency'>(0)</div> </div>  <div class='jdgm-histogram__row' data-rating='2' data-frequency='0' data-percentage='0'>  <div class='jdgm-histogram__star' role='button' aria-label=\"0% (0) reviews with 2 star rating\"  tabindex='0' ><span class='jdgm-star jdgm--on'></span><span class='jdgm-star jdgm--on'></span><span class='jdgm-star jdgm--off'></span><span class='jdgm-star jdgm--off'></span><span class='jdgm-star jdgm--off'></span></div> <div class='jdgm-histogram__bar'> <div class='jdgm-histogram__bar-content' style='width: 0%;'> </div> </div> <div class='jdgm-histogram__percentage'>0%</div> <div class='jdgm-histogram__frequency'>(0)</div> </div>  <div class='jdgm-histogram__row' data-rating='1' data-frequency='0' data-percentage='0'>  <div class='jdgm-histogram__star' role='button' aria-label=\"0% (0) reviews with 1 star rating\"  tabindex='0' ><span class='jdgm-star jdgm--on'></span><span class='jdgm-star jdgm--off'></span><span class='jdgm-star jdgm--off'></span><span class='jdgm-star jdgm--off'></span><span class='jdgm-star jdgm--off'></span></div> <div class='jdgm-histogram__bar'> <div class='jdgm-histogram__bar-content' style='width: 0%;'> </div> </div> <div class='jdgm-histogram__percentage'>0%</div> <div class='jdgm-histogram__frequency'>(0)</div> </div>  <div class='jdgm-histogram__row jdgm-histogram__clear-filter' data-rating=null tabindex='0'></div> </div>     <div class='jdgm-rev-widg__sort-wrapper'></div> </div> <div class='jdgm-rev-widg__body'> <div class='jdgm-rev-widg__reviews'><div class='jdgm-rev jdgm-divider-top' data-verified-buyer='false' data-review-id='04b92b92-e934-4b6a-842c-88958dca0e47' data-product-title='Hydrating Dual Cleansing &quot;ONE&quot; 120g' data-product-url='/products/hydrating-dual-cleansing-one' data-thumb-up-count='0' data-thumb-down-count='0'> <div class='jdgm-rev__header'>  <div class='jdgm-rev__icon' > e </div>  <span class='jdgm-rev__rating' data-score='5' tabindex='0' aria-label='5 star review' role='img'> <span class='jdgm-star jdgm--on'></span><span class='jdgm-star jdgm--on'></span><span class='jdgm-star jdgm--on'></span><span class='jdgm-star jdgm--on'></span><span class='jdgm-star jdgm--on'></span> </span> <span class='jdgm-rev__timestamp jdgm-spinner' data-content='2024-10-30 00:00:00 UTC'></span>    <div class='jdgm-rev__br'></div> <span class='jdgm-rev__buyer-badge-wrapper'>  </span> <span class='jdgm-rev__author-wrapper'> <span class='jdgm-rev__author'>eddyc0212</span> <span class='jdgm-rev__location' >  </span>  </span> </div> <div class='jdgm-rev__content'> <div class='jdgm-rev__custom-form'>  </div> <b class='jdgm-rev__title'></b> <div class='jdgm-rev__body'><p>Cleaning Effect:No comment now\n<br />Texture:No comment now\n<br />Super fast delivery. Look premium and solid. Will try for a month or only leave my comment.</p></div> <div class='jdgm-rev__pics'>  <a class='jdgm-rev__pic-link jdgm--loading' target='_blank' rel='nofollow' href='https://judgeme.imgix.net/teinei-japan/1732255800__3__xjDCmXJQ__my-11134103-7rasa-m1zo37fpaj08f5__original.?auto=format' data-mfp-src='https://judgeme.imgix.net/teinei-japan/1732255800__3__xjDCmXJQ__my-11134103-7rasa-m1zo37fpaj08f5__original.?auto=format&amp;w=1024' aria-label='Link to user picture 1'> <img class='jdgm-rev__pic-img' alt='User picture' data-src='https://judgeme.imgix.net/teinei-japan/1732255800__3__xjDCmXJQ__my-11134103-7rasa-m1zo37fpaj08f5__original.?auto=format&amp;w=160'> </a>  <a class='jdgm-rev__pic-link jdgm--loading' target='_blank' rel='nofollow' href='https://judgeme.imgix.net/teinei-japan/1732255800__2__fXLR-H0j__my-11134103-7rasb-m1znxzxk2lywbd__original.?auto=format' data-mfp-src='https://judgeme.imgix.net/teinei-japan/1732255800__2__fXLR-H0j__my-11134103-7rasb-m1znxzxk2lywbd__original.?auto=format&amp;w=1024' aria-label='Link to user picture 2'> <img class='jdgm-rev__pic-img' alt='User picture' data-src='https://judgeme.imgix.net/teinei-japan/1732255800__2__fXLR-H0j__my-11134103-7rasb-m1znxzxk2lywbd__original.?auto=format&amp;w=160'> </a>  <a class='jdgm-rev__pic-link jdgm--loading' target='_blank' rel='nofollow' href='https://judgeme.imgix.net/teinei-japan/1732255801__1__ZYOLZd8s__my-11134103-7rasm-m1znxzxk17eg4c__original.?auto=format' data-mfp-src='https://judgeme.imgix.net/teinei-japan/1732255801__1__ZYOLZd8s__my-11134103-7rasm-m1znxzxk17eg4c__original.?auto=format&amp;w=1024' aria-label='Link to user picture 3'> <img class='jdgm-rev__pic-img' alt='User picture' data-src='https://judgeme.imgix.net/teinei-japan/1732255801__1__ZYOLZd8s__my-11134103-7rasm-m1znxzxk17eg4c__original.?auto=format&amp;w=160'> </a>  <a class='jdgm-rev__pic-link jdgm--loading' target='_blank' rel='nofollow' href='https://judgeme.imgix.net/teinei-japan/1732255802__0__-F0iZ7hz__my-11134103-7rasc-m1znxzxjzsu07e__original.?auto=format' data-mfp-src='https://judgeme.imgix.net/teinei-japan/1732255802__0__-F0iZ7hz__my-11134103-7rasc-m1znxzxjzsu07e__original.?auto=format&amp;w=1024' aria-label='Link to user picture 4'> <img class='jdgm-rev__pic-img' alt='User picture' data-src='https://judgeme.imgix.net/teinei-japan/1732255802__0__-F0iZ7hz__my-11134103-7rasc-m1znxzxjzsu07e__original.?auto=format&amp;w=160'> </a>  </div> <div class='jdgm-rev__vids'>   </div> </div> <div class='jdgm-rev__actions'> <div class='jdgm-rev__social'></div> <div class='jdgm-rev__votes'></div> </div> <div class='jdgm-rev__reply'>  </div> </div><div class='jdgm-rev jdgm-divider-top' data-verified-buyer='false' data-review-id='dbcdb8c0-f013-400e-8c5c-f59b944c9acb' data-product-title='Hydrating Dual Cleansing &quot;ONE&quot; 120g' data-product-url='/products/hydrating-dual-cleansing-one' data-thumb-up-count='0' data-thumb-down-count='0'> <div class='jdgm-rev__header'>  <div class='jdgm-rev__icon' > e </div>  <span class='jdgm-rev__rating' data-score='5' tabindex='0' aria-label='5 star review' role='img'> <span class='jdgm-star jdgm--on'></span><span class='jdgm-star jdgm--on'></span><span class='jdgm-star jdgm--on'></span><span class='jdgm-star jdgm--on'></span><span class='jdgm-star jdgm--on'></span> </span> <span class='jdgm-rev__timestamp jdgm-spinner' data-content='2024-10-23 00:00:00 UTC'></span>    <div class='jdgm-rev__br'></div> <span class='jdgm-rev__buyer-badge-wrapper'>  </span> <span class='jdgm-rev__author-wrapper'> <span class='jdgm-rev__author'>e*****6</span> <span class='jdgm-rev__location' >  </span>  </span> </div> <div class='jdgm-rev__content'> <div class='jdgm-rev__custom-form'>  </div> <b class='jdgm-rev__title'></b> <div class='jdgm-rev__body'><p>Cleaning Effect:very good\n<br />Texture:smooth spread.\n<br />Follow instructions to enjoy the benefit. Silap letak masa muka dh basah je, mcm x basuh muka. Hahaha.</p></div> <div class='jdgm-rev__pics'>  </div> <div class='jdgm-rev__vids'>   </div> </div> <div class='jdgm-rev__actions'> <div class='jdgm-rev__social'></div> <div class='jdgm-rev__votes'></div> </div> <div class='jdgm-rev__reply'>  </div> </div><div class='jdgm-rev jdgm-divider-top' data-verified-buyer='false' data-review-id='2181809d-edc0-4ffd-8da8-79699b8440fa' data-product-title='Hydrating Dual Cleansing &quot;ONE&quot; 120g' data-product-url='/products/hydrating-dual-cleansing-one' data-thumb-up-count='0' data-thumb-down-count='0'> <div class='jdgm-rev__header'>  <div class='jdgm-rev__icon' > s </div>  <span class='jdgm-rev__rating' data-score='5' tabindex='0' aria-label='5 star review' role='img'> <span class='jdgm-star jdgm--on'></span><span class='jdgm-star jdgm--on'></span><span class='jdgm-star jdgm--on'></span><span class='jdgm-star jdgm--on'></span><span class='jdgm-star jdgm--on'></span> </span> <span class='jdgm-rev__timestamp jdgm-spinner' data-content='2024-08-26 00:00:00 UTC'></span>    <div class='jdgm-rev__br'></div> <span class='jdgm-rev__buyer-badge-wrapper'>  </span> <span class='jdgm-rev__author-wrapper'> <span class='jdgm-rev__author'>s*****8</span> <span class='jdgm-rev__location' >  </span>  </span> </div> <div class='jdgm-rev__content'> <div class='jdgm-rev__custom-form'>  </div> <b class='jdgm-rev__title'></b> <div class='jdgm-rev__body'><p>Cleaning Effect:good\n<br />Texture:good\n<br />Ordered on 27 July 2024. Received on 31 July 2024.\n<br />Received in good condition.</p></div> <div class='jdgm-rev__pics'>  <a class='jdgm-rev__pic-link jdgm--loading' target='_blank' rel='nofollow' href='https://judgeme.imgix.net/teinei-japan/1732255801__0__fEUVmOFW__my-11134103-7r98o-lzfhbfclg1nt4d__original.?auto=format' data-mfp-src='https://judgeme.imgix.net/teinei-japan/1732255801__0__fEUVmOFW__my-11134103-7r98o-lzfhbfclg1nt4d__original.?auto=format&amp;w=1024' aria-label='Link to user picture 1'> <img class='jdgm-rev__pic-img' alt='User picture' data-src='https://judgeme.imgix.net/teinei-japan/1732255801__0__fEUVmOFW__my-11134103-7r98o-lzfhbfclg1nt4d__original.?auto=format&amp;w=160'> </a>  </div> <div class='jdgm-rev__vids'>   </div> </div> <div class='jdgm-rev__actions'> <div class='jdgm-rev__social'></div> <div class='jdgm-rev__votes'></div> </div> <div class='jdgm-rev__reply'>  </div> </div><div class='jdgm-rev jdgm-divider-top' data-verified-buyer='false' data-review-id='a031e0ff-4b77-47e7-a66f-37a9316998a1' data-product-title='Hydrating Dual Cleansing &quot;ONE&quot; 120g' data-product-url='/products/hydrating-dual-cleansing-one' data-thumb-up-count='0' data-thumb-down-count='0'> <div class='jdgm-rev__header'>  <div class='jdgm-rev__icon' > s </div>  <span class='jdgm-rev__rating' data-score='5' tabindex='0' aria-label='5 star review' role='img'> <span class='jdgm-star jdgm--on'></span><span class='jdgm-star jdgm--on'></span><span class='jdgm-star jdgm--on'></span><span class='jdgm-star jdgm--on'></span><span class='jdgm-star jdgm--on'></span> </span> <span class='jdgm-rev__timestamp jdgm-spinner' data-content='2024-02-15 00:00:00 UTC'></span>    <div class='jdgm-rev__br'></div> <span class='jdgm-rev__buyer-badge-wrapper'>  </span> <span class='jdgm-rev__author-wrapper'> <span class='jdgm-rev__author'>s*****0</span> <span class='jdgm-rev__location' >  </span>  </span> </div> <div class='jdgm-rev__content'> <div class='jdgm-rev__custom-form'>  </div> <b class='jdgm-rev__title'></b> <div class='jdgm-rev__body'><p>Cleaning Effect:effective\n<br />Texture:gel &amp; light\n<br />My skin is less oily &amp; feels softer. Recommended</p></div> <div class='jdgm-rev__pics'>  <a class='jdgm-rev__pic-link jdgm--loading' target='_blank' rel='nofollow' href='https://judgeme.imgix.net/teinei-japan/1732255800__0__UcnWWzvR__my-11134103-7r991-lrra8qzmjuhw93__original.?auto=format' data-mfp-src='https://judgeme.imgix.net/teinei-japan/1732255800__0__UcnWWzvR__my-11134103-7r991-lrra8qzmjuhw93__original.?auto=format&amp;w=1024' aria-label='Link to user picture 1'> <img class='jdgm-rev__pic-img' alt='User picture' data-src='https://judgeme.imgix.net/teinei-japan/1732255800__0__UcnWWzvR__my-11134103-7r991-lrra8qzmjuhw93__original.?auto=format&amp;w=160'> </a>  </div> <div class='jdgm-rev__vids'>   </div> </div> <div class='jdgm-rev__actions'> <div class='jdgm-rev__social'></div> <div class='jdgm-rev__votes'></div> </div> <div class='jdgm-rev__reply'>  </div> </div><div class='jdgm-rev jdgm-divider-top' data-verified-buyer='false' data-review-id='dbc59a38-b24d-4318-9926-7561f3c15e92' data-product-title='Hydrating Dual Cleansing &quot;ONE&quot; 120g' data-product-url='/products/hydrating-dual-cleansing-one' data-thumb-up-count='0' data-thumb-down-count='0'> <div class='jdgm-rev__header'>  <div class='jdgm-rev__icon' > n </div>  <span class='jdgm-rev__rating' data-score='5' tabindex='0' aria-label='5 star review' role='img'> <span class='jdgm-star jdgm--on'></span><span class='jdgm-star jdgm--on'></span><span class='jdgm-star jdgm--on'></span><span class='jdgm-star jdgm--on'></span><span class='jdgm-star jdgm--on'></span> </span> <span class='jdgm-rev__timestamp jdgm-spinner' data-content='2023-11-17 00:00:00 UTC'></span>    <div class='jdgm-rev__br'></div> <span class='jdgm-rev__buyer-badge-wrapper'>  </span> <span class='jdgm-rev__author-wrapper'> <span class='jdgm-rev__author'>ngiamel</span> <span class='jdgm-rev__location' >  </span>  </span> </div> <div class='jdgm-rev__content'> <div class='jdgm-rev__custom-form'>  </div> <b class='jdgm-rev__title'></b> <div class='jdgm-rev__body'><p>Skin Suitability:Effective for dry skin\n<br />Cleaning Effect:smooth skin\n<br />Nice fragrance. Best cleanser so far. Good recommendation 👍👍👍Thanks for the free gifts - suitable for travelling</p></div> <div class='jdgm-rev__pics'>  <a class='jdgm-rev__pic-link jdgm--loading' target='_blank' rel='nofollow' href='https://judgeme.imgix.net/teinei-japan/1732255801__0__97Vkbh50__my-11134103-7r98u-lo6i21zmfprka0__original.?auto=format' data-mfp-src='https://judgeme.imgix.net/teinei-japan/1732255801__0__97Vkbh50__my-11134103-7r98u-lo6i21zmfprka0__original.?auto=format&amp;w=1024' aria-label='Link to user picture 1'> <img class='jdgm-rev__pic-img' alt='User picture' data-src='https://judgeme.imgix.net/teinei-japan/1732255801__0__97Vkbh50__my-11134103-7r98u-lo6i21zmfprka0__original.?auto=format&amp;w=160'> </a>  </div> <div class='jdgm-rev__vids'>   </div> </div> <div class='jdgm-rev__actions'> <div class='jdgm-rev__social'></div> <div class='jdgm-rev__votes'></div> </div> <div class='jdgm-rev__reply'>  </div> </div></div> <div class='jdgm-paginate' data-per-page='5' data-url='https://judge.me/reviews/reviews_for_widget'><a class='jdgm-paginate__page jdgm-curt' data-page='1' aria-label='Page 1' tabindex='0'  role='button'>1</a><a class='jdgm-paginate__page ' data-page='2' aria-label='Page 2' tabindex='0'  role='button'>2</a><a class='jdgm-paginate__page ' data-page='3' aria-label='Page 3' tabindex='0'  role='button'>3</a><a class='jdgm-paginate__page jdgm-paginate__next-page' data-page='2' aria-label='Page 2' tabindex='0' rel='next' role='button'></a><a class='jdgm-paginate__page jdgm-paginate__last-page' data-page='3' aria-label='Page 3' tabindex='0'  role='button'></a></div> </div> <div class='jdgm-rev-widg__paginate-spinner-wrapper'> <div class='jdgm-spinner'></div> </div> </div>",
                      "type": "string"
                    }
                  },
                  {
                    "node": {
                      "namespace": "reviews",
                      "key": "rating",
                      "value": "{\"scale_min\":\"1.0\",\"scale_max\":\"5.0\",\"value\":\"5.0\"}",
                      "type": "rating"
                    }
                  },
                  {
                    "node": {
                      "namespace": "reviews",
                      "key": "rating_count",
                      "value": "13",
                      "type": "number_integer"
                    }
                  }
                ]
              },
              "variants": {
                "edges": [
                  {
                    "node": {
                      "id": "gid://shopify/ProductVariant/41904172564671",
                      "title": "Default Title",
                      "sku": "200",
                      "inventoryQuantity": 130,
                      "price": "4061",
                      "compareAtPrice": null,
                      "selectedOptions": [
                        {
                          "name": "Title",
                          "value": "Default Title"
                        }
                      ],
                      "metafields": {
                        "edges": []
                      }
                    }
                  }
                ]
              }
            }
          },
          {
            "node": {
              "id": "gid://shopify/Product/7428864704703",
              "title": "[7 Days trial sets] DEEP HYDRATING CREAM \"ONE\" 1g x 7",
              "handle": "7-days-trial-sets-deep-hydrating-cream-one-1g-x-7",
              "description": "",
              "productType": "",
              "vendor": "teinei-Japan",
              "status": "DRAFT",
              "totalInventory": 100,
              "createdAt": "2023-01-18T07:17:52Z",
              "updatedAt": "2024-12-23T16:42:38Z",
              "options": [
                {
                  "id": "gid://shopify/ProductOption/9477167579327",
                  "name": "Title",
                  "values": [
                    "Default Title"
                  ]
                }
              ],
              "priceRangeV2": {
                "minVariantPrice": {
                  "amount": "35.0",
                  "currencyCode": "JPY"
                },
                "maxVariantPrice": {
                  "amount": "35.0",
                  "currencyCode": "JPY"
                }
              },
              "compareAtPriceRange": null,
              "metafields": {
                "edges": []
              },
              "variants": {
                "edges": [
                  {
                    "node": {
                      "id": "gid://shopify/ProductVariant/42184507654335",
                      "title": "Default Title",
                      "sku": "5000",
                      "inventoryQuantity": 100,
                      "price": "35",
                      "compareAtPrice": null,
                      "selectedOptions": [
                        {
                          "name": "Title",
                          "value": "Default Title"
                        }
                      ],
                      "metafields": {
                        "edges": []
                      }
                    }
                  }
                ]
              }
            }
          }
        ],
        "pageInfo": {
          "hasNextPage": false,
          "endCursor": "eyJsYXN0X2lkIjo3NDI4ODY0NzA0NzAzLCJsYXN0X3ZhbHVlIjoiNzQyODg2NDcwNDcwMyJ9"
        }
      }
    },
    "extensions": {
      "cost": {
        "requestedQueryCost": 331,
        "actualQueryCost": 41,
        "throttleStatus": {
          "maximumAvailable": 2000,
          "currentlyAvailable": 1959,
          "restoreRate": 100
        }
      }
    }
})

export function convertOrdersToText(orders: Order[]): string {
    return orders
      .map((order: Order) => {
        return `注文日:${order.createdAt.toLocaleString()}
        注文番号: ${order.name || "不明"}
        注文ID: ${order.id.replace("gid://shopify/Order/", "")}
        注文金額: ${order.currentTotalPriceSet?.presentmentMoney.amount || "不明"} ${order.currentTotalPriceSet.presentmentMoney.currencyCode}
        注文者: ${order.customer?.displayName || "不明"}
        注文者メールアドレス: ${order.customer?.email || "不明"}
        注文者ID: ${order.customer?.id.replace("gid://shopify/Customer/", "") || "不明な注文者ID"}
        注文者電話番号: ${order.customer?.phone || "不明"}
        注文タグ: ${order.customer?.tags || "なし"}
        注文メモ: ${order.note || "なし"}
        商品: ${order.lineItems?.edges
          ?.map((edge: any) => edge.node)
          .filter(Boolean)
          .map(
            (item: any) =>
              `${item.title} x ${item.quantity}点 (${item.originalTotalSet?.presentmentMoney.amount}円)`,
          ).join(", ")}`;
      })
      .filter(Boolean) // 空の文字列を除去
      .join(CHUNK_SEPARATOR_SYMBOL);
}

export function convertProductsToText(products: Product[], shop: string) {
    // 更新日時順にソート
    const sortedProducts = products.sort(
      (a, b) => new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime(),
    );
  
    const productTexts = sortedProducts.map((product) => {
      // オプション
      const options = product.options
        .map((option: any) => `${option.name}: ${option.values.join(", ")}`)
        .filter(Boolean)
        .join(",");
  
      // 価格範囲
      const priceRange = `${product.priceRangeV2.minVariantPrice.amount} ${product.priceRangeV2.minVariantPrice.currencyCode} ～ ${product.priceRangeV2.maxVariantPrice.amount} ${product.priceRangeV2.maxVariantPrice.currencyCode}`;
  
      // メタフィールド
      const metafields = product.metafields.edges
        .map((meta: any) => {
          const metaNode = meta.node;
          if (metaNode.key === "badge" || metaNode.key === "widget") return null;
  
          let value = metaNode.value;
          try {
            if (value.startsWith("[")) {
              value = JSON.parse(value).join(", ");
            }
          } catch (e) {
            /* JSON解析に失敗した場合はそのままのvalueを使用 */
          }
          // HTMLタグを削除
          value = value.replace(/<[^>]*>/g, "").replace(/\n/g, " ");
          return `${metaNode.key.replace("_", "")}: ${value}`;
        })
        .filter(Boolean)
        .join("\n");
  
      // バリエーション
      const variants = product.variants.edges.map((variant: any) => {
        const variantNode = variant.node;
        const selectedOptions = variantNode.selectedOptions
          .map((o: any) => `${o.name}: ${o.value}`)
          .join("\n");
        const sku = variantNode.sku?.replaceAll("-", "") || null;
  
        return `商品名: ${variantNode.title}
        オプション: ${selectedOptions}
        価格: ${variantNode.price} ${variantNode.currencyCode || "JPY"}
        SKU: ${sku}
        在庫数: ${variantNode.inventoryQuantity || 0}`;
      });
  
      return `商品情報
      ${product.title == "Default Title" ? null : `商品名: ${product.title}`}
      商品ID: ${product.id.replace("gid://shopify/Product/", "")}
      商品URL: https://${shop}/products/${product.handle}
      商品タイプ: ${product.productType || ""}
      販売元: ${product.vendor || ""}
      公開ステータス: ${product.status}
      総在庫数: ${product.totalInventory || 0}
      最終更新日時: ${product.updatedAt}
      商品説明: ${
        product.description?.replace(/<[^>]*>/g, "").replace(/\n/g, " ") || ""
      }
      オプション:${options || ""}
      価格情報: ${priceRange}
      バリエーション:${variants}
      ${metafields || ""}`;
    });
  
    return productTexts.join(CHUNK_SEPARATOR_SYMBOL);
}
  

export const orderToSegments = (text: string): { id: number; text: string; keywords: string[] }[] => {
    const orderContents = text.split(CHUNK_SEPARATOR_SYMBOL);

    return orderContents.map((orderContent, index) => {
        const content = orderContent.split('注文データ')[1];
        if (!content) {
            return null;
        }

        const texts = content.split(`\n`).filter(Boolean);
        const allKeywords = texts.map((keyword: string) => keyword && keyword.trim());
            
        const availableKeywords = [
            "注文日",
            "注文番号",
            "注文金額",
            "注文者",
            "注文者メールアドレス",
            "注文タグ",
        ];

        const filteredKeywords = allKeywords.filter((keyword: string) =>
            availableKeywords.includes(keyword.split(`:`)[0].trim()),
        );

        const productPart = content.split("商品: ")[1];
        const productKeywords = productPart 
            ? productPart.split(`,`).map((keyword: string) => keyword && keyword.split(`x`)[0].trim())
            : [];

        const keywords = productKeywords.concat(filteredKeywords);

        return {
            id: index,
            text: content,
            keywords: keywords.filter(Boolean),
        };
    }).filter(Boolean) as { id: number; text: string; keywords: string[] }[]; // Type assertion to fix the error
};