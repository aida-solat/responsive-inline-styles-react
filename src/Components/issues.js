/*
ISSUE: backgoundImage not working
RESOLUTION: change 
  backgroundImage: () => `url("https://res.cloudinary.com/jkeohan/image/upload/v1560709227/mars-landing_eh42f9.jpg")`
  to this:  `url("https://res.cloudinary.com/jkeohan/image/upload/v1560709227/mars-landing_eh42f9.jpg")`

ISSUE: waiting for mars API to complete before tyring to set the active background image
RESOLUTION: created a default object with the initial background info

ISSUE: App - window.addEventListener isn't kicking off on page resize
RESOLUTION: 
 - Attempt #1 - Change to class based component and use componentDidMount...
   got held back because the callback was being exectued due to adding ().
   once the parens was remove it worked in both class and functional comps
*/