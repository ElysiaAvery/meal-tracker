# _Meal Tracker_


#### By _[**Elysia Avery Nason**](https://github.com/elysiaavery)_

## Description
A web app that can track a user's meals and filter depending on a search of low calorie or high calorie foods.
## Specs

| Behaviour                                                      | Input                                                                | Output                                                                                        |
|----------------------------------------------------------------|----------------------------------------------------------------------|-----------------------------------------------------------------------------------------------|
| Can instantiate an initial food object.                        | n/a                                                                  | n/a                                                                                           |
| Can instantiate a food object with a constructor.              | public name: string, public calories: number, public details: string | name: Ice Cream, calories: 280, details: non-dairy but coconut based with a high-fat content. |
| Can instantiate a list of all foods.                           | *ngFor="let food of foods"                                           | Ice Cream, Guacamole, Tortillas, Pickles                                                      |
| Able to filter foods dependent on high calorie or low calorie. | food | highCalorie  food | lowCalorie                                | high caloie: Ice Cream, Tortillas --  low calorie: Pickles, Guacamole                         |
| Able to edit food properties.                                  | name: french fries edit: sweet potato fries                          | name: sweet potato fries                                                                      |
| can add a complete number of calories consumed  in one day.    | output = input + output;                                             | total calories: 2500                                                                          |

## Setup/Installation Requirements

* In your terminal window:
  * `$ git clone https://github.com/ElysiaAvery/meal-tracker`
  * Navigate to the meal-tracker directory: `$ cd gh-user-info`
  * Enter the command: `$ npm install`
  * Enter the command: `$ bower install`
  * Install Ruby by either navigating to the ruby website [here](http://rubyinstaller.org/)     or by using Homebrew on Mac and entering this command: `$ ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"`
  * Next enter: `$ gem install sass`
  * And finally: `$ npm install gulp-sass gulp-sourcemaps --save-dev`
  * Open with Atom (or text editor of your choice): `$ atom .`
* In your terminal window run gulp build: `$ gulp build`
  * Then enter that you would like to connect to the local server: `$ gulp serve`
* In the browser of your choosing, navigate to "localhost:3000" (tested in Chrome).

## Known Bugs

None

## Support and contact details

Elysia Nason: _elysia.avery@gmail.com_

## Technologies Used

_TypeScript,
Gulp.js,
Angular,
Bower,
Sass_

### License

This webpage is licensed under the GPL license.

Copyright &copy; 2016 **_Elysia Avery Nason_**
