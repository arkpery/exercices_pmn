#! /bin/bash

# First fetch capsule information with a serial of C113

curl "https://api.spacexdata.com/v3/capsules/C113"

# The flight number is 45

curl "https://api.spacexdata.com/v3/launches/45"

# Then, you have the mission id: EE86F74, and you can get informations about this mission

curl "https://api.spacexdata.com/v3/missions/EE86F74"
