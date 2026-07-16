#!/bin/bash
# Broclean - Setup & Deploy Script

echo "🧹 Broclean - התקנה ו-Deploy"
echo "================================"

# Install dependencies
echo "📦 מתקין חבילות..."
npm install

# Build check
echo "🔨 בודק Build..."
npm run build

echo ""
echo "✅ הכל מוכן!"
echo ""
echo "🚀 להרצה מקומית:"
echo "   npm run dev"
echo ""
echo "📤 להעלאה ל-GitHub:"
echo "   git init"
echo "   git add ."
echo '   git commit -m "Initial commit - Broclean website"'
echo "   git remote add origin https://github.com/izhakrubin433-svg/BROCLEAN.git"
echo "   git push -u origin main"
echo ""
echo "🌐 לאחר מכן חברו ל-Vercel:"
echo "   https://vercel.com/new"
echo "   בחרו את ה-Repository ולחצו Deploy"
