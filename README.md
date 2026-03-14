<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

This contains everything you need to run your app locally.


## Run Locally

**Prerequisites:** Node.js

1. Install dependencies:
   `npm install`
2. Copy `.env.example` to `.env` and fill in the values (at minimum `APP_URL`).
3. Run the app:
   `npm run dev`

## Environment variables

This project uses `.env` to configure runtime settings.

- `APP_URL`: the URL where the app is hosted.

If you add any API integrations later, you can add corresponding keys to `.env` as needed.
