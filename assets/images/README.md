# Local Images Folder

Place your local images here to use them across the HelioLink Solutions website.

## Usage

Reference images in your HTML using a relative path from the page file:

**From root pages (e.g. `index.html`):**
```html
<img src="assets/images/your-image.jpg" alt="Description">
```

**From sub-pages (e.g. `about/index.html`, `services/index.html`, etc.):**
```html
<img src="../assets/images/your-image.jpg" alt="Description">
```

**From nested sub-pages (e.g. `news/news-one/index.html`):**
```html
<img src="../../assets/images/your-image.jpg" alt="Description">
```

## Recommended Image Types

| Usage | Suggested filenames |
|---|---|
| Hero background slides | `hero-slide-1.jpg`, `hero-slide-2.jpg`, `hero-slide-3.jpg` |
| Service card images | `service-solar.jpg`, `service-telecom.jpg`, `service-grid.jpg` |
| Team / CEO photo | `ceo-photo.jpg` |
| About page banner | `about-banner.jpg` |
| News article thumbnails | `news-1.jpg`, `news-2.jpg` |
| Client testimonial avatars | `client-1.jpg`, `client-2.jpg` |

## Replacing Placeholder URLs

Anywhere you see an `<img src="https://images.unsplash.com/...">` or a `url('https://...')` in a `style` attribute, you can replace the URL with the path to your local image.
