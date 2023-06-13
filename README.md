# [Sheppie](https://sheppie.joqim.com/)

React web application developed to automate routine tasks and document records for analytics in support of international students. The application was primarily designed to assist Leon Harper, an active member of a non-profit organization, in facilitating tasks such as grocery shopping and furniture pickup for international students in the Bay Area.

Sheppie had various features to support its functionality. It required users to sign in before making a request, creating a user document for tracking purposes. It incorporated an OTP verification flow for first-time users. The request form allowed users to enter pickup and drop-off locations, passenger count, and pickup time. The application also had a user profile modal, a student checklist page, and features like attaching image files and selecting multiple drop-off locations.

One of the trade-offs considered during the development of Sheppie was the user experience transition from using WhatsApp for ride requests to using the web portal. To address this, a Natural Language Processor (NLP) was developed to simulate Leon's responses, providing a familiar and conversational interface. The NLP utilized a node package called 'Compromise' for natural language understanding, allowing users to input requests using various formats, such as specifying time relative to certain events or using phrases like "evening at 4".

Overall, Sheppie aimed to automate and streamline the process of assisting international students with various tasks. It incorporated features like authentication, request forms, user profiles, image uploads, and integration with Google Calendar and WhatsApp for notifications. The trade-off considered in the project was ensuring a smooth transition for users accustomed to WhatsApp by implementing the NLP feature.

Read more about Sheppie and its features on https://medium.com/@joqim/my-journey-through-sheppie-d1edb628a547
