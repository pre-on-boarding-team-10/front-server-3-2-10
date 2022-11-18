const jsonServer = require('json-server')

const auth = require('json-server-auth')
// const cors = require('cors')

const app = jsonServer.create()
const router = jsonServer.router('db.json')

app.db = router.db
const rules = auth.rewriter({
  users: 660,
  userSetting: 660,
  accounts: 660,
})

// let corsOption = {
//   origin:
//     process.env.NODE_ENV === 'production' ? 'https://pre-onboarding-7th-3-2-10.vercel.app' : 'http://localhost:3000',
//   credentials: true,

// }

// app.use(cors(corsOption))
// app.options('*', cors())

app.use(rules)
app.use(auth)
app.use(router)

app.listen(4000, () => {
  console.log('JSON Server is running...')
})
