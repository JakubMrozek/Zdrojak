var apiary = [
  {
    "name": "Stranky",
    "description": "",
    "resources": [
      {
        "description": "Vraceni stranek pro menu layoutu",
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
        "description": "Vraceni detailu stranky",
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
        "description": "Seznam všech kategorií",
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
      }
    ]
  }
]