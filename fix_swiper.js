const fs = require('fs');
const path = require('path');

function walk(dir, callback) {
  fs.readdirSync(dir).forEach(file => {
    const filepath = path.join(dir, file);
    if (fs.statSync(filepath).isDirectory()) {
      walk(filepath, callback);
    } else {
      callback(filepath);
    }
  });
}

walk(path.join(__dirname, 'src'), (filepath) => {
  if (filepath.endsWith('.js') || filepath.endsWith('.jsx')) {
    let content = fs.readFileSync(filepath, 'utf8');
    
    // Replace SwiperCore with separated imports
    const regex = /import\s+SwiperCore\s*,\s*\{\s*([^}]+)\s*\}\s*from\s*["']swiper["']/g;
    let modified = false;
    
    content = content.replace(regex, (match, modules) => {
      modified = true;
      return `import SwiperCore from "swiper";\nimport { ${modules.trim()} } from "swiper/modules"`;
    });
    
    if (modified) {
      fs.writeFileSync(filepath, content, 'utf8');
      console.log(`Updated ${filepath}`);
    }
  }
});
