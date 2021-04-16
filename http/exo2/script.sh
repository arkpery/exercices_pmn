#! /bin/bash

# First, get the informations of the flight number: 22

curl "https://api.spacexdata.com/v3/launches/22"

# Then, we can see that the rocket of the flight number 22 is falcon 9

curl "https://api.spacexdata.com/v3/rockets/falcon9"
