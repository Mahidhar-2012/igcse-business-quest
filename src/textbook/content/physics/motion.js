// Pilot chapter: Physics, Unit 1, "Describing motion". All text, examples, questions and figures are original.
// Status: DRAFT. Written for syllabus topic 1.2 (Motion) but not yet checked line by line against the official document
// and not yet reviewed by a physics teacher. See `review` and `notCovered`.
export default {
  schema: 1,
  id: 'motion',
  unit: 1,
  unitTitle: 'Motion, forces and energy',
  title: 'Describing motion',
  subtitle: 'Speed, velocity and acceleration, and how to read their graphs',
  syllabusRef: '1.2 Motion',
  status: 'draft',
  review: { state: 'Draft. Not yet reviewed by a subject expert and not yet checked against the official syllabus document.' },
  minutes: 30,
  prerequisites: ['Metres, seconds and kilometres', 'Reading values from a graph', 'Rearranging a simple formula'],

  objectives: [
    { id: 'o1', text: 'Define speed and calculate average speed from total distance and total time, including time spent stopped.' },
    { id: 'o2', text: 'Explain the difference between speed and velocity.' },
    { id: 'o3', text: 'Read a distance–time graph: use the gradient to find speed and recognise rest, constant speed and changing speed.' },
    { id: 'o4', text: 'Define acceleration and calculate it from the change in velocity and the time taken, including slowing down.' },
    { id: 'o5', text: 'Read a speed–time graph: use the gradient to find acceleration and the area under it to find distance.' },
  ],

  glossary: [
    { term: 'speed', def: 'How far an object travels each second. It has size only. Speed = distance ÷ time.' },
    { term: 'average speed', def: 'Total distance divided by total time for a whole journey, including any time stopped.' },
    { term: 'velocity', def: 'Speed in a stated direction. It has size and direction.' },
    { term: 'scalar', def: 'A quantity with size only, such as distance, speed and time.' },
    { term: 'vector', def: 'A quantity with size and direction, such as velocity and force.' },
    { term: 'acceleration', def: 'The rate at which velocity changes: change in velocity ÷ time taken.' },
    { term: 'deceleration', def: 'Acceleration that makes an object slow down. Its value is negative when speeding up is positive.' },
    { term: 'gradient', def: 'The steepness of a graph line: the change up the side ÷ the change along the bottom.' },
  ],

  figures: {
    'dt-graph': {
      alt: 'Distance–time graph in three straight sections: a steady climb from 0 to 20 m in the first 10 s, a flat section at 20 m from 10 s to 20 s, then a steeper climb from 20 m to 50 m between 20 s and 30 s.',
      caption: 'Figure 1. A distance–time graph in three sections: A (steady speed), B (at rest) and C (faster steady speed).',
      text: 'Section A: distance rises from 0 m to 20 m over 10 s, so the gradient is 20 ÷ 10 = 2 m/s. Section B: distance stays at 20 m for 10 s, so the gradient is 0 and the object is at rest. Section C: distance rises from 20 m to 50 m over 10 s, so the gradient is 30 ÷ 10 = 3 m/s, steeper than A.',
    },
    'st-graph': {
      alt: 'Speed–time graph shaped like a trapezium: speed rises steadily from 0 to 20 m/s in 5 s, stays at 20 m/s until 15 s, then falls steadily to 0 at 20 s. The area under the line is shaded.',
      caption: 'Figure 2. A speed–time graph for a car. The shaded area under the line equals the distance travelled.',
      text: 'From 0 s to 5 s speed rises from 0 to 20 m/s (gradient +4 m/s²). From 5 s to 15 s speed stays at 20 m/s (gradient 0). From 15 s to 20 s speed falls from 20 m/s to 0 (gradient −4 m/s²). The area under the line, two triangles and a rectangle, is 50 + 200 + 50 = 300 m.',
    },
  },

  sections: [
    {
      id: 'why', title: 'Why we put numbers on movement', covers: [],
      blocks: [
        { type: 'p', text: 'A bus is “fast” and a snail is “slow”, but those words depend on who is talking. Is a cyclist fast? Compared with a walker, yes. Compared with a train, no. Physics replaces opinions with measurements that anyone can repeat: **how far** something moved, **how long** it took, and **how its movement changed**.' },
        { type: 'p', text: 'This chapter builds three ideas in order. **Speed** says how quickly distance is covered. **Velocity** adds a direction. **Acceleration** says how quickly velocity changes. Then you will learn to read two graphs that show all of this at a glance.' },
      ],
    },
    {
      id: 'speed', title: 'Speed and average speed', covers: ['o1'],
      blocks: [
        { type: 'p', text: '**Speed** tells you how much distance an object covers in each unit of time. A speed of 5 m/s means the object covers 5 metres every second. Speed has size only; it does not say which way the object is going.' },
        { type: 'eq', tex: 'speed = distance ÷ time', say: 'speed equals distance divided by time', note: 'In symbols v = s ÷ t, or s = v × t for distance, or t = s ÷ v for time. Units: m/s or km/h.' },
        { type: 'p', text: 'Real journeys are never perfectly steady. A bus speeds up, slows for corners and waits at stops. So we often use **average speed**: the total distance divided by the total time. The total time must include any time spent stopped, because the stop is part of the journey.' },
        { type: 'callout', kind: 'key', title: 'Changing units', text: 'To change km/h into m/s, divide by 3.6. To change m/s into km/h, multiply by 3.6. This works because 1 km/h = 1000 m ÷ 3600 s. Check: 72 km/h ÷ 3.6 = 20 m/s.' },
        { type: 'callout', kind: 'application', title: 'Average-speed cameras', text: 'On some roads, cameras at two points record each car’s number plate and the time it passes each one. The system never needs the car’s speed at either camera. It divides the known distance between the cameras by the time taken. If a car covers a 2.0 km section in 60 s, its average speed is 2000 m ÷ 60 s = 33 m/s, which is 120 km/h. A driver who slows down right at the cameras still cannot hide: the average over the section has already been recorded.' },
        {
          type: 'worked', title: 'Worked example 1: a journey with a stop',
          problem: 'A bus travels 12 km in 20 minutes, waits at a station for 10 minutes, then travels a further 6 km in 20 minutes. Find its average speed for the whole journey, in km/h.',
          steps: [
            { text: 'Goal: average speed = total distance ÷ total time. Find both totals first.', why: 'Average speed is defined for the whole journey, so we cannot just average the speeds of the two moving parts.' },
            { text: 'Total distance = 12 km + 6 km = 18 km.', why: 'The waiting adds no distance.' },
            { text: 'Total time = 20 + 10 + 20 = 50 minutes = 50 ÷ 60 h = 0.833 h.', why: 'The wait is included because the passenger spent that time on the journey. Converting to hours keeps the units km and h.' },
            { text: 'Average speed = 18 km ÷ 0.833 h = 21.6 km/h.', why: 'Substitute the totals into the definition.' },
          ],
          answer: 'Average speed = 21.6 km/h (about 22 km/h).',
          check: 'Without the wait, the bus covers 18 km in 40 min, which is 27 km/h. The wait lowers the average, so a value below 27 km/h makes sense. The moving parts were 36 km/h and 18 km/h; 21.6 lies between the two.',
        },
      ],
    },
    {
      id: 'distance-time', title: 'Distance–time graphs', covers: ['o3'],
      blocks: [
        { type: 'p', text: 'A distance–time graph plots **time along the bottom** and **distance up the side**. Each point tells you how far the object has travelled by that moment. The key idea is that the **gradient** (steepness) of the line is the speed: gradient = change in distance ÷ change in time, which is exactly the formula for speed.' },
        { type: 'figure', id: 'dt-graph' },
        { type: 'list', items: [
          '**Section A**: a straight sloping line means constant speed. Gradient = 20 m ÷ 10 s = 2 m/s.',
          '**Section B**: a horizontal line means the distance is not changing, so the object is **at rest**. Gradient = 0.',
          '**Section C**: a steeper straight line means a **faster** constant speed. Gradient = 30 m ÷ 10 s = 3 m/s.',
          'A line that gets steeper is a gradient that is increasing: the object is **speeding up**. A line that flattens is **slowing down**.',
        ] },
        {
          type: 'interaction', kind: 'slider', title: 'Try it: speed and gradient',
          prompt: 'Move the slider to change the speed of an object moving steadily for 10 s. Watch how the line and the numbers change.',
          min: 0, max: 10, step: 0.5, start: 2, seconds: 10,
          target: { value: 4, hint: 'Make the line reach 40 m at 10 s. Which speed does that need?', right: 'Yes. 40 m ÷ 10 s = 4 m/s. The gradient of the line is the speed.', wrong: 'Not quite. Distance = speed × time, so for 40 m in 10 s the speed must be 40 ÷ 10.' },
        },
        { type: 'callout', kind: 'misconception', title: 'The graph is not a picture of the route', text: 'A car that drives over a hill does not make the graph go over a hill. The graph shows how far the car has travelled along its path at each time. A flat section does not mean a flat road. It means the car has stopped.' },
      ],
    },
    {
      id: 'velocity', title: 'Speed and velocity', covers: ['o2'],
      blocks: [
        { type: 'p', text: 'Two cars can both travel at 20 m/s, one heading north and one heading south. They have the same **speed** but different **velocities**. Velocity is speed in a stated direction.' },
        { type: 'p', text: 'This puts quantities into two families. A **scalar** has size only: distance, speed and time are scalars. A **vector** has size and direction: velocity and force are vectors. Because velocity includes direction, it changes whenever the direction changes, even if the speed stays the same. A runner going round a circular track at a steady speed has a velocity that is always changing.' },
        { type: 'p', text: 'In this chapter most motion is in a straight line, where speed and velocity have the same size. The difference becomes important when direction changes, so keep it in mind.' },
      ],
    },
    {
      id: 'acceleration', title: 'Acceleration', covers: ['o4'],
      blocks: [
        { type: 'p', text: '**Acceleration** is how quickly velocity changes. A big acceleration means the velocity changes a lot in a short time. We find it by dividing the change in velocity by the time taken.' },
        { type: 'eq', tex: 'a = (v − u) ÷ t', say: 'acceleration equals final velocity minus initial velocity, divided by time', note: 'u is the starting velocity, v is the final velocity and t is the time taken. Units: m/s².' },
        { type: 'p', text: 'The unit m/s² is “metres per second, per second”. An acceleration of 3 m/s² means the velocity increases by 3 m/s in every second. If the object slows down, v is less than u, so a is **negative**. This is also called **deceleration**.' },
        {
          type: 'worked', title: 'Worked example 2: a train speeding up',
          problem: 'A train’s speed increases from 5.0 m/s to 25 m/s in 8.0 s. Calculate its acceleration.',
          steps: [
            { text: 'Write down what you know: u = 5.0 m/s, v = 25 m/s, t = 8.0 s. The goal is a.', why: 'Naming the quantities first stops you from putting the numbers in the wrong places.' },
            { text: 'Change in velocity = v − u = 25 − 5.0 = 20 m/s.', why: 'Acceleration depends on the change in velocity, not on the final velocity alone.' },
            { text: 'a = 20 ÷ 8.0 = 2.5 m/s².', why: 'Divide the change in velocity by the time taken.' },
          ],
          answer: 'Acceleration = 2.5 m/s².',
          check: 'Work forwards: 2.5 m/s² for 8.0 s adds 2.5 × 8.0 = 20 m/s, and 5.0 + 20 = 25 m/s. It matches the final speed.',
        },
        { type: 'callout', kind: 'misconception', title: 'Fast does not mean accelerating', text: 'A jet cruising at a steady 250 m/s has zero acceleration, because its velocity is not changing. A ball just released from rest has zero speed but is already accelerating, because its velocity is about to change. Acceleration is about change, not about how fast something is going.' },
      ],
    },
    {
      id: 'speed-time', title: 'Speed–time graphs', covers: ['o5'],
      blocks: [
        { type: 'p', text: 'A speed–time graph plots **time along the bottom** and **speed up the side**. It has two useful features. The **gradient** is the acceleration, because gradient = change in speed ÷ change in time. The **area under the line** is the distance travelled, because speed × time = distance.' },
        { type: 'figure', id: 'st-graph' },
        { type: 'list', items: [
          'A horizontal line: speed is not changing, so acceleration is zero (constant speed).',
          'A line sloping up: speed is increasing, so acceleration is positive.',
          'A line sloping down: speed is decreasing, so acceleration is negative (deceleration).',
          'A steeper slope: a larger acceleration.',
        ] },
        {
          type: 'interaction', kind: 'predict', title: 'Predict, then check',
          prompt: 'Look at Figure 2. Before calculating anything, choose the distance the car travels in the whole 20 s.',
          options: [
            { text: 'About 400 m', feedback: 'That treats the car as if it travelled at 20 m/s for all 20 s. But it was slower while speeding up and slowing down.' },
            { text: 'About 300 m', correct: true, feedback: 'Right. The shaded shape is a trapezium, a bit smaller than the 20 s × 20 m/s box.' },
            { text: 'About 200 m', feedback: 'That is only the flat middle part, 10 s at 20 m/s. The two sloping ends add distance too.' },
            { text: 'About 100 m', feedback: 'That is only the two sloping ends added together. The long steady middle is missing.' },
          ],
          reveal: ['The area splits into three easy shapes: a triangle (0.5 × 5 × 20 = 50 m), a rectangle (10 × 20 = 200 m) and a triangle (50 m).', 'Total distance = 50 + 200 + 50 = 300 m. The next worked example does this properly.'],
        },
        {
          type: 'worked', title: 'Worked example 3: reading Figure 2',
          problem: 'Use Figure 2 to find (a) the acceleration in the first 5 s, (b) the acceleration in the last 5 s, and (c) the total distance travelled.',
          steps: [
            { text: '(a) Gradient of the first section = change in speed ÷ change in time = (20 − 0) ÷ 5 = +4 m/s².', why: 'On a speed–time graph the gradient is the acceleration.' },
            { text: '(b) Last section: (0 − 20) ÷ 5 = −4 m/s². The car is decelerating at 4 m/s².', why: 'The line slopes down, so the gradient, and the acceleration, is negative.' },
            { text: '(c) Split the area: triangle 0.5 × 5 × 20 = 50 m; rectangle 10 × 20 = 200 m; triangle 0.5 × 5 × 20 = 50 m.', why: 'The area under a speed–time graph is the distance. Cutting a trapezium into triangles and a rectangle makes the area easy to find.' },
            { text: 'Total distance = 50 + 200 + 50 = 300 m.', why: 'Add the three areas.' },
          ],
          answer: '(a) +4 m/s²  (b) −4 m/s²  (c) 300 m.',
          check: 'Average speed = 300 m ÷ 20 s = 15 m/s. That is below the top speed of 20 m/s but well above zero, which fits a car that spends half its time at top speed.',
        },
      ],
    },
    {
      id: 'tell-apart', title: 'Telling the two graphs apart', covers: ['o3', 'o5'],
      blocks: [
        { type: 'p', text: 'The two graphs look alike but mean different things. The most common error in exams is to read a speed–time graph as if it were a distance–time graph. A horizontal line is the best example: on one graph it means stopped, on the other it means moving steadily.' },
        {
          type: 'interaction', kind: 'classify', title: 'Which graph is being described?',
          prompt: 'For each statement, choose the graph it is true for.',
          groups: [{ id: 'dt', label: 'Distance–time' }, { id: 'st', label: 'Speed–time' }],
          items: [
            { text: 'A horizontal line means the object is at rest.', group: 'dt', why: 'Distance is not changing, so the speed is zero.' },
            { text: 'A horizontal line means constant speed, and it may not be at rest.', group: 'st', why: 'The line shows speed itself, so a flat line means the speed is steady.' },
            { text: 'The gradient of the line gives the speed.', group: 'dt', why: 'Gradient = change in distance ÷ change in time, which is speed.' },
            { text: 'The gradient of the line gives the acceleration.', group: 'st', why: 'Gradient = change in speed ÷ change in time, which is acceleration.' },
            { text: 'The area under the line gives the distance travelled.', group: 'st', why: 'Speed × time = distance. On a distance–time graph the distance is read straight from the axis.' },
            { text: 'A straight line sloping upwards means constant speed.', group: 'dt', why: 'A constant gradient means a constant speed.' },
            { text: 'A straight line sloping upwards means constant acceleration.', group: 'st', why: 'A constant gradient of speed against time means a constant acceleration.' },
          ],
        },
      ],
    },
    {
      id: 'practice', title: 'Practice', covers: [],
      blocks: [
        { type: 'p', text: 'Try each question before you open the explanation. The wrong answers have been chosen because they are common mistakes, so read the feedback even when you are right.' },
        {
          type: 'practice',
          items: [
            { id: 'q1', objective: 'o1', kind: 'num', q: 'A runner covers 400 m in 50 s. What is the average speed in m/s?', answer: 8, tol: 0.05, unit: 'm/s',
              steps: ['speed = distance ÷ time', '400 ÷ 50 = 8.0 m/s'],
              wrong: [{ value: 0.125, feedback: 'You divided time by distance. Speed is distance ÷ time.' }, { value: 20000, feedback: 'You multiplied the two numbers. Speed is distance divided by time.' }],
              explain: 'Substitute straight into the definition: 400 m ÷ 50 s = 8.0 m/s.' },
            { id: 'q2', objective: 'o3', kind: 'mcq', q: 'On a distance–time graph, a line that slopes upward and keeps getting steeper shows an object that is:',
              options: [
                { text: 'Moving at a steady speed', feedback: 'A steady speed gives a straight line. Here the gradient keeps increasing.' },
                { text: 'Gradually slowing down', feedback: 'Slowing down would make the line flatten out, not steepen.' },
                { text: 'Gradually speeding up', correct: true, feedback: 'Right. The gradient is the speed, and the gradient is increasing.' },
                { text: 'Staying at rest for a time', feedback: 'Rest gives a horizontal line, because the distance is not changing.' },
              ], explain: 'The speed is the gradient. A steepening line has an increasing gradient, so the speed is increasing.' },
            { id: 'q3', objective: 'o4', kind: 'num', q: 'A motorbike speeds up from 4.0 m/s to 19 m/s in 5.0 s. What is its acceleration in m/s²?', answer: 3, tol: 0.05, unit: 'm/s²',
              steps: ['change in velocity = 19 − 4.0 = 15 m/s', 'a = 15 ÷ 5.0 = 3.0 m/s²'],
              wrong: [{ value: 15, feedback: '15 m/s is the change in velocity. You still need to divide by the time taken.' }, { value: 4.6, feedback: 'You added the two speeds. Acceleration uses the change, so subtract: 19 − 4.0.' }, { value: 0.33, feedback: 'You divided time by change in velocity. It should be the other way round.' }],
              explain: 'Acceleration = (final − initial) ÷ time = (19 − 4.0) ÷ 5.0 = 3.0 m/s².' },
            { id: 'q4', objective: 'o5', kind: 'mcq', q: 'A speed–time graph for a car is a horizontal line at 12 m/s. What does it show?',
              options: [
                { text: 'The car is parked and has stopped moving completely', feedback: 'At rest the speed would be 0. This line is at 12 m/s.' },
                { text: 'The car speeds up by 12 m/s during each second', feedback: '12 m/s is the speed. The acceleration is the gradient, which is zero for a flat line.' },
                { text: 'The car slows down evenly until it comes to a stop', feedback: 'Slowing down would give a line sloping downwards.' },
                { text: 'The car moves steadily, with zero acceleration', correct: true, feedback: 'Right. The speed is constant, so the gradient and the acceleration are zero.' },
              ], explain: 'On a speed–time graph a flat line means constant speed, so zero acceleration.' },
            { id: 'q5', objective: 'o2', kind: 'mcq', q: 'Two cyclists ride at 6 m/s. One goes east and the other goes west. Which statement is correct?',
              options: [
                { text: 'They have the same speed and the same velocity', feedback: 'Their directions are opposite, so their velocities are different.' },
                { text: 'They have the same speed but different velocities', correct: true, feedback: 'Right. Speed has size only; velocity includes direction.' },
                { text: 'They have different speeds but the same velocity', feedback: 'Both ride at 6 m/s, so the speeds are equal.' },
                { text: 'They have different speeds and different velocities', feedback: 'The speeds are both 6 m/s. Only the directions differ.' },
              ], explain: 'Both have a speed of 6 m/s. Velocity is speed with a direction, and east and west are different directions.' },
            { id: 'q6', objective: 'o5', kind: 'num', q: 'Transfer question. A tram starts from rest and accelerates steadily at 1.5 m/s² for 8.0 s. It then travels at constant speed for a further 10 s. What total distance does it travel in the 18 s, in metres?', answer: 168, tol: 0.5, unit: 'm',
              steps: ['speed after 8.0 s: v = 1.5 × 8.0 = 12 m/s', 'distance while accelerating = area of a triangle = 0.5 × 8.0 × 12 = 48 m', 'distance at constant speed = 12 × 10 = 120 m', 'total = 48 + 120 = 168 m'],
              wrong: [{ value: 216, feedback: 'You used 12 m/s for the whole 18 s. The tram was slower while it was speeding up.' }, { value: 120, feedback: 'That is only the constant-speed part. Add the distance covered while accelerating.' }, { value: 48, feedback: 'That is only the accelerating part. Add the distance at constant speed.' }],
              explain: 'Sketch the speed–time graph: a triangle for the first 8 s and a rectangle for the next 10 s. Their areas add to the total distance.' },
          ],
        },
      ],
    },
    {
      id: 'recall', title: 'Check your memory', covers: [],
      blocks: [
        { type: 'p', text: 'Close the chapter in your head. Try to answer each prompt from memory, then reveal the answer. Retrieving an idea from memory strengthens it far more than rereading it.' },
        { type: 'retrieval', prompts: [
          { q: 'What is the formula for speed, and what are its common units?', a: 'speed = distance ÷ time. Units: m/s or km/h.' },
          { q: 'What does the gradient of a distance–time graph tell you? What does the gradient of a speed–time graph tell you?', a: 'Distance–time gradient = speed. Speed–time gradient = acceleration.' },
          { q: 'Why must average speed include the time spent stopped?', a: 'The stop is part of the journey, so the total time includes it. Leaving it out would give a speed higher than the journey really achieved.' },
          { q: 'How do you find the distance travelled from a speed–time graph?', a: 'Find the area under the line, splitting it into triangles and rectangles if needed.' },
        ] },
      ],
    },
  ],

  summary: [
    'Speed = distance ÷ time. Average speed uses the total distance and the total time, including stops.',
    'Velocity is speed in a stated direction. Speed is a scalar; velocity is a vector.',
    'On a distance–time graph the gradient is the speed. A horizontal line means at rest.',
    'Acceleration = (final velocity − initial velocity) ÷ time, in m/s². A negative value means slowing down.',
    'On a speed–time graph the gradient is the acceleration and the area under the line is the distance. A horizontal line means constant speed.',
  ],
  lessonLinks: [{ label: 'Practise this topic in the Physics lessons: Motion', href: '#/physics' }],
  notCovered: [
    'Free fall and the acceleration due to gravity',
    'Terminal velocity',
    'Curved speed–time graphs and finding acceleration from a tangent',
    'The Extended equations for uniformly accelerated motion',
  ],
  provenance: 'Original text, examples, questions and figures written for this app. No textbook, past paper or mark scheme was copied or adapted.',
};
