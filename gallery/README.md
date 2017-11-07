# Gallery

Your task is to build a simple photo gallery. Six images are stored in the images folder. Each image has a size of 600x400. Don't worry about stlying. Simply include a normalize.css and add basic styles if required. Functionality is more important. 
The tasks are orderd by importance from highest to lowest.

## Rules

- Difficulty: Easy
- Duration: Do as many tasks as you can
- Frameworks: Angular/React/Html/CSS (you can choose) 
- Don't worry about styling or pixel perfect layouts (you can use a ui framework if you want)
- You can use any libraries you want (e.g. router, state handling)

*Important: Do as many tasks as you can, but finish them correctly! Your solution should be the best you can do and represent your skill.*

## Tasks

Note: Lists should be orded by date from latest to oldest.

### List images

In your first task you should list all images from the images folder. Therefore you should use the storage.json, where you find information about each image.

You can load the storage.json and images the way you preferr, but should add a loading placeholder/indicator. 

In the list you should display some basic information of the image (likes, amount of comments and date).

### Routing

Add some routing to the application. When I click on an image a new page should open and display the single image with:

- Date
- Likes
- Description
- User name
- Amount comments

On the single view page you should also add a back button to get back to the list view.

URL Format: /post/(:id)

### Security

When a user opens the url /post/(:id) you should validate if the given id is a valid id in the storage.json. If not redirect to the list view. 

### Comments

Display all comments with all it's information in a list, in the detail view under the image. 

Add a textare in which I can add a new comment (no storage required). Make sure to validate the input: no empty comment allowed. Show feedback according the state of the submition (validation error or success).

### Likes and Dislikes

Add a like function to the list view for each image. User presses a like button and the likes count goes up. Click again and the like is removed. Change the look of the button for each state. 
You don't need to store the like in a database (reload the page and everything is reset).

Add the same functionality to the detail view of each image.

### Pagination

Add pagination to the list view. E.g. only show 3 images per page. You can implement it in a static way and can assume you always have 6 images you can load from the server.

Represent the current page in the route. 

### Empty States

Add empty states to the application:

- No images from the server: Show no images message
- No comments yet: Show no comments message