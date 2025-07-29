---
title: "Bitburner: An Introduction"
subtitle: A Javascripting Adventure
category:
  - Game Theory
author: Conner Hayes
date: 2025-07-29T10:26:51.870Z
featureImage: /uploads/bitburner-dukenukemdad.jpg
---
### Philosophy, Definition of Terms, Goals, Theory and Initial Hypothesis

**Philosophy:** To identify the cheapest (shortest) path to enacting core (necessary) operations. Then building a responsive framework that executes these operations to the best possible efficiency with a variable supply of resources.

**Terms (Continuing WIP):**

* player_character: the point of view from which the player experiences the world of Bitburner, this character has several attributes, such as health and strength, but most important is their hacking skill.
* hack_skill: a variable value assigned to the player_character, representing their ability to hack more difficult targets. Raising this value decreases the amount of time required for some functions to complete their execution and will increase money gained through the hack(function).
* hack(function): removes a percentage of target server’s money and deposits it into the player’s account.
* grow(function): increases target server’s money by a multiple of the starting value, cannot exceed the server’s maximum value.
* weaken(function): reduces a server’s security by a set amount not less than the server’s minimum value.
* server: an object containing static fields for name, max money, min security, growth factor, RAM, and port cracking requirements, also contains mutable fields for current money, current security, and root access.
* home_server: contains RAM that can be upgraded to provide more space for functions to run, cores can be upgraded to improve the potency of some functions.
* thread_count: functions can be run using one or more threads, this count multiplies their RAM requirement and efficacy.
* execution_time: the time for a function to complete it’s task, often scaling with hack_skill increases.
* augmentation: a permanent adjustment to the player_character’s skill attributes.

**Goal:** To achieve the highest income per unit of time ($/time maximum) as quickly as possible.

**Theory:** I will concentrate my initial efforts to catalogue the resources available to the player. Identifying and cataloging the RAM capacity of the home server, purchased servers, and rooted servers is my first step. After identifying server RAM, we can figure out how many hack, grow, and weaken threads those servers could potentially host - I believe creating some matplotlib charts of ellipsoids would be able to represent this thread capacity for various servers.

**Hypothesis:** Running packages of HWGW (hack-weaken-grow-weaken) is generally accepted to be a successful choice for large gains from valid targets. Efficiently cataloging available resources should be my first development.