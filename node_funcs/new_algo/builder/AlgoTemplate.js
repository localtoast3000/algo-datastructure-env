const fs = require('fs');
const path = require('path');
const tempPath = path.join(__dirname, 'temp.json');
const errorHandler = (err) => console.log(err);
const uid = require('uid2');

module.exports = {
  get variables() {
    if (!fs.existsSync(tempPath)) throw new Error('No variables defined on template');
    return JSON.parse(fs.readFileSync(tempPath, 'utf-8'));
  },
  set variable(v) {
    if (!fs.existsSync(tempPath))
      fs.writeFileSync(tempPath, JSON.stringify({}), errorHandler);
    const currentVars = fs.readFileSync(tempPath, 'utf-8');
    fs.writeFileSync(
      tempPath,
      JSON.stringify({ ...JSON.parse(currentVars), ...v }),
      { encoding: 'utf-8' },
      errorHandler
    );
  },
  create(type) {
    if (!fs.existsSync(tempPath))
      fs.writeFileSync(tempPath, JSON.stringify({}), errorHandler);
    const templateVars = JSON.parse(fs.readFileSync(tempPath, 'utf-8'));
    let template = fs.readFileSync(
      path.join(__dirname, '..', 'templates', `${type}.txt`),
      'utf-8'
    );
    Object.entries(templateVars).map(
      ([key, val]) => (template = template.replace(`<%>${key}</%>`, `${val}`))
    );
    const incompleteAlgosPath = path.join(
      __dirname,
      '..',
      '..',
      '..',
      'algorithms',
      'incomplete'
    );

    const filename = templateVars.title
      ? `${toCamelCase(templateVars.title)}.ts`
      : `algo-${uid(8)}.ts`;

    switch (templateVars.difficulty.toLowerCase()) {
      case 'custom':
        handleFileCreate(incompleteAlgosPath, 'custom', filename, template);
        break;
      case 'hard':
        handleFileCreate(incompleteAlgosPath, 'hard', filename, template);
        break;
      case 'medium':
        handleFileCreate(incompleteAlgosPath, 'medium', filename, template);
        break;
      case 'easy':
        handleFileCreate(incompleteAlgosPath, 'easy', filename, template);
        break;
      default:
        handleFileCreate(incompleteAlgosPath, 'custom', filename, template);
    }
  },
};

process.on(
  'exit',
  () => fs.existsSync(tempPath) && fs.unlinkSync(tempPath, errorHandler)
);

function handleFileCreate(incompleteAlgosPath, current, filename, template) {
  if (fs.existsSync(path.join(incompleteAlgosPath, current, filename)))
    fs.writeFileSync(
      path.join(incompleteAlgosPath, current, `${filename.split('.ts')[0]}-${uid(8)}.ts`),
      template,
      errorHandler
    );
  else
    fs.writeFileSync(
      path.join(incompleteAlgosPath, current, filename),
      template,
      errorHandler
    );
}

function toCamelCase(str) {
  return str
    .toLowerCase()
    .replace(/[^a-zA-Z0-9/w/]+(.)/g, (_, chr) => chr.toUpperCase())
    .replace(/[\s\W_*]/g, '');
}
