var apiary = [
  {
    "name": "Stranky",
    "description": "",
    "resources": [
      {
        "description": "Vraceni stranek pro menu layoutu.",
        "method": "GET",
        "url": "/pages?fields={pole}",
        "request": {
          "headers": {},
          "body": ""
        },
        "responses": [
          {
            "status": 200,
            "headers": {
              "Content-Type": "application/json"
            },
            "body": "[{\"name\": \"O nás\", \"url\": \"o-nas\"},\n{\"name\": \"Obchodní podmínky\", \"url\": \"obchodni-podminky\"},\n{\"name\": \"FAQ\", \"url\": \"faq\"},\n{\"name\": \"Kontakt\", \"url\": \"kontakt\"}]"
          }
        ]
      },
      {
        "description": "Vraceni detailu stranky.",
        "method": "GET",
        "url": "/pages?url={url}",
        "request": {
          "headers": {},
          "body": ""
        },
        "responses": [
          {
            "status": 200,
            "headers": {
              "Content-Type": "application/json"
            },
            "body": "{\"name\": \"O nás\",\n\"text\": \"Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.\"}"
          }
        ]
      }
    ]
  },
  {
    "name": "Kategorie",
    "description": "",
    "resources": [
      {
        "description": "Seznam všech kategorií.",
        "method": "GET",
        "url": "/categories",
        "request": {
          "headers": {},
          "body": ""
        },
        "responses": [
          {
            "status": 200,
            "headers": {
              "Content-Type": "application/json"
            },
            "body": "[{\"name\": \"Android\", \"url\": \"android\"},\n{\"name\": \"iPhone\", \"url\": \"iphone\"},\n{\"name\": \"BlackBerry\", \"url\": \"blackberry\"},\n{\"name\": \"Symbian\", \"url\": \"symbian\"},\n{\"name\": \"Windows Phone\", \"url\": \"windows-phone\"},\n{\"name\": \"Levné\", \"url\": \"levne\"},\n{\"name\": \"Příslušenství\", \"url\": \"prislusenstvi\", \"children\": [\n{\"name\": \"Baterie\", \"url\": \"baterie\"},\n{\"name\": \"Držáky\", \"url\": \"drzaky\"},\n{\"name\": \"Nabíječky\", \"url\": \"nabijecky\"},\n{\"name\": \"Pouzdra\", \"url\": \"pouzdra\"}\n]}]"
          }
        ]
      },
      {
        "description": "Detail kategorie podle URL.",
        "method": "GET",
        "url": "/categories?url={url}",
        "request": {
          "headers": {},
          "body": ""
        },
        "responses": [
          {
            "status": 200,
            "headers": {
              "Content-Type": "application/json"
            },
            "body": "{\"name\": \"iPhone\", \n\"url\": \"iphone\", \n\"children\": [], \n\"minPrice\": 1000,\n\"maxPrice\": 23000,\n\"params\": [{\n  \"name\": \"Funkce\", \n  \"code\": \"funkce\", \n  \"values\": [\n    {\"code\": \"wifi\", \"value\": \"WiFi\"}, \n    {\"code\": \"bluetooth\", \"value\": \"BlueTooth\"}, \n    {\"code\": \"dual-sim\", \"value\": \"Dual SIM\"}, \n    {\"code\": \"gps\", \"value\": \"GPS\"}, \n    {\"code\": \"fm-radio\", \"value\": \"FM radio\"}\n  ]},{\n  \"name\": \"Operační paměť\", \n  \"code\": \"operacni-pamet\", \n  \"values\": [\n    {\"code\": \"256\", \"value\": \"256 MB\"}, \n    {\"code\": \"512\", \"value\": \"512 MB\"}, \n    {\"code\": \"1024\", \"value\": \"1024 MB\"}, \n    {\"code\": \"2048\", \"value\": \"2048 MB\"}, \n    {\"code\": \"4096\", \"value\": \"4096 MB\"}\n  ]},{\n  \"name\": \"Uložiště\", \n  \"code\": \"uloziste\", \n  \"values\": [\n    {\"code\": \"0-2\", \"value\": \"0-2 GB\"}, \n    {\"code\": \"2-10\", \"value\": \"2-10 GB\"}, \n    {\"code\": \"10-50\", \"value\": \"10-50 GB\"}, \n    {\"code\": \"50-100\", \"value\": \"50-100 GB\"}, \n    {\"code\": \"100-512\", \"value\": \"100-512 GB\"}\n  ]},{\n  \"name\": \"Paměťová karta\", \n  \"code\": \"pametova-karta\", \n  \"values\": [\n    {\"code\": \"sdhc\", \"value\": \"SDHC\"}, \n    {\"code\": \"micro-sd\", \"value\": \"Micro SD\"}, \n    {\"code\": \"micro-sdxc\", \"value\": \"Micro SDXC\"}, \n    {\"code\": \"sdxc\", \"value\": \"SDXC\"}, \n    {\"code\": \"micro-sdhc\", \"value\": \"Micro SDHC\"}\n  ]}\n]}"
          }
        ]
      }
    ]
  },
  {
    "name": "Objednávky",
    "description": "",
    "resources": [
      {
        "description": "Vložení nové objednávky do databáze.",
        "method": "POST",
        "url": "/orders",
        "request": {
          "headers": {},
          "body": ""
        },
        "responses": [
          {
            "status": 200,
            "headers": {
              "Content-Type": "application/json"
            },
            "body": "{\"number\": \"1234567\"}"
          }
        ]
      }
    ]
  },
  {
    "name": "Produkty",
    "description": "",
    "resources": [
      {
        "description": "Seznam produktů pro úvodní stránku.",
        "method": "GET",
        "url": "/products?homepage=true",
        "request": {
          "headers": {},
          "body": ""
        },
        "responses": [
          {
            "status": 200,
            "headers": {
              "Content-Type": "application/json"
            },
            "body": "[{\"name\": \"iPhone 4 32GB černý\",\n\"url\": \"iphone-4-32gb-cerny\",\n\"perex\": \"Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.\",\n\"photo\": {\"src\":\"/img/350x300.gif\",\"width\":350,\"heigth\":300},\n\"producer\": \"Apple\",\n\"availability\": \"skladem\",\n\"price\": 15000\n},\n{\"name\": \"iPhone 4 32GB černý\",\n\"url\": \"iphone-4-32gb-cerny\",\n\"perex\": \"Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.\",\n\"photo\": {\"src\":\"/img/350x300.gif\",\"width\":350,\"heigth\":300},\n\"producer\": \"Apple\",\n\"availability\": \"skladem\",\n\"price\": 15000\n},\n{\"name\": \"iPhone 4 32GB černý\",\n\"url\": \"iphone-4-32gb-cerny\",\n\"perex\": \"Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.\",\n\"photo\": {\"src\":\"/img/350x300.gif\",\"width\":350,\"heigth\":300},\n\"producer\": \"Apple\",\n\"availability\": \"skladem\",\n\"price\": 15000\n},\n{\"name\": \"iPhone 4 32GB černý\",\n\"url\": \"iphone-4-32gb-cerny\",\n\"perex\": \"Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.\",\n\"photo\": {\"src\":\"/img/350x300.gif\",\"width\":350,\"heigth\":300},\n\"producer\": \"Apple\",\n\"availability\": \"skladem\",\n\"price\": 15000\n},\n{\"name\": \"iPhone 4 32GB černý\",\n\"url\": \"iphone-4-32gb-cerny\",\n\"perex\": \"Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.\",\n\"photo\": {\"src\":\"/img/350x300.gif\",\"width\":350,\"heigth\":300},\n\"producer\": \"Apple\",\n\"availability\": \"skladem\",\n\"price\": 15000\n},\n{\"name\": \"iPhone 4 32GB černý\",\n\"url\": \"iphone-4-32gb-cerny\",\n\"perex\": \"Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.\",\n\"photo\": {\"src\":\"/img/350x300.gif\",\"width\":350,\"heigth\":300},\n\"producer\": \"Apple\",\n\"availability\": \"skladem\",\n\"price\": 15000\n}]"
          }
        ]
      },
      {
        "description": "Vyhledávání v produktech.",
        "method": "GET",
        "url": "/products?limit={limit}&offset={offset}&query={dotaz}",
        "request": {
          "headers": {},
          "body": ""
        },
        "responses": [
          {
            "status": 200,
            "headers": {
              "Content-Type": "application/json"
            },
            "body": "{\"count\":120,\n\"products\":[{\"name\": \"iPhone 4 32GB černý\",\n\"url\": \"iphone-4-32gb-cerny\",\n\"perex\": \"Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.\",\n\"photo\": {\"src\":\"/img/350x300.gif\",\"width\":350,\"heigth\":300},\n\"producer\": \"Apple\",\n\"availability\": \"skladem\",\n\"price\": 15000\n},\n{\"name\": \"iPhone 4 32GB černý\",\n\"url\": \"iphone-4-32gb-cerny\",\n\"perex\": \"Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.\",\n\"photo\": {\"src\":\"/img/350x300.gif\",\"width\":350,\"heigth\":300},\n\"producer\": \"Apple\",\n\"availability\": \"skladem\",\n\"price\": 15000\n}]}"
          }
        ]
      },
      {
        "description": "Detail produktu podle URL.",
        "method": "GET",
        "url": "/products?url={url}",
        "request": {
          "headers": {},
          "body": ""
        },
        "responses": [
          {
            "status": 200,
            "headers": {
              "Content-Type": "application/json"
            },
            "body": "{\"id\":\"123456\",\n\"name\": \"iPhone 4 32GB\",\n\"url\": \"iphone-4-32gb\",\n\"code\": \"AZ007\",\n\"perex\": \"Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.\",     \n\"text\": \"<p>Cras justo odio, dapibus ac facilisis in, egestas eget quam.</p><p>Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>\",\n\"photos\": [\n  {\"src\":\"/img/350x300.gif\",\"width\":350,\"heigth\":300},\n  {\"src\":\"/img/350x300.gif\",\"width\":350,\"heigth\":300}\n],\n\"parameters\": [\n  {\"name\": \"Operační systém\", \"values\": [\"iOS\"]},\n  {\"name\": \"Barva\", \"values\": [\"černá\", \"bílá\"]},\n  {\"name\": \"Digitální fotoaparát\", \"values\": [\"ano\"]},\n  {\"name\": \"Rozličení fotoaparátu\", \"values\": [\"8 Mpx\"]},\n  {\"name\": \"Pohotovostní doba\", \"values\": [\"225 hodin\"]},\n  {\"name\": \"MP3\", \"values\": [\"ano\"]},\n  {\"name\": \"FM rádio\", \"values\": [\"ne\"]},\n  {\"name\": \"HD video\", \"values\": [\"ano\"]},\n  {\"name\": \"Rozměry\", \"values\": [\"115,2 x 58,6 x 9,3 mm\"]},\n  {\"name\": \"Hmotnost\", \"values\": [\"137 g\"]}\n],\n\"variants\": [\n  {\"name\": \"Černá barva\"},\n  {\"name\": \"Bílá barva\"}\n],\n\"producer\": \"Apple\",\n\"availability\": \"skladem\",\n\"price\": \"15000\",\n\"dph\": \"20\"\n}"
          }
        ]
      },
      {
        "description": "Seznam produktů v kategorii.",
        "method": "GET",
        "url": "/products?category={kategorie}&filter={filter}&limit={limit}&offset={offset}&order={order}",
        "request": {
          "headers": {},
          "body": ""
        },
        "responses": [
          {
            "status": 200,
            "headers": {
              "Content-Type": "application/json"
            },
            "body": "{\"count\":120,\n\"products\":[{\"name\": \"iPhone 4 32GB černý\",\n\"url\": \"iphone-4-32gb-cerny\",\n\"perex\": \"Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.\",\n\"photo\": {\"src\":\"/img/350x300.gif\",\"width\":350,\"heigth\":300},\n\"producer\": \"Apple\",\n\"availability\": \"skladem\",\n\"price\": 15000\n},\n{\"name\": \"iPhone 4 32GB černý\",\n\"url\": \"iphone-4-32gb-cerny\",\n\"perex\": \"Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.\",\n\"photo\": {\"src\":\"/img/350x300.gif\",\"width\":350,\"heigth\":300},\n\"producer\": \"Apple\",\n\"availability\": \"skladem\",\n\"price\": 15000\n},\n{\"name\": \"iPhone 4 32GB černý\",\n\"url\": \"iphone-4-32gb-cerny\",\n\"perex\": \"Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.\",\n\"photo\": {\"src\":\"/img/350x300.gif\",\"width\":350,\"heigth\":300},\n\"producer\": \"Apple\",\n\"availability\": \"skladem\",\n\"price\": 15000\n},\n{\"name\": \"iPhone 4 32GB černý\",\n\"url\": \"iphone-4-32gb-cerny\",\n\"perex\": \"Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.\",\n\"photo\": {\"src\":\"/img/350x300.gif\",\"width\":350,\"heigth\":300},\n\"producer\": \"Apple\",\n\"availability\": \"skladem\",\n\"price\": 15000\n},\n{\"name\": \"iPhone 4 32GB černý\",\n\"url\": \"iphone-4-32gb-cerny\",\n\"perex\": \"Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.\",\n\"photo\": {\"src\":\"/img/350x300.gif\",\"width\":350,\"heigth\":300},\n\"producer\": \"Apple\",\n\"availability\": \"skladem\",\n\"price\": 15000\n},\n{\"name\": \"iPhone 4 32GB černý\",\n\"url\": \"iphone-4-32gb-cerny\",\n\"perex\": \"Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.\",\n\"photo\": {\"src\":\"/img/350x300.gif\",\"width\":350,\"heigth\":300},\n\"producer\": \"Apple\",\n\"availability\": \"skladem\",\n\"price\": 15000\n}]}"
          }
        ]
      }
    ]
  }
]