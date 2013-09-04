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
            "body": "[\n    {\"name\": \"O nás\", \"url\": \"o-nas\"},\n    {\"name\": \"Obchodní podmínky\", \"url\": \"obchodni-podminky\"},\n    {\"name\": \"FAQ\", \"url\": \"faq\"},\n    {\"name\": \"Kontakt\", \"url\": \"kontakt\"}\n]"
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
            "body": "{\n    \"name\": \"O nás\",\n    \"text\": \"Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.\"\n}"
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
            "body": "[\n    {\"id\": 123, \"name\": \"Android\", \"url\": \"android\"},\n    {\"id\": 234, \"name\": \"iPhone\", \"url\": \"iphone\"},\n    {\"id\": 334, \"name\": \"BlackBerry\", \"url\": \"blackberry\"},\n    {\"id\": 434, \"name\": \"Symbian\", \"url\": \"symbian\"},\n    {\"id\": 534, \"name\": \"Windows Phone\", \"url\": \"windows-phone\"},\n    {\"id\": 634, \"name\": \"Levné\", \"url\": \"levne\"},\n    {\"id\": 734, \"name\": \"Příslušenství\", \"url\": \"prislusenstvi\", \"children\": [\n        {\"id\": 834, \"name\": \"Baterie\", \"url\": \"baterie\"},\n        {\"id\": 934, \"name\": \"Držáky\", \"url\": \"drzaky\"},\n        {\"id\": 144, \"name\": \"Nabíječky\", \"url\": \"nabijecky\"},\n        {\"id\": 894, \"name\": \"Pouzdra\", \"url\": \"pouzdra\"}\n    ]}\n]"
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
            "body": "{\n    \"name\": \"iPhone\",\n    \"url\": \"iphone\",\n    \"children\": [],\n    \"minPrice\": 1000,\n    \"maxPrice\": 23000,\n    \"params\": [\n        {\n            \"name\": \"Funkce\",\n            \"code\": \"funkce\",\n            \"values\": [\n                {\"code\": \"wifi\", \"value\": \"WiFi\"},\n                {\"code\": \"bluetooth\", \"value\": \"BlueTooth\"},\n                {\"code\": \"dual-sim\", \"value\": \"Dual SIM\"},\n                {\"code\": \"gps\", \"value\": \"GPS\"},\n                {\"code\": \"fm-radio\", \"value\": \"FM radio\"}\n            ]\n        },\n        {\n            \"name\": \"Operační paměť\",\n            \"code\": \"operacni-pamet\",\n            \"values\": [\n                {\"code\": \"256\", \"value\": \"256 MB\"},\n                {\"code\": \"512\", \"value\": \"512 MB\"},\n                {\"code\": \"1024\", \"value\": \"1024 MB\"},\n                {\"code\": \"2048\", \"value\": \"2048 MB\"},\n                {\"code\": \"4096\", \"value\": \"4096 MB\"}\n            ]\n         },\n         {\n            \"name\": \"Uložiště\",\n            \"code\": \"uloziste\",\n            \"values\": [\n                {\"code\": \"0-2\", \"value\": \"0-2 GB\"},\n                {\"code\": \"2-10\", \"value\": \"2-10 GB\"},\n                {\"code\": \"10-50\", \"value\": \"10-50 GB\"},\n                {\"code\": \"50-100\", \"value\": \"50-100 GB\"},\n                {\"code\": \"100-512\", \"value\": \"100-512 GB\"}\n            ]\n        },\n        {\n            \"name\": \"Paměťová karta\",\n            \"code\": \"pametova-karta\",\n            \"values\": [\n                {\"code\": \"sdhc\", \"value\": \"SDHC\"},\n                {\"code\": \"micro-sd\", \"value\": \"Micro SD\"},\n                {\"code\": \"micro-sdxc\", \"value\": \"Micro SDXC\"},\n                {\"code\": \"sdxc\", \"value\": \"SDXC\"},\n                {\"code\": \"micro-sdhc\", \"value\": \"Micro SDHC\"}\n            ]\n        }\n    ]\n}"
          }
        ]
      },
      {
        "description": "Vytvoření nového kategorie.",
        "method": "POST",
        "url": "/categories",
        "request": {
          "headers": {},
          "body": ""
        },
        "responses": [
          {
            "status": 201,
            "headers": {},
            "body": "{\n    \"id\": 999\n}"
          }
        ]
      },
      {
        "description": "Editace kategorie s id {id}",
        "method": "PUT",
        "url": "/categories/{id}",
        "request": {
          "headers": {},
          "body": ""
        },
        "responses": [
          {
            "status": 200,
            "headers": {},
            "body": ""
          }
        ]
      },
      {
        "description": "Smazání kategorie s id {id}",
        "method": "DELETE",
        "url": "/categories/{id}",
        "request": {
          "headers": {},
          "body": ""
        },
        "responses": [
          {
            "status": 200,
            "headers": {},
            "body": ""
          }
        ]
      }
    ]
  },
  {
    "name": "Správci",
    "description": "",
    "resources": [
      {
        "description": "Seznam všech správců.",
        "method": "GET",
        "url": "/users",
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
            "body": "[\n    {\"id\": 123, \"name\": \"Jakub\", \"email\": \"jakub.mrozek@gmail.com\"},\n    {\"id\": 234, \"name\": \"Kuba\", \"email\": \"jakub.mrozek@test.cz\"},\n    {\"id\": 345, \"name\": \"Superman\", \"email\": \"superman@test.cz\"}\n]"
          }
        ]
      },
      {
        "description": "Vrací kompletní informace o spravci s ID {id}.",
        "method": "GET",
        "url": "/users/{id}",
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
            "body": "{\n    \"id\": 12345,\n    \"name\": \"Jakub Mrozek\",\n    \"email\": \"jakub.mrozek@gmail.com\"\n}"
          }
        ]
      },
      {
        "description": "Vraceni authTokenu pro daneho uzivatele",
        "method": "POST",
        "url": "/users/0",
        "request": {
          "headers": {},
          "body": ""
        },
        "responses": [
          {
            "status": 200,
            "headers": {},
            "body": "{\n    \"authToken\": \"d8dd64d0m5sjkd64dkzs876dk\"\n}"
          }
        ]
      },
      {
        "description": "Vytvoření nového správce.",
        "method": "POST",
        "url": "/users",
        "request": {
          "headers": {},
          "body": ""
        },
        "responses": [
          {
            "status": 201,
            "headers": {},
            "body": "{\n    \"id\": 789\n}"
          }
        ]
      },
      {
        "description": "Editace údajů správce.",
        "method": "PUT",
        "url": "/users/{id}",
        "request": {
          "headers": {},
          "body": ""
        },
        "responses": [
          {
            "status": 204,
            "headers": {},
            "body": ""
          }
        ]
      },
      {
        "description": "Smazání správce.",
        "method": "DELETE",
        "url": "/users/{id}",
        "request": {
          "headers": {},
          "body": ""
        },
        "responses": [
          {
            "status": 204,
            "headers": {},
            "body": ""
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
        "description": "Výběr všech objednávek z databáze.",
        "method": "GET",
        "url": "/orders?filter={filter}&limit={limit}&offset={offset}&order={order}&query={query}",
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
            "body": "{\"count\":50,\n\"orders\":[\n{\"number\": 123456789,\n\"date\": \"2013-01-30T13:27:00Z\",\n\"customer\":{\"name\": \"Jakub\", \"surname\": \"Mrozek\", \"street\": \"Ostravská 56\", \"zipcode\": \"73701\", \"town\": \"Český Těšín\"},\n\"status\": {\"code\": \"pending\", \"name\": \"Zpracovává se\"},\n\"products\": [\n  {\"code\": \"AZ007\", \"name\": \"iPhone 4 32GB\", \"variant\": {\"code\": \"AZ00701\", \"name\": \"Černá barva\"}, \"price\": 15000, \"vat\": 20, \"quantity\": 2},\n  {\"code\": \"AZ007\", \"name\": \"iPhone 4 32GB\", \"variant\": {\"code\": \"AZ00702\", \"name\": \"Bílá barva\"}, \"price\": 15000, \"vat\": 20, \"quantity\": 1}\n],\n\"transport\": {\"code\": \"personal\", \"name\": \"Osobní převzetí a platba hotově či kartou\", \"price\": 0},\n\"price\": 45000},\n{\"number\": 123456789,\n\"date\": \"2013-01-30T13:27:00Z\",\n\"customer\":{\"name\": \"Jakub\", \"surname\": \"Mrozek\", \"street\": \"Ostravská 56\", \"zipcode\": \"73701\", \"town\": \"Český Těšín\"},\n\"status\": {\"code\": \"completed\", \"name\": \"Dokončeno\"},\n\"products\": [\n  {\"code\": \"AZ007\", \"name\": \"iPhone 4 32GB\", \"variant\": {\"code\": \"AZ00701\", \"name\": \"Černá barva\"}, \"price\": 15000, \"vat\": 20, \"quantity\": 2},\n  {\"code\": \"AZ007\", \"name\": \"iPhone 4 32GB\", \"variant\": {\"code\": \"AZ00702\", \"name\": \"Bílá barva\"}, \"price\": 15000, \"vat\": 20, \"quantity\": 1}\n],\n\"transport\": {\"code\": \"personal\", \"name\": \"Osobní převzetí a platba hotově či kartou\", \"price\": 0},\n\"price\": 45000},\n{\"number\": 123456789,\n\"date\": \"2013-01-30T13:27:00Z\",\n\"customer\":{\"name\": \"Jakub\", \"surname\": \"Mrozek\", \"street\": \"Ostravská 56\", \"zipcode\": \"73701\", \"town\": \"Český Těšín\"},\n\"status\": {\"code\": \"completed\", \"name\": \"Dokončeno\"},\n\"products\": [\n  {\"code\": \"AZ007\", \"name\": \"iPhone 4 32GB\", \"variant\": {\"code\": \"AZ00701\", \"name\": \"Černá barva\"}, \"price\": 15000, \"vat\": 20, \"quantity\": 2},\n  {\"code\": \"AZ007\", \"name\": \"iPhone 4 32GB\", \"variant\": {\"code\": \"AZ00702\", \"name\": \"Bílá barva\"}, \"price\": 15000, \"vat\": 20, \"quantity\": 1}\n],\n\"transport\": {\"code\": \"personal\", \"name\": \"Osobní převzetí a platba hotově či kartou\", \"price\": 0},\n\"price\": 45000},\n{\"number\": 123456789,\n\"date\": \"2013-01-30T13:27:00Z\",\n\"customer\":{\"name\": \"Jakub\", \"surname\": \"Mrozek\", \"street\": \"Ostravská 56\", \"zipcode\": \"73701\", \"town\": \"Český Těšín\"},\n\"status\": {\"code\": \"cancelled\", \"name\": \"Zrušeno\"},\n\"products\": [\n  {\"code\": \"AZ007\", \"name\": \"iPhone 4 32GB\", \"variant\": {\"code\": \"AZ00701\", \"name\": \"Černá barva\"}, \"price\": 15000, \"vat\": 20, \"quantity\": 2},\n  {\"code\": \"AZ007\", \"name\": \"iPhone 4 32GB\", \"variant\": {\"code\": \"AZ00702\", \"name\": \"Bílá barva\"}, \"price\": 15000, \"vat\": 20, \"quantity\": 1}\n],\n\"transport\": {\"code\": \"personal\", \"name\": \"Osobní převzetí a platba hotově či kartou\", \"price\": 0},\n\"price\": 45000},\n{\"number\": 123456789,\n\"date\": \"2013-01-30T13:27:00Z\",\n\"customer\":{\"name\": \"Jakub\", \"surname\": \"Mrozek\", \"street\": \"Ostravská 56\", \"zipcode\": \"73701\", \"town\": \"Český Těšín\"},\n\"status\": {\"code\": \"completed\", \"name\": \"Dokončeno\"},\n\"products\": [\n  {\"code\": \"AZ007\", \"name\": \"iPhone 4 32GB\", \"variant\": {\"code\": \"AZ00701\", \"name\": \"Černá barva\"}, \"price\": 15000, \"vat\": 20, \"quantity\": 2},\n  {\"code\": \"AZ007\", \"name\": \"iPhone 4 32GB\", \"variant\": {\"code\": \"AZ00702\", \"name\": \"Bílá barva\"}, \"price\": 15000, \"vat\": 20, \"quantity\": 1}\n],\n\"transport\": {\"code\": \"personal\", \"name\": \"Osobní převzetí a platba hotově či kartou\", \"price\": 0},\n\"price\": 45000}\n]}"
          }
        ]
      },
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
      },
      {
        "description": "Editace objednavky v databazi.",
        "method": "PUT",
        "url": "/orders/{number}",
        "request": {
          "headers": {},
          "body": ""
        },
        "responses": [
          {
            "status": 204,
            "headers": {
              "Content-Type": "application/json"
            },
            "body": ""
          }
        ]
      },
      {
        "description": "Částečná editace jedné objednávky (např. editace statusu).",
        "method": "POST",
        "url": "/orders/{number}",
        "request": {
          "headers": {},
          "body": ""
        },
        "responses": [
          {
            "status": 204,
            "headers": {
              "Content-Type": "application/json"
            },
            "body": ""
          }
        ]
      },
      {
        "description": "Detail objednávky.",
        "method": "GET",
        "url": "/orders/{number}",
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
            "body": "{\"number\": 123456789,\n\"date\": \"2013-01-30T13:27:00Z\",\n\"customer\":{\"name\": \"Jakub\", \"surname\": \"Mrozek\", \"street\": \"Ostravská 56\", \"zipcode\": \"73701\", \"town\": \"Český Těšín\", \"email\": \"jakub.mrozek@gmail.com\"},\n\"status\": {\"code\": \"completed\", \"name\": \"Dokončeno\"},\n\"products\": [\n  {\"code\": \"AZ007\", \"name\": \"iPhone 4 32GB\", \"variant\": {\"code\": \"AZ00701\", \"name\": \"Černá barva\"}, \"price\": 15000, \"vat\": 20, \"quantity\": 2},\n  {\"code\": \"AZ007\", \"name\": \"iPhone 4 32GB\", \"variant\": {\"code\": \"AZ00702\", \"name\": \"Bílá barva\"}, \"price\": 15000, \"vat\": 20, \"quantity\": 1}\n],\n\"transport\": {\"code\": \"personal\", \"name\": \"Osobní převzetí a platba hotově či kartou\", \"price\": 0},\n\"price\": 45000}"
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
        "description": "Vložení nového produktu do databáze.",
        "method": "POST",
        "url": "/products",
        "request": {
          "headers": {},
          "body": ""
        },
        "responses": [
          {
            "status": 201,
            "headers": {
              "Content-Type": "application/json"
            },
            "body": "{\n    \"id\": \"1234567\"\n}"
          }
        ]
      },
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
            "body": "{\"count\":120,\n\"products\":[{\"name\": \"iPhone 4 32GB černý\",\n\"url\": \"iphone-4-32gb-cerny\",\n\"perex\": \"Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.\",\n\"photo\": {\"src\":\"/img/350x300.gif\",\"width\":350,\"heigth\":300},\n\"producer\": \"Apple\",\n\"availability\": \"skladem\",\n\"price\": 15000,\n\"vat\": 20,\n\"variants\": [\n  {\"name\": \"Žlutá barva\", \"code\": \"XAZLUTA\"},\n  {\"name\": \"Modrá barva\", \"code\": \"XAMODRA\"}\n]},\n{\"name\": \"iPhone 4 32GB růžový\",\n\"url\": \"iphone-4-32gb-cerny\",\n\"perex\": \"Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.\",\n\"photo\": {\"src\":\"/img/350x300.gif\",\"width\":350,\"heigth\":300},\n\"producer\": \"Apple\",\n\"availability\": \"skladem\",\n\"price\": 15000,\n\"vat\": 20,\n\"variants\": [\n  {\"name\": \"S červeným pouzdrem\", \"code\": \"XAZLUT02\"},\n  {\"name\": \"S fialovým pouzdrem\", \"code\": \"XAZLUT05\"}\n]}]}"
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
            "body": "{\"id\":\"123456\",\n\"name\": \"iPhone 4 32GB\",\n\"url\": \"iphone-4-32gb\",\n\"code\": \"AZ007\",\n\"perex\": \"Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.\",\n\"text\": \"<p>Cras justo odio, dapibus ac facilisis in, egestas eget quam.</p><p>Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>\",\n\"photos\": [\n  {\"src\":\"/img/350x300.gif\",\"width\":350,\"heigth\":300},\n  {\"src\":\"/img/350x300.gif\",\"width\":350,\"heigth\":300}\n],\n\"parameters\": [\n  {\"name\": \"Operační systém\", \"values\": [\"iOS\"]},\n  {\"name\": \"Barva\", \"values\": [\"černá\", \"bílá\"]},\n  {\"name\": \"Digitální fotoaparát\", \"values\": [\"ano\"]},\n  {\"name\": \"Rozličení fotoaparátu\", \"values\": [\"8 Mpx\"]},\n  {\"name\": \"Pohotovostní doba\", \"values\": [\"225 hodin\"]},\n  {\"name\": \"MP3\", \"values\": [\"ano\"]},\n  {\"name\": \"FM rádio\", \"values\": [\"ne\"]},\n  {\"name\": \"HD video\", \"values\": [\"ano\"]},\n  {\"name\": \"Rozměry\", \"values\": [\"115,2 x 58,6 x 9,3 mm\"]},\n  {\"name\": \"Hmotnost\", \"values\": [\"137 g\"]}\n],\n\"variants\": [\n  {\"name\": \"Černá barva\"},\n  {\"name\": \"Bílá barva\"}\n],\n\"producer\": \"Apple\",\n\"availability\": \"skladem\",\n\"price\": \"15000\",\n\"dph\": \"20\"\n}"
          }
        ]
      },
      {
        "description": "Detail produktu podle ID.",
        "method": "GET",
        "url": "/products/{id}",
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
            "body": "{\"id\":\"123456\",\n\"name\": \"iPhone 4 32GB\",\n\"url\": \"iphone-4-32gb\",\n\"code\": \"AZ007\",\n\"perex\": \"Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.\",\n\"text\": \"<p>Cras justo odio, dapibus ac facilisis in, egestas eget quam.</p><p>Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>\",\n\"status\": true,\n\"photos\": [\n  {\"src\":\"/img/350x300.gif\",\"width\":350,\"heigth\":300},\n  {\"src\":\"/img/350x300.gif\",\"width\":350,\"heigth\":300}\n],\n\"parameters\": [\n  {\"id\": 12345, \"name\": \"Operační systém\", \"values\": [\"iOS\"]},\n  {\"id\": 12346, \"name\": \"Barva\", \"values\": [\"černá\", \"bílá\"]},\n  {\"id\": 12347, \"name\": \"Digitální fotoaparát\", \"values\": [\"ano\"]},\n  {\"id\": 12348, \"name\": \"Rozlišení fotoaparátu\", \"values\": [\"8 Mpx\"]},\n  {\"id\": 12349, \"name\": \"Pohotovostní doba\", \"values\": [\"225 hodin\"]},\n  {\"id\": 12350, \"name\": \"MP3\", \"values\": [\"ano\"]},\n  {\"id\": 12351, \"name\": \"FM rádio\", \"values\": [\"ne\"]},\n  {\"id\": 12352, \"name\": \"HD video\", \"values\": [\"ano\"]},\n  {\"id\": 12353, \"name\": \"Rozměry\", \"values\": [\"115,2 x 58,6 x 9,3 mm\"]},\n  {\"id\": 12354, \"name\": \"Hmotnost\", \"values\": [\"137 g\"]}\n],\n\"variants\": [\n  {\"name\": \"Černá barva\"},\n  {\"name\": \"Bílá barva\"}\n],\n\"producer\": \"Apple\",\n\"availability\": \"skladem\",\n\"price\": \"15000\",\n\"dph\": \"20\"\n}"
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
      },
      {
        "description": "Seznam produktů v administraci.",
        "method": "GET",
        "url": "/products?filter={filter}&limit={limit}&offset={offset}&order={order}&query={query}",
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
            "body": "{\"count\":120,\n\"products\":[{\"name\": \"iPhone 4 32GB černý\",\n\"id\": \"12345\",\n\"code\": \"AB008\",\n\"url\": \"iphone-4-32gb-cerny\",\n\"perex\": \"Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.\",\n\"photo\": {\"src\":\"/img/100x100.gif\",\"width\":100,\"heigth\":100},\n\"producer\": \"Apple\",\n\"availability\": \"skladem\",\n\"price\": 15000\n},\n{\"name\": \"iPhone 4 32GB černý\",\n\"id\": \"12345\",\n\"code\": \"AB008\",\n\"url\": \"iphone-4-32gb-cerny\",\n\"perex\": \"Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.\",\n\"photo\": {\"src\":\"/img/100x100.gif\",\"width\":100,\"heigth\":100},\n\"producer\": \"Apple\",\n\"availability\": \"skladem\",\n\"price\": 15000\n},\n{\"name\": \"iPhone 4 32GB černý\",\n\"id\": \"12345\",\n\"code\": \"AB008\",\n\"url\": \"iphone-4-32gb-cerny\",\n\"perex\": \"Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.\",\n\"photo\": {\"src\":\"/img/100x100.gif\",\"width\":100,\"heigth\":100},\n\"producer\": \"Apple\",\n\"availability\": \"skladem\",\n\"price\": 15000\n},\n{\"name\": \"iPhone 4 32GB černý\",\n\"id\": \"12345\",\n\"code\": \"AB008\",\n\"url\": \"iphone-4-32gb-cerny\",\n\"perex\": \"Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.\",\n\"photo\": {\"src\":\"/img/100x100.gif\",\"width\":100,\"heigth\":100},\n\"producer\": \"Apple\",\n\"availability\": \"skladem\",\n\"price\": 15000\n},\n{\"name\": \"iPhone 4 32GB černý\",\n\"id\": \"12345\",\n\"code\": \"AB008\",\n\"url\": \"iphone-4-32gb-cerny\",\n\"perex\": \"Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.\",\n\"photo\": {\"src\":\"/img/100x100.gif\",\"width\":100,\"heigth\":100},\n\"producer\": \"Apple\",\n\"availability\": \"skladem\",\n\"price\": 15000\n},\n{\"name\": \"iPhone 4 32GB černý\",\n\"id\": \"12345\",\n\"code\": \"AB008\",\n\"url\": \"iphone-4-32gb-cerny\",\n\"perex\": \"Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.\",\n\"photo\": {\"src\":\"/img/100x100.gif\",\"width\":100,\"heigth\":100},\n\"producer\": \"Apple\",\n\"availability\": \"skladem\",\n\"price\": 15000\n}]}"
          }
        ]
      },
      {
        "description": "Vkládání obrázků k produktům.",
        "method": "PUT",
        "url": "/products/{id}/images",
        "request": {
          "headers": {},
          "body": ""
        },
        "responses": [
          {
            "status": 204,
            "headers": {
              "Content-Type": "application/json"
            },
            "body": ""
          }
        ]
      },
      {
        "description": "Odstranění produktu s ID {id}",
        "method": "DELETE",
        "url": "/products/{id}",
        "request": {
          "headers": {},
          "body": ""
        },
        "responses": [
          {
            "status": 204,
            "headers": {},
            "body": ""
          }
        ]
      }
    ]
  },
  {
    "name": "Parametry",
    "description": "",
    "resources": [
      {
        "description": "Seznam všech parametrů v administraci.",
        "method": "GET",
        "url": "/parameters",
        "request": {
          "headers": {},
          "body": ""
        },
        "responses": [
          {
            "status": 200,
            "headers": {},
            "body": "[\n    {\n        \"id\": 12345,\n        \"name\": \"Operační systém\",\n        \"type\": \"codebook\",\n        \"values\": [\"iOS\", \"Android\", \"Windows\"]\n    },\n    {\n        \"id\": 12346,\n        \"name\": \"Barva\",\n        \"type\": \"codebook\",\n        \"values\": [\"Bílá\", \"Černá\"]\n    },\n    {\n        \"id\": 12347,\n        \"name\": \"Digitální fotoaparát\",\n        \"type\": \"codebook\",\n        \"values\": [\"ano\", \"ne\"]\n    },\n    {\n        \"id\": 12348,\n        \"name\": \"Rozlišení fotoaparátu\",\n        \"type\": \"value\"\n    },\n    {\n        \"id\": 12349,\n        \"name\": \"Pohotovostní doba\",\n        \"type\": \"value\"\n    },\n    {\n        \"id\": 12350,\n        \"name\": \"MP3\",\n        \"type\": \"codebook\",\n        \"values\": [\"ano\", \"ne\"]\n    },\n    {\n        \"id\": 12351,\n        \"name\": \"FM rádio\",\n        \"type\": \"codebook\",\n        \"values\": [\"ano\", \"ne\"]\n    },\n    {\n        \"id\": 12352,\n        \"name\": \"HD video\",\n        \"type\": \"codebook\",\n        \"values\": [\"ano\", \"ne\"]\n    },\n    {\n        \"id\": 12353,\n        \"name\": \"Rozměry\",\n        \"type\": \"value\"\n    },\n    {\n        \"id\": 12354,\n        \"name\": \"Hmotnost\",\n        \"type\": \"value\"\n    }\n]"
          }
        ]
      },
      {
        "description": "Detail parametru.",
        "method": "GET",
        "url": "/parameters/{id}",
        "request": {
          "headers": {},
          "body": ""
        },
        "responses": [
          {
            "status": 200,
            "headers": {},
            "body": "{\n    \"id\": 12345,\n    \"name\": \"Operační systém\",\n    \"type\": \"codebook\",\n    \"values\": [\"iOS\", \"Android\", \"Windows\"]\n}"
          }
        ]
      },
      {
        "description": "Vložení parametru.",
        "method": "POST",
        "url": "/parameters",
        "request": {
          "headers": {},
          "body": ""
        },
        "responses": [
          {
            "status": 201,
            "headers": {},
            "body": "{\n    \"id\": 42\n}"
          }
        ]
      },
      {
        "description": "Uprava parametru",
        "method": "PUT",
        "url": "/parameters/{id}",
        "request": {
          "headers": {},
          "body": ""
        },
        "responses": [
          {
            "status": 204,
            "headers": {},
            "body": ""
          }
        ]
      },
      {
        "description": "Smazání parametru.",
        "method": "DELETE",
        "url": "/parameters/{id}",
        "request": {
          "headers": {},
          "body": ""
        },
        "responses": [
          {
            "status": 204,
            "headers": {},
            "body": ""
          }
        ]
      }
    ]
  }
]