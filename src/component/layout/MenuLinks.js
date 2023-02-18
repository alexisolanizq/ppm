const MenuLinks = [
  {
    id: 'tus-notificaciones',
    name: 'Tus notificaciones',
    menu: [
      { 
        id: 'avisos',
        link: '/avisos',
        name: 'Avisos'
      },
      {
        id: 'recordatorios',
        link: '/recordatorios',
        name: 'Recordatorios',
      },
      {
        id: 'notas-renovar',
        link: '/',
        name: 'Notas por renovar'
      }
    ]
  },
  {
    id: 'control',
    name: 'Control',
    menu: [
      {
        id: 'reportes',
        name: 'Reportes',
        submenu: [
          { 
            id: 'lista-reportes-clientes',
            link: '/',
            name: 'Lista Reportes clientes'
          },
          { 
            id: 'oficios-registrados',
            link: '/',
            name: 'Oficios registrados'
          }
        ]
      },
      {
        id: 'escritos',
        name: 'Escritos',
        submenu: [
          {
            id: 'lista-escritos-disponibles',
            name: 'Lista escritos disponibles',
            link: '/'
          },
          {
            id: 'lista-escritos-generados',
            name: 'Lista escritos generados',
            link: '/'
          },
          {
            id: 'lista-de-escritos',
            name: 'Lista de escritos',
            link: '/'
          }
        ]
      }
    ]
  },
  {
    id: 'entidades',
    name: 'Clientes / Titulares',
    menu: [
      { 
        id: 'clientes',
        link: '/cliente',
        name: 'Clientes'
      },
      {
        id: 'titulares',
        link: '/titulares',
        name: 'Titulares',
      }
    ]
  },
  {
    id: 'oficios',
    name: 'Oficios',
    menu: [
      { 
        id: 'manual',
        name: 'Manual',
        submenu: [
          {
            id: 'cargar-oficios',
            name: 'Cargar oficios',
            link: '/'
          },
          {
            id: 'registrar-oficios-manual',
            name: 'Registrar oficios',
            link: '/'
          }
        ]
      },
      {
        id: 'automatico',
        name: 'Automático',
        submenu: [
          {
            id: 'registrar-oficios',
            name: 'Registrar oficios',
            link: '/'
          }
        ]
      }
    ]
  },
  {
    id: 'tramite',
    name: 'Trámite',
    menu: [
      {
        id: 'nuevo-tramite',
        name: 'Nuevo trámite',
        link: '/'
      },
      { 
        id: 'listar-tramites',
        name: 'Listar',
        submenu: [
          {
            id: 'tramites',
            name: 'Trámites',
            link: '/'
          },
          {
            id: 'vencimientos',
            name: 'Vencimientos',
            link: '/'
          },
          {
            id: 'anualidades',
            name: 'Anualidades',
            link: '/'
          },
          {
            id: 'nuevas-solicitudes',
            name: 'Nuevas solicitudes',
            link: '/'
          },
          {
            id: 'numeros-solicitud',
            name: 'Números de solicitud',
            link: '/'
          },
          {
            id: 'numeros-patente',
            name: 'Números patente',
            link: '/'
          },
          {
            id: 'titulos',
            name: 'Títulos',
            link: '/'
          },
          {
            id: 'acuses-recibo',
            name: 'Acuses de recibo',
            link: '/'
          }
        ]
      }
    ]
  },
  {
    id: 'pagos',
    name: 'Pagos',
    menu: [
      { 
        id: 'lista-pagos-impi',
        link: '/pagos',
        name: 'Lista de pagos IMPI'
      }
    ]
  },
  {
    id: 'plataformas',
    name: 'Plataformas',
    width: 180,
    menu: [
      { 
        id: 'mindbreeze',
        name: 'Mindbreeze',
        submenu: [
          {
            id: 'consultar',
            name: 'Consultar',
            link: '/'
          },
          {
            id: 'cargar-archivos',
            name: 'Cargar archivos',
            link: '/'
          }
        ]
      },
      {
        id: 'evirtual',
        name: 'Evirtual',
        link: '/'
      },
      {
        id: 'repositorio-oficios',
        name: 'Repositorios de oficios',
        link: '/'
      },
      {
        id: 'gaceta',
        name: 'Gaceta',
        link: '/'
      }
    ]
  },
  {
    id: 'facturas',
    name: 'Facturas',
    width: 220,
    menu: [
      { 
        id: 'ver-lista-facturas-pendientes',
        link: '/',
        name: 'Ver lista de facturas pendientes'
      },
      { 
        id: 'facturas-timbrar',
        link: '/',
        name: 'Facturas para timbrar'
      }
    ]
  },
  {
    id: 'mas',
    name: 'Más',
    isIcon: true,
    menu: [
      { 
        id: 'catalogos',
        link: '/catalogos',
        name: 'Cátalogos'
      },
      { 
        id: 'vacaciones-faltas',
        link: '/',
        name: 'Vacaciones y faltas'
      },
      { 
        id: 'calendario',
        link: '/',
        name: 'Calendario'
      }
    ]
  },
]

export default MenuLinks