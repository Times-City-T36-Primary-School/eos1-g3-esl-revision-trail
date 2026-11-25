# Item security

No question, text, talk, person's name, situation or writing prompt in the trail comes from the real Grade 3 EOS1 ESL papers. This is the most important rule of the project.

## The process

1. **Analyst.** Reads the real papers and the test specification and writes `exam-style-guide-esl.md`: HOW each part asks questions (task types, counts, lengths, kinds of wrong answers, DOK mix), never WHAT it asks.
2. **Writers.** Write all content from the four writer documents only (`exam-style-guide-esl.md`, `content-format.md`, `stops-brief.md`, `learning-objectives.md`). They never open the real papers. `stops-brief.md` lists situations they must not use.
3. **Checker.** Compares every English string in `content/*.json` with the real papers (reading, listening, writing, answer key and a transcript of the real recordings) using `scripts/overlap_check.py`: runs of 6 or more identical words, shared person names, near-copy sentences. Then reads the papers and the whole trail for reused situations or writing prompts, and checks that the Summit does not repeat a topic or situation from any stop. Fixes every flag in the content JSON.

## Running the overlap check

Keep the paper texts in a private local folder that is NEVER part of this package, the app or any upload:

```
private-papers/
  overlap_check.py   (copy of scripts/overlap_check.py)
  reading.txt  listening.txt  writing.txt  answerkey.txt  listening-transcript.txt   (text of the real papers and recordings)
  names.txt          (people's names in the real papers, one per line)
```

```bash
python3 -I private-papers/overlap_check.py content/stop{1,2,3,4,5,6,7,8,9}.json content/summit.json
```

Expected result: no RUN flags and no NAME flags. NEAR flags on standard exam wording are accepted: they are format wording, not content. These are the rubric lines ("For each question, choose the correct answer / word / name.") and the Listening Part 2 question styles that `exam-style-guide-esl.md` prescribes ("You will hear X and Y talking about ...", "What do they agree about?", "What did X like most?", "What is X most interested in?").

The Summit is also checked against the stops: `python3 scripts/quality_check.py` prints shared 6-word runs (most are stock hint wording); the checker reads for shared topics and situations.

## Result of the check on 25 November 2026

| Check | Found | Action |
| --- | --- | --- |
| Runs of 6+ identical words | 13 (Stop 5, Stop 9, the Summit's Listening Part 2 lines) | all reworded; 0 left |
| Shared person names | 0 (spelled surnames in Stop 4 and the Summit also checked) | none |
| Near-copy sentences | 74 flags | 52 reworded (Stops 2, 3, 4, 5, 7, 8 and the Summit), including short dialogue lines in Listening talks; the changed recordings are made from the new scripts |
| Standard exam instructions kept | 22 flags | kept (rubric lines and prescribed Listening Part 2 question styles) |
| Reused situations or writing prompts | 11 situations or sentence frames (Stops 1, 2, 3, 6, 7 and the Summit) | situation changed, format and answer kept; no writing prompt reused |
| Summit vs stops | 16 Summit items repeated a stop's topic, answer set or sentence frame | rewritten in the Summit (Listening Parts 1 and 2, Reading Parts 1 to 5) |
| American spelling | none outside deliberate wrong answers in spelling questions | none |

## When you add content

Any new content goes through the same three roles. A writer never sees the papers. Run the overlap check and the quality check before publishing, and remake the recording of any audio script that changed.
