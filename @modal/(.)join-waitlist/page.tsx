import { redirect } from 'next/navigation';

// import JoinWaitlist from '@/components/auth/JoinWaitlist';
import { appLaunchMode } from '@/lib/env';
import JoinWaitList from '@/components/join-waiting-list';

export default async function JoinWaitlisPageIntercept() {
  const isBeta = appLaunchMode === 'beta';
  if (!isBeta) return redirect('/signup');

  return <JoinWaitList />;
}
