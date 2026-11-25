/* 20-stops.js - the nine stops of the Grade 3 ESL trail: what the map and the hubs know about each one.

   T.stops[i] = { n, title, world, place, badge, unit, los, status, quick, dataWorld, badgeArt, sceneArt }
     n         the stop number, 1 to 9 (T.stops[n - 1]); a Number
     title     the maths topic (the same as the pack's title; the nine topics of docs/01-brief.md)
     world     the name of the stop's world (shown on the map, the hub, the big button)
     place     the world as a sentence says it: 'the Number Factory' ("Visit ...", "Try Stop N now: ...",
               "You finished every step of ...")
     badge     the badge that all five steps win
     unit      the unit of the course, for teachers (as in Maths v2)
     los       the learning objective codes of the stop (Cambridge Primary Mathematics Stage 6)
     status    'open' (it can be opened; a stop whose pack has not arrived yet shows a "coming soon" hub) or 'soon'
     quick     true for a quick-practice stop: only its Practise games are ready. Its hub says so ("Quick practice")
     dataWorld the value of data-world on #app inside the stop ('1' to '9'): it switches the world tokens
     badgeArt  the id of the round map picture, 'badge-N' (src/art/02-art-maths.js)
     sceneArt  the id of the world scene for the hub header (until it is drawn, the hub shows the badge on
               the world's own sky and hills)

   Also here: T.OBJECTIVES (code -> skill), T.TWM (the 8 TWM characteristics), T.DOK (the 3 DOK levels) and
   T.DOK_MIX (the DOK of the 10 Mini Practice test questions, in order).

   Session 1: all nine stops are open and every pack holds only its title and blurb, so every step
   says "Coming soon". The steps arrive stop by stop (docs/03-build-plan.md). */
(function (T) {
  'use strict';

  // the Cambridge Primary Mathematics Stage 4 objectives of the test (codes and official 0096 wording, as in the
  // school's "Maths Grade 5 Stage 6 Detailed test specifications", EOS1 SY 26-27): shown with every Practise question
  // the Cambridge Primary ESL Stage 4 objectives of the EOS1 test (codes and wording of the school's public test
  // specification, Grade 3, AY 2026-2027): shown with every Practise question and on the test papers
  T.OBJECTIVES = {
    "4Ld.02": "Understand, with support, an increasing range of questions which ask for information.",
    "4Ld.04": "Understand, with little or no support, most specific information and detail of short talk.",
    "4Lm.01": "Understand, with support, most of the main points of short talk.",
    "4Lo.01": "Recognise, with little or no support, the opinions of the speaker(s) in short talk.",
    "4Ug.01": "Begin to use tag questions to seek agreement or clarify.",
    "4Ug.03": "Use imperative forms [positive and negative] of an increasing range of verbs to give a short sequence of commands and instructions.",
    "4Ug.10": "Use have [got] to/had to to express obligation and might, may, could to express possibility.",
    "4Ug.11": "Use an increasing range of adjectives and comparative and superlative adjectives [regular and irregular].",
    "4Us.01": "Use an increasing range of quantifiers (e.g. each, every, a few, few, a little, little).",
    "4Us.02": "Use a limited range of indefinite pronouns (e.g. some, any, something, nothing, anything).",
    "4Us.03": "Use connectives (e.g. when, before, after, then) to link parts of sentences.",
    "4Us.06": "Use an increasing range of verbs followed by infinitive and gerund forms.",
    "4Us.07": "Use infinitive of purpose.",
    "4Uv.03": "Use adverbs of indefinite time (e.g. yet, ever, already, always, never, hardly ever).",
    "4Uv.04": "Use comparative and superlative forms of common adverbs.",
    "4Uv.05": "Use an increasing range of countable and uncountable nouns.",
    "4Rd.01": "Understand, with little or no support, most specific information and detail in short, simple texts.",
    "4Rd.03": "Deduce meaning from context, with little or no support, in short, simple texts.",
    "4Rd.04": "Explore words with common roots and derivations, including links to words in their first language.",
    "4Rm.01": "Understand, with support, some of the main points of short, simple texts.",
    "4Rm.02": "Read, with support, an increasing range of short, simple fiction and non-fiction texts with confidence and enjoyment.",
    "4Wc.01": "Write, with support, a short sequence of instructions.",
    "4Wc.02": "Write, with support, a short sequence of simple sentences which describe people, places and objects, and routine past and present actions and events.",
    "4Wc.03": "Express, with support, opinions and feelings.",
    "4Wca.03": "Plan, write, edit and proofread a short sequence of sentences in a paragraph, with support.",
    "4Wca.04": "Use some simple grammatical structures and sentence patterns correctly, allowing for some mistakes.",
    "4Wor.02": "Link, with support, a short sequence of simple sentences using a limited range of connectives to create a paragraph.",
    "4Wor.03": "Use, with support, appropriate layout for a limited range of written genres."
  };

  // ESL has no TWM characteristics (they are a maths idea): the labels show the code, the skill and the DOK only
  T.TWM = {};

  // Depth of Knowledge (Webb), as in the public test specification. Grade 3 ESL EOS1: at least 40% DOK 1 and at least
  // 20% DOK 2 in Listening, Reading and Use of English; DOK 3 is not used. A Mini test is 5 DOK 1, then 5 DOK 2.
  T.DOK = {
    1: { name: "Recall", what: "Find or recognise what the text or the speaker says" },
    2: { name: "Skill and concept", what: "Understand a paraphrase, infer, compare, decide what someone means or thinks" },
    3: { name: "Strategic thinking", what: "Reason with evidence across a text" }
  };
  T.DOK_MIX = [1, 1, 1, 1, 1, 2, 2, 2, 2, 2];

  T.stops = [
    { n: 1, title: 'Topic words and describing words', world: 'Word Vault', place: 'the Word Vault', badge: 'Word Wizard', unit: 'Units 1 to 4', los: ['4Ug.11', '4Uv.05', '4Rd.03', '4Rd.04'], status: 'open', dataWorld: '1', badgeArt: 'badge-1', sceneArt: 'world-word-vault' },
    { n: 2, title: 'Time words, tag questions and verb patterns', world: 'Time Machine', place: 'the Time Machine', badge: 'Time Traveller', unit: 'Use of English', los: ['4Uv.03', '4Ug.01', '4Us.06', '4Us.07', '4Ug.03'], status: 'open', dataWorld: '2', badgeArt: 'badge-2', sceneArt: 'world-time-machine' },
    { n: 3, title: 'Have to, might, some, any and linking words', world: 'Grammar Toolkit', place: 'the Grammar Toolkit', badge: 'Grammar Builder', unit: 'Use of English', los: ['4Ug.10', '4Us.01', '4Us.02', '4Us.03', '4Uv.04'], status: 'open', dataWorld: '3', badgeArt: 'badge-3', sceneArt: 'world-grammar-toolkit' },
    { n: 4, title: 'Listening: pictures and a form', world: 'Listening Lounge', place: 'the Listening Lounge', badge: 'Sharp Listener', unit: 'Listening Parts 1 and 3', los: ['4Ld.04', '4Ld.02'], status: 'open', dataWorld: '4', badgeArt: 'badge-4', sceneArt: 'world-listening-lounge' },
    { n: 5, title: 'Listening: short conversations', world: 'Chat Caf\u00e9', place: 'the Chat Caf\u00e9', badge: 'Chat Champion', unit: 'Listening Part 2', los: ['4Lm.01', '4Lo.01', '4Ld.04'], status: 'open', dataWorld: '5', badgeArt: 'badge-5', sceneArt: 'world-chat-cafe' },
    { n: 6, title: 'Signs, notices and replies', world: 'Notice Board', place: 'the Notice Board', badge: 'Message Master', unit: 'Reading Parts 1 and 2', los: ['4Rd.01', '4Rm.01', '4Rd.03'], status: 'open', dataWorld: '6', badgeArt: 'badge-6', sceneArt: 'world-notice-board' },
    { n: 7, title: 'Grammar in sentences and stories', world: 'Gap Garage', place: 'the Gap Garage', badge: 'Gap Fixer', unit: 'Reading Parts 3 and 4', los: ['4Us.01', '4Us.02', '4Us.03', '4Ug.10', '4Uv.03', '4Us.07', '4Ug.01'], status: 'open', dataWorld: '7', badgeArt: 'badge-7', sceneArt: 'world-gap-garage' },
    { n: 8, title: 'Who says it? and longer texts', world: 'Reading Lighthouse', place: 'the Reading Lighthouse', badge: 'Reading Ranger', unit: 'Reading Parts 5 and 6', los: ['4Rm.01', '4Rd.01', '4Rd.03', '4Rm.02'], status: 'open', dataWorld: '8', badgeArt: 'badge-8', sceneArt: 'world-reading-lighthouse' },
    { n: 9, title: 'Describing people and places', world: 'Writing Workshop', place: 'the Writing Workshop', badge: 'Star Writer', unit: 'Writing Tasks 1 and 2', los: ['4Wc.02', '4Wc.03', '4Wca.03', '4Wca.04', '4Wor.02'], status: 'open', dataWorld: '9', badgeArt: 'badge-9', sceneArt: 'world-writing-workshop' }
  ];
})(window.T = window.T || {});

