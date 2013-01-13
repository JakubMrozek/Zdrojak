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
      },
      {
        "description": "Zobrazení detailu jedné stránky.",
        "method": "GET",
        "url": "/pages/{id}",
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
            "body": "{\"id\":\"5098eaef0496600200000001\",\n\"content\":\"Lorem ipsum set dolorem\",\n\"title\":\"Kontakt\",\n\"url\":\"kontakt\"}"
          }
        ]
      },
      {
        "description": "Vložení nové stránky do databáze.",
        "method": "POST",
        "url": "/pages",
        "request": {
          "headers": {
            "Content-Type": "application/json"
          },
          "body": "{\"content\":\"Lorem ipsum set dolorem\", \"title\":\"Nákupní řád\"}"
        },
        "responses": [
          {
            "status": 201,
            "headers": {
              "Location": "//api/v1/pages/nakupni-rad"
            },
            "body": ""
          }
        ]
      },
      {
        "description": "Editace jedné stránky v databázi.",
        "method": "PUT",
        "url": "/pages/{id}",
        "request": {
          "headers": {
            "Content-Type": "application/json"
          },
          "body": "{\"content\":\"Lorem ipsum set dolorem\", \n\"title\":\"Nákupní řád e-shopu\"}"
        },
        "responses": [
          {
            "status": 200,
            "headers": {
              "Content-Type": "application/json"
            },
            "body": "{\"content\":\"Lorem ipsum set dolorem\",\n\"title\":\"Nákupní řád e-shopu\"}"
          }
        ]
      },
      {
        "description": "Smazání stránky z databáze.",
        "method": "DELETE",
        "url": "/pages/{id}",
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