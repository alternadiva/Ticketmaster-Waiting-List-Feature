## Ticketmaster - Waiting List Feature 🎟 🗒

### Description

Solution for the take-home challenge presented by Ticketmaster. This is my attempt at completing one of the user stories of the Waiting List feaure.⏳

🔗 **Deployed to [GitHub Pages](https://alternadiva.github.io/Ticketmaster-Waiting-List-Feature/)**

--- 

### Vision 

Create a website feature, that will allow the fans to join the waitlist and be notified via email and/or text message if more tickets become available for sale.

### Chosen User Story: 

**As a fan, I’d like to get visual confirmation about my subscription so that I will immediately know if it was successful or not #6**

#### Subtasks:

- [x] Stub waiting list API to imitate fetch response #15
- [x] Compare waiting list data and form data #14
- [x] Confirm subscription #16
- [x] Confirm prior subscription #17

#### Guideline to test the solution on the UI:
✅ To get a visual confirmation about a successful sign up, insert the following values to the input fields
  - Mobile number: +441122334455
  - Email address: test@email.com
  
⚠️ To get a warning about an already existing sign up, insert the following values to the input fields
  - Mobile number: +440123456789
  - Email address: example@example.com

![Successful](https://user-images.githubusercontent.com/85565743/158209258-4b0563af-2b50-4ce6-bcfa-9f0f51c63cdb.png) ![Existing](https://user-images.githubusercontent.com/85565743/158209304-be01ca78-3287-47dd-90b5-c538721e0499.png)


--- 

### User Stories

As a fan, I’d like to… 
- have the ability to join the waiting list from the event details page so I can be notified if tickets become available
- be reminded to sign in, when I’m not, so I am able to add myself to the waiting list
- see the email address field pre-filled after login so I don’t have to type my email address again
- have the option to submit either my phone number, my email address or both so I can set my notification preferences
- get visual feedback, when I fill out the field or submit the form incorrectly so I know what to correct
- get visual confirmation about my subscription so that I will immediately know if it was successful or not

As a visually impaired fan, I want to…
- use keyboard controls so I can navigate the website and activate elements on the page
- hear my screen reader describe the content on the website so I can get information about the type of elements on the page

As an aesthetically conscious fan, I’d like to see the same design elements the website has so I can use an aesthetically pleasing feature

As a mobile user, I'd like to see only the form section on my screen so I can avoid horizontal scrolling

