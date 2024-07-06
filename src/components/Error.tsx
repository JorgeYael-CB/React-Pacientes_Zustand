

export const Error = ( {children}: {children: React.ReactNode} ) => {
  return (
    <p className='text-center my-3 bg-red-600 font-semibold uppercase p-2 text-sm text-white'>
      { children }
    </p>
  )
}


