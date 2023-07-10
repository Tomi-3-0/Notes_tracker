 # NOTES TRACKER APPLICATION
    #### Video Demo:https://youtu.be/CuHFVobEmhE
    #### Description: A notes application that can serve as an online notepad or jotter for keeping track of day-to-day activities
    TODO
    Two applications built seperately that communicate with each other
    1. A react application (Frontend)
    2. A django application (Backend)

## BACKEND
 The backend built with;
  - [django](https://www.djangoproject.com/) a high-level Python web framework that encourages rapid development and clean, succint design and
  -  [django-rest-framework](https://www.django-rest-framework.org/) a powerful and flexible toolkit for building Web APIs. django model. Every single class represents a   table, attributes represent columns, instances represent rows
Data consumed by frontend is been handled by the backend
To get project running,make sure you have python installed then run the backend by following the following steps:
  1. Create a python virtual environment, it's important to create isolated environment for your python projects to prevent dependencies clash, [read more](https://docs.python.org/3/library/venv.html)

  - For windows:
    - Install virtualenv using `> pip install virtualenv `
    - Now in which ever directory you are, this line will create a virtualenv there `virtualenv virtualenv_name`
    - Go in the same directory then type, ` > myenv\Scripts\activate` or you can also specify your path
    - To deactivate it run `$ deactivate`


  - For linux
    - If pip isn't installed in your system `sudo apt-get install python-pip`
    - Then install virtualenv `$ pip install virtualenv`
    - If you want to create a virtualenv for specific python version, type `$ virtualenv -p /usr/bin/python3 virtualenv_name`
    - Now you can to activate it `$ source virtualenv_name/bin/activate`
    - To deactivate it run `$ deactivate`


  2. Download the project or clone it from github: `git clone _project_url_path_`
  3. Make sure your virtual environment is activated then install the project requirements by typing `python -r requirements.txt`
  4. Run the project using `python manage.py runserver`
  5. Your project should be accessible on http://localhost:8000

## FRONTEND
Frontend

To run the frontend, download or clone the frontened folder, in the project directory, run:
### `npm install`: to install node modules

### `npm start`

this runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.


### Other Available Scripts
To run the project, in the project directory, you can run:
### `npm start`

this runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)


### References
 - [geekforgeeks](https://www.geeksforgeeks.org/creating-python-virtual-environment-windows-linux/)
 - [django](https://www.djangoproject.com/)
 - [python](https://docs.python.org/3/library/venv.html)
 - [django-rest-framework](https://www.django-rest-framework.org/)