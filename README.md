Hello. Welcome to what will soon be a rather large Capstone project, but is currently a work-in-progress. Though the official launch date is in late July of 2020, please check back periodically to see how it develops beyond its MVP.

# Amongst The Stars
### Author: Christopher Huber
##### Copyright Christopher Huber under the MIT License
##### Live Website: https://chuber42.github.io/Amongst-The-Stars/

### Intro
Hello! Welcome to "Amongst The Stars": A first-person, VR-compatible space simulator.  
This project primarily aims to resolve two issues:  
1. Make space more relatable, while maintaining a scientifically accurate model  
2. Create a capstone project representative of my competetencies and passions

There are a multitude of issues involved in each of these, that are in some ways resolutions to each other.  
For example: given the scale of space, it's generally "fairly boring" and difficult to understand spatial  
relationships between objects. It is difficult to understand Space as "A space" rather than as an  
arbitrary set of unrelated locations. In short, as a "node" space instead of a living/breathing "place".
Resolving this issue is, I feel, both creatively and technically difficult, and doing so effectively communicates  
both competency both in solving algorithmically and mathematically complex problems, while maintaining an 
understanding of human UI interfaces and experiences. In short, being both accurate AND well-designed is an  
enormous challenge, and one I look forward to resolving in clever, subtle, insightful, and effective ways.  

Please see below for the proposal submitted for this project.

### Controls

Arrow keys: Up moves forward, Down moves back, left and right strafe.  
Click and drag the left mouse button to change your facing direction.  
Spacebar moves "up".  
Please note that because this is 3D, it is possible to be "above" and "below" the solar plane if you so choose.  
Click on a spatial body to indicate your interest in it/open a contextual menu for it (under construction).  

### Known Bugs  

1. The GH-Pages version of this app does not render the placeholder sky (star) map background, so space appears to be empty except for our sun.  
2. Clicking an object to "expand" it causes it to be displaced on the Y axis without any cooresponding change in its coordinates, for reasons unclear and under investigation.  

### For developers, Potential Employers, and other Code-investigators:  
### Please note! This project is still very much in its early stages, and its infrastructure is not representative of good coding practices: Many global properties (props) are passed by prop drilling and can/will be refactored to implement either redux or state hooks. 

### Future Plans

Please note that these are in no-particular-order in terms of implementation intent.

1. More stars than just our sun should be rendered - all background stars should/will be based on astronomical survey data (GAIA database).  
2. Graphics should be attached to planets to indicate their orbits (orbit lines).  
3. Kepler's equations will be applied to planet data to place planets at their spatially-correct coordinates in space relative to each other and the galatic core of the Milky Way.  
4. API data from NASA/JPL will be used to add "interesting solar objects" as a contextually-available rendering option.  
5. Star and Planet data will be stored in a database such as Firestore, as hard-coded data will be too volumous to be a good idea.  
6. Similarly, nested data structures need expanding: Planets need moons or other sattelites, Saturn requires rings, and so forth.  
7. A HUD that moves with the player (possibly invisibly when no objects are "expanded"), to display contextual information on: such as stats or links to external resources (wikipedia page, etc).  
8. Once interstellar stars are rendered, the ability to customize player velocity in order to move to them will need to be added.  
9. Smooth out movement controls.
10. And many more, as I identify their necessity.    

### Original Proposal

Name of Student: Christopher Huber

Name of Project: Amongst the Stars

Project's Purpose or Goal: Make space more approachable/interactable to the everyday user

List the absolute minimum features the project requires to meet this purpose or goal:

    3D Model of Planets + Sun
    Movement Controls
    Raycaster-triggered context menus/Data displays

What tools, frameworks, libraries, APIs, modules and/or other resources (whatever is specific to your track, and your language) will you use to create this MVP? List them all here. Be specific.

    Astronavigation (Ephemeris) Tables (JPL API most likely)
    React-Native for VR mode
    Planet Texture Map (planetpixelemporium.com)

If you finish developing the minimum viable product (MVP) with time to spare, what will you work on next? Describe these features here: Be specific.

    Expand navigable space to extrasolar
    Near-Earth-Object API call populating NEOs
    Collapsable Solar System (Making Planets children of Sun)

What additional tools, frameworks, libraries, APIs, or other resources will these additional features require?

    Nasa API calls
    Possibly Databases - undecided on best method for storing large volumes of Star data.
    ThreeJS (under-the-hood stuff React uses to make extra features work).

### Credits

My thanks go out to many online tutorials (links pending) for helping me build and reverse-engineer the syntax and subtleties of React360.  
The keyboard controls are copied and adapted from Martin Pham (https://gitlab.com/martinpham/react-360-keyboard-camera-controller).  
the planetary assets are courtesy of planetpixelemporion.com.  