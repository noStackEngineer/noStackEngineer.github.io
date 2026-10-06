---
title: Real-time 3D graphics in WebGL
summary: A series of browser-based renderers built from raw WebGL, from a paint program to a textured, first-person block world with lighting, ending in a three.js scene.
kind: Course project
date: 2025-03-14
period: Winter 2025
tags: [JavaScript, WebGL, GLSL, three.js]
image: ../../assets/cs160-lighting.jpg
imageAlt: A WebGL scene with a spotlight, a textured sphere and cube, and a blocky fish inside a lit room.
links:
  - { label: Live demos, href: "https://anthony-reyna.com/CS160/" }
  - { label: Code, href: "https://github.com/noStackEngineer/CS160" }
featured: true
order: 2
---

For UC Santa Cruz's CSE 160 (Introduction to Computer Graphics) I built a run of interactive renderers that each added a piece of the graphics pipeline. Apart from the final project, everything uses raw WebGL and hand-written GLSL shaders, with no engine.

All of them run in the browser:

- **[Paint](https://anthony-reyna.com/CS160/assignment1/src/ColoredPoints.html).** Drawing with points, triangles, and circles on a WebGL canvas.
- **[Blocky animal](https://anthony-reyna.com/CS160/blockyAnimal/BlockyAnimal.html).** A hierarchical model built from cubes and pyramids, with joint animation driven by a scene graph of transforms.
- **[Block world](https://anthony-reyna.com/CS160/blockyWorld/World.html).** A first-person world with a movable camera, texture mapping, a skybox, and a bit of in-game dialogue to set the scene.
- **[Lighting](https://anthony-reyna.com/CS160/lighting/World.html).** Phong lighting with normals, a movable point light, and a spotlight, with on-screen controls.
- **[three.js scene](https://anthony-reyna.com/CS160/final/index.html).** A claw machine in an arcade, using loaded glTF/FBX models, HDR environment lighting, soft shadows, and orbit controls.

![First-person view of the textured block world under a starry skybox](../../assets/cs160-world.jpg)

## What I took from it

Writing matrices, camera math, and shaders by hand made it clear what an engine does every frame. That's the base I'm building on now with Unreal Engine.
