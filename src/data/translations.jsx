export const content = {
  es: {
    hero: {
      subtitle: 'Project Manager · Digital Transformation · Head of Data Platform',
      bio: 'Analizo datos y optimizo procesos para transformar la incertidumbre en resultados medibles.',
      highlights: [
        { key: 'data', label: 'Head of Data Platform' },
        { key: 'erp', label: 'Implantación ERP Multi-compañía' },
        { key: 'automation', label: 'Automatización de Procesos' },
        { key: 'leadership', label: 'Liderazgo & Gestión del Cambio' }
      ]
    },
    footer: {
      builtWith: (year) => `© ${year} Pablo Carrasco. Construido con React & Café.`
    },
    terminal: {
      userHost: 'pablo_carrasco — -zsh — 80x24',
      systemTitle: (year) => `Sistema Pablo Carrasco [Versión 1.0.0]\n(c) ${year} Pablo Carrasco. Todos los derechos reservados.`,
      helpHint: 'Escribe help para ver los comandos disponibles.',
      errorCommandNotFound: (cmd) => `comando no encontrado: ${cmd}. Escribe 'help' para ver los comandos disponibles.`,
      langSwitched: (lang) => lang === 'en' ? 'Language switched to English.' : 'Idioma cambiado a español.'
    }
  },
  en: {
    hero: {
      subtitle: 'Project Manager · Digital Transformation · Head of Data Platform',
      bio: 'Analyzing data and optimizing workflows to turn uncertainty into measurable business outcomes.',
      highlights: [
        { key: 'data', label: 'Head of Data Platform' },
        { key: 'erp', label: 'Multi-Company ERP Rollout' },
        { key: 'automation', label: 'Process Automation' },
        { key: 'leadership', label: 'Leadership & Change Management' }
      ]
    },
    footer: {
      builtWith: (year) => `© ${year} Pablo Carrasco. Built with React & Coffee.`
    },
    terminal: {
      userHost: 'pablo_carrasco — -zsh — 80x24',
      systemTitle: (year) => `Pablo Carrasco System [Version 1.0.0]\n(c) ${year} Pablo Carrasco. All rights reserved.`,
      helpHint: "Type help to see available commands.",
      errorCommandNotFound: (cmd) => `command not found: ${cmd}. Type 'help' to see available commands.`,
      langSwitched: (lang) => lang === 'en' ? 'Language switched to English.' : 'Idioma cambiado a español.'
    }
  }
};
