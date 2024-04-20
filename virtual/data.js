var APP_DATA = {
  "scenes": [
    {
      "id": "0-salon",
      "name": "salon",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.5396019870895838
      },
      "linkHotspots": [
        {
          "yaw": 0.49424352086307977,
          "pitch": -0.021789025879083823,
          "rotation": 0,
          "target": "2-jadalnia"
        },
        {
          "yaw": 0.1580411162566442,
          "pitch": 0.06593809754732405,
          "rotation": 0,
          "target": "4-korytarz"
        },
        {
          "yaw": 2.6700299686457285,
          "pitch": 0.42339796948699693,
          "rotation": 0,
          "target": "1-taras"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -1.9809097983579633,
          "pitch": -0.09425183325405584,
          "title": "Kominek",
          "text": "Duży kominek z rozprowadzeniem gorącego powietrza"
        },
        {
          "yaw": 0.8217175654982984,
          "pitch": -0.045431316332743776,
          "title": "Drewniana zabudowa ściany",
          "text": "Podłoga i ściana w salonie zabudowana drewnem dębowym"
        }
      ]
    },
    {
      "id": "1-taras",
      "name": "taras",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 3.0225018806543016,
          "pitch": 0.019705988298449384,
          "rotation": 0,
          "target": "0-salon"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.23580322800462916,
          "pitch": 0.1449872574366502,
          "title": "Duża działka",
          "text": "Działka 15ar, ekspozycja południowa"
        },
        {
          "yaw": 1.3345632523428144,
          "pitch": 0.3422276020142938,
          "title": "Duży taras",
          "text": "Grube płytki położone na dystansach a nie na kleju"
        }
      ]
    },
    {
      "id": "2-jadalnia",
      "name": "jadalnia",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.5201874120820627,
          "pitch": 0.13465463302568992,
          "rotation": 0,
          "target": "0-salon"
        },
        {
          "yaw": -0.6545234803018118,
          "pitch": 0.11515064513447726,
          "rotation": 0,
          "target": "4-korytarz"
        },
        {
          "yaw": -0.01734506961426341,
          "pitch": 0.015179256938564478,
          "rotation": 0,
          "target": "3-kuchnia"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 3.072798873765798,
          "pitch": 0.3312079214356487,
          "title": "Nowoczesny stół",
          "text": "Piękny stół pokryty fornirem"
        }
      ]
    },
    {
      "id": "3-kuchnia",
      "name": "kuchnia",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 3.12526996691377,
          "pitch": 0.02366058563655038,
          "rotation": 0,
          "target": "2-jadalnia"
        },
        {
          "yaw": -2.478616563965687,
          "pitch": 0.09137107380498044,
          "rotation": 0,
          "target": "0-salon"
        },
        {
          "yaw": -1.7110407667742553,
          "pitch": 0.28658595189453706,
          "rotation": 0,
          "target": "4-korytarz"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.8173506879031187,
          "pitch": 0.1324626215395419,
          "title": "Funkcjonalna kuchnia",
          "text": "Lakierowane meble, płyta indukcyjna, dużo miejsca do przechowywania"
        }
      ]
    },
    {
      "id": "4-korytarz",
      "name": "korytarz",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.03174019180293186,
          "pitch": 0.09561977734857052,
          "rotation": 0,
          "target": "3-kuchnia"
        },
        {
          "yaw": 0.6790216643861022,
          "pitch": 0.07961516011967973,
          "rotation": 0,
          "target": "2-jadalnia"
        },
        {
          "yaw": 0.9312926690487071,
          "pitch": 0.3901633607486392,
          "rotation": 0,
          "target": "0-salon"
        },
        {
          "yaw": -0.4891561944644067,
          "pitch": 0.031744370867823335,
          "rotation": 0,
          "target": "5-spiarnia"
        },
        {
          "yaw": 1.7794412045908725,
          "pitch": -0.1511928513485774,
          "rotation": 0,
          "target": "14-pitro-korytarz-3"
        },
        {
          "yaw": -3.130534131753965,
          "pitch": 0.5804870490544527,
          "rotation": 0,
          "target": "6-korytarz-2"
        },
        {
          "yaw": -2.275389559725653,
          "pitch": 0.21387836995268472,
          "rotation": 0,
          "target": "9-wiatroap"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-spiarnia",
      "name": "spiżarnia",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.831311922291487,
          "pitch": 0.0030685564938366383,
          "rotation": 0,
          "target": "4-korytarz"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.12347304369931145,
          "pitch": -0.24003411302020794,
          "title": "Spiżarnia obok kuchni",
          "text": "Dużo dodatkowego miejsca na przechowywanie"
        }
      ]
    },
    {
      "id": "6-korytarz-2",
      "name": "korytarz 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.7834547278953092,
          "pitch": 0.10811398724725052,
          "rotation": 0,
          "target": "9-wiatroap"
        },
        {
          "yaw": -0.32197486302773015,
          "pitch": 0.41190476399112796,
          "rotation": 0,
          "target": "4-korytarz"
        },
        {
          "yaw": 2.8370653796898644,
          "pitch": 0.10155332862450983,
          "rotation": 0,
          "target": "11-garderoba-2"
        },
        {
          "yaw": -2.5918718311347515,
          "pitch": 0.1769189922914549,
          "rotation": 0,
          "target": "8-azienka"
        },
        {
          "yaw": 2.0192946434101415,
          "pitch": 0.45232865346335593,
          "rotation": 0,
          "target": "7-korytarz-3"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.4781404647896679,
          "pitch": 0.09145430291236778,
          "title": "Tapicerowana zabudowa",
          "text": "Posiada funkcję przechowywania"
        }
      ]
    },
    {
      "id": "7-korytarz-3",
      "name": "korytarz 3",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.2862691376607795,
          "pitch": 0.21187508032327074,
          "rotation": 0,
          "target": "6-korytarz-2"
        },
        {
          "yaw": 0.7618928387687127,
          "pitch": 0.015913995925245672,
          "rotation": 0,
          "target": "8-azienka"
        },
        {
          "yaw": 0.23330486486860558,
          "pitch": 0.09330040729535227,
          "rotation": 0,
          "target": "11-garderoba-2"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 2.599155608268296,
          "pitch": 0.59764183012709,
          "title": "Zejście do piwnicy",
          "text": "<div>Piwnica ok 40m2 posiada okno.</div>W piwnicy znajduje się kotłownia z piecem gazowym oraz pralnia"
        }
      ]
    },
    {
      "id": "8-azienka",
      "name": "łazienka",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -3.0588002310074085,
          "pitch": 0.11725150002090423,
          "rotation": 0,
          "target": "14-pitro-korytarz-3"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-wiatroap",
      "name": "wiatrołap",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.9131515952731526,
          "pitch": 0.1967891174357419,
          "rotation": 0,
          "target": "6-korytarz-2"
        },
        {
          "yaw": 1.8786933790009321,
          "pitch": 0.029617423862088543,
          "rotation": 0,
          "target": "10-przed-domem"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "10-przed-domem",
      "name": "przed domem",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.07535671036490044,
          "pitch": 0.028777642834119987,
          "rotation": 0,
          "target": "9-wiatroap"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -2.068405031073228,
          "pitch": -0.29867150915232443,
          "title": "Piękny świerk srebrzysty",
          "text": "Ponad dwudziestoletni świerk jest ozdbą ogrodu"
        },
        {
          "yaw": -1.317473266274419,
          "pitch": 0.0011198405331125372,
          "title": "Garaż dwustanowiskowy",
          "text": "Garaż jest podpiwniczony"
        }
      ]
    },
    {
      "id": "11-garderoba-2",
      "name": "garderoba 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.2556624392233768,
          "pitch": 0.15800923308133719,
          "rotation": 0,
          "target": "7-korytarz-3"
        },
        {
          "yaw": 0.02332321088994327,
          "pitch": 0.02341690796110818,
          "rotation": 0,
          "target": "12-garderoba"
        },
        {
          "yaw": -3.028293073448239,
          "pitch": 0.25899577584456424,
          "rotation": 0,
          "target": "13-gabinet"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "12-garderoba",
      "name": "garderoba",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -3.122006356552184,
          "pitch": 0.5330089588415241,
          "rotation": 0,
          "target": "11-garderoba-2"
        },
        {
          "yaw": 2.602746484061192,
          "pitch": 0.08099070673493003,
          "rotation": 0,
          "target": "7-korytarz-3"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.9443048749067469,
          "pitch": -0.17216831257530174,
          "title": "Duże szafy",
          "text": "Garderoba zbudowana jest z szaf na wymiar, które pomieszczą wiele ubrań"
        }
      ]
    },
    {
      "id": "13-gabinet",
      "name": "gabinet",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "yaw": -3.031617259532462,
        "pitch": 0.21829900371561806,
        "fov": 1.5396019870895838
      },
      "linkHotspots": [
        {
          "yaw": -0.17969646293958874,
          "pitch": 0.16220664811854135,
          "rotation": 0,
          "target": "11-garderoba-2"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -2.336289659213932,
          "pitch": -0.1403137517864117,
          "title": "Gabinet",
          "text": "Gabinet znajduje się w końcowej części domu, gdzie można spokojnie pracować"
        }
      ]
    },
    {
      "id": "14-pitro-korytarz-3",
      "name": "piętro korytarz 3",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "yaw": -2.006091351737039,
        "pitch": 0.5169596136586456,
        "fov": 1.5396019870895838
      },
      "linkHotspots": [
        {
          "yaw": -1.469012210543191,
          "pitch": 0.7136964315050243,
          "rotation": 0,
          "target": "4-korytarz"
        },
        {
          "yaw": -2.885450015434209,
          "pitch": 0.182891624857902,
          "rotation": 0,
          "target": "15-pitro-korytarz"
        },
        {
          "yaw": -2.4631373170365745,
          "pitch": 0.5282941258566218,
          "rotation": 0,
          "target": "16-pitro-korytarz-2"
        },
        {
          "yaw": 3.0651677867274314,
          "pitch": 0.10099559118699375,
          "rotation": 0,
          "target": "20-pitro-azienka"
        },
        {
          "yaw": 1.0366917405048781,
          "pitch": 0.11750993876067284,
          "rotation": 0,
          "target": "19-pitro-gocinny"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "15-pitro-korytarz",
      "name": "piętro korytarz",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "yaw": 1.50903626400165,
        "pitch": 0.2044115426412496,
        "fov": 1.5396019870895838
      },
      "linkHotspots": [
        {
          "yaw": 1.5217059697298518,
          "pitch": 0.14102642994595094,
          "rotation": 0,
          "target": "16-pitro-korytarz-2"
        },
        {
          "yaw": 0.354329985352166,
          "pitch": 0.1500834344327302,
          "rotation": 0,
          "target": "17-pitro-pokj"
        },
        {
          "yaw": -1.5563575993831122,
          "pitch": 0.45802670796086886,
          "rotation": 0,
          "target": "21-pitro-sypialnia"
        },
        {
          "yaw": 1.823798357571099,
          "pitch": 0.08370053757195528,
          "rotation": 0,
          "target": "20-pitro-azienka"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "16-pitro-korytarz-2",
      "name": "piętro korytarz 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "yaw": 2.999143519651269,
        "pitch": 0.3865520601389889,
        "fov": 1.5396019870895838
      },
      "linkHotspots": [
        {
          "yaw": 1.810409947667102,
          "pitch": 0.3918060019206031,
          "rotation": 0,
          "target": "14-pitro-korytarz-3"
        },
        {
          "yaw": -2.264704591304172,
          "pitch": 0.3745699734582981,
          "rotation": 0,
          "target": "15-pitro-korytarz"
        },
        {
          "yaw": -2.74626476681477,
          "pitch": 0.05044763401228103,
          "rotation": 0,
          "target": "20-pitro-azienka"
        },
        {
          "yaw": 2.040184133638337,
          "pitch": 0.03591223684494338,
          "rotation": 0,
          "target": "19-pitro-gocinny"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "17-pitro-pokj",
      "name": "piętro pokój",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "yaw": -3.0571074605339454,
        "pitch": 0.31561803159755186,
        "fov": 1.5396019870895838
      },
      "linkHotspots": [
        {
          "yaw": 0.3930681097359603,
          "pitch": 0.5018124133544397,
          "rotation": 0,
          "target": "18-pitro-balkon"
        },
        {
          "yaw": -2.330211007107213,
          "pitch": 0.08948704242696692,
          "rotation": 0,
          "target": "15-pitro-korytarz"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 2.750846918666813,
          "pitch": 0.046942664198658335,
          "title": "Pokój dziecka",
          "text": "Ściana pokryta farbą kredową. Dzieki niej każdy maluch może swobodnie po niej rysować :)"
        }
      ]
    },
    {
      "id": "18-pitro-balkon",
      "name": "piętro balkon",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "yaw": -3.0081702331553455,
        "pitch": 0.31303712840076514,
        "fov": 1.5396019870895838
      },
      "linkHotspots": [
        {
          "yaw": -0.2575914823739964,
          "pitch": 0.029011651924431447,
          "rotation": 0,
          "target": "17-pitro-pokj"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -2.9406694309480486,
          "pitch": -0.16977313846530961,
          "title": "Piękny widok z okna",
          "text": "W słoneczne dni widać góry"
        }
      ]
    },
    {
      "id": "19-pitro-gocinny",
      "name": "piętro gościnny",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "yaw": 1.9546036344146618,
        "pitch": 0.05646574606556598,
        "fov": 1.5396019870895838
      },
      "linkHotspots": [
        {
          "yaw": 2.689237836549962,
          "pitch": 0.1303865505274473,
          "rotation": 0,
          "target": "14-pitro-korytarz-3"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "20-pitro-azienka",
      "name": "piętro łazienka",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.9040004785264992,
          "pitch": 0.06137484907478452,
          "rotation": 0,
          "target": "16-pitro-korytarz-2"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.5973787430146711,
          "pitch": -0.106371743236231,
          "title": "Duża łazienka",
          "text": "Duża łazienka z wanną"
        }
      ]
    },
    {
      "id": "21-pitro-sypialnia",
      "name": "piętro sypialnia",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "yaw": 1.4451504254454424,
        "pitch": 0.3826289917597787,
        "fov": 1.5396019870895838
      },
      "linkHotspots": [
        {
          "yaw": 2.099623842084684,
          "pitch": 0.18573649739569653,
          "rotation": 0,
          "target": "15-pitro-korytarz"
        },
        {
          "yaw": -1.41233338668685,
          "pitch": 0.5953370202478858,
          "rotation": 0,
          "target": "22-pitro-balkon-sypialnia"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.2248856871584497,
          "pitch": 0.1406047636752774,
          "title": "Duże tapicerowane łóżko",
          "text": "Text"
        }
      ]
    },
    {
      "id": "22-pitro-balkon-sypialnia",
      "name": "piętro balkon sypialnia",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "yaw": -2.555656509353904,
        "pitch": 0.18734973070715455,
        "fov": 1.5396019870895838
      },
      "linkHotspots": [
        {
          "yaw": -1.218583142613431,
          "pitch": -0.019396156237675655,
          "rotation": 0,
          "target": "21-pitro-sypialnia"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 2.310081895034944,
          "pitch": 0.47089175287840135,
          "title": "Duży taras nad garażem",
          "text": "Konstrukcja garażu umożliwia rozbudowę piętra lub ogrodu zimowego"
        }
      ]
    }
  ],
  "name": "Dom",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": false
  }
};
