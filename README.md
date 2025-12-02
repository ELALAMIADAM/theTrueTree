# Islamic Prophets Tree 🌟 شجرة الأنبياء

An interactive, visually stunning web application that displays all 25 prophets mentioned in the Quran in a beautiful tree structure, from Prophet Adam (عليه السلام) at the bottom to Prophet Muhammad ﷺ at the top.

![Islamic Prophets Tree](https://img.shields.io/badge/Angular-20.3.9-red)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)
![License](https://img.shields.io/badge/License-MIT-green)

## ✨ Features

### 🎨 Beautiful Visualization
- **Bottom-to-Top Tree Layout**: Adam at the bottom, Muhammad ﷺ at the top
- **Color-Coded Lineages**: 
  - 🟤 Brown: Adam (Father of Humanity)
  - 🟢 Green: Ishmael's lineage (Arab Prophets)
  - 🔵 Blue: Isaac's lineage (Bani Israel)
  - 🟣 Purple: Direct descendants of Noah
  - 🟡 Gold: Prophet Muhammad ﷺ (Seal of Prophets)
- **Smooth SVG Animations**: Interactive nodes with hover effects and glowing animations
- **Islamic Geometric Patterns**: Beautiful background patterns inspired by Islamic art

### 📚 Comprehensive Prophet Information
- **All 25 Prophets** mentioned in the Quran with detailed information:
  - Name (English & Arabic)
  - Era and lifespan
  - Location where they were sent
  - Major life events
  - Miracles performed
  - Quranic references
  - Educational resources (videos & books)

### 🎯 Interactive Features
- **Hover Cards**: Quick information on hover showing name, era, and location
- **Detailed Modal**: Click any prophet to see:
  - Complete biography
  - Major events in their life
  - Miracles they performed
  - Quranic verses mentioning them
  - Recommended YouTube videos
  - Book recommendations
- **YouTube Integration**: Direct search links for learning more about each prophet
- **Relationship Visualization**: See lineage connections between prophets

### 🌐 Multilingual Support
- **English & Arabic**: Toggle between languages
- **RTL Support**: Full right-to-left support for Arabic
- **Fixed Language Switcher**: Easy access from any part of the page

### 📱 Responsive Design
- Works beautifully on desktop, tablet, and mobile devices
- Touch-friendly interface
- Adaptive layouts for different screen sizes

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn
- Angular CLI

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/prophet-tree.git
cd prophet-tree
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
ng serve
```

4. Open your browser and navigate to:
```
http://localhost:4200/
```

## 🏗️ Project Structure

```
src/
├── app/
│   ├── components/
│   │   ├── tree/                      # Main tree visualization component
│   │   │   ├── tree.component.ts     # Tree logic and layout
│   │   │   ├── tree.component.html   # SVG tree markup
│   │   │   └── tree.component.css    # Beautiful styling
│   │   ├── tree-node/                # Legacy tree node (not used)
│   │   └── language-switcher/        # Language toggle component
│   ├── models/
│   │   └── prophet.model.ts          # Prophet data models
│   ├── services/
│   │   ├── prophet.service.ts        # Prophet data management
│   │   └── translation.service.ts    # i18n support
│   ├── app.ts                        # Main app component
│   ├── app.html                      # App template
│   └── app.css                       # App styles
├── styles.css                        # Global styles
└── index.html                        # HTML entry point
```

## 📊 Data Structure

### Separated Prophet Data
Instead of nested children, prophets are now stored separately with explicit relationships:

```typescript
interface Prophet {
  id: number;
  name: string;
  arabicName: string;
  era: string;
  description: string;
  majorEvents?: string[];
  miracles?: string[];
  resources?: {
    videos?: VideoResource[];
    books?: BookResource[];
    quranRefs?: string[];
  };
}

interface ProphetRelationship {
  from: number;  // Parent prophet ID
  to: number;    // Child prophet ID
  type: 'descendant' | 'contemporary' | 'lineage';
}
```

### Benefits of This Structure
- ✅ Easier to manage and update
- ✅ Can represent complex genealogies
- ✅ Better for database storage
- ✅ More flexible for future features

## 🎓 Educational Resources

Each prophet includes:
- 📺 **YouTube Videos**: Curated educational videos about their life and message
- 📚 **Book Recommendations**: Classical and modern Islamic literature
- 📖 **Quranic References**: Direct verses mentioning each prophet
- 🌍 **Historical Context**: Era, location, and tribe information

## 🎨 Customization

### Changing Colors
Edit the `getNodeColor()` method in `tree.component.ts`:

```typescript
getNodeColor(prophet: Prophet): string {
  // Customize colors for different prophets or lineages
}
```

### Adding More Prophets
Add to the `prophets` array in `prophet.service.ts`:

```typescript
{
  id: 26,
  name: 'New Prophet',
  arabicName: 'نبي جديد',
  // ... other properties
}
```

### Modifying Layout
Adjust spacing in `tree.component.ts`:

```typescript
readonly LEVEL_HEIGHT = 150;      // Vertical spacing
readonly NODE_RADIUS = 40;         // Node size
readonly HORIZONTAL_SPACING = 120; // Horizontal spacing
```

## 🔧 Technologies Used

- **Angular 20.3.9**: Modern web framework
- **TypeScript**: Type-safe development
- **SVG**: Scalable vector graphics for perfect rendering
- **RxJS**: Reactive programming for state management
- **CSS3**: Modern styling with gradients, animations, and filters

## 🌟 Features in Detail

### Tree Visualization Algorithm
- Uses BFS (Breadth-First Search) to organize prophets into levels
- Calculates optimal positioning based on screen size
- Draws curved connections between related prophets
- Highlights relationships on hover

### Performance Optimizations
- Lazy loading of modal content
- Efficient SVG rendering
- CSS transforms for smooth animations
- Event delegation for better performance

## 📖 The 25 Prophets

1. Adam (آدم) - First Prophet
2. Idris (إدريس) - Enoch
3. Noah (نوح) - Nuh
4. Hud (هود)
5. Saleh (صالح)
6. Abraham (إبراهيم) - Ibrahim
7. Lot (لوط) - Lut
8. Ishmael (إسماعيل) - Ismail
9. Isaac (إسحاق) - Ishaq
10. Jacob (يعقوب) - Yaqub
11. Joseph (يوسف) - Yusuf
12. Shuayb (شعيب)
13. Job (أيوب) - Ayyub
14. Dhul-Kifl (ذو الكفل)
15. Moses (موسى) - Musa
16. Aaron (هارون) - Harun
17. David (داود) - Dawud
18. Solomon (سليمان) - Sulaiman
19. Elijah (إلياس) - Ilyas
20. Elisha (اليسع) - Al-Yasa
21. Jonah (يونس) - Yunus
22. Zechariah (زكريا) - Zakariya
23. John (يحيى) - Yahya
24. Jesus (عيسى) - Isa
25. Muhammad (محمد) ﷺ - Final Prophet

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- Prophet information sourced from authentic Islamic texts
- Ibn Kathir's "Stories of the Prophets" (Qisas al-Anbiya)
- The Holy Quran for all Quranic references
- Islamic scholars and historians

## 📧 Contact

For questions or suggestions, please open an issue on GitHub.

## 🔮 Future Enhancements

- [ ] Timeline view (horizontal chronological layout)
- [ ] Map view showing geographical locations
- [ ] Audio recitation of Quranic verses
- [ ] More detailed biographies
- [ ] Printable prophet cards
- [ ] Search and filter functionality
- [ ] Share prophet information on social media
- [ ] Dark/Light theme toggle
- [ ] More language support (Urdu, French, Turkish, etc.)

---

Made with ❤️ for the Muslim Ummah

**In the name of Allah, the Most Gracious, the Most Merciful**
