export const exploreData = [
    {
        id: 1,
        title: 'React Dashboard UI',
        author: 'judhamaygustya',
        likes: 124,
        category: 'Frontend',
        tags: ['react', 'tailwind', 'dashboard'],
        description: 'A complete glassmorphism dashboard layout built with React and Tailwind CSS.',
        code: `import React from 'react';\n\nconst Dashboard = () => {\n  return (\n    <div className="min-h-screen bg-[#0a0a0c] text-white p-8">\n      <h1 className="text-3xl font-bold">Dashboard</h1>\n      {/* Add your widgets here */}\n    </div>\n  );\n};\n\nexport default Dashboard;`
    },
    {
        id: 2,
        title: 'Python AST Parser Tool',
        author: 'aura_sys',
        likes: 89,
        category: 'Backend',
        tags: ['python', 'ast', 'compiler'],
        description: 'A fast Python utility to parse code text into Abstract Syntax Trees for optimization workflows.',
        code: `import ast\n\ndef parse_code(code):\n    """Parses Python source code into an AST pattern node."""\n    try:\n        tree = ast.parse(code)\n        print(ast.dump(tree, indent=4))\n        return tree\n    except SyntaxError as e:\n        print(f"Error parsing code: {e}")\n        return None\n\nif __name__ == "__main__":\n    code_snippet = "x = 10 * 20"\n    parse_code(code_snippet)`
    },
    {
        id: 3,
        title: 'Auth Service Template',
        author: 'dev_ninja',
        likes: 256,
        category: 'Microservice',
        tags: ['node', 'express', 'jwt'],
        description: 'A complete Node.js / Express authentication boilerplate with JWT integration and password hashing.',
        code: `const express = require('express');\nconst jwt = require('jsonwebtoken');\nconst bcrypt = require('bcryptjs');\nconst router = express.Router();\n\nrouter.post('/login', async (req, res) => {\n  const { email, password } = req.body;\n  // Simulate DB user fetch\n  const user = { id: 1, email: 'admin@local', passwordHash: '...' };\n  \n  const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });\n  res.json({ token });\n});\n\nmodule.exports = router;`
    },
    {
        id: 4,
        title: 'Dark Mode Switcher',
        author: 'ui_wizard',
        likes: 67,
        category: 'Component',
        tags: ['css', 'hook', 'theme'],
        description: 'A drop-in React hook for managing dark bounds across standard browser localStorage ecosystems.',
        code: `import { useEffect, useState } from 'react';\n\nexport const useDarkMode = () => {\n  const [theme, setTheme] = useState(localStorage.theme || 'dark');\n  const colorTheme = theme === 'dark' ? 'light' : 'dark';\n\n  useEffect(() => {\n    const root = window.document.documentElement;\n    root.classList.remove(colorTheme);\n    root.classList.add(theme);\n    localStorage.setItem('theme', theme);\n  }, [theme, colorTheme]);\n\n  return [colorTheme, setTheme];\n};`
    },
    {
        id: 5,
        title: 'Data Processing Script',
        author: 'data_cruncher',
        likes: 112,
        category: 'Utility',
        tags: ['python', 'pandas'],
        description: 'A Pandas transformation function used to flatten complex JSON nested structures into dataframe records.',
        code: `import pandas as pd\nimport json\n\ndef flatten_json(nested_json):\n    """Flattens a JSON object with nested keys into a single depth dict."""\n    out = {}\n    def flatten(x, name=''):\n        if type(x) is dict:\n            for a in x:\n                flatten(x[a], name + a + '_')\n        elif type(x) is list:\n            i = 0\n            for a in x:\n                flatten(a, name + str(i) + '_')\n                i += 1\n        else:\n            out[name[:-1]] = x\n\n    flatten(nested_json)\n    return pd.Series(out)\n`
    },
    {
        id: 6,
        title: 'Framer Motion Overlays',
        author: 'motion_freak',
        likes: 198,
        category: 'Animation',
        tags: ['framer-motion', 'react'],
        description: 'Sleek Framer Motion pop-up overlay configurations to mimic Mac OS dock popover features.',
        code: `import { motion, AnimatePresence } from 'framer-motion';\n\nconst OverlayDialog = ({ isOpen, onClose, children }) => (\n  <AnimatePresence>\n    {isOpen && (\n      <motion.div\n        initial={{ opacity: 0 }}\n        animate={{ opacity: 1 }}\n        exit={{ opacity: 0 }}\n        onClick={onClose}\n        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center"\n      >\n        <motion.div\n          initial={{ scale: 0.95, opacity: 0, y: 20 }}\n          animate={{ scale: 1, opacity: 1, y: 0 }}\n          exit={{ scale: 0.95, opacity: 0, y: 20 }}\n          onClick={e => e.stopPropagation()}\n          className="bg-[#0f0f13] border border-[#2a2a35] p-6 rounded-2xl shadow-2xl"\n        >\n          {children}\n        </motion.div>\n      </motion.div>\n    )}\n  </AnimatePresence>\n);`
    },
];
