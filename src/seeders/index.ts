import { connect } from '../database/db.config'

import seedUsers from './user.seed'

connect().then(async () => {
  await seedUsers()
  process.exit()
})
