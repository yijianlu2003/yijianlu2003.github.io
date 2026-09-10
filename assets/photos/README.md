# Photo albums

One folder per experience entry. Drop image files in, then run `npm run build`.

| Folder      | Appears under                                        |
|-------------|------------------------------------------------------|
| `manulife`  | Manulife — Insurance & Financial Advisory Intern     |
| `tencent`   | Tencent Ads — Industry Operations Intern             |
| `jd`        | JD Retail — Headquarters Intern, Merchandising       |
| `sf`        | SF Express — Headquarters Management Trainee         |
| `campus`    | Student Science & Technology Innovation Association  |
| `aberdeen`  | Education page — album below Languages               |

Accepted formats: jpg, jpeg, png, webp, avif, gif.

Files are ordered by filename, so prefix them to control the sequence:
`01-...jpg`, `02-...jpg`, `03-...jpg`.

## Captions (optional)

Add a `captions.json` next to the images in the same folder:

```json
{
  "01-tencent-academy.jpg": { "en": "Tencent Academy, Shenzhen", "zh": "深圳腾讯学堂" },
  "02-team.jpg":             { "en": "Team offsite",              "zh": "团队活动" }
}
```

Images without an entry simply show no caption.

## Adding a new album

In `src/content/experience.js`, set `photoDir: 'my-folder'` on an entry and
create `assets/photos/my-folder/`.
