# Avatar Guide System — Portfolio Implementation

This document explains how to design and integrate a 3D animated avatar that speaks and reacts to scroll events inside a portfolio website.

The build is divided into phases so you can ship incrementally and avoid complexity early.

---

## Phase 1 — Concept & Requirements

### Goal
Add a small animated avatar in the bottom-left of the site that:
- idles when silent
- gestures while speaking
- speaks text mapped to each section of the page
- only talks when the user unmutes
- syncs animation to audio playback
- reacts to scrolling (section-aware)

Future goal:
- replace static narration with AI speech

---

## Phase 2 — Avatar Creation

### 2.1 Create the avatar
Use **Ready Player Me**:

1. Open  
   https://readyplayer.me
2. Create avatar
3. Customize face, outfit, hair, etc.
4. Export model as `.glb`

You now have something like:

```
human-avatar.glb
```

This is a fully-rigged 3D model.

---

### 2.2 Add animations (idle, talking, gestures)

We need **animation clips** inside the model.

Tool: **Mixamo**

Steps:
1. Upload the avatar model to https://mixamo.com
2. Choose animations:
   - Idle loop
   - Talking loop
   - Hand gesture loop
3. Download each animation as **FBX**

Example files:
```
avatar_idle.fbx
avatar_talk.fbx
avatar_gesture.fbx
```

---

### 2.3 Merge animations into one GLB

Use **Blender**:

1. Import the avatar base model
2. Import each animation FBX
3. Make sure all clips are on the same armature
4. Export as:

```
avatar.glb
```

Now the model contains multiple animation clips.

---

## Phase 3 — Rendering the Avatar on the Website

### Recommended stack
- **Three.js** or **React-Three-Fiber (R3F)**

Position the avatar fixed at the bottom-left corner.

Example CSS:
```css
.avatar-container {
  position: fixed;
  bottom: 16px;
  left: 16px;
  width: 260px;
  height: 360px;
  pointer-events: none;
}
```

Inside this container you render your `<Canvas>`.

---

## Phase 4 — Animation State Control

We define two main states:

```
IDLE
TALKING
```

Rules:
- On page load → idle
- When narration plays → talking
- When muted or stopped → idle

Technically:
- Load animation clips
- Use an `AnimationMixer`
- Crossfade between clips

---

## Phase 5 — Audio System

We use a single global audio player:

```
HTMLAudioElement
```

Functions:
- play narration
- stop narration
- mute/unmute

Mute should:
- stop audio
- force avatar → IDLE
- store preference in `localStorage`

---

## Phase 6 — Text-to-Speech (Current + Future)

### Current version
Use **pre-generated MP3 narration per section**

Example:

```
/audio/hero.mp3
/audio/about.mp3
/audio/projects.mp3
...
```

### Future upgrade
Replace MP3s with **TTS API** such as:
- OpenAI TTS
- ElevenLabs
- Play.ht

Pipeline stays the same.

---

## Phase 7 — Scroll-Aware Narration

We define a configuration file:

`avatarConfig.ts`

```ts
export const avatarNarration = [
  { id: "hero", text: "...", audio: "/audio/hero.mp3" },
  { id: "about", text: "...", audio: "/audio/about.mp3" },
  { id: "projects", text: "...", audio: "/audio/projects.mp3" },
  ...
];
```

Each section in the DOM has a matching ID.

We detect scroll using:

- **GSAP ScrollTrigger** or
- **IntersectionObserver**

Behavior:
- when section enters view → speak
- when new section enters → stop + switch
- if muted → skip

---

## Phase 8 — Event Flow

```
SECTION_ENTER
→ stop previous audio
→ load audio for section
→ play audio
→ switch avatar to TALKING
→ when audio ends → switch back to IDLE
```

Mute overrides everything.

---

## Phase 9 — UX Rules

Browser policies require:

- do not autoplay sound before user interacts
- show a visible mute toggle
- persist mute state

Also:

- provide captions or text
- avoid long speeches
- keep avatar small and subtle

---

## Phase 10 — Performance Guidelines

- Keep GLB under **10–12 MB**
- Compress textures to **2K or below**
- Use WebM alpha video ONLY if you prefer non-interactive animation
- Throttle scroll triggers
- Lazy-load audio after first interaction

---

## Phase 11 — Recommended File Structure

```
/public
  /audio
    hero.mp3
    about.mp3
    ...
  avatar.glb

/src
  components/
    AvatarCanvas.tsx
    AvatarController.ts
    AudioController.ts
  config/
    avatarConfig.ts
  hooks/
    useScrollTriggers.ts
```

Separation keeps the system maintainable.

---

## Phase 12 — Future AI Upgrade Plan

Replace narration MP3 with:

```
text → TTS API → audio stream
```

Then:
- allow real-time Q&A
- lip-sync enhancement
- emotion-aware gestures
- voice agent integration

Architecture already supports this.

---

# Summary

You now have a structured path:

1. Create avatar in Ready Player Me
2. Add animations in Mixamo
3. Merge and export GLB
4. Render in Three.js / R3F
5. Build audio controller
6. Add mute + state machine
7. Trigger narration on scroll
8. Sync talking animation to audio
9. Optimize performance
10. Later upgrade to AI voice

This keeps complexity low while still feeling advanced.

---
# Avatar System — Implementation Plan (Vite + React + TypeScript)

This guide explains how to integrate the Ready Player Me 3D avatar into this project:

```
vite-react-typescript-starter
```

Stack used:
- React 18
- TypeScript
- Three.js via React Three Fiber
- GSAP (for scroll + triggers)

---

## 1. Install 3D dependencies

```bash
npm i three @react-three/fiber @react-three/drei
```

These provide:

| Package | Purpose |
|--------|--------|
| three | WebGL rendering |
| @react-three/fiber | React renderer for Three.js |
| @react-three/drei | Helpers: loaders, controls, etc |

---

## 2. Place your avatar file

Put:

```
avatar.glb
```

inside:

```
/public
```

So it resolves as:

```
/avatar.glb
```

(You can later replace it with the final animated version.)

---

## 3. Create AvatarCanvas component

`src/components/AvatarCanvas.tsx`

```tsx
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

function AvatarModel() {
  const { scene } = useGLTF("/avatar.glb");
  return <primitive object={scene} scale={1.1} />;
}

export default function AvatarCanvas() {
  return (
    <div
      className="avatar-container"
      style={{
        position: "fixed",
        bottom: "16px",
        left: "16px",
        width: "280px",
        height: "360px",
        pointerEvents: "none",
      }}
    >
      <Canvas camera={{ position: [0, 1.5, 3] }}>
        <ambientLight intensity={1} />
        <directionalLight position={[5, 5, 5]} intensity={1} />
        <AvatarModel />
        <OrbitControls enableZoom={false} enableRotate={false} />
      </Canvas>
    </div>
  );
}
```

This renders your avatar in the corner.

Later we will add animation and state.

---

## 4. Import AvatarCanvas in your Landing Page

Example:

```tsx
import AvatarCanvas from "./components/AvatarCanvas";

export default function LandingPage() {
  return (
    <>
      <AvatarCanvas />
      {/* rest of your page */}
    </>
  );
}
```

You now have the avatar visible permanently.

---

## 5. Animation State (Idle / Talking)

Create:

`src/controllers/AvatarController.ts`

```ts
export enum AvatarState {
  IDLE = "IDLE",
  TALKING = "TALKING",
}

export const avatarState = {
  value: AvatarState.IDLE,
};
```

Later this will control animation transitions.

---

## 6. Audio Controller

`src/controllers/AudioController.ts`

```ts
let isMuted = false;
let audio = new Audio();

export function playAudio(src: string) {
  if (isMuted) return;
  audio.pause();
  audio = new Audio(src);
  audio.play();
}

export function stopAudio() {
  audio.pause();
}

export function toggleMute() {
  isMuted = !isMuted;
  stopAudio();
  localStorage.setItem("avatarMute", String(isMuted));
}

export function getMute() {
  return isMuted;
}
```

This gives:
- mute
- playback
- persistence

---

## 7. Scroll → Speak Mapping

`src/config/avatarNarration.ts`

```ts
export const avatarNarration = [
  { id: "hero", audio: "/audio/hero.mp3" },
  { id: "about", audio: "/audio/about.mp3" },
  { id: "projects", audio: "/audio/projects.mp3" },
  { id: "contact", audio: "/audio/contact.mp3" },
];
```

---

## 8. Scroll Trigger

Use GSAP.

`src/hooks/useAvatarScroll.ts`

```ts
import { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import { playAudio, stopAudio } from "../controllers/AudioController";
import { avatarNarration } from "../config/avatarNarration";

gsap.registerPlugin(ScrollTrigger);

export function useAvatarScroll() {
  useEffect(() => {
    avatarNarration.forEach(({ id, audio }) => {
      ScrollTrigger.create({
        trigger: `#${id}`,
        start: "top center",
        onEnter: () => playAudio(audio),
        onLeaveBack: () => stopAudio(),
      });
    });
  }, []);
}
```

Use it inside your layout:

```ts
useAvatarScroll();
```

---

## 9. Mute Button

Add UI:

```tsx
<button onClick={toggleMute}>
  Mute
</button>
```

Later you can style it.

---

## 10. At This Stage You Have

✔ Avatar fixed bottom-left  
✔ Idle render  
✔ Section-aware voice  
✔ Mute  
✔ Structure ready for animation  

Next we will:

- load animation clips
- switch state when audio starts + stops
- sync talking loop

---

# Roadmap From Here

1. Add animation clips to GLB
2. Load AnimationMixer in AvatarCanvas
3. Map:
   ```
   audio.play → TALKING
   audio.end → IDLE
   mute → IDLE
   ```
4. Optimize for mobile
5. Replace MP3 with TTS API later

This avoids complexity and keeps the code clean.

---
 next step it add AnimationMixer code

add lip-sync-like talking loop

add TypeScript types

clean UI with Tailwind
You are coding inside a Vite + React + TypeScript project with Tailwind and GSAP already installed.

Goal:
Implement a 3D avatar guide system in the portfolio. The avatar sits fixed in the bottom-left corner and speaks narration tied to scroll sections. The avatar has two animation states: IDLE and TALKING. When narration audio plays, the avatar switches to TALKING. When audio stops or mute is enabled, it switches back to IDLE. Narration is triggered by scroll-based section visibility. Mute must persist in localStorage.

Stack requirements:
- three.js via @react-three/fiber and @react-three/drei
- React functional components with hooks
- GSAP ScrollTrigger for scroll detection
- TypeScript strict mode
- audio playback via HTMLAudioElement
- file structure described below

File structure to create:

/public
  avatar.glb
  /audio
    hero.mp3
    about.mp3
    projects.mp3
    contact.mp3

/src/components/AvatarCanvas.tsx
  - Loads GLB model with useGLTF
  - Uses AnimationMixer
  - Exports a React component rendering a <Canvas>
  - Avatar is fixed bottom-left with CSS positioning
  - Avatar reacts to animation state {IDLE,TALKING}

/src/controllers/AvatarController.ts
  - Enum: AvatarState = IDLE | TALKING
  - Export global state object
  - Export helper methods to set state

/src/controllers/AudioController.ts
  - Single audio instance
  - playAudio(src)
  - stopAudio()
  - toggleMute()
  - getMute()
  - store mute preference in localStorage
  - when playAudio runs: set AvatarState.TALKING
  - when stopped or muted: set AvatarState.IDLE

/src/config/avatarNarration.ts
  - Array of sections:
      { id: "hero", audio: "/audio/hero.mp3" }
      { id: "about", audio: "/audio/about.mp3" }
      { id: "projects", audio: "/audio/projects.mp3" }
      { id: "contact", audio: "/audio/contact.mp3" }

/src/hooks/useAvatarScroll.ts
  - Registers GSAP ScrollTrigger
  - On section enter → play narration
  - On leave back → stop narration
  - Avoid overlapping plays

/in the main layout
  - Render <AvatarCanvas />
  - Call useAvatarScroll()

CSS:
- Avatar container should not block pointer events
- Positioned fixed bottom-left

Rules:
- Do NOT autoplay audio until first user interaction
- If muted, avatar must stay IDLE
- If user scrolls quickly, narration switches cleanly
- Code must be clean, typed, and modular
- Keep the avatar small and performance-friendly

Deliverables:
- Fully working React components and controllers
- TypeScript friendly code
- Readable and maintainable structure
