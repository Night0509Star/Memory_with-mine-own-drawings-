Memory Card Game – With My Own Drawings

 Live Version

Play the game here:
 https://raw.githack.com/Night0509Star/Memory_with-mine-own-drawings-/refs/heads/main/Memory.html

 Project Description

This project is a browser-based Memory Card Game built with HTML, CSS, and JavaScript.

The game is based on a tutorial for the core flipping and matching mechanics, but it has been significantly expanded with custom features, personal artwork, new game modes, UI improvements, and extra logic.

The main goal of the game is to find all matching card pairs by remembering their positions.

 Purpose of the Project

The purpose of this project was to:

Practice JavaScript logic and DOM manipulation

Learn how game state management works

Improve understanding of event listeners

Work with timers and intervals

Customize and expand an existing concept

Build a complete interactive browser game

This project demonstrates the ability to:

Modify tutorial code

Add original features

Debug logical errors

Structure a full working web application

 Game Modes

Normal Mode

No timer

Player can take as long as needed

Win message appears only after all pairs are found

No automatic card reveal

 Timed Mode

60-second countdown

If time runs out, all cards flip

If player wins before time ends:

Confetti animation plays 🎉

Timer stops automatically

 Custom Features Added

This version includes multiple original improvements beyond the tutorial:

 Custom Card Images

Instead of letters or icons, this version uses:

My own drawn images

Custom card back design

Image-based matching system

 Start Screen

A custom start menu was added:

Mode selection (Normal / Timed)

Game screen hidden until a mode is chosen

Back-to-menu button inside the game

 Timer System

In timed mode:

A 60-second countdown starts

Time updates every second

Game ends automatically when timer reaches 0

Timer resets when restarting

 Custom Confetti Effect

When winning in timed mode:

Small colorful div elements are generated

Each piece has random color and position

Elements automatically remove after animation

No external libraries used

 Restart System

The restart button:

Resets match counter

Reshuffles cards

Rebuilds the board

Resets timer if timed mode

Clears win/lose messages

Technical Breakdown

Core Mechanics (Tutorial-Based)

The following parts are inspired by the tutorial:

Shuffle algorithm (Fisher-Yates)

Card flipping logic

Matching comparison system

Flip-back delay using setTimeout

Lock board to prevent triple-click bugs

Reference tutorial:
https://www.youtube.com/watch?v=totdD9wDWqc

Extended Logic (Custom Work)
Game State Tracking

The game tracks:

First flipped card

Second flipped card

Lock state (to prevent multiple clicks)

Matched pairs counter

Game started flag (to prevent early win message)

Win Condition Logic

The win message:

Only appears when all pairs are matched

Does NOT trigger before the game starts

Stops the timer (if timed mode)

Timer Logic

Uses:

setInterval

clearInterval

Countdown display update

Conditional game over logic

Confetti System

Creates:

30 dynamically generated div elements

Random HSL colors

Random horizontal positions

Automatic removal after animation

File Structure

Memory_with-mine-own-drawings
│
├── Memory.html
├── styles.css
├── script.js
├── images/
│   ├── 1000002261.jpg
│   ├── 1000002262.jpg
│   ├── 1000002264.jpg
│   ├── 1000002265.jpg
│   ├── 1000002266.jpg
│   ├── 20251214_191648 - kopia.jpg
│   └── card-back.png
│
└── README.md

 Programming Concepts Used

DOM manipulation

Event listeners

Arrays

Array shuffling

Conditional statements

Functions

Timers (setInterval)

Delays (setTimeout)

Dynamic element creation

CSS animations

Game state control

Debugging logic errors

 Future Improvements (Ideas)

Possible improvements:

Difficulty levels (easy/medium/hard)

Score tracking

Move counter

Sound effects

High score system

Mobile performance optimization

Animations for win/lose screens

Local storage save system

 What I Learned

Through this project I learned:

How to build a complete browser game

How to expand tutorial code into something original

How to fix logical bugs (like win condition triggering too early)

How important state management is in game development

How to combine UI design and JavaScript logic

Final Notes

This project is not just a copy of a tutorial — it has been expanded with:

✔ Custom artwork
✔ Custom game modes
✔ Timer system
✔ Confetti animation
✔ Start screen
✔ Navigation system
✔ Debugged win logic

It demonstrates creativity, logical thinking, and problem-solving skills.
