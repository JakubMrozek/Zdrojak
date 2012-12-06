var apiary = [
  {
    "name": "Stranky",
    "description": "",
    "resources": [
      {
        "description": "Vrácení seznamu všech stránek.",
        "method": "GET",
        "url": "/pages",
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
            "body": "[\n{\"id\":\"5098eaef0496600200000001\",\n\"content\":\"Lorem ipsum set dolorem\",\n\"title\":\"Kontakt\",\n\"url\":\"kontakt\"},\n{\"id\":\"5098eaef0496600200000002\",\n\"content\":\"Lorem ipsum set dolorem\",\n\"title\":\"Obchodní podmínky\",\n\"url\":\"obchodni-podminky\"},\n{\"id\":\"5098eaef0496600200000003\",\n\"content\":\"Lorem ipsum set dolorem\",\n\"title\":\"Doprava a platba\",\n\"url\":\"doprava a platba\"}\n]"
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