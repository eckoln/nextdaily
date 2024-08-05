'use server'

import { signIn as _signIn, signOut as _signOut } from '@/lib/auth'

export async function signInWithGithub() {
  return await _signIn('github')
}

export async function signOut() {
  return await _signOut()
}
