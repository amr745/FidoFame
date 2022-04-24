# FidoFame

##Routes

| Verb        | Path          | Action  | Used for    |
| ----------- | -----------   | --------| ----------- |
| GET         | /fidofame     | index   | Homepage    |
| GET         | /fidofame/new | new     | Displays a space for users to add new dogs |
| DELETE      | /fidofame/:id | delete  | Deletes a dog and redirects to index page
| PUT         | /fidofame/:id | update  | Updates dog info. and redirects to show |
| POST        | /fidofame     | create  | Adds new dogs to the database |
| GET         | /fidofame/:id/edit | edit| Displays a space for users to update infomation about a dog  |
| GET         | /fidofame/:id | show     | Displays information about individual dog |

##Model: Fido
| name | image   | breed | renown | description | deceased |
| ----------- | -----------   | --------| ----------- | ----------- | ----------- |
| ex: Terry | data:image/jpeg | Cairn Terrier | film | In the Wizard of Oz | True

##Libraries Used
express
ejs
method-override
nodemon
