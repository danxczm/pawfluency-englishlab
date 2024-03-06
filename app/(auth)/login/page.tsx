'use client';

import Link from 'next/link';
import { logIn } from '../../actions';
import { useFormState } from 'react-dom';

const Login = () => {
  const [state, formAction] = useFormState<any, FormData>(logIn, undefined);

  return (
    <section>
      <div className='mt-10 flex flex-col items-center justify-center'>
        <div className='w-full max-w-md rounded-lg bg-white shadow'>
          <div className='space-y-6 p-10'>
            <h1 className='text-2xl font-bold leading-tight tracking-tight text-gray-900'>
              Sign in to your account
            </h1>
            <form className='space-y-6' action={formAction}>
              <div>
                <label htmlFor='email' className='mb-2 block text-sm font-medium text-gray-900'>
                  Your email
                </label>
                <input
                  type='email'
                  name='email'
                  id='email'
                  className={`focus:ring-primary-600 focus:border-primary-600 block w-full rounded-lg border ${state?.error ? 'border-red-300' : 'border-gray-300'} bg-gray-50 p-2.5 text-gray-900 sm:text-sm`}
                  placeholder='name@company.com'
                  required
                />
              </div>
              <div>
                <label htmlFor='password' className='mb-2 block text-sm font-medium text-gray-900'>
                  Password
                </label>
                <input
                  type='password'
                  name='password'
                  id='password'
                  placeholder='••••••••'
                  className={`focus:ring-primary-600 focus:border-primary-600 block w-full rounded-lg border ${state?.error ? 'border-red-300' : 'border-gray-300'} bg-gray-50 p-2.5 text-gray-900 sm:text-sm`}
                  required
                />
              </div>
              <button
                type='submit'
                className='w-full rounded-lg bg-gray-600 px-5 py-2.5 text-center text-sm font-medium text-white'
              >
                Sign in
              </button>
            </form>
            <div className='relative'>
              {state?.error && (
                <p className='absolute -top-5 text-sm font-light text-red-500'>{state.error}</p>
              )}
            </div>

            <p className='text-sm font-light text-gray-500'>
              Don’t have an account yet?{' '}
              <Link href='/registration' className='text-primary-600 font-medium hover:underline'>
                Sign up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
