import { byte, lesson, mc, calc, multi, match, cloze, ord, tfd, def, exam } from '../../../maths/data/helpers.js';

// Units 1 and 2: Data representation and data transmission (Cambridge IGCSE Computer Science 0478, topics 1 and 2).

export const c11 = lesson('c1-number', 'Binary, denary and hexadecimal', '0478 topic 1.1', [
  'Computers store everything as binary. Hexadecimal is a shorthand for binary that people find much easier to read and copy.',
], [
  byte('Binary and denary', [
    'Binary is **base 2**. The place values of an 8-bit number are **128, 64, 32, 16, 8, 4, 2, 1**.',
    'To convert binary to denary, add the place values that have a **1**. 10110101 = 128 + 32 + 16 + 4 + 1 = **181**.',
    'To convert denary to binary, write 1 for each place value that fits and subtract it. **200 = 11001000** (128 + 64 + 8).',
    '**n bits** store **2ⁿ** different values: 8 bits give 256 values, from 0 to 255.',
  ], calc('Convert the 8-bit binary number 01101101 to denary.', 109, { formula: '64 + 32 + 8 + 4 + 1', steps: ['The 1s are in the 64, 32, 8, 4 and 1 places.', '64 + 32 + 8 + 4 + 1 = 109.'] }), { fig: { svg: 'csPlaceValue', caption: '10110101 in denary and hexadecimal' } }),
  byte('Hexadecimal', [
    'Hexadecimal is **base 16**. Its digits are 0 to 9, then **A = 10, B = 11, C = 12, D = 13, E = 14, F = 15**.',
    '**One hex digit stands for one nibble (4 bits).** Split binary into groups of four from the right: 1101 0110 = **D6**.',
    'Hex to denary: multiply the first digit by 16 and add the second. 2F = 2 × 16 + 15 = **47**.',
  ], mc('What is the binary number 11010110 written in hexadecimal?', [
    ['6D', 'The digits are the right way round for 0110 1101, not for 1101 0110.'],
    ['C6', '1100 0110 is C6; the first nibble 1101 is D, not C.'],
    ['D6', 'Correct: 1101 = D (13) and 0110 = 6.'],
    ['D9', '1101 1001 is D9; the second nibble 0110 is 6, not 9.'],
  ], 2)),
  byte('Why hexadecimal is used', [
    'Hex is **shorter** than binary: a byte needs 2 hex digits instead of 8 bits.',
    'It is **easier to read, remember and copy**, so there are **fewer mistakes** than with long strings of 1s and 0s.',
    'It converts to and from binary easily and is used for **colour codes (#FF0000)**, **MAC addresses**, **memory addresses** and error codes.',
    'The computer still stores everything as binary; hex is only for people.',
  ], multi('Select ALL the true reasons for using hexadecimal rather than binary.', [
    ['It is shorter, so fewer digits are needed', 'Correct: one hex digit replaces four bits.', true],
    ['The processor runs hexadecimal directly', 'Processors work in binary; hex is a notation for people.', false],
    ['It is less likely to be copied wrongly', 'Correct: there are fewer digits to get wrong.', true],
    ['It is easy to change into binary', 'Correct: each hex digit converts to four bits.', true],
  ], 'Hex is for human convenience; the hardware uses binary.')),
], [
  calc('Convert the hexadecimal number 3C to denary.', 60, { formula: '3 × 16 + 12', steps: ['C = 12.', '3 × 16 + 12 = 60.'] }),
  calc('How many 1s are there in the 8-bit binary number for the denary number 200?', 3, { formula: '128 + 64 + 8', steps: ['200 = 128 + 64 + 8.', 'So the binary is 11001000, which has three 1s.'] }),
  calc('How many different values can be stored in 10 bits?', 1024, { formula: '2¹⁰', steps: ['Each extra bit doubles the number of values.', '2¹⁰ = 1024.'] }),
  match('Match each hexadecimal number to its denary value.', [['B', '11'], ['F', '15'], ['10', '16'], ['1F', '31']], 'Hex 10 means 1 × 16 + 0 = 16 and 1F = 16 + 15 = 31.'),
  cloze('Fill in the gaps.', 'One hexadecimal digit represents ___ bits, a group called a ___.', ['four', 'nibble'], ['eight', 'byte'], '4 bits make a nibble; 8 bits make a byte.'),
  tfd('The hexadecimal number 10 has the same value as the denary number 10.', 'false', 'Hex 10 is 1 × 16 + 0 = 16 in denary.'),
  def('Define hexadecimal.', ['A number system with base 16', 'using the digits 0 to 9 and the letters A to F'], 'Hexadecimal is a base-16 number system that uses the digits 0 to 9 and the letters A to F.'),
  exam('Convert the binary number 10111100 to hexadecimal. Show your working.', 'Convert', ['Splits the bits into nibbles 1011 and 1100', '1011 = B and 1100 = C', 'Answer BC'], '1011 = 11 = B and 1100 = 12 = C, so the answer is BC.'),
]);

export const c12 = lesson('c1-binops', 'Binary addition, shifts and two’s complement', '0478 topic 1.1', [
  'Processors add and shift binary numbers. You must be able to do both by hand, spot an overflow error and read negative numbers.',
], [
  byte('Binary addition', [
    'Add column by column from the right: **0 + 0 = 0**, **0 + 1 = 1**, **1 + 1 = 10** (write 0, carry 1), **1 + 1 + 1 = 11** (write 1, carry 1).',
    '01101011 + 00110110 = **10100001** (107 + 54 = 161). Check by converting to denary.',
    'Write both numbers with the **same number of bits** before adding.',
  ], calc('Add the binary numbers 00101101 and 00011011. Give the denary value of the result.', 72, { formula: '45 + 27', steps: ['00101101 = 45 and 00011011 = 27.', '45 + 27 = 72 (01001000 in binary).'] })),
  byte('Overflow', [
    'A register holds a **fixed number of bits**. If an answer needs more bits, the extra bit on the left is **lost**: this is an **overflow error**.',
    '8 bits hold values up to **255**. 10000000 + 10000000 = 256 needs 9 bits, so the stored answer would be 00000000.',
    'Overflow gives a **wrong result**, so the processor must detect it.',
  ], mc('Which addition causes an overflow error in an 8-bit register?', [
    ['11001000 + 00110111', '200 + 55 = 255, which still fits in 8 bits.'],
    ['10000000 + 10000000', 'Correct: 128 + 128 = 256, which needs 9 bits.'],
    ['01111111 + 01111111', '127 + 127 = 254, which fits.'],
    ['11110000 + 00001111', '240 + 15 = 255, which fits.'],
  ], 1)),
  byte('Logical shifts', [
    'A **logical shift** moves every bit left or right. Bits shifted out are **lost** and **0s** fill the gaps.',
    '**Left shift by n places = multiply by 2ⁿ. Right shift by n places = integer divide by 2ⁿ.**',
    '00001101 (13) shifted **3 left** = 01101000 = **104**. The same number shifted **2 right** = 00000011 = **3**.',
    'Bits lost off the left end give a **wrong answer**, like an overflow.',
  ], calc('The binary number 00001101 (denary 13) is shifted 3 places to the left. What is the denary value of the result?', 104, { formula: '13 × 2³', steps: ['Each left shift multiplies by 2.', '13 × 8 = 104 (01101000).'] })),
  byte('Two’s complement', [
    '**Two’s complement** stores negative numbers. The left-hand bit has a **negative** place value: in 8 bits the places are **−128, 64, 32, 16, 8, 4, 2, 1**.',
    '11110110 = −128 + 64 + 32 + 16 + 4 + 2 = **−10**. A number that starts with 1 is negative.',
    'To make a number negative: **flip every bit, then add 1.** +10 = 00001010, flipped = 11110101, plus 1 = 11110110.',
    'The 8-bit range is **−128 to +127**.',
  ], calc('What is the denary value of the 8-bit two’s complement number 11110110?', -10, { formula: '−128 + 64 + 32 + 16 + 4 + 2', steps: ['The left-hand bit is worth −128.', '−128 + 64 + 32 + 16 + 4 + 2 = −10.'] })),
], [
  calc('Add the binary numbers 01100100 and 00011110. Give the denary value of the result.', 130, { formula: '100 + 30', steps: ['01100100 = 100 and 00011110 = 30.', '100 + 30 = 130.'] }),
  calc('The binary number 00010110 (denary 22) is shifted 2 places to the left. What is the denary result?', 88, { formula: '22 × 4', steps: ['Two left shifts multiply by 2² = 4.', '22 × 4 = 88.'] }),
  calc('The binary number 10000000 (denary 128) is shifted 7 places to the right. What is the denary result?', 1, { formula: '128 ÷ 2⁷', steps: ['Seven right shifts divide by 128.', '128 ÷ 128 = 1.'] }),
  calc('What is the denary value of the 8-bit two’s complement number 10000000?', -128, { formula: 'the left-hand bit is worth −128', steps: ['Only the −128 place holds a 1.', 'The value is −128.'] }),
  calc('What is the largest positive denary number that 8-bit two’s complement can store?', 127, { formula: '01111111', steps: ['The left-hand bit must be 0 for a positive number.', '64 + 32 + 16 + 8 + 4 + 2 + 1 = 127.'] }),
  mc('What happens to the bits that are shifted out of the left end in a logical left shift?', [
    ['They wrap round to the right-hand end', 'That describes a circular shift, not a logical shift.'],
    ['They are lost and 0s fill the gap', 'Correct: logical shifts discard the bits and insert 0s.'],
    ['They are kept in a second register', 'A logical shift does not store the lost bits anywhere.'],
    ['They change the sign of the number', 'Sign is a feature of two’s complement, not of a logical shift.'],
  ], 1),
  def('Define overflow error.', ['The result of a calculation is too large', 'to be stored in the available number of bits'], 'An overflow error happens when the result of a calculation needs more bits than the register can hold.'),
  exam('Add the binary numbers 01101011 and 00110110. Show your working and give the denary value of the answer.', 'Add', ['Adds column by column with carries', 'Result 10100001', 'Denary value 161'], '01101011 + 00110110 = 10100001, which is 107 + 54 = 161 in denary.'),
]);

export const c13 = lesson('c1-media', 'Text, images and sound', '0478 topic 1.2', [
  'Text, pictures and sound are all stored as binary. File size depends on a few simple quantities that you can calculate.',
], [
  byte('Text', [
    'A **character set** gives every character a binary code. **ASCII** uses 7 bits for 128 characters: English letters, digits and symbols.',
    '**Unicode** uses 16 or more bits, so it holds **every language, symbols and emojis**, but files are larger.',
    'Codes run in order: if **A = 65** then B = 66 and **F = 70**; lower-case a = 97.',
  ], calc('In ASCII the capital letter A has the code 65. What is the code for the capital letter F?', 70, { formula: '65 + 5', steps: ['F is five letters after A.', '65 + 5 = 70.'] })),
  byte('Images', [
    'An image is a grid of **pixels**. Each pixel is a binary number whose length is the **colour depth** (bits per pixel).',
    '**Resolution** = pixels wide × pixels high. More pixels and greater colour depth give **better quality** but a **larger file**.',
    '**File size (bits) = width × height × colour depth.** 100 × 50 pixels at 8 bits = 40 000 bits = **5000 bytes**.',
    'A colour depth of n bits gives **2ⁿ colours**: 8 bits = 256 colours.',
  ], calc('An image is 100 pixels wide and 50 pixels high with a colour depth of 8 bits. What is its file size in bytes?', 5000, { unit: 'bytes', formula: '100 × 50 × 8 ÷ 8', steps: ['100 × 50 × 8 = 40 000 bits.', '40 000 ÷ 8 = 5000 bytes.'] }), { fig: { svg: 'csPixelGrid', caption: 'A bitmap is a grid of binary pixels' } }),
  byte('Sound', [
    'Sound is **analogue**. To store it, the wave is **sampled**: its height is measured at regular intervals and stored in binary.',
    '**Sample rate** = samples per second (Hz). **Sample resolution** = bits per sample.',
    'A higher sample rate or resolution gives a **more accurate** recording but a **larger file**.',
    '**File size (bits) = sample rate × sample resolution × length in seconds.**',
  ], calc('A sound is sampled 8000 times a second with a sample resolution of 16 bits. It lasts 5 seconds. What is the file size in bytes?', 80000, { unit: 'bytes', formula: '8000 × 16 × 5 ÷ 8', steps: ['8000 × 16 × 5 = 640 000 bits.', '640 000 ÷ 8 = 80 000 bytes.'] }), { fig: { svg: 'csSoundSample', caption: 'Sampling a sound wave' } }),
], [
  calc('An image has a colour depth of 4 bits. How many different colours can it show?', 16, { formula: '2⁴', steps: ['n bits give 2ⁿ values.', '2⁴ = 16.'] }),
  calc('A black and white image is 64 pixels wide and 32 pixels high and uses 1 bit per pixel. What is its file size in bytes?', 256, { unit: 'bytes', formula: '64 × 32 × 1 ÷ 8', steps: ['64 × 32 = 2048 bits.', '2048 ÷ 8 = 256 bytes.'] }),
  calc('A sound recording lasts 10 seconds with a sample rate of 1000 Hz and a sample resolution of 8 bits. What is the file size in bytes?', 10000, { unit: 'bytes', formula: '1000 × 8 × 10 ÷ 8', steps: ['1000 × 8 × 10 = 80 000 bits.', '80 000 ÷ 8 = 10 000 bytes.'] }),
  multi('Select ALL the changes that make a sound file larger.', [
    ['Increasing the sample rate', 'Correct: there are more samples to store.', true],
    ['Reducing the sample rate', 'Fewer samples make the file smaller.', false],
    ['Increasing the sample resolution', 'Correct: each sample uses more bits.', true],
    ['Recording for longer', 'Correct: more samples are taken.', true],
  ], 'File size = sample rate × resolution × time.'),
  match('Match each term to its meaning.', [['Pixel', 'The smallest single element of an image'], ['Colour depth', 'The number of bits used for each pixel'], ['Sample rate', 'The number of sound measurements each second'], ['Unicode', 'A character set that covers every language']], 'These four terms appear in most data-representation questions.'),
  def('Define the resolution of an image.', ['The number of pixels', 'that make up the image (width × height)'], 'The resolution is the number of pixels in the image, given as width × height.'),
  exam('State two effects of increasing the colour depth of an image.', 'State', ['More colours can be shown or better quality', 'The file size increases'], 'A greater colour depth allows more colours and so a better quality image, but each pixel uses more bits so the file is larger.'),
]);

export const c14 = lesson('c1-compress', 'Storage units and compression', '0478 topic 1.3', [
  'Compression makes files smaller. You need the storage units and the difference between lossless and lossy methods.',
], [
  byte('Storage units', [
    'The smallest unit is a **bit**. A **nibble** is 4 bits and a **byte** is 8 bits.',
    'Larger units go up in steps of **1024**: 1 kibibyte (KiB) = 1024 bytes; 1 mebibyte (MiB) = 1024 KiB; 1 gibibyte (GiB) = 1024 MiB; then tebibyte (TiB) and pebibyte (PiB).',
    'Multiply by 1024 to go **down** a unit and divide by 1024 to go **up**: 3 KiB = 3 × 1024 = **3072 bytes**.',
  ], calc('How many bytes are there in 3 KiB?', 3072, { unit: 'bytes', formula: '3 × 1024', steps: ['1 KiB = 1024 bytes.', '3 × 1024 = 3072.'] })),
  byte('Lossless and lossy compression', [
    '**Compression** makes a file smaller, so it **stores more** and **transmits faster**, using less bandwidth.',
    '**Lossless** compression keeps **all the data** and rebuilds the original exactly. It is used for text, programs and PNG images. One method is **run-length encoding**.',
    '**Lossy** compression **permanently removes** data the user is unlikely to notice. It is used for JPEG images, MP3 sound and MP4 video. The original **cannot** be rebuilt.',
  ], mc('A law firm wants to make its contract documents smaller. Which compression should it use?', [
    ['Lossless, so no text is lost', 'Correct: every character must be kept.'],
    ['Lossy, so the file is smallest', 'Removing data could change the wording of a contract.'],
    ['Lossy, as nobody will notice', 'Lost words in a contract would be noticed.'],
    ['Neither, as text cannot shrink', 'Text can be compressed with a lossless method.'],
  ], 0)),
  byte('Run-length encoding (RLE)', [
    '**RLE** replaces a run of identical items with the **count and the item**. AAAAABBBCC becomes **5A3B2C**.',
    'It works best on data with **long runs**, such as an image with big blocks of one colour. With few repeats the file can become **larger**.',
    'Decoding reverses it, so RLE is **lossless**.',
  ], calc('Run-length encoding turns AAAAABBBCC into 5A3B2C. How many characters are there in 5A3B2C?', 6, { formula: 'count the characters', steps: ['The characters are 5, A, 3, B, 2, C.', 'There are 6.'] })),
], [
  calc('How many kibibytes are there in 2 MiB?', 2048, { unit: 'KiB', formula: '2 × 1024', steps: ['1 MiB = 1024 KiB.', '2 × 1024 = 2048.'] }),
  calc('A file is 5120 bytes in size. How many KiB is this?', 5, { unit: 'KiB', formula: '5120 ÷ 1024', steps: ['Divide by 1024 to go up a unit.', '5120 ÷ 1024 = 5.'] }),
  calc('The data WWWWWWWWWWBB is compressed with run-length encoding as 10W2B. How many characters are in 10W2B?', 5, { formula: 'count the characters', steps: ['The characters are 1, 0, W, 2, B.', 'There are 5.'] }),
  multi('Select ALL the true statements about lossy compression.', [
    ['It permanently removes some data', 'Correct: the removed data is lost for good.', true],
    ['The original file can be rebuilt exactly', 'That is true only of lossless compression.', false],
    ['It is used for MP3 sound files', 'Correct: MP3 is a lossy sound format.', true],
    ['It makes photographs much smaller', 'Correct: JPEG gives large savings for photos.', true],
  ], 'Lossy trades quality for size.'),
  match('Match each format or method to its type.', [['RLE', 'A lossless method using counts of repeats'], ['JPEG', 'A lossy image format'], ['MP3', 'A lossy sound format'], ['PNG', 'A lossless image format']], 'Know one example of each type.'),
  cloze('Fill in the gaps.', 'Lossy compression ___ removes data, so the original file ___ be rebuilt.', ['permanently', 'cannot'], ['temporarily', 'can'], 'The data removed by lossy compression is gone for good.'),
  def('Define lossless compression.', ['A method that makes a file smaller', 'with no loss of data, so the original can be rebuilt'], 'Lossless compression reduces file size without losing any data, so the original can be rebuilt exactly.'),
  exam('Explain why a music streaming service uses lossy compression for its audio files.', 'Explain', ['Lossy removes data listeners are unlikely to notice', 'So the files are much smaller', 'So they stream faster or use less bandwidth and storage'], 'Lossy compression removes sound detail listeners hardly notice, which makes files much smaller, so they stream faster and use less bandwidth and storage.'),
]);

export const unit1 = {
  id: 'c1', number: 1, title: 'Data Representation', short: 'Data', emoji: '🔢', color: 'sky',
  submodules: [c11, c12, c13, c14],
  papers: [],
};

export const c21 = lesson('c2-packets', 'Packets, serial and parallel, duplex', '0478 topic 2.1', [
  'Data crosses a network in small packets. How it travels and in which direction are favourite exam topics.',
], [
  byte('Packets', [
    'Data sent over a network is split into **packets**.',
    'Each packet has a **header** (destination address, sender address, packet number), a **payload** (the data) and a **trailer** (error-check data).',
    'The **packet number** lets the receiver put the packets back in the **correct order**.',
  ], mc('Which item in the packet header lets the receiver rebuild the file in the right order?', [
    ['The sender’s address', 'This tells where the packet came from, not its position.'],
    ['The destination address', 'This tells routers where to send it, not its position.'],
    ['The packet number', 'Correct: it gives the position of the packet in the message.'],
    ['The trailer check data', 'This helps detect errors; it does not give the order.'],
  ], 2), { fig: { svg: 'csPacketBox', caption: 'A packet and packet switching' } }),
  byte('Packet switching', [
    'Each packet is sent **separately**. A **router** chooses the best route for each one, so packets of one message **may take different routes**.',
    'Packets may arrive **out of order**. The receiver **reassembles** them using the packet numbers.',
    'Packet switching makes good use of the network: a broken or busy route is simply avoided.',
  ], ord('Put the steps of packet switching in order.', ['The message is split into packets', 'Each packet is given a header with a packet number', 'Routers send each packet along a route', 'The packets arrive, perhaps out of order', 'The packets are reassembled in order'], 'Split, label, route, arrive, reassemble.')),
  byte('Serial, parallel and duplex', [
    '**Serial:** bits travel one at a time along **one wire**. It is reliable over **long distances** and cheaper. **Parallel:** several bits travel at once along **several wires**; faster over short distances, but bits can arrive **out of step** over long ones.',
    '**Simplex:** one direction only (keyboard to computer). **Half-duplex:** both directions but **not at the same time** (walkie-talkie). **Full-duplex:** both directions **at once** (telephone).',
    '**USB** is a serial standard that carries data and power. Devices are detected automatically and the plug fits one way up.',
  ], match('Match each term to its meaning.', [['Simplex', 'One direction only'], ['Half-duplex', 'Both directions, but one at a time'], ['Full-duplex', 'Both directions at the same time'], ['Serial', 'One bit at a time along one wire']], 'Duplex describes direction; serial and parallel describe how many bits at once.')),
], [
  calc('A file of 12 000 bytes is split into packets with a payload of 500 bytes each. How many packets are needed?', 24, { formula: '12 000 ÷ 500', steps: ['12 000 ÷ 500 = 24.'] }),
  calc('A message of 2300 bytes is split into packets with a payload of 500 bytes each. How many packets are needed?', 5, { formula: '2300 ÷ 500 rounded up', steps: ['2300 ÷ 500 = 4.6.', 'Round up because the last packet is only part full: 5.'] }),
  mc('Why is serial transmission preferred over long distances?', [
    ['It always sends more data per second', 'Parallel can be faster over short distances.'],
    ['Bits cannot arrive out of step', 'Correct: with one wire there is no skew between bits.'],
    ['It needs several wires', 'Serial uses one wire; that is why it is cheaper.'],
    ['It sends data in one direction only', 'Serial can be simplex, half or full duplex.'],
  ], 1),
  multi('Select ALL the true statements about packet switching.', [
    ['Packets can take different routes', 'Correct: each router picks a route for each packet.', true],
    ['All packets must follow the same route', 'Each packet is routed separately.', false],
    ['Packets may arrive out of order', 'Correct: they are reordered using packet numbers.', true],
    ['Each packet has a header', 'Correct: it holds the addresses and packet number.', true],
  ], 'Separate routing is the point of packet switching.'),
  cloze('Fill in the gaps.', 'The ___ holds the destination address and packet number, and the ___ holds part of the data.', ['header', 'payload'], ['trailer', 'router'], 'The trailer holds error-check data.'),
  def('Define a packet.', ['A small unit of data sent across a network', 'made of a header, a payload and a trailer'], 'A packet is a small block of data with a header, payload and trailer that is sent across a network.'),
  exam('Describe how a message is sent across the internet using packet switching.', 'Describe', ['The message is split into packets', 'Each packet has a header with an address and packet number', 'Packets travel by different routes through routers', 'The packets are reassembled in order at the destination'], 'The message is split into numbered packets, each with a header. Routers send each packet by a route of their choice. At the destination the packets are put back in order using the packet numbers.'),
]);

export const c22 = lesson('c2-errors', 'Detecting and fixing errors', '0478 topic 2.2', [
  'Data can be corrupted on its way. Parity, checksums, check digits, echo checks and ARQ each find errors in a different way.',
], [
  byte('Parity check', [
    'Data can be **corrupted** by interference or faults, so errors must be **detected**.',
    'A **parity bit** is added so that the number of 1s is **even** (even parity) or **odd** (odd parity). The receiver counts the 1s and an error is shown if the parity is wrong.',
    'The data 1011011 has five 1s. With **even parity** the parity bit is **1**, making six 1s.',
    'A parity check **cannot say which bit** is wrong and **misses** an error if **two bits** change.',
  ], calc('The seven data bits 1011011 are sent using even parity. What is the value of the parity bit?', 1, { formula: 'count the 1s', steps: ['1011011 has five 1s, which is odd.', 'A parity bit of 1 makes the total six, which is even.'] })),
  byte('Checksum, check digit and echo check', [
    '**Checksum:** a value calculated from the data is sent with it. The receiver calculates it again and compares. A different value means an error.',
    '**Check digit:** an extra digit calculated from the other digits (barcodes, ISBNs). It catches mistakes at **data entry**, such as a mistyped or swapped digit.',
    '**Echo check:** the receiver sends the data **back** and the sender compares it with the original. A difference may be caused by the return trip, so it can give a **false alarm**.',
  ], mc('Which method sends the received data back to the sender so that it can be compared with the original?', [
    ['Parity check', 'A parity check counts the 1s in each byte; no data is returned.'],
    ['Echo check', 'Correct: the data is echoed back for comparison.'],
    ['Checksum', 'A checksum compares calculated values, not returned data.'],
    ['Check digit', 'A check digit is added to a number for data entry checks.'],
  ], 1)),
  byte('Automatic repeat query (ARQ)', [
    '**ARQ** uses **acknowledgements** and a **timeout**. The receiver sends a **positive acknowledgement** for a good packet and a **negative acknowledgement** for a faulty one.',
    'The sender **resends** the packet if it gets a negative acknowledgement or **no reply before the timeout**.',
    'It repeats until the packet is received correctly or a set number of tries has been made.',
  ], ord('Put the steps of ARQ in order.', ['The sender sends a packet and starts a timer', 'The receiver checks the packet for errors', 'The receiver sends back an acknowledgement', 'The sender resends the packet if the acknowledgement is negative or the timer runs out'], 'Send, check, acknowledge, resend if needed.')),
], [
  tfd('A byte 11001010 arrives using odd parity. The receiver can tell that no error has occurred.', 'false', 'The byte has four 1s, which is even, so the odd parity check shows an error.'),
  calc('The seven data bits 0110100 are sent using odd parity. What is the value of the parity bit?', 0, { formula: 'count the 1s', steps: ['0110100 has three 1s, which is already odd.', 'The parity bit is 0.'] }),
  mc('A parity check passes but the data is wrong. What is the most likely cause?', [
    ['Two bits changed, so parity is unchanged', 'Correct: two changes cancel out in a parity check.'],
    ['The parity bit was left out of the byte', 'Without a parity bit the check could not be made at all.'],
    ['Parity checks cannot detect any errors', 'They detect single-bit errors.'],
    ['The data was sent using serial transmission', 'Serial transmission does not cause this.'],
  ], 0),
  multi('Select ALL the true statements about ARQ.', [
    ['A timeout triggers resending when no reply arrives', 'Correct: the sender waits a set time.', true],
    ['The sender never resends a packet', 'Resending is the whole point of ARQ.', false],
    ['A negative acknowledgement means errors were found', 'Correct: the packet must be sent again.', true],
    ['A positive acknowledgement means the packet was correct', 'Correct: the sender can move on.', true],
  ], 'Acknowledgement and timeout drive ARQ.'),
  match('Match each term to its meaning.', [['Parity bit', 'Makes the number of 1s even or odd'], ['Checksum', 'A value calculated from the data and compared'], ['Echo check', 'Data is sent back to the sender to compare'], ['Timeout', 'How long the sender waits for an acknowledgement']], 'Each term is a different part of error detection.'),
  def('Define a check digit.', ['An extra digit added to a number', 'calculated from the other digits to catch entry errors'], 'A check digit is an extra digit calculated from the other digits of a number so that mistakes made when it is entered can be detected.'),
  exam('Describe how a parity check detects errors in transmitted data.', 'Describe', ['A parity bit is added to each byte', 'The sender and receiver agree odd or even parity', 'The receiver counts the 1s and compares with the agreed parity', 'A wrong parity shows an error, so the data is sent again'], 'A parity bit is added so that each byte has an agreed even or odd number of 1s. The receiver counts the 1s and if the parity is wrong an error is reported and the data is resent.'),
]);

export const unit2 = {
  id: 'c2', number: 2, title: 'Data Transmission', short: 'Transmission', emoji: '📡', color: 'teal',
  submodules: [c21, c22],
  papers: [],
};
