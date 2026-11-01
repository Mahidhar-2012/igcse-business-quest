import { byte, lesson, mc, calc, multi, match, cloze, ord, tfd, def, exam } from '../../../maths/data/helpers.js';

// Units 5 and 6: Algorithms and programming, then logic and databases (Cambridge IGCSE Computer Science 0478, topics 7 to 10).

export const c51 = lesson('c5-algo', 'Algorithms, trace tables, searching and sorting', '0478 topic 7', [
  'Paper 2 is all about algorithms. Be able to read flowcharts and pseudocode, trace them in a table, and describe the standard searches and sorts.',
], [
  byte('Algorithms and flowcharts', [
    'An **algorithm** is a set of steps to solve a problem. **Decomposition** splits a problem into smaller parts and **abstraction** leaves out unnecessary detail.',
    'Write algorithms as **pseudocode** or as a **flowchart**: a rounded **terminator** for start and end, a **process** box, a **parallelogram** for input and output, and a **diamond** for a decision.',
    'Every decision has **two exits** (Yes and No) and every path must reach the end.',
  ], mc('Which flowchart symbol shows a question with a Yes exit and a No exit?', [
    ['A parallelogram', 'A parallelogram shows input or output.'],
    ['A rounded terminator', 'A terminator shows where the algorithm starts or ends.'],
    ['A rectangle', 'A rectangle shows a process or calculation.'],
    ['A diamond', 'Correct: a decision has two exits, Yes and No.'],
  ], 3), { fig: { svg: 'csFlowSymbols', caption: 'Flowchart symbols' } }),
  byte('Trace tables', [
    'A **trace table** records the value of each variable (and any output) as every line runs. It is used to **find errors** or **work out the output**.',
    'total ← 0; FOR i ← 1 TO 5; total ← total + i; NEXT i; OUTPUT total. The values of total are 1, 3, 6, 10, 15, so the output is **15**.',
    'Write **one row per change** and do not skip steps: examiners award marks for the values.',
  ], calc('Trace this algorithm: total ← 0; FOR i ← 1 TO 4; total ← total + i × i; NEXT i; OUTPUT total. What is output?', 30, { formula: '1 + 4 + 9 + 16', steps: ['i = 1: total = 1.', 'i = 2: total = 5.', 'i = 3: total = 14.', 'i = 4: total = 30, which is output.'] })),
  byte('Searching and sorting', [
    '**Linear search** checks each item in turn from the start until it finds the target or reaches the end. It works on **any list** but is slow for long lists.',
    '**Binary search** needs a **sorted** list. Check the **middle** item: if the target is smaller keep the lower half, otherwise the upper half. Each step **halves** the list.',
    '**Bubble sort** compares neighbouring items and swaps them if they are in the wrong order. It repeats passes until a pass makes **no swaps**.',
  ], calc('A sorted list holds 1000 items. What is the largest number of items a binary search has to inspect?', 10, { formula: '2¹⁰ = 1024', steps: ['Each inspection halves the list.', '1000 → 500 → 250 → 125 → 63 → 32 → 16 → 8 → 4 → 2 → 1 needs 10 inspections.'] })),
], [
  calc('A linear search looks for 42 in the list 7, 19, 42, 5, 30 and finds it at position 3. How many items are checked?', 3, { formula: 'check from the start', steps: ['7, then 19, then 42.', 'Three items are checked.'] }),
  calc('The list 5, 3, 8, 1 is put into ascending order with a bubble sort. How many swaps are made altogether?', 4, { formula: 'swap neighbours that are out of order', steps: ['Pass 1: 5 and 3 swap, then 8 and 1 swap: 3, 5, 1, 8.', 'Pass 2: 5 and 1 swap: 3, 1, 5, 8.', 'Pass 3: 3 and 1 swap: 1, 3, 5, 8.', 'Pass 4 makes no swaps. Total 4.'] }),
  calc('Trace this algorithm: x ← 21; WHILE x > 3; x ← x − 4; ENDWHILE; OUTPUT x. What is output?', 1, { formula: '21, 17, 13, 9, 5, 1', steps: ['x takes the values 17, 13, 9, 5, then 1.', '1 > 3 is false, so the loop stops and 1 is output.'] }),
  mc('Why must a list be sorted before a binary search is used?', [
    ['The middle item shows which half to discard', 'Correct: this only works when the items are in order.'],
    ['The first item must be the smallest', 'The order matters throughout, not only at the start.'],
    ['The list must be an array of integers', 'Binary search also works on sorted text.'],
    ['It needs the list to be as short as possible', 'Length does not matter; the order does.'],
  ], 0),
  ord('Put the steps of a binary search in order.', ['Find the middle item of the list', 'Compare it with the target', 'Discard the half that cannot hold the target', 'Repeat with the remaining half until found or empty'], 'Middle, compare, discard, repeat.'),
  def('Define decomposition.', ['Breaking a complex problem', 'into smaller, simpler parts'], 'Decomposition is breaking a complex problem into smaller parts that are easier to solve.'),
  exam('Describe how a bubble sort puts a list into ascending order.', 'Describe', ['Compares each pair of neighbouring items', 'Swaps them if they are in the wrong order', 'Repeats passes through the list', 'Stops when a pass makes no swaps'], 'Each pair of neighbouring items is compared and swapped if out of order. Passes are repeated until a whole pass makes no swaps, so the list is in order.'),
]);

export const c52 = lesson('c5-prog', 'Programming concepts', '0478 topics 8 and 9', [
  'The programming questions use pseudocode. Know the constructs, how to trace loops and how to choose test data.',
], [
  byte('Variables, constants and data types', [
    'A **variable** stores a value that can change. A **constant** stores a value that stays the same while the program runs, such as PI. Use **meaningful names**.',
    '**Data types:** **integer** (whole number), **real** (decimal), **char** (one character), **string** (text) and **Boolean** (TRUE or FALSE).',
    '**DIV** gives the whole-number part of a division and **MOD** gives the remainder: 47 DIV 5 = 9 and 47 MOD 5 = 2.',
  ], calc('What is the value of 47 MOD 5?', 2, { formula: 'the remainder when 47 is divided by 5', steps: ['47 = 9 × 5 + 2.', 'The remainder is 2.'] })),
  byte('Selection and iteration', [
    '**Selection:** IF … THEN … ELSE … ENDIF, or CASE OF. Conditions use =, <>, <, >, <=, >= with AND, OR and NOT.',
    '**Iteration:** **FOR … NEXT** repeats a known number of times. **WHILE … ENDWHILE** tests **first** and may not run at all. **REPEAT … UNTIL** tests **at the end**, so it runs **at least once**.',
    'In **nested** loops the inner statement runs outer × inner times.',
  ], calc('How many times is count ← count + 1 executed? FOR i ← 1 TO 3; FOR j ← 1 TO 4; count ← count + 1; NEXT j; NEXT i', 12, { formula: '3 × 4', steps: ['The outer loop runs 3 times.', 'Each time the inner loop runs 4 times: 3 × 4 = 12.'] })),
  byte('Arrays, strings and subroutines', [
    'An **array** holds several values of the same type under one name, found by an **index**: Scores[3]. A **2D array** has rows and columns: Grid[row, column]. Check whether indexes start at 0 or 1.',
    '**String handling:** LENGTH("Computer") = 8; SUBSTRING("Computer", 1, 3) = "Com"; UCASE and LCASE change case.',
    'A **procedure** does a task; a **function** also **returns a value**. Subroutines **avoid repeating code**, are **easier to test** and can be reused. **Parameters** pass values in.',
  ], calc('What is the value of LENGTH("Computer")?', 8, { formula: 'count the characters', steps: ['C, o, m, p, u, t, e, r.', 'There are 8 characters.'] })),
  byte('Validation, verification and test data', [
    '**Validation** checks that data is **reasonable**: range, length, type, presence, format and check digit checks. It does **not** prove the data is correct.',
    '**Verification** checks that data was **copied or entered correctly**, by double entry or by visual check.',
    '**Test data:** **normal** (should be accepted), **abnormal** (should be rejected), **extreme** (the largest and smallest accepted) and **boundary** (the edge values, one accepted and one rejected).',
  ], mc('A form accepts ages from 11 to 16 inclusive. Which value is abnormal test data?', [
    ['16', 'This is the largest accepted value, so it is extreme test data.'],
    ['13', 'This is inside the range, so it is normal test data.'],
    ['18', 'Correct: it is outside the range and should be rejected.'],
    ['12', 'This is inside the range, so it is normal test data.'],
  ], 2)),
], [
  calc('What is the value of 47 DIV 5?', 9, { formula: 'the whole-number part of 47 ÷ 5', steps: ['47 ÷ 5 = 9.4.', 'DIV gives 9.'] }),
  calc('Trace this algorithm: n ← 100; count ← 0; WHILE n > 0; n ← n DIV 2; count ← count + 1; ENDWHILE. What is the final value of count?', 7, { formula: '100, 50, 25, 12, 6, 3, 1, 0', steps: ['n becomes 50, 25, 12, 6, 3, 1, 0 in turn.', 'That is 7 passes, so count = 7.'] }),
  calc('A 2D array Grid has 5 rows and 6 columns. How many values can it store?', 30, { formula: '5 × 6', steps: ['5 × 6 = 30.'] }),
  calc('A REPEAT … UNTIL x > 5 loop starts with x = 10 and adds 1 to x in the loop body. How many times does the body run?', 1, { formula: 'the test is at the end', steps: ['The body runs once, making x = 11.', 'Then x > 5 is true, so the loop stops after one pass.'] }),
  mc('What is the difference between a function and a procedure?', [
    ['A function returns a value but a procedure does not', 'Correct: a function gives a result back to the caller.'],
    ['A procedure returns a value to its caller but a function does not','This has them the wrong way round.'],
    ['A function can only be used once in a program', 'Both can be called as many times as needed.'],
    ['A procedure can only contain a loop', 'A procedure can contain any statements.'],
  ], 0),
  multi('Select ALL the true statements about validation.', [
    ['A range check tests that a value lies between limits', 'Correct: for example age from 11 to 16.', true],
    ['It proves that the data matches the source document', 'That is verification; validation cannot prove correctness.', false],
    ['Validated data can still be wrong', 'Correct: 15 passes a range check even if the true age is 14.', true],
    ['A presence check makes sure a field is not empty', 'Correct: this is a basic validation check.', true],
  ], 'Validation tests reasonableness, not accuracy.'),
  match('Match each data type to an example value.', [['Integer', '42'], ['Real', '3.14'], ['Boolean', 'TRUE'], ['String', '"Hello"']], 'Choose the type that fits how the value will be used.'),
  tfd('A WHILE loop always runs at least once.', 'false', 'A WHILE loop tests the condition first, so it may not run at all.'),
  cloze('Fill in the gaps.', 'A ___ can change while the program runs, but a ___ keeps the same value.', ['variable', 'constant'], ['array', 'procedure'], 'Use a constant for a value such as the rate of VAT.'),
  def('Define validation.', ['A check that data is reasonable', 'and meets set rules before it is accepted'], 'Validation is an automatic check that data is reasonable and meets set rules before it is accepted.'),
  exam('Describe the difference between validation and verification.', 'Describe', ['Validation checks that the data is reasonable or follows rules', 'Verification checks that the data was entered correctly', 'Validation cannot prove that the data is correct'], 'Validation checks that data follows rules such as a range, but it cannot prove it is correct. Verification checks that data has been entered correctly, for example by typing it twice.'),
]);

export const unit5 = {
  id: 'c5', number: 5, title: 'Algorithms and Programming', short: 'Programming', emoji: '💻', color: 'indigo',
  submodules: [c51, c52],
  papers: [],
};

export const c61 = lesson('c6-logic', 'Logic gates and truth tables', '0478 topic 10', [
  'Logic questions are quick marks if you know each gate and work column by column.',
], [
  byte('Logic gates', [
    'A **logic gate** takes binary inputs and gives one output. **AND:** 1 only if **both** inputs are 1. **OR:** 1 if **either** input is 1. **NOT:** the **opposite**.',
    '**NAND** is NOT AND: 0 only if both inputs are 1. **NOR** is NOT OR: 1 only if both inputs are 0. **XOR:** 1 if the inputs are **different**.',
    'A **truth table** lists every input combination. **n inputs give 2ⁿ rows**: 2 inputs give 4 rows and 3 inputs give 8 rows.',
  ], calc('How many rows does the truth table for a circuit with three inputs have?', 8, { formula: '2³', steps: ['Each input has two values, so 2 × 2 × 2 = 8 rows.'] }), { fig: { svg: 'csLogicGates', caption: 'The six logic gates' } }),
  byte('Logic expressions', [
    'A circuit can be written as an expression: **Q = (A AND B) OR (NOT C)**. Work **inside brackets first**, then NOT, then AND, then OR.',
    'With A = 1, B = 0 and C = 0: A AND B = 0 and NOT C = 1, so Q = 0 OR 1 = **1**.',
    'To draw a circuit from a statement, turn each condition into a gate: “the alarm sounds if the system is on **and** the door is open” is an **AND** gate.',
  ], calc('Q = (A AND B) OR (NOT C). A = 1, B = 0 and C = 0. What is the value of Q?', 1, { formula: '(1 AND 0) OR (NOT 0)', steps: ['1 AND 0 = 0.', 'NOT 0 = 1.', '0 OR 1 = 1.'] })),
  byte('Completing truth tables', [
    'Work **column by column**. Add a column for each inner gate, such as X = A AND B, before the final column Q.',
    'List the inputs in **binary counting order** (00, 01, 10, 11) so that no row is missed or repeated.',
    'For Q = A XOR B the outputs for 00, 01, 10 and 11 are **0, 1, 1, 0**.',
  ], mc('In the truth table for Q = A AND (NOT B), which row gives Q = 1?', [
    ['A = 0, B = 1', 'A is 0, so A AND anything is 0.'],
    ['A = 1, B = 1', 'NOT B is 0, so the AND gives 0.'],
    ['A = 1, B = 0', 'Correct: A is 1 and NOT B is 1.'],
    ['A = 0, B = 0', 'A is 0, so the AND gives 0.'],
  ], 2)),
], [
  calc('A NAND gate has inputs A = 1 and B = 1. What is the output?', 0, { formula: 'NOT (1 AND 1)', steps: ['1 AND 1 = 1.', 'NOT 1 = 0.'] }),
  calc('A NOR gate has inputs A = 0 and B = 0. What is the output?', 1, { formula: 'NOT (0 OR 0)', steps: ['0 OR 0 = 0.', 'NOT 0 = 1.'] }),
  calc('Q = NOT (A OR B). A = 0 and B = 1. What is the value of Q?', 0, { formula: 'NOT (0 OR 1)', steps: ['0 OR 1 = 1.', 'NOT 1 = 0.'] }),
  mc('Which gate outputs 1 only when its two inputs are different?', [
    ['NOR', 'NOR outputs 1 only when both inputs are 0.'],
    ['XOR', 'Correct: exclusive OR is 1 when the inputs differ.'],
    ['NAND', 'NAND outputs 0 only when both inputs are 1.'],
    ['OR', 'OR also outputs 1 when both inputs are 1.'],
  ], 1),
  match('Match each gate to its rule.', [['AND', '1 only if both inputs are 1'], ['OR', '1 if either input is 1'], ['NOT', 'The output is the opposite of the input'], ['XOR', '1 if the inputs are different']], 'Learn the rule in words, then use it for expressions.'),
  multi('Select ALL the gates that output 1 when both inputs are 0.', [
    ['AND', 'AND needs both inputs to be 1.', false],
    ['NAND', 'Correct: NOT (0 AND 0) = 1.', true],
    ['NOR', 'Correct: NOT (0 OR 0) = 1.', true],
    ['XOR', 'The inputs are the same, so XOR gives 0.', false],
  ], 'NAND and NOR are the inverted gates.'),
  tfd('A circuit with four inputs needs a truth table with 8 rows.', 'false', 'Four inputs give 2⁴ = 16 rows.'),
  def('Define a truth table.', ['A table that lists every combination of inputs', 'and the output that each one gives'], 'A truth table lists every possible combination of inputs and the output each combination gives.'),
  exam('A burglar alarm sounds (S = 1) when the system is on (A = 1) and either the door sensor (B) or the window sensor (C) is 1. Write a logic expression for S.', 'Write', ['A is combined using an AND', 'B OR C is grouped in brackets', 'S = A AND (B OR C)'], 'S = A AND (B OR C).'),
]);

export const c62 = lesson('c6-db', 'Databases and SQL', '0478 topic 10', [
  'A database stores data in tables. SQL questions ask you to write or read a simple query on a small table.',
], [
  byte('Tables, fields and keys', [
    'A **database** is an organised collection of data. A **table** has **records** (rows) made of **fields** (columns). Each field has a **data type**: text, integer, real, Boolean or date.',
    'A **primary key** is a field whose value is **unique** for every record, such as StudentID, so each record can be identified.',
    'A **flat-file** database keeps everything in one table. A **relational** database uses linked tables, so data is not repeated.',
  ], calc('A table has 5 fields and 40 records. How many data values does it hold, not counting the field names?', 200, { formula: '5 × 40', steps: ['Each of the 40 records has 5 values.', '5 × 40 = 200.'] })),
  byte('SQL queries', [
    '**SELECT** chooses the fields, **FROM** names the table, **WHERE** sets the condition and **ORDER BY** sorts the results (ASC or DESC). SELECT * returns every field.',
    'SELECT Name, Age FROM Students WHERE Age > 14 ORDER BY Name;',
    '**SUM** adds a field and **COUNT** counts records: SELECT COUNT(*) FROM Students WHERE Age = 16;',
  ], calc('The table Students holds (Name, Age): (Ava, 14), (Ben, 16), (Cara, 15), (Dev, 16), (Eli, 14). How many records does SELECT Name FROM Students WHERE Age > 14 return?', 3, { formula: 'ages above 14', steps: ['Ben (16), Cara (15) and Dev (16) have an age above 14.', '3 records are returned.'] })),
], [
  calc('In the table Students (Ava 14, Ben 16, Cara 15, Dev 16, Eli 14), how many records does SELECT * FROM Students WHERE Age = 14 return?', 2, { formula: 'ages equal to 14', steps: ['Ava and Eli are 14.', '2 records are returned.'] }),
  calc('In the same table (ages 14, 16, 15, 16, 14), what number does SELECT SUM(Age) FROM Students return?', 75, { formula: '14 + 16 + 15 + 16 + 14', steps: ['14 + 16 = 30, plus 15 = 45, plus 16 = 61, plus 14 = 75.'] }),
  calc('In the same table, what number does SELECT COUNT(*) FROM Students WHERE Age > 15 return?', 2, { formula: 'ages above 15', steps: ['Ben and Dev are 16.', 'The count is 2.'] }),
  mc('Which SQL clause sorts the results of a query?', [
    ['WHERE', 'WHERE filters records using a condition.'],
    ['FROM', 'FROM names the table to search.'],
    ['GROUP BY', 'GROUP BY gathers records into groups; it does not sort them.'],
    ['ORDER BY', 'Correct: it sorts the results in ascending or descending order.'],
  ], 3),
  multi('Select ALL the true statements about a primary key.', [
    ['Its value is unique for every record', 'Correct: no two records share a key.', true],
    ['It can be repeated in different records', 'Repeating the value would stop it identifying a record.', false],
    ['It identifies one record in the table', 'Correct: that is its purpose.', true],
    ['It must always be a text field', 'It is often a number such as an ID.', false],
  ], 'A primary key is unique and identifies a record.'),
  tfd('A field is a row in a table.', 'false', 'A field is a column; a row is a record.'),
  match('Match each database term to its meaning.', [['Field', 'A column holding one type of data'], ['Record', 'A row holding all the data about one item'], ['Primary key', 'A field that is unique for every record'], ['Table', 'A collection of records']], 'Fields run down; records run across.'),
  cloze('Fill in the gaps.', 'The ___ clause chooses which records to return using a condition, and the ___ clause names the table.', ['WHERE', 'FROM'], ['SELECT', 'ORDER BY'], 'SELECT chooses the fields.'),
  def('Define a primary key.', ['A field in a table', 'whose value is unique for every record'], 'A primary key is a field whose value is unique for every record in a table.'),
  exam('Write an SQL query to show the Name and Age of all students older than 14, sorted by Name.', 'Write', ['SELECT Name, Age', 'FROM Students', 'WHERE Age > 14', 'ORDER BY Name'], 'SELECT Name, Age FROM Students WHERE Age > 14 ORDER BY Name;'),
]);

export const unit6 = {
  id: 'c6', number: 6, title: 'Logic and Databases', short: 'Logic', emoji: '🔌', color: 'rose',
  submodules: [c61, c62],
  papers: [],
};
