# Background Images Setup Guide

## 📁 Image Folder Structure
Your images should be placed in the `images/` folder:

```
Invitation/
├── images/
│   ├── hero-background.jpg          (Main wedding photo - MOST IMPORTANT)
│   ├── proposal-photo.jpg           (Proposal photo - SPECIAL!)
│   ├── about-background.jpg         (Optional - couple photo)
│   ├── details-background.jpg       (Optional - venue photo)
│   ├── gallery-1.jpg               (Gallery photos)
│   ├── gallery-2.jpg
│   ├── gallery-3.jpg
│   ├── gallery-4.jpg
│   ├── gallery-5.jpg
│   └── gallery-6.jpg
├── styles/
├── scripts/
└── index.html
```

## 🎨 Background Image Locations

### 1. **Hero Section Background** (PRIORITY #1)
- **File:** `images/hero-background.jpg`
- **Best Size:** 1920x1080px or higher
- **Description:** This is your main wedding photo that visitors see first
- **Tips:** 
  - Use a beautiful couple photo
  - High resolution for crisp display
  - Consider the text overlay when choosing the photo

### 2. **Proposal Photo** (SPECIAL MOMENT!)
- **File:** `images/proposal-photo.jpg`
- **Best Size:** 800x600px or 1200x800px
- **Description:** Perfect for "The Proposal" story card
- **Best Usage Options:**
  1. Replace one of the gallery photos (recommended: `gallery-2.jpg`)
  2. Use as background for "About" section
  3. Feature in the proposal story card

### 3. **About Section Background** (Optional)
- **File:** `images/about-background.jpg`
- **Best Size:** 1920x1080px
- **Description:** Background for your love story section
- **Tips:**
  - Subtle photo that won't compete with text
  - Maybe an engagement photo or scenic location
  - **GREAT OPTION:** Use your proposal photo here!

### 4. **Details Section Background** (Optional)
- **File:** `images/details-background.jpg`
- **Best Size:** 1920x1080px
- **Description:** Background for wedding details
- **Tips:**
  - Venue photo or ceremony location
  - Wedding rings or decorations

## 🖼️ Gallery Photos
Replace the placeholder gallery images:

1. Save your photos as:
   - `images/gallery-1.jpg` (First photo in gallery)
   - `images/proposal-photo.jpg` (🌟 YOUR PROPOSAL PHOTO - 2nd position!)
   - `images/gallery-2.jpg` through `gallery-5.jpg` (Additional photos)

2. Recommended size: 800x600px each

**Special Note:** Your proposal photo is automatically set as the 2nd image in the gallery with a special heart icon placeholder!

## 💍 **PROPOSAL PHOTO - Special Options**

Your proposal photo is extra special! Here are the best ways to showcase it:

### Option 1: Gallery Feature (ALREADY SET UP!)
- **Location:** 2nd position in photo gallery
- **File:** `images/proposal-photo.jpg`
- **Special:** Gets a heart icon (♥) placeholder

### Option 2: About Section Background
- **How:** Rename your proposal photo to `about-background.jpg`
- **Effect:** Appears as background behind your love story
- **Best for:** Romantic, soft proposal photos

### Option 3: Hero Section (Bold Choice!)
- **How:** Rename your proposal photo to `hero-background.jpg`
- **Effect:** First thing visitors see!
- **Best for:** Stunning, high-quality proposal photos

### Option 4: Use Both Ways
1. Use proposal photo as `hero-background.jpg` (main background)
2. Copy the same photo as `proposal-photo.jpg` (gallery feature)
3. This showcases your special moment twice!

## 📝 How to Add Your Images

### Step 1: Add Your Photos
1. Copy your wedding photos to the `images/` folder
2. Rename them according to the guide above
3. Make sure they're in JPG format for best compatibility

### Step 2: Update Gallery (if needed)
If you want to use different names for gallery images, update the HTML in `index.html`:

```html
<!-- Find these lines in the gallery section and update src paths -->
<img src="images/your-photo-name.jpg" alt="Wedding Photo">
```

## 🎛️ CSS Controls

### Remove Background Images
To disable any background image, comment out these lines in `styles/main.css`:

```css
/* Comment out to disable background */
/* background-image: url('../images/hero-background.jpg'); */
```

### Adjust Overlay Opacity
Change the overlay transparency by modifying the alpha value:

```css
/* Darker overlay (more opaque) */
background: rgba(0, 0, 0, 0.6);

/* Lighter overlay (more transparent) */
background: rgba(0, 0, 0, 0.2);
```

### Change Background Position
```css
background-position: center;     /* Centered */
background-position: top;        /* Top of image */
background-position: bottom;     /* Bottom of image */
```

## 📏 Image Size Recommendations

| Location | Recommended Size | Format | Notes |
|----------|-----------------|--------|-------|
| Hero Background | 1920x1080px | JPG | Main photo - highest quality |
| Section Backgrounds | 1920x1080px | JPG | Can be slightly lower quality |
| Gallery Photos | 800x600px | JPG | Square crop works well too |

## 🚀 Quick Start

1. **Add your main photo:** Save your best couple photo as `images/hero-background.jpg`
2. **Refresh the website:** The background should appear immediately
3. **Add gallery photos:** Save 6 photos as `gallery-1.jpg` through `gallery-6.jpg`
4. **Optional:** Add section backgrounds for about and details sections

## ✨ Pro Tips

- **Optimize images:** Use tools like TinyPNG to reduce file sizes
- **Test on mobile:** Ensure images look good on all devices
- **Backup originals:** Keep original high-res photos separate
- **Consider WebP format:** For even better performance (rename .jpg to .webp in CSS)

Your wedding website will look amazing with your personal photos! 📸💕