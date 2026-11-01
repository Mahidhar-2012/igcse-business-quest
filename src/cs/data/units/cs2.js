import { byte, lesson, mc, calc, multi, match, cloze, ord, tfd, def, exam } from '../../../maths/data/helpers.js';

// Units 3 and 4: Hardware, then software, networks and security (Cambridge IGCSE Computer Science 0478, topics 3 to 6).

export const c31 = lesson('c3-cpu', 'The CPU and the fetch–decode–execute cycle', '0478 topic 3.1', [
  'The CPU runs one instruction at a time, billions of times a second. Learn its parts, the registers and what happens in each stage.',
], [
  byte('Inside the CPU', [
    'The **ALU** (arithmetic logic unit) does calculations and logic. The **CU** (control unit) fetches, decodes and controls the flow. **Registers** are tiny, very fast stores inside the CPU.',
    'Key registers: **PC** (address of the next instruction), **MAR** (address being read or written), **MDR** (data just fetched or about to be written), **CIR** (instruction being decoded and run) and **ACC** (results of the ALU).',
    '**Buses** carry signals: the **address bus** (one way, from CPU to memory), the **data bus** (both ways) and the **control bus** (control signals).',
  ], match('Match each register to what it holds.', [['PC', 'The address of the next instruction'], ['MAR', 'The address being read or written'], ['CIR', 'The instruction being decoded'], ['ACC', 'The results of ALU calculations']], 'Fetch uses PC, MAR, MDR and CIR; the ACC holds results.')),
  byte('Fetch–decode–execute', [
    'In the **Von Neumann** model, programs and data are both held in **main memory (RAM)** and the CPU takes the instructions one at a time.',
    '**Fetch:** the address in the **PC** is copied to the **MAR**. The instruction at that address travels to the **MDR**, then to the **CIR**. The **PC** goes up by 1.',
    '**Decode:** the control unit works out what the instruction in the CIR means.',
    '**Execute:** the instruction is carried out (the **ALU** does any calculation). A result may be stored in the **ACC**. Then the cycle repeats.',
  ], ord('Put the fetch stage in the correct order.', ['The address in the PC is copied to the MAR', 'The instruction at that address is copied to the MDR', 'The instruction is copied from the MDR to the CIR', 'The PC is increased by 1'], 'PC to MAR, memory to MDR, MDR to CIR, then the PC moves on.'), { fig: { svg: 'csCpuCycle', caption: 'The fetch, decode, execute cycle' } }),
  byte('CPU performance', [
    '**Clock speed** is the number of cycles per second, in GHz. A 3 GHz CPU runs 3 billion cycles a second, so a higher clock speed means more instructions per second.',
    '**Cores:** each core runs its own instructions, so more cores can do more at once, but only if the software can use them.',
    '**Cache:** very fast memory next to the CPU that holds frequently used data and instructions. A larger cache means fewer slow trips to RAM.',
    'An **embedded system** is a computer built into a device to do one job (a washing machine or a car engine controller).',
  ], calc('A single-core CPU has a clock speed of 3 GHz and completes one instruction per clock cycle. How many billion instructions does it complete in one second?', 3, { formula: '3 GHz = 3 billion cycles a second', steps: ['One instruction per cycle.', '3 billion cycles give 3 billion instructions.'] })),
], [
  mc('Which register holds the address of the instruction that will be fetched next?', [
    ['MAR', 'The MAR holds the address being read or written right now.'],
    ['CIR', 'The CIR holds the instruction already fetched.'],
    ['PC', 'Correct: the program counter points at the next instruction.'],
    ['ACC', 'The ACC holds results from the ALU.'],
  ], 2),
  calc('A dual-core CPU runs at 2 GHz. Each core completes one instruction per clock cycle. How many billion instructions can the two cores complete in one second altogether?', 4, { formula: '2 cores × 2 billion', steps: ['Each core completes 2 billion a second.', 'Two cores: 2 × 2 = 4 billion.'] }),
  multi('Select ALL the factors that affect the performance of a CPU.', [
    ['The clock speed', 'Correct: more cycles a second means more instructions.', true],
    ['The size of the hard disk', 'Storage size does not change how fast the CPU works.', false],
    ['The number of cores', 'Correct: more cores can run more instructions at once.', true],
    ['The size of the cache', 'Correct: a larger cache avoids slower trips to RAM.', true],
  ], 'Clock speed, cores and cache all change how much the CPU can do.'),
  tfd('The control unit carries out all the arithmetic calculations in the CPU.', 'false', 'Calculations are done by the ALU; the control unit directs the cycle.'),
  cloze('Fill in the gaps.', 'The ___ bus carries data in both directions, and the ___ bus carries addresses in one direction only.', ['data', 'address'], ['control', 'clock'], 'The control bus carries control signals.'),
  def('Define an embedded system.', ['A computer system built into a device', 'designed to carry out one specific task'], 'An embedded system is a computer built into a device to carry out one specific task.'),
  exam('Describe what happens in the fetch stage of the fetch–decode–execute cycle.', 'Describe', ['The address in the PC is copied to the MAR', 'The instruction at that address in RAM is copied to the MDR and then the CIR', 'The PC is increased by 1'], 'The address in the PC is copied to the MAR. The instruction at that address is copied to the MDR and then to the CIR, and the PC is increased by 1.'),
]);

export const c32 = lesson('c3-mem', 'Memory and storage', '0478 topic 3.2', [
  'RAM and ROM hold what the CPU uses now; secondary storage keeps everything else. Compare the types by speed, capacity, cost and robustness.',
], [
  byte('RAM and ROM', [
    '**RAM** (random access memory) is the **main memory**. It holds the programs and data in use, can be read and written, and is **volatile**: it loses its contents when the power is off.',
    '**ROM** (read only memory) is **non-volatile** and is not changed in normal use. It holds the **bootstrap** (start-up) program that loads the operating system.',
    'If RAM is full the computer uses **virtual memory**: part of secondary storage acts as extra RAM, which is much **slower**.',
  ], mc('Which statement about ROM is correct?', [
    ['It is volatile and holds all the programs being run','That describes RAM, not ROM.'],
    ['It can be rewritten many times a second', 'ROM is not changed in normal use.'],
    ['It loses its contents without power', 'ROM is non-volatile and keeps its contents.'],
    ['It stores the start-up program and is non-volatile', 'Correct: the bootstrap program is held in ROM.'],
  ], 3)),
  byte('Secondary storage', [
    'Secondary storage is **non-volatile**: it keeps programs and data when the power is off.',
    '**Magnetic** (hard disk drive): **large and cheap per GiB**, but it has moving parts, so it is slower and can be damaged by knocks.',
    '**Optical** (CD, DVD, Blu-ray): a laser reads pits and lands. Discs are **cheap and portable** but hold little and are slow.',
    '**Solid state** (SSD, USB flash): **no moving parts, fast, silent, robust and low power**, but **more expensive** per GiB.',
  ], match('Match each device to its description.', [['Hard disk drive', 'Magnetic platters read by a moving head'], ['DVD', 'Optical disc read by a laser'], ['SSD', 'Flash memory with no moving parts'], ['RAM', 'Volatile main memory']], 'Know the type and one strength for each.')),
  byte('Memory hierarchy', [
    'The closer memory is to the CPU the **faster and smaller** it is: registers, cache, RAM, then secondary storage. Faster memory costs more per byte.',
    'A program is loaded from **secondary storage into RAM** before the CPU can run it.',
    'Cache, registers and RAM are **volatile**. Secondary storage is **non-volatile**.',
  ], calc('A memory card has a capacity of 2 GiB. Each photo is 3 MiB. How many whole photos can be stored?', 682, { formula: '2 × 1024 ÷ 3 rounded down', steps: ['2 GiB = 2 × 1024 = 2048 MiB.', '2048 ÷ 3 = 682.67, so 682 whole photos.'] }), { fig: { svg: 'csMemoryPyramid', caption: 'Memory gets faster and smaller towards the CPU' } }),
], [
  calc('A hard disk has a capacity of 500 GiB. How many MiB is this?', 512000, { unit: 'MiB', formula: '500 × 1024', steps: ['1 GiB = 1024 MiB.', '500 × 1024 = 512 000.'] }),
  mc('Why is an SSD a better choice than a hard disk drive for a tablet?', [
    ['It costs much less for each GiB of storage','SSDs cost more per GiB than hard disks.'],
    ['It reads data using a small laser', 'Lasers are used in optical drives, not SSDs.'],
    ['It loses data when switched off', 'That would make it volatile, which storage should not be.'],
    ['It has no moving parts, so it is robust', 'Correct: this also makes it light, silent and low power.'],
  ], 3),
  multi('Select ALL the types of memory that are volatile.', [
    ['RAM', 'Correct: RAM loses its contents when power is off.', true],
    ['ROM', 'ROM is non-volatile.', false],
    ['Cache', 'Correct: cache is volatile.', true],
    ['SSD', 'An SSD is non-volatile secondary storage.', false],
  ], 'Registers, cache and RAM are volatile.'),
  tfd('Virtual memory is faster than RAM.', 'false', 'Virtual memory uses secondary storage, which is much slower than RAM.'),
  cloze('Fill in the gaps.', 'The ___ program in ROM starts the computer and loads the ___ system.', ['bootstrap', 'operating'], ['virtual', 'file'], 'The bootstrap program is the first thing run at start-up.'),
  def('Define volatile memory.', ['Memory that loses its contents', 'when the power is switched off'], 'Volatile memory loses its contents when the power is switched off.'),
  exam('Explain why a computer slows down when it has too little RAM.', 'Explain', ['RAM becomes full so the computer uses virtual memory', 'Virtual memory uses part of secondary storage as RAM', 'Secondary storage is much slower than RAM so data is swapped slowly'], 'When RAM is full the computer uses part of secondary storage as virtual memory. Secondary storage is much slower than RAM, so moving data in and out slows everything down.'),
]);

export const c33 = lesson('c3-io', 'Input, output and sensors', '0478 topic 3.3', [
  'Input devices send data in, output devices present results and sensors let a computer measure the real world.',
], [
  byte('Input devices', [
    '**Input devices** send data **into** a computer: keyboard, mouse, touch screen, microphone, scanner, digital camera and barcode or QR scanners.',
    'A **barcode scanner** shines light on the black and white lines and reads the reflected pattern, which the computer looks up in a database.',
    'A **capacitive touch screen** senses the electrical charge of a finger and can detect **several touches** at once.',
  ], multi('Select ALL the input devices.', [
    ['Microphone', 'Correct: it sends sound into the computer.', true],
    ['Speaker', 'A speaker is an output device.', false],
    ['Barcode scanner', 'Correct: it reads the pattern of lines and sends it in.', true],
    ['Laser printer', 'A printer is an output device.', false],
  ], 'Input devices send data in; output devices send results out.')),
  byte('Output devices', [
    '**Output devices** present results: monitor, speaker, printers and actuators.',
    '**Laser printer:** a laser charges a drum, toner sticks to it and is fused by heat. It is **fast** and good for **large volumes** of text.',
    '**Inkjet printer:** sprays tiny drops of ink. It is good for **photos and small jobs**, but ink costs more per page.',
    '**3D printer:** builds a solid object **layer by layer** from a digital model, for prototypes and prostheses.',
  ], mc('A business prints thousands of pages of text each week. Which printer suits it best?', [
    ['Inkjet printer', 'Ink costs more per page and it prints more slowly.'],
    ['Laser printer', 'Correct: it is fast and cheap per page for large volumes.'],
    ['3D printer', 'A 3D printer builds objects, not pages of text.'],
    ['Barcode scanner', 'A scanner is an input device.'],
  ], 1)),
  byte('Sensors and control', [
    'A **sensor** measures a physical quantity and sends readings to a computer. An **ADC** converts the analogue reading to digital; a **DAC** converts digital to analogue for an **actuator**.',
    'Common sensors: **temperature, pressure, light, moisture, infrared, sound, pH, humidity, gas and magnetic field**.',
    'In a **greenhouse**, the microprocessor compares the temperature reading with a stored value and switches a **heater or window actuator** on or off. This repeats continuously.',
  ], ord('Put the steps of a computer-controlled greenhouse heater in order.', ['The temperature sensor measures the temperature', 'The ADC converts the reading to digital data', 'The microprocessor compares the data with the stored value', 'The microprocessor switches the heater on or off', 'The process repeats'], 'Sense, convert, compare, act, repeat.')),
], [
  mc('What converts the analogue signal from a sensor into digital data for the microprocessor?', [
    ['A router', 'A router sends packets between networks.'],
    ['A DAC', 'A DAC converts digital to analogue, for outputs such as an actuator.'],
    ['An ADC', 'Correct: an analogue to digital converter.'],
    ['An actuator', 'An actuator is an output that causes movement.'],
  ], 2),
  calc('A temperature sensor in a greenhouse takes a reading every 30 seconds. How many readings are taken in 1 hour?', 120, { formula: '3600 ÷ 30', steps: ['1 hour = 3600 seconds.', '3600 ÷ 30 = 120.'] }),
  match('Match each sensor to the system that uses it.', [['Infrared', 'A burglar alarm that detects movement'], ['Moisture', 'Automatic watering of plants'], ['Light', 'Street lamps that switch on at dusk'], ['Pressure', 'Detecting a vehicle at a crossing']], 'The sensor is chosen to match the quantity being measured.'),
  tfd('An actuator measures a physical quantity such as temperature.', 'false', 'A sensor measures; an actuator is an output that moves or switches something.'),
  cloze('Fill in the gaps.', 'A sensor produces ___ data, which an ADC converts into ___ data.', ['analogue', 'digital'], ['serial', 'encrypted'], 'Computers can only process digital data.'),
  def('Define a sensor.', ['A device that measures a physical quantity', 'and sends the readings to a computer'], 'A sensor is a device that measures a physical quantity, such as temperature, and sends the readings to a computer.'),
  exam('Describe how a computer-controlled greenhouse keeps the temperature at 20 °C.', 'Describe', ['A temperature sensor measures the temperature', 'The reading is converted to digital and sent to the microprocessor', 'The microprocessor compares it with 20 °C', 'It switches a heater or window actuator on or off and repeats continuously'], 'A temperature sensor takes readings, an ADC converts them and the microprocessor compares them with 20 °C. It switches a heater or window actuator on or off to correct the difference, and keeps repeating this.'),
]);

export const unit3 = {
  id: 'c3', number: 3, title: 'Hardware', short: 'Hardware', emoji: '🧠', color: 'violet',
  submodules: [c31, c32, c33],
  papers: [],
};

export const c41 = lesson('c4-sw', 'Operating systems, interrupts and languages', '0478 topic 4', [
  'System software runs the computer. You need the jobs of an operating system, how interrupts work and how code is translated.',
], [
  byte('Operating systems', [
    '**System software** (the operating system and utilities) runs the computer. **Application software** does jobs for the user, such as word processing.',
    'An **operating system** provides the **user interface**, **manages memory and files**, manages **peripherals** through **device drivers**, allows **multitasking**, provides **security** (user accounts and passwords) and **handles interrupts**.',
    '**Utility software** does maintenance: antivirus, backup, defragmentation and file compression.',
  ], multi('Select ALL the functions of an operating system.', [
    ['Managing files', 'Correct: it creates, names and organises files.', true],
    ['Editing photographs', 'That is application software.', false],
    ['Managing memory', 'Correct: it decides what is held in RAM.', true],
    ['Handling interrupts', 'Correct: it responds to signals from devices and programs.', true],
  ], 'The OS manages the computer so that applications can run.')),
  byte('Interrupts', [
    'An **interrupt** is a signal sent to the processor asking it to stop and deal with something urgent, such as a key press, a printer error or a timer.',
    'After each fetch–decode–execute cycle the CPU **checks for interrupts**. If one has a higher priority, it **saves the current state**, runs the **interrupt service routine (ISR)**, then **restores the state** and carries on.',
    'This lets the CPU respond quickly without constantly asking each device whether it needs attention.',
  ], ord('Put the handling of an interrupt in order.', ['An interrupt signal is sent to the processor', 'The processor finishes the current instruction', 'The current state is saved', 'The interrupt service routine is run', 'The saved state is restored and the program resumes'], 'Signal, finish, save, service, restore.')),
  byte('Languages and translators', [
    '**High-level** languages (Python, Java) use English-like statements, are **easier to read and debug** and can run on **different types of computer**. **Low-level** languages (machine code and **assembly**) are tied to one processor but give **direct control of the hardware**.',
    '**Machine code** is binary and the only thing a CPU runs. **Assembly** uses mnemonics such as LDA and ADD and needs an **assembler**.',
    'A **compiler** translates the **whole program** at once, giving a fast executable that can be run without the source code. An **interpreter** translates and runs **one line at a time**, stops at the first error and so is **easier to debug**, but runs more slowly.',
  ], match('Match each translator or language to its description.', [['Compiler', 'Translates the whole program before it runs'], ['Interpreter', 'Translates and runs one line at a time'], ['Assembler', 'Translates assembly language into machine code'], ['Machine code', 'Binary instructions the CPU runs directly']], 'Compilers and interpreters translate high-level code; assemblers translate assembly.')),
], [
  mc('A programmer wants to find the line where an error occurs as soon as the program stops. Which translator is best?', [
    ['A compiler, which reports errors at the end','A compiler reports errors after translating the whole program.'],
    ['An interpreter, which stops at the error', 'Correct: it runs line by line and stops at the first error.'],
    ['An assembler, which fixes the error', 'An assembler translates assembly code and fixes nothing.'],
    ['A utility, which removes the error', 'Utilities do maintenance and do not correct code.'],
  ], 1),
  calc('A printer interrupt has priority 2 and a keyboard interrupt has priority 5, where a higher number means a higher priority. If both arrive together, which priority number is handled first?', 5, { formula: 'highest priority first', steps: ['The processor handles the higher priority first.', 'Priority 5 is higher than 2.'] }),
  multi('Select ALL the true statements about high-level languages.', [
    ['They are easier for people to read', 'Correct: they use English-like statements.', true],
    ['The CPU runs them without translation', 'They must be translated into machine code first.', false],
    ['Programs can run on different computers', 'Correct: they are portable between processors.', true],
    ['They need a compiler or an interpreter', 'Correct: that is how they are translated.', true],
  ], 'High-level code must be translated before the CPU can run it.'),
  tfd('A compiler translates and runs a program one line at a time.', 'false', 'An interpreter works line by line; a compiler translates the whole program first.'),
  cloze('Fill in the gaps.', 'Machine code is ___ and is the only language that the ___ can run directly.', ['binary', 'CPU'], ['text', 'compiler'], 'Everything else must be translated into machine code.'),
  def('Define an interrupt.', ['A signal sent to the processor', 'asking it to stop its current task and deal with something urgent'], 'An interrupt is a signal sent to the processor asking it to stop its current task and deal with something urgent.'),
  exam('Describe two differences between a compiler and an interpreter.', 'Describe', ['A compiler translates the whole program at once, an interpreter translates one line at a time', 'A compiled program runs faster and does not need the source code', 'An interpreter stops at the first error so it is easier to debug'], 'A compiler translates the whole program at once and the compiled file runs faster without the source code. An interpreter translates line by line and stops at the first error, which makes debugging easier.'),
]);

export const c42 = lesson('c4-net', 'Networks and the internet', '0478 topic 2.3 and 5', [
  'Networks connect devices. You need the network types, the hardware, how addresses work and how the web differs from the internet.',
], [
  byte('Network types and hardware', [
    'A **LAN** covers a small area, such as one building, and is owned by one organisation. A **WAN** covers a large area, such as cities or countries. The **internet** is the largest WAN.',
    'A **NIC** connects a device to a network. A **switch** sends data only to the intended device. A **router** joins networks and sends packets by the best route. A **WAP** gives Wi-Fi access.',
    'In a **star** network every device has its own cable to a central switch. A broken cable affects one device only, but if the switch fails the whole network fails.',
  ], mc('In a star network, what happens when one device’s cable breaks?', [
    ['The whole network stops working', 'Each device has its own cable, so the rest keep working.'],
    ['Only that device loses its connection', 'Correct: the other cables are not affected.'],
    ['The switch sends data by another route', 'A switch cannot reroute round a missing cable to the device.'],
    ['Every device slows down slightly', 'Data on the other cables is not shared with the broken one.'],
  ], 1), { fig: { svg: 'csStarNetwork', caption: 'A star network' } }),
  byte('MAC addresses, IP addresses and DNS', [
    'A **MAC address** identifies the **network card**. It is set by the manufacturer and normally stays the same. It is written in hex, such as 3C:52:82:1F:A0:B4.',
    'An **IP address** identifies a device **on a network** and can change. **IPv4** has four numbers from 0 to 255, such as 192.168.1.10. **IPv6** is longer and written in hex because IPv4 addresses are running out.',
    'The **DNS** (domain name system) **converts a domain name** such as www.example.com into an **IP address**.',
  ], calc('An IPv4 address is written as four numbers separated by dots. What is the largest value each number can have?', 255, { formula: '8 bits per number', steps: ['Each number is stored in 8 bits.', 'The largest 8-bit value is 255.'] })),
  byte('The internet, the web and the cloud', [
    'The **internet** is the global network of networks. The **World Wide Web** is the collection of web pages that is carried on it, viewed with a **browser** using **HTTP or HTTPS**.',
    'A **web server** stores a website. The browser sends a request and the server sends back the page.',
    '**Cloud storage** keeps files on remote servers. You can reach them **from anywhere** and add storage easily, but you need an **internet connection** and rely on the **provider’s security**.',
  ], mc('What is the difference between the internet and the World Wide Web?', [
    ['The internet is wireless and the web is wired', 'Both can use wired or wireless connections.'],
    ['They are two names for the same thing', 'The web is only one service that runs on the internet.'],
    ['The internet is the network; the web is pages on it', 'Correct: the web runs on top of the internet.'],
    ['The web is the network; the internet is the pages on it','This has the two the wrong way round.'],
  ], 2)),
], [
  calc('An IPv4 address is made of four numbers, each stored in 8 bits. How many bits does an IPv4 address use?', 32, { unit: 'bits', formula: '4 × 8', steps: ['4 numbers × 8 bits = 32 bits.'] }),
  mc('A school has 300 computers in one building, all joined by switches. What type of network is this?', [
    ['A WAN', 'A WAN covers a large area such as a country.'],
    ['The internet', 'The internet is the global network of networks.'],
    ['A cloud server', 'Cloud servers are remote machines reached over the internet.'],
    ['A LAN', 'Correct: it covers one building and is owned by one organisation.'],
  ], 3),
  multi('Select ALL the true statements about a router.', [
    ['It connects different networks together', 'Correct: routers join networks.', true],
    ['It stores the pages of a website', 'A web server does that.', false],
    ['It sends packets along the best route', 'Correct: this is its main job.', true],
    ['It can connect a LAN to the internet', 'Correct: a home router does exactly this.', true],
  ], 'A router joins networks and routes packets.'),
  match('Match each term to its meaning.', [['MAC address', 'Identifies the network card, set by the maker'], ['IP address', 'Identifies a device on a network and can change'], ['DNS', 'Converts a domain name into an IP address'], ['NIC', 'Connects a device to a network']], 'MAC is for the hardware; IP is for the network position.'),
  tfd('A MAC address changes each time a device joins a different network.', 'false', 'The MAC address belongs to the network card; the IP address is the one that changes.'),
  def('Define a WAN.', ['A network that covers a large geographical area', 'such as a city or country'], 'A WAN is a wide area network that covers a large geographical area, such as a city or country.'),
  exam('Describe how a DNS server helps a user to visit a website.', 'Describe', ['The user enters a domain name or URL', 'The DNS server finds the matching IP address and returns it', 'The browser uses the IP address to contact the web server'], 'The user types a domain name. The DNS server looks it up and returns the IP address, which the browser uses to contact the web server.'),
]);

export const c43 = lesson('c4-sec', 'Security threats and protection', '0478 topic 6', [
  'Know the attacks by name and how each is stopped. Questions ask you to describe a threat and a method that defeats it.',
], [
  byte('Threats', [
    '**Malware** harms a computer: a **virus** attaches to files and copies itself, a **worm** spreads by itself over a network, a **trojan** pretends to be useful, **spyware** records activity and **ransomware** locks files until money is paid.',
    '**Phishing:** fake emails trick users into giving personal details. **Pharming:** malicious code sends users to a **fake website** even when they type the right address.',
    '**Brute-force attack:** tries every possible password. **DDoS:** many computers flood a server with requests so it cannot respond. **Data interception** reads data while it travels.',
  ], match('Match each threat to its description.', [['Phishing', 'Fake emails that trick users into giving details'], ['Pharming', 'Code that redirects users to a fake website'], ['DDoS', 'Flooding a server with requests'], ['Ransomware', 'Locks files until money is paid']], 'Phishing needs the user to act; pharming does not.')),
  byte('Protection', [
    'A **firewall** monitors traffic between a network and the internet and **blocks** anything that breaks its rules. **Anti-malware** scans for and removes malware.',
    '**Strong passwords** are long and mixed. **Two-factor authentication** needs a password plus a second proof, such as a code sent to a phone. **Biometrics** (fingerprint, face) are hard to copy but can fail and cost more.',
    '**Automatic updates** patch weaknesses, **access levels** limit who can see what, and **backups** allow recovery.',
  ], multi('Select ALL the actions that help to protect an account from a brute-force attack.', [
    ['Using a long, mixed password', 'Correct: it takes far longer to guess.', true],
    ['Using the same short password everywhere', 'A short password is quick to guess and reuse spreads the risk.', false],
    ['Using two-factor authentication', 'Correct: a guessed password alone is not enough.', true],
    ['Limiting the number of login attempts', 'Correct: this stops endless guessing.', true],
  ], 'Make guessing slow, limited or insufficient.')),
  byte('Encryption', [
    '**Encryption** scrambles **plaintext** into **ciphertext** using a key. It does not stop data being intercepted, but it makes it unreadable.',
    '**Symmetric:** the **same key** encrypts and decrypts, so the key must be shared securely. **Asymmetric:** a **public key** encrypts and a different **private key** decrypts, so the public key can be shared openly.',
    '**HTTPS** uses **TLS** to encrypt data between a browser and a website. The padlock shows that it is in use.',
  ], mc('In asymmetric encryption, which key decrypts a message that was encrypted with the public key?', [
    ['The same public key', 'The public key only encrypts; it cannot decrypt.'],
    ['A second, different public key','There is a single public key for each pair.'],
    ['The matching private key', 'Correct: only the owner holds the private key.'],
    ['The session password', 'A password is not part of the key pair.'],
  ], 2)),
], [
  calc('A PIN uses only the digits 0 to 9 and is 4 digits long. How many different PINs are possible?', 10000, { formula: '10⁴', steps: ['Each of the 4 digits has 10 choices.', '10 × 10 × 10 × 10 = 10 000.'] }),
  calc('A brute-force program tries 500 PINs every second. How many seconds will it take to try all 10 000 four-digit PINs?', 20, { unit: 's', formula: '10 000 ÷ 500', steps: ['10 000 ÷ 500 = 20.'] }),
  mc('An email says your bank account is locked and asks you to click a link and type your password. Which attack is this?', [
    ['Pharming', 'Pharming redirects you without any email being needed.'],
    ['Phishing', 'Correct: a fake email tricks you into giving details.'],
    ['A DDoS attack', 'A DDoS floods a server; it does not ask users for details.'],
    ['A brute-force attack', 'Brute force guesses passwords by trying many.'],
  ], 1),
  multi('Select ALL the true statements about firewalls.', [
    ['They monitor incoming and outgoing traffic', 'Correct: that is how they apply their rules.', true],
    ['They remove viruses already on the computer', 'Anti-malware software does that.', false],
    ['They can block traffic that breaks the rules', 'Correct: this is the main job.', true],
    ['They can be hardware or software', 'Correct: both types exist.', true],
  ], 'A firewall filters traffic; it does not clean files.'),
  tfd('Encryption stops data from being intercepted.', 'false', 'Encrypted data can still be intercepted, but it cannot be read without the key.'),
  cloze('Fill in the gaps.', 'Readable data is called ___ and after encryption it becomes ___.', ['plaintext', 'ciphertext'], ['hash', 'binary'], 'The key turns plaintext into ciphertext and back.'),
  def('Define phishing.', ['Fake emails or messages', 'that trick users into giving away personal details'], 'Phishing is the use of fake emails or messages that trick users into giving away personal details.'),
  exam('Explain how two-factor authentication improves the security of an account.', 'Explain', ['It needs two different pieces of evidence, such as a password and a code', 'A stolen or guessed password is not enough on its own', 'The code goes to something only the user has, such as a phone'], 'Two-factor authentication needs a password and a second proof, such as a code sent to the user’s phone. A criminal who steals the password still cannot log in without the phone.'),
]);

export const c44 = lesson('c4-ai', 'Automation, AI and ethics', '0478 topic 6', [
  'Automated systems and AI bring benefits and problems. Questions ask for both sides and for examples of legal and ethical issues.',
], [
  byte('Automated systems and AI', [
    'An **automated system** uses sensors, a microprocessor and actuators to work with little human input: robots, traffic lights and self-driving cars.',
    '**Advantages:** works **all day**, gives consistent quality and is safe in dangerous places. **Disadvantages:** **high set-up cost**, **job losses** and it **cannot cope** with unexpected events.',
    '**Artificial intelligence (AI)** is a machine that **learns and adapts**. It has a **knowledge base** of data, **rules** and the ability to **reason** and improve from results (**machine learning**).',
  ], mc('Which feature separates an AI system from a simple automated system?', [
    ['It uses sensors and actuators to act on readings','Simple automated systems use sensors too.'],
    ['It learns from data to improve decisions', 'Correct: learning from results is what makes it AI.'],
    ['It works without any power supply', 'Every computer system needs power.'],
    ['It needs a human to approve each task', 'That would make it less automatic, not more intelligent.'],
  ], 1)),
  byte('Ethics and the law', [
    '**Copyright** law stops people copying or sharing software and media without permission. **Licences:** **commercial** software must be bought, **shareware** is free to try, **freeware** is free but the code stays private, **open source** lets users see and change the code.',
    '**Privacy:** personal data must be stored securely and used only for the stated purpose. **Plagiarism** is passing off someone else’s work as your own.',
    '**Ethical issues** include **bias** in AI, **job losses**, surveillance and who is **responsible** when an automated car crashes. Old devices also create **e-waste**.',
  ], multi('Select ALL the examples of unethical or illegal use of software.', [
    ['Copying a commercial program for friends', 'Correct: this breaks copyright law.', true],
    ['Using open-source software within its licence', 'This is permitted and legal.', false],
    ['Handing in someone else’s code as your own', 'Correct: this is plagiarism.', true],
    ['Selling a copy of a program you do not own', 'Correct: this is illegal distribution.', true],
  ], 'Legal use follows the licence; passing work off as your own is plagiarism.')),
], [
  mc('Which is a disadvantage of automating a car factory?', [
    ['The cars become less consistent', 'Machines repeat tasks to the same standard.'],
    ['Production must stop at night', 'Automated lines can run all day and night.'],
    ['The set-up is costly and jobs are lost', 'Correct: both are real drawbacks.'],
    ['It cannot be used in any dangerous place','Robots are often used because the work is dangerous.'],
  ], 2),
  calc('A robot welds 12 car frames every hour. How many frames does it weld in 24 hours?', 288, { formula: '12 × 24', steps: ['12 × 24 = 288.'] }),
  multi('Select ALL the parts of an AI system.', [
    ['A knowledge base of data', 'Correct: the data the system uses.', true],
    ['A human making every decision', 'AI decides using rules and what it has learned.', false],
    ['A set of rules for decisions', 'Correct: rules guide the reasoning.', true],
    ['The ability to learn from results', 'Correct: this is machine learning.', true],
  ], 'Data, rules and learning make up AI.'),
  tfd('An open-source licence allows users to see and edit the source code.', 'true', 'That is the defining feature of open-source software.'),
  match('Match each licence type to its meaning.', [['Freeware', 'Free to use but the code is not shared'], ['Shareware', 'Free trial before payment is needed'], ['Open source', 'The code can be viewed and changed'], ['Commercial', 'Must be bought to use legally']], 'The licence tells you what you may do with the software.'),
  def('Define artificial intelligence.', ['A machine or program that imitates human intelligence', 'by learning from data and making decisions'], 'Artificial intelligence is a machine or program that imitates human intelligence by learning from data and making decisions.'),
  exam('Discuss one advantage and one disadvantage of using robots in a factory.', 'Discuss', ['Advantage: works continuously or gives consistent quality', 'Disadvantage: high set-up cost or job losses', 'Gives a reason that links to the factory'], 'Robots can work all day with the same quality, so output rises. However they cost a lot to buy and install and may replace workers.'),
]);

export const unit4 = {
  id: 'c4', number: 4, title: 'Software, Networks and Security', short: 'Software', emoji: '🔐', color: 'amber',
  submodules: [c41, c42, c43, c44],
  papers: [],
};
