import { Redirect } from 'expo-router';

export default function Index() {
  // You might want to check if the user has already seen the onboarding screens
  // and redirect them to login or signup accordingly
  return <Redirect href="/signup" />;
}

