# SHEP
*Life is not about the destination, its about the journey*

> https://sheppie.herokuapp.com/


## Bug reports:
Please report any bugs or suggestion on further developing the app here,

> [Shep bug report](https://forms.gle/JmkyCBUxYArR3V856)


## Gotcha's:
1. ~~There is a known issue with CORS origin policy when updating address in the settings page.
    This can be overcome by launching Chrome in disabled web security mode.
    Windows + R and type the below command.~~

    >~~chrome.exe --user-data-dir="C:/Chrome dev session" --disable-web-security~~

2.  Since, I'm currently on a Twilio trial account, first time users will have to verify 
    their phone  numbers as twilio has a security feature so that I dont spam you with SMS.
    > [Twilio console](https://console.twilio.com/us1/develop/phone-numbers/manage/active?frameUrl=%2Fconsole%2Fphone-numbers%2Fverify%2Fmessage%3F__override_layout__%3Dembed%26bifrost%3Dtrue%26x-target-region%3Dus1)

## Story time

```
Welcome to Shep, This application was developed with an intention 
to eliminate the middleman when requesting rides from Leon.

Fun fact, the reasoning behind 'Shep' originated from the term 'Shepard'.

Leon has been doing more than just taking us to places,
he has been involving in physical labor like helping in moving furniture,
providing useful tips when shopping, 
his networking with store owners to find better, cheaper deals and so much more.

His guidance is of prime importance for international students,
not to mention first time visitors to US. 
His voluntary service is what has brought Shep to life.

So wait no further, go ahead and put in a shep request  :)
```

## TO-DO's:
1.  Change the "Your verification code from Batfxzk" twilio OTP message
2.  Put text near the marker in the map so it shows location (i.e. Walmart? or Costco? in Union City)
    Currently only shows a marker in Union city.
3.  ~~Heroku is not rendering the favicon.ico on the browser tab~~
4.  ~~Decisions page works but /driver_decision from SMS requires bug fixing~~
5.  ~~Update formatting so that its mobile friendly.~~
6.  ~~Set up google analytics for heroku-shep-staging-1~~
7.  Design a new page for Leon to put in "ride completed" option.
8.  ~~Google forms for bug reports as well as suggestions~~
9.  Upgrading twilio account allows me to send Whatsapp messages instead of traditional SMS. What do users prefer?
10.  ~~Initially, when the user has not made a request yet, the map will not render. Design an FAQ element as a placeholder.~~
11.  Broadcast feature when at city view and have spots for ride.
12.  ~~There is an issue with date time in Heroku config, it does not convert request time to UTC when storing. Did not notice this behaviour locally.~~
13.  ~~Put in a settings button above requests table.~~
14.  ~~Set up profile modal on Google Auth.js to get building and apt number.~~
15.  driver_decision page seems to not render action buttons when testing.
16.  Student testimonials page, eg. Aishwarya's wooden bedframe fixing story.
17.  ~~Page Grid form, allow attach image option.~~ Doing so, display this image from cloud into the decision modal.
18.  ~~Render Leon's Calendar beside request form.~~
19.  Opt for free SMS option or switch to email notification method.

