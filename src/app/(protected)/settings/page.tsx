import { auth } from '@/auth'
import { AccountCard } from '@/components/settings/card-account'
import { CardGeneral } from '@/components/settings/card-general'
import { getUserById } from '@/server/data/user'

export default async function SettingsPage() {
  const session = await auth()
  const user = await getUserById({ id: session?.user.id })

  return (
    <div className='container flex flex-col gap-y-4 mt-4'>
      <section>
        <CardGeneral user={user} />
      </section>
      <section>
        <AccountCard />
      </section>
    </div>
  )
}
