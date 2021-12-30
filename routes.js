const routes = [
  {
    method: 'GET',
    path: '/',
    handler: () => 'Homepage',
  },
  {
    method: '*',
    path: '/',
    handler: () => 'Halaman tidak dapat diakses dengan method tersebut',
  },
  {
    method: 'GET',
    path: '/about',
    handler: () => 'About page',
  },
  {
    method: '*',
    path: '/about',
    handler: () => 'Halaman tidak dapat diakses dengan method tersebut',
  },
  {
    method: 'GET',
    path: '/users/{username?}',
    handler: (request) => {
      const { username = 'stranger' } = request.params
      const { lang } = request.query

      if (lang === 'id') {
        return `Halo ${username}`
      } if (lang === 'eng') {
        return `Hello ${username}`
      } if (lang === 'jav') {
        return `Kulo nuwun ${username}`
      }

      return `Assalamualaikum ${username}`
    },
  },
  {
    method: 'POST',
    path: '/login',
    handler: (request, h) => {
      const response = h.response('hai')
      response.type('text/plain')
      response.code(201)
      return response
    },
  },
  {
    method: '*',
    path: '/{any*}',
    handler: () => 'Halaman tidak ditemukan',
  },
]

module.exports = routes
