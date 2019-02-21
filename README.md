# Upstander
Team members: Kawin Swaddiwudhipong, Seah Ying Hang, Wilson Jusuf, John Ma

## Description
Upstander is a community safety tool that empowers bystanders to take action and effectively assist those who need urgent help.

### Built with
* Firebase
* Blockstack
* React Native
* Expo
* Fitbit
* Esri
* Framer
* React

## Inspiration
Have you witnessed an accident but you were unable to help because you froze up? Did you know that you have a maximum of 26 seconds to step in to help before an unconscious individual will start to face irreversible damage? (Worst-case scenario). We wanted to solve this problem by empowering bystanders to become upstanders and provide assistance to people who are in need of urgent help. By using blockstack to ensure individual ownership of their own safety data and Firebase to ensure live update, notification for bystanders and a virtual medical assistant to guide the patient, we want to enhance public safety in a safe and responsible way.

## What it does
To be able to detect accidents, the Fitbit will detect a sudden collision using an accelerometer and alert its position to nearby bystanders and emergency services. It will first store its location in their own private data storage using Blockstack's Gaia storage. The data storage is made publicly available for everyone to view so that others will be able to read it. Fitbit will then notify Firebase, which will first perform a verification of the bucket address, and then notify all the bystanders and emergency services. The emergency services will then be able to see a live update of the location while the bystanders will be notified of the help needed that is nearby. The bystander will then be guided through basic triage principles to provide immediate help using a virtual voice assistant while waiting for the emergency service to arrive.

## How we built it
There are 5 parts to our project. First, we created a Fitbit app that detects accidents and sends a request for help. The building of Fitbit was done using Fitbit's SDK and the companion app. At the same time, we started working on creating the UI for the bystander's app first using Framer, and then integrating with logic in React-Native and Expo. The dashboard for the medical professional to monitor all the incidents in real-time is created using the Esri API and React JS.

As for the backend, we first started by exploring Blockstack's technological stack. As Blockstack did not have any pre-defined libraries available in React-Native or REST api calls, we reverse-engineered the Blockstack library to obtain the main code logic, which we used in the Fitbit to store user data on the user's private cloud. As for the service to notify all the other bystanders, we needed to use Firebase as the capability of a realtime database with websockets enables us to notify individuals nearby to help out.

By stringing the frontend and backend stack into one integrated flow, we have an end-to-end flow of prototype to demonstrate our vision.
