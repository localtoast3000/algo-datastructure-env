const fs = require('fs');
const path = require('path');
const tempPath = path.join(__dirname, 'temp.json');
const templatesPath = path.join(__dirname, 'templates');
const incompleteAlgosPath = path.join(__dirname, '..', '..', 'algorithms', 'incomplete');
const errorHandler = (err) => console.log(err);
const uid = require('uid2');

module.exports = {
  get variables() {
    if (!fileExists(tempPath)) throw new Error('No variables defined on template');
    return parseJsonFile(tempPath);
  },
  set variable(newVar) {
    ensureFileExists(tempPath);
    editTemplateVariables(tempPath, newVar);
  },
  create(type) {
    ensureFileExists(tempPath);
    const templateVars = parseJsonFile(tempPath);
    const template = injectTemplateVariables(
      path.join(templatesPath, `${type}.txt`),
      templateVars
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

process.on('exit', () => fileExists(tempPath) && fs.unlinkSync(tempPath, errorHandler));

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

function editTemplateVariables(tempPath, newVar) {
  const currentVars = parseJsonFile(tempPath);
  fs.writeFileSync(
    tempPath,
    JSON.stringify({ ...currentVars, ...newVar }),
    { encoding: 'utf-8' },
    errorHandler
  );
}

function fileExists(path) {
  return fs.existsSync(path);
}

function injectTemplateVariables(templatePath, vars) {
  let template = parseTextFile(templatePath, vars);
  Object.entries(vars).map(
    ([key, val]) => (template = template.replace(`<%>${key}</%>`, `${val}`))
  );
  return template;
}

function ensureFileExists(path, initialData = {}) {
  !fs.existsSync(path) &&
    fs.writeFileSync(path, JSON.stringify(initialData), errorHandler);
}

function parseJsonFile(path) {
  const splitPath = path.split('.');
  if (splitPath[splitPath.length - 1] !== 'json')
    throw new Error('File must have ".json" extension ');
  if (!fs.existsSync(path)) throw new Error(`${path} - does not exist`);
  const jsonData = fs.readFileSync(path, 'utf-8');
  return JSON.parse(jsonData);
}

function parseTextFile(path) {
  const splitPath = path.split('.');
  if (splitPath[splitPath.length - 1] !== 'txt')
    throw new Error('File must have ".txt" extension ');
  if (!fs.existsSync(path)) throw new Error(`${path} - does not exist`);
  return fs.readFileSync(path, 'utf-8');
}

function toCamelCase(str) {
  return str
    .toLowerCase()
    .replace(/[^a-zA-Z0-9/w/]+(.)/g, (_, chr) => chr.toUpperCase())
    .replace(/[\s\W_*]/g, '');
}
