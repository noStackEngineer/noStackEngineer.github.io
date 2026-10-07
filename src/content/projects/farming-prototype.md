---
title: Farming game prototype
summary: A 2.5D farming game in Unreal Engine 5 and C++, with a pixel-art character in a 3D world. I'm building it to learn engine programming and gameplay systems.
kind: Personal project
date: 2026-09-23
period: Sep 2026 – present
tags: [C++, Unreal Engine 5, PaperZD, Enhanced Input]
# To add a cover image: put it in src/assets/ and uncomment these two lines.
# image: ../../assets/farming-prototype.jpg
# imageAlt: Describe the screenshot here.
featured: true
order: 0
---

<!--
  Gameplay clip: put the file in public/media/ (MP4/H.264, ideally under ~10 MB) and uncomment:

  <video src="/media/farming-prototype.mp4" controls muted playsinline preload="metadata"></video>

  Screenshots in the body: put them in src/assets/ and use
  ![Description](../../assets/your-screenshot.jpg)
-->

*Work in progress. Screenshots and a gameplay clip are coming soon.*

A farming game in the style of Stardew Valley, with one twist: the character and crops are 2D pixel-art sprites placed in a 3D world. That keeps the look of a 2D farming game while getting real 3D lighting, depth, and camera control from the engine. I'm building it in Unreal Engine 5.7 with **C++ for gameplay systems and Blueprints on top**. It's how I'm learning Unreal properly.

## What's built so far

- **Player character.** A C++ character class built on PaperZD. Movement comes from Enhanced Input, and the character faces one of four directions based on its input. It picks matching idle and walk animations, and can find the tile in front of it.
- **Interaction system.** Anything in the world can be interactable by implementing a C++ interface that can be overridden in Blueprints. The character checks the tile it's facing and interacts with whatever has the highest priority there.
- **Farm grid.** A grid actor sized from a volume in the level and snapped to the tile lattice. It detects which tiles have ground under them, and each tile runs a small state machine: till, plant, water, harvest. Advancing the day grows watered crops.
- **Rendering tiles cheaply (in progress).** Tiles are drawn with instanced meshes and batched sprites instead of one actor per tile, so a full field stays cheap to render.

## What's next

The goal is a playable core loop that looks presentable: till, plant, water, sleep, harvest. After that comes autotiling for the edges of tilled soil, then selling crops and saving progress.

## How I'm approaching it

I record each design decision as I go: the options I considered, the trade-off, and what I chose. One example is computing the character's direction from its input rather than its velocity, so it still faces the right way when pushing against a wall. I also commit in small steps so the history shows how the systems came together.
