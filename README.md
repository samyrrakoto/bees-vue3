
﻿Technical test : Bees
====================
This is a technical test I had to pass to get in a company once. I originally had to do it in PHP (and passed 🎉), you can find it [here](https://github.com/samyrrakoto/bees-php-sf6), and I decided to re-do it in Vue 3 to consolidate my learning of this framework.

Below are the test specifications

## Goal
This test aims at creating a PHP application that performs the following:
	- produce a web page with an interface to play the game (UI design is not expected or necessary)
	- a button should appear in order to "hit" a random bee 
	- the game must follow the rules described below 

N.B: The solution should run locally (please provide a README.md). You don’t need to setup any web server or host your code online


## Specifications

There are 3 different types of bees:

- The Queen
	- has 100 hit points
	- when the Queen is hit, then 15 hit points should be deduced from her lifespan
	- when the Queen is running out of hit points, all the other bees should automatically be out of hit points
	- there is only 1 Queen in the game

- The Worker
	- each has 50 hit points
	- when a worker is hit, he loses 20 hit points
	- there are 5 Workers at start 

- The Scout
	- each has 30 hit points
	- when a scout is hit, he loses 15 hit points
	- there are 8 Scouts at start


## Gameplay 

Should be visible on the UI:
	-- the list of bees associated with their role (Queen, Worker, Scout) and remaining hit points
	-- a clickable "hit" button

When the button is clicked:
	-- a random bee should be selected 
	-- the correct damages should be deduced from its lifespan

Please note that:
	-- if a bee is running out of hit points, then it cannot be randomly selected again
	-- when all bees are running out of hit points, then the game must be able to reset itself for another round
