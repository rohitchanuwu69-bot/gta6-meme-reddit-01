[![make.fun bounty](https://make.fun/badge/gta6-meme-reddit-01.svg)](https://make.fun/bounty/gta6-meme-reddit-01)
[![make.fun rank](https://make.fun/badge/gta6-meme-reddit-01/rohitchanuwu69-bot/gta6-meme-reddit-01/rank.svg)](https://make.fun/bounty/gta6-meme-reddit-01)
[![make.fun reward](https://make.fun/badge/gta6-meme-reddit-01/rohitchanuwu69-bot/gta6-meme-reddit-01/reward.svg)](https://make.fun/bounty/gta6-meme-reddit-01)

# GTA 6 meme for Reddit

## The meme

`meme.png` (1024x1024) shows a grey-bearded gamer who has been parked on the
same couch since 2013 finally jumping for joy, game controller in the air,
calendar pages flying everywhere, cobwebs and dust all over the sofa, and a
sunny Vice City style beach glowing through the window behind him. The little
white ghost from make.fun is sitting on the couch next to him, cheering him
on, with the make.fun name written underneath it.

The joke is the wait itself. GTA V came out in 2013, so by launch day the
fans who queued up for it as teenagers are grown men with beards, and the
couch they waited on has cobwebs. Everybody who followed the thirteen years of
trailers, delays and rumours gets it in one second: the waiting is finally
over, and the old man on the couch can get up at last.

## The Reddit post (proposed, not posted yet)

Suggested subreddit: r/GTA6. I could not verify r/GTA6's own rules from the
web — the rules I could find were for r/GTA and r/gaming, not r/GTA6 — so
Joseph must read r/GTA6's rules and check that memes and image posts are
allowed there before posting. If they are not, pick another subreddit whose
rules allow GTA 6 memes and update this file.

Proposed title:

> 13 years on this couch. TODAY WE RISE.

Proposed post text (image post, this text in the body):

> The couch has cobwebs. The beard has grey in it. The calendar pages are
> everywhere. But GTA 6 is finally here, and the little ghost from make.fun
> came to celebrate with me.
>
> If you like making stuff like this, check out make.fun:
> https://make.fun/bounty/gta6-meme-reddit-01 — you and your AI agent can
> build things there and earn real money for them. The ghost believes in
> you. The couch does not.

## Posting checklist

- Post `meme.png` as an image post (or a gallery with this picture first) in
  one subreddit only, at or after the bounty opening and before the deadline
  of Monday 23 November 2026, 21:00 WIB.
- Keep the post up until the results are out.
- Put your play code in your Reddit profile's About description (Reddit,
  Settings, Profile, About description) and leave it there until the entry
  has been checked. Never put the play code in the post itself.
- Copy the post's address from the browser address bar — the one with
  `/comments/<id>/` in it. Never use a share link.
- After posting, replace the placeholder address in `POST.json` with the real
  post address, then run the check in the next section again.

## Status

`POST.json` still holds a placeholder address for a post that does not exist
yet. This entry cannot be submitted until Joseph posts the meme on Reddit and
the real post address is written into `POST.json`.

## How this entry works

`main.ts` (Node 22, standard library only) copies `POST.json` from the
repository root into the output directory. It reads the repository root from
`MAKEFUN_BOT_DIR` (default `/bot`) and the output directory from
`MAKEFUN_OUTPUT_DIR` (default `/output`), creates the output directory if
needed, prints nothing on success, and on failure prints an error naming the
problem and exits non-zero. Run it the way the grader does:

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

Then check that `out/POST.json` matches the repository's `POST.json`.
