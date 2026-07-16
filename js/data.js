// FORGE — Upper/Lower Split Program Data Configuration
// =====================================================
// This file contains ALL exercise definitions, warm-ups, tips, and video links.
// To add, remove, or modify exercises: edit this file only. No other code changes needed.

const FORGE_DATA = {
  version: "1.0.0",
  programName: "Upper/Lower",

  // *** CONFIGURE THESE after setting up your own Google Sheet ***
  sheetsWebhookUrl: "",
  sheetsViewUrl: "",

  cycleDays: [
    { id: "lower",  name: "Lower",  type: "power",       label: "Lower + Core", color: "amber" },
    { id: "upper",  name: "Upper",  type: "hypertrophy",  label: "Upper",        color: "cyan"  },
    { id: "rest-1", name: "Rest",   type: "rest",         label: "Recovery",     color: "gray"  },
    { id: "lower",  name: "Lower",  type: "power",       label: "Lower + Core", color: "amber" },
    { id: "upper",  name: "Upper",  type: "hypertrophy",  label: "Upper",        color: "cyan"  },
    { id: "rest-2", name: "Rest",   type: "rest",         label: "Recovery",     color: "gray"  },
    { id: "rest-3", name: "Rest",   type: "rest",         label: "Recovery",     color: "gray"  }
  ],

  rpeGuide: {
    7: "Could do 3 more reps",
    8: "Could do 2 more reps",
    9: "Could do 1 more rep",
    10: "Nothing left"
  },

  progressionRules: {
    power: "When you complete all prescribed sets and reps at your target RPE, add the smallest weight increment available next session.",
    hypertrophy: "Work the rep range from bottom to top. When you hit the top of the range across all sets, add weight and reset to the bottom."
  },

  workouts: {
    // =========================================================
    // LOWER + CORE
    // =========================================================
    "lower": {
      id: "lower",
      name: "Lower + Core",
      type: "power",
      label: "Lower + Core",
      goal: "Legs, posterior chain, core stability, spinal health",
      estimatedMinutes: 70,
      warmup: {
        name: "Dynamic Warm-Up",
        duration: "5 minutes",
        movements: [
          "Leg swings front to back, 10 each direction",
          "Bodyweight squats, 10 slow reps focusing on depth",
          "Hip circles, 8 each direction per leg",
          "Glute bridges, 10 reps with squeeze at top",
          "Cat-cow stretches, 8 slow reps through full spinal range"
        ]
      },
      exercises: [
        {
          id: "leg-press",
          name: "Leg Press",
          sets: 4,
          reps: "8-10",
          rpe: "8",
          rest: 90,
          restLabel: "90 sec",
          weightMode: "free",
          image: "leg-press.png",
          video: "https://www.youtube.com/watch?v=IZxyjW7MPJQ",
          tip: "Feet high and wide for more glute and hamstring emphasis, or centered for quad emphasis. Full range of motion, knees tracking over toes. Don't lock out at the top. No spinal loading, so push it hard.",
          isFinisher: false
        },
        {
          id: "db-romanian-deadlift",
          name: "Dumbbell Romanian Deadlift",
          sets: 3,
          reps: "10-12",
          rpe: "7-8",
          rest: 90,
          restLabel: "90 sec",
          weightMode: "free",
          image: "db-romanian-deadlift.png",
          video: "https://www.youtube.com/watch?v=FQKfr1YDhEk",
          tip: "Dumbbells stay close to the legs. Push the hips back until you feel a strong hamstring stretch, then drive hips forward to stand. Stop at mid-shin if you feel any nerve symptoms. Slight knee bend that stays constant throughout the rep. Lighter than barbell, easier to bail, better range control.",
          isFinisher: false
        },
        {
          id: "leg-extension",
          name: "Leg Extension",
          sets: 3,
          reps: "10-12",
          rpe: "8-9",
          rest: 60,
          restLabel: "60 sec",
          weightMode: "free",
          image: "leg-extension.png",
          video: "https://www.youtube.com/watch?v=YyvSfVjQeL0",
          tip: "Full extension at top with one-count squeeze. Slow negative. Quads in isolation. Complements the leg press and lunge patterns.",
          isFinisher: false
        },
        {
          id: "lying-leg-curl",
          name: "Lying Leg Curl",
          sets: 3,
          reps: "10-12",
          rpe: "8-9",
          rest: 60,
          restLabel: "60 sec",
          weightMode: "free",
          image: "lying-leg-curl.png",
          video: "https://www.youtube.com/watch?v=1Tq3QdYUuHs",
          tip: "Squeeze hard at peak contraction, three-count negative on every rep. Don't let hips lift off the pad. DB RDLs load hamstrings stretched; leg curl loads them shortened. You need both.",
          isFinisher: false
        },
        {
          id: "back-extension",
          name: "Back Extensions",
          sets: 3,
          reps: "12-15",
          rpe: "7",
          rest: 60,
          restLabel: "60 sec",
          weightMode: "bw",
          image: "back-extension.png",
          video: "https://www.youtube.com/watch?v=qtjJUWCnDyE",
          tip: "Controlled movement, no jerking. Hinge at the hips, extend until your body forms a straight line. Arms crossed over chest. RPE 7 is deliberate: this is rehab-adjacent spinal strengthening, not ego lifting. When bodyweight is easy for 15, hold a plate against your chest.",
          isFinisher: false
        },
        {
          id: "walking-lunges",
          name: "Walking Lunges (DB)",
          sets: 3,
          reps: "10 each",
          rpe: "8",
          rest: 90,
          restLabel: "90 sec",
          weightMode: "free",
          image: "walking-lunges.png",
          video: "https://www.youtube.com/watch?v=L8fvypPrzzs",
          tip: "Dumbbells at sides. Long stride, upright torso, back knee kisses floor. Unilateral work exposes and fixes imbalances. Moderate weight, quality steps.",
          isFinisher: false
        },
        {
          id: "cable-crunches",
          name: "Cable Crunches",
          sets: 3,
          reps: "12-15",
          rpe: "8-9",
          rest: 60,
          restLabel: "60 sec",
          weightMode: "free",
          image: "cable-crunches.png",
          video: "https://www.youtube.com/watch?v=AV5PmZJIrrw",
          tip: "Kneel facing the cable, rope behind your head. Crunch by curling your spine, bringing elbows toward knees. Hips stay locked in place. Think about pulling your ribcage toward your pelvis. If your hips are moving, the weight is too heavy.",
          isFinisher: false
        },
        {
          id: "hanging-leg-raises",
          name: "Hanging Leg Raises",
          sets: 3,
          reps: "10-12",
          rpe: "8-9",
          rest: 60,
          restLabel: "60 sec",
          weightMode: "bw",
          image: "hanging-leg-raises.png",
          video: "https://www.youtube.com/watch?v=X-ACS9vpRyU",
          tip: "Hang from a bar, raise legs to at least 90 degrees. Control the descent, no swinging. If straight legs are too hard, bend the knees. The hang itself is spinal decompression, which is a bonus for disc health.",
          isFinisher: false
        },
        {
          id: "dead-hang",
          name: "Dead Hangs",
          sets: 2,
          reps: "max time",
          rpe: "-",
          rest: 60,
          restLabel: "60 sec",
          weightMode: "bw",
          trackMode: "time",
          image: "dead-hang.png",
          video: "https://www.youtube.com/watch?v=wPmGMqaKhJo",
          tip: "Full grip, shoulders engaged (not shrugging up to the ears). Spinal decompression is one of the best things you can do for a herniated disc. Track your times. When consistently over 60 seconds, start adding scapular pulls from the hang for sets of 8-10.",
          isFinisher: true,
          finisherProgression: "Dead hangs develop grip endurance, scapular stability, and provide therapeutic spinal decompression."
        }
      ]
    },

    // =========================================================
    // UPPER (PUSH + PULL + ARMS)
    // =========================================================
    "upper": {
      id: "upper",
      name: "Upper",
      type: "hypertrophy",
      label: "Upper",
      goal: "Chest, back, shoulders, arms — full upper body",
      estimatedMinutes: 80,
      warmup: {
        name: "Dynamic Warm-Up",
        duration: "5 minutes",
        movements: [
          "Arm circles, 10 each direction",
          "Band pull-aparts, 15 reps",
          "Scapular push-ups, 10 reps",
          "Light cable rows, 10-12 reps to wake up the lats"
        ]
      },
      exercises: [
        {
          id: "db-flat-bench",
          name: "Dumbbell Flat Bench Press",
          sets: 4,
          reps: "8-10",
          rpe: "8",
          rest: 90,
          restLabel: "90 sec",
          weightMode: "free",
          image: "db-flat-bench.png",
          video: "https://www.youtube.com/watch?v=Y_7aHqXeCfQ",
          tip: "Plant the feet, retract the shoulder blades, control the descent to chest, press up without clanking the dumbbells together. Dumbbells before barbell: build the stabilizer strength and movement pattern first, then graduate to the bar when ready.",
          isFinisher: false
        },
        {
          id: "seated-cable-row",
          name: "Seated Cable Row",
          sets: 4,
          reps: "10-12",
          rpe: "8",
          rest: 90,
          restLabel: "90 sec",
          weightMode: "free",
          image: "seated-cable-row.png",
          video: "https://www.youtube.com/watch?v=GZbfZ033f74",
          tip: "Sit upright, pull handle to lower chest, squeeze shoulder blades for a one-count. Three-count return on every rep. Pull with the elbows, not the hands.",
          isFinisher: false
        },
        {
          id: "pull-ups",
          name: "Pull-Ups",
          sets: 3,
          reps: "6-10",
          rpe: "8",
          rest: 90,
          restLabel: "90 sec",
          weightMode: "bw",
          image: "pull-ups.png",
          video: "https://www.youtube.com/watch?v=eGo4IYlbE5g",
          tip: "Full dead hang at the bottom, chin over bar at the top. If bodyweight pull-ups aren't solid at 6+ reps yet, use the assisted pull-up machine or do lat pulldowns at the same rep scheme instead. Quality reps over ego reps.",
          isFinisher: false
        },
        {
          id: "seated-shoulder-press",
          name: "Seated Machine Shoulder Press",
          sets: 3,
          reps: "8-10",
          rpe: "8",
          rest: 75,
          restLabel: "75 sec",
          weightMode: "free",
          image: "seated-shoulder-press.png",
          video: "https://www.youtube.com/watch?v=GcY6TZxfS0k",
          tip: "Back flat against the pad. Press to near-lockout, don't fully lock the elbows. The machine's fixed path supports the spine, no compression like standing OHP. Drive through the shoulders, not the traps.",
          isFinisher: false
        },
        {
          id: "wide-lat-pulldown",
          name: "Lat Pulldown",
          sets: 3,
          reps: "10-12",
          rpe: "8-9",
          rest: 75,
          restLabel: "75 sec",
          weightMode: "free",
          image: "wide-lat-pulldown.png",
          video: "https://www.youtube.com/watch?v=CAwf7n6Luuc",
          tip: "Pull to upper chest, not behind neck. Lean back slightly. Drive elbows down toward hips. Slow negative on every rep. Complements pull-ups by hitting the lats through a different angle and adding volume after the compound work.",
          isFinisher: false
        },
        {
          id: "db-incline-press",
          name: "Dumbbell Incline Press",
          sets: 3,
          reps: "10-12",
          rpe: "8-9",
          rest: 75,
          restLabel: "75 sec",
          weightMode: "free",
          image: "db-incline-press.png",
          video: "https://www.youtube.com/watch?v=8iPEnn-ltC8",
          tip: "Set bench to 30-degree incline. Three-count descent on every rep. Squeeze at the top without clanking the dumbbells. Shifts emphasis to upper chest and front delts, filling in what flat bench doesn't hit as hard.",
          isFinisher: false
        },
        {
          id: "face-pulls",
          name: "Face Pulls",
          sets: 3,
          reps: "15",
          rpe: "8",
          rest: 60,
          restLabel: "60 sec",
          weightMode: "free",
          image: "face-pulls.png",
          video: "https://www.youtube.com/watch?v=rep-qVOkqgk",
          tip: "Cable at face height. Pull toward face with elbows high, externally rotating so hands finish beside ears. Non-negotiable shoulder health work. Rear delts and rotator cuff muscles that keep your shoulders functioning through all the pressing.",
          isFinisher: false
        },
        {
          id: "db-lateral-raise",
          name: "Dumbbell Lateral Raises",
          sets: 3,
          reps: "12-15",
          rpe: "8-9",
          rest: 60,
          restLabel: "60 sec",
          weightMode: "free",
          image: "db-lateral-raise.png",
          video: "https://www.youtube.com/watch?v=3VcKaXpzqRo",
          tip: "Slight forward lean, thumbs tilted slightly down (like pouring water). Controlled up, slow down. Don't ego-lift these. Feel the burn at rep 10, fight for 15.",
          isFinisher: false
        },
        {
          id: "tricep-pushdown",
          name: "Tricep Pushdowns",
          sets: 3,
          reps: "12-15",
          rpe: "9",
          rest: 60,
          restLabel: "60 sec",
          weightMode: "free",
          image: "tricep-pushdown.png",
          video: "https://www.youtube.com/watch?v=2-LAMcpzODU",
          tip: "Elbows pinned to the sides. Full extension at the bottom, controlled return. Don't let the elbows drift forward.",
          isFinisher: false
        },
        {
          id: "db-hammer-curls",
          name: "Dumbbell Hammer Curls",
          sets: 3,
          reps: "12",
          rpe: "9",
          rest: 60,
          restLabel: "60 sec",
          weightMode: "free",
          image: "db-hammer-curls.png",
          video: "https://www.youtube.com/watch?v=zC3nLlEvin4",
          tip: "Neutral grip (palms facing each other). Alternating or simultaneous. Controlled, no swinging. Hits brachialis and brachioradialis for arm thickness and forearm development.",
          isFinisher: false
        },
        {
          id: "push-ups",
          name: "Push-Ups",
          sets: 2,
          reps: "to failure",
          rpe: "-",
          rest: 60,
          restLabel: "60 sec",
          weightMode: "bw",
          image: "push-ups.png",
          video: "https://www.youtube.com/watch?v=vh72hbUqqfs",
          tip: "Standard push-ups, full range of motion. Body in a straight plank line, chest to near-floor, drive up. Quality reps, don't let the hips sag. When hitting 25+ reps on both sets, progress to diamond push-ups for more tricep emphasis.",
          isFinisher: true,
          finisherProgression: "Building pressing endurance and stability. Standard push-ups to diamond to decline to one-arm progressions over time."
        }
      ]
    }
  },

  // e1RM calculation using Epley formula
  // weight × (1 + reps / 30)
  calculateE1RM: function(weight, reps) {
    if (reps === 1) return weight;
    return Math.round(weight * (1 + reps / 30));
  }
};

// Make available globally
if (typeof window !== 'undefined') {
  window.FORGE_DATA = FORGE_DATA;
}
