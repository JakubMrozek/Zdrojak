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
            "body": "{\"name\": \"iPhone\", \"url\": \"iphone\", \"children\": []}"
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
            "body": "[{\"name\": \"iPhone 4 32GB černý\",\n\"url\": \"iphone-4-32gb-cerny\",\n\"perex\": \"Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.\",\n\"photo\": \"/img/350x300.gif\",\n\"producer\": \"Apple\",\n\"availability\": \"skladem\",\n\"price\": 15000\n},\n{\"name\": \"iPhone 4 32GB černý\",\n\"url\": \"iphone-4-32gb-cerny\",\n\"perex\": \"Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.\",\n\"photo\": \"/img/350x300.gif\",\n\"producer\": \"Apple\",\n\"availability\": \"skladem\",\n\"price\": 15000\n},\n{\"name\": \"iPhone 4 32GB černý\",\n\"url\": \"iphone-4-32gb-cerny\",\n\"perex\": \"Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.\",\n\"photo\": \"/img/350x300.gif\",\n\"producer\": \"Apple\",\n\"availability\": \"skladem\",\n\"price\": 15000\n},\n{\"name\": \"iPhone 4 32GB černý\",\n\"url\": \"iphone-4-32gb-cerny\",\n\"perex\": \"Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.\",\n\"photo\": \"/img/350x300.gif\",\n\"producer\": \"Apple\",\n\"availability\": \"skladem\",\n\"price\": 15000\n},\n{\"name\": \"iPhone 4 32GB černý\",\n\"url\": \"iphone-4-32gb-cerny\",\n\"perex\": \"Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.\",\n\"photo\": \"/img/350x300.gif\",\n\"producer\": \"Apple\",\n\"availability\": \"skladem\",\n\"price\": 15000\n},\n{\"name\": \"iPhone 4 32GB černý\",\n\"url\": \"iphone-4-32gb-cerny\",\n\"perex\": \"Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.\",\n\"photo\": \"/img/350x300.gif\",\n\"producer\": \"Apple\",\n\"availability\": \"skladem\",\n\"price\": 15000\n}]"
          }
        ]
      },
      {
        "description": "Vyhledávání v produktech.",
        "method": "GET",
        "url": "/products?query={dotaz}",
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
            "body": "[{\"name\": \"iPhone 4 32GB černý\",\n\"url\": \"iphone-4-32gb-cerny\",\n\"perex\": \"Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.\",\n\"photo\": \"/img/350x300.gif\",\n\"producer\": \"Apple\",\n\"availability\": \"skladem\",\n\"price\": 15000\n},\n{\"name\": \"iPhone 4 32GB černý\",\n\"url\": \"iphone-4-32gb-cerny\",\n\"perex\": \"Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.\",\n\"photo\": \"/img/350x300.gif\",\n\"producer\": \"Apple\",\n\"availability\": \"skladem\",\n\"price\": 15000\n}]"
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
            "body": "{\"id\":\"123456\",\n\"name\": \"iPhone 4 32GB\",\n\"url\": \"iphone-4-32gb\",\n\"code\": \"AZ007\",\n\"perex\": \"Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.\",     \n\"text\": \"<p>Cras justo odio, dapibus ac facilisis in, egestas eget quam.</p><p>Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>\",\n\"photos\": [\n  {\"src\": \"/img/350x300.gif\"},\n  {\"src\": \"/img/350x300.gif\"}\n],\n\"parameters\": [\n  {\"name\": \"Operační systém\", \"values\": [\"iOS\"]},\n  {\"name\": \"Barva\", \"values\": [\"černá\", \"bílá\"]},\n  {\"name\": \"Digitální fotoaparát\", \"values\": [\"ano\"]},\n  {\"name\": \"Rozličení fotoaparátu\", \"values\": [\"8 Mpx\"]},\n  {\"name\": \"Pohotovostní doba\", \"values\": [\"225 hodin\"]},\n  {\"name\": \"MP3\", \"values\": [\"ano\"]},\n  {\"name\": \"FM rádio\", \"values\": [\"ne\"]},\n  {\"name\": \"HD video\", \"values\": [\"ano\"]},\n  {\"name\": \"Rozměry\", \"values\": [\"115,2 x 58,6 x 9,3 mm\"]},\n  {\"name\": \"Hmotnost\", \"values\": [\"137 g\"]}\n],\n\"variants\": [\n  {\"name\": \"Černá barva\"},\n  {\"name\": \"Bílá barva\"}\n],\n\"producer\": \"Apple\",\n\"availability\": \"skladem\",\n\"price\": \"15000\",\n\"dph\": \"20\"\n}"
          }
        ]
      },
      {
        "description": "Seznam produktů v kategorii.",
        "method": "GET",
        "url": "/products?category={kategorie}",
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
            "body": "[{\"name\": \"iPhone 4 32GB černý\",\n\"url\": \"iphone-4-32gb-cerny\",\n\"perex\": \"Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.\",\n\"photo\": \"/img/350x300.gif\",\n\"producer\": \"Apple\",\n\"availability\": \"skladem\",\n\"price\": 15000\n},\n{\"name\": \"iPhone 4 32GB černý\",\n\"url\": \"iphone-4-32gb-cerny\",\n\"perex\": \"Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.\",\n\"photo\": \"/img/350x300.gif\",\n\"producer\": \"Apple\",\n\"availability\": \"skladem\",\n\"price\": 15000\n},\n{\"name\": \"iPhone 4 32GB černý\",\n\"url\": \"iphone-4-32gb-cerny\",\n\"perex\": \"Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.\",\n\"photo\": \"/img/350x300.gif\",\n\"producer\": \"Apple\",\n\"availability\": \"skladem\",\n\"price\": 15000\n},\n{\"name\": \"iPhone 4 32GB černý\",\n\"url\": \"iphone-4-32gb-cerny\",\n\"perex\": \"Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.\",\n\"photo\": \"/img/350x300.gif\",\n\"producer\": \"Apple\",\n\"availability\": \"skladem\",\n\"price\": 15000\n},\n{\"name\": \"iPhone 4 32GB černý\",\n\"url\": \"iphone-4-32gb-cerny\",\n\"perex\": \"Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.\",\n\"photo\": \"/img/350x300.gif\",\n\"producer\": \"Apple\",\n\"availability\": \"skladem\",\n\"price\": 15000\n},\n{\"name\": \"iPhone 4 32GB černý\",\n\"url\": \"iphone-4-32gb-cerny\",\n\"perex\": \"Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.\",\n\"photo\": \"/img/350x300.gif\",\n\"producer\": \"Apple\",\n\"availability\": \"skladem\",\n\"price\": 15000\n}]"
          }
        ]
      }
    ]
  }
]