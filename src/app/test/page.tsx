import Link from 'next/link';
import CustomGraph from '../CustomGraph';

const Model = {
  findAll: 'findAll',
  save: 'save',
  load: 'load',
};

const User = {
  id: 'user',
  createdAt: '',
  serialize: 'serialize',
};

const Department = {
  id: 'department',
  createdAt: '',
  serialize: 'serialize',
};

const Employee = {
  id: 'employee',
  createdAt: '',
  serialize: 'serialize',
}

const json = {
  ...Model,
  user: User,
  department: Department,
  employee: Employee,
}

export default async function Test() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Link href={'/'}>back to home</Link>
      <CustomGraph data={json} />
    </main>
  )
}
